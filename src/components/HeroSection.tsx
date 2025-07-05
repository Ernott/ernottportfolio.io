
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Content } from "@/types/portfolio";

interface HeroSectionProps {
  currentContent: Content;
  isVisible: boolean;
}

const HeroSection = ({
  currentContent,
  isVisible
}: HeroSectionProps) => {
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Developer illustration */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <img
                src="/lovable-uploads/d8fc4a2c-cd07-4b33-9731-7d111da392c6.png"
                alt="Ernott - Developer Illustration"
                className="w-96 h-96 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Main Ernott Branding */}
            <div className="mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img
                  src="/lovable-uploads/da26af42-5088-419e-bd2b-91c4cf316c64.png"
                  alt="Ernott Logo"
                  className="w-12 h-12 object-contain"
                />
                <div className="relative">
                  <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Ernott
                  </h1>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Subtitle with name */}
              <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
                {currentContent.name}
              </h2>
              <p className="text-xl text-purple-300 mb-4">{currentContent.title}</p>
            </div>

            {/* Description */}
            <div className="bg-slate-800/30 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                {currentContent.about}
              </p>
            </div>

            {/* Call to action or additional info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                {currentContent.projects}
              </button>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                {currentContent.contact}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
