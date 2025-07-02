
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink, Download, Mail, Phone, MapPin, Calendar } from "lucide-react";

const Index = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const content = {
    es: {
      name: "Javier A. Carbone",
      title: "Desarrollador Full Stack",
      about: "Desarrollador apasionado por crear soluciones web innovadoras con experiencia en tecnologías modernas.",
      projects: "Proyectos",
      cv: "Currículum Vitae",
      contact: "Contacto",
      downloadCV: "Descargar CV",
      viewProject: "Ver Proyecto",
      projectsList: [
        {
          title: "Portfolio Personal",
          description: "Mi página portfolio personal desarrollada con React, TypeScript y Tailwind CSS. Incluye diseño responsivo y soporte multiidioma.",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
          link: "#",
          isCurrentPage: true
        },
        {
          title: "Curso de Barista",
          description: "Plataforma educativa para cursos de barista profesional. Incluye sistema de gestión de estudiantes y contenido multimedia.",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          link: "#",
          isCurrentPage: false
        }
      ],
      cvData: {
        experience: "Experiencia",
        education: "Educación",
        skills: "Habilidades",
        experienceList: [
          {
            position: "Desarrollador Full Stack",
            company: "Freelance",
            period: "2023 - Presente",
            description: "Desarrollo de aplicaciones web completas usando React, Node.js y bases de datos modernas."
          }
        ],
        educationList: [
          {
            degree: "Ingeniería en Sistemas",
            institution: "Universidad Tecnológica",
            period: "2020 - 2024"
          }
        ],
        skillsList: [
          "JavaScript/TypeScript", "React", "Node.js", "MongoDB", 
          "Express", "Tailwind CSS", "Git", "Docker"
        ]
      }
    },
    en: {
      name: "Javier A. Carbone",
      title: "Full Stack Developer",
      about: "Passionate developer focused on creating innovative web solutions with experience in modern technologies.",
      projects: "Projects",
      cv: "Resume",
      contact: "Contact",
      downloadCV: "Download CV",
      viewProject: "View Project",
      projectsList: [
        {
          title: "Personal Portfolio",
          description: "My personal portfolio website built with React, TypeScript and Tailwind CSS. Features responsive design and multi-language support.",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
          link: "#",
          isCurrentPage: true
        },
        {
          title: "Barista Course",
          description: "Educational platform for professional barista courses. Includes student management system and multimedia content.",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          link: "#",
          isCurrentPage: false
        }
      ],
      cvData: {
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        experienceList: [
          {
            position: "Full Stack Developer",
            company: "Freelance",
            period: "2023 - Present",
            description: "Development of complete web applications using React, Node.js and modern databases."
          }
        ],
        educationList: [
          {
            degree: "Systems Engineering",
            institution: "Technological University",
            period: "2020 - 2024"
          }
        ],
        skillsList: [
          "JavaScript/TypeScript", "React", "Node.js", "MongoDB", 
          "Express", "Tailwind CSS", "Git", "Docker"
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">{currentContent.name}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Avatar className="w-32 h-32 mx-auto mb-6">
            <AvatarImage src="/lovable-uploads/209a3321-2ce8-4c06-aa61-9bf3ccd64b8b.png" alt={currentContent.name} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentContent.name}</h1>
          <p className="text-xl text-gray-600 mb-2">{currentContent.title}</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{currentContent.about}</p>
        </div>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{currentContent.projects}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {currentContent.projectsList.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    {project.isCurrentPage && (
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {language === 'es' ? 'Página Actual' : 'Current Page'}
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {currentContent.viewProject}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CV Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{currentContent.cv}</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle>{currentContent.cvData.experience}</CardTitle>
              </CardHeader>
              <CardContent>
                {currentContent.cvData.experienceList.map((exp, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h4 className="font-semibold text-gray-900">{exp.position}</h4>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>{currentContent.cvData.education}</CardTitle>
              </CardHeader>
              <CardContent>
                {currentContent.cvData.educationList.map((edu, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>{currentContent.cvData.skills}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {currentContent.cvData.skillsList.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Download CV Button */}
          <div className="text-center mt-8">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Download className="w-4 h-4 mr-2" />
              {currentContent.downloadCV}
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{currentContent.contact}</h2>
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">javier@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">Ciudad, País</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
