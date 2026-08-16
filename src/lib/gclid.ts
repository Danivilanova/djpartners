/**
 * Captura del gclid (Google Click ID) de Google Ads.
 *
 * Al aterrizar desde un anuncio, la URL trae ?gclid=…; lo persistimos en una
 * cookie first-party 90 días (la ventana de conversiones offline de Google)
 * para adjuntarlo a cualquier formulario que se envíe después, aunque el
 * usuario navegue entre páginas antes de convertir.
 */

import { getStoredConsent } from './consent';

const COOKIE = 'djp_gclid';
const MAX_AGE_DAYS = 90;
/** Formato real de un gclid; evita persistir basura inyectada por la URL. */
const GCLID_RE = /^[\w.-]{1,200}$/;

/**
 * RGPD: el gclid es un identificador de medición publicitaria, así que la
 * cookie sólo se escribe/lee con consentimiento aceptado. applyConsent()
 * re-invoca la captura al aceptar y borra la cookie al denegar o retirar el
 * consentimiento. La URL ya NO conserva ?gclid en ese momento: el router de
 * vite-react-ssg elimina el query string al hidratar, así que index.html lo
 * captura antes en `window.__djpGclid` (solo memoria, sin storage) y aquí se
 * usa como fuente principal con location.search de respaldo.
 */
export function storeGclidFromUrl(): void {
  try {
    if (getStoredConsent() !== 'granted') return;
    const w = window as Window & { __djpGclid?: string };
    const gclid = w.__djpGclid ?? new URLSearchParams(window.location.search).get('gclid');
    if (!gclid || !GCLID_RE.test(gclid)) return;
    const maxAge = MAX_AGE_DAYS * 24 * 60 * 60;
    // Secure: el sitio es HTTPS, así que la cookie nunca debe viajar en claro.
    document.cookie = `${COOKIE}=${encodeURIComponent(gclid)}; max-age=${maxAge}; path=/; SameSite=Lax; Secure`;
  } catch {
    /* ignore */
  }
}

export function getGclid(): string | undefined {
  try {
    if (getStoredConsent() !== 'granted') return undefined;
    const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : undefined;
  } catch {
    return undefined;
  }
}

export function clearGclidCookie(): void {
  try {
    document.cookie = `${COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  } catch {
    /* ignore */
  }
}
