import { C } from "./tokens";
import CtaButton from "./CtaButton";
import WhatsAppButton from "./WhatsAppButton";
import { useViewport } from "./useViewport";

/**
 * Fixed bottom CTA bar shown only on phones (brief: "CTA sticky en móvil").
 * Mientras el banner de cookies está visible se apoya encima de él
 * (`--djp-consent-h`, publicada por ConsentBanner) en vez de quedar tapado.
 *
 * Con `whatsappMessage` aparece además un botón cuadrado de WhatsApp a la
 * derecha (segunda vía de contacto). Es opcional a propósito: cada landing
 * decide si la ofrece y con qué mensaje precargado.
 */
export default function StickyMobileCta({
  label = "Agendar diagnóstico gratuito",
  whatsappMessage,
}: {
  label?: string;
  whatsappMessage?: string;
}) {
  const { isMobile } = useViewport();
  if (!isMobile) return null;
  return (
    <div
      style={{
        position: "fixed",
        bottom: "var(--djp-consent-h, 0px)",
        transition: "bottom 150ms ease",
        left: 0,
        right: 0,
        background: "rgba(251,251,249,0.96)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: `1px solid ${C.hair}`,
        padding: "12px 16px",
        zIndex: 50,
        display: "flex",
        alignItems: "stretch",
        gap: 10,
      }}
    >
      {/* El botón principal se queda con casi todo el ancho. */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <CtaButton variant="sticky">{label}</CtaButton>
      </div>
      {whatsappMessage ? (
        <WhatsAppButton
          variant="compact"
          message={whatsappMessage}
          ariaLabel="Escríbenos por WhatsApp"
        />
      ) : null}
    </div>
  );
}
