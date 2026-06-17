import { C, MONO } from "./tokens";
import { useViewport } from "./useViewport";

interface LpFooterProps {
  /** Differs per landing ("Consultoría en IA y datos para PYMEs" vs partner copy). */
  tagline: string;
  email?: string;
  privacyHref?: string;
  cookiesHref?: string;
}

const dot = <span style={{ color: "#C9C6BE" }}>·</span>;

/** Footer with brand, tagline, contact email and the only legal links. */
export default function LpFooter({
  tagline,
  email = "info@djpartners.es",
  privacyHref = "/privacy-policy",
  cookiesHref = "/privacy-policy",
}: LpFooterProps) {
  const { isMobile } = useViewport();
  return (
    <footer
      style={{
        borderTop: `1px solid ${C.hair}`,
        padding: isMobile ? "24px 20px 110px" : "28px 48px 96px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 13,
          color: C.muted,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontWeight: 700, color: C.ink }}>D&amp;J Partners</span>
        {dot}
        <span>{tagline}</span>
        {dot}
        <a
          href={`mailto:${email}`}
          style={{ fontFamily: MONO, fontSize: 12, color: C.muted }}
        >
          {email}
        </a>
        {dot}
        <a href={privacyHref} style={{ color: C.muted }}>
          Política de privacidad
        </a>
        {dot}
        <a href={cookiesHref} style={{ color: C.muted }}>
          Cookies
        </a>
      </div>
    </footer>
  );
}
