
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Users, Briefcase, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Link>
              
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl font-bold mb-4 text-gray-900">
                  Únete a Nuestro Equipo
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explora las diferentes formas de colaborar con D&J Partners. Desde nuestra red de colaboradores freelance hasta posiciones internas y partnerships estratégicos.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                {/* Red de Colaboradores */}
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-6">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-900">Red de Colaboradores</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Únete a nuestra red de expertos freelance para participar en proyectos específicos de transformación digital e IA.
                  </p>
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <p>• Proyectos flexibles</p>
                    <p>• Trabajo remoto</p>
                    <p>• Especialización técnica</p>
                    <p>• Red de profesionales</p>
                  </div>
                  <Link to="/collaborator-form">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3">
                      Contactar
                    </Button>
                  </Link>
                </div>

                {/* Equipo Interno */}
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-6">
                    <Briefcase className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-900">Equipo Interno</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Forma parte de nuestro equipo core con posiciones full-time y part-time en el desarrollo de soluciones innovadoras.
                  </p>
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <p>• Contrato estable</p>
                    <p>• Crecimiento profesional</p>
                    <p>• Formación continua</p>
                    <p>• Beneficios corporativos</p>
                  </div>
                  <Link to="/internal-team-form">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3">
                      Contactar
                    </Button>
                  </Link>
                </div>

                {/* Partnerships */}
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-6">
                    <Handshake className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-900">Acuerdos de Partnership</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Establece alianzas estratégicas con D&J Partners para expandir servicios conjuntamente y crear valor mutuo.
                  </p>
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <p>• Alianzas estratégicas</p>
                    <p>• Proyectos conjuntos</p>
                    <p>• Expansión de mercado</p>
                    <p>• Sinergias empresariales</p>
                  </div>
                  <Link to="/partnership-form">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3">
                      Contactar
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-12 p-8 bg-gray-50 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">¿Por qué elegir D&J Partners?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Reducción de Costes Operativos</h4>
                    <p className="text-gray-600 text-sm">Optimizamos tus procesos clave mediante automatización inteligente para reducir tiempos, errores y costes innecesarios en tu operación diaria.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Control Total del Negocio</h4>
                    <p className="text-gray-600 text-sm">Implementamos sistemas de Business Intelligence que te permiten visualizar, analizar y tomar decisiones basadas en datos en tiempo real.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Procesos que Mejoran Contigo</h4>
                    <p className="text-gray-600 text-sm">Evaluamos y rediseñamos tus procesos actuales con metodologías de benchmarking, asegurando mejoras continuas y comparativas con los mejores del sector.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tecnología al Servicio de tu Estrategia</h4>
                    <p className="text-gray-600 text-sm">Desplegamos herramientas inteligentes adaptadas a tu modelo de negocio para escalar lo que ya haces bien y anticiparte a los cambios del mercado.</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600">
                    <strong>¿Tienes preguntas?</strong> Contáctanos en{' '}
                    <a href="mailto:careers@djpartners.com" className="text-primary hover:underline">
                      careers@djpartners.com
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Careers;
