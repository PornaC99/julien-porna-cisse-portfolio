import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4',
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const margin = 14;
const contentWidth = pageWidth - margin * 2;
let y = margin;

// Colors
const primaryColor = [15, 23, 42]; // slate-900
const accentColor = [16, 185, 129]; // #10B981 emerald
const darkGray = [51, 65, 85]; // slate-700
const lightGray = [100, 116, 139]; // slate-500
const ruleColor = [203, 213, 225]; // slate-300

function drawSectionTitle(title) {
  y += 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...accentColor);
  doc.text(title.toUpperCase(), margin, y);
  y += 2;
  doc.setDrawColor(...ruleColor);
  doc.setLineWidth(0.4);
  doc.line(margin, y, margin + contentWidth, y);
  y += 4;
}

function checkPageBreak(neededHeight) {
  if (y + neededHeight > pageHeight - margin) {
    doc.addPage();
    y = margin;
  }
}

// HEADER
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(...primaryColor);
doc.text('JULIEN PORNA CISSÉ', margin, y);
y += 6;

doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(...accentColor);
doc.text('WEB DEVELOPER  |  FULL-STACK & AI-ASSISTED DEVELOPMENT  |  BCA (2024–2027)', margin, y);
y += 4.5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(...darkGray);
doc.text('Email: cissejulien7@gmail.com   |   Location: Greater Noida, Uttar Pradesh, India', margin, y);
y += 4;

doc.text('GitHub: github.com/PornaC99   |   LinkedIn: linkedin.com/in/cisse-julien-porna-   |   GPA: 8.48 / 10', margin, y);
y += 4;

doc.setDrawColor(...primaryColor);
doc.setLineWidth(0.7);
doc.line(margin, y, margin + contentWidth, y);
y += 2;

// SUMMARY
drawSectionTitle('Professional Summary');
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(...darkGray);
const summaryText =
  'Bachelor of Computer Applications (BCA) undergraduate at Noida International University with an 8.48/10 GPA and practical experience as a Web Development Trainer instructing 30+ students in HTML, CSS and JavaScript. Experienced in delivering responsive business websites, real-estate web portals, and custom productivity tools. Combines disciplined software engineering fundamentals with rapid AI-assisted workflows (Vibe Coding) to build clean, maintainable, and reliable digital products.';
const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
doc.text(splitSummary, margin, y);
y += splitSummary.length * 3.8 + 1;

// EDUCATION
drawSectionTitle('Education');
const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    inst: 'Noida International University — Greater Noida, India',
    period: '2024 – 2027',
    gpa: 'GPA: 8.48 / 10',
    note: 'Core coursework: Data Structures, Web Development, Relational Databases, Computer Architecture.'
  },
  {
    degree: 'Licence 2 (DEUG) in Management Sciences',
    inst: 'Université des Sciences Sociales et de Gestion de Bamako (USSGB) — Bamako, Mali',
    period: '2021 – 2023',
    gpa: '',
    note: 'Focus on organizational management, data administration, and structured workflows.'
  }
];

education.forEach((edu) => {
  checkPageBreak(14);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...primaryColor);
  doc.text(edu.degree, margin, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...accentColor);
  doc.text(edu.period, margin + contentWidth, y, { align: 'right' });
  y += 3.8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...darkGray);
  doc.text(edu.inst + (edu.gpa ? `   [${edu.gpa}]` : ''), margin, y);
  y += 3.8;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(...lightGray);
  doc.text(edu.note, margin, y);
  y += 4.5;
});

// SKILLS
drawSectionTitle('Technical Stack');
const skillCategories = [
  { cat: 'Frontend', skills: 'HTML5, CSS3, JavaScript (ES6+), Responsive Layouts, Flexbox/Grid, Tailwind CSS' },
  { cat: 'Programming & Logic', skills: 'JavaScript, Python, C, Object-Oriented Programming, Data Structures' },
  { cat: 'Databases & Tools', skills: 'SQL, MySQL Fundamentals, Git, GitHub, VS Code, Linux Shell Basics' },
  { cat: 'AI-Assisted Workflow', skills: 'Prompt Engineering, Vibe Coding, Rapid Prototyping, Iterative Refinement, Code Inspection' },
  { cat: 'Spoken Languages', skills: 'French (Native), English (Professional Working Proficiency)' }
];

skillCategories.forEach((cat) => {
  checkPageBreak(7);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...primaryColor);
  const label = `${cat.cat}: `;
  doc.text(label, margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...darkGray);
  const labelWidth = doc.getTextWidth(label);
  const split = doc.splitTextToSize(cat.skills, contentWidth - labelWidth);
  doc.text(split, margin + labelWidth, y);
  y += split.length * 3.6 + 0.8;
});

// EXPERIENCE
drawSectionTitle('Work Experience');
const experience = [
  {
    role: 'IT Technician & Web Development Trainer',
    comp: 'Solutions2is & EPIM',
    period: '2023 – 2024',
    loc: 'Bamako, Mali',
    points: [
      'Trained and mentored 30+ students in foundational web development: HTML, CSS, and introductory JavaScript.',
      'Guided students through hands-on coding exercises, debugging, and building responsive personal web pages.',
      'Provided hardware, software, and local network technical troubleshooting across computer lab facilities.'
    ]
  },
  {
    role: 'Data Entry Operator',
    comp: 'Cabinet SPIRIT ETUDES',
    period: '2022 – 2023',
    loc: 'Bamako, Mali',
    points: [
      'Processed, cleaned, and verified large survey datasets with strict attention to accuracy and data integrity.'
    ]
  }
];

experience.forEach((exp) => {
  checkPageBreak(22);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...primaryColor);
  doc.text(`${exp.role}  —  ${exp.comp}`, margin, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...accentColor);
  doc.text(exp.period, margin + contentWidth, y, { align: 'right' });
  y += 3.8;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(...lightGray);
  doc.text(exp.loc, margin, y);
  y += 3.8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...darkGray);
  exp.points.forEach((pt) => {
    checkPageBreak(6);
    const bullet = `•  ${pt}`;
    const split = doc.splitTextToSize(bullet, contentWidth - 4);
    doc.text(split, margin + 2, y);
    y += split.length * 3.4 + 0.8;
  });
  y += 1.5;
});

// PROJECTS
drawSectionTitle('Selected Web Projects');
const projects = [
  {
    title: 'Groupe Nkasso — Transac Immo (2026)',
    url: 'https://groupe-nkasso-transac-immo.netlify.app',
    desc: 'Production real-estate commercial website built for Groupe Nkasso. Features responsive property layouts, clear company service taxonomy, and structured inquiry workflows. Built via AI-assisted Vibe Coding and iterative refinement.'
  },
  {
    title: 'RamadanBooks V2 (2026)',
    url: 'https://ramadanbooksv2.netlify.app',
    desc: 'Spiritual routine and daily habit tracking application. Enables structured daily checklists, Qur\'an progress tracking, and persistent reflection notes with clean mobile-first UI.'
  },
  {
    title: 'Complexe Scolaire Les FLOCONS ERP (In Development)',
    url: '',
    desc: 'Academic and administrative management platform for a private school. Architected with role-based access control (Admins, Teachers, Parents), student directories, and fee tracking.'
  },
  {
    title: 'Event Master (2023)',
    url: '',
    desc: 'Campus event discovery platform built collaboratively during university coursework. Led homepage interface design, event category filtering, and responsive registration UI.'
  }
];

projects.forEach((proj) => {
  checkPageBreak(15);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...primaryColor);
  doc.text(proj.title, margin, y);

  if (proj.url) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...accentColor);
    doc.text(proj.url, margin + contentWidth, y, { align: 'right' });
  }
  y += 3.6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...darkGray);
  const split = doc.splitTextToSize(proj.desc, contentWidth);
  doc.text(split, margin, y);
  y += split.length * 3.4 + 1.5;
});

// CERTIFICATIONS
checkPageBreak(14);
drawSectionTitle('Certifications');
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...darkGray);
const certs = [
  '•  Computer Hardware Basics — Cisco Networking Academy (2025)',
  '•  Internet Governance & Cybersecurity — AMRTP Mali (2024)',
  '•  Digital Skills & ICT Tools — AGETIC Mali (2023)'
];
certs.forEach((c) => {
  doc.text(c, margin + 2, y);
  y += 3.6;
});

// Write to public folder
const outputPath = path.join(__dirname, '..', 'public', 'Julien_Porna_Cisse_Resume.pdf');
fs.writeFileSync(outputPath, Buffer.from(doc.output('arraybuffer')));
console.log('Resume PDF generated at:', outputPath);
