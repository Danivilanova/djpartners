/**
 * Lightweight conversion tracking for the ad landing pages. Pushes events to
 * `window.dataLayer`, donde el contenedor de GTM dispara las etiquetas de GA4 y
 * Google Ads. La conversión se configura SIEMPRE en GTM (con el evento
 * `generate_lead` como disparador), nunca con un gtag directo desde aquí: dos
 * caminos para la misma conversión la contarían dos veces.
 *
 * Nothing here breaks if GTM/gtag isn't loaded yet — `index.html` already
 * defines `dataLayer` + `gtag` with consent denied by default, and every call is
 * guarded.
 */

import { getStoredConsent } from "@/lib/consent";

type GtagWindow = Window & {
  dataLayer?: Record<string, unknown>[];
};

/** Contact details of the person who booked, for enhanced conversions. */
export interface LeadContact {
  email?: string;
  phone?: string;
}

/**
 * uids de reservas ya enviadas. Cal.com emite dos eventos por reserva
 * (`bookingSuccessfulV2` y el `bookingSuccessful` deprecado) y el embed puede
 * remontarse al navegar por la SPA; sin este filtro la misma reserva se
 * contaría varias veces como conversión.
 */
const pushedBookings = new Set<string>();

/**
 * Fire when a diagnosis call is actually booked (the real conversion).
 * `uid` es el identificador de la reserva en Cal.com: si falta, se empuja igual
 * (mejor una conversión sin deduplicar que perderla).
 */
export function trackLead(landing: string, contact?: LeadContact, uid?: string) {
  if (typeof window === "undefined") return;
  if (uid) {
    if (pushedBookings.has(uid)) return;
    pushedBookings.add(uid);
  }
  const w = window as GtagWindow;
  // GA4 / GTM: use this event as your conversion trigger.
  const payload: Record<string, unknown> = { event: "generate_lead", landing, value: 1, currency: "EUR" };
  // Conversiones avanzadas: GTM lee lead_email/lead_phone con una variable de
  // "datos proporcionados por el usuario" y Google los envía hasheados
  // (SHA-256). RGPD: sólo se adjuntan con consentimiento aceptado (además,
  // la propia etiqueta de Google los descarta si ad_user_data está denegado).
  if (getStoredConsent() === "granted") {
    if (contact?.email) payload.lead_email = contact.email;
    if (contact?.phone) payload.lead_phone = contact.phone;
  }
  w.dataLayer?.push(payload);
}

/** Micro-conversion: a CTA was clicked (useful for funnel analysis). */
export function trackCtaClick() {
  if (typeof window === "undefined") return;
  const landing = window.location.pathname.replace(/^\/lp\//, "");
  (window as GtagWindow).dataLayer?.push({ event: "cta_click", landing });
}
