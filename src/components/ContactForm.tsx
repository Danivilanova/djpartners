
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, Mail, User, MessageCircle, Phone } from 'lucide-react';
import { toast } from "sonner";
import { supabase } from '@/integrations/supabase/client';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started:', formData);
    
    setIsSubmitting(true);
    
    try {
      // Validación básica
      if (!formData.name || !formData.email || !formData.phone) {
        console.error('Validation failed: missing required fields');
        toast.error("Por favor completa los campos obligatorios");
        setIsSubmitting(false);
        return;
      }

      // Validación de email básica
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        console.error('Validation failed: invalid email');
        toast.error("Por favor introduce un email válido");
        setIsSubmitting(false);
        return;
      }

      console.log('Validation passed, attempting to save to Supabase...');

      // Guardar en Supabase
      const { error } = await supabase
        .from('consultation_requests')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          description: formData.description || null
        });

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        throw error;
      }

      console.log('Successfully saved to Supabase');
      toast.success("¡Consultoría solicitada! Te contactaremos pronto.");
      
      // Resetear formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        description: ""
      });
    } catch (error) {
      console.error('Error saving consultation request:', error);
      toast.error("Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-black text-white relative py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Solicita tu Consultoría Gratuita
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contacta con Nosotros
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te contactaremos para agendar una consultoría gratuita personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-700 text-black">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Nombre completo *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  Email corporativo *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@empresa.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+34 600 000 000"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  Descripción del proyecto (opcional)
                </Label>
                <Textarea
                  id="description"
                  placeholder="Cuéntanos sobre tu empresa y qué tipo de solución de IA necesitas..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="w-full min-h-[100px] resize-none"
                  rows={4}
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600">
                  <strong>Compromiso de privacidad:</strong> Tus datos están protegidos y solo se utilizarán para contactarte sobre esta consultoría. No compartimos información con terceros.
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-700 hover:bg-gray-800 text-white flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Solicitar Consultoría
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-700 text-black">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">For general inquiries:</p>
              <a href="mailto:info@djpartners.com" className="text-blue-500 hover:underline">hello@djpartners.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
