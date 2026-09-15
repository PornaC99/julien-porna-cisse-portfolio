import { Project, ExperienceItem, SkillCategory, EducationItem, CertificationItem, LeadershipItem, WorkflowStep } from '../types';

export const PERSONAL_INFO = {
  name: "Julien Porna Cissé",
  title: "WEB DEVELOPER",
  secondaryPositioning: "FULL-STACK DEVELOPMENT · AI-ASSISTED DEVELOPMENT · VIBE CODING",
  location: "Greater Noida, Uttar Pradesh, India",
  email: "cissejulien7@gmail.com",
  github: "https://github.com/PornaC99",
  linkedin: "https://www.linkedin.com/in/cisse-julien-porna-/",
  status: "AVAILABLE FOR WEB DEVELOPMENT INTERNSHIP",
  studies: "BCA · 2027",
  university: "Noida International University",
  gpa: "8.48 / 10",
  experienceYears: "2023–2024",
  resumeUrl: "/Julien_Porna_Cisse_Resume.pdf",
};

export const CURRENTLY_ITEMS = [
  {
    label: "BUILDING",
    value: "School Management ERP",
    detail: "Centralized academic & administrative system",
  },
  {
    label: "LEARNING",
    value: "Full-Stack Development",
    detail: "Relational databases & server architectures",
  },
  {
    label: "EXPLORING",
    value: "AI-Assisted Development",
    detail: "Vibe coding, rapid prototyping & iteration",
  },
  {
    label: "LOOKING FOR",
    value: "Web Development Internship",
    detail: "Contributing to real-world production teams",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "groupe-nkasso",
    number: "01",
    year: "2026",
    title: "Groupe Nkasso — Transac Immo",
    category: "Business Website / Real Estate",
    role: "Web Developer",
    approach: "Vibe Coding / AI-Assisted Development",
    description: "A professional real-estate business website developed for Groupe Nkasso Transac Immo to establish a credible digital presence and clearly present the company's services. The website was developed through an iterative workflow involving design exploration, implementation, visual refinement and interface improvements.",
    liveUrl: "https://groupe-nkasso-transac-immo.netlify.app/",
    mockupType: "real-estate",
    caseStudy: {
      problem: "Establishing a modern, credible digital presence for a growing real estate brokerage, requiring structured presentation of commercial and residential property services without complex legacy overhead.",
      approach: "Adopted an AI-assisted Vibe Coding workflow for rapid layout prototyping. Iteratively refined the UI hierarchy, typographic pacing, and service taxonomy based on real-world business requirements.",
      result: "A fast, accessible, responsive business website with intuitive navigation, high-contrast typography, and clear client inquiry pathways delivered on Netlify.",
      technicalNotes: "Optimized for fast rendering and mobile responsiveness across diverse network conditions. Built with clean semantic structure and modular layout styling.",
    },
  },
  {
    id: "ramadan-books-v2",
    number: "02",
    year: "2026",
    title: "RamadanBooks V2",
    category: "Web Application / Personal Productivity",
    role: "Developer",
    approach: "AI-Assisted Development / Vibe Coding",
    description: "A personal web application designed to help users organize and follow Ramadan-related activities and personal spiritual routines. This project represents the evolution of my earlier Ramadan Notebook project.",
    liveUrl: "https://agent-6aa8ed7c3e90a4249977850997d9--ramadanbooksv2.netlify.app/",
    mockupType: "ramadan-books",
    caseStudy: {
      problem: "Personal habit tracking and spiritual daily organization during Ramadan often rely on fragmented physical notebooks or generic generic habit trackers not built for specific daily routines.",
      approach: "Redesigned the original Ramadan Notebook concept into an interactive web app using prompt-driven prototyping, focusing on calm visual tone, daily reflection modules, and structured routines.",
      result: "A purposeful personal web companion that assists users in organizing daily goals, prayer tracking, reading progress, and reflections with zero clutter.",
      technicalNotes: "Client-side state management for personal tracking, lightweight responsive components, and an eye-friendly palette designed for daily use.",
    },
  },
  {
    id: "event-master",
    number: "03",
    year: "2023",
    title: "Event Master",
    category: "Web Application / Group Project",
    role: "Frontend Lead",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "A collaborative web project where I led the frontend development of the homepage and worked with a student team to build responsive interfaces.",
    mockupType: "event-master",
  },
  {
    id: "les-flocons-erp",
    number: "04",
    year: "2026",
    title: "Complexe Scolaire Les FLOCONS de Niamana",
    subtitle: "School Management ERP",
    category: "ERP / Full-Stack Web Application",
    role: "Full-Stack Developer",
    status: "CURRENTLY IN DEVELOPMENT",
    description: "A school management system designed to centralize administrative, academic and financial workflows in one platform.",
    technologies: ["Students", "Classes", "Parents", "Payments", "Grades", "Attendance", "Reporting", "Role-Based Access"],
    mockupType: "school-erp",
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: "01",
    title: "UNDERSTAND",
    description: "Understand the problem, users and requirements.",
    details: ["Identify core user pain points", "Define essential project scope", "Establish constraints & functional goals"],
  },
  {
    number: "02",
    title: "DESIGN",
    description: "Structure the interface and user experience.",
    details: ["Information hierarchy & layout flow", "Typographic rhythm and contrast", "Accessible interaction states"],
  },
  {
    number: "03",
    title: "BUILD",
    description: "Develop the product and its core functionality.",
    details: ["Clean, semantic frontend structure", "Modular component architecture", "State management & data flow"],
  },
  {
    number: "04",
    title: "ITERATE",
    description: "Test, debug and refine.",
    details: ["Multi-device responsiveness checks", "Performance & layout polish", "Debugging edge cases"],
  },
  {
    number: "05",
    title: "SHIP",
    description: "Deploy and continue improving.",
    details: ["Production deployment on cloud hosts", "Real-world user feedback collection", "Iterative enhancements"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "solutions2is",
    company: "Solutions2is & EPIM",
    role: "IT Technician & Web Development Trainer",
    period: "2023–2024",
    location: "Bamako, Mali",
    responsibilities: [
      "Contributed to website and web-based application development.",
      "Worked with HTML, CSS and JavaScript.",
      "Trained more than 30 students in HTML, CSS and JavaScript fundamentals.",
      "Provided technical troubleshooting and system support.",
    ],
  },
  {
    id: "spirit-etudes",
    company: "SPIRIT ETUDES",
    role: "Survey Analyst",
    period: "2023",
    location: "Bamako, Mali",
    isSecondary: true,
    responsibilities: [
      "Field data collection and survey verification.",
      "Quantitative data analysis and structured data entry.",
      "Collaborated on comprehensive reporting and research workflows.",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "FRONTEND",
    skills: [
      { name: "HTML", description: "Semantic markup, accessibility, and modern document structure." },
      { name: "CSS", description: "Modern layout systems (Flexbox, Grid), custom properties, and responsive design." },
      { name: "JavaScript", description: "Interactive interfaces, DOM manipulation, and modern application logic." },
      { name: "Responsive Design", description: "Mobile-first layouts tailored for phones, tablets, and desktop displays." },
    ],
  },
  {
    category: "PROGRAMMING",
    skills: [
      { name: "Python", description: "Scripting, algorithmic logic, and computational problem solving." },
      { name: "C", description: "Structured programming, pointers, and memory fundamentals." },
      { name: "C++", description: "Object-oriented programming, classes, and data structures." },
    ],
  },
  {
    category: "DATABASE",
    skills: [
      { name: "MySQL", description: "Relational database schema design and SQL querying." },
      { name: "Database-driven Applications", description: "Connecting persistent storage with interactive user interfaces." },
    ],
  },
  {
    category: "TOOLS",
    skills: [
      { name: "Git", description: "Version control and collaborative branch management." },
      { name: "GitHub", description: "Repository hosting, documentation, and version tracking." },
      { name: "VS Code", description: "Primary IDE configuration, extensions, and workspace setup." },
      { name: "Netlify", description: "Continuous deployment and hosting for modern web applications." },
    ],
  },
  {
    category: "AI-ASSISTED DEVELOPMENT",
    skills: [
      { name: "Vibe Coding", description: "Rapid exploratory prototyping and continuous visual iteration." },
      { name: "AI-assisted coding", description: "Accelerating implementation and test cycles with modern LLMs." },
      { name: "Rapid prototyping", description: "Translating concepts into functional interfaces quickly." },
      { name: "Prompt-driven development", description: "Iterative feature specification and code generation." },
      { name: "AI-assisted debugging", description: "Diagnosing edge cases and analyzing runtime errors." },
    ],
  },
  {
    category: "DESIGN",
    skills: [
      { name: "Canva", description: "Interface mockups, layout compositions, and visual graphics." },
      { name: "Photoshop", description: "Image retouching, asset preparation, and visual optimization." },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Noida International University",
    location: "Greater Noida, India",
    period: "2024–2027",
    gpa: "8.48 / 10",
    details: "Expected graduation: 2027. Core focus on computer science, web programming, algorithms, database systems, and software engineering principles.",
    isPrimary: true,
  },
  {
    id: "management",
    degree: "Bachelor in Management",
    institution: "Faculty of Economics and Management Sciences",
    location: "Bamako, Mali",
    period: "2018–2022",
    details: "Studies in organizational management, economics, and business analysis.",
  },
  {
    id: "dut",
    degree: "University Diploma in Technology (DUT)",
    institution: "LUCAS",
    location: "Bamako, Mali",
    period: "2021–2022",
    details: "Practical technical curriculum and applied computing fundamentals.",
  },
  {
    id: "bac",
    degree: "Malian Baccalaureate — Economics",
    institution: "Askia Mohamed High School",
    location: "Bamako, Mali",
    period: "2016–2017",
    details: "Secondary education with economics and analytical specialization.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "C & C++ Programming Certificate", issuer: "Cisco" },
  { name: "Cybersecurity Awareness Certificate", issuer: "AMRTP", year: "2024" },
  { name: "Data Protection Training", issuer: "AGETIC", year: "2022" },
  { name: "Computer Training", issuer: "Expert-Lab, Bamako", year: "2020–2021" },
];

export const LEADERSHIP: LeadershipItem[] = [
  { role: "President", organization: "Student Union, LUCAS University", year: "2023" },
  { role: "Vice-President", organization: "Student Union, LUCAS University", year: "2022" },
  { role: "Organizer", organization: "Inter-University Cultural Event, MPUP, Mali", year: "2022" },
];
