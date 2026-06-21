# Guía paso a paso: Google Analytics 4 + Tag Manager + Google Ads

Pensada para alguien que **no lo ha hecho nunca**. Cada paso explica **qué** haces y **por qué**.

---

## 0. El mapa mental (léelo antes de empezar)

Hay 4 piezas y cada una hace una cosa:

| Pieza | Qué es | Para qué sirve |
|---|---|---|
| **Tu web** | djpartners.es | "Avisa" cuando pasa algo importante (alguien reserva, envía un formulario, hace clic en un CTA). Eso ya está hecho: empuja **eventos** a una cola llamada `dataLayer`. |
| **Google Tag Manager (GTM)** | Un panel para gestionar "etiquetas" sin tocar código | Escucha esos eventos y los reenvía a donde haga falta (Analytics, Ads…). Ya está instalado: `GTM-THTTJSFD`. |
| **Google Analytics 4 (GA4)** | Analítica gratuita | Mide **qué hace la gente** en tu web (visitas, de dónde vienen, qué páginas, qué conversiones). |
| **Google Ads** | Plataforma de anuncios (de pago) | Compra tráfico. Necesita que le **devuelvas** qué clics acaban en cliente (conversiones) para optimizar y no malgastar dinero. |

**El flujo es:**

```
Tu web  →  dataLayer (eventos)  →  GTM  →  ┬→  GA4 (análisis)
                                           └→  Google Ads (conversiones)
```

**¿Por qué GTM en medio y no pegar los scripts directos?**
Porque desacopla marketing de desarrollo: añades/cambias píxeles (Ads, GA4, Meta, lo que sea) **desde una web, sin tocar el código ni redeployar**. Un solo "contenedor" alimenta todo. Es el estándar.

**Los eventos que tu web YA emite** (no tienes que programar nada):
- `generate_lead` → cuando alguien **reserva el diagnóstico** en Cal.com (páginas `/lp`). Es la conversión de más valor.
- `form_submit` → cuando se **envía cualquier formulario** del sitio (contacto, partnership, newsletter…). Lleva un parámetro `form` con cuál fue.
- `cta_click` → cuando alguien pulsa un botón de CTA en las landings (micro-conversión, opcional).

**Orden recomendado** (de menos a más dependencias): **GA4 → GTM → Google Ads → vincular → campaña → consentimiento.**

---

## Parte A — Google Analytics 4 (empieza por aquí: es gratis y es la base)

> **Por qué primero:** GA4 te da un sitio donde ver todo (incluidas las conversiones) aunque aún no gastes en Ads, y luego Ads puede "importar" sus conversiones. Además es gratis.

**A1. Crea la cuenta/propiedad**
1. Entra en [analytics.google.com](https://analytics.google.com) con la cuenta de Google de la empresa.
2. **Administrar (rueda dentada) → Crear → Propiedad**. Nombre: `D&J Partners`. Zona horaria España, moneda EUR.
   - *Por qué:* una "propiedad" es el contenedor de datos de tu web.
3. Tipo de negocio y objetivos → lo que más se acerque (generar leads).

**A2. Crea el flujo de datos web**
1. Te pedirá crear un **flujo de datos** → **Web** → URL `https://djpartners.es` → nombre `Web`.
2. Te dará un **ID de medición** con formato **`G-XXXXXXXXXX`**. **Cópialo y guárdalo.**
   - *Por qué:* es el identificador de tu web en GA4. GTM lo usará para enviarle datos.
3. **No** copies el script que te ofrece: lo vamos a conectar desde GTM (Parte B), no a mano.

**A3. (Lo harás en la Parte B)** Conectar GA4 a la web vía GTM.

**A4. Marca tus conversiones en GA4**
1. Cuando lleguen los primeros eventos (tras publicar GTM), ve a **Administrar → Eventos clave** (antes "Conversiones").
2. Marca como **evento clave**: `generate_lead` y `form_submit`.
   - *Por qué:* le dices a GA4 "estos eventos son los que me importan". Luego Google Ads puede importarlos como conversiones.

---

## Parte B — Google Tag Manager (el centro de todo)

> **Por qué:** aquí defines QUÉ se dispara y CUÁNDO. Es donde conectas los eventos de tu web con GA4 y Ads.

**B0. Conceptos de GTM (rápido)**
- **Tag (etiqueta):** el "disparo" que envía datos a algún sitio (a GA4, a Ads…).
- **Trigger (activador):** la condición que dispara un tag (p. ej. "cuando ocurra el evento `generate_lead`").
- **Variable:** un dato reutilizable (p. ej. el valor del lead, el nombre del formulario).
- **Workspace / Versión:** trabajas en un borrador y, al **Publicar**, creas una versión. Nada sale a producción hasta que publicas.
- **Vista previa (Preview):** prueba los cambios en tu web real **sin** publicarlos.

**B1. Importa el contenedor base que te dejé preparado**
1. GTM ([tagmanager.google.com](https://tagmanager.google.com)) → contenedor **`GTM-THTTJSFD`**.
2. **Administrar → Importar contenedor** → sube `docs/gtm-djpartners-import.json`.
3. Espacio de trabajo: **Existing → Default Workspace**. Opción de importación: **Combinar → Cambiar el nombre de conflictos** (no pisa nada de lo que tengas).
4. Confirmar. Esto te crea de golpe: el **Conversion Linker** de Ads, los **triggers** `CE - generate_lead`, `CE - form_submit` y `CE - cta_click`, y las **variables** `DLV - value/currency/landing/form`. (El tag de conversión de Ads lo creas tú en el paso **B4** — GTM no deja importarlo con el ID/Label de relleno.)
   - *Por qué un Conversion Linker:* guarda el identificador de clic de Google (GCLID) en una cookie propia para poder atribuir la conversión al anuncio correcto. Sin él, pierdes atribución.

**B2. Conecta GA4 (tag de configuración)**
1. **Etiquetas → Nueva → Google tag** (Etiqueta de Google).
2. **Tag ID:** tu `G-XXXXXXXXXX` (de la Parte A).
3. **Activador:** *All Pages* (Todas las páginas).
4. Guarda como `GA4 - Config`.
   - *Por qué:* esto es lo que "enciende" GA4 en toda la web (páginas vistas, etc.).

**B3. Manda las conversiones a GA4 (tags de evento)**

> Nota: Google **retiró el tag "Configuración de GA4"**. Ahora esa función la hace la **Etiqueta de Google (Google tag)** del paso B2. El tag de evento ya **no** pide un "configuration tag": pide el **ID de medición** (tu `G-XXXXXXXXXX`), que puedes elegir del desplegable o escribir (o usar una variable Constante).

1. **Nueva → Google Analytics: evento de GA4**.
   - *ID de medición:* tu `G-XXXXXXXXXX` (el mismo de la Etiqueta de Google).
   - *Nombre del evento:* `generate_lead`.
   - *Activador:* el trigger `CE - generate_lead` (vino en el JSON).
   - Guarda como `GA4 - generate_lead`.
2. Repite para los formularios: evento `form_submit`, activador `CE - form_submit` (ya viene en el JSON). Añade un parámetro de evento `form` = `{{DLV - form}}` (la variable también viene en el JSON).
   - *Por qué el parámetro:* así en GA4 ves de **qué formulario** vino cada lead.

**B4. Crea el tag de conversión de Google Ads** (necesitas antes el ID + Label de la **Parte C**)
1. **Etiquetas → Nueva → Seguimiento de conversiones de Google Ads** (Google Ads Conversion Tracking).
2. **ID de conversión:** los dígitos de tu `AW-XXXXXXXXX`. **Etiqueta de conversión:** la tuya.
3. *(Opcional)* **Valor:** `{{DLV - value}}` · **Moneda:** `{{DLV - currency}}`.
4. **Activador:** `CE - generate_lead`. Guarda como `Ads - Conversión reserva`.
   - *Por qué a mano:* GTM valida este tag y no deja importarlo con valores de relleno; en la interfaz se configura en 4 campos y ya queda bien.

**B5. Prueba en Vista previa (clave, no te lo saltes)**
1. Pulsa **Vista previa**, escribe `https://djpartners.es/lp/cuadro-de-mando` y conéctalo.
2. En la web de prueba: **reserva un hueco** en el calendario y **envía un formulario** del sitio.
3. En el panel de Tag Assistant, comprueba que:
   - aparecen los eventos `generate_lead` y `form_submit`, y
   - que los tags correspondientes **"Fired"** (se dispararon).
   - *Por qué:* es la única forma de saber que mides bien **antes** de gastar dinero.

**B6. Publica**
- **Enviar (Submit) → Publicar**, ponle nombre a la versión ("Conversiones LP v1"). Hasta que no publicas, nada de esto está vivo.

---

## Parte C — Google Ads (conversiones + campañas)

**C1. Crea/abre la cuenta**
- [ads.google.com](https://ads.google.com). Si te fuerza a crear una campaña para terminar el alta, créala **en pausa**.

**C2. Crea la acción de conversión principal**
1. **Objetivos → Conversiones → + Nueva acción de conversión → Sitio web**.
2. Dominio `djpartners.es`. Si te deja, elige **"Añadir manualmente"** (no hace falta esperar al escaneo).
3. Configúrala:
   - **Categoría:** *Enviar formulario de cliente potencial* o *Reservar* (para la reserva de Cal.com).
   - **Nombre:** `Reserva diagnóstico`.
   - **Valor:** "No usar un valor" o un valor fijo (lo que estimes que vale un lead). *Por qué:* ayuda a Ads a optimizar por valor, no solo por cantidad.
   - **Recuento:** **Una** (un lead por persona). *Por qué:* si alguien reserva 2 veces, sigue siendo 1 cliente potencial.
   - **Método:** **Usar Google Tag Manager**.
4. Te dará **ID de conversión** (`AW-XXXXXXXXX`) y **Etiqueta** (`AbCd...`). → cópialos a GTM (Parte B4) y publica GTM.

**C3. (Opcional) Segunda conversión para los formularios del sitio**
- Repite C2 con nombre `Formulario contacto`, y en GTM crea otro tag de Ads que dispare con `CE - form_submit`. *Por qué separarlas:* una reserva de llamada es más "caliente" que un formulario; querrás poder optimizar por la buena.

**C4. Primaria vs secundaria**
- En Conversiones, marca `Reserva diagnóstico` como **Primaria** (Ads optimiza por ella) y las demás como **Secundarias** (solo observas).
  - *Por qué:* si optimizas por todo a la vez, Ads persigue el lead más barato (newsletter) en vez del más valioso (reserva).

**C5. Vincula Google Ads ↔ GA4**
- **Herramientas → Cuentas vinculadas → Google Analytics (GA4)** → vincular tu propiedad.
  - *Por qué:* compartís audiencias y puedes importar conversiones/medir mejor.

**C6. Activa Conversiones mejoradas**
- En la acción de conversión → **Conversiones mejoradas → activar → vía Google Tag Manager**.
  - *Por qué:* envía (de forma hasheada/segura) el email del que convierte para recuperar conversiones que de otro modo se pierden (más precisión = mejor optimización).

**C7. Crea la campaña de búsqueda**
1. **+ Nueva campaña → Objetivo: Clientes potenciales → Búsqueda.**
2. **Conversión de la campaña:** `Reserva diagnóstico`.
3. **Estructura:** 1 campaña por landing (o 1 campaña con 2 grupos): *Cuadro de mando* y *Automatización*. Cada grupo con sus keywords y sus anuncios.
4. **Keywords y anuncios:** usa los de `docs/anuncios-rsa.md` (titulares, descripciones, rutas, keywords y negativas).
5. **URL final:** la landing correspondiente (`/lp/cuadro-de-mando` o `/lp/automatizacion-procesos`).
6. **Puja:** empieza con **Maximizar conversiones** (sin CPA objetivo). Cuando tengas ~15-30 conversiones, pasa a **CPA objetivo**.
   - *Por qué:* el algoritmo necesita datos antes de poder cumplir un objetivo de coste.
7. **Ubicación/idioma:** España, español.
8. **Extensiones (assets):** sitelinks, textos destacados y fragmentos (también en `anuncios-rsa.md`).
9. **Presupuesto:** empieza modesto (lo que te permita ~10 clics/día por grupo) y no toques nada los primeros 7-10 días.
   - *Por qué:* cambiar pujas/presupuesto a diario reinicia el aprendizaje.

---

## Parte D — Consentimiento (RGPD) — importante con Ads en España

- Hoy la web concede el consentimiento por defecto (`ad_storage: granted`) **sin banner**.
- Para campañas en EU, Google exige **Consent Mode v2** y, en la práctica, un **banner de consentimiento (CMP)** donde el usuario acepta/rechaza.
  - *Por qué:* sin un CMP válido puedes tener problemas legales y, técnicamente, perder señales de conversión (o que Google limite la cuenta).
- Opciones: un CMP certificado (Cookiebot, iubenda, Complianz…) integrado en GTM, o un banner ligero propio. **Dímelo y te lo integro.**

---

## Parte E — Antes de gastar (checklist final)

- [ ] GA4 creado y `G-XXXX` puesto en el tag `GA4 - Config` (All Pages).
- [ ] `generate_lead` y `form_submit` marcados como **eventos clave** en GA4.
- [ ] Conversión `Reserva diagnóstico` creada en Ads → ID+Label puestos en el tag de Ads en GTM.
- [ ] **GTM publicado.**
- [ ] **Vista previa OK**: al reservar salta `generate_lead` y el tag de conversión "Fired".
- [ ] En **Cloudflare Pages → Settings → Environment variables**: `VITE_CALCOM_LINK` puesto y **redeploy** hecho (si no, sale el calendario placeholder).
- [ ] Carga directa de `/lp/...` sin 404, y `noindex` presente.
- [ ] (Recomendado) CMP / Consent Mode v2 para tráfico EU.
- [ ] Campaña creada en **pausa**, revisada, y solo entonces **activar**.

---

## Glosario exprés

- **dataLayer:** cola de eventos que tu web manda a GTM.
- **Tag / Trigger / Variable:** etiqueta que dispara / condición que la dispara / dato reutilizable.
- **Conversion ID / Label:** identifican tu acción de conversión de Google Ads.
- **Conversion Linker:** guarda el clic de Google (GCLID) para atribuir la conversión.
- **Consent Mode v2:** cómo Google ajusta el tracking según el consentimiento del usuario.
- **CPA objetivo:** coste por adquisición que le pides al algoritmo.
- **Evento clave (key event):** lo que en GA4 cuenta como conversión.
