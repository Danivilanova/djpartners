import { C, MONO } from "@/components/lp/tokens";
import { useViewport } from "@/components/lp/useViewport";
import LandingShell from "@/components/lp/LandingShell";
import IntegrationsBar from "@/components/lp/IntegrationsBar";
import BookingCalendar from "@/components/lp/BookingCalendar";
import CtaButton from "@/components/lp/CtaButton";

const HERO_SUB =
  "Facturas, informes, presupuestos, datos que se copian de un sistema a otro a mano. Identificamos qué procesos de tu empresa puede hacer una máquina y los dejamos funcionando en piloto automático — conectados a tu ERP, tu CRM y tu email de siempre.";

const PAIN = [
  {
    n: "01",
    title: "Las facturas de cada mes",
    body: "Alguien descarga los albaranes, los pasa al programa de facturación, revisa que cuadren, envía las facturas una a una y persigue las que no se pagan. Cada mes. Las mismas horas, el mismo riesgo de error humano.",
  },
  {
    n: "02",
    title: "Los datos viven en tres sitios a la vez",
    body: "El pedido entra por email, se apunta en el CRM, se factura en el ERP y se reporta en un Excel. Cuatro copias del mismo dato, tecleadas cuatro veces. Cuando algo no cuadra, nadie sabe cuál es la buena.",
  },
  {
    n: "03",
    title: "Tu mejor gente haciendo trabajo de robot",
    body: "Las personas que mejor conocen tu negocio dedican media jornada a tareas que no requieren conocer tu negocio: copiar, pegar, revisar, reenviar. Es el talento más caro de la empresa haciendo el trabajo más barato.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Diagnóstico",
    sub: "— semana 1",
    body: "Llamada de 20 minutos + sesión de trabajo con tu equipo. Mapeamos tus procesos, identificamos los 2–3 con mayor retorno y te damos una hoja de ruta priorizada con el ahorro estimado de cada uno. Clara y sin letra pequeña.",
    dark: false,
  },
  {
    n: "2",
    title: "Primer sprint",
    sub: "— semanas 2–4",
    body: "Empezamos por el proceso de mayor impacto. Conectamos tus sistemas, montamos la automatización y la validamos con datos reales junto a tu equipo. Valor entregado desde el primer sprint, no al final de un proyecto de 6 meses.",
    dark: false,
  },
  {
    n: "3",
    title: "Ampliar y mantener",
    sub: "— en adelante",
    body: "Proceso a proceso, vamos ampliando lo automatizado. Nosotros mantenemos, vigilamos y mejoramos todo lo que montamos: si algo falla a las 7 de la mañana, es nuestro problema, no el tuyo.",
    dark: true,
  },
];

const AUTOMATIONS = [
  { code: "A·01", title: "Facturación y cobros", body: "De albarán a factura enviada y conciliada, sin teclear. Recordatorios de pago automáticos." },
  { code: "A·02", title: "Presupuestos", body: "Genera presupuestos en minutos a partir de tu catálogo y tus reglas de precios, listos para enviar." },
  { code: "A·03", title: "Informes y reporting", body: "Los informes que hoy se montan en Excel cada semana, generados y enviados solos." },
  { code: "A·04", title: "Sincronización entre sistemas", body: "El dato se introduce una vez y viaja solo: email → CRM → ERP → contabilidad." },
  { code: "A·05", title: "Atención al cliente", body: "Agentes de IA que responden las consultas repetitivas (estado del pedido, dudas frecuentes) y escalan a tu equipo solo lo importante." },
  { code: "A·06", title: "Onboarding y documentación", body: "Altas de clientes, contratos y documentos generados a partir de plantillas, sin copiar-pegar." },
];

const PRINCIPLES = [
  {
    title: "Partner, no proveedor",
    body: "Trabajamos como tu equipo tecnológico externo, dentro de tu operativa y con tu gente. No entregamos un proyecto y desaparecemos.",
  },
  {
    title: "ROI medible o no lo hacemos",
    body: "Cada automatización lleva su ahorro estimado en la hoja de ruta. Si el primer proceso no ahorra más de lo que cuesta la cuota, te lo diremos en el diagnóstico y no firmaremos.",
  },
  {
    title: "Sin reemplazar lo que ya funciona",
    body: "Conectamos tus herramientas actuales entre sí. Solo recomendamos cambiar algo cuando es la causa real del problema — con números, no por vender.",
  },
];

const PLANS = [
  { label: "DIAGNÓSTICO", value: "Gratuito", body: "Sales con la hoja de ruta y el ahorro estimado, decidas lo que decidas." },
  { label: "COLABORACIÓN MENSUAL", value: "Cuota fija", body: "Según el alcance, definida en la hoja de ruta. Sin permanencia: te quedas mientras el retorno lo justifique." },
  { label: "TODO INCLUIDO", value: "Sin extras", body: "Desarrollo, conexiones, alojamiento, vigilancia y soporte. Sin sorpresas ni extras por hora." },
];

const FAQ = [
  {
    q: "¿Tenemos que cambiar de ERP o CRM?",
    a: "No. Trabajamos sobre lo que ya usas: conectamos tus herramientas actuales entre sí. Solo recomendamos cambiar algo cuando es la causa real del problema — y te lo diremos con números, no por vender.",
  },
  {
    q: "¿Cuánto se tarda en ver resultados?",
    a: "El primer proceso automatizado suele estar funcionando en 2–4 semanas desde la hoja de ruta. Trabajamos en sprints de 2 semanas con entregas continuas, no en proyectos de 6 meses con entrega al final.",
  },
  {
    q: '¿Esto es "poner un ChatGPT"?',
    a: "No. Usamos IA donde aporta (clasificar emails, extraer datos de documentos, responder consultas) y automatización tradicional donde es más fiable (facturas, sincronizaciones, informes). El criterio es el ROI, no la moda.",
  },
  {
    q: "¿Qué pasa si la automatización falla?",
    a: "Todo lo que montamos queda monitorizado y mantenido por nosotros, dentro de la cuota. Si algo se rompe, lo sabemos antes que tú y lo arreglamos. Tiempo de respuesta de horas, no semanas.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Accesos limitados y cifrados a tus sistemas, cumplimiento RGPD y acuerdo de confidencialidad firmado antes de empezar. Tus datos no salen de tus herramientas más de lo imprescindible.",
  },
  {
    q: "¿Sirve para una empresa de mi tamaño?",
    a: "Trabajamos con PYMEs de 5 a 100 empleados. Si tu equipo dedica más de 10 horas a la semana a tareas repetitivas, la automatización ya sale rentable — y eso pasa antes de lo que parece.",
  },
  {
    q: "¿Hay permanencia?",
    a: "No. Cuota mensual sin permanencia. Nuestra retención es que cada mes el ahorro supere la cuota.",
  },
];

export default function AutomatizacionProcesos() {
  const { isMobile, isStacked } = useViewport();

  return (
    <LandingShell
      title="Automatización de procesos para PYMEs | D&J Partners"
      description={HERO_SUB}
      footerTagline="Consultora & partner tecnológico"
    >
      {/* 01 — HERO */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "48px 20px 40px" : "88px 48px 72px",
          display: "grid",
          gridTemplateColumns: isStacked ? "1fr" : "500px 1fr",
          gap: isStacked ? 36 : 64,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1
            style={{
              fontSize: isMobile ? 31 : 46,
              lineHeight: 1.08,
              letterSpacing: isMobile ? "-0.9px" : "-1.6px",
              fontWeight: 800,
              margin: 0,
              textWrap: "balance",
            }}
          >
            Automatiza las tareas que frenan a tu equipo. Sin cambiar las herramientas que ya usas.
          </h1>
          <p style={{ fontSize: isMobile ? 16.5 : 17.5, lineHeight: 1.55, color: C.inkSoft, margin: 0, textWrap: "pretty" }}>
            {HERO_SUB}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
            <CtaButton variant="hero">Agendar diagnóstico gratuito de 20 min</CtaButton>
            <span style={{ fontSize: 13.5, color: C.muted }}>
              Sin compromiso. Sales de la llamada sabiendo qué automatizar primero y qué ahorro esperar.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              borderTop: `1px solid ${C.hair}`,
              paddingTop: 18,
              marginTop: 6,
              fontSize: 13.5,
              color: C.inkSoft,
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontWeight: 600 }}>Resultados desde el primer sprint</span>
            <span style={{ color: "#C9C6BE" }}>·</span>
            <span>Sin reemplazar lo que ya funciona</span>
            <span style={{ color: "#C9C6BE" }}>·</span>
            <span>ROI medible o no lo hacemos</span>
          </div>
        </div>

        {/* Before / after diagram */}
        <div
          style={{
            background: "#FFFFFF",
            border: `1px solid ${C.hair2}`,
            borderRadius: 12,
            boxShadow: "0 24px 60px -24px rgba(20,20,20,0.18), 0 4px 16px -8px rgba(20,20,20,0.08)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {/* HOY — A MANO */}
          <div style={{ padding: "28px 24px", borderRight: `1px dashed ${C.hair2}`, display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", color: C.rust, fontFamily: MONO }}>HOY — A MANO</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
              <div style={{ display: "flex", gap: 10, width: "100%", justifyContent: "space-between" }}>
                <DiagBox>Email</DiagBox>
                <DiagBox>CRM</DiagBox>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <DashLine />
                <div style={{ border: `1px solid ${C.ink}`, borderRadius: 100, padding: "7px 16px", fontSize: 11.5, fontWeight: 700, textAlign: "center", lineHeight: 1.3 }}>
                  una persona
                  <br />
                  <span style={{ fontWeight: 500, color: C.muted }}>copia y pega</span>
                </div>
                <DashLine />
              </div>
              <div style={{ display: "flex", gap: 10, width: "100%", justifyContent: "space-between" }}>
                <DiagBox>ERP</DiagBox>
                <DiagBox>Excel</DiagBox>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, color: C.muted, borderTop: "1px solid #F1EFEA", paddingTop: 14, marginTop: "auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>El mismo dato se teclea</span>
                <span style={{ fontWeight: 700, color: C.rust }}>4 veces</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Horas / semana</span>
                <span style={{ fontWeight: 700, color: C.rust }}>10+</span>
              </div>
            </div>
          </div>

          {/* CON D&J — AUTOMÁTICO */}
          <div style={{ padding: "28px 24px", display: "flex", flexDirection: "column", gap: 18, background: C.surface2 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", color: C.blue, fontFamily: MONO }}>CON D&amp;J — AUTOMÁTICO</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
              <div style={{ display: "flex", gap: 10, width: "100%", justifyContent: "space-between" }}>
                <DiagBox auto>Email</DiagBox>
                <DiagBox auto>CRM</DiagBox>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ width: 1, height: 14, background: C.blue }} />
                <div style={{ background: C.blue, color: "#FFFFFF", borderRadius: 100, padding: "7px 16px", fontSize: 11.5, fontWeight: 700, textAlign: "center", lineHeight: 1.3 }}>
                  flujo automático
                  <br />
                  <span style={{ fontWeight: 500, opacity: 0.8 }}>el dato viaja solo</span>
                </div>
                <div style={{ width: 1, height: 14, background: C.blue }} />
              </div>
              <div style={{ display: "flex", gap: 10, width: "100%", justifyContent: "space-between" }}>
                <DiagBox auto>ERP</DiagBox>
                <DiagBox auto>Contabilidad</DiagBox>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, color: C.muted, borderTop: `1px solid ${C.hair3}`, paddingTop: 14, marginTop: "auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>El dato se introduce</span>
                <span style={{ fontWeight: 700, color: C.blue }}>1 vez</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Horas / semana</span>
                <span style={{ fontWeight: 700, color: C.blue }}>0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — INTEGRACIONES */}
      <IntegrationsBar
        intro="Trabajamos sobre las herramientas que ya tienes:"
        items={[
          { name: "Salesforce", icon: "/lp/logos/salesforce.svg" },
          { name: "Zoho", icon: "/lp/logos/zoho.svg" },
          { name: "HubSpot", icon: "/lp/logos/hubspot.svg" },
          { name: "Holded", icon: "/lp/logos/holded.png" },
          { name: "Kounsoft", icon: "/lp/logos/kounsoft.png" },
          { name: "Google Workspace", icon: "/lp/logos/google-workspace.svg" },
          { name: "Excel", icon: "/lp/logos/excel.svg" },
          { name: "Outlook", icon: "/lp/logos/outlook.svg" },
        ]}
      />

      {/* 03 — EL DOLOR */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "64px 20px" : "96px 48px" }}>
        <h2 style={{ fontSize: isMobile ? 27 : 38, fontWeight: 800, letterSpacing: "-1.2px", margin: "0 0 48px", maxWidth: 680 }}>
          El coste invisible de hacerlo todo a mano
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", borderTop: `1px solid ${C.ink}` }}>
          {PAIN.map((p, i) => {
            const last = i === PAIN.length - 1;
            const cell: React.CSSProperties = isMobile
              ? { padding: "24px 0", borderBottom: last ? "none" : `1px solid ${C.hair}` }
              : {
                  padding: i === 0 ? "28px 32px 28px 0" : last ? "28px 0 28px 32px" : "28px 32px",
                  borderRight: last ? "none" : `1px solid ${C.hair}`,
                };
            return (
              <div key={p.n} style={{ ...cell, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.blue, fontFamily: MONO }}>{p.n}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.4px", margin: 0 }}>{p.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: C.inkSoft, margin: 0, textWrap: "pretty" }}>{p.body}</p>
              </div>
            );
          })}
        </div>
        <p
          style={{
            fontSize: isMobile ? 18 : 21,
            lineHeight: 1.5,
            fontWeight: 500,
            letterSpacing: "-0.3px",
            margin: "56px auto 0",
            maxWidth: 760,
            textAlign: "center",
            textWrap: "balance",
          }}
        >
          Suma las horas que tu equipo dedica cada semana a tareas repetitivas y multiplícalas por su coste/hora. Ese
          número — que casi nadie calcula — es lo que te está costando no automatizar.{" "}
          <span style={{ background: C.ink, color: C.paper, padding: "1px 8px" }}>En el diagnóstico lo calculamos contigo.</span>
        </p>
      </section>

      {/* 04 — CÓMO FUNCIONA */}
      <section style={{ borderTop: `1px solid ${C.hair}`, background: C.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "64px 20px" : "96px 48px" }}>
          <h2 style={{ fontSize: isMobile ? 27 : 38, fontWeight: 800, letterSpacing: "-1.2px", margin: "0 0 48px", maxWidth: 780 }}>
            De las tareas manuales al piloto automático en semanas, no meses
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 20 }}>
            {STEPS.map((s) => (
              <div
                key={s.n}
                style={{
                  background: s.dark ? C.ink : "#FFFFFF",
                  color: s.dark ? C.paper : undefined,
                  border: s.dark ? "none" : `1px solid ${C.hair2}`,
                  borderRadius: 10,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: "-3px", lineHeight: 1, color: s.dark ? C.onDarkHair : "#DDDAD2" }}>
                  {s.n}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>
                  {s.title} <span style={{ color: s.dark ? C.onDarkMuted : C.faint, fontWeight: 500 }}>{s.sub}</span>
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: s.dark ? C.onDarkSoft : C.inkSoft, margin: 0, textWrap: "pretty" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
            <CtaButton variant="mid">Quiero mi diagnóstico gratuito</CtaButton>
          </div>
        </div>
      </section>

      {/* 05 — QUÉ AUTOMATIZAMOS */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "64px 20px" : "96px 48px" }}>
        <h2 style={{ fontSize: isMobile ? 27 : 38, fontWeight: 800, letterSpacing: "-1.2px", margin: "0 0 48px", maxWidth: 700 }}>
          Si se hace igual cada vez, se puede automatizar
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 20 }}>
          {AUTOMATIONS.map((a) => (
            <div key={a.code} style={{ background: "#FFFFFF", border: `1px solid ${C.hair2}`, borderRadius: 10, padding: 26, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.blue, fontFamily: MONO }}>{a.code}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px", margin: 0 }}>{a.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: C.inkSoft, margin: 0, textWrap: "pretty" }}>{a.body}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 17, fontWeight: 500, margin: "40px 0 0", textAlign: "center", color: C.inkSoft }}>
          ¿Tu caso no está en la lista?{" "}
          <strong style={{ color: C.ink }}>Es la primera pregunta que resolvemos en el diagnóstico.</strong>
        </p>
      </section>

      {/* 06 — NUESTRO COMPROMISO */}
      <section style={{ borderTop: `1px solid ${C.hair}`, background: C.ink, color: C.paper }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "64px 20px" : "96px 48px", display: "flex", flexDirection: "column", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 720 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1.5px", color: C.onDarkMuted }}>NUESTRO COMPROMISO</span>
            <h2 style={{ fontSize: isMobile ? 27 : 34, fontWeight: 800, letterSpacing: "-1px", margin: 0, lineHeight: 1.15, textWrap: "balance" }}>
              Tres principios que firmamos antes de tocar un solo proceso
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", borderTop: `1px solid ${C.onDarkHair}` }}>
            {PRINCIPLES.map((p, i) => {
              const last = i === PRINCIPLES.length - 1;
              const cell: React.CSSProperties = isMobile
                ? { padding: "24px 0 0", borderBottom: last ? "none" : `1px solid ${C.onDarkHair}`, paddingBottom: last ? 0 : 24 }
                : {
                    padding: i === 0 ? "28px 32px 0 0" : last ? "28px 0 0 32px" : "28px 32px 0",
                    borderRight: last ? "none" : `1px solid ${C.onDarkHair}`,
                  };
              return (
                <div key={p.title} style={{ ...cell, display: "flex", flexDirection: "column", gap: 12 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.4px", margin: 0 }}>{p.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: C.onDarkSoft, margin: 0, textWrap: "pretty" }}>{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 — MODELO Y PRECIO */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "64px 20px" : "96px 48px" }}>
        <h2 style={{ fontSize: isMobile ? 27 : 38, fontWeight: 800, letterSpacing: "-1.2px", margin: "0 0 20px", maxWidth: 800 }}>
          Un partner mensual, no un presupuesto cerrado que se queda corto
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: C.inkSoft, maxWidth: 780, margin: "0 0 48px", textWrap: "pretty" }}>
          La automatización no es un proyecto que se entrega y se olvida: los procesos cambian, las herramientas se
          actualizan y siempre hay un siguiente proceso que automatizar. Por eso trabajamos como tu equipo tecnológico
          externo, con una cuota mensual fija que incluye desarrollo, mantenimiento y evolución continua.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 20 }}>
          {PLANS.map((pl) => (
            <div key={pl.label} style={{ background: "#FFFFFF", border: `1px solid ${C.hair2}`, borderRadius: 10, padding: 30, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1px", color: C.muted }}>{pl.label}</div>
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-1px" }}>{pl.value}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: C.inkSoft, margin: 0, textWrap: "pretty" }}>{pl.body}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 17, fontWeight: 500, margin: "40px auto 0", textAlign: "center", color: C.inkSoft, maxWidth: 720, textWrap: "balance" }}>
          Si el primer proceso automatizado no ahorra más de lo que cuesta la cuota, te lo diremos en el diagnóstico y no
          firmaremos. <strong style={{ color: C.ink }}>ROI medible o no lo hacemos.</strong>
        </p>
      </section>

      {/* 08 — FAQ */}
      <section style={{ borderTop: `1px solid ${C.hair}`, background: C.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "64px 20px" : "96px 48px" }}>
          <h2 style={{ fontSize: isMobile ? 27 : 38, fontWeight: 800, letterSpacing: "-1.2px", margin: "0 0 48px" }}>
            Preguntas que nos hacen siempre
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "28px 0" : "36px 56px" }}>
            {FAQ.map((f) => (
              <div key={f.q} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <h3 style={{ fontSize: 16.5, fontWeight: 700, margin: 0 }}>{f.q}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: C.inkSoft, margin: 0, textWrap: "pretty" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — CTA FINAL + CALENDARIO */}
      <BookingCalendar
        heading="Reserva tu diagnóstico gratuito de 20 minutos"
        intro="En la llamada haremos tres cosas: identificar los 2–3 procesos de tu empresa con más horas atrapadas, estimar cuánto te cuesta cada uno al año, y decirte con honestidad si automatizarlos compensa. Si no compensa, también te lo diremos."
        sidebarNote="Con uno de los dos socios fundadores. Sales con tu hoja de ruta de automatización priorizada."
        landing="automatizacion-procesos"
        calNote="Horario de Madrid (CET). Confirmación y enlace de videollamada al instante."
        footnote="Confirmación y enlace de videollamada al instante. La llamada es con uno de los dos socios fundadores, no con un comercial."
      />
    </LandingShell>
  );
}

/* ---- before/after diagram helpers ---- */

function DiagBox({ children, auto = false }: { children: React.ReactNode; auto?: boolean }) {
  return (
    <div
      style={{
        border: `1px solid ${auto ? C.blue3 : C.hair2}`,
        borderRadius: 6,
        padding: "8px 12px",
        fontSize: 11.5,
        fontWeight: 600,
        color: auto ? C.ink : C.muted,
        background: auto ? "#FFFFFF" : C.surface2,
      }}
    >
      {children}
    </div>
  );
}

function DashLine() {
  return (
    <div
      style={{
        width: 1,
        height: 14,
        background: "repeating-linear-gradient(180deg, #C9C6BE, #C9C6BE 3px, transparent 3px, transparent 6px)",
      }}
    />
  );
}
