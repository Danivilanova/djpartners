import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { resetConsent } from '@/lib/consent';

const PrivacyPolicy = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageLayout>
      <SEO
        title="Política de Privacidad – D&J Partners"
        description="Consulta la política de privacidad de D&J Partners: cómo recopilamos, usamos y protegemos tus datos personales conforme al RGPD."
        keywords={['política de privacidad', 'protección de datos', 'RGPD', 'D&J Partners']}
      />
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>

            <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Última actualización: 14 de agosto de 2026</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Responsable del tratamiento</h2>
              <p className="text-gray-600 mb-4">
                El responsable del tratamiento de los datos personales recogidos a través de este sitio web es
                <strong> Jordi Reina García</strong> (D&amp;J Partners), NIF 41666585S, con domicilio en
                C/ Anselm Clavé 6, 17410 Sils (Girona), España. Email de contacto:{' '}
                <a href="mailto:jordi@djpartners.es" className="text-primary hover:underline">jordi@djpartners.es</a>.
              </p>
              <p className="text-gray-600 mb-4">
                Esta política explica qué datos recogemos, con qué finalidades, con qué base legal y con qué
                proveedores los tratamos cuando visitas djpartners.es o utilizas nuestros servicios.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Datos que recogemos</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>
                  <strong>Datos que nos facilitas tú</strong>: nombre, email, teléfono, empresa y el contenido de tu
                  mensaje, cuando envías un formulario de contacto, solicitas una consultoría, agendas una reunión en
                  nuestro calendario o te suscribes al boletín.
                </li>
                <li>
                  <strong>Identificadores publicitarios</strong>: si llegas desde un anuncio de Google Ads y aceptas las
                  cookies, guardamos el identificador de clic (<em>gclid</em>) durante 90 días para poder medir qué
                  campañas generan clientes reales. Con ese mismo consentimiento, al agendar una reunión enviamos a
                  Google tu email (y teléfono, si lo facilitas) en forma seudonimizada (hasheado con SHA-256) para la
                  medición de conversiones avanzadas; Google nunca recibe el dato en claro y solo puede cotejar el hash
                  con sus propios usuarios para atribuir la conversión.
                </li>
                <li>
                  <strong>Datos de navegación</strong>: con tu consentimiento, datos de uso del sitio recogidos por las
                  herramientas de analítica y el chat descritas en las secciones 4 y 5.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Finalidades y bases legales</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>
                  <strong>Responder a tu solicitud y agendar reuniones</strong> — base legal: aplicación de medidas
                  precontractuales a petición tuya (art. 6.1.b RGPD).
                </li>
                <li>
                  <strong>Gestión comercial en nuestro CRM</strong>: alta de tu contacto y seguimiento de la oportunidad
                  hasta responderla o cerrarla — base legal: interés legítimo en atender y organizar las solicitudes
                  comerciales recibidas (art. 6.1.f RGPD).
                </li>
                <li>
                  <strong>Envío del boletín</strong> al que te suscribas — base legal: consentimiento (art. 6.1.a RGPD),
                  revocable en cualquier momento.
                </li>
                <li>
                  <strong>Analítica, medición de campañas y chat de asistencia</strong> — base legal: consentimiento
                  expresado en el banner de cookies (art. 6.1.a RGPD).
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Al entrar al sitio te mostramos un banner con el que puedes aceptar o rechazar las cookies no esenciales.
                Hasta que no aceptas, no se activa ninguna cookie de analítica, publicidad o chat (utilizamos el Modo de
                Consentimiento v2 de Google con todo denegado por defecto, y el chat de HubSpot ni siquiera se carga).
                Las familias de cookies que usamos con tu consentimiento son:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Google</strong> (Google Analytics 4 y Google Ads): medición de tráfico y campañas.</li>
                <li><strong>HubSpot</strong> (chat y CRM): cookies como <em>hubspotutk</em> o <em>__hstc</em>.</li>
                <li><strong>Propias</strong>: tu elección de consentimiento y, si aceptas, el identificador de clic de Google Ads (<em>djp_gclid</em>, 90 días).</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Puedes cambiar o retirar tu consentimiento en cualquier momento desde el enlace{' '}
                <button type="button" onClick={resetConsent} className="text-primary hover:underline">
                  Configurar cookies
                </button>{' '}
                (también disponible en el pie de página); al retirarlo se eliminan las cookies no esenciales.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Proveedores (encargados del tratamiento)</h2>
              <p className="text-gray-600 mb-4">
                Para prestar el servicio nos apoyamos en proveedores que tratan datos por cuenta nuestra, con contratos de
                encargo de tratamiento y, cuando implican transferencias fuera del EEE, con las garantías del RGPD
                (cláusulas contractuales tipo o certificación en el EU-U.S. Data Privacy Framework):
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>HubSpot</strong> (CRM y chat): gestión de contactos y oportunidades. Cuenta alojada en centro de datos de la Unión Europea.</li>
                <li><strong>Google</strong> (Analytics, Tag Manager y Ads): analítica y medición de campañas, solo con consentimiento.</li>
                <li><strong>Cal.com</strong>: agenda de reuniones.</li>
                <li><strong>Resend</strong>: envío de los emails generados por los formularios.</li>
                <li><strong>Cloudflare</strong>: alojamiento y entrega del sitio web.</li>
              </ul>
              <p className="text-gray-600 mb-4">
                No vendemos tus datos ni los cedemos a terceros para sus propios fines.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Plazos de conservación</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>
                  <strong>Solicitudes y oportunidades comerciales</strong>: mientras dure la relación y, si no llega a
                  haberla, hasta <strong>2 años desde el último contacto</strong>; después se suprimen o anonimizan.
                </li>
                <li><strong>Identificador de clic (gclid)</strong>: 90 días en tu navegador.</li>
                <li><strong>Boletín</strong>: hasta que te des de baja.</li>
                <li>
                  Si llegamos a trabajar juntos, los datos de facturación se conservan los plazos que exige la normativa
                  fiscal y mercantil.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Seguridad</h2>
              <p className="text-gray-600 mb-4">
                Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos (cifrado en tránsito,
                control de accesos por credenciales con permisos mínimos, proveedores con certificaciones de seguridad).
                Ningún sistema es infalible, pero limitamos los datos que recogemos a los necesarios y quién puede
                acceder a ellos.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Tus derechos</h2>
              <p className="text-gray-600 mb-4">
                Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición,
                limitación del tratamiento y portabilidad escribiendo a{' '}
                <a href="mailto:jordi@djpartners.es" className="text-primary hover:underline">jordi@djpartners.es</a>{' '}
                con el asunto «Protección de datos». Te responderemos en el plazo máximo de un mes. Si consideras que no
                hemos atendido correctamente tus derechos, puedes reclamar ante la Agencia Española de Protección de
                Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aepd.es</a>).
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Cambios en esta política</h2>
              <p className="text-gray-600 mb-4">
                Si cambiamos esta política, publicaremos aquí la versión actualizada con su fecha. Si el cambio fuera
                sustancial para datos que ya nos hubieras facilitado, te lo comunicaremos por email o con un aviso
                destacado en el sitio.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contacto</h2>
              <p className="text-gray-600 mb-4">
                Para cualquier duda sobre esta política o sobre el tratamiento de tus datos:{' '}
                <a href="mailto:jordi@djpartners.es" className="text-primary hover:underline">jordi@djpartners.es</a>.
              </p>

            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default PrivacyPolicy;
