/**
 * Enlace click-to-chat de WhatsApp, la segunda vía de contacto de las landings
 * (menor compromiso que reservar una videollamada). Sin SDK ni scripts de
 * terceros: es sólo un enlace a wa.me, así que no añade cookies ni afecta al
 * consentimiento.
 */

/** Móvil de Jordi, el que atiende los WhatsApp de las landings. */
const PHONE = "34646683462";

/** Mensaje precargado por defecto (landing del cuadro de mando). */
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, vengo de la web de D&J Partners y me interesa el cuadro de mando para mi empresa.";

/** URL de wa.me con el mensaje ya escrito. */
export function whatsappHref(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
