import { ArrowLeft, CheckCircle, Clock, FileSearch, Settings, Cpu, Code, Truck, BarChart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PageLayout from '@/components/PageLayout';
const DevelopmentProcess = () => {
  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef<HTMLDivElement>(null);
  const processSectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Process component logic
  const processes = [{
    id: 1,
    title: "Análisis y Diagnóstico",
    description: "Comenzamos analizando tus procesos actuales y necesidades específicas para identificar oportunidades de optimización y reducción de costes.",
    steps: ["Auditoría de procesos operativos", "Análisis de costes y eficiencia", "Identificación de automatizaciones", "Evaluación de recursos tecnológicos"]
  }, {
    id: 2,
    title: "Estrategia y Planificación",
    description: "Diseñamos una hoja de ruta personalizada que alinea la tecnología con tus objetivos de negocio y estrategia competitiva.",
    steps: ["Definición de objetivos estratégicos", "Planificación de implementación", "Análisis de ROI y beneficios", "Cronograma de ejecución detallado"]
  }, {
    id: 3,
    title: "Implementación de BI y Automatización",
    description: "Desplegamos sistemas de Business Intelligence y automatizamos procesos clave para maximizar la eficiencia operativa.",
    steps: ["Implementación de dashboards ejecutivos", "Automatización de procesos repetitivos", "Integración de sistemas existentes", "Configuración de alertas y KPIs"]
  }, {
    id: 4,
    title: "Optimización y Benchmarking",
    description: "Evaluamos y rediseñamos procesos utilizando metodologías de benchmarking para asegurar mejores prácticas del sector.",
    steps: ["Comparativa con líderes del sector", "Rediseño de procesos optimizados", "Implementación de mejores prácticas", "Certificación de calidad y estándares"]
  }, {
    id: 5,
    title: "Monitoreo y Mejora Continua",
    description: "Proporcionamos seguimiento continuo y ajustes estratégicos para mantener la ventaja competitiva y adaptarse a cambios del mercado.",
    steps: ["Monitoreo de KPIs en tiempo real", "Análisis de tendencias y predicciones", "Ajustes estratégicos periódicos", "Formación continua del equipo"]
  }];
  useEffect(() => {
    processSectionsRef.current = processes.map((_, i) => processSectionsRef.current[i] || null);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('animate-fade-in');
        (entries[0].target as HTMLElement).style.opacity = '1';
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      let closestSection = null;
      let closestDistance = Infinity;
      processSectionsRef.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });
      if (closestSection !== null) {
        setActiveProcess(closestSection + 1);
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const developmentSteps = [{
    icon: <FileSearch className="h-6 w-6" />,
    title: "1. Análisis y Diagnóstico",
    description: "Comenzamos comprendiendo tus necesidades, oportunidades de mejora y requisitos operativos para establecer parámetros claros del proyecto."
  }, {
    icon: <Settings className="h-6 w-6" />,
    title: "2. Diseño de Estrategia",
    description: "Nuestros expertos crean estrategias iniciales y especificaciones técnicas, asegurando alineación con tu identidad empresarial y objetivos."
  }, {
    icon: <Cpu className="h-6 w-6" />,
    title: "3. Implementación de BI",
    description: "Seleccionamos, diseñamos e integramos sistemas de Business Intelligence, creando soluciones optimizadas que equilibran rendimiento y eficiencia."
  }, {
    icon: <Code className="h-6 w-6" />,
    title: "4. Automatización de Procesos",
    description: "Nuestro equipo construye sistemas robustos de automatización y plataformas adaptadas a los requisitos únicos de tu negocio."
  }, {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "5. Pruebas y Optimización",
    description: "Protocolos rigurosos de testing aseguran confiabilidad, durabilidad y rendimiento óptimo en todas las condiciones y casos de uso."
  }, {
    icon: <Truck className="h-6 w-6" />,
    title: "6. Despliegue y Formación",
    description: "Apoyamos la transición del diseño a la implementación, asegurando estándares de calidad y despliegue sin interrupciones."
  }, {
    icon: <BarChart className="h-6 w-6" />,
    title: "7. Mejora Continua",
    description: "Analytics post-implementación y bucles de retroalimentación impulsan mejoras continuas, actualizaciones y nuevas funcionalidades potenciales."
  }];
  return <PageLayout>
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Link>
            
            <h1 className="text-4xl font-bold mb-8">Nuestro Proceso Estructurado de Consultoría</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-12">
                Hemos perfeccionado nuestra metodología de consultoría para minimizar riesgos y maximizar la innovación, 
                asegurando que tu proyecto de transformación empresarial avance eficientemente desde el concepto hasta la realidad.
              </p>
              
              {/* From Textile to Intelligence Process Section */}
              <div className="relative mt-12" ref={processRef} style={{
              opacity: 0
            }}>
                <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>
                
                <div className="space-y-10 relative">
                  {processes.map((process, index) => <div key={process.id} ref={el => processSectionsRef.current[index] = el} className={cn("relative flex flex-col md:flex-row md:items-center gap-6", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right")}>
                      <div className="md:w-1/2">
                        <div className={cn("md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300", activeProcess === process.id ? "bg-gray-700 text-white scale-110" : "bg-white text-gray-700 border border-gray-300")} onClick={() => setActiveProcess(process.id)}>
                          <span className="font-bold">{process.id}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 mt-3 md:mt-0">{process.title}</h3>
                        <p className="text-gray-600 mb-3 text-sm">{process.description}</p>
                        
                        <button onClick={() => setActiveProcess(process.id)} className={cn("text-sm font-medium transition-colors", activeProcess === process.id ? "text-gray-700" : "text-gray-500 hover:text-gray-700")}>
                          {activeProcess === process.id ? "Viendo Actualmente" : "Ver Detalles"}
                        </button>
                      </div>
                      
                      <div className={cn("md:w-1/2 bg-white rounded-xl p-5 shadow-sm border border-gray-100 transition-all duration-300", activeProcess === process.id ? "opacity-100 translate-y-0 shadow-md border-gray-200" : "opacity-50 md:opacity-30 hover:opacity-70 cursor-pointer")} onClick={() => setActiveProcess(process.id)}>
                        <h4 className="font-semibold mb-3 text-gray-700">Actividades Clave:</h4>
                        <ul className="space-y-2">
                          {process.steps.map((step, stepIndex) => <li key={stepIndex} className="flex items-start">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-2">
                                <Check className="w-3 h-3 text-gray-700" />
                              </span>
                              <span className="text-gray-700 text-sm text-left">{step}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>)}
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg my-12 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Nuestros Principios de Consultoría</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Ciclos de iteración rápida para mejora continua</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Comunicación transparente durante todo el proceso de consultoría</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Arquitectura modular que permite soluciones flexibles y escalables</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Estrategias de mitigación de riesgo integradas en cada fase</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Enfoque en experiencia del usuario y funcionalidad práctica</span>
                  </li>
                </ul>
              </div>
              
              
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link to="/tech-details" className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Explora Nuestro Enfoque
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default DevelopmentProcess;

// Helper icon component for later
const ArrowRight = ({
  className = "w-4 h-4"
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>;