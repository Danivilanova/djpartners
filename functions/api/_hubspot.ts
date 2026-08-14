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
    throw new Error(`HubSpot ${method} ${path} → ${res.status}: ${text.slice(0, 300)}`);
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

/** Crea el deal en el stage inicial, asociado al contacto (assoc. 3 = deal→contact). */
async function createDeal(token: string, contactId: string, lead: LeadInput): Promise<void> {
  const dealname = `Lead web – ${lead.name || lead.email} (${lead.source})`;
  await hs(token, '/crm/v3/objects/deals', 'POST', {
    properties: {
      dealname,
      pipeline: DEAL_PIPELINE,
      dealstage: DEAL_STAGE,
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

/**
 * Registra el lead en HubSpot (contacto + deal). Nunca lanza: el alta en el
 * CRM no debe romper el envío del formulario (el email por Resend es la
 * fuente de verdad para no perder el lead).
 */
export async function pushLeadToHubSpot(token: string | undefined, lead: LeadInput): Promise<void> {
  if (!token) return; // entorno sin configurar (p.ej. previews)
  try {
    const contactId = await upsertContact(token, lead);
    await createDeal(token, contactId, lead);
  } catch (e) {
    console.error('[hubspot] lead no registrado:', e instanceof Error ? e.message : e);
  }
}
