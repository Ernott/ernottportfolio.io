import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Send } from "lucide-react";
import { Content } from "@/types/portfolio";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  currentContent: Content;
  isVisible: boolean;
}

const ContactForm = ({ currentContent, isVisible }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(data.subject);
      const body = encodeURIComponent(
        `Nombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`
      );
      const mailtoLink = `mailto:thegamer.58@hotmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Show success message
      toast({
        title: "Email preparado",
        description: "Se ha abierto tu cliente de email con el mensaje.",
      });
      
      // Reset form
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu mensaje.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`transition-all duration-1000 delay-800 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
        {currentContent.contact}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Information */}
        <Card className="bg-card/50 backdrop-blur-md border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Información de Contacto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-primary mr-3" />
              <span className="text-muted-foreground">
                javieralejandrocarbone28@gmail.com
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-primary mr-3" />
              <span className="text-muted-foreground">+58 (412) 899-3761</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-primary mr-3" />
              <span className="text-muted-foreground">Caracas, Venezuela</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-5 h-5 text-primary mr-3" />
              <a 
                href="https://www.linkedin.com/in/javier-a-carbone-7b4371198/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-5 h-5 text-primary mr-3" />
              <a 
                href="https://discord.gg/UdqyZdKhbK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Discord
              </a>
            </div>
            <div className="flex items-center">
              <Github className="w-5 h-5 text-primary mr-3" />
              <a 
                href="https://github.com/Ernott" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="bg-card/50 backdrop-blur-md border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Envíame un mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  {...register("name", { required: "El nombre es requerido" })}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "El email es requerido",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Email inválido"
                    }
                  })}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="subject">Asunto</Label>
                <Input
                  id="subject"
                  {...register("subject", { required: "El asunto es requerido" })}
                  placeholder="Asunto del mensaje"
                />
                {errors.subject && (
                  <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  {...register("message", { required: "El mensaje es requerido" })}
                  placeholder="Escribe tu mensaje aquí..."
                  rows={4}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;