
import { Language, Content } from "@/types/portfolio";

interface NavigationProps {
  currentContent: Content;
  language: Language;
  setLanguage: (lang: Language) => void;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ currentContent, language, setLanguage, scrollToSection }: NavigationProps) => {
  return (
    <nav className="bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-cyan-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {currentContent.name}
            </h1>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {currentContent.nav.home}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {currentContent.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {currentContent.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("cv")}
              className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {currentContent.nav.cv}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {currentContent.nav.contact}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="px-3 py-1 text-sm font-medium text-cyan-300 bg-slate-800/50 rounded-md hover:bg-slate-700/50 transition-colors border border-cyan-500/30"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
