import { C } from "./tokens";
import CtaButton from "./CtaButton";
import { useViewport } from "./useViewport";

/** Fixed bottom CTA bar shown only on phones (brief: "CTA sticky en móvil"). */
export default function StickyMobileCta({
  label = "Agendar diagnóstico gratuito",
}: {
  label?: string;
}) {
  const { isMobile } = useViewport();
  if (!isMobile) return null;
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(251,251,249,0.96)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: `1px solid ${C.hair}`,
        padding: "12px 16px",
        zIndex: 50,
      }}
    >
      <CtaButton variant="sticky">{label}</CtaButton>
    </div>
  );
}
