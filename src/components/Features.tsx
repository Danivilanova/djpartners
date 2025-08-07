import { useEffect, useRef, useState } from 'react';
import { Brain, BarChart3, TrendingUp, Settings, ArrowRight, Box, Truck, Code, CheckCircle, Rocket, Factory, Microchip, Handshake, RefreshCcw, MessageSquare, Database, Zap } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { useScrollHijack } from '@/hooks/useScrollHijack';
import { ConsultationModal } from '@/components/ConsultationModal';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const hijackSectionRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <Brain className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Implementación de IA",
      description: "Desarrollo e integración estratégica de soluciones IA adaptadas a procesos empresariales críticos.",
      image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png"
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "BI y Dashboards Personalizados",
      description: "Transformamos datos complejos en insights visuales y accionables para líderes de negocio.",
      image: "/lovable-uploads/761e2d9d-3a1c-458b-9848-dd1d7b42d1b9.png"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Consultoría de Analítica Predictiva",
      description: "Anticipamos comportamientos y tendencias mediante modelos predictivos avanzados.",
      image: "/lovable-uploads/43c1c6bf-965c-4e37-b52b-692561d0424d.png"
    },
    {
      icon: <Settings className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Integración con Sistemas Existentes",
      description: "IA sin fricciones: conectamos nuestros modelos con tu infraestructura actual, sin interrupciones.",
      image: "/lovable-uploads/86035222-8ed6-4361-92c6-76550462d793.png"
    }
  ];

  const { isHijacked, currentIndex } = useScrollHijack(hijackSectionRef, features.length);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint(prev => prev < totalSprints ? prev + 1 : 1);
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };
    animateProgress();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const aiCaseStudies = [{
    image: "/lovable-uploads/c22f7405-fa12-4177-a50b-8fe831e93e8b.png",
    title: "Automatización de Procesos",
    description: "Automatización inteligente para maximizar eficiencia operativa y reducir errores humanos en procesos críticos."
  }, {
    image: "/lovable-uploads/2e021987-e90b-41ee-9aa9-381906bc434f.png",
    title: "Desarrollo de SaaS a Medida",
    description: "Plataformas empresariales con IA integrada, diseñadas a la medida de cada sector y modelo de negocio."
  }, {
    image: "/lovable-uploads/4d58c28d-0aa9-4302-b617-6237d9d14220.png",
    title: "Machine Learning Predictivo",
    description: "Modelos de aprendizaje automático que identifican patrones y predicen tendencias para optimizar decisiones empresariales."
  }];
  const stepFlowItems = [{
    icon: <Database className="h-10 w-10 text-gray-700" />,
    title: "Diagnóstico y Análisis de Datos",
    description: "Evaluamos la infraestructura actual, calidad de datos y identificamos oportunidades de IA"
  }, {
    icon: <Brain className="h-10 w-10 text-gray-700" />,
    title: "Diseño de Solución Personalizada",
    description: "Desarrollamos estrategias de IA específicas alineadas con objetivos empresariales"
  }, {
    icon: <Rocket className="h-10 w-10 text-gray-700" />,
    title: "Implementación y Adopción",
    description: "Desplegamos la solución con capacitación completa y soporte continuo"
  }];
  const sprintPhases = [{
    name: "Diagnóstico",
    icon: <CheckCircle className="h-4 w-4" />
  }, {
    name: "Prototipo",
    icon: <Code className="h-4 w-4" />
  }, {
    name: "Validación",
    icon: <Box className="h-4 w-4" />
  }, {
    name: "Optimización",
    icon: <RefreshCcw className="h-4 w-4" />
  }];

  return <>
      <section id="features" className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}> 
          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Servicios de Consultoría IA
            </div>
            <p className="text-gray-600 mt-4">
              Nuestra experiencia en inteligencia artificial transforma datos empresariales en ventajas competitivas, potenciando el crecimiento de PYMEs mediante soluciones tecnológicas estratégicas.
            </p>
          </div>
          
          {/* Scroll-hijacked features section */}
          <div 
            ref={hijackSectionRef}
            className={cn(
              "relative transition-all duration-500",
              isHijacked ? "fixed inset-0 z-50 bg-slate-800" : "grid grid-cols-1 md:grid-cols-2 gap-5"
            )}
            style={{ height: isHijacked ? '100vh' : 'auto' }}
          >
            {isHijacked && (
              <div className="absolute top-4 right-4 z-10 text-white text-sm opacity-70">
                {currentIndex + 1} / {features.length}
              </div>
            )}
            
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "feature-item rounded-xl overflow-hidden transform transition-all duration-500 relative shadow-lg",
                  isHijacked 
                    ? cn(
                        "absolute inset-0 w-full h-full",
                        index === currentIndex 
                          ? "opacity-100 translate-x-0" 
                          : index < currentIndex 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      )
                    : "hover:-translate-y-1 h-[280px]"
                )}
                style={{
                  transitionDelay: isHijacked ? '0ms' : `${index * 100}ms`
                }}
                onMouseEnter={() => !isHijacked && setHoveredFeature(index)} 
                onMouseLeave={() => !isHijacked && setHoveredFeature(null)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={cn(
                      "w-full h-full object-cover transition-all duration-300",
                      isHijacked ? "grayscale-0" : "grayscale-0"
                    )} 
                  />
                  <div className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    isHijacked 
                      ? "bg-slate-800/30" 
                      : hoveredFeature === index 
                        ? (index === 0 || index === 1 || index === 2) ? "bg-gray-600/60" : "bg-slate-800/40"
                        : (index === 0 || index === 1 || index === 2) ? "bg-gray-700/70" : "bg-slate-800/50"
                  )}></div>
                </div>
                
                <div className={cn(
                  "relative z-10 flex flex-col justify-center",
                  isHijacked 
                    ? "p-16 h-full text-center items-center" 
                    : "p-6 h-full justify-between"
                )}>
                  <div className={isHijacked ? "space-y-8" : ""}>
                    <div className={cn(
                      "inline-block p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg transition-all duration-300 transform",
                      isHijacked 
                        ? "mb-6 scale-150" 
                        : hoveredFeature === index 
                          ? "mb-4 hover:scale-110" 
                          : "mb-4"
                    )}>
                      <div className={`transform transition-transform duration-300 ${!isHijacked && hoveredFeature === index ? 'rotate-12' : ''}`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className={cn(
                      "font-semibold text-white",
                      isHijacked ? "text-4xl mb-6" : "text-xl mb-2"
                    )}>
                      {feature.title}
                    </h3>
                    <p className={cn(
                      "text-white/90",
                      isHijacked ? "text-lg max-w-2xl" : "text-sm"
                    )}>
                      {feature.description}
                    </p>
                  </div>
                  {!isHijacked && (
                    <div className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`}></div>
                  )}
                </div>
              </div>
            ))}
            
            {isHijacked && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                <div className="flex space-x-2 mb-4">
                  {features.map((_, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === currentIndex ? "bg-white w-8" : "bg-white/50"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm opacity-70">
                  {isMobile ? "Swipe" : "Scroll"} to continue • Press ESC to exit
                </p>
              </div>
            )}
          </div>

          <div className="mt-16 mb-8 feature-item">
            <div className="text-center mb-8">
              <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Servicios Complementarios de IA
              </div>
              <h3 className="text-2xl font-bold">Soluciones Adicionales</h3>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Explora nuestros servicios complementarios de inteligencia artificial diseñados para 
                potenciar la transformación digital de empresas tradicionales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {aiCaseStudies.map((study, index) => (
                <ConsultationModal key={index}>
                  <div 
                    className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        <div className="text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 w-fit">
                          Ver detalles
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {study.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                        {study.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                        <span className="text-sm font-medium">Más información</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                    
                    {/* Animated border effect */}
                    <div className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-105 group-hover:scale-100" />
                  </div>
                </ConsultationModal>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-gray-600 font-medium">
                Estos ejemplos muestran algunas formas en que nuestras soluciones de IA pueden transformar tu negocio
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <ConsultationModal>
            <Button className="inline-flex items-center px-4 sm:px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
              ¿Necesitas una Solución Personalizada?
              <MessageSquare className="ml-2 w-4 h-4 group-hover:animate-pulse" />
            </Button>
          </ConsultationModal>
          
          <ConsultationModal>
            <Button className="inline-flex items-center px-4 sm:px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group w-full sm:w-auto">
              Conoce Más Sobre Nuestros Servicios
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </ConsultationModal>
        </div>
      </section>
      
      <section id="technology" className="bg-gray-50 py-10 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Nuestro Enfoque
            </div>
            <h2 className="text-3xl font-bold mb-4">Cómo trabajamos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              D&J Partners combina metodologías ágiles con tecnologías de vanguardia, 
              permitiendo desarrollar soluciones de IA completamente personalizadas a alta velocidad y bajo riesgo.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-10 transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {stepFlowItems.map((item, index) => <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full cursor-pointer">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-gray-50 rounded-full p-4 mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 shadow-lg">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                      <p className="text-sm">{item.description}</p>
                      {index === 0 && <p className="text-xs text-gray-500">Analizamos tu situación actual, identificamos oportunidades y definimos una hoja de ruta estratégica para la implementación de IA.</p>}
                      {index === 1 && <p className="text-xs text-gray-500">Creamos soluciones de IA personalizadas que se alinean perfectamente con tus objetivos de negocio y restricciones operativas.</p>}
                      {index === 2 && <p className="text-xs text-gray-500">Garantizamos una adopción exitosa con capacitación completa de equipos y soporte técnico continuo post-implementación.</p>}
                    </div>
                  </HoverCardContent>
                </HoverCard>)}
            </div>

            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>
              
              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 mb-10 shadow-md">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold">Proyecto de Implementación IA</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Desarrollo Iterativo</span>
                    <RefreshCcw className="h-5 w-5 text-gray-600 animate-rotate-slow" />
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">Trabajamos de forma iterativa con nuestros clientes para adaptar las soluciones a sus necesidades específicas</p>
                
                <div className="relative mb-2">
                  <Progress value={progressValue} className="h-3 bg-gray-200" />
                </div>
                
                <div className={cn("grid gap-1 mt-4", isMobile ? "grid-cols-2 gap-y-2" : "grid-cols-4")}>
                  {sprintPhases.map((phase, index) => <div key={index} className={cn("text-center p-2 rounded transition-all", progressValue >= index / sprintPhases.length * 100 && progressValue < (index + 1) / sprintPhases.length * 100 ? "bg-blue-50 border border-blue-100" : "bg-gray-50")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("rounded-full p-1 mb-1", progressValue >= index / sprintPhases.length * 100 ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500")}>
                          {phase.icon}
                        </div>
                        <span className="text-xs font-medium">{phase.name}</span>
                      </div>
                    </div>)}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-2">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2 shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600">Feedback del cliente integrado en cada etapa</span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mt-2 sm:mt-0">
                    <span className="mr-2">Mejora continua</span>
                    <div className="flex space-x-1">
                      <span className="inline-block w-2 h-2 bg-gray-300 rounded-full animate-pulse"></span>
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></span>
                      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-pulse animation-delay-400"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>
              
              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-black/10 rounded-full animate-pulse-slow"></div>
                <div className="relative bg-white rounded-full p-4 border border-gray-200 shadow-md">
                  <Rocket className="h-10 w-10 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Solución Implementada</h3>
              <p className="text-gray-700">Lista para escalar, optimizar y generar valor</p>
              <div className="flex justify-center mt-4 space-x-2">
                <span className="inline-block w-3 h-3 rounded-full bg-gray-300 animate-pulse"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-500 animate-pulse animation-delay-200"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-700 animate-pulse animation-delay-400"></span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/tech-details" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-4 sm:px-6 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group py-3 w-full sm:w-auto justify-center">
                Conoce Nuestro Proceso Detallado
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <ConsultationModal>
                <Button className="inline-flex items-center px-4 sm:px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto justify-center">
                  Consulta con Nuestros Expertos
                  <MessageSquare className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
              </ConsultationModal>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Features;
