
import { useState } from "react";
import { Language } from "@/types/portfolio";
import { content } from "@/constants/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CodeWallpaper from "@/components/CodeWallpaper";
import Navigation from "@/components/Navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { skillsImages } from "@/constants/content";

const AboutMe = () => {
  const [language, setLanguage] = useState<Language>("es");
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
          {/* Hero Section */}
          <section className="text-center mb-16">
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-cyan-400/50">
              <AvatarImage src="/lovable-uploads/209a3321-2ce8-4c06-aa61-9bf3ccd64b8b.png" alt={currentContent.name} className="object-cover object-center" />
              <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white text-2xl">
                JC
              </AvatarFallback>
            </Avatar>
            
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              {currentContent.aboutMe}
            </h1>
            
            <p className="text-xl text-cyan-300 mb-6">{currentContent.title}</p>
          </section>

          {/* Main Description */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Card className="bg-slate-800/50 backdrop-blur-md border-cyan-500/30">
                  <CardContent className="pt-6">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {currentContent.aboutMeText}
                    </p>
                    <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-4 rounded-lg border border-purple-500/20">
                      <h3 className="text-cyan-300 font-semibold mb-2">{currentContent.cvData.methodology}</h3>
                      <p className="text-gray-300 text-sm">
                        {currentContent.cvData.methodologyText}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    src="/lovable-uploads/d8fc4a2c-cd07-4b33-9731-7d111da392c6.png"
                    alt="Developer Illustration"
                    className="w-96 h-96 object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Soft Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
              💡 {currentContent.cvData.softSkills}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.cvData.softSkillsList.map((skill, index) => (
                <Card key={index} className="bg-slate-800/50 backdrop-blur-md border-cyan-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-cyan-300">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg">{skill.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
              {currentContent.cvData.skills}
            </h2>
            
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 z-10">
                  <span className="text-white font-bold text-sm">Skills</span>
                </div>
                
                {/* Orbiting skills */}
                <div className="animate-spin-slow w-full h-full">
                  {skillsImages.map((skill, index) => {
                    const angle = (index * 360) / skillsImages.length;
                    const radius = 140;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
                    return (
                      <div
                        key={index}
                        className="absolute top-1/2 left-1/2 w-16 h-16"
                        style={{
                          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                        }}
                      >
                        <div className="animate-spin-reverse w-full h-full bg-slate-800/80 backdrop-blur-md rounded-full border border-cyan-500/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-cyan-500/25">
                          <img
                            src={skill.src}
                            alt={skill.alt}
                            className="w-10 h-10 object-contain"
                            title={skill.name}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section with coding images */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
              {language === "es" ? "Mi Mundo de Desarrollo" : "My Development World"}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&h=600&fit=crop"
                  alt="Java Programming"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                  <p className="text-white font-medium">{language === "es" ? "Programación" : "Programming"}</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&h=600&fit=crop"
                  alt="MacBook Development"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                  <p className="text-white font-medium">{language === "es" ? "Desarrollo Web" : "Web Development"}</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&h=600&fit=crop"
                  alt="MacBook Pro Usage"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                  <p className="text-white font-medium">{language === "es" ? "Creatividad Digital" : "Digital Creativity"}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
