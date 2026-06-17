# Landings /lp — puesta en marcha de ads y medición

Landings de campaña (sin navbar, `noindex,follow`):

- `/lp/cuadro-de-mando` — cuadros de mando / BI gestionado
- `/lp/automatizacion-procesos` — automatización de procesos

Conversión única en ambas: **reservar el diagnóstico** en el embed de Cal.com.
Al completarse una reserva, el código empuja a `dataLayer`:

```js
{ event: 'generate_lead', landing: 'cuadro-de-mando' | 'automatizacion-procesos', value: 1, currency: 'EUR' }
```

y en cada clic de CTA: `{ event: 'cta_click', landing }`.

GTM (`GTM-THTTJSFD`) ya está cargado en `index.html`. Solo falta crear los tags.

---

## 1) Google Ads — crear la acción de conversión

1. Google Ads → **Objetivos → Conversiones → + Nueva acción de conversión → Sitio web**.
2. Dominio `djpartners.es`. Si te deja, **crea la conversión manualmente** (no hace falta el escaneo).
3. Configúrala:
   - **Categoría:** *Cliente potencial / Reservar cita*.
   - **Nombre:** `Reserva diagnóstico`.
   - **Valor:** "Usar el mismo valor" (p. ej. el valor de un lead) o "No usar valor". El código manda `value: 1 EUR`, que puedes ignorar o usar.
   - **Recuento:** *Una* (un lead por usuario).
   - **Método de seguimiento:** elige **"Usar Google Tag Manager"**.
4. Apunta los dos datos que te muestra: **ID de conversión** (`AW-XXXXXXXXX`, usa solo los dígitos) y **Etiqueta de conversión** (`AbC-D_efG...`).
5. (Recomendado) Activa **Conversiones mejoradas** → método *Google Tag Manager*.
6. Vincula **Google Ads ↔ GA4** (Herramientas → Cuentas vinculadas) si usas GA4.

---

## 2) GTM — importar y rellenar

1. GTM (contenedor `GTM-THTTJSFD`) → **Administrar → Importar contenedor**.
2. Sube `docs/gtm-djpartners-import.json`.
3. Espacio de trabajo: **Default Workspace**. Opción: **Combinar → Cambiar el nombre de conflictos** (no sobrescribe lo que ya tengas).
4. Confirma la importación. Te crea:
   - Tag **Google Ads - Conversion Linker** (en *All Pages*).
   - Tag **Google Ads - Conversion Reserva diagnostico** (dispara con `generate_lead`).
   - Triggers `CE - generate_lead` y `CE - cta_click`.
   - Variables `DLV - value`, `DLV - currency`, `DLV - landing`.
5. Abre el tag **Google Ads - Conversion Reserva diagnostico** y sustituye:
   - `CONVERSION_ID` → los dígitos de tu `AW-XXXXXXXXX`.
   - `CONVERSION_LABEL` → tu etiqueta.
6. **Vista previa** (Preview) → abre `…/lp/cuadro-de-mando`, reserva un hueco de prueba en Cal.com y comprueba en el panel de Tag Assistant que:
   - aparece el evento **`generate_lead`**, y
   - el tag de conversión **se dispara**.
7. **Enviar / Publicar** el contenedor.

> GA4 (opcional): si quieres analítica, añade en GTM un tag **"Google tag"** con tu `G-XXXXXXX` en *All Pages* y un tag **"GA4 Event"** = `generate_lead` con el trigger `CE - generate_lead`. No va en el JSON para no romper la importación.

---

## 3) Variables de entorno en el deploy (Cloudflare Pages)

`.env` **no se sube** al repo. En Cloudflare Pages → tu proyecto → **Settings → Environment variables** (Production *y* Preview) añade:

| Variable | Valor | Para qué |
|---|---|---|
| `VITE_CALCOM_LINK` | p. ej. `jordi-reina/diagnostico` | activa el embed real de Cal.com (si falta, sale el placeholder) |
| `VITE_ADS_CONVERSION_CUADRO` | *(opcional)* `AW-XXXX/label` | conversión directa por gtag sin GTM (déjalo vacío si usas GTM) |
| `VITE_ADS_CONVERSION_AUTO` | *(opcional)* `AW-XXXX/label` | idem para la otra landing |

Vite inyecta estas variables **en el build**, así que tras añadirlas hay que **volver a desplegar**.

---

## 4) Comprobaciones finales antes de gastar

- [ ] Carga directa de `https://djpartners.es/lp/cuadro-de-mando` (sin 404 → lo cubre `public/_redirects`).
- [ ] El embed real de Cal.com se ve (no el placeholder).
- [ ] `generate_lead` salta en GTM Preview al reservar y la conversión llega a Google Ads (Diagnóstico → estado "Reciente").
- [ ] `<meta name="robots" content="noindex, follow">` presente en las dos `/lp`.
- [ ] Las `/lp` **no** están en `sitemap.xml`.

## Pendientes de negocio / legal

- **Consentimiento (RGPD):** hoy `ad_storage` va concedido por defecto sin banner. Para campañas en EU conviene un **CMP + Consent Mode v2**.
- **Grup Pous:** OK de Miquel sobre la cita + (ideal) captura real del panel para sustituir el mockup `<GrupPousDashboard />`.
- **Logos:** Holded/Kounsoft/Workspace son wordmarks; el resto, iconos.
- **Automatización:** decidir suelo de precio.
