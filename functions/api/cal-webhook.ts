import { pushLeadToHubSpot } from './_hubspot';

interface Env { HUBSPOT_TOKEN?: string; CAL_WEBHOOK_SECRET?: string }

/**
 * Webhook de Cal.com (evento BOOKING_CREATED): cada reunión agendada entra en
 * HubSpot como contacto + deal en el stage "Meetingbook" (una reunión ya está
 * más avanzada que un lead frío). El gclid llega en metadata si el embed lo
 * adjuntó (sólo con consentimiento).
 *
 * Cal firma el cuerpo con HMAC-SHA256 (cabecera X-Cal-Signature-256) usando el
 * secreto configurado en el webhook; debe coincidir con env.CAL_WEBHOOK_SECRET.
 */

const DEAL_STAGE_MEETING = 'decisionmakerboughtin'; // "Meetingbook"

async function isValidSignature(secret: string, body: string, signature: string | null): Promise<boolean> {
  if (!signature) return false;
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'],
  );
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(body));
  const expected = [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, '0')).join('');
  return expected === signature.trim().toLowerCase();
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const body = await request.text();

  if (env.CAL_WEBHOOK_SECRET) {
    const ok = await isValidSignature(env.CAL_WEBHOOK_SECRET, body, request.headers.get('X-Cal-Signature-256'));
    if (!ok) return new Response('invalid signature', { status: 401 });
  }

  try {
    const event = JSON.parse(body) as {
      triggerEvent?: string;
      payload?: {
        eventTitle?: string;
        attendees?: Array<{ email?: string; name?: string }>;
        responses?: Record<string, { value?: unknown }>;
        metadata?: Record<string, string>;
      };
    };

    if (event.triggerEvent !== 'BOOKING_CREATED') return new Response('ignored', { status: 200 });

    const p = event.payload ?? {};
    const attendee = p.attendees?.[0] ?? {};
    const email = attendee.email ?? String(p.responses?.email?.value ?? '');
    if (!email) return new Response('no attendee email', { status: 200 });

    await pushLeadToHubSpot(env.HUBSPOT_TOKEN, {
      email,
      name: attendee.name ?? String(p.responses?.name?.value ?? ''),
      phone: p.responses?.phone?.value ? String(p.responses.phone.value) : undefined,
      gclid: p.metadata?.gclid,
      source: `cal:${p.eventTitle ?? 'reunión'}`,
      dealstage: DEAL_STAGE_MEETING,
    });
    return new Response('ok', { status: 200 });
  } catch (e) {
    console.error('[cal-webhook]', e instanceof Error ? e.message : e);
    // 200 para que Cal no reintente indefinidamente un payload inesperado.
    return new Response('error', { status: 200 });
  }
};
