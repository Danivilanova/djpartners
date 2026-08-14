/**
 * Captura del gclid (Google Click ID) de Google Ads.
 *
 * Al aterrizar desde un anuncio, la URL trae ?gclid=…; lo persistimos en una
 * cookie first-party 90 días (la ventana de conversiones offline de Google)
 * para adjuntarlo a cualquier formulario que se envíe después, aunque el
 * usuario navegue entre páginas antes de convertir.
 */

const COOKIE = 'djp_gclid';
const MAX_AGE_DAYS = 90;

export function storeGclidFromUrl(): void {
  try {
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
    const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : undefined;
  } catch {
    return undefined;
  }
}
