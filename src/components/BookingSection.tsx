import { lazy, Suspense } from "react";

// El embed real de Cal.com (mismo componente que las landings). Se carga sólo
// cuando hay enlace configurado, en su propio chunk.
const CalInlineEmbed = lazy(() => import("@/components/lp/CalInlineEmbed"));
const env = import.meta.env as Record<string, string | undefined>;

/**
 * Sección "Agenda una reunión" para la home: el calendario de Cal.com como una
 * de las dos vías de contacto (la otra es el formulario de <ContactInfo /> que
 * aparece justo debajo). Reserva en la home → evento generate_lead (landing="home").
 */
const BookingSection = () => {
  const calLink = env.VITE_CALCOM_LINK;
  return (
    <section id="agenda" className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block mb-3 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Agenda una reunión
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Reserva una reunión gratuita de 20 min
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Elige el hueco que mejor te venga y hablamos. ¿Prefieres escribirnos? Tienes el formulario de contacto justo
            debajo.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          style={{ minHeight: 600 }}
        >
          {calLink ? (
            <Suspense fallback={<div className="p-12 text-center text-gray-500">Cargando calendario…</div>}>
              <CalInlineEmbed calLink={calLink} landing="home" />
            </Suspense>
          ) : (
            <div className="p-12 text-center text-gray-600">
              El calendario estará disponible en breve. Mientras, escríbenos en el{" "}
              <a href="#contact-info" className="text-primary font-medium underline underline-offset-2">
                formulario de contacto
              </a>
              .
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
