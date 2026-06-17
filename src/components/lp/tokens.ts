/**
 * Design tokens for the "Tinta" landing system (exported from Claude Design,
 * V1 - Tinta). Monochrome paper/ink palette, Helvetica, single blue accent
 * reserved for data. Values are copied verbatim from the design source so the
 * React pages render identically to the prototype.
 */

export const C = {
  paper: "#FBFBF9", // page background
  ink: "#161616", // primary text / CTAs
  black: "#000000", // CTA hover
  inkSoft: "#4A4A46", // body copy
  muted: "#76746E", // secondary labels
  faint: "#8A877F", // tertiary / mono labels
  hair: "#E7E5E0", // section hairlines
  hair2: "#E2E0DA", // card borders
  hair3: "#ECEAE4", // inner borders
  surface: "#F6F5F1", // alternating band background
  surface2: "#FAFAF8", // subtle card header background
  blue: "#1D6FD1", // data accent
  blue2: "#6BA3E8",
  blue3: "#9FC2EE",
  blue4: "#C9DCF5",
  rust: "#B0543A", // overdue / negative
  gold: "#B8862B", // "DATOS DE EJEMPLO" badge
  onDark: "#FBFBF9",
  onDarkSoft: "#C2C0BA",
  onDarkMuted: "#8E8C86",
  onDarkHair: "#3D3D3A",
} as const;

export const FONT =
  "'Helvetica Neue', Helvetica, Arial, sans-serif";
export const MONO = "'SF Mono', Menlo, monospace";

/** Centered max-width content container with responsive horizontal padding. */
export function container(isMobile: boolean): React.CSSProperties {
  return {
    maxWidth: 1200,
    margin: "0 auto",
    padding: isMobile ? "0 20px" : "0 48px",
  };
}

/** Standard section vertical rhythm: 96px desktop, tighter on phones. */
export function sectionPad(isMobile: boolean): string {
  return isMobile ? "64px 20px" : "96px 48px";
}

/** Section heading (H2) — shrinks on phones to avoid overflow. */
export function h2(isMobile: boolean): React.CSSProperties {
  return {
    fontSize: isMobile ? 27 : 38,
    fontWeight: 800,
    letterSpacing: "-1.2px",
    margin: 0,
  };
}
