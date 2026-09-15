export interface Project {
  id: string;
  number: string;
  year: string;
  title: string;
  category: string;
  subtitle?: string;
  role: string;
  approach?: string;
  technologies?: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: string;
  caseStudy?: {
    problem: string;
    approach: string;
    result: string;
    technicalNotes: string;
  };
  mockupType: 'real-estate' | 'ramadan-books' | 'event-master' | 'school-erp';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isSecondary?: boolean;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  details?: string;
  isPrimary?: boolean;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  year: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}
