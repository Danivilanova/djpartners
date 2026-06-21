import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send, User, Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { trackFormSubmit } from "@/lib/analytics";

interface ConsultationModalProps {
  children: React.ReactNode;
}

export const ConsultationModal = ({ children }: ConsultationModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Por favor completa los campos obligatorios");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor introduce un email válido");
      return;
    }

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Error en el servidor');
      trackFormSubmit('consultoria');

      toast.success("¡Consultoría solicitada! Te contactaremos pronto.");
      setFormData({ name: "", email: "", phone: "", description: "" });
      setIsOpen(false);
    } catch (error) {
      console.error('Error sending consultation request:', error);
      toast.error("Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-gray-700" />
            Solicita tu Consultoría Gratuita
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Cuéntanos sobre tu proyecto y te contactaremos para agendar una consultoría gratuita personalizada.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gray-700 hover:bg-gray-800 text-white flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Solicitar Consultoría
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};