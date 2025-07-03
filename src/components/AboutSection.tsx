
import { Card, CardContent } from "@/components/ui/card";
import { Content } from "@/types/portfolio";

interface AboutSectionProps {
  currentContent: Content;
  isVisible: boolean;
}

const AboutSection = ({ currentContent, isVisible }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className={`mb-16 transition-all duration-1000 delay-400 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
        {currentContent.aboutMe}
      </h2>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <Card className="bg-slate-800/50 backdrop-blur-md border-cyan-500/30">
            <CardContent className="pt-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {currentContent.aboutMeText}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <img
              src="/lovable-uploads/d8fc4a2c-cd07-4b33-9731-7d111da392c6.png"
              alt="Ernott - Developer Illustration"
              className="w-96 h-96 object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
