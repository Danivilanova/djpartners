import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getStoredConsent, applyConsent, type ConsentState } from "@/lib/consent";

/**
 * RGPD cookie banner. "Aceptar" and "Rechazar" have equal prominence as
 * required. Until accepted, Consent Mode keeps ad/analytics storage denied.
 *
 * Se prerenderiza (vite-react-ssg) para estar en pantalla desde el primer
 * pintado, sin esperar a la hidratación: cuanto antes decida el usuario, más
 * sesión se graba y mejor se atribuye la reserva al anuncio. A quien ya
 * decidió lo oculta un script inline de index.html (clase `djp-consent-set`
 * en <html>) antes de pintar, y aquí se desmonta tras hidratar. Arrancar con
 * `visible = true` tanto en servidor como en cliente evita el desajuste de
 * hidratación.
 *
 * Publica su altura en `--djp-consent-h` para que el CTA fijo del móvil se
 * coloque encima del banner en vez de quedar tapado por él.
 */
const ConsentBanner = () => {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const el = ref.current;
    if (!visible || !el) {
      root.style.removeProperty("--djp-consent-h");
      return;
    }
    const publish = () => root.style.setProperty("--djp-consent-h", `${el.offsetHeight}px`);
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(el);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--djp-consent-h");
    };
  }, [visible]);

  if (!visible) return null;

  const choose = (state: ConsentState) => {
    applyConsent(state);
    setVisible(false);
  };

  return (
    <div
      ref={ref}
      role="dialog"
      aria-live="polite"
      aria-label="Consentimiento de cookies"
      className="djp-consent-banner fixed bottom-0 inset-x-0 z-[9999] bg-white border-t border-gray-200 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.18)]"
    >
      <div className="max-w-5xl mx-auto px-4 py-2.5 sm:px-6 sm:py-4 flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs sm:text-sm text-gray-600 leading-snug sm:leading-relaxed">
          Usamos cookies propias y de terceros para analizar cómo se usa la web (incluidas grabaciones de navegación
          con los formularios enmascarados), medir nuestras campañas y el chat de asistencia.{" "}
          <Link to="/privacy-policy" className="text-primary underline underline-offset-2 hover:text-primary/80">
            Más información
          </Link>
          .
        </p>
        <div className="flex gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="flex-1 sm:flex-none px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="flex-1 sm:flex-none px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
