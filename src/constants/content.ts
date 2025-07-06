
import { Content, Language, SkillImage } from "@/types/portfolio";

export const content: Record<Language, Content> = {
  es: {
    name: "Javier A. Carbone",
    title: "Desarrollador Full Stack",
    about:
      "Desarrollador apasionado por crear soluciones web innovadoras con experiencia en tecnologías modernas.",
    projects: "Proyectos",
    aboutMe: "Sobre Mí",
    aboutMeText:
      "Hola, soy Javier A. Carbone, un desarrollador junior versátil con pasión tanto por el código como por el arte del café. Me destaco por combinar lógica con creatividad, y por abordar cada desafío —ya sea en una terminal o detrás de una máquina de espresso— con determinación, curiosidad y un toque de diseño.",
    contact: "Contacto",
    viewProject: "Ver Proyecto",
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      about: "Sobre Mí",
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
      softSkills: "Habilidades Blandas",
      methodology: "Metodología",
      methodologyText: "Uso buenas prácticas de Scrum como definición de historias de usuario, seguimiento de tareas por sprints y revisión continua",
      softSkillsList: [
        {
          icon: "🎯",
          title: "Comunicación clara",
          description: "Trilingüe entre código, clientes y café ☕"
        },
        {
          icon: "🔁",
          title: "Pensamiento iterativo",
          description: "Me encanta refinar ideas hasta lograr una solución elegante"
        },
        {
          icon: "🤝",
          title: "Colaboración",
          description: "Disfruto trabajar en equipo bajo metodologías ágiles"
        },
        {
          icon: "🧩",
          title: "Resolución de problemas",
          description: "Desde bugs en despliegues hasta pedidos complejos de cappuccino"
        },
        {
          icon: "🧠",
          title: "Aprendizaje autodidacta",
          description: "Siempre estoy explorando una nueva herramienta, framework o tendencia de diseño"
        }
      ],
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
      "Hello, I'm Javier A. Carbone, a versatile junior developer with a passion for both code and the art of coffee. I stand out by combining logic with creativity, and by approaching every challenge —whether at a terminal or behind an espresso machine— with determination, curiosity, and a touch of design.",
    contact: "Contact",
    viewProject: "View Project",
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About Me",
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
      softSkills: "Soft Skills",
      methodology: "Methodology",
      methodologyText: "I use good Scrum practices such as user story definition, task tracking by sprints, and continuous review",
      softSkillsList: [
        {
          icon: "🎯",
          title: "Clear communication",
          description: "Trilingual between code, clients, and coffee ☕"
        },
        {
          icon: "🔁",
          title: "Iterative thinking",
          description: "I love refining ideas until achieving an elegant solution"
        },
        {
          icon: "🤝",
          title: "Collaboration",
          description: "I enjoy working in teams under agile methodologies"
        },
        {
          icon: "🧩",
          title: "Problem solving",
          description: "From deployment bugs to complex cappuccino orders"
        },
        {
          icon: "🧠",
          title: "Self-learning",
          description: "Always exploring a new tool, framework, or design trend"
        }
      ],
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

export const skillsImages: SkillImage[] = [
  { src: "/lovable-uploads/5ad46739-b24a-42b0-92a2-0bef2fdf0d2a.png", alt: "React", name: "React" },
  { src: "/lovable-uploads/36c100b2-275c-4db5-8e07-732b8e1a9b7f.png", alt: "Node.js", name: "Node.js" },
  { src: "/lovable-uploads/99af7eb2-5378-417b-9146-f599a1509a54.png", alt: "TypeScript", name: "TypeScript" },
  { src: "/lovable-uploads/63ec438c-3d65-48b7-9296-c2ff7b434f7e.png", alt: "CSS3", name: "CSS3" },
  { src: "/lovable-uploads/6c767bfb-4071-4da4-a356-4bb0a35e9075.png", alt: "HTML5", name: "HTML5" },
  { src: "/lovable-uploads/3e6b98d8-b993-49a1-b468-c6e80b6247be.png", alt: "JavaScript", name: "JavaScript" },
];
