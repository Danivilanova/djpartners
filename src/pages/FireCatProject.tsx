
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Shield, Radio, Activity, Box } from 'lucide-react';

const FireCatProject = () => {
  return (
    <ProjectPageLayout
      title="FireCat's 6th SENSE"
      subtitle="Advanced safety system for high-risk environments"
      imageUrl="/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      brandName="FireCat Group"
      darkMode={true}
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: FireCat's 6th SENSE - Sistema IoT Inteligente</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          FireCat Group necesitaba <strong>automatizar los procesos</strong> de monitoreo de seguridad de su personal en entornos de alto riesgo. 
          Su objetivo era crear un sistema que pudiera recopilar datos críticos en tiempo real y automatizar las respuestas 
          de emergencia para mejorar la toma de decisiones y reducir los tiempos de respuesta.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Desafío</h3>
      <p>
        Los sistemas tradicionales requerían intervención manual constante y carecían de capacidades de <strong>machine learning predictivo</strong>. 
        FireCat necesitaba una solución que pudiera automatizar la detección de emergencias, predecir situaciones de riesgo 
        y generar alertas inteligentes sin depender de la supervisión humana continua.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Nuestra Solución</h3>
      <p>
        WRLDS desarrolló un <strong>SaaS a medida</strong> llamado 6th SENSE, integrando nuestros tres servicios principales:
      </p>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-blue-800 mb-2">🤖 Automatización de Procesos Aplicada:</h4>
        <ul className="list-disc list-inside text-blue-700 space-y-1">
          <li>Automatización de alertas de emergencia sin intervención humana</li>
          <li>Procesamiento automático de datos de sensores en tiempo real</li>
          <li>Flujos de trabajo automatizados para respuesta a incidentes</li>
        </ul>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-green-800 mb-2">💻 Desarrollo de SaaS a Medida:</h4>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Plataforma web personalizada para supervisión centralizada</li>
          <li>API escalable para integración con sistemas existentes</li>
          <li>Aplicación móvil para supervisores y personal de campo</li>
        </ul>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-purple-800 mb-2">🧠 Machine Learning Predictivo:</h4>
        <ul className="list-disc list-inside text-purple-700 space-y-1">
          <li>Algoritmos que aprenden patrones individuales para reducir falsas alarmas</li>
          <li>Predicción de situaciones de riesgo antes de que ocurran</li>
          <li>Análisis predictivo de fatiga y estrés del personal</li>
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Shield className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Main Unit</h4>
            <p>Secure real-time data transmission with encrypted communication.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Radio className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">High-Quality Sensors</h4>
            <p>Durable sensors resistant to dust, water, and extreme temperatures.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Box className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Integrated Clothing</h4>
            <p>Customized shirts embedding AI-powered sensors, maintaining user comfort.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Activity className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Control Unit</h4>
            <p>Centralized AI interface providing transparent data visualization and management via an intuitive supervisor app.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Critical Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Man Down Alarm for immediate alerts</li>
        <li>Precise GPS positioning for location tracking</li>
        <li>Real-time monitoring of vital signs</li>
        <li>Easily accessible Panic Button for emergencies</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Resultados del Proyecto</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1">🤖</div>
          <div>
            <h4 className="font-semibold">85% Reducción en Tiempo de Respuesta</h4>
            <p>La automatización de procesos eliminó los retrasos en la detección manual de emergencias.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">💻</div>
          <div>
            <h4 className="font-semibold">Plataforma SaaS Escalable</h4>
            <p>Sistema desplegado en múltiples locaciones con capacidad para miles de usuarios simultáneos.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1">🧠</div>
          <div>
            <h4 className="font-semibold">92% Precisión Predictiva</h4>
            <p>El machine learning reduce falsas alarmas y predice situaciones de riesgo con alta precisión.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-3 mt-1">💰</div>
          <div>
            <h4 className="font-semibold">ROI de 300% en 18 Meses</h4>
            <p>Reducción significativa de costos operativos y mejora en eficiencia del personal.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Integración Transparente</h4>
            <p>API desarrollada a medida se integró perfectamente con los sistemas existentes de FireCat.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Resultado Final</h3>
      <p>
        FireCat implementó exitosamente la solución 6th SENSE, transformando completamente sus operaciones de seguridad. 
        Este proyecto demuestra cómo la <strong>combinación de automatización de procesos, desarrollo de SaaS a medida 
        y machine learning predictivo</strong> puede revolucionar la gestión de seguridad en entornos de alto riesgo. 
        La solución ahora se utiliza en múltiples países y ha establecido un nuevo estándar en la industria.
      </p>
    </ProjectPageLayout>
  );
};

export default FireCatProject;
