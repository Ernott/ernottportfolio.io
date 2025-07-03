
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Content } from "@/types/portfolio";

interface ContactSectionProps {
  currentContent: Content;
  isVisible: boolean;
}

const ContactSection = ({ currentContent, isVisible }: ContactSectionProps) => {
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
      <Card className="max-w-md mx-auto bg-slate-800/50 backdrop-blur-md border-cyan-500/30">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-cyan-400 mr-3" />
              <span className="text-gray-300">
                javieralejandrocarbone28@gmail.com
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-cyan-400 mr-3" />
              <span className="text-gray-300">+58 (412) 899-3761</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
              <span className="text-gray-300">Caracas, Venezuela</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactSection;
