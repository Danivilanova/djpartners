/**
 * Titular del hero según el grupo de anuncios de Google Ads.
 *
 * Las URLs de los anuncios llegan con `hsa_grp=<id del grupo>` (plantilla de
 * seguimiento de HubSpot). El ajuste anuncio↔titular es uno de los factores que
 * más mueve la conversión, así que quien busca "control de gestión" lee un
 * titular de control de gestión y no el genérico.
 *
 * Función pura a propósito: sin React y sin `window`, para poder probarla y
 * para que el `<h1>` prerenderizado siga siendo el titular por defecto (la
 * página lo cambia tras montar, nunca durante la hidratación).
 */

/** Titular que ve todo el mundo que no viene de un grupo mapeado. */
export const DEFAULT_HEADLINE =
  "Todos tus KPIs en un solo panel. Actualizado solo, todos los días.";

/** id de grupo de anuncios → titular. El comentario es el nombre del grupo en Google Ads. */
export const HEADLINE_BY_AD_GROUP: Record<string, string> = {
  // Control de gestion
  "199217818986":
    "Control de gestión para pymes: tus números al día, sin esperar al Excel del lunes.",
  // Cuadro de mando
  "199177015613":
    "Tu cuadro de mando, listo en 2-3 semanas. Actualizado solo, todos los días.",
  // Dashboards e informes
  "199318197557":
    "Tus informes y dashboards, actualizados solos cada día. Sin Excel a mano.",
  // BI y consultoría
  "203128424550":
    "Power BI para tu pyme, gestionado por nosotros. Sin licencias ni proyectos de 6 meses.",
};

/**
 * Devuelve el titular para un query string (`window.location.search` o
 * equivalente, con o sin `?`). Cualquier valor no mapeado, ausente o inválido
 * cae en el titular por defecto.
 */
export function headlineForSearch(search: string): string {
  try {
    const grp = new URLSearchParams(search).get("hsa_grp");
    if (!grp) return DEFAULT_HEADLINE;
    // hasOwnProperty: `?hsa_grp=constructor` no debe colarse por el prototipo.
    if (!Object.prototype.hasOwnProperty.call(HEADLINE_BY_AD_GROUP, grp)) return DEFAULT_HEADLINE;
    return HEADLINE_BY_AD_GROUP[grp];
  } catch {
    return DEFAULT_HEADLINE;
  }
}
