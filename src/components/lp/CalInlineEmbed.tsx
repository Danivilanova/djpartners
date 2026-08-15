import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { trackLead, type LeadContact } from "./analytics";
import { getGclid } from "@/lib/gclid";

/** Shape (partial, defensive) of the `bookingSuccessful` event detail. */
interface BookingSuccessfulEvent {
  detail?: {
    data?: {
      booking?: {
        attendees?: Array<{ email?: string }>;
        responses?: Record<string, { value?: unknown } | undefined>;
      };
    };
  };
}

/**
 * Extrae email/teléfono de la reserva para las conversiones avanzadas de
 * Google Ads. Todo opcional: si Cal cambia el payload, la conversión se sigue
 * registrando sin datos de usuario.
 */
function extractContact(e: unknown): LeadContact {
  const booking = (e as BookingSuccessfulEvent)?.detail?.data?.booking;
  const responses = booking?.responses ?? {};
  const email =
    booking?.attendees?.[0]?.email ??
    (typeof responses.email?.value === "string" ? responses.email.value : undefined);
  const rawPhone = responses.phone?.value;
  // Google exige formato E.164 para el teléfono; sin prefijo (+34…) se omite.
  const phone = typeof rawPhone === "string" && rawPhone.startsWith("+") ? rawPhone : undefined;
  return { email, phone };
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
  useEffect(() => {
    let active = true;
    (async () => {
      const cal = await getCalApi({ namespace: "djp" });
      if (!active) return;
      // Match the Tinta look: ink accent, light theme, month view.
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#161616" }, dark: {} },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", {
        action: "bookingSuccessful",
        callback: (e: unknown) => trackLead(landing, extractContact(e)),
      });
    })();
    return () => {
      active = false;
    };
  }, [landing]);

  // El gclid (sólo disponible con consentimiento aceptado) viaja como metadata
  // de la reserva y llega al webhook /api/cal-webhook para el deal en HubSpot.
  const gclid = getGclid();

  return (
    <Cal
      namespace="djp"
      calLink={calLink}
      style={{ width: "100%", height: "100%", minHeight: 580, overflow: "scroll" }}
      config={{ layout: "month_view", ...(gclid ? { "metadata[gclid]": gclid } : {}) }}
    />
  );
}
