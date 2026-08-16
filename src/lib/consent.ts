/**
 * Consent Mode v2 helpers (RGPD). `index.html` sets all ad/analytics storage to
 * `denied` by default before GTM loads, and re-applies a previously stored
 * "granted" choice. This module is used by the React cookie banner to record and
 * apply the user's decision via `gtag('consent','update', …)`.
 */
import { clearGclidCookie, storeGclidFromUrl } from "./gclid";

export type ConsentState = "granted" | "denied";

const KEY = "djp_consent";

/**
 * Evento de window que se emite tras aplicar una decisión de consentimiento.
 * Lo escuchan los componentes que dependen de datos que sólo existen con
 * consentimiento aceptado (p. ej. el embed de Cal.com necesita el gclid, que se
 * captura justo al aceptar, después de que el embed ya se haya montado).
 */
export const CONSENT_EVENT = "djp:consent";

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
  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    __djpLoadHubSpot?: () => void;
  };
  w.gtag?.("consent", "update", {
    ad_storage: state,
    analytics_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
  if (state === "granted") {
    // HubSpot sólo se carga tras consentimiento explícito (lo inyecta index.html).
    w.__djpLoadHubSpot?.();
    // Captura el gclid ahora que hay consentimiento (la URL aún lo conserva
    // si el usuario aceptó nada más aterrizar desde el anuncio).
    storeGclidFromUrl();
  } else {
    clearHubSpotCookies();
    clearGoogleCookies();
    clearGclidCookie();
  }
  // Avisa a la UI ya montada (el embed de Cal.com) de que la decisión cambió.
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}

/** Expira una lista de cookies en todos los dominios donde pudieron escribirse. */
function expireCookies(names: string[]) {
  const host = window.location.hostname;
  const domains = ["", host, "." + host, "." + host.split(".").slice(-2).join(".")];
  for (const name of names) {
    for (const domain of domains) {
      document.cookie =
        name +
        "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" +
        (domain ? "; domain=" + domain : "");
    }
  }
}

/**
 * Expira las cookies first-party que deja HubSpot, para el caso de un usuario
 * que retira un consentimiento dado anteriormente.
 */
function clearHubSpotCookies() {
  expireCookies(["hubspotutk", "__hstc", "__hssc", "__hssrc", "messagesUtk"]);
}

/**
 * Expira las cookies de Google (GA4 y Google Ads). La política de privacidad
 * promete que al retirar el consentimiento se eliminan, así que además de las
 * de nombre fijo hay que recorrer document.cookie para las de sufijo variable
 * (_ga_<ID de flujo>, _gcl_aw/_gcl_dc/_gcl_gs…).
 */
function clearGoogleCookies() {
  const names = new Set(["_ga", "_gid", "_gat", "_gcl_au"]);
  for (const pair of document.cookie.split(";")) {
    const name = pair.split("=")[0].trim();
    if (/^(_ga_|_gcl_|_gat_)/.test(name)) names.add(name);
  }
  expireCookies([...names]);
}

/**
 * Retirar/cambiar el consentimiento (RGPD art. 7.3: retirar debe ser tan fácil
 * como darlo): borra la elección guardada y recarga para que el banner vuelva a
 * salir y ningún script cargue mientras tanto.
 */
export function resetConsent() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  clearHubSpotCookies();
  clearGoogleCookies();
  clearGclidCookie();
  window.location.reload();
}
