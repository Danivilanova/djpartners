import { useState } from "react";
import { C, FONT } from "./tokens";
import { trackWhatsAppClick } from "./analytics";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "./whatsapp";

type Variant = "inline" | "compact";

interface WhatsAppButtonProps {
  /** `inline`: icono + texto. `compact`: cuadrado solo-icono (barra fija de móvil). */
  variant?: Variant;
  /** Texto del botón en la variante `inline`. */
  label?: string;
  /** Texto precargado en la conversación. */
  message?: string;
  /** Etiqueta accesible; obligatoria de facto en la variante `compact`. */
  ariaLabel?: string;
}

/** Glifo de WhatsApp, sin dependencias ni assets externos. */
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.09 8.09a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.03 8.03 0 0 1-1.24-4.3c0-4.46 3.63-8.09 8.2-8.02Zm-4.5 4.3c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62s1.13 3.04 1.28 3.25c.16.21 2.2 3.36 5.34 4.58.75.29 1.33.46 1.78.59.75.24 1.43.2 1.97.12.6-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.36-.31-.16-1.85-.91-2.13-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.7-.96-2.32-.25-.61-.51-.53-.7-.54-.18-.01-.39-.01-.6-.01Z" />
    </svg>
  );
}

/**
 * Segunda vía de contacto, de menor compromiso que reservar una videollamada:
 * enlace click-to-chat de WhatsApp con el mensaje ya escrito. Estilo Tinta —
 * botón secundario de borde, tinta sobre papel; el icono va en el mismo tono
 * que el texto para no romper la paleta monocroma.
 */
export default function WhatsAppButton({
  variant = "inline",
  label = "Escríbenos por WhatsApp",
  message = DEFAULT_WHATSAPP_MESSAGE,
  ariaLabel,
}: WhatsAppButtonProps) {
  const [hover, setHover] = useState(false);
  const compact = variant === "compact";

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? (compact ? "Escríbenos por WhatsApp" : undefined)}
      onClick={() => trackWhatsAppClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: compact ? 0 : 9,
        background: hover ? C.surface : "transparent",
        color: C.ink,
        border: `1px solid ${hover ? C.ink : C.hair2}`,
        borderRadius: compact ? 8 : 6,
        padding: compact ? 0 : "13px 22px",
        width: compact ? 48 : undefined,
        fontSize: 15.5,
        fontWeight: 700,
        fontFamily: FONT,
        lineHeight: 1.2,
        textDecoration: "none",
        cursor: "pointer",
        transition: "background 120ms ease, border-color 120ms ease",
      }}
    >
      <WhatsAppIcon size={compact ? 22 : 18} />
      {compact ? null : <span>{label}</span>}
    </a>
  );
}
