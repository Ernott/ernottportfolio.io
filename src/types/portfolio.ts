
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

export interface SoftSkill {
  icon: string;
  title: string;
  description: string;
}

export interface CVData {
  experience: string;
  education: string;
  skills: string;
  softSkills: string;
  methodology: string;
  methodologyText: string;
  softSkillsList: SoftSkill[];
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
  contact: string;
  viewProject: string;
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  projectsList: Project[];
  cvData: CVData;
}

export type Language = "es" | "en";
