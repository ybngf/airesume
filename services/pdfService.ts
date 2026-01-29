import jsPDF from 'jspdf';
import { CVFormData, AnalysisResult } from '../types';

export const generatePDF = (
  formData: CVFormData,
  optimizedData: AnalysisResult,
  template: 'modern' | 'classic' | 'bold' = 'modern'
): jsPDF => {
  const doc = new jsPDF();
  let y = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;

  // Helper function to add text with word wrap
  const addText = (text: string, fontSize: number = 10, isBold: boolean = false) => {
    doc.setFontSize(fontSize);
    if (isBold) doc.setFont('helvetica', 'bold');
    else doc.setFont('helvetica', 'normal');
    
    const lines = doc.splitTextToSize(text, contentWidth);
    lines.forEach((line: string) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      doc.text(line, margin, y);
      y += fontSize * 0.5;
    });
    y += 3;
  };

  // Header - Nome e Informações de Contato
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(formData.fullName.toUpperCase(), margin, y);
  y += 10;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const contactInfo = [
    formData.email,
    formData.phone,
    formData.location,
    formData.linkedin,
    formData.portfolio
  ].filter(Boolean).join(' | ');
  
  doc.text(contactInfo, margin, y);
  y += 10;

  // Line separator
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // Professional Summary (Optimized)
  if (optimizedData.optimizedSummary) {
    addText('RESUMO PROFISSIONAL', 12, true);
    addText(optimizedData.optimizedSummary, 10);
    y += 3;
  }

  // Work Experience
  if (formData.experiences.length > 0) {
    addText('EXPERIÊNCIA PROFISSIONAL', 12, true);
    formData.experiences.forEach(exp => {
      addText(`${exp.position} - ${exp.company}`, 11, true);
      const period = `${exp.startDate} - ${exp.current ? 'Presente' : exp.endDate}`;
      addText(period, 9);
      if (exp.description) {
        addText(exp.description, 10);
      }
      y += 2;
    });
    y += 3;
  }

  // Education
  if (formData.education.length > 0) {
    addText('FORMAÇÃO ACADÊMICA', 12, true);
    formData.education.forEach(edu => {
      addText(`${edu.degree} - ${edu.institution}`, 11, true);
      const period = `${edu.startDate} - ${edu.current ? 'Cursando' : edu.endDate}`;
      addText(period, 9);
      y += 2;
    });
    y += 3;
  }

  // Skills
  if (formData.skills.length > 0) {
    addText('HABILIDADES', 12, true);
    addText(formData.skills.join(' • '), 10);
    y += 3;
  }

  // ATS Keywords Found (destacar pontos fortes)
  if (optimizedData.foundKeywords.length > 0) {
    addText('COMPETÊNCIAS ALINHADAS À VAGA', 12, true);
    addText(optimizedData.foundKeywords.join(' • '), 10);
  }

  return doc;
};

export const downloadPDF = (
  formData: CVFormData,
  optimizedData: AnalysisResult,
  template: 'modern' | 'classic' | 'bold' = 'modern'
) => {
  const doc = generatePDF(formData, optimizedData, template);
  const fileName = `CV_${formData.fullName.replace(/\s+/g, '_')}_Otimizado.pdf`;
  doc.save(fileName);
};
