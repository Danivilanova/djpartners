import ProjectPageLayout from '@/components/ProjectPageLayout';
import { CalendarRange, Users, Bell, CreditCard, BarChart3, TrendingUp, Clock } from 'lucide-react';

const DentalClinicsProject = () => {
  return (
    <ProjectPageLayout
      title="Optimización Clínica Dental con IA"
      subtitle="Overbooking dinámico, predicción de demanda y automatización de recordatorios y cobros"
      imageUrl="/lovable-uploads/6d2f0374-664f-4c97-89ba-cf7d7d4fe4cd.png"
      brandName="Red de Clínicas Dentales (5 sedes)"
    >
      <h2 className="text-3xl font-bold mb-6">Caso de Éxito: Red de Clínicas Dentales</h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Sector y Situación Inicial</h3>
        <p className="mb-4">
          Una red de 5 clínicas dentales sufría ineficiencias operativas: <strong>agendas con solapamientos</strong>,
          <strong> cancelaciones de última hora</strong> y <strong>costes laborales elevados</strong> por mala planificación de recursos.
          La dirección buscaba estabilizar las agendas, mejorar la utilización de sillones y reducir horas extra.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Agenda saturada en picos y ociosa en valles</li>
          <li>Cancelaciones sin reubicación eficiente</li>
          <li>Higienistas infra/ sobre-asignadas entre sedes</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Solución Implementada</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <CalendarRange className="h-6 w-6 text-black mr-3 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Motor de Overbooking Dinámico</h4>
            <p className="text-gray-600 text-sm">Ajusta la sobre-reserva por franja y tipo de tratamiento según probabilidad de no presentación.</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <Users className="h-6 w-6 text-black mr-3 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Reasignación Automática de Higienistas</h4>
            <p className="text-gray-600 text-sm">Balanceo entre sedes y profesionales según carga, habilidades y tiempos muertos.</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <BarChart3 className="h-6 w-6 text-black mr-3 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Cuadro de Mando en Power BI</h4>
            <p className="text-gray-600 text-sm">Predicción de demanda por franja horaria, KPIs operativos y alertas para jefes de clínica.</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <Bell className="h-6 w-6 text-black mr-3 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Bot de Recordatorios y Cobros</h4>
            <p className="text-gray-600 text-sm">Automatiza confirmaciones, recordatorios post-tratamiento y enlaces de pago.</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Impacto a 6–12 Meses</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <TrendingUp className="h-6 w-6 text-black mb-2" />
          <p className="text-sm text-gray-700">Utilización de sillones</p>
          <p className="text-3xl font-bold">+18%</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <Clock className="h-6 w-6 text-black mb-2" />
          <p className="text-sm text-gray-700">Horas extra</p>
          <p className="text-3xl font-bold">-27%</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <CreditCard className="h-6 w-6 text-black mb-2" />
          <p className="text-sm text-gray-700">Ingresos por doctor</p>
          <p className="text-3xl font-bold">+12%</p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Cómo lo logramos</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Modelos probabilísticos de no-show y cancelación por tipo de paciente y tratamiento</li>
          <li>Optimización de agenda (ILP) con restricciones de recursos, sedes y compatibilidades</li>
          <li>Integración con PMS/ERP existentes y automatizaciones sin fricción para el equipo</li>
          <li>Gobierno de datos y paneles en Power BI con KPIs accionables</li>
        </ul>
      </div>
    </ProjectPageLayout>
  );
};

export default DentalClinicsProject;
