import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Route, Map, CloudRain, Gauge, Leaf, Fuel, Timer, Truck } from 'lucide-react';

const UrbanLogisticsProject = () => {
  return (
    <ProjectPageLayout
      title="Optimización Logística Urbana"
      subtitle="Ruteo inteligente con tráfico histórico, data lake de telemetría y eco-conducción"
      imageUrl="/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png"
      brandName="Operador logístico urbano"
    >
      <h2 className="text-3xl font-bold mb-6">Caso de Éxito: Operador Logístico Urbano</h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Sector y Situación Inicial</h3>
        <p>
          La operación funcionaba con <strong>rutas fijas poco eficientes</strong> y <strong>alto gasto en combustible</strong>. 
          La puntualidad sufría en horas pico y no había integración de telemetría o clima para planificar.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Solución Implementada</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <Route className="h-6 w-6 text-black mr-3 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Algoritmo de Ruteo Inteligente</h4>
            <p className="text-gray-600 text-sm">Optimización por tráfico histórico, condiciones actuales y ventanas de entrega por cliente.</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <CloudRain className="h-6 w-6 text-black mr-3 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Data Lake de Telemetría y Clima</h4>
            <p className="text-gray-600 text-sm">Ingesta de GPS, CAN bus, clima y mapas para enriquecer el planificador y los KPIs.</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <Gauge className="h-6 w-6 text-black mr-3 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Panel de Eco-Conducción</h4>
            <p className="text-gray-600 text-sm">Puntúa aceleraciones bruscas, ralentí y frenadas, con coaching por conductor.</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <Timer className="h-6 w-6 text-black mr-3 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Puntualidad por Conductor</h4>
            <p className="text-gray-600 text-sm">Seguimiento de SLA por ruta y conductor con alertas proactivas.</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Impacto a 6–12 Meses</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <Truck className="h-6 w-6 text-black mb-2" />
          <p className="text-sm text-gray-700">Km recorridos</p>
          <p className="text-3xl font-bold">-25%</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <Fuel className="h-6 w-6 text-black mb-2" />
          <p className="text-sm text-gray-700">Combustible</p>
          <p className="text-3xl font-bold">-19%</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <Leaf className="h-6 w-6 text-black mb-2" />
          <p className="text-sm text-gray-700">Entregas puntuales</p>
          <p className="text-3xl font-bold">+11%</p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Cómo lo logramos</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Optimización VRP con restricciones de ventanas temporales y capacidades</li>
          <li>Modelos de ETA basados en patrones de tráfico locales y clima</li>
          <li>Ingesta continua de telemetría para feedback y replanificación intradía</li>
          <li>KPIs operativos y de sostenibilidad para dirección y operaciones</li>
        </ul>
      </div>
    </ProjectPageLayout>
  );
};

export default UrbanLogisticsProject;
