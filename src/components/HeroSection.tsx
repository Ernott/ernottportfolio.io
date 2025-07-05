
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Content } from "@/types/portfolio";

interface HeroSectionProps {
  currentContent: Content;
  isVisible: boolean;
}

const HeroSection = ({ currentContent, isVisible }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className={`text-center mb-16 transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-cyan-400/50">
        <AvatarImage
          src="/lovable-uploads/209a3321-2ce8-4c06-aa61-9bf3ccd64b8b.png"
          alt={currentContent.name}
          className="object-cover object-center"
        />
        <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white text-2xl">
          JC
        </AvatarFallback>
      </Avatar>
      
      <div className="flex items-center justify-center gap-4 mb-4">
        <img 
          src="/lovable-uploads/da26af42-5088-419e-bd2b-91c4cf316c64.png" 
          alt="Ernott Logo" 
          className="w-16 h-16 object-contain"
        />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {currentContent.name}
        </h1>
      </div>
      
      <p className="text-xl text-cyan-300 mb-2">{currentContent.title}</p>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        {currentContent.about}
      </p>
    </section>
  );
};

export default HeroSection;
