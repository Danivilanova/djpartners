
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isBlogPage = location.pathname === '/blog';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : isBlogPage ? "bg-gradient-to-b from-black to-gray-900" : "bg-navbar-graphite")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/ad367c9b-b41f-46b7-a483-c58506105dbe.png" 
                alt="D&J Partners Logo" 
                className={cn(
                  "h-16 w-auto transition-all duration-300",
                  isScrolled ? "" : "brightness-0 invert"
                )}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                     <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-navbar-graphite-hover")}>
                     Inicio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                     <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-navbar-graphite-hover")}>
                     Nosotros
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                   <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-navbar-graphite-hover")}>
                    Casos de Éxito
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/projects/optimizacion-logistica" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Optimización Logística Urbana</div>
                          <p className="text-sm text-gray-500">Ruteo inteligente, data lake y eco-conducción</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/optimizacion-alquiler-equipos-eventos" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Alquiler de Material para Eventos</div>
                          <p className="text-sm text-gray-500">Visión por IA, modelo de merma y tablero de KPIs</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/clinicas-dentales" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Optimización Clínica Dental</div>
                          <p className="text-sm text-gray-500">Overbooking dinámico, BI con predicción y automatizaciones</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/hockey" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Retail Gourmet Personalizado</div>
                          <p className="text-sm text-gray-500">RFM + WhatsApp Business y recomendador en punto de venta</p>
                        </Link>
                      </li>
                      <li>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-navbar-graphite-hover")}>
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <button onClick={() => scrollToSection('features')} className="block p-3 space-y-1 rounded-md hover:bg-gray-100 w-full text-left">
                          <div className="font-medium">Implementación de IA</div>
                          <p className="text-sm text-gray-500">Desarrollo e integración estratégica de soluciones IA empresariales</p>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => scrollToSection('features')} className="block p-3 space-y-1 rounded-md hover:bg-gray-100 w-full text-left">
                          <div className="font-medium">BI y Dashboards Personalizados</div>
                          <p className="text-sm text-gray-500">Transformamos datos complejos en insights accionables</p>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => scrollToSection('features')} className="block p-3 space-y-1 rounded-md hover:bg-gray-100 w-full text-left">
                          <div className="font-medium">Consultoría de Analítica Predictiva</div>
                          <p className="text-sm text-gray-500">Modelos predictivos avanzados para PYMEs</p>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => scrollToSection('features')} className="block p-3 space-y-1 rounded-md hover:bg-gray-100 w-full text-left">
                          <div className="font-medium">Automatización de Procesos</div>
                          <p className="text-sm text-gray-500">Automatización inteligente para maximizar eficiencia operativa</p>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => scrollToSection('features')} className="block p-3 space-y-1 rounded-md hover:bg-gray-100 w-full text-left">
                          <div className="font-medium">Desarrollo de SaaS a Medida</div>
                          <p className="text-sm text-gray-500">Plataformas empresariales con IA integrada</p>
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/blog">
                     <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-navbar-graphite-hover")}>
                     Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/careers">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-navbar-graphite-hover")}>
                     Únete al Equipo
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-slate-200 text-slate-700 hover:bg-slate-300" : "bg-navbar-graphite-hover text-white hover:bg-white hover:text-navbar-graphite")}>
                    Contacto
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Reduced height and simplified */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-80", isScrolled ? "bg-white" : "bg-navbar-graphite")}>
          <Link to="/" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-navbar-graphite-hover")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </Link>
          
          <Link to="/about" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-navbar-graphite-hover")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            About Us
          </Link>
          
          {/* Simplified Customer Cases - no dropdown */}
          <Link to="/projects/optimizacion-logistica" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-navbar-graphite-hover")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Customer Cases
          </Link>
          
          {/* Simplified Learn More - no dropdown */}
          <Link to="/tech-details" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-navbar-graphite-hover")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Learn More
          </Link>
          
          <Link to="/blog" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-navbar-graphite-hover")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            News
          </Link>
          
          <Link to="/careers" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-navbar-graphite-hover")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Careers
          </Link>
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-slate-700 bg-slate-200 hover:bg-slate-300" : "text-white bg-navbar-graphite-hover hover:bg-white hover:text-navbar-graphite")}>
            Contact Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
