import { useEffect, useRef, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { trackLead, type LeadContact } from "./analytics";
import { getGclid } from "@/lib/gclid";
import { CONSENT_EVENT } from "@/lib/consent";

/**
 * Shape (parcial y defensiva) del payload del evento `bookingSuccessful` (v1,
 * deprecado). Es el único que trae el booking completo: `bookingSuccessfulV2`
 * sólo envía uid/título/fechas, sin datos del asistente.
 */
interface BookingV1Data {
  booking?: {
    uid?: string;
    attendees?: Array<{ email?: string; phoneNumber?: string }>;
    // Cal envía los valores planos (responses.email === "a@b.com"); versiones
    // antiguas los envolvían en { value }, así que aceptamos ambas formas.
    responses?: Record<string, unknown>;
  };
}

/** Espera para coalescer los dos eventos de Cal (V2 y v1) en una conversión. */
const ENRICH_DELAY_MS = 500;

/** Lee una respuesta del formulario tanto plana como envuelta en { value }. */
function readResponse(responses: Record<string, unknown>, key: string): string | undefined {
  const raw = responses[key];
  if (typeof raw === "string") return raw.trim() || undefined;
  if (raw && typeof raw === "object" && "value" in raw) {
    const value = (raw as { value?: unknown }).value;
    if (typeof value === "string") return value.trim() || undefined;
  }
  return undefined;
}

/**
 * Google exige E.164 para el teléfono de las conversiones avanzadas. Aceptamos
 * el número ya internacional y los móviles/fijos españoles de 9 dígitos; lo que
 * no encaje se descarta (un teléfono mal formado no aporta nada y ensucia el
 * hash que envía Google).
 */
function toE164(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const cleaned = raw.replace(/[\s().-]/g, "");
  if (/^\+\d{6,15}$/.test(cleaned)) return cleaned;
  if (/^[6789]\d{8}$/.test(cleaned)) return "+34" + cleaned;
  return undefined;
}

/**
 * Extrae email/teléfono de la reserva para las conversiones avanzadas de
 * Google Ads. Todo opcional: si Cal cambia el payload, la conversión se sigue
 * registrando sin datos de usuario.
 */
function extractContactV1(data: BookingV1Data | undefined): LeadContact & { uid?: string } {
  const booking = data?.booking;
  const responses = booking?.responses ?? {};
  const email = booking?.attendees?.[0]?.email ?? readResponse(responses, "email");
  const phone = toE164(
    readResponse(responses, "attendeePhoneNumber") ??
      readResponse(responses, "phone") ??
      readResponse(responses, "smsReminderNumber") ??
      booking?.attendees?.[0]?.phoneNumber
  );
  return { email, phone, uid: booking?.uid };
}

/**
 * Real Cal.com inline embed. Rendered by BookingCalendar only when a calLink is
 * configured (env `VITE_CALCOM_LINK`, e.g. "djpartners/diagnostico"). Fires the
 * `generate_lead` conversion when a booking completes.
 *
 * Set up the event type in Cal.com first (20 min, video) with the 3
 * qualification questions, then set VITE_CALCOM_LINK and redeploy.
 */
export default function CalInlineEmbed({ calLink, landing }: { calLink: string; landing: string }) {
  // El gclid sólo existe con consentimiento aceptado, y el visitante suele
  // aceptar DESPUÉS de que el embed se haya montado. @calcom/embed-react aplica
  // `config` únicamente al montar, así que guardamos el gclid en estado y lo
  // usamos como key para remontar el iframe cuando aparezca (ocurre en el mismo
  // clic del banner, antes de que nadie haya tocado el calendario).
  const [gclid, setGclid] = useState<string | undefined>(() =>
    typeof window === "undefined" ? undefined : getGclid()
  );

  useEffect(() => {
    const onConsent = () => {
      const next = getGclid();
      // Sólo remontamos al ganar el gclid; retirar el consentimiento no debe
      // recargar el iframe (el usuario podría estar rellenando la reserva).
      if (next) setGclid((prev) => (prev === next ? prev : next));
    };
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  // Cal emite `bookingSuccessfulV2` (uid, sin contacto) y el v1 deprecado (con
  // el booking completo) como mensajes separados y en orden no garantizado:
  // acumulamos lo que llega y empujamos una sola conversión al vencer el plazo.
  const pending = useRef<{ uid?: string; contact: LeadContact } | null>(null);
  const flushTimer = useRef<number | null>(null);

  useEffect(() => {
    let active = true;
    let api: Awaited<ReturnType<typeof getCalApi>> | null = null;

    const queueLead = (uid: string | undefined, contact: LeadContact) => {
      const prev = pending.current;
      pending.current = {
        uid: uid ?? prev?.uid,
        contact: {
          email: contact.email ?? prev?.contact.email,
          phone: contact.phone ?? prev?.contact.phone,
        },
      };
      if (flushTimer.current !== null) return;
      flushTimer.current = window.setTimeout(() => {
        flushTimer.current = null;
        const lead = pending.current;
        pending.current = null;
        if (lead) trackLead(landing, lead.contact, lead.uid);
      }, ENRICH_DELAY_MS);
    };

    // Referencias estables: hay que pasarlas tal cual a cal("off") en el
    // cleanup, o los callbacks se acumulan al remontar el embed (navegación
    // SPA) y una reserva dispararía varias conversiones.
    const onBookingV2 = (e: { detail: { data: { uid?: string } } }) => {
      queueLead(e.detail?.data?.uid, {});
    };
    const onBookingV1 = (e: { detail: { data: BookingV1Data } }) => {
      const { uid, ...contact } = extractContactV1(e.detail?.data);
      queueLead(uid, contact);
    };

    (async () => {
      const cal = await getCalApi({ namespace: "djp" });
      if (!active) return;
      api = cal;
      // Match the Tinta look: ink accent, light theme, month view.
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#161616" }, dark: {} },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", { action: "bookingSuccessfulV2", callback: onBookingV2 });
      // v1 (deprecado) sólo como enriquecimiento: es el único que trae el email
      // y el teléfono para las conversiones avanzadas.
      cal("on", { action: "bookingSuccessful", callback: onBookingV1 });
    })();

    return () => {
      active = false;
      api?.("off", { action: "bookingSuccessfulV2", callback: onBookingV2 });
      api?.("off", { action: "bookingSuccessful", callback: onBookingV1 });
      if (flushTimer.current !== null) {
        window.clearTimeout(flushTimer.current);
        flushTimer.current = null;
      }
      pending.current = null;
    };
  }, [landing]);

  // El gclid viaja como metadata de la reserva y llega al webhook
  // /api/cal-webhook para el deal en HubSpot.
  return (
    <Cal
      key={gclid ?? "sin-gclid"}
      namespace="djp"
      calLink={calLink}
      style={{ width: "100%", height: "100%", minHeight: 580, overflow: "scroll" }}
      config={{ layout: "month_view", ...(gclid ? { "metadata[gclid]": gclid } : {}) }}
    />
  );
}
