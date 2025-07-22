
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Activity, Gauge, Flag, Users, BarChart3 } from 'lucide-react';

const HockeyProject = () => {
  return (
    <ProjectPageLayout
      title="Ice Hockey Elite Skill Tracker"
      subtitle="Advanced motion analysis for optimal performance"
      imageUrl="/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png"
      brandName="Mars Blades"
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: Plataforma de Análisis Deportivo con IA</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          Mars Blades necesitaba <strong>automatizar el análisis</strong> de rendimiento en hockey para cuantificar y analizar 
          movimientos específicos que contribuyen al rendimiento élite. Buscaban una solución que capturara métricas detalladas 
          durante sesiones reales y las transformara automáticamente en insights accionables para desarrollo de jugadores.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Desafío</h3>
      <p>
        Los sistemas existentes dependían de múltiples sensores externos o cámaras que eran complicados, costosos y limitados a entornos controlados. 
        Mars Blades necesitaba una solución con <strong>machine learning predictivo</strong> que fuera simple para uso diario pero 
        sofisticada para capturar movimientos diferenciadores de jugadores élite, enfocándose en aceleración, transiciones de velocidad y maniobrabilidad.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Nuestra Solución SaaS Deportiva</h3>
      <p>
        WRLDS desarrolló una <strong>plataforma SaaS especializada</strong> que combina hardware embebido con análisis inteligente:
      </p>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-blue-800 mb-2">🤖 Automatización del Análisis:</h4>
        <ul className="list-disc list-inside text-blue-700 space-y-1">
          <li>Procesamiento automático de datos de movimiento en tiempo real</li>
          <li>Generación automática de reportes de rendimiento post-sesión</li>
          <li>Categorización automática de movimientos de patinaje</li>
        </ul>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-green-800 mb-2">💻 Plataforma de Entrenamiento Integral:</h4>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Dashboard web para entrenadores con análisis de equipo completo</li>
          <li>Aplicación móvil para jugadores con feedback instantáneo</li>
          <li>Sistema de gestión de progreso a largo plazo</li>
        </ul>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-purple-800 mb-2">🧠 Análisis Predictivo Deportivo:</h4>
        <ul className="list-disc list-inside text-purple-700 space-y-1">
          <li>Predicción de rendimiento futuro basado en patrones actuales</li>
          <li>Identificación predictiva de riesgo de lesiones</li>
          <li>Comparación inteligente con jugadores élite históricos</li>
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Activity className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Motion Pattern Recognition</h4>
            <p>Identify and categorize specific skating movements from crossovers to tight turns.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Gauge className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Performance Metrics</h4>
            <p>Measure acceleration forces, edge angles, weight distribution, and power output in real-time.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Flag className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Benchmark Comparisons</h4>
            <p>Compare athlete's movements to established elite player patterns and historical personal bests.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Users className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Coach Integration</h4>
            <p>Provide coaches with detailed skill development metrics across team members.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">System Components</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Embedded sensors designed to withstand the harsh conditions of ice hockey</li>
        <li>Bluetooth connectivity with real-time data streaming to rinkside devices</li>
        <li>Athlete-facing mobile app with immediate performance feedback</li>
        <li>Coach dashboard for tracking player development and team trends</li>
        <li>Machine learning algorithm that improves pattern recognition over time</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Skill Development</h4>
            <p>Players using the system showed faster improvement in targeted skating skills.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Injury Prevention</h4>
            <p>Early detection of asymmetrical movements helped reduce strain-related injuries.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Elite Performance Insights</h4>
            <p>Identified specific movement patterns that correlate with elite acceleration and agility.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Coaching Efficiency</h4>
            <p>Reduced subjective assessment with quantifiable metrics for player development.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p>
        The Ice Hockey Elite Skill Tracker has been successfully adopted by professional teams and elite hockey 
        academies across North America and Europe. Mars Blades has integrated the technology into their premium training 
        products, creating a new standard for performance analysis in ice hockey. The data collected has also led to 
        improvements in skate design and training methodologies based on the scientific insights provided.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <BarChart3 className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Research Impact</h4>
          <p>
            The data gathered from this project has contributed to academic research on elite athletic performance 
            and has been cited in sports science publications focused on optimizing movement efficiency in winter sports.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default HockeyProject;
