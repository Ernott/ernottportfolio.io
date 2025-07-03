
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";
import { Content } from "@/types/portfolio";
import { skillsImages } from "@/constants/content";

interface CVSectionProps {
  currentContent: Content;
  isVisible: boolean;
}

const CVSection = ({ currentContent, isVisible }: CVSectionProps) => {
  return (
    <section
      id="cv"
      className={`mb-16 transition-all duration-1000 delay-600 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
        {currentContent.cv}
      </h2>

      {/* Experience Timeline */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-cyan-300 mb-8 text-center">
          {currentContent.cvData.experience}
        </h3>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform -translate-y-1/2 rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="flex justify-between items-center relative">
            {currentContent.cvData.experienceList.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col items-center w-1/4 ${
                  isVisible
                    ? `animate-fade-in`
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 0.2}s` : "0s"
                }}
              >
                {/* Timeline Dot */}
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4 shadow-lg shadow-cyan-500/50 z-10"></div>
                
                {/* Experience Card */}
                <Card className={`bg-slate-800/50 backdrop-blur-md border-cyan-500/30 p-4 max-w-xs ${index % 2 === 0 ? 'mb-8' : 'mt-8'}`}>
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-purple-300 text-sm mb-1">
                      {exp.position}
                    </h4>
                    <p className="text-cyan-400 font-medium text-xs mb-2">
                      {exp.company}
                    </p>
                    <div className="flex items-center text-gray-400 text-xs mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </div>
                    <p className="text-gray-300 text-xs">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <Card className="mb-8 bg-slate-800/50 backdrop-blur-md border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-cyan-300">
            {currentContent.cvData.education}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentContent.cvData.educationList.map((edu, index) => (
            <div
              key={index}
              className="mb-4 last:mb-0 p-4 bg-slate-700/30 rounded-lg border border-purple-500/20"
            >
              <h4 className="font-semibold text-purple-300">
                {edu.degree}
              </h4>
              <p className="text-cyan-400 font-medium">
                {edu.institution}
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {edu.period}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills with Images */}
      <Card className="mt-8 bg-slate-800/50 backdrop-blur-md border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-cyan-300">
            {currentContent.cvData.skills}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skillsImages.map((skill, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 bg-slate-700/30 rounded-lg border border-purple-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 ${
                  isVisible
                    ? "animate-scale-in"
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 0.1}s` : "0s"
                }}
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-12 h-12 mb-2 object-contain"
                />
                <span className="text-purple-300 font-medium text-sm text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Download CV Button */}
      <div className="text-center mt-8">
        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1uoykXGCwcmEiQpfMKTUjgF7eASkMJKXli1Vy9B-NLm0/export?format=pdf",
              "_blank"
            )
          }
        >
          <Download className="w-4 h-4 mr-2" />
          {currentContent.downloadCV}
        </Button>
      </div>
    </section>
  );
};

export default CVSection;
