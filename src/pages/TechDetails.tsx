
import { ArrowLeft, ArrowRight, BarChart, Target, Zap, ChartBar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const TechDetails = () => {
  const isMobile = useIsMobile();
  const [progressValue, setProgressValue] = useState(0);

  // Animate progress bar on component mount
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Link>
            
            <motion.h1 initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-3xl sm:text-4xl font-bold mb-6">
              Nuestro Enfoque de Consultoría
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-base sm:text-lg text-gray-600 mb-12">
                Descubre cómo D&J Partners transforma empresas mediante estrategias de consultoría integrales que combinan tecnología, procesos optimizados y análisis de datos para maximizar resultados.
              </motion.p>
              
              {/* Servicios de Consultoría Section */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <ChartBar className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Lo Que D&J Partners Hace Por Ti</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  Nuestro enfoque integral de consultoría está diseñado para transformar tu empresa desde múltiples frentes, 
                  optimizando procesos, reduciendo costes y maximizando el potencial de crecimiento a través de la tecnología inteligente.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {[{
                    title: "Reducción de Costes Operativos",
                    icon: <BarChart className="w-6 h-6 text-gray-700" />,
                    description: "Optimizamos tus procesos clave mediante automatización inteligente para reducir tiempos, errores y costes innecesarios en tu operación diaria."
                  }, {
                    title: "Control Total del Negocio",
                    icon: <ChartBar className="w-6 h-6 text-gray-700" />,
                    description: "Implementamos sistemas de Business Intelligence que te permiten visualizar, analizar y tomar decisiones basadas en datos en tiempo real."
                  }, {
                    title: "Procesos que Mejoran Contigo",
                    icon: <Target className="w-6 h-6 text-gray-700" />,
                    description: "Evaluamos y rediseñamos tus procesos actuales con metodologías de benchmarking, asegurando mejoras continuas y comparativas con los mejores del sector."
                  }, {
                    title: "Tecnología al Servicio de tu Estrategia",
                    icon: <Zap className="w-6 h-6 text-gray-700" />,
                    description: "Desplegamos herramientas inteligentes adaptadas a tu modelo de negocio para escalar lo que ya haces bien y anticiparte a los cambios del mercado."
                  }].map((service, i) => (
                    <motion.div 
                      key={service.title} 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }} 
                      className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start">
                        <div className="bg-gray-200 rounded-full p-3 mr-4">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-gray-900 mb-2">{service.title}</h3>
                          <p className="text-gray-700">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Metodología de Trabajo Section */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Nuestra Metodología</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  En D&J Partners, hemos desarrollado un enfoque sistemático para la transformación empresarial que combina innovación tecnológica con implementación práctica. 
                  Nuestro proceso integral de consultoría asegura que cada proyecto avance eficientemente desde el análisis inicial hasta resultados medibles.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {[{
                  title: "Diagnóstico y Análisis",
                  icon: <ChartBar className="w-5 h-5 text-gray-700" />,
                  description: "Comenzamos con un análisis exhaustivo de tus procesos actuales y necesidades específicas para identificar oportunidades de mejora y optimización."
                }, {
                  title: "Diseño de Soluciones",
                  icon: <Target className="w-5 h-5 text-gray-700" />,
                  description: "Nuestros equipos crean estrategias personalizadas y prototipos funcionales que permiten pruebas tempranas e iteración continua."
                }, {
                  title: "Implementación y Seguimiento",
                  icon: <Zap className="w-5 h-5 text-gray-700" />,
                  description: "Desarrollamos e implementamos rigurosamente todas las soluciones, garantizando que cumplan con los estándares de rendimiento y confiabilidad."
                }].map((phase, i) => <motion.div key={phase.title} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.1
                }} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        {phase.icon}
                        <h3 className="font-semibold text-lg">{phase.title}</h3>
                      </div>
                      <p className="text-gray-600 text-base">{phase.description}</p>
                    </motion.div>)}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/development-process" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Explora Nuestro Proceso de Consultoría
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechDetails;
