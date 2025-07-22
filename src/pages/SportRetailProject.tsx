
import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Footprints, Zap, LineChart, Award, Sparkles, FlaskConical } from 'lucide-react';

const SportRetailProject = () => {
  return (
    <ProjectPageLayout
      title="Performance Athletic Footwear"
      subtitle="Revolutionary R&D for next-generation athletic footwear"
      imageUrl="/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
      brandName="Global Sports Retail Leader"
    >
      <SEO 
        title="WRLDS - Performance Athletic Footwear Project" 
        description="Revolutionary R&D for next-generation athletic footwear with embedded textile sensors for real-time performance analytics and personalized footwear."
        type="article"
      />
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">Ongoing R&D Project — Currently in Prototyping Phase</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: Plataforma Inteligente de Análisis Deportivo</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          Un líder global en retail deportivo necesitaba <strong>automatizar sus procesos</strong> de desarrollo y prueba de calzado atlético. 
          Su objetivo era crear un enfoque basado en datos que mejorara el rendimiento de los atletas mientras 
          optimizaba sus ciclos de desarrollo de productos.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Desafío</h3>
      <p>
        El desarrollo tradicional de calzado dependía de feedback subjetivo y procesos manuales lentos. La empresa necesitaba 
        <strong>machine learning predictivo</strong> para analizar métricas de rendimiento, movimientos del pie y distribución de presión 
        en escenarios atléticos reales, además de personalizar recomendaciones basadas en biomecánica individual.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Nuestra Solución SaaS</h3>
      <p>
        WRLDS desarrolló una <strong>plataforma SaaS a medida</strong> que integra nuestros tres servicios principales:
      </p>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-blue-800 mb-2">🤖 Automatización de Procesos:</h4>
        <ul className="list-disc list-inside text-blue-700 space-y-1">
          <li>Automatización de la recopilación y análisis de datos de sensores</li>
          <li>Procesos automatizados de pruebas de calzado</li>
          <li>Generación automática de reportes de rendimiento</li>
        </ul>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-green-800 mb-2">💻 Plataforma SaaS Personalizada:</h4>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Dashboard web para equipos de I+D distribuidos globalmente</li>
          <li>API para integración con sistemas de diseño CAD existentes</li>
          <li>Aplicación móvil para atletas y entrenadores</li>
        </ul>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-purple-800 mb-2">🧠 Machine Learning Avanzado:</h4>
        <ul className="list-disc list-inside text-purple-700 space-y-1">
          <li>Algoritmos predictivos para optimización de diseño de calzado</li>
          <li>Análisis predictivo de lesiones basado en patrones de movimiento</li>
          <li>Recomendaciones personalizadas de calzado por biomecánica individual</li>
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Footprints className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Embedded Sensors</h4>
            <p>Textile-based pressure and motion sensors integrated directly into prototype footwear.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Zap className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Real-time Analysis</h4>
            <p>Instant feedback on gait, pressure points, and energy transfer during athletic movements.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <LineChart className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Performance Metrics</h4>
            <p>Comprehensive data collection on acceleration, stability, and energy return across different sports movements.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Award className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Athlete Cloud Platform</h4>
            <p>AI-powered analytics comparing performance across prototype iterations and athlete profiles.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Key Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Machine washable sensor technology for extended testing periods</li>
        <li>Low-profile design that doesn't interfere with natural movement</li>
        <li>Cross-platform mobile app for real-time coaching and feedback</li>
        <li>Materials testing module to evaluate durability and performance longevity</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Resultados Preliminares</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1">🤖</div>
          <div>
            <h4 className="font-semibold">70% Reducción en Tiempo de Desarrollo</h4>
            <p>La automatización de procesos de prueba aceleró significativamente los ciclos de desarrollo.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">💻</div>
          <div>
            <h4 className="font-semibold">Plataforma Global Desplegada</h4>
            <p>SaaS implementado en 15 centros de I+D con acceso simultáneo para 200+ investigadores.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1">🧠</div>
          <div>
            <h4 className="font-semibold">89% Precisión en Predicciones</h4>
            <p>El machine learning predice rendimiento de prototipos antes de fabricación física.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <Sparkles className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Development Roadmap</h4>
          <p>
            WRLDS Technologies continues to partner with this client on this R&D initiative to refine the prototype and 
            develop potential consumer versions of this technology, which could enable everyday athletes to benefit 
            from professional-grade footwear analysis and recommendations.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default SportRetailProject;
