import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  ExternalLink,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";

const Index = () => {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const content = {
    es: {
      name: "Javier A. Carbone",
      title: "Desarrollador Full Stack",
      about:
        "Desarrollador apasionado por crear soluciones web innovadoras con experiencia en tecnologías modernas.",
      projects: "Proyectos",
      aboutMe: "Sobre Mí",
      aboutMeText:
        "Soy Javier A. Carbone, desarrollador con pasión por resolver problemas, automatizar procesos y transformar ideas en soluciones funcionales. A pesar de no tener experiencia mi enfoque actual está en el desarrollo backend y la optimización de flujos de trabajo, donde combino mis habilidades en Python, Git y entornos Linux/WSL para crear proyectos eficientes y bien documentados.",
      cv: "Currículum Vitae",
      contact: "Contacto",
      downloadCV: "Descargar CV",
      viewProject: "Ver Proyecto",
      nav: {
        home: "Inicio",
        projects: "Proyectos",
        about: "Sobre Mí",
        cv: "Currículum Vitae",
        contact: "Contacto",
      },
      projectsList: [
        {
          title: "Portfolio Personal",
          description:
            "Mi página portfolio personal desarrollada con React, TypeScript y Tailwind CSS. Incluye diseño responsivo y soporte multiidioma.",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
          link: "#",
          isCurrentPage: true,
        },
        {
          title: "Curso de Barista",
          description:
            "Plataforma educativa para cursos de barista profesional. Incluye sistema de gestión de estudiantes y contenido multimedia.",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          link: "https://ernott.github.io/ernott-barista/",
          isCurrentPage: false,
        },
      ],
      cvData: {
        experience: "Experiencia",
        education: "Educación",
        skills: "Habilidades",
        experienceList: [
          {
            position: "Appointment Setter",
            company: "Agency Setters, Remoto",
            period: "Ago 2024 – Feb 2025",
            description:
              "Llamadas en frío, gestión de CRM y programación de servicios.",
          },
          {
            position: "Account Manager",
            company: "GP Auto Logistics, Remoto",
            period: "Ago 2024 – Feb 2025",
            description:
              "Adquisición de clientes comerciales, gestión de plataforma de ventas y programación de servicios.",
          },
          {
            position: "Asistente Virtual",
            company: "Polygel Beauty, Caracas/Remote",
            period: "Oct 2023 – Ago 2024",
            description:
              "Community management, gestión de guiones de ventas y seguimiento de analíticas.",
          },
          {
            position: "Account Manager",
            company: "EcoClic Venezuela, Remote",
            period: "Feb 2023 – Sep 2023",
            description:
              "Comunidad, creación de contenido, gestión de guiones de ventas y logística para el crecimiento de la comunidad.",
          },
        ],
        educationList: [
          {
            degree: "Master Full Stack Developer",
            institution: "Conquer Blocks",
            period: "2024 - 2025",
          },
          {
            degree: "Ingeniería en Sistemas",
            institution: "Universidad Metropolitana",
            period: "2017 - 2022",
          },
          {
            degree: "Bachillerato en Ciencias",
            institution: "Unidad Educativa Colegio Los Riscos",
            period: "2011 - 2016",
          },
        ],
        skillsList: [
          "JavaScript/TypeScript",
          "React",
          "Node.js",
          "MongoDB",
          "Express",
          "Tailwind CSS",
          "Git",
          "Docker",
        ],
      },
    },
    en: {
      name: "Javier A. Carbone",
      title: "Full Stack Developer",
      about:
        "Passionate developer focused on creating innovative web solutions with experience in modern technologies.",
      projects: "Projects",
      aboutMe: "About Me",
      aboutMeText:
        "I'm Javier A. Carbone, a developer with a passion for solving problems, automating processes and transforming ideas into functional solutions. Despite not having experience, my current focus is on backend development and workflow optimization, where I combine my skills in Python, Git and Linux/WSL environments to create efficient and well-documented projects.",
      cv: "Resume",
      contact: "Contact",
      downloadCV: "Download CV",
      viewProject: "View Project",
      nav: {
        home: "Home",
        projects: "Projects",
        about: "About Me",
        cv: "Resume",
        contact: "Contact",
      },
      projectsList: [
        {
          title: "Personal Portfolio",
          description:
            "My personal portfolio website built with React, TypeScript and Tailwind CSS. Features responsive design and multi-language support.",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
          link: "#",
          isCurrentPage: true,
        },
        {
          title: "Barista Course",
          description:
            "Educational platform for professional barista courses. Includes student management system and multimedia content.",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          link: "https://ernott.github.io/ernott-barista/",
          isCurrentPage: false,
        },
      ],
      cvData: {
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        experienceList: [
          {
            position: "Appointment Setter",
            company: "Agency Setters, Remote",
            period: "Aug 2024 – Feb 2025",
            description: "Cold Calls, CRM and service scheduling.",
          },
          {
            position: "Account Manager",
            company: "GP Auto Logistics, Remote",
            period: "Aug 2024 – Feb 2025",
            description:
              "Commercial client acquisition, sales platform management, and service scheduling.",
          },
          {
            position: "Virtual Assistant",
            company: "Polygel Beauty, Caracas/Remote",
            period: "Oct 2023 – Aug 2024",
            description:
              "Community management, sales script management, and analytics tracking.",
          },
          {
            position: "Account Manager",
            company: "EcoClic Venezuela, Remote",
            period: "Feb 2023 – Sep 2023",
            description:
              "Community engagement, content creation, sales script management, and logistics for community growth.",
          },
        ],
        educationList: [
          {
            degree: "Master Full Stack Developer",
            institution: "Conquer Blocks",
            period: "2024 - 2025",
          },
          {
            degree: "Bachelor's in Systems Engineering",
            institution: "Metropolitan University",
            period: "2017 - 2022",
          },
          {
            degree: "High School Diploma in Sciences",
            institution: "Unidad Educativa Colegio Los Riscos",
            period: "2011 - 2016",
          },
        ],
        skillsList: [
          "JavaScript/TypeScript",
          "React",
          "Node.js",
          "MongoDB",
          "Express",
          "Tailwind CSS",
          "Git",
          "Docker",
        ],
      },
    },
  };

  const currentContent = content[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section
          id="home"
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has("home")
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {currentContent.name}
          </h1>
          <p className="text-xl text-cyan-300 mb-2">{currentContent.title}</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {currentContent.about}
          </p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`mb-16 transition-all duration-1000 delay-200 ${
            visibleSections.has("projects")
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

        {/* About Me Section */}
        <section
          id="about"
          className={`mb-16 transition-all duration-1000 delay-400 ${
            visibleSections.has("about")
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
        </section>

        {/* CV Section */}
        <section
          id="cv"
          className={`mb-16 transition-all duration-1000 delay-600 ${
            visibleSections.has("cv")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
            {currentContent.cv}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Experience */}
            <Card className="bg-slate-800/50 backdrop-blur-md border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-cyan-300">
                  {currentContent.cvData.experience}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {currentContent.cvData.experienceList.map((exp, index) => (
                  <div
                    key={index}
                    className="mb-4 last:mb-0 p-4 bg-slate-700/30 rounded-lg border border-purple-500/20"
                  >
                    <h4 className="font-semibold text-purple-300">
                      {exp.position}
                    </h4>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                    <div className="flex items-center text-gray-400 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-slate-800/50 backdrop-blur-md border-cyan-500/30">
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
          </div>

          {/* Skills */}
          <Card className="mt-8 bg-slate-800/50 backdrop-blur-md border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-300">
                {currentContent.cvData.skills}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {currentContent.cvData.skillsList.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-lg font-medium border border-purple-500/30"
                  >
                    {skill}
                  </span>
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

        {/* Contact Section */}
        <section
          id="contact"
          className={`transition-all duration-1000 delay-800 ${
            visibleSections.has("contact")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
            {currentContent.contact}
          </h2>
          <Card className="max-w-md mx-auto bg-slate-800/50 backdrop-blur-md border-cyan-500/30">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">
                    javieralejandrocarbone28@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">+58 (412) 899-3761</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">Caracas, Venezuela</span>
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
