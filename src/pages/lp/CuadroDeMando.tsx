import { C, MONO } from "@/components/lp/tokens";
import { useViewport } from "@/components/lp/useViewport";
import LandingShell from "@/components/lp/LandingShell";
import IntegrationsBar from "@/components/lp/IntegrationsBar";
import BookingCalendar from "@/components/lp/BookingCalendar";
import CtaButton from "@/components/lp/CtaButton";

const HERO_SUB =
  "Diseñamos, construimos y mantenemos tu cuadro de mando a medida: ventas, facturación, operaciones. Tú abres el panel cada mañana y decides. Nosotros nos ocupamos de todo lo demás.";

const PAIN = [
  {
    n: "01",
    title: "El Excel de los lunes",
    body: 'Cada semana, alguien de tu equipo pierde media mañana copiando datos del CRM a una hoja de cálculo para "el informe de dirección". Y cuando llega a tu mesa, los datos ya son de la semana pasada.',
  },
  {
    n: "02",
    title: "Cada herramienta cuenta una historia distinta",
    body: "Las ventas están en el CRM, la facturación en el ERP, los gastos en otro sitio. Nadie tiene la foto completa, así que las decisiones se toman por intuición… o no se toman.",
  },
  {
    n: "03",
    title: "Lo intentaste con Power BI",
    body: "Compraste licencias, alguien hizo un curso, y seis meses después el dashboard sigue a medias porque nadie en la empresa tiene tiempo (ni oficio) para mantenerlo.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Diagnóstico",
    sub: "— semana 0",
    body: "Una llamada de 20 minutos + una sesión de trabajo. Definimos contigo las 8–12 métricas que de verdad mueven tu negocio. Ni una más.",
    dark: false,
  },
  {
    n: "2",
    title: "Construcción",
    sub: "— semanas 1–2",
    body: "Conectamos tu CRM, tu ERP y tus hojas de cálculo. Construimos el panel a medida y lo validamos contigo hasta que cada número cuadra.",
    dark: false,
  },
  {
    n: "3",
    title: "En marcha, y mantenido",
    sub: "— siempre",
    body: "Tu dashboard se actualiza solo, cada día. Si cambia tu negocio, cambia tu panel: nuevas métricas, nuevas fuentes, nuevas vistas. Todo dentro de tu cuota.",
    dark: true,
  },
];

const FAQ = [
  {
    q: "¿Con qué herramientas conectáis?",
    a: "Salesforce, Zoho, HubSpot, ERPs como Holded o Kounsoft, hojas de cálculo y prácticamente cualquier sistema con exportación o API. Si tu herramienta es rara, dínoslo en la llamada y te confirmamos en 48h.",
  },
  {
    q: "¿Cuánto tarda en estar funcionando?",
    a: "Entre 2 y 3 semanas desde la sesión de definición de KPIs. No hacemos proyectos de 6 meses: preferimos un panel útil en semanas y mejorarlo cada mes.",
  },
  {
    q: "¿Qué incluye exactamente la cuota mensual?",
    a: "Todo: el panel, las conexiones de datos, el alojamiento, el mantenimiento y las mejoras continuas (nuevas métricas, nuevas vistas, nuevas fuentes). No hay extras ocultos.",
  },
  {
    q: "¿Y si quiero cambiar métricas o añadir áreas más adelante?",
    a: "Está incluido. Tu negocio cambia y el panel cambia contigo. Es la diferencia entre un proyecto y un servicio.",
  },
  {
    q: "¿Dónde están mis datos? ¿Es seguro?",
    a: "Tus datos no salen de tus sistemas más de lo imprescindible: el panel lee de tus herramientas con accesos limitados y cifrados. Cumplimos RGPD y firmamos acuerdo de confidencialidad antes de tocar un solo dato.",
  },
  {
    q: "¿Esto sirve para una empresa de mi tamaño?",
    a: "Trabajamos con PYMEs de entre 5 y 100 empleados. Si facturas más de ~500.000€/año y decides mirando hojas de cálculo, eres exactamente nuestro cliente.",
  },
  {
    q: "¿Hay permanencia?",
    a: "No. Cuota mensual, te quedas mientras te aporte. Nuestra permanencia es que el panel te sea imprescindible.",
  },
];

export default function CuadroDeMando() {
  const { isMobile, isStacked } = useViewport();

  return (
    <LandingShell
      title="Cuadro de mando a medida para PYMEs | D&J Partners"
      description={HERO_SUB}
      footerTagline="Consultoría en IA y datos para PYMEs"
    >
      {/* 01 — HERO */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "48px 20px 40px" : "88px 48px 72px",
          display: "grid",
          gridTemplateColumns: isStacked ? "1fr" : "480px 1fr",
          gap: isStacked ? 36 : 64,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1
            style={{
              fontSize: isMobile ? 33 : 50,
              lineHeight: 1.06,
              letterSpacing: isMobile ? "-1px" : "-1.8px",
              fontWeight: 800,
              margin: 0,
              textWrap: "balance",
            }}
          >
            Todos tus KPIs en un solo panel. Actualizado solo, todos los días.
          </h1>
          <p style={{ fontSize: isMobile ? 16.5 : 18, lineHeight: 1.55, color: C.inkSoft, margin: 0, textWrap: "pretty" }}>
            {HERO_SUB}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
            <CtaButton variant="hero">Agendar diagnóstico gratuito de 20 min</CtaButton>
            <span style={{ fontSize: 13.5, color: C.muted }}>
              Sin compromiso. Te enseñamos un dashboard real en la llamada.
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
            <span style={{ fontWeight: 600 }}>Cuota mensual fija desde 1.200€/mes</span>
            <span style={{ color: "#C9C6BE" }}>·</span>
            <span>Sin licencias</span>
            <span style={{ color: "#C9C6BE" }}>·</span>
            <span>Sin proyectos de 6 meses</span>
          </div>
        </div>

        {/* Dashboard mockup (browser frame) */}
        <div
          style={{
            background: "#FFFFFF",
            border: `1px solid ${C.hair2}`,
            borderRadius: 12,
            boxShadow: "0 24px 60px -24px rgba(20,20,20,0.18), 0 4px 16px -8px rgba(20,20,20,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 14px",
              borderBottom: "1px solid #EEECE7",
              background: C.surface2,
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E4E2DC" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E4E2DC" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E4E2DC" }} />
            </div>
            <div
              style={{
                flex: 1,
                background: "#F1EFEA",
                borderRadius: 5,
                padding: "5px 12px",
                fontSize: 11,
                color: C.faint,
                fontFamily: MONO,
              }}
            >
              panel.djpartners.es/direccion
            </div>
          </div>
          <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.3px" }}>Panel de dirección</div>
              <div style={{ fontSize: 11, color: C.faint }}>Actualizado hoy, 06:00</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 10 }}>
              {[
                { k: "VENTAS MES", v: "238.400€", d: "+12,4%", c: C.blue },
                { k: "FACTURADO", v: "192.750€", d: "+8,1%", c: C.blue },
                { k: "POR COBRAR", v: "64.120€", d: "12 facturas", c: C.rust },
                { k: "MARGEN", v: "31,2%", d: "+1,9 pts", c: C.blue },
              ].map((m) => (
                <div key={m.k} style={{ border: `1px solid ${C.hair3}`, borderRadius: 8, padding: 12 }}>
                  <div style={{ fontSize: 10.5, color: C.faint, fontWeight: 600 }}>{m.k}</div>
                  <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.5px", marginTop: 4 }}>{m.v}</div>
                  <div style={{ fontSize: 11, color: m.c, fontWeight: 700, marginTop: 2 }}>{m.d}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 10 }}>
              <div style={{ border: `1px solid ${C.hair3}`, borderRadius: 8, padding: 14 }}>
                <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 12 }}>
                  Ventas por mes <span style={{ color: C.faint, fontWeight: 500 }}>— últimos 12 meses</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 92 }}>
                  {[38, 46, 41, 55, 49, 62, 58, 70, 64, 77, 84, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background: i === 11 ? C.blue : i === 10 ? C.blue3 : C.blue4,
                        borderRadius: "3px 3px 0 0",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div style={{ border: `1px solid ${C.hair3}`, borderRadius: 8, padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700 }}>Pipeline por fase</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 10.5, color: C.inkSoft }}>
                  {[
                    { label: "Propuesta", v: "412k€", w: "88%", c: C.blue },
                    { label: "Negociación", v: "186k€", w: "46%", c: C.blue2 },
                    { label: "Cierre previsto", v: "94k€", w: "24%", c: C.blue3 },
                  ].map((p) => (
                    <div key={p.label} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>{p.label}</span>
                        <span style={{ fontWeight: 700 }}>{p.v}</span>
                      </div>
                      <div style={{ height: 7, background: "#F1EFEA", borderRadius: 4 }}>
                        <div style={{ width: p.w, height: "100%", background: p.c, borderRadius: 4 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — INTEGRACIONES */}
      <IntegrationsBar
        intro="Conectamos con las herramientas que ya usas:"
        items={[
          { name: "Salesforce", icon: "/lp/logos/salesforce.svg" },
          { name: "Zoho", icon: "/lp/logos/zoho.svg" },
          { name: "HubSpot", icon: "/lp/logos/hubspot.svg" },
          { name: "Holded", icon: "/lp/logos/holded.png" },
          { name: "Kounsoft", icon: "/lp/logos/kounsoft.png" },
          { name: "Google Sheets", icon: "/lp/logos/google-sheets.svg" },
          { name: "Excel", icon: "/lp/logos/excel.svg" },
        ]}
      />

      {/* 03 — EL DOLOR */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "64px 20px" : "96px 48px" }}>
        <h2 style={{ fontSize: isMobile ? 27 : 38, fontWeight: 800, letterSpacing: "-1.2px", margin: "0 0 48px", maxWidth: 640 }}>
          ¿Te suena alguno de estos lunes?
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
            maxWidth: 720,
            textAlign: "center",
            textWrap: "balance",
          }}
        >
          El problema no es la falta de datos. Es que nadie en tu empresa tiene como trabajo convertirlos en
          respuestas.{" "}
          <span style={{ background: C.ink, color: C.paper, padding: "1px 8px" }}>Ese es exactamente nuestro trabajo.</span>
        </p>
      </section>

      {/* 04 — CÓMO FUNCIONA */}
      <section style={{ borderTop: `1px solid ${C.hair}`, background: C.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "64px 20px" : "96px 48px" }}>
          <h2 style={{ fontSize: isMobile ? 27 : 38, fontWeight: 800, letterSpacing: "-1.2px", margin: "0 0 48px", maxWidth: 700 }}>
            De cero a tu cuadro de mando en 2–3 semanas
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

      {/* 05 — DEMO VISUAL */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "64px 20px" : "96px 48px" }}>
        <h2 style={{ fontSize: isMobile ? 27 : 38, fontWeight: 800, letterSpacing: "-1.2px", margin: "0 0 48px", maxWidth: 700 }}>
          Así se ve tener el negocio bajo control
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
          {/* Card A — Pipeline funnel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={demoCard}>
              <div style={{ fontSize: 11, fontWeight: 700 }}>Pipeline de ventas</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7, fontSize: 10, color: C.inkSoft }}>
                <div style={{ ...funnelBar, width: "100%", background: C.blue, color: "#fff" }}>Leads — 148</div>
                <div style={{ ...funnelBar, width: "76%", background: "#4C8BDD", color: "#fff" }}>Cualificados — 92</div>
                <div style={{ ...funnelBar, width: "52%", background: C.blue2, color: "#fff" }}>Propuesta — 41</div>
                <div style={{ ...funnelBar, width: "30%", background: C.blue3, color: "#1A3B66" }}>Cierre — 17</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: C.faint, borderTop: "1px solid #F1EFEA", paddingTop: 10 }}>
                <span>Conversión global</span>
                <span style={{ fontWeight: 700, color: C.ink }}>11,5%</span>
              </div>
            </div>
            <DemoLabel title="Ventas en tiempo real" body="Pipeline, conversión y previsión de cierre, conectado directo a tu CRM." />
          </div>

          {/* Card B — Facturación table */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ ...demoCard, gap: 10 }}>
              <div style={{ fontSize: 11, fontWeight: 700 }}>Facturación y cobros</div>
              <div style={{ display: "flex", flexDirection: "column", fontSize: 10.5 }}>
                <div style={{ ...invRow, color: C.faint, fontWeight: 600 }}>
                  <span>CLIENTE</span>
                  <span>VENCE</span>
                  <span>IMPORTE</span>
                </div>
                <div style={invRow}>
                  <span>Talleres Mira S.L.</span>
                  <span style={{ color: C.rust, fontWeight: 700 }}>hoy</span>
                  <span style={{ fontWeight: 700 }}>8.420€</span>
                </div>
                <div style={invRow}>
                  <span>Construc. Vallès</span>
                  <span>jue 18</span>
                  <span style={{ fontWeight: 700 }}>12.900€</span>
                </div>
                <div style={invRow}>
                  <span>Dist. Norte S.A.</span>
                  <span>vie 19</span>
                  <span style={{ fontWeight: 700 }}>5.310€</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: C.faint, marginTop: "auto" }}>
                <span>Pendiente esta semana</span>
                <span style={{ fontWeight: 700, color: C.ink }}>26.630€</span>
              </div>
            </div>
            <DemoLabel title="Facturación y cobros" body="Qué has facturado, qué te deben y qué vence esta semana." />
          </div>

          {/* Card C — Panel + phone */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ ...demoCard, flexDirection: "row", gap: 14 }}>
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, alignContent: "start" }}>
                {[
                  { k: "VENTAS", v: "238k€" },
                  { k: "MARGEN", v: "31,2%" },
                  { k: "COBROS", v: "64k€" },
                  { k: "PEDIDOS", v: "312" },
                ].map((m) => (
                  <div key={m.k} style={{ border: `1px solid ${C.hair3}`, borderRadius: 6, padding: 9 }}>
                    <div style={{ fontSize: 9, color: C.faint, fontWeight: 600 }}>{m.k}</div>
                    <div style={{ fontSize: 14, fontWeight: 800 }}>{m.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ width: 84, border: `1px solid ${C.hair3}`, borderRadius: 12, padding: "8px 6px", display: "flex", flexDirection: "column", gap: 5, background: C.surface2 }}>
                <div style={{ width: 28, height: 3, background: "#DDDAD2", borderRadius: 2, margin: "0 auto" }} />
                <div style={{ border: `1px solid ${C.hair3}`, background: "#fff", borderRadius: 4, padding: 5 }}>
                  <div style={{ fontSize: 7, color: C.faint }}>VENTAS</div>
                  <div style={{ fontSize: 10, fontWeight: 800 }}>238k€</div>
                </div>
                <div style={{ border: `1px solid ${C.hair3}`, background: "#fff", borderRadius: 4, padding: 5 }}>
                  <div style={{ fontSize: 7, color: C.faint }}>MARGEN</div>
                  <div style={{ fontSize: 10, fontWeight: 800 }}>31,2%</div>
                </div>
                <div style={{ height: 22, display: "flex", alignItems: "flex-end", gap: 2, padding: "0 2px" }}>
                  <div style={{ flex: 1, height: "45%", background: C.blue3, borderRadius: 1 }} />
                  <div style={{ flex: 1, height: "70%", background: C.blue2, borderRadius: 1 }} />
                  <div style={{ flex: 1, height: "100%", background: C.blue, borderRadius: 1 }} />
                </div>
              </div>
            </div>
            <DemoLabel title="Tu panel de dirección" body="Las 10 métricas clave de tu empresa en una sola pantalla, también desde el móvil." />
          </div>
        </div>
      </section>

      {/* 06 — CASO DE ÉXITO */}
      <section style={{ borderTop: `1px solid ${C.hair}`, background: C.ink, color: C.paper }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: isMobile ? "64px 20px" : "96px 48px",
            display: "grid",
            gridTemplateColumns: isStacked ? "1fr" : "1fr 380px",
            gap: isStacked ? 36 : 64,
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1.5px", color: C.onDarkMuted }}>CASO DE ÉXITO</span>
              <span style={{ display: "inline-flex", alignItems: "center", background: "#FFFFFF", borderRadius: 5, padding: "5px 9px" }}>
                <img src="/lp/grup-pous.png" alt="Grup Pous" style={{ height: 20, width: "auto", display: "block" }} />
              </span>
            </div>
            <h2 style={{ fontSize: isMobile ? 27 : 34, fontWeight: 800, letterSpacing: "-1px", margin: 0, lineHeight: 1.15, textWrap: "balance" }}>
              Cómo Grup Pous puso 80 años de datos de su ERP a trabajar para dirección
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 15.5, lineHeight: 1.6, color: C.onDarkSoft }}>
              <p style={{ margin: 0 }}>
                <strong style={{ color: C.paper }}>El antes:</strong> 80 años de operativa acumulados en su ERP, pero para
                saber cómo iba el negocio había que pedir exportaciones manuales. Cualquier cifra —facturación, clientes,
                stock— tardaba días en llegar a dirección.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: C.paper }}>Lo que montamos:</strong> un cuadro de mando conectado directo a su ERP,
                con ventas, comandas, clientes e inventario en una sola pantalla, actualizado cada madrugada —y la opción de
                preguntarle al panel en lenguaje natural.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16, borderTop: `1px solid ${C.onDarkHair}`, paddingTop: 24 }}>
              {[
                { big: "Días → segundos", small: "para tener cualquier dato del ERP en pantalla" },
                { big: "90 tablas", small: "de su ERP, conectadas en un solo panel" },
                { big: "4 áreas", small: "ventas, comandas, clientes e inventario, al día" },
              ].map((st) => (
                <div key={st.big} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-1px" }}>{st.big}</div>
                  <div style={{ fontSize: 12.5, color: C.onDarkMuted, lineHeight: 1.45 }}>{st.small}</div>
                </div>
              ))}
            </div>
            <blockquote style={{ margin: 0, borderLeft: `2px solid ${C.gold}`, paddingLeft: 20, fontSize: 18, lineHeight: 1.5, fontStyle: "italic", color: "#E8E6E0" }}>
              “Llevábamos 80 años acumulando datos que casi no sabíamos usar. Ahora abro el panel cada mañana y sé
              exactamente cómo va el negocio, sin pedirle un informe a nadie.”
              <br />
              <span style={{ fontSize: 13, fontStyle: "normal", color: C.onDarkMuted }}>— Miquel Pous · Gerente, Grup Pous</span>
            </blockquote>
          </div>
          <GrupPousDashboard />
        </div>
      </section>

      {/* 07 — PRECIO */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "64px 20px" : "96px 48px" }}>
        <h2 style={{ fontSize: isMobile ? 27 : 38, fontWeight: 800, letterSpacing: "-1.2px", margin: "0 0 20px" }}>
          Precio claro, sin sorpresas
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: C.inkSoft, maxWidth: 760, margin: "0 0 48px", textWrap: "pretty" }}>
          <strong style={{ color: C.ink }}>Desde 1.200€/mes, todo incluido:</strong> diseño, construcción, conexiones con
          tus herramientas, mantenimiento y evolución continua del panel. Sin coste de entrada, sin licencias aparte,
          sin permanencia anual.
        </p>
        <div style={{ overflowX: isMobile ? "auto" : "visible" }}>
          <PricingTable />
        </div>
        <p style={{ fontSize: 17, fontWeight: 500, margin: "36px 0 0", textAlign: "center", color: C.inkSoft, textWrap: "balance" }}>
          Si tu equipo dedica más de 10 horas al mes a montar informes,{" "}
          <strong style={{ color: C.ink }}>el panel ya sale más barato que no tenerlo.</strong>
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
        intro="En la llamada haremos tres cosas: entender cómo mides hoy tu negocio, enseñarte un cuadro de mando real funcionando, y decirte con honestidad si esto tiene sentido para tu empresa. Si no lo tiene, te lo diremos también."
        sidebarNote="Con uno de los dos socios fundadores. Te enseñamos un dashboard real funcionando."
        landing="cuadro-de-mando"
        calNote="Horario de Madrid (CET). Recibirás la confirmación y el enlace de videollamada al instante."
        footnote="Recibirás la confirmación y el enlace de videollamada al instante. La llamada es con uno de los dos socios fundadores, no con un comercial."
      />
    </LandingShell>
  );
}

/* ---- small local helpers ---- */

const demoCard: React.CSSProperties = {
  background: "#FFFFFF",
  border: `1px solid ${C.hair2}`,
  borderRadius: 10,
  padding: 18,
  boxShadow: "0 12px 32px -16px rgba(20,20,20,0.12)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  minHeight: 220,
};

const funnelBar: React.CSSProperties = {
  height: 26,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  fontWeight: 700,
};

const invRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "7px 0",
  borderBottom: "1px solid #F1EFEA",
};

function DemoLabel({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ fontSize: 16, fontWeight: 700 }}>{title}</div>
      <p style={{ fontSize: 14, lineHeight: 1.55, color: C.inkSoft, margin: 0 }}>{body}</p>
    </div>
  );
}

function PricingTable() {
  const head: React.CSSProperties = { padding: "18px 20px", borderBottom: `1px solid ${C.hair3}`, fontWeight: 700, fontSize: 13.5, lineHeight: 1.4, background: C.surface2 };
  const rowLabel: React.CSSProperties = { padding: "16px 20px", borderBottom: `1px solid ${C.hair3}`, fontWeight: 600, color: C.muted, fontSize: 12.5 };
  const cell: React.CSSProperties = { padding: "16px 20px", borderBottom: `1px solid ${C.hair3}`, borderLeft: `1px solid ${C.hair3}`, color: C.inkSoft };
  const us: React.CSSProperties = { padding: "16px 20px", borderBottom: `1px solid ${C.hair3}`, borderLeft: `2px solid ${C.ink}`, fontWeight: 800 };

  const rows: { label: string; a: string; b: string; us: string }[] = [
    { label: "Coste inicial", a: "Licencias + cientos de horas", b: "10.000–30.000€ de proyecto", us: "0€" },
    { label: "Tiempo hasta tener algo", a: "Meses (si llega)", b: "3–6 meses", us: "2–3 semanas" },
    { label: "¿Quién lo mantiene?", a: "Nadie (ese es el problema)", b: "Nadie, o a precio de hora extra", us: "Nosotros, incluido" },
    { label: "Coste mensual", a: "Tu tiempo (el más caro)", b: "—", us: "Desde 1.200€/mes" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr 1fr 1.1fr",
        minWidth: 680,
        border: `1px solid ${C.hair2}`,
        borderRadius: 10,
        overflow: "hidden",
        fontSize: 14,
        background: "#FFFFFF",
      }}
    >
      {/* header row */}
      <div style={{ padding: "18px 20px", borderBottom: `1px solid ${C.hair3}`, background: C.surface2 }} />
      <div style={{ ...head, borderLeft: `1px solid ${C.hair3}` }}>
        Hacerlo en casa
        <br />
        <span style={{ fontWeight: 500, color: C.faint, fontSize: 12 }}>Power BI + horas internas</span>
      </div>
      <div style={{ ...head, borderLeft: `1px solid ${C.hair3}` }}>
        Consultora tradicional
        <br />
        <span style={{ fontWeight: 500, color: C.faint, fontSize: 12 }}>proyecto cerrado</span>
      </div>
      <div style={{ padding: "18px 20px", borderBottom: `1px solid ${C.ink}`, borderLeft: `2px solid ${C.ink}`, borderTop: `2px solid ${C.ink}`, fontWeight: 800, fontSize: 13.5, lineHeight: 1.4, background: C.ink, color: C.paper }}>
        D&amp;J Partners
        <br />
        <span style={{ fontWeight: 500, color: C.onDarkMuted, fontSize: 12 }}>BI gestionado</span>
      </div>

      {/* data rows */}
      {rows.map((r, idx) => {
        const lastRow = idx === rows.length - 1;
        return (
          <div key={r.label} style={{ display: "contents" }}>
            <div style={lastRow ? { ...rowLabel, borderBottom: "none" } : rowLabel}>{r.label}</div>
            <div style={lastRow ? { ...cell, borderBottom: "none" } : cell}>{r.a}</div>
            <div style={lastRow ? { ...cell, borderBottom: "none" } : cell}>{r.b}</div>
            <div style={lastRow ? { ...us, borderBottom: `2px solid ${C.ink}` } : us}>{r.us}</div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Illustrative dashboard mockup for the Grup Pous case (their real managed BI
 * panel over the Kounsoft ERP: tabs Vendes · Comandes · Clients · Inventari).
 * Swap for a real screenshot when available.
 */
function GrupPousDashboard() {
  const kpis = [
    { k: "FACTURACIÓ MES", v: "182.400€", d: "+9,3%", c: C.blue },
    { k: "COMANDES EN SERVEI", v: "47", d: "aquesta setmana", c: C.faint },
    { k: "CLIENTS ACTIUS", v: "1.284", d: "+38 nous", c: C.blue },
    { k: "STOCK PARAT", v: "214 ref.", d: "8,4% del catàleg", c: C.rust },
  ];
  const topClients = [
    { n: "Catering Empordà", v: "9,2%", w: "92%" },
    { n: "Hotels Costa Brava", v: "6,1%", w: "61%" },
    { n: "Ajuntament de Girona", v: "4,7%", w: "47%" },
  ];
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 12,
        boxShadow: "0 30px 60px -24px rgba(0,0,0,0.55)",
        overflow: "hidden",
        color: C.ink,
      }}
    >
      {/* browser bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderBottom: "1px solid #EEECE7", background: C.surface2 }}>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E4E2DC" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E4E2DC" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E4E2DC" }} />
        </div>
        <div style={{ flex: 1, background: "#F1EFEA", borderRadius: 5, padding: "5px 12px", fontSize: 11, color: C.faint, fontFamily: MONO }}>
          panel.djpartners.es/grup-pous
        </div>
      </div>
      <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.3px" }}>Panel de dirección</div>
          <img src="/lp/grup-pous.png" alt="Grup Pous" style={{ height: 22, width: "auto", display: "block" }} />
        </div>
        {/* tabs */}
        <div style={{ display: "flex", gap: 18, borderBottom: `1px solid ${C.hair3}`, fontSize: 11.5 }}>
          {["Vendes", "Comandes", "Clients", "Inventari"].map((t, i) => (
            <div
              key={t}
              style={{
                paddingBottom: 8,
                marginBottom: -1,
                fontWeight: 700,
                color: i === 0 ? C.ink : C.faint,
                borderBottom: i === 0 ? `2px solid ${C.ink}` : "2px solid transparent",
              }}
            >
              {t}
            </div>
          ))}
        </div>
        {/* KPI grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {kpis.map((m) => (
            <div key={m.k} style={{ border: `1px solid ${C.hair3}`, borderRadius: 8, padding: 10 }}>
              <div style={{ fontSize: 9.5, color: C.faint, fontWeight: 600 }}>{m.k}</div>
              <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.4px", marginTop: 3 }}>{m.v}</div>
              <div style={{ fontSize: 10, color: m.c, fontWeight: 700, marginTop: 2 }}>{m.d}</div>
            </div>
          ))}
        </div>
        {/* top clients */}
        <div style={{ border: `1px solid ${C.hair3}`, borderRadius: 8, padding: 12, display: "flex", flexDirection: "column", gap: 9 }}>
          <div style={{ fontSize: 10.5, fontWeight: 700 }}>
            Top clients <span style={{ color: C.faint, fontWeight: 500 }}>— per facturació</span>
          </div>
          {topClients.map((r) => (
            <div key={r.n} style={{ display: "flex", flexDirection: "column", gap: 3, fontSize: 10, color: C.inkSoft }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{r.n}</span>
                <span style={{ fontWeight: 700, color: C.ink }}>{r.v}</span>
              </div>
              <div style={{ height: 6, background: "#F1EFEA", borderRadius: 4 }}>
                <div style={{ width: r.w, height: "100%", background: C.blue, borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
