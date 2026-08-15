# Campaña Google Ads — Cuadro de Mando

Ficheros para montar la campaña de Search descrita en el plan
(https://claude.ai/code/artifact/d3ff5baa-8f9d-405a-b171-6e7b94361e7c) sin
crearla a mano en la UI. Decisiones: 15 €/día, toda España, solo la landing
`/lp/cuadro-de-mando`, conversión objetivo = reserva de diagnóstico.

## 1. Importar la campaña (Google Ads Editor)

1. Descarga [Google Ads Editor](https://ads.google.com/intl/es_es/home/tools/ads-editor/) y abre la cuenta DjPartners (507-803-8635).
2. Cuenta → Importar → **Desde archivo…** → `campana-cuadro-de-mando.csv`.
3. En el diálogo de mapeo de columnas, revisa que cada columna quede asignada
   (los encabezados van en inglés, que es lo que Editor reconoce en cualquier idioma).
4. Revisa los cambios propuestos (1 campaña, 3 grupos, 15 keywords, 3 RSAs) y **Publicar**.

La campaña se importa **en pausa** a propósito: actívala solo tras el paso 3.

## 2. Negativas (pegar en la UI, 1 minuto)

Campaña → Palabras clave → Palabras clave negativas → Añadir → pegar (nivel campaña):

```
gratis
curso
cursos
máster
tutorial
empleo
trabajo
sueldo
salario
qué es
que es
ejemplo
ejemplos
plantilla
plantillas
pdf
descargar
definición
tfg
tfm
universidad
coche
moto
vehículo
testigos
luces
eléctrico
cuadro eléctrico
```

## 3. Ajustes manuales tras importar (no van por CSV)

- **Ubicaciones → España → "Presencia"** (no "Presencia o interés", que es el valor por defecto).
- Comprobar en Redes que **los partners de búsqueda y Display están desactivados**.
- **Extensiones**: textos destacados (Diagnóstico gratuito · Sin permanencia ·
  Cuota mensual fija · Soporte incluido) y fragmento estructurado de Servicios
  (Cuadros de mando, Informes automáticos, Integración con ERP, Conexión de Excel y CRM).
- Activar la campaña.

## 4. Calendario de pujas

Semanas 1–2: Maximizar clics con CPC máx. 2,50 € (así se importa). Con ~10–15
conversiones: Maximizar conversiones. Con 15–30/mes: tCPA 60 €. Sin tocar nada
más de 1 vez por semana.
