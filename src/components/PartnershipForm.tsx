import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Send, Globe, Handshake, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    contacto: '',
    email: '',
    telefono: '',
    sector: '',
    tipoSociedad: '',
    pais: '',
    empleados: '',
    servicios: [],
    tipoAcuerdo: '',
    experiencia: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Propuesta de partnership enviada",
      description: "Hemos recibido tu propuesta de acuerdo de partnership. Nuestro equipo de desarrollo de negocio te contactará pronto.",
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServicesChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      servicios: checked 
        ? [...prev.servicios, service]
        : prev.servicios.filter(s => s !== service)
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/careers" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Únete a Nuestro Equipo
            </Link>
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <Handshake className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                Acuerdos de Partnership
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Colaboremos para crear soluciones innovadoras. Establece una alianza estratégica con WRLDS Technologies para expandir nuestros servicios conjuntamente.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Building2 className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Información de la Empresa</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="empresa">Nombre de la Empresa *</Label>
                    <Input 
                      id="empresa"
                      type="text" 
                      placeholder="Nombre de tu empresa"
                      value={formData.empresa}
                      onChange={(e) => handleInputChange('empresa', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contacto">Persona de Contacto *</Label>
                    <Input 
                      id="contacto"
                      type="text" 
                      placeholder="Nombre del responsable"
                      value={formData.contacto}
                      onChange={(e) => handleInputChange('contacto', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Corporativo *</Label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="contacto@empresa.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input 
                      id="telefono"
                      type="tel" 
                      placeholder="+34 XXX XXX XXX"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange('telefono', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="sector">Sector de Actividad *</Label>
                    <Select value={formData.sector} onValueChange={(value) => handleInputChange('sector', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tecnologia">Tecnología y Software</SelectItem>
                        <SelectItem value="consultoria">Consultoría de Negocio</SelectItem>
                        <SelectItem value="marketing">Marketing y Publicidad</SelectItem>
                        <SelectItem value="finanzas">Servicios Financieros</SelectItem>
                        <SelectItem value="manufactura">Manufactura e Industria</SelectItem>
                        <SelectItem value="retail">Retail y E-commerce</SelectItem>
                        <SelectItem value="salud">Salud y Farmacéutico</SelectItem>
                        <SelectItem value="educacion">Educación y Formación</SelectItem>
                        <SelectItem value="logistica">Logística y Transporte</SelectItem>
                        <SelectItem value="energia">Energía y Utilities</SelectItem>
                        <SelectItem value="otro">Otro sector</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="empleados">Tamaño de la Empresa</Label>
                    <Select value={formData.empleados} onValueChange={(value) => handleInputChange('empleados', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Número de empleados" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">1-10 empleados (Startup)</SelectItem>
                        <SelectItem value="pequena">11-50 empleados (Pequeña)</SelectItem>
                        <SelectItem value="mediana">51-200 empleados (Mediana)</SelectItem>
                        <SelectItem value="grande">201-1000 empleados (Grande)</SelectItem>
                        <SelectItem value="enterprise">1000+ empleados (Enterprise)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="pais">País/Región Principal *</Label>
                  <Input 
                    id="pais"
                    type="text" 
                    placeholder="País donde opera principalmente"
                    value={formData.pais}
                    onChange={(e) => handleInputChange('pais', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label>Servicios que Ofrece tu Empresa</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {[
                      'Consultoría de Negocio',
                      'Desarrollo de Software',
                      'Marketing Digital',
                      'Transformación Digital',
                      'Ciberseguridad',
                      'Cloud Computing',
                      'Análisis de Datos',
                      'Gestión de Proyectos',
                      'Formación Empresarial',
                      'Diseño UX/UI',
                      'Automatización',
                      'Inteligencia Artificial'
                    ].map((servicio) => (
                      <div key={servicio} className="flex items-center space-x-2">
                        <Checkbox 
                          id={servicio}
                          checked={formData.servicios.includes(servicio)}
                          onCheckedChange={(checked) => handleServicesChange(servicio, checked as boolean)}
                        />
                        <Label htmlFor={servicio} className="text-sm">{servicio}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Tipo de Acuerdo de Interés *</Label>
                  <RadioGroup 
                    value={formData.tipoAcuerdo} 
                    onValueChange={(value) => handleInputChange('tipoAcuerdo', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="referidos" id="referidos" />
                      <Label htmlFor="referidos">Programa de Referidos (Comisiones por clientes)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="reseller" id="reseller" />
                      <Label htmlFor="reseller">Partner Reseller (Reventa de servicios)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tecnologico" id="tecnologico" />
                      <Label htmlFor="tecnologico">Partnership Tecnológico (Integración de servicios)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="estrategico" id="estrategico" />
                      <Label htmlFor="estrategico">Alianza Estratégica (Proyectos conjuntos)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="experiencia">Experiencia Previa en Partnerships</Label>
                  <Textarea 
                    id="experiencia"
                    placeholder="Describe brevemente experiencias previas en acuerdos de partnership o colaboraciones empresariales..."
                    rows={3}
                    value={formData.experiencia}
                    onChange={(e) => handleInputChange('experiencia', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="mensaje">Propuesta de Colaboración *</Label>
                  <Textarea 
                    id="mensaje"
                    placeholder="Describe tu propuesta de partnership: ¿Cómo imaginas la colaboración? ¿Qué beneficios mutuos puede generar? ¿Qué tipo de proyectos o clientes tienes en mente?"
                    rows={5}
                    value={formData.mensaje}
                    onChange={(e) => handleInputChange('mensaje', e.target.value)}
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Propuesta de Partnership
                  </Button>
                </div>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-8 p-6 bg-gray-50 rounded-xl"
            >
              <p className="text-gray-600">
                <strong>¿Quieres discutir tu propuesta?</strong> Contáctanos directamente en{' '}
                <a href="mailto:partnerships@djpartners.com" className="text-primary hover:underline">
                  partnerships@djpartners.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipForm;