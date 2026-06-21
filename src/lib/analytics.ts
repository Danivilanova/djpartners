/**
 * Site-wide conversion tracking. Pushes events to `window.dataLayer` so the GTM
 * container (GTM-THTTJSFD) can forward them to GA4 / Google Ads. `index.html`
 * initializes `dataLayer` + Consent Mode before anything runs, so these calls
 * are always safe (and a no-op if, for any reason, dataLayer is missing).
 */
type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

/**
 * Fire when a contact / lead form is submitted successfully on the main site.
 * `form` identifies which form ("contacto", "partnership", "newsletter"…) so
 * you can map specific forms to specific conversions in GTM.
 */
export function trackFormSubmit(form: string) {
  if (typeof window === "undefined") return;
  (window as DataLayerWindow).dataLayer?.push({ event: "form_submit", form });
}
