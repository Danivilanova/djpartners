import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Send, Handshake, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    contacto: '',
    email: '',
    telefono: '',
    website: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('partnership_requests')
        .insert({
          empresa: formData.empresa,
          contacto: formData.contacto,
          email: formData.email,
          telefono: formData.telefono || null,
          website: formData.website || null,
          propuesta_colaboracion: formData.mensaje
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Propuesta de partnership enviada",
        description: "Hemos recibido tu propuesta de acuerdo de partnership. Nuestro equipo de desarrollo de negocio te contactará pronto.",
      });

      // Reset form
      setFormData({
        empresa: '',
        contacto: '',
        email: '',
        telefono: '',
        website: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error saving partnership request:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu propuesta. Por favor, inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
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
                <Handshake className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                Acuerdos de Partnership
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Colaboremos para crear soluciones innovadoras. Propón una alianza estratégica con D&J Partners.
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
                <h2 className="text-2xl font-bold">Datos de Contacto</h2>
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
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input 
                      id="telefono"
                      type="tel" 
                      placeholder="+34 XXX XXX XXX"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange('telefono', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="website">Sitio Web</Label>
                  <Input 
                    id="website"
                    type="url" 
                    placeholder="https://empresa.com"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="mensaje">Propuesta de Colaboración *</Label>
                  <Textarea 
                    id="mensaje"
                    placeholder="Describe tu propuesta de partnership: ¿Cómo imaginas la colaboración? ¿Qué beneficios mutuos puede generar? ¿Qué tipo de proyectos o clientes tienes en mente?"
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
                    {isSubmitting ? 'Enviando...' : 'Enviar Propuesta de Partnership'}
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

export default PartnershipForm;