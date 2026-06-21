import { lazy, Suspense, useState } from "react";
import { Mail, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import ContactFormBlock from "./ContactFormBlock";

// El embed real de Cal.com (mismo componente que las landings), en su propio
// chunk y sólo si hay enlace configurado.
const CalInlineEmbed = lazy(() => import("@/components/lp/CalInlineEmbed"));
const env = import.meta.env as Record<string, string | undefined>;

/**
 * Zona de contacto de la home con dos opciones: agendar una reunión (calendario
 * Cal.com) o escribir (formulario).
 * - En desktop (lg): dos columnas lado a lado.
 * - En móvil: pestañas (Agendar / Escribir) para no obligar a hacer scroll por
 *   todo el calendario antes de llegar al formulario.
 * El cambio responsive es por CSS (sin parpadeo); el estado sólo decide qué
 * pestaña se ve en móvil. Conserva id="contact-info" (hero y menú apuntan aquí).
 */
const ContactSection = () => {
  const calLink = env.VITE_CALCOM_LINK;
  const [tab, setTab] = useState<"agenda" | "mensaje">("agenda");

  const calendarPanel = (
    <div className={cn("flex-col lg:flex", tab === "agenda" ? "flex" : "hidden")}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 items-center gap-2 hidden lg:flex">
        <CalendarDays className="w-5 h-5 text-primary" />
        Agenda una reunión de 20 min
      </h3>
      <div
        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex-1"
        style={{ minHeight: 560 }}
      >
        {calLink ? (
          <Suspense fallback={<div className="p-12 text-center text-gray-500">Cargando calendario…</div>}>
            <CalInlineEmbed calLink={calLink} landing="home" />
          </Suspense>
        ) : (
          <div className="p-12 text-center text-gray-600">El calendario estará disponible en breve.</div>
        )}
      </div>
    </div>
  );

  const formPanel = (
    <div className={cn("flex-col lg:flex", tab === "mensaje" ? "flex" : "hidden")}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 items-center gap-2 hidden lg:flex">
        <Mail className="w-5 h-5 text-primary" />
        Escríbenos un mensaje
      </h3>
      <ContactFormBlock />
      <div className="text-center mt-6">
        <p className="text-gray-600 mb-2 text-sm">Escríbenos directamente a:</p>
        <a
          href="mailto:jordi@djpartners.es"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
        >
          <Mail className="w-5 h-5 mr-2" />
          jordi@djpartners.es
        </a>
      </div>
    </div>
  );

  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-3 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            ¿Hablamos?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Agenda una reunión o escríbenos</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reserva un hueco para hablar 20 minutos, o mándanos un mensaje y te respondemos pronto. Tú eliges.
          </p>
        </div>

        {/* Pestañas — sólo en móvil */}
        <div className="lg:hidden flex gap-1 mb-6 p-1 bg-gray-100 rounded-xl max-w-sm mx-auto" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={tab === "agenda"}
            onClick={() => setTab("agenda")}
            className={cn(
              "flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1.5",
              tab === "agenda" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
            )}
          >
            <CalendarDays className="w-4 h-4" />
            Agendar
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "mensaje"}
            onClick={() => setTab("mensaje")}
            className={cn(
              "flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1.5",
              tab === "mensaje" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
            )}
          >
            <Mail className="w-4 h-4" />
            Escribir
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {calendarPanel}
          {formPanel}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
