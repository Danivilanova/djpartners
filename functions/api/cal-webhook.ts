import { pushLeadToHubSpot } from './_hubspot';
import { sendEmail, emailHtml, row } from './_resend';

interface Env { HUBSPOT_TOKEN?: string; CAL_WEBHOOK_SECRET?: string; RESEND_API_KEY?: string }

/**
 * Webhook de Cal.com (evento BOOKING_CREATED): cada reunión agendada entra en
 * HubSpot como contacto + deal en el stage "Meetingbook" (una reunión ya está
 * más avanzada que un lead frío). El gclid llega en metadata si el embed lo
 * adjuntó (sólo con consentimiento).
 *
 * Cal firma el cuerpo con HMAC-SHA256 (cabecera X-Cal-Signature-256) usando el
 * secreto configurado en el webhook; debe coincidir con env.CAL_WEBHOOK_SECRET.
 * Sin secreto configurado el endpoint responde 500: nunca se procesa una
 * petición sin verificar la firma (el endpoint es público).
 */

const DEAL_STAGE_MEETING = 'decisionmakerboughtin'; // "Meetingbook"

/** Cal manda el teléfono en una de estas claves según cómo esté montado el form. */
const PHONE_KEYS = ['attendeePhoneNumber', 'phone', 'smsReminderNumber'] as const;

/** Formato de gclid de Google; cualquier otra cosa se descarta (no va a HubSpot). */
const GCLID_RE = /^[\w.-]{1,200}$/;

/** El uid va al dealname y a la query de búsqueda: sólo token simple. */
const UID_RE = /^[\w-]{1,64}$/;

/**
 * Comparación en tiempo constante: la longitud sí se filtra (el digest es de
 * tamaño fijo), pero el contenido se compara entero con XOR acumulado para no
 * dar pistas por dónde deja de coincidir una firma forjada.
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function isValidSignature(secret: string, body: string, signature: string | null): Promise<boolean> {
  if (!signature) return false;
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'],
  );
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(body));
  const expected = [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, '0')).join('');
  return timingSafeEqual(expected, signature.trim().toLowerCase());
}

/**
 * Las responses de Cal llegan como { label, value }, pero algunos campos (y
 * los payloads antiguos) traen el valor plano. Devuelve el valor en bruto.
 */
function responseValue(responses: Record<string, unknown> | undefined, key: string): unknown {
  const entry = responses?.[key];
  if (entry && typeof entry === 'object' && 'value' in entry) {
    return (entry as { value?: unknown }).value;
  }
  return entry;
}

/**
 * Normaliza a E.164 para que HubSpot no guarde formatos mezclados: si ya viene
 * con prefijo internacional se respeta el '+' (quitando separadores, que E.164
 * no admite); un móvil/fijo español de 9 dígitos (6/7/8/9) se prefija con +34;
 * el resto se manda sólo con sus dígitos.
 */
function toE164(raw: string): string {
  const trimmed = raw.trim();
  const digits = trimmed.replace(/\D/g, '');
  if (trimmed.startsWith('+')) return `+${digits}`;
  return /^[6-9]\d{8}$/.test(digits) ? `+34${digits}` : digits;
}

function extractPhone(responses: Record<string, unknown> | undefined): string | undefined {
  for (const key of PHONE_KEYS) {
    const value = responseValue(responses, key);
    if (typeof value === 'string' && value.trim()) return toE164(value);
  }
  return undefined;
}

/**
 * El campo name de Cal es { firstName, lastName } cuando el form está partido
 * en dos casillas; String() sobre ese objeto daría "[object Object]".
 */
function extractName(attendeeName: string | undefined, responses: Record<string, unknown> | undefined): string {
  if (attendeeName?.trim()) return attendeeName.trim();
  const value = responseValue(responses, 'name');
  if (value && typeof value === 'object') {
    const { firstName, lastName } = value as { firstName?: unknown; lastName?: unknown };
    return [firstName, lastName]
      .filter((part): part is string => typeof part === 'string' && part.trim() !== '')
      .join(' ')
      .trim();
  }
  return value == null ? '' : String(value);
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // Fail-closed: sin secreto no hay forma de distinguir a Cal de cualquiera.
  if (!env.CAL_WEBHOOK_SECRET) {
    console.error('[cal-webhook] CAL_WEBHOOK_SECRET no configurado: petición rechazada sin procesar');
    return new Response('misconfigured', { status: 500 });
  }

  const body = await request.text();
  const ok = await isValidSignature(env.CAL_WEBHOOK_SECRET, body, request.headers.get('X-Cal-Signature-256'));
  if (!ok) return new Response('invalid signature', { status: 401 });

  try {
    const event = JSON.parse(body) as {
      triggerEvent?: string;
      payload?: {
        uid?: string;
        bookingId?: number | string;
        eventTitle?: string;
        startTime?: string;
        attendees?: Array<{ email?: string; name?: string }>;
        responses?: Record<string, unknown>;
        metadata?: Record<string, unknown>;
      };
    };

    if (event.triggerEvent !== 'BOOKING_CREATED') return new Response('ignored', { status: 200 });

    const p = event.payload ?? {};
    const attendee = p.attendees?.[0] ?? {};
    const emailValue = responseValue(p.responses, 'email');
    const email = attendee.email ?? (typeof emailValue === 'string' ? emailValue : '');
    if (!email) return new Response('no attendee email', { status: 200 });

    const name = extractName(attendee.name, p.responses);
    const phone = extractPhone(p.responses);

    const rawGclid = p.metadata?.gclid;
    const gclid = typeof rawGclid === 'string' && GCLID_RE.test(rawGclid) ? rawGclid : undefined;
    if (rawGclid && !gclid) console.warn('[cal-webhook] gclid con formato inesperado, descartado');

    // uid de la reserva: evita que un reintento de Cal cree un deal duplicado.
    const rawUid = p.uid ?? (p.bookingId == null ? undefined : String(p.bookingId));
    const uid = typeof rawUid === 'string' && UID_RE.test(rawUid) ? rawUid : undefined;

    const result = await pushLeadToHubSpot(env.HUBSPOT_TOKEN, {
      email,
      name,
      phone,
      gclid,
      source: `cal:${p.eventTitle ?? 'reunión'}`,
      dealstage: DEAL_STAGE_MEETING,
      dedupeKey: uid,
    });

    if (result.ok) return new Response(result.duplicate ? 'duplicate' : 'ok', { status: 200 });

    // HubSpot falló: se avisa por email para que la reserva no se pierda en
    // silencio (se responde 200 igualmente; reintentar sólo duplicaría avisos).
    console.error('[cal-webhook] reserva no registrada en HubSpot:', result.error);
    if (env.RESEND_API_KEY) {
      try {
        await sendEmail(env.RESEND_API_KEY, {
          subject: `Aviso: reserva de Cal.com no registrada en HubSpot – ${name || email}`,
          html: emailHtml('Reserva sin registrar en HubSpot (alta manual necesaria)',
            row('Nombre', name) + row('Email', email) + row('Teléfono', phone) +
            row('Reunión', p.eventTitle) + row('Inicio', p.startTime) +
            row('UID reserva', uid) + row('Error', result.error)),
        });
      } catch (mailError) {
        console.error('[cal-webhook] aviso por email fallido:', mailError instanceof Error ? mailError.message : mailError);
      }
    } else {
      console.error('[cal-webhook] RESEND_API_KEY no configurada: sin aviso por email');
    }
    return new Response('ok', { status: 200 });
  } catch (e) {
    console.error('[cal-webhook]', e instanceof Error ? e.message : e);
    // 200 para que Cal no reintente indefinidamente un payload inesperado.
    return new Response('error', { status: 200 });
  }
};
