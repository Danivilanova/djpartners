import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
const PrivacyPolicy = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Última actualización: 11 de abril de 2025</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introducción</h2>
              <p className="text-gray-600 mb-4">
                En D J Partners ("nosotros", "nuestro" o "nos"), respetamos su privacidad y nos comprometemos a proteger su información personal. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información cuando visita nuestro sitio web o utiliza nuestros servicios.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Información que Recopilamos</h2>
              <p className="text-gray-600 mb-4">
                Podemos recopilar información personal que usted proporcione voluntariamente cuando:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Se pone en contacto con nosotros a través de nuestro sitio web</li>
                <li>Se suscribe a nuestro boletín informativo</li>
                <li>Se registra para nuestros servicios</li>
                <li>Participa en nuestras encuestas o promociones</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Esta información puede incluir su nombre, dirección de correo electrónico, nombre de la empresa, número de teléfono y cualquier otra información que elija proporcionar.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cómo Utilizamos su Información</h2>
              <p className="text-gray-600 mb-4">
                Podemos utilizar la información que recopilamos para diversos propósitos, incluyendo:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Proporcionar, operar y mantener nuestros servicios</li>
                <li>Mejorar, personalizar y expandir nuestros servicios</li>
                <li>Entender y analizar cómo utiliza nuestros servicios</li>
                <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
                <li>Comunicarnos con usted sobre nuestros servicios, actualizaciones y otra información</li>
                <li>Procesar transacciones y enviar información relacionada</li>
                <li>Detectar y prevenir fraudes</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies y Tecnologías de Seguimiento</h2>
              <p className="text-gray-600 mb-4">
                Podemos utilizar cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro sitio web y almacenar cierta información. Las cookies son archivos con una pequeña cantidad de datos que pueden incluir un identificador único anónimo. Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se está enviando una cookie.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Servicios de Terceros</h2>
              <p className="text-gray-600 mb-4">
                Podemos utilizar servicios de terceros que recopilan, monitorean y analizan datos para mejorar nuestros servicios. Estos terceros tienen sus propias políticas de privacidad que abordan cómo utilizan dicha información.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Retención de Datos</h2>
              <p className="text-gray-600 mb-4">
                Conservaremos su información personal solo durante el tiempo que sea necesario para los propósitos establecidos en esta Política de Privacidad.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Seguridad</h2>
              <p className="text-gray-600 mb-4">
                La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por utilizar medios comercialmente aceptables para proteger su información personal, no podemos garantizar su seguridad absoluta.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Sus Derechos</h2>
              <p className="text-gray-600 mb-4">
                Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal, como el derecho a acceder, corregir o eliminar su información personal.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Cambios en esta Política de Privacidad</h2>
              <p className="text-gray-600 mb-4">
                Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Le informaremos por correo electrónico y/o mediante un aviso destacado en nuestro sitio web antes de que el cambio entre en vigor.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contáctenos</h2>
              <p className="text-gray-600 mb-4">Si tiene alguna pregunta sobre esta Política de Privacidad, póngase en contacto con nosotros en info@djpartners.es</p>
              
            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default PrivacyPolicy;