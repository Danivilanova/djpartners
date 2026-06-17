import { C } from "./tokens";
import { useViewport } from "./useViewport";

export interface LogoItem {
  name: string;
  /** Path under /public, e.g. "/lp/logos/salesforce.svg". */
  icon: string;
}

interface IntegrationsBarProps {
  intro: string;
  items: LogoItem[];
}

/**
 * Social-proof / integrations strip. Striped placeholders stand in for the real
 * tool logos (to be dropped in later — see /lp guide).
 */
export default function IntegrationsBar({ intro, items }: IntegrationsBarProps) {
  const { isMobile } = useViewport();
  return (
    <section
      style={{
        borderTop: `1px solid ${C.hair}`,
        borderBottom: `1px solid ${C.hair}`,
        background: C.surface,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "24px 20px" : "28px 48px",
          display: "flex",
          alignItems: "center",
          gap: isMobile ? 16 : 28,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: 13,
            color: C.muted,
            fontWeight: 600,
            whiteSpace: isMobile ? "normal" : "nowrap",
          }}
        >
          {intro}
        </span>
        <div style={{ display: "flex", gap: isMobile ? 18 : 26, rowGap: 14, flexWrap: "wrap", flex: 1, alignItems: "center" }}>
          {items.map((it) => (
            <img
              key={it.name}
              src={it.icon}
              alt={it.name}
              loading="lazy"
              style={{
                maxHeight: 26,
                maxWidth: 116,
                display: "block",
                // "logos en gris" — muted, monochrome social-proof treatment.
                filter: "grayscale(1) opacity(0.55)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
