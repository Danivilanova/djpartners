import ProjectPageLayout from '@/components/ProjectPageLayout';
import { MessageCircle, BarChart3, Clock, Receipt, Sparkles } from 'lucide-react';

const HockeyProject = () => {
  return (
    <ProjectPageLayout
      title="Marketing Personalizado para Retail Gourmet"
      subtitle="Segmentación RFM, WhatsApp Business y recomendaciones en punto de venta"
      imageUrl="/lovable-uploads/c8b53a41-35aa-4600-8c1f-8cc6a37ff1e5.png"
      brandName="Cadena de tiendas gourmet (12 puntos de venta)"
    >
      <h2 className="text-3xl font-bold mb-6">Caso de Éxito: Retail Gourmet Multisede</h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Sector y Situación Inicial</h3>
        <p>
          La cadena sufría <strong>marketing genérico</strong> y <strong>baja recurrencia</strong> de clientes. Sin segmentación basada en valor,
          los esfuerzos promocionales no lograban impacto sostenido ni aumento del ticket medio por visita.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Solución Implementada</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <BarChart3 className="h-6 w-6 text-black mr-3 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Segmentación RFM</h4>
            <p className="text-gray-600 text-sm">Clasificación por Recencia, Frecuencia y Valor monetario para priorizar audiencias.</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <MessageCircle className="h-6 w-6 text-black mr-3 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Campañas Hiperpersonalizadas</h4>
            <p className="text-gray-600 text-sm">Orquestación en WhatsApp Business con mensajes y ofertas por segmento y franja horaria.</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <Clock className="h-6 w-6 text-black mr-3 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Dashboard de Ventas</h4>
            <p className="text-gray-600 text-sm">Corte por segmento y hora para activar ventanas de mayor conversión.</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <Receipt className="h-6 w-6 text-black mr-3 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Motor de Recomendación en POS</h4>
            <p className="text-gray-600 text-sm">Upsell y cross-sell personalizados en el punto de venta según historial y afinidades.</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Impacto a 6–12 Meses</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <Sparkles className="h-6 w-6 text-black mb-2" />
          <p className="text-sm text-gray-700">Ticket medio</p>
          <p className="text-3xl font-bold">+16%</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <Sparkles className="h-6 w-6 text-black mb-2" />
          <p className="text-sm text-gray-700">Clientes recurrentes</p>
          <p className="text-3xl font-bold">+21%</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <Sparkles className="h-6 w-6 text-black mb-2" />
          <p className="text-sm text-gray-700">ROI de campañas</p>
          <p className="text-3xl font-bold">×8</p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Cómo lo logramos</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Modelo RFM con actualización continua y audiencias sincronizadas</li>
          <li>Catálogo de plantillas conversacionales y automatización de journeys</li>
          <li>Medición de uplift por segmento y control de incrementales</li>
          <li>Recomendador en caja integrado con inventario y margen</li>
        </ul>
      </div>
    </ProjectPageLayout>
  );
};

export default HockeyProject;
