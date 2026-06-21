import { lazy, Suspense } from "react";
import { Mail, CalendarDays } from "lucide-react";
import ContactFormBlock from "./ContactFormBlock";

// El embed real de Cal.com (mismo componente que las landings), en su propio
// chunk y sólo si hay enlace configurado.
const CalInlineEmbed = lazy(() => import("@/components/lp/CalInlineEmbed"));
const env = import.meta.env as Record<string, string | undefined>;

/**
 * Zona de contacto de la home en UNA sola sección con dos opciones lado a lado:
 * agendar una reunión (calendario Cal.com) o escribir (formulario). En móvil se
 * apilan: primero el calendario, luego el formulario. Conserva id="contact-info"
 * para que el botón del hero y el menú "Contacto" lleguen aquí.
 */
const ContactSection = () => {
  const calLink = env.VITE_CALCOM_LINK;
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block mb-3 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            ¿Hablamos?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Agenda una reunión o escríbenos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reserva un hueco para hablar 20 minutos, o mándanos un mensaje y te respondemos pronto. Tú eliges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Opción A — Agendar reunión */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
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

          {/* Opción B — Escribir */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
