
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              Acerca de D&J Partners
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                Somos un equipo de expertos dedicados a transformar PYMEs mediante inteligencia artificial, 
                business intelligence y soluciones de datos que impulsan el crecimiento empresarial sostenible.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Nuestra Misión</h2>
                  <p className="text-gray-600">
                    En D&J Partners, transformamos PYMEs tradicionales en organizaciones inteligentes mediante 
                    la implementación estratégica de inteligencia artificial, business intelligence y análisis predictivo.
                  </p>
                  <p className="text-gray-600">
                    Creemos que cada empresa, sin importar su tamaño, merece acceso a tecnologías de vanguardia 
                    que impulsen su competitividad y sostenibilidad en el mercado digital.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Nuestros Valores</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Excelencia Técnica:</strong> Implementamos soluciones de IA con los más altos estándares de calidad y precisión.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Impacto Medible:</strong> Nos enfocamos en generar resultados tangibles y mejoras empresariales demostrables.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Colaboración Estratégica:</strong> Trabajamos como socios de nuestros clientes, no solo como proveedores.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Innovación Responsable:</strong> Aplicamos IA de forma ética y sostenible, priorizando el beneficio empresarial real.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    D&J Partners nació de la convicción de que las pequeñas y medianas empresas merecen acceso 
                    a tecnologías de inteligencia artificial de clase mundial. Observamos que existía una brecha 
                    significativa entre las capacidades tecnológicas disponibles y su accesibilidad para PYMEs.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Identificamos que las sofisticadas soluciones de IA estaban diseñadas principalmente para 
                    grandes corporaciones, dejando a las empresas medianas y pequeñas con opciones limitadas. 
                    Desarrollamos metodologías específicas que hacen accesible la implementación de IA sin 
                    comprometer la calidad o efectividad.
                  </p>
                  <p className="text-gray-600">
                    Hemos ayudado a más de 50 empresas a transformar sus operaciones mediante IA, 
                    generando mejoras significativas en eficiencia, productividad y competitividad. 
                    Nuestro enfoque combina rigor técnico con comprensión profunda de los desafíos 
                    empresariales específicos de cada sector.
                  </p>
                </div>
              </motion.div>
              
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/careers" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Únete a Nuestro Equipo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
