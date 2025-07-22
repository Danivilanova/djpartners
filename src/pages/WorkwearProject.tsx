import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Thermometer, ShieldCheck, Mountain, FileSymlink, Cpu, FlaskConical } from 'lucide-react';

const WorkwearProject = () => {
  return (
    <ProjectPageLayout
      title="Workwear Climate Control"
      subtitle="Intelligent temperature regulation for extreme work environments"
      imageUrl="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
      brandName="European Multinational Textile Producer"
    >
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">Ongoing R&D Project — Currently in Prototyping Phase</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: Sistema IoT de Control Climático Inteligente</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          Un fabricante textil europeo líder necesitaba <strong>automatizar el control climático</strong> en ropa de trabajo para 
          profesionales en entornos de temperatura extrema. Su objetivo era desarrollar una solución que regulara 
          automáticamente la temperatura corporal sin comprometer la movilidad o el cumplimiento de seguridad.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Desafío</h3>
      <p>
        Los enfoques tradicionales para regulación de temperatura eran pasivos o sistemas voluminosos con fuentes de energía externas. 
        El cliente necesitaba una solución con <strong>machine learning predictivo</strong> que pudiera adaptarse automáticamente 
        a condiciones cambiantes, niveles de actividad del trabajador, y proporcionar control de temperatura dirigido.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Nuestra Solución Integral</h3>
      <p>
        WRLDS desarrolló un <strong>SaaS a medida</strong> que combina hardware inteligente con software predictivo:
      </p>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-blue-800 mb-2">🤖 Automatización Inteligente:</h4>
        <ul className="list-disc list-inside text-blue-700 space-y-1">
          <li>Control automático de temperatura basado en condiciones ambientales</li>
          <li>Ajustes automáticos según actividad física detectada</li>
          <li>Gestión energética automatizada para maximizar duración de batería</li>
        </ul>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-green-800 mb-2">💻 Plataforma de Gestión Centralizada:</h4>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Dashboard web para supervisores de obra y gerentes de seguridad</li>
          <li>Aplicación móvil para trabajadores con control manual</li>
          <li>Sistema de alertas en tiempo real por condiciones peligrosas</li>
        </ul>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-purple-800 mb-2">🧠 Predicción Climática Avanzada:</h4>
        <ul className="list-disc list-inside text-purple-700 space-y-1">
          <li>Algoritmos que predicen necesidades térmicas individuales</li>
          <li>Análisis predictivo de fatiga relacionada con temperatura</li>
          <li>Optimización predictiva del consumo energético</li>
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Thermometer className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Adaptive Heating/Cooling</h4>
            <p>Textile-integrated heating and cooling elements with multi-zone temperature control.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cpu className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Smart Control System</h4>
            <p>AI-driven controller that learns user preferences and optimizes power usage based on conditions.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <ShieldCheck className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Safety Integration</h4>
            <p>Systems designed to maintain all industry safety certifications including flame resistance and electrical safety.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Mountain className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Extreme Durability</h4>
            <p>Components rated for operation in extreme temperatures with full washability and construction durability.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Modular design supporting full-body integration or focused application</li>
        <li>Extended battery life depending on conditions and settings</li>
        <li>Smartphone app for manual control and environmental monitoring</li>
        <li>Washable for multiple industrial cleaning cycles without performance degradation</li>
        <li>Compliance with industry-specific safety standards</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Preliminary Results</h3>
      <p>
        The prototype climate-controlled workwear has shown promising results in controlled testing environments. 
        The technology is being evaluated by select industrial clients across Northern Europe and Canada, focusing on 
        oil & gas, mining, and construction sectors operating in extreme climates. Initial feedback indicates 
        significant potential for reducing cold-related work disruptions.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <FileSymlink className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Ongoing Development</h4>
          <p>
            Current R&D efforts are focused on refining the prototypes, improving power efficiency, and 
            exploring the potential to include environmental hazard detection capabilities 
            and integration with wider workplace safety systems.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default WorkwearProject;
