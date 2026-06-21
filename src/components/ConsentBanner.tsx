import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStoredConsent, applyConsent, type ConsentState } from "@/lib/consent";

/**
 * RGPD cookie banner. Shows only until the user makes a choice (stored in
 * localStorage). "Aceptar" and "Rechazar" have equal prominence as required.
 * Until accepted, Consent Mode keeps ad/analytics storage denied.
 */
const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  if (!visible) return null;

  const choose = (state: ConsentState) => {
    applyConsent(state);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimiento de cookies"
      className="fixed bottom-0 inset-x-0 z-[9999] bg-white border-t border-gray-200 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.18)]"
    >
      <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-600 leading-relaxed">
          Usamos cookies propias y de terceros para analizar el tráfico y medir nuestras campañas. Puedes aceptarlas o
          rechazarlas.{" "}
          <Link to="/privacy-policy" className="text-primary underline underline-offset-2 hover:text-primary/80">
            Más información
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
