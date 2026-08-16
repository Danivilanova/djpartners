/**
 * Cliente mínimo de HubSpot para las Pages Functions (app "DJP Leads",
 * token estático en env.HUBSPOT_TOKEN). Portal EU → api-eu1.hubapi.com.
 *
 * Flujo de lead: upsert del contacto por email + deal en el stage "Leads"
 * del pipeline de ventas, guardando el gclid para conversiones offline.
 */

const HS_BASE = 'https://api-eu1.hubapi.com';

// Pipeline "default" del portal; primer stage = "Leads".
const DEAL_PIPELINE = 'default';
const DEAL_STAGE = 'appointmentscheduled';

export interface LeadInput {
  email: string;
  name?: string;
  phone?: string;
  message?: string;
  gclid?: string;
  /** Origen del lead para el nombre del deal (p.ej. "home", "consultation"). */
  source: string;
  /** Stage inicial del deal; por defecto "Leads". Cal usa "Meetingbook". */
  dealstage?: string;
  /**
   * Clave de deduplicación (p.ej. el uid de la reserva de Cal). Se incrusta
   * entre corchetes en el dealname y se busca antes de crear, para que los
   * reintentos del webhook no generen deals duplicados. Debe ser un token
   * simple (letras/dígitos/-/_): va tal cual a la query de búsqueda.
   */
  dedupeKey?: string;
}

/** Resultado de `pushLeadToHubSpot`: nunca lanza, el llamante decide qué hacer. */
export type LeadResult =
  /** `duplicate` = ya existía un deal con la misma dedupeKey, no se creó nada. */
  | { ok: true; duplicate: boolean }
  | { ok: false; error: string };

/** Error de la API con el status y el cuerpo, para poder loggearlos en el llamante. */
class HubSpotError extends Error {
  constructor(readonly status: number, readonly body: string, message: string) {
    super(message);
    this.name = 'HubSpotError';
  }
}

async function hs(token: string, path: string, method: string, body?: unknown) {
  const res = await fetch(`${HS_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    // El mensaje conserva el formato que usa upsertContact para leer "Existing ID".
    throw new HubSpotError(res.status, text, `HubSpot ${method} ${path} → ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json() as Promise<Record<string, unknown>>;
}

/** Crea o actualiza el contacto por email y devuelve su id. */
async function upsertContact(token: string, lead: LeadInput): Promise<string> {
  const [firstname, ...rest] = (lead.name ?? '').trim().split(/\s+/);
  const properties: Record<string, string> = { email: lead.email };
  if (firstname) properties.firstname = firstname;
  if (rest.length) properties.lastname = rest.join(' ');
  if (lead.phone) properties.phone = lead.phone;
  if (lead.gclid) properties.gclid = lead.gclid;

  try {
    const created = await hs(token, '/crm/v3/objects/contacts', 'POST', { properties });
    return String(created.id);
  } catch (e) {
    // 409 = ya existe: HubSpot incluye "Existing ID: <id>" en el mensaje.
    const match = e instanceof Error ? e.message.match(/Existing ID: (\d+)/) : null;
    if (!match) throw e;
    await hs(token, `/crm/v3/objects/contacts/${match[1]}`, 'PATCH', { properties });
    return match[1];
  }
}

/** Nombre del deal; con dedupeKey queda el uid visible y buscable al final. */
function dealNameFor(lead: LeadInput): string {
  const base = `Lead web – ${lead.name || lead.email} (${lead.source})`;
  return lead.dedupeKey ? `${base} [${lead.dedupeKey}]` : base;
}

/**
 * ¿Ya hay un deal cuyo nombre contiene esta dedupeKey? Tolerante a fallos:
 * si la búsqueda peta devuelve false y se crea igualmente (mejor un duplicado
 * que un lead perdido). Ojo: el índice de búsqueda de HubSpot tarda unos
 * segundos en ver un deal recién creado, así que dos reintentos muy seguidos
 * pueden colarse igualmente.
 */
async function dealExists(token: string, dedupeKey: string): Promise<boolean> {
  try {
    const res = await hs(token, '/crm/v3/objects/deals/search', 'POST', {
      filterGroups: [
        { filters: [{ propertyName: 'dealname', operator: 'CONTAINS_TOKEN', value: dedupeKey }] },
      ],
      properties: ['dealname'],
      limit: 1,
    });
    return Array.isArray(res.results) && res.results.length > 0;
  } catch (e) {
    logHubSpotError('búsqueda de duplicados', e);
    return false;
  }
}

/** Crea el deal en el stage inicial, asociado al contacto (assoc. 3 = deal→contact). */
async function createDeal(token: string, contactId: string, lead: LeadInput): Promise<void> {
  await hs(token, '/crm/v3/objects/deals', 'POST', {
    properties: {
      dealname: dealNameFor(lead),
      pipeline: DEAL_PIPELINE,
      dealstage: lead.dealstage ?? DEAL_STAGE,
      ...(lead.gclid ? { description: `gclid: ${lead.gclid}` } : {}),
    },
    associations: [
      {
        to: { id: contactId },
        types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }],
      },
    ],
  });
}

/** Loggea status + cuerpo de la respuesta de HubSpot (o el error genérico). */
function logHubSpotError(context: string, e: unknown): string {
  if (e instanceof HubSpotError) {
    console.error(`[hubspot] ${context}: HTTP ${e.status}`, e.body.slice(0, 1000));
    return `HTTP ${e.status}: ${e.body.slice(0, 300)}`;
  }
  const message = e instanceof Error ? e.message : String(e);
  console.error(`[hubspot] ${context}:`, message);
  return message;
}

/**
 * Registra el lead en HubSpot (contacto + deal). Nunca lanza: el alta en el
 * CRM no debe romper el envío del formulario (el email por Resend es la
 * fuente de verdad para no perder el lead). Devuelve el resultado para que el
 * llamante pueda avisar si algo falló en vez de tragárselo en silencio.
 */
export async function pushLeadToHubSpot(token: string | undefined, lead: LeadInput): Promise<LeadResult> {
  if (!token) {
    // Entorno sin configurar (p.ej. previews): no es un fallo de red pero el
    // lead tampoco entra en el CRM, así que se reporta como no-ok.
    console.error('[hubspot] HUBSPOT_TOKEN ausente: lead no registrado');
    return { ok: false, error: 'HUBSPOT_TOKEN ausente' };
  }
  try {
    if (lead.dedupeKey && (await dealExists(token, lead.dedupeKey))) {
      return { ok: true, duplicate: true };
    }
    const contactId = await upsertContact(token, lead);
    await createDeal(token, contactId, lead);
    return { ok: true, duplicate: false };
  } catch (e) {
    return { ok: false, error: logHubSpotError('lead no registrado', e) };
  }
}
