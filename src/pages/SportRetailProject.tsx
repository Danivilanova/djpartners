
import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Footprints, Zap, LineChart, Award, Sparkles, FlaskConical } from 'lucide-react';

const SportRetailProject = () => {
  return (
    <ProjectPageLayout
      title="Optimización de Alquiler de Equipos para Eventos"
      subtitle="Visión por IA en devoluciones, modelo predictivo de merma/vida útil y BI de operación"
      imageUrl="/lovable-uploads/e3deb949-a036-484a-87f5-3cd10156dd83.png"
      brandName="Operador de alquiler de material para eventos"
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
      
      <h2 className="text-3xl font-bold mb-6">Caso de Éxito: Operador de Alquiler de Material para Eventos</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Sector y Situación Inicial</h3>
        <p>
          Empresa de alquiler con múltiples sedes enfrentaba <strong>pérdidas por roturas</strong>, <strong>devoluciones tardías</strong> y
          <strong> poca visibilidad del inventario</strong>. Los procesos de inspección manual eran lentos e inconsistentes, lo que afectaba
          la <strong>rotación</strong> y la <strong>rentabilidad por ítem</strong>.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Solución Implementada</h3>
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-blue-800 mb-2">🤖 Visión por IA en Devoluciones</h4>
        <ul className="list-disc list-inside text-blue-700 space-y-1">
          <li>Inspección automática con cámaras y modelos de visión para detectar daños y clasificar severidad</li>
          <li>Registro fotográfico y generación de parte de daños con evidencia</li>
          <li>Integración con contratos para aplicar cargos por daño o retraso</li>
        </ul>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-green-800 mb-2">📈 Modelo Predictivo de Merma y Vida Útil</h4>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Estimación de vida útil por tipo de material y condiciones de uso</li>
          <li>Plan de mantenimiento preventivo y baja/reposición optimizada</li>
          <li>Priorización de inversión según ROI por ítem</li>
        </ul>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-8">
        <h4 className="font-semibold text-purple-800 mb-2">📊 Tablero de KPIs Operativos</h4>
        <ul className="list-disc list-inside text-purple-700 space-y-1">
          <li>Rotación de inventario, tasa de daños, ROI por ítem y puntualidad de devoluciones</li>
          <li>Alertas por ítems críticos y anomalías de uso</li>
          <li>Vista por sede, categoría y temporada</li>
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Footprints className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Estaciones de Devolución</h4>
            <p>Cámaras y luz controlada para inspecciones consistentes con IA.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Zap className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Automatización de Cargos</h4>
            <p>Aplicación automática de cargos por daño/retraso con evidencia adjunta.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <LineChart className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">KPIs y ROI</h4>
            <p>Panel de rotación, tasa de daños y ROI por ítem para decisiones de compra.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Award className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Catálogo Saludable</h4>
            <p>Políticas de mantenimiento y renovación basadas en vida útil estimada.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Impacto a 6–12 Meses</h4>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">📉</div>
          <div>
            <h4 className="font-semibold">Mermas -35%</h4>
            <p>Descenso sostenido de pérdidas por daños gracias a inspecciones automáticas y evidencias.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1">🔄</div>
          <div>
            <h4 className="font-semibold">Rotación de inventario +22%</h4>
            <p>Mayor disponibilidad por planificación de mantenimiento y reposición basada en datos.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1">💸</div>
          <div>
            <h4 className="font-semibold">Coste por evento -15%</h4>
            <p>Optimización de procesos y cargos automáticos reducen costes operativos por operación.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <Sparkles className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Siguientes Pasos</h4>
          <p>
            Escalado del sistema de inspección a todas las sedes, ampliación del catálogo cubierto por IA y
            profundización en optimización de precios según vida útil y ROI.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default SportRetailProject;
