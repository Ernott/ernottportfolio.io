
import { Language, Content } from "@/types/portfolio";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentContent: Content;
  language: Language;
  setLanguage: (lang: Language) => void;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ currentContent, language, setLanguage, scrollToSection }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const handleNavigation = (section: string) => {
    if (location.pathname === "/about" && section !== "about") {
      // If we're on the about page and want to go to another section, go to home first
      navigate("/");
      setTimeout(() => scrollToSection(section), 100);
    } else if (location.pathname === "/" && section === "about") {
      // If we're on home and want to go to about, navigate to about page
      navigate("/about");
    } else {
      // Normal scrolling on the same page
      scrollToSection(section);
    }
  };

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-cyan-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              {currentContent.name}
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("home")}
              className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {currentContent.nav.home}
            </button>
            <button
              onClick={() => handleNavigation("projects")}
              className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {currentContent.nav.projects}
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {currentContent.nav.about}
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {currentContent.nav.contact}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-cyan-300 hover:text-cyan-400"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
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
