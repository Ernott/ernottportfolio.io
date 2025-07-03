
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Content, Language } from "@/types/portfolio";

interface ProjectsSectionProps {
  currentContent: Content;
  language: Language;
  isVisible: boolean;
}

const ProjectsSection = ({ currentContent, language, isVisible }: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      className={`mb-16 transition-all duration-1000 delay-200 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
        {currentContent.projects}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {currentContent.projectsList.map((project, index) => (
          <Card
            key={index}
            className="bg-slate-800/50 backdrop-blur-md border-cyan-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-cyan-300">
                {project.title}
                {project.isCurrentPage && (
                  <span className="text-sm bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full">
                    {language === "es" ? "Página Actual" : "Current Page"}
                  </span>
                )}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full bg-slate-700/50 border-cyan-500/30 text-cyan-300 hover:bg-slate-600/50 hover:border-purple-500/50"
                onClick={() =>
                  project.link !== "#" &&
                  window.open(project.link, "_blank")
                }
                disabled={project.link === "#"}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {currentContent.viewProject}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
