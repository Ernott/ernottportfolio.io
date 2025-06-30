import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Globe, Calendar, MapPin } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [language, setLanguage] = useState('es');

  const translations = {
    es: {
      nav: {
        about: 'Acerca',
        experience: 'Experiencia',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto'
      },
      hero: {
        title: 'Desarrollador Junior',
        subtitle: 'Soy Javier A. Carbone, desarrollador junior con pasión por resolver problemas, automatizar procesos y transformar ideas en soluciones funcionales.',
        viewWork: 'Ver Mi Trabajo',
        getInTouch: 'Contactar'
      },
      about: {
        title: 'Acerca de Mí',
        p1: 'Soy Javier A. Carbone, desarrollador junior con pasión por resolver problemas, automatizar procesos y transformar ideas en soluciones funcionales.',
        p2: 'Mi enfoque actual está en el desarrollo backend y la optimización de flujos de trabajo, donde combino mis habilidades en Python, Git y entornos Linux/WSL para crear proyectos eficientes y bien documentados.',
        experience: 'Años de Experiencia',
        projects: 'Proyectos Completados'
      },
      experience: {
        title: 'Experiencia Profesional',
        jobs: [
          {
            company: 'GP Auto Logistics',
            position: 'Account Manager',
            location: 'Remoto',
            period: 'Ago 2024 – Feb 2025',
            description: 'Adquisición de clientes comerciales, gestión de plataforma de ventas y programación de servicios.'
          },
          {
            company: 'Polygel Beauty',
            position: 'Asistente Virtual',
            location: 'Caracas/Remoto',
            period: 'Oct 2023 – Ago 2024',
            description: 'Gestión de comunidades, manejo de scripts de ventas y seguimiento de analíticas.'
          },
          {
            company: 'EcoClic Venezuela',
            position: 'Account Manager',
            location: 'Remoto',
            period: 'Feb 2023 – Sep 2023',
            description: 'Participación comunitaria, creación de contenido, gestión de scripts de ventas y logística para el crecimiento de la comunidad.'
          }
        ]
      },
      skills: {
        title: 'Habilidades y Tecnologías',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Herramientas'
      },
      projects: {
        title: 'Proyectos Destacados',
        ernott: {
          title: 'Framework Ernott',
          description: 'Un framework de desarrollo moderno con componentes UI inspirados en neón',
          status: 'Destacado'
        },
        ecommerce: {
          title: 'E-commerce Full-Stack',
          description: 'Solución completa de e-commerce con integración de pagos',
          status: 'En Vivo'
        },
        aiChat: {
          title: 'Aplicación de Chat con IA',
          description: 'App de chat en tiempo real con respuestas potenciadas por IA',
          status: 'En Progreso'
        }
      },
      contact: {
        title: 'Trabajemos Juntos',
        subtitle: '¿Listo para dar vida a tus ideas? Siempre estoy emocionado de trabajar en nuevos proyectos y colaborar con personas increíbles.',
        sendMessage: 'Enviar Mensaje',
        downloadCV: 'Descargar CV'
      },
      footer: 'Creado con pasión y tecnologías web modernas.'
    },
    en: {
      nav: {
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        title: 'Junior Developer',
        subtitle: "I'm Javier A. Carbone, a junior developer with a passion for solving problems, automating processes, and transforming ideas into functional solutions.",
        viewWork: 'View My Work',
        getInTouch: 'Get In Touch'
      },
      about: {
        title: 'About Me',
        p1: "I'm Javier A. Carbone, a junior developer with a passion for solving problems, automating processes, and transforming ideas into functional solutions.",
        p2: 'My current focus is on backend development and workflow optimization, where I combine my skills in Python, Git, and Linux/WSL environments to create efficient and well-documented projects.',
        experience: 'Years Experience',
        projects: 'Projects Completed'
      },
      experience: {
        title: 'Professional Experience',
        jobs: [
          {
            company: 'GP Auto Logistics',
            position: 'Account Manager',
            location: 'Remote',
            period: 'Aug 2024 – Feb 2025',
            description: 'Commercial client acquisition, sales platform management, and service scheduling.'
          },
          {
            company: 'Polygel Beauty',
            position: 'Virtual Assistant',
            location: 'Caracas/Remote',
            period: 'Oct 2023 – Aug 2024',
            description: 'Community management, sales script management, and analytics tracking.'
          },
          {
            company: 'EcoClic Venezuela',
            position: 'Account Manager',
            location: 'Remote',
            period: 'Feb 2023 – Sep 2023',
            description: 'Community engagement, content creation, sales script management, and logistics for community growth.'
          }
        ]
      },
      skills: {
        title: 'Skills & Technologies',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools'
      },
      projects: {
        title: 'Featured Projects',
        ernott: {
          title: 'Ernott Framework',
          description: 'A modern development framework with neon-inspired UI components',
          status: 'Featured'
        },
        ecommerce: {
          title: 'Full-Stack E-commerce',
          description: 'Complete e-commerce solution with payment integration',
          status: 'Live'
        },
        aiChat: {
          title: 'AI Chat Application',
          description: 'Real-time chat app with AI-powered responses',
          status: 'In Progress'
        }
      },
      contact: {
        title: "Let's Work Together",
        subtitle: "Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.",
        sendMessage: 'Send Message',
        downloadCV: 'Download CV'
      },
      footer: 'Crafted with passion and modern web technologies.'
    }
  };

  const t = translations[language as keyof typeof translations];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 
    'Java', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
  ];

  const projects = [
    {
      title: t.projects.ernott.title,
      description: t.projects.ernott.description,
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      status: t.projects.ernott.status
    },
    {
      title: t.projects.ecommerce.title,
      description: t.projects.ecommerce.description,
      tech: ['Node.js', 'MongoDB', 'Stripe API'],
      status: t.projects.ecommerce.status
    },
    {
      title: t.projects.aiChat.title,
      description: t.projects.aiChat.description,
      tech: ['Python', 'WebSocket', 'OpenAI'],
      status: t.projects.aiChat.status
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Javier A. Carbone
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {['about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors hover:text-cyan-400 ${
                      activeSection === section ? 'text-cyan-400' : 'text-white'
                    }`}
                  >
                    {t.nav[section as keyof typeof t.nav]}
                  </button>
                ))}
              </div>
              
              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                    <Globe className="h-4 w-4 mr-2" />
                    {language.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 border-cyan-500/30">
                  <DropdownMenuItem 
                    onClick={() => setLanguage('es')}
                    className="text-white hover:bg-cyan-500/20 cursor-pointer"
                  >
                    🇪🇸 Español
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setLanguage('en')}
                    className="text-white hover:bg-cyan-500/20 cursor-pointer"
                  >
                    🇺🇸 English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1">
              <img
                src="/lovable-uploads/8f704cb1-f853-473a-9844-60602040b3fc.png"
                alt="Professional Portrait"
                className="w-full h-full rounded-full object-cover bg-slate-900"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-slate-900 font-bold text-lg">J</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
            >
              {t.hero.viewWork}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-lg"
            >
              {t.hero.getInTouch}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t.about.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img
                  src="/lovable-uploads/28e9cd9b-3ab8-4812-acb9-a07b5761a3f5.png"
                  alt="Developer Portrait"
                  className="rounded-lg w-full max-w-md mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.about.p1}
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.about.p2}
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">1+</div>
                  <div className="text-gray-400">{t.about.experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">10+</div>
                  <div className="text-gray-400">{t.about.projects}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t.experience.title}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {t.experience.jobs.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index !== t.experience.jobs.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
                )}
                
                <div className="flex items-start space-x-8 mb-12">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Job content */}
                  <Card className="flex-1 bg-slate-800/80 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <CardTitle className="text-cyan-400 text-xl mb-1">{job.company}</CardTitle>
                          <CardDescription className="text-purple-300 text-lg font-medium">
                            {job.position}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end mt-2 md:mt-0">
                          <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white mb-2">
                            {job.period}
                          </Badge>
                          <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed">{job.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/80 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t.skills.frontend}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-400">{t.skills.backend}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Node.js', 'Flask', 'FastAPI'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-pink-500/30 hover:border-pink-500/60 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-pink-400">{t.skills.tools}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Linux/WSL', 'Docker', 'VS Code'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-pink-500/20 text-pink-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/80 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-500/50 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg">
              {t.contact.sendMessage}
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-lg">
              {t.contact.downloadCV}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-cyan-500/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Javier A. Carbone. {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
