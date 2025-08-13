import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('collaborator_requests')
        .insert({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono || null,
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
        mensaje: ''
      });
    } catch (error) {
      console.error('Error saving collaborator request:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
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
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Únete a nuestra red de expertos freelance y participa en proyectos específicos de transformación digital.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Datos de Contacto</h2>
              </div>

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
                  <Label htmlFor="mensaje">Propuesta de Colaboración *</Label>
                  <Textarea 
                    id="mensaje"
                    placeholder="Cuéntanos sobre tu experiencia, especialidades técnicas y qué tipo de colaboración propones con D&J Partners..."
                    rows={6}
                    value={formData.mensaje}
                    onChange={(e) => handleInputChange('mensaje', e.target.value)}
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Enviando...' : 'Solicitar Unirme a la Red de Colaboradores'}
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
                <strong>¿Quieres conocer más sobre nuestros proyectos?</strong> Contáctanos en{' '}
                <a href="mailto:info@djpartners.es" className="text-primary hover:underline">
                  info@djpartners.es
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaboratorForm;