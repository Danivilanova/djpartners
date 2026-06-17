import { C } from "./tokens";
import LpLogo from "./LpLogo";
import { useViewport } from "./useViewport";

/**
 * Minimal landing header: only the D&J Partners logo, no navigation, no link.
 * (Brief: "Página sin menú de navegación. Solo logo de DJPartners arriba a la
 * izquierda, sin enlace.")
 */
export default function LpHeader() {
  const { isMobile } = useViewport();
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        padding: isMobile ? "22px 20px" : "28px 48px",
        borderBottom: `1px solid ${C.hair}`,
      }}
    >
      <LpLogo />
    </header>
  );
}
