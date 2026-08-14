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

/**
 * RGPD: el gclid es un identificador de medición publicitaria, así que la
 * cookie sólo se escribe/lee con consentimiento aceptado. applyConsent()
 * re-invoca la captura al aceptar (la URL aún conserva ?gclid si el usuario
 * no ha navegado) y borra la cookie al denegar o retirar el consentimiento.
 */
export function storeGclidFromUrl(): void {
  try {
    if (getStoredConsent() !== 'granted') return;
    const gclid = new URLSearchParams(window.location.search).get('gclid');
    if (!gclid) return;
    const maxAge = MAX_AGE_DAYS * 24 * 60 * 60;
    document.cookie = `${COOKIE}=${encodeURIComponent(gclid)}; max-age=${maxAge}; path=/; SameSite=Lax`;
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
