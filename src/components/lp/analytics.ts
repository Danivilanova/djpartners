/**
 * Lightweight conversion tracking for the ad landing pages. Pushes events to
 * `window.dataLayer` (so a GTM container can fire GA4 / Google Ads tags) and,
 * if a Google Ads send-to is configured, fires a direct gtag conversion too.
 *
 * Nothing here breaks if GTM/gtag isn't loaded yet — `index.html` already
 * defines `dataLayer` + `gtag` with consent granted, and every call is guarded.
 *
 * To wire Google Ads conversions directly (without GTM), create a conversion
 * action in Google Ads and set the env vars below to its `AW-XXXXXXXX/label`.
 */

type GtagWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
};

const env = import.meta.env as Record<string, string | undefined>;

/** Google Ads "send_to" per landing slug (optional — GTM can do this instead). */
const CONVERSION_SEND_TO: Record<string, string | undefined> = {
  "cuadro-de-mando": env.VITE_ADS_CONVERSION_CUADRO,
  "automatizacion-procesos": env.VITE_ADS_CONVERSION_AUTO,
};

/** Fire when a diagnosis call is actually booked (the real conversion). */
export function trackLead(landing: string) {
  if (typeof window === "undefined") return;
  const w = window as GtagWindow;
  // GA4 / GTM: use this event as your conversion trigger.
  w.dataLayer?.push({ event: "generate_lead", landing, value: 1, currency: "EUR" });
  // Direct Google Ads conversion (only if a send_to is configured for this landing).
  const sendTo = CONVERSION_SEND_TO[landing];
  if (sendTo && typeof w.gtag === "function") {
    w.gtag("event", "conversion", { send_to: sendTo, value: 1.0, currency: "EUR" });
  }
}

/** Micro-conversion: a CTA was clicked (useful for funnel analysis). */
export function trackCtaClick() {
  if (typeof window === "undefined") return;
  const landing = window.location.pathname.replace(/^\/lp\//, "");
  (window as GtagWindow).dataLayer?.push({ event: "cta_click", landing });
}
