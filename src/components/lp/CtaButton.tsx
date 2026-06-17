import { useState } from "react";
import { C, FONT } from "./tokens";
import { scrollToCal } from "./scrollToCal";
import { trackCtaClick } from "./analytics";

type Variant = "hero" | "mid" | "sticky";

interface CtaButtonProps {
  children: React.ReactNode;
  /** Defaults to scrolling to the booking calendar (the page's single action). */
  onClick?: () => void;
  variant?: Variant;
}

const byVariant: Record<Variant, React.CSSProperties> = {
  hero: {
    borderRadius: 6,
    padding: "18px 32px",
    fontSize: 17,
    letterSpacing: "-0.2px",
  },
  mid: {
    borderRadius: 6,
    padding: "16px 30px",
    fontSize: 16,
  },
  sticky: {
    width: "100%",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
};

/** Black "ink" CTA button with the design's hover → pure black. */
export default function CtaButton({
  children,
  onClick = scrollToCal,
  variant = "hero",
}: CtaButtonProps) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        trackCtaClick();
        onClick();
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? C.black : C.ink,
        color: C.paper,
        border: "none",
        cursor: "pointer",
        fontWeight: 700,
        fontFamily: FONT,
        transition: "background 120ms ease",
        ...byVariant[variant],
      }}
    >
      {children}
    </button>
  );
}
