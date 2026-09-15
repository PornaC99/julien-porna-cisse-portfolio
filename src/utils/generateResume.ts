import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATION, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';

export const downloadResumePdf = () => {
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
  const primaryColor: [number, number, number] = [15, 23, 42]; // #0F172A slate-900
  const secondaryColor: [number, number, number] = [16, 185, 129]; // #10B981 emerald
  const darkGray: [number, number, number] = [51, 65, 85]; // slate-700
  const lightGray: [number, number, number] = [100, 116, 139]; // slate-500
  const ruleColor: [number, number, number] = [226, 232, 240]; // slate-200

  // Helper: Section title with rule
  const drawSectionTitle = (title: string) => {
    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text(title.toUpperCase(), margin, y);
    y += 2;
    doc.setDrawColor(ruleColor[0], ruleColor[1], ruleColor[2]);
    doc.setLineWidth(0.4);
    doc.line(margin, y, margin + contentWidth, y);
    y += 4;
  };

  // Check page overflow
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(PERSONAL_INFO.name.toUpperCase(), margin, y);
  y += 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('WEB DEVELOPER  |  FULL-STACK & AI-ASSISTED DEVELOPMENT  |  BCA (2024–2027)', margin, y);
  y += 4.5;

  // Contact line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  const contactText = `Email: ${PERSONAL_INFO.email}   |   Location: ${PERSONAL_INFO.location}`;
  doc.text(contactText, margin, y);
  y += 4;

  const linksText = `GitHub: github.com/PornaC99   |   LinkedIn: linkedin.com/in/cisse-julien-porna-   |   GPA: 8.48 / 10`;
  doc.text(linksText, margin, y);
  y += 4;

  // Horizontal Header Divider
  doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setLineWidth(0.7);
  doc.line(margin, y, margin + contentWidth, y);
  y += 2;

  // --- PROFESSIONAL SUMMARY ---
  drawSectionTitle('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  const summaryText =
    'Passionate Web Developer and Bachelor of Computer Applications (BCA) student with a strong 8.48/10 GPA and practical experience instructing 30+ students in modern web technologies (HTML, CSS, JavaScript). Proven track record delivering production business applications, real-estate web portals, and custom productivity tools. Combines disciplined software engineering fundamentals with rapid AI-assisted prototyping (Vibe Coding) to build accessible, performant, and reliable web applications.';
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 3.8 + 1;

  // --- EDUCATION ---
  drawSectionTitle('Education');
  EDUCATION.forEach((edu) => {
    checkPageBreak(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text(edu.period, margin + contentWidth, y, { align: 'right' });
    y += 3.8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(`${edu.institution}  —  ${edu.location}`, margin, y);
    if (edu.gpa) {
      doc.setFont('helvetica', 'bold');
      doc.text(`   [GPA: ${edu.gpa}]`, margin + 80, y);
    }
    y += 4.5;
  });

  // --- TECHNICAL SKILLS ---
  drawSectionTitle('Technical Skills');
  SKILL_CATEGORIES.forEach((cat) => {
    checkPageBreak(7);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    const catLabel = `${cat.category}: `;
    doc.text(catLabel, margin, y);

    const skillsString = cat.skills.map((s) => s.name).join(', ');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    const labelWidth = doc.getTextWidth(catLabel);
    const splitSkills = doc.splitTextToSize(skillsString, contentWidth - labelWidth);
    doc.text(splitSkills, margin + labelWidth, y);
    y += splitSkills.length * 3.6 + 0.8;
  });

  // --- PROFESSIONAL EXPERIENCE ---
  drawSectionTitle('Professional Experience');
  EXPERIENCES.forEach((exp) => {
    checkPageBreak(24);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`${exp.role}  —  ${exp.company}`, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text(exp.period, margin + contentWidth, y, { align: 'right' });
    y += 3.8;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text(`${exp.location}`, margin, y);
    y += 3.8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    exp.responsibilities.forEach((resp) => {
      checkPageBreak(6);
      const bulletText = `•  ${resp}`;
      const splitBullet = doc.splitTextToSize(bulletText, contentWidth - 4);
      doc.text(splitBullet, margin + 2, y);
      y += splitBullet.length * 3.4 + 0.8;
    });
    y += 1.5;
  });

  // --- FEATURED PROJECTS ---
  drawSectionTitle('Featured Projects');
  PROJECTS.slice(0, 3).forEach((proj) => {
    checkPageBreak(16);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`${proj.title}  (${proj.year})`, margin, y);

    if (proj.liveUrl) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
      doc.text(proj.liveUrl, margin + contentWidth, y, { align: 'right' });
    }
    y += 3.8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    const splitDesc = doc.splitTextToSize(proj.description, contentWidth);
    doc.text(splitDesc, margin, y);
    y += splitDesc.length * 3.4 + 1.2;

    if (proj.technologies) {
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7.5);
      doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
      doc.text(`Technologies: ${proj.technologies.join(', ')}`, margin, y);
      y += 4;
    }
  });

  // --- CERTIFICATIONS & LANGUAGES ---
  checkPageBreak(18);
  drawSectionTitle('Certifications & Languages');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);

  const certString = CERTIFICATIONS.map((c) => `${c.name} (${c.issuer})`).join('  |  ');
  const splitCerts = doc.splitTextToSize(`Certifications: ${certString}`, contentWidth);
  doc.text(splitCerts, margin, y);
  y += splitCerts.length * 3.5 + 1.5;

  doc.text('Languages: French (Native)  |  English (Professional Working Proficiency)', margin, y);

  // Save the document
  doc.save('Julien_Porna_Cisse_Resume.pdf');
};
