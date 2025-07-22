
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { PawPrint, BadgePercent, HeartPulse, Smartphone, Database, FlaskConical } from 'lucide-react';

const PetProject = () => {
  return (
    <ProjectPageLayout
      title="Dog Activity Counter"
      subtitle="Smart monitoring for canine health and insurance"
      imageUrl="/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png"
      brandName="UK Insurance Giant"
    >
      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
        <p className="text-green-700 font-medium text-sm">Completed Prototype Project</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: Plataforma InsurTech con IA Predictiva</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          Una aseguradora líder del Reino Unido necesitaba <strong>automatizar sus procesos</strong> de evaluación de riesgos 
          en seguros de mascotas mediante monitoreo de salud en tiempo real. Su objetivo era desarrollar un sistema inteligente 
          que proporcionara datos para cuidado preventivo y pricing de pólizas más preciso.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Desafío</h3>
      <p>
        Los rastreadores existentes tenían vida útil corta, datos imprecisos y poca durabilidad. La mayoría carecía de capacidades 
        de monitoreo de salud integral. El cliente necesitaba una solución robusta con <strong>machine learning predictivo</strong> 
        que los dueños usaran consistentemente mientras proporcionaba datos confiables para evaluaciones de seguros.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Nuestra Solución InsurTech</h3>
      <p>
        WRLDS desarrolló una <strong>plataforma SaaS especializada</strong> para la industria de seguros:
      </p>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-blue-800 mb-2">🤖 Automatización de Evaluación de Riesgos:</h4>
        <ul className="list-disc list-inside text-blue-700 space-y-1">
          <li>Procesamiento automático de datos vitales y actividad</li>
          <li>Automatización de alertas de salud preventivas</li>
          <li>Cálculo automático de pricing de pólizas basado en datos reales</li>
        </ul>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-green-800 mb-2">💻 Ecosistema SaaS Completo:</h4>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Dashboard para ajustadores y actuarios con análisis en tiempo real</li>
          <li>Portal web para dueños de mascotas con insights de salud</li>
          <li>API para veterinarios con historial longitudinal de salud</li>
        </ul>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-purple-800 mb-2">🧠 Predicción de Salud y Riesgos:</h4>
        <ul className="list-disc list-inside text-purple-700 space-y-1">
          <li>Algoritmos predictivos para detección temprana de enfermedades</li>
          <li>Modelos de riesgo personalizados por raza, edad y actividad</li>
          <li>Predicción de costos de tratamiento para optimización de pólizas</li>
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <PawPrint className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Advanced Activity Tracking</h4>
            <p>Precise step counting with behavior pattern recognition (walking, running, playing, sleeping).</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <HeartPulse className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Health Monitoring</h4>
            <p>Non-invasive sensors that detect resting heart rate, respiration patterns, and sleep quality.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Smartphone className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Owner Application</h4>
            <p>User-friendly app providing health insights, activity recommendations, and preventative care alerts.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Database className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Veterinary Dashboard</h4>
            <p>Clinical interface for veterinarians to review longitudinal health data and identify early warning signs.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Waterproof design for active dogs</li>
        <li>Extended battery life with wireless charging capability</li>
        <li>Lightweight with adjustable sizing for all breeds</li>
        <li>Cellular and Bluetooth connectivity for continuous data transmission</li>
        <li>Machine learning algorithms that adapt to individual pet patterns</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits for Insurance Provider</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Risk Assessment</h4>
            <p>More accurate risk profiling for policy pricing based on actual activity levels.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Preventative Care</h4>
            <p>Early detection algorithms reduced costly emergency treatments.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Customer Engagement</h4>
            <p>Increased policy renewal rates among pet owners using the system.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Data Insights</h4>
            <p>Created valuable breed-specific health benchmarks from aggregated anonymous data.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits for Pet Owners</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Premium Discounts</h4>
            <p>Active pets qualify for reduction in insurance premiums.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Health Insights</h4>
            <p>Personalized health recommendations based on breed, age, and activity levels.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Peace of Mind</h4>
            <p>Real-time alerts for concerning changes in behavior or vital signs.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p>
        The prototype program was successfully implemented with a select group of pet owners across the UK, 
        demonstrating the concept's viability and potential benefits. The insurance provider reported significant 
        preliminary improvements in customer satisfaction and engagement metrics, while veterinary partners provided 
        positive feedback on the system's ability to detect potential health issues earlier than conventional methods.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <BadgePercent className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Industry Potential</h4>
          <p>
            This prototype demonstrated how a data-driven approach to pet insurance could represent a paradigm shift 
            in the industry, where preventative care and real-time monitoring have the potential to transform the 
            traditional reactive insurance model into a proactive health partnership between insurers, pet owners, 
            and veterinarians.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default PetProject;
