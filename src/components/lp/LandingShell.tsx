import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { C, FONT } from "./tokens";
import LpHeader from "./LpHeader";
import LpFooter from "./LpFooter";
import StickyMobileCta from "./StickyMobileCta";

interface LandingShellProps {
  title: string;
  description: string;
  footerTagline: string;
  stickyLabel?: string;
  children: React.ReactNode;
}

/**
 * Standalone landing chrome: no site navbar. Sets Spanish lang + `noindex,
 * follow` (these are paid-traffic pages that must not be indexed), paints the
 * paper background on <body>, and frames the page with the minimal logo header,
 * footer and mobile sticky CTA.
 */
export default function LandingShell({
  title,
  description,
  footerTagline,
  stickyLabel,
  children,
}: LandingShellProps) {
  useEffect(() => {
    const prevBg = document.body.style.background;
    const prevScroll = document.documentElement.style.scrollBehavior;
    document.body.style.background = C.paper;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.body.style.background = prevBg;
      document.documentElement.style.scrollBehavior = prevScroll;
    };
  }, []);

  return (
    <>
      <Helmet htmlAttributes={{ lang: "es" }}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div
        style={{
          fontFamily: FONT,
          color: C.ink,
          background: C.paper,
          minHeight: "100vh",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <LpHeader />
        {children}
        <LpFooter tagline={footerTagline} />
        <StickyMobileCta label={stickyLabel} />
      </div>
    </>
  );
}
