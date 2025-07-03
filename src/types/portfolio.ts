
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  isCurrentPage: boolean;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillImage {
  src: string;
  alt: string;
  name: string;
}

export interface CVData {
  experience: string;
  education: string;
  skills: string;
  experienceList: Experience[];
  educationList: Education[];
  skillsList: string[];
}

export interface Content {
  name: string;
  title: string;
  about: string;
  projects: string;
  aboutMe: string;
  aboutMeText: string;
  cv: string;
  contact: string;
  downloadCV: string;
  viewProject: string;
  nav: {
    home: string;
    projects: string;
    about: string;
    cv: string;
    contact: string;
  };
  projectsList: Project[];
  cvData: CVData;
}

export type Language = "es" | "en";
