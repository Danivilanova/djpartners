import { lazy, Suspense, useMemo, useState } from "react";
import { C, FONT, MONO } from "./tokens";
import { useViewport } from "./useViewport";
import LpLogo from "./LpLogo";

// Loaded only when a Cal.com link is configured, so the embed lib stays out of
// the default landing chunk.
const CalInlineEmbed = lazy(() => import("./CalInlineEmbed"));
const env = import.meta.env as Record<string, string | undefined>;

interface BookingCalendarProps {
  heading: string;
  intro: string;
  /** Small line in the calendar's left card (what they walk away with). */
  sidebarNote: string;
  /** Helper line under the day picker (wording differs slightly per landing). */
  calNote?: string;
  /** Microcopy under the whole card. */
  footnote: string;
  /** Landing slug for conversion attribution (e.g. "cuadro-de-mando"). */
  landing: string;
  /** Cal.com link (e.g. "djpartners/diagnostico"). Defaults to VITE_CALCOM_LINK; when unset the interactive placeholder is shown. */
  calLink?: string;
}

const SLOT_LABELS = ["09:00", "09:30", "10:00", "11:30", "12:00", "16:00", "16:30", "17:00"];

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Next 5 weekdays starting tomorrow, as the design's placeholder calendar. */
function getDays() {
  const out: { dow: string; num: number; full: string }[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (out.length < 5) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      out.push({
        dow: d.toLocaleDateString("es-ES", { weekday: "short" }).replace(".", ""),
        num: d.getDate(),
        full: d.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" }),
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}

/**
 * Section 9 — the page's single conversion point. Renders the real Cal.com
 * inline embed when a calLink (env VITE_CALCOM_LINK) is set; otherwise shows the
 * interactive placeholder from the design (clickable day + time, no real
 * booking). id="agenda" is the scroll target for every CTA.
 */
export default function BookingCalendar({
  heading,
  intro,
  sidebarNote,
  calNote = "Horario de Madrid (CET). Recibirás la confirmación y el enlace de videollamada al instante.",
  footnote,
  landing,
  calLink = env.VITE_CALCOM_LINK,
}: BookingCalendarProps) {
  const { isMobile } = useViewport();
  const [selDay, setSelDay] = useState(0);
  const [selSlot, setSelSlot] = useState<number | null>(null);

  const days = useMemo(() => getDays(), []);
  const now = useMemo(() => new Date(), []);
  const monthLabel = cap(now.toLocaleDateString("es-ES", { month: "long", year: "numeric" }));
  const selDayLabel = days[selDay] ? cap(days[selDay].full) : "";

  const dayBtnStyle = (i: number): React.CSSProperties => {
    const sel = i === selDay;
    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      border: `1px solid ${sel ? C.ink : C.hair2}`,
      background: sel ? C.ink : "#FFFFFF",
      color: sel ? C.paper : C.ink,
      borderRadius: 8,
      padding: "10px 0",
      width: 64,
      cursor: "pointer",
      fontFamily: FONT,
    };
  };

  const slotBtnStyle = (i: number): React.CSSProperties => {
    const sel = i === selSlot;
    return {
      border: `1px solid ${sel ? C.ink : C.hair2}`,
      background: sel ? C.ink : "#FFFFFF",
      color: sel ? C.paper : C.ink,
      borderRadius: 6,
      padding: "10px 0",
      fontSize: 13.5,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: FONT,
      width: "100%",
    };
  };

  return (
    <section
      id="agenda"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: isMobile ? "64px 20px" : "96px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: isMobile ? "0 auto 36px" : "0 auto 48px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? 27 : 38,
            fontWeight: 800,
            letterSpacing: "-1.2px",
            margin: 0,
            textWrap: "balance",
          }}
        >
          {heading}
        </h2>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: C.inkSoft, margin: 0 }}>{intro}</p>
      </div>

      {calLink ? (
        // Real Cal.com inline embed — active once VITE_CALCOM_LINK is set.
        <div
          style={{
            background: "#FFFFFF",
            border: `1px solid ${C.hair2}`,
            borderRadius: 12,
            boxShadow: "0 16px 48px -24px rgba(20,20,20,0.15)",
            overflow: "hidden",
            minHeight: 600,
          }}
        >
          <Suspense
            fallback={<div style={{ padding: 48, textAlign: "center", color: C.muted }}>Cargando calendario…</div>}
          >
            <CalInlineEmbed calLink={calLink} landing={landing} />
          </Suspense>
        </div>
      ) : (
        // Interactive placeholder shown until a Cal.com link is configured.
        <div
          style={{
            background: "#FFFFFF",
            border: `1px solid ${C.hair2}`,
            borderRadius: 12,
            boxShadow: "0 16px 48px -24px rgba(20,20,20,0.15)",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "280px 1fr 220px",
            overflow: "hidden",
          }}
        >
        {/* Left: event summary */}
        <div
          style={{
            padding: 28,
            borderRight: isMobile ? "none" : `1px solid ${C.hair3}`,
            borderBottom: isMobile ? `1px solid ${C.hair3}` : "none",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <LpLogo size="small" />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Diagnóstico gratuito</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: C.muted }}>
              <span style={{ width: 14, height: 14, border: `1.5px solid ${C.muted}`, borderRadius: "50%", display: "inline-block" }} />
              <span>20 minutos</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: C.muted }}>
              <span style={{ width: 14, height: 14, border: `1.5px solid ${C.muted}`, borderRadius: 3, display: "inline-block" }} />
              <span>Videollamada</span>
            </div>
          </div>
          <p style={{ fontSize: 12.5, lineHeight: 1.55, color: C.faint, margin: 0 }}>{sidebarNote}</p>
          <div
            style={{
              marginTop: isMobile ? 0 : "auto",
              fontFamily: MONO,
              fontSize: 10,
              color: "#B5B2AA",
              border: "1px dashed #DDDAD2",
              borderRadius: 5,
              padding: "8px 10px",
              lineHeight: 1.5,
            }}
          >
            placeholder — aquí va el embed inline de Cal.com
          </div>
        </div>

        {/* Middle: day picker */}
        <div
          style={{
            padding: 28,
            borderRight: isMobile ? "none" : `1px solid ${C.hair3}`,
            borderBottom: isMobile ? `1px solid ${C.hair3}` : "none",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 700 }}>{monthLabel}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {days.map((d, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setSelDay(i);
                  setSelSlot(null);
                }}
                style={dayBtnStyle(i)}
              >
                <span style={{ fontSize: 10.5, fontWeight: 600, opacity: 0.7 }}>{d.dow}</span>
                <span style={{ fontSize: 17, fontWeight: 800 }}>{d.num}</span>
              </button>
            ))}
          </div>
          <p style={{ fontSize: 12, color: C.faint, margin: "auto 0 0" }}>{calNote}</p>
        </div>

        {/* Right: slot picker */}
        <div
          style={{
            padding: "28px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            maxHeight: isMobile ? undefined : 340,
            overflowY: isMobile ? "visible" : "auto",
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: C.muted }}>{selDayLabel}</div>
          {SLOT_LABELS.map((label, i) => (
            <button key={i} type="button" onClick={() => setSelSlot(i)} style={slotBtnStyle(i)}>
              {label}
            </button>
          ))}
          {selSlot !== null && (
            <div
              style={{
                background: "#F0F6EE",
                border: "1px solid #BCD9B4",
                color: "#2E5B25",
                borderRadius: 6,
                padding: "10px 12px",
                fontSize: 12,
                lineHeight: 1.5,
                fontWeight: 600,
              }}
            >
              Hueco seleccionado — en la página real, Cal.com pediría aquí tu email y las 3 preguntas de
              cualificación.
            </div>
          )}
        </div>
      </div>
      )}
      <p style={{ textAlign: "center", fontSize: 13, color: C.muted, margin: "20px 0 0" }}>{footnote}</p>
    </section>
  );
}
