
import { Card, CardContent } from "@/components/ui/card";
import { Content } from "@/types/portfolio";
import { skillsImages } from "@/constants/content";

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

      {/* Skills Section with Circular Animation */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-cyan-300 mb-8 text-center">
          {currentContent.cvData.skills}
        </h3>
        <div className="flex justify-center">
          <div className="relative w-80 h-80">
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <span className="text-white font-bold text-sm">Skills</span>
            </div>
            
            {/* Rotating skills */}
            <div className="animate-spin-slow">
              {skillsImages.map((skill, index) => {
                const angle = (index * 360) / skillsImages.length;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-slate-800/80 backdrop-blur-md rounded-full border border-cyan-500/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-cyan-500/25"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    }}
                  >
                    <img
                      src={skill.src}
                      alt={skill.alt}
                      className="w-10 h-10 object-contain"
                      title={skill.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
