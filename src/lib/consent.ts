/**
 * Consent Mode v2 helpers (RGPD). `index.html` sets all ad/analytics storage to
 * `denied` by default before GTM loads, and re-applies a previously stored
 * "granted" choice. This module is used by the React cookie banner to record and
 * apply the user's decision via `gtag('consent','update', …)`.
 */
export type ConsentState = "granted" | "denied";

const KEY = "djp_consent";

export function getStoredConsent(): ConsentState | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function applyConsent(state: ConsentState) {
  try {
    localStorage.setItem(KEY, state);
  } catch {
    /* ignore (private mode, etc.) */
  }
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  w.gtag?.("consent", "update", {
    ad_storage: state,
    analytics_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}
