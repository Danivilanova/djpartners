import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Send, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const CollaboratorForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    experiencia: '',
    especialidad: '',
    disponibilidad: '',
    proyectoTipo: [],
    mensaje: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('collaborator_requests')
        .insert({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono || null,
          experiencia: formData.experiencia || null,
          especialidad: formData.especialidad,
          disponibilidad: formData.disponibilidad || null,
          proyecto_tipo: formData.proyectoTipo,
          mensaje: formData.mensaje
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Solicitud enviada",
        description: "Hemos recibido tu solicitud para nuestra red de colaboradores. Te contactaremos pronto.",
      });

      // Reset form
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        experiencia: '',
        especialidad: '',
        disponibilidad: '',
        proyectoTipo: [],
        mensaje: ''
      });
    } catch (error) {
      console.error('Error saving collaborator request:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                Red de Colaboradores
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Únete a nuestra red de expertos freelance y participa en proyectos específicos de transformación digital.
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
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input 
                      id="telefono"
                      type="tel" 
                      placeholder="+34 XXX XXX XXX"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange('telefono', e.target.value)}
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
                  <Label>Tipos de Proyectos de Interés</Label>
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
                  <Label htmlFor="disponibilidad">Disponibilidad</Label>
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
                  <Label htmlFor="mensaje">Mensaje / Motivación *</Label>
                  <Textarea 
                    id="mensaje"
                    placeholder="Cuéntanos sobre tu experiencia como freelance, especialidades técnicas y qué tipo de proyectos te interesan más..."
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
                    Solicitar Unirme a la Red de Colaboradores
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

export default CollaboratorForm;