
import { useState } from "react";
import { Language } from "@/types/portfolio";
import { content } from "@/constants/content";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import CodeWallpaper from "@/components/CodeWallpaper";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [language, setLanguage] = useState<Language>("es");
  const visibleSections = useIntersectionObserver();

  const currentContent = content[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative">
      <CodeWallpaper />

      <div className="relative z-10">
        <Navigation 
          currentContent={currentContent}
          language={language}
          setLanguage={setLanguage}
          scrollToSection={scrollToSection}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <HeroSection 
            currentContent={currentContent}
            isVisible={visibleSections.has("home")}
          />
          
          <AboutSection 
            currentContent={currentContent}
            isVisible={visibleSections.has("about")}
          />
        </div>
      </div>

      <div className="relative z-10 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProjectsSection 
            currentContent={currentContent}
            language={language}
            isVisible={visibleSections.has("projects")}
          />

          <ContactForm 
            currentContent={currentContent}
            isVisible={visibleSections.has("contact")}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
