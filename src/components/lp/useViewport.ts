import { useEffect, useState } from "react";

/**
 * Returns the current viewport width and a few derived breakpoint booleans used
 * across the landing pages. The Tinta design was authored for desktop with a
 * single `< 760px` mobile switch (sticky CTA); for real ad traffic we add a
 * couple more thresholds so the multi-column grids collapse gracefully.
 */
export function useViewport() {
  // Start with a desktop-ish width so the first SSR/first paint matches the
  // design; corrected on mount.
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    width,
    /** Phone layout: stack everything, shrink spacing + headings, show sticky CTA. */
    isMobile: width < 768,
    /** Two big hero/calendar columns collapse a bit earlier than full mobile. */
    isStacked: width < 920,
  };
}
