import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Send, Briefcase, Upload, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const InternalTeamForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    experiencia: '',
    tipoContrato: '',
    especialidad: '',
    disponibilidad: '',
    proyectoTipo: [],
    mensaje: '',
    cv: null
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitud enviada",
      description: "Hemos recibido tu solicitud para formar parte de nuestro equipo interno. Te contactaremos pronto.",
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, cv: file }));
      toast({
        title: "CV adjuntado",
        description: `Archivo "${file.name}" adjuntado correctamente.`,
      });
    }
  };

  const handleProjectTypeChange = (type: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      proyectoTipo: checked 
        ? [...prev.proyectoTipo, type]
        : prev.proyectoTipo.filter(t => t !== type)
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
                <Briefcase className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                Equipo Interno
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Forma parte de nuestro equipo core con posiciones full-time y part-time en proyectos de transformación digital.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="nombre">Nombre Completo *</Label>
                    <Input 
                      id="nombre"
                      type="text" 
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange('nombre', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div>
                    <Label htmlFor="experiencia">Años de Experiencia</Label>
                    <Select value={formData.experiencia} onValueChange={(value) => handleInputChange('experiencia', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu experiencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="junior">0-2 años (Junior)</SelectItem>
                        <SelectItem value="semi-senior">3-5 años (Semi-Senior)</SelectItem>
                        <SelectItem value="senior">6-10 años (Senior)</SelectItem>
                        <SelectItem value="lead">10+ años (Lead/Expert)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Tipo de Contrato Deseado *</Label>
                  <RadioGroup 
                    value={formData.tipoContrato} 
                    onValueChange={(value) => handleInputChange('tipoContrato', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="part-time" id="part-time" />
                      <Label htmlFor="part-time">Part-time (20-30h/semana)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="full-time" id="full-time" />
                      <Label htmlFor="full-time">Full-time (40h/semana)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="especialidad">Especialidad Principal *</Label>
                  <Select value={formData.especialidad} onValueChange={(value) => handleInputChange('especialidad', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu especialidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-ml">Inteligencia Artificial / Machine Learning</SelectItem>
                      <SelectItem value="data-science">Ciencia de Datos</SelectItem>
                      <SelectItem value="business-intelligence">Business Intelligence</SelectItem>
                      <SelectItem value="software-dev">Desarrollo de Software</SelectItem>
                      <SelectItem value="cloud-devops">Cloud / DevOps</SelectItem>
                      <SelectItem value="ux-ui">UX/UI Design</SelectItem>
                      <SelectItem value="project-management">Gestión de Proyectos</SelectItem>
                      <SelectItem value="business-analysis">Análisis de Negocio</SelectItem>
                      <SelectItem value="digital-marketing">Marketing Digital</SelectItem>
                      <SelectItem value="other">Otra especialidad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Experiencia en Tipos de Proyectos</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {[
                      'Automatización de Procesos',
                      'Análisis Predictivo',
                      'Dashboards de BI',
                      'Chatbots / AI Asistentes',
                      'Sistemas de Recomendación',
                      'Análisis de Datos',
                      'Desarrollo Web/Móvil',
                      'Integración de Sistemas'
                    ].map((tipo) => (
                      <div key={tipo} className="flex items-center space-x-2">
                        <Checkbox 
                          id={tipo}
                          checked={formData.proyectoTipo.includes(tipo)}
                          onCheckedChange={(checked) => handleProjectTypeChange(tipo, checked as boolean)}
                        />
                        <Label htmlFor={tipo} className="text-sm">{tipo}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="disponibilidad">Disponibilidad para Incorporación</Label>
                  <Select value={formData.disponibilidad} onValueChange={(value) => handleInputChange('disponibilidad', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="¿Cuándo puedes empezar?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inmediata">Inmediata</SelectItem>
                      <SelectItem value="1-semana">En 1 semana</SelectItem>
                      <SelectItem value="2-semanas">En 2 semanas</SelectItem>
                      <SelectItem value="1-mes">En 1 mes</SelectItem>
                      <SelectItem value="mas-1-mes">Más de 1 mes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="cv">Curriculum Vitae *</Label>
                  <div className="mt-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full justify-center"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {formData.cv ? `Archivo: ${(formData.cv as File).name}` : 'Adjuntar CV (PDF, DOC, DOCX)'}
                    </Button>
                    {formData.cv && (
                      <div className="flex items-center mt-2 text-sm text-green-600">
                        <FileText className="w-4 h-4 mr-1" />
                        CV adjuntado correctamente
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="mensaje">Carta de Motivación *</Label>
                  <Textarea 
                    id="mensaje"
                    placeholder="Cuéntanos sobre tu motivación para unirte a nuestro equipo interno, tu experiencia relevante y qué valor puedes aportar a WRLDS Technologies..."
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
                    Solicitar Unirme al Equipo Interno
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalTeamForm;