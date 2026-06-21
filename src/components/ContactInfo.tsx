import { Mail } from 'lucide-react';
import ContactFormBlock from './ContactFormBlock';

/**
 * Sección de contacto para las páginas internas (about, blog, careers…).
 * La home usa <ContactSection /> (calendario + formulario en dos columnas).
 */
const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Contáctanos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Hablemos Hoy
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros servicios de consultoría en IA? Contacta con nuestro equipo y hablemos sobre cómo podemos ayudarte a transformar tu negocio.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactFormBlock />

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">O escríbenos directamente a:</p>
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
    </section>
  );
};

export default ContactInfo;
