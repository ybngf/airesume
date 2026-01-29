import React, { useState } from 'react';
import { CVFormData, initialCVFormData, Experience, Education } from '../types';

interface CVWizardProps {
  onComplete: (data: CVFormData) => void;
  onCancel: () => void;
}

const CVWizard: React.FC<CVWizardProps> = ({ onComplete, onCancel }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CVFormData>(initialCVFormData);
  const totalSteps = 7;

  const updateField = (field: keyof CVFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experiences: [...prev.experiences, {
        position: '',
        company: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }]
    }));
  };

  const updateExperience = (index: number, field: keyof Experience, value: any) => {
    const updated = [...formData.experiences];
    updated[index] = { ...updated[index], [field]: value };
    setFormData(prev => ({ ...prev, experiences: updated }));
  };

  const removeExperience = (index: number) => {
    if (formData.experiences.length > 1) {
      setFormData(prev => ({
        ...prev,
        experiences: prev.experiences.filter((_, i) => i !== index)
      }));
    }
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, {
        degree: '',
        institution: '',
        startDate: '',
        endDate: '',
        current: false
      }]
    }));
  };

  const updateEducation = (index: number, field: keyof Education, value: any) => {
    const updated = [...formData.education];
    updated[index] = { ...updated[index], [field]: value };
    setFormData(prev => ({ ...prev, education: updated }));
  };

  const removeEducation = (index: number) => {
    if (formData.education.length > 1) {
      setFormData(prev => ({
        ...prev,
        education: prev.education.filter((_, i) => i !== index)
      }));
    }
  };

  const addSkill = (skill: string) => {
    if (skill.trim() && !formData.skills.includes(skill.trim())) {
      setFormData(prev => ({ ...prev, skills: [...prev.skills, skill.trim()] }));
    }
  };

  const removeSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const getValidationMessage = (): string => {
    switch (step) {
      case 1:
        if (!formData.fullName.trim()) return 'Preencha seu nome completo';
        if (!formData.email.trim()) return 'Preencha seu email';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) return 'Digite um email válido';
        if (formData.phone && !/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(formData.phone.replace(/\s/g, ''))) {
          return 'Telefone inválido. Use formato: (11) 99999-9999';
        }
        return '';
      case 2:
        const validExps = formData.experiences.filter(exp => exp.position.trim() && exp.company.trim());
        if (validExps.length === 0) return 'Adicione pelo menos uma experiência com cargo e empresa';
        for (let i = 0; i < formData.experiences.length; i++) {
          const exp = formData.experiences[i];
          if (exp.position || exp.company || exp.startDate || exp.description) {
            if (!exp.position.trim()) return `Experiência ${i + 1}: Preencha o cargo`;
            if (!exp.company.trim()) return `Experiência ${i + 1}: Preencha a empresa`;
            if (!exp.startDate) return `Experiência ${i + 1}: Preencha a data de início`;
            if (!exp.current && !exp.endDate) return `Experiência ${i + 1}: Preencha a data de término ou marque "Trabalho atual"`;
          }
        }
        return '';
      case 3:
        const validEdu = formData.education.filter(edu => edu.degree.trim() && edu.institution.trim());
        if (validEdu.length === 0) return 'Adicione pelo menos uma formação com curso e instituição';
        for (let i = 0; i < formData.education.length; i++) {
          const edu = formData.education[i];
          if (edu.degree || edu.institution || edu.startDate) {
            if (!edu.degree.trim()) return `Formação ${i + 1}: Preencha o curso`;
            if (!edu.institution.trim()) return `Formação ${i + 1}: Preencha a instituição`;
            if (!edu.startDate) return `Formação ${i + 1}: Preencha a data de início`;
            if (!edu.current && !edu.endDate) return `Formação ${i + 1}: Preencha a data de conclusão ou marque "Estudando atualmente"`;
          }
        }
        return '';
      case 4:
        if (formData.skills.length === 0) return 'Adicione pelo menos 3 habilidades relevantes para a vaga';
        if (formData.skills.length < 3) return `Adicione mais ${3 - formData.skills.length} habilidade(s) - mínimo recomendado: 3`;
        return '';
      case 5:
        const wordCount = formData.jobDescription.trim().split(/\s+/).filter(w => w.length > 0).length;
        if (wordCount === 0) return 'Cole a descrição completa da vaga desejada';
        if (wordCount < 50) return `Adicione mais ${50 - wordCount} palavras na descrição da vaga (mínimo: 50 palavras)`;
        return '';
      case 6:
        if (!formData.template) return 'Selecione um template para seu currículo';
        return '';
      default:
        return '';
    }
  };

  const validateStep = (): boolean => {
    return getValidationMessage() === '';
  };

  const handleNext = () => {
    const validationMsg = getValidationMessage();
    if (validationMsg) {
      alert(validationMsg);
      return;
    }
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    const validationMsg = getValidationMessage();
    if (validationMsg) {
      alert(validationMsg);
      return;
    }
    onComplete(formData);
  };

  // Placeholder for old functions - will be removed
  const oldValidateStep = (): boolean => {
    switch (step) {
      case 1:
        return !!(formData.fullName && formData.email);
      case 2:
        return formData.experiences.some(exp => exp.position && exp.company);
      case 3:
        return formData.education.some(edu => edu.degree && edu.institution);
      case 4:
        return formData.skills.length > 0;
      case 5:
        return formData.jobDescription.split(' ').filter(w => w.length > 0).length >= 50;
      default:
        return true;
    }
  };

  const nextStep = () => {
    const validationMsg = getValidationMessage();
    if (validationMsg) {
      alert(validationMsg);
      return;
    }
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onComplete(formData);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
              <div key={s} className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  s <= step ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-400'
                }`}>
                  {s}
                </div>
                <span className={`text-xs mt-2 ${s === step ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>
                  {['Dados', 'Exp.', 'Edu.', 'Skills', 'Vaga', 'Tema', 'Gerar'][s - 1]}
                </span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Informações Pessoais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="João da Silva"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-colors ${
                      formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                        ? 'border-green-300 bg-green-50/30'
                        : formData.email
                        ? 'border-red-300 bg-red-50/30'
                        : 'border-slate-200'
                    }`}
                    placeholder="joao@example.com"
                  />
                  {formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                    <p className="text-xs text-red-600 mt-1">Digite um email válido</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Telefone
                    <span className="text-slate-500 font-normal text-xs ml-2">(opcional)</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      let formatted = value;
                      if (value.length > 0) {
                        formatted = value.length <= 10
                          ? value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
                          : value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
                      }
                      updateField('phone', formatted);
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-colors ${
                      formData.phone && /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(formData.phone.replace(/\s/g, ''))
                        ? 'border-green-300 bg-green-50/30'
                        : formData.phone
                        ? 'border-orange-300 bg-orange-50/30'
                        : 'border-slate-200'
                    }`}
                    placeholder="(11) 99999-9999"
                    maxLength={15}
                  />
                  {formData.phone && !/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(formData.phone.replace(/\s/g, '')) && (
                    <p className="text-xs text-orange-600 mt-1">Formato: (11) 99999-9999</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Localização</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="São Paulo, SP"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">LinkedIn</label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => updateField('linkedin', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="linkedin.com/in/joao"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Portfolio</label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => updateField('portfolio', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="github.com/joao"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Resumo Profissional</label>
                <textarea
                  value={formData.summary}
                  onChange={(e) => updateField('summary', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  rows={4}
                  placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
                />
              </div>
            </div>
          )}

          {/* Step 2: Experience */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-900">Experiência Profissional</h2>
                <button onClick={addExperience} className="text-blue-600 font-bold text-sm hover:underline">+ Adicionar</button>
              </div>
              {formData.experiences.map((exp, idx) => (
                <div key={idx} className="p-6 border border-slate-200 rounded-xl space-y-4 relative">
                  {formData.experiences.length > 1 && (
                    <button
                      onClick={() => removeExperience(idx)}
                      className="absolute top-4 right-4 text-rose-600 hover:text-rose-800"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Cargo *</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => updateExperience(idx, 'position', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Desenvolvedor Full Stack"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Empresa *</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExperience(idx, 'company', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Tech Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Data de Início *</label>
                      <input
                        type="month"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(idx, 'startDate', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Data de Término</label>
                      <input
                        type="month"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(idx, 'endDate', e.target.value)}
                        disabled={exp.current}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-slate-100"
                      />
                    </div>
                  </div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => {
                        updateExperience(idx, 'current', e.target.checked);
                        if (e.target.checked) updateExperience(idx, 'endDate', '');
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-slate-700">Trabalho aqui atualmente</span>
                  </label>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Descrição</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => updateExperience(idx, 'description', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                      rows={3}
                      placeholder="• Desenvolveu sistemas web...&#10;• Implementou features que..."
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 3: Education */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-900">Formação Acadêmica</h2>
                <button onClick={addEducation} className="text-blue-600 font-bold text-sm hover:underline">+ Adicionar</button>
              </div>
              {formData.education.map((edu, idx) => (
                <div key={idx} className="p-6 border border-slate-200 rounded-xl space-y-4 relative">
                  {formData.education.length > 1 && (
                    <button
                      onClick={() => removeEducation(idx)}
                      className="absolute top-4 right-4 text-rose-600 hover:text-rose-800"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Curso *</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => updateEducation(idx, 'degree', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Ciência da Computação"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Instituição *</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => updateEducation(idx, 'institution', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Universidade XYZ"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Data de Início</label>
                      <input
                        type="month"
                        value={edu.startDate}
                        onChange={(e) => updateEducation(idx, 'startDate', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Data de Conclusão</label>
                      <input
                        type="month"
                        value={edu.endDate}
                        onChange={(e) => updateEducation(idx, 'endDate', e.target.value)}
                        disabled={edu.current}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-slate-100"
                      />
                    </div>
                  </div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={edu.current}
                      onChange={(e) => {
                        updateEducation(idx, 'current', e.target.checked);
                        if (e.target.checked) updateEducation(idx, 'endDate', '');
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-slate-700">Estudando atualmente</span>
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* Step 4: Skills */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Habilidades</h2>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Adicionar Habilidade</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="skill-input"
                    className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Ex: React, Python, Liderança..."
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        const input = e.target as HTMLInputElement;
                        addSkill(input.value);
                        input.value = '';
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const input = document.getElementById('skill-input') as HTMLInputElement;
                      addSkill(input.value);
                      input.value = '';
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, idx) => (
                  <div key={idx} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full flex items-center gap-2 border border-blue-200">
                    <span className="font-medium">{skill}</span>
                    <button onClick={() => removeSkill(skill)} className="text-blue-700 hover:text-blue-900">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium">
                <span className={formData.skills.length >= 3 ? 'text-green-600' : 'text-slate-500'}>
                  {formData.skills.length} habilidade{formData.skills.length !== 1 ? 's' : ''} adicionada{formData.skills.length !== 1 ? 's' : ''}
                  {formData.skills.length >= 3 && ' ✓'}
                </span>
                {formData.skills.length < 3 && (
                  <span className="text-orange-600 font-bold ml-2">
                    (mínimo recomendado: 3)
                  </span>
                )}
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-sm font-bold text-slate-700 mb-2">Sugestões:</p>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Python', 'Node.js', 'TypeScript', 'SQL', 'Git', 'Docker', 'AWS', 'Comunicação', 'Liderança', 'Scrum'].map(suggestion => (
                    <button
                      key={suggestion}
                      onClick={() => addSkill(suggestion)}
                      className="text-xs px-3 py-1 bg-white border border-slate-200 rounded-full hover:bg-slate-100"
                    >
                      + {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Job Description */}
          {step === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Descrição da Vaga Desejada</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                <p className="text-sm font-medium text-blue-900">
                  📋 <strong>Importante:</strong> Cole aqui a descrição completa da vaga para a qual você está se candidatando. 
                  Isso ajudará nossa IA a otimizar seu currículo especificamente para essa oportunidade.
                </p>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Descrição da Vaga *
                  <span className="text-slate-500 font-normal ml-2">(Mínimo 50 palavras)</span>
                </label>
                <textarea
                  value={formData.jobDescription}
                  onChange={(e) => updateField('jobDescription', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-colors ${
                    formData.jobDescription.trim().split(/\s+/).filter(w => w.length > 0).length >= 50
                      ? 'border-green-300 bg-green-50/30'
                      : formData.jobDescription.trim().length > 0
                      ? 'border-orange-300 bg-orange-50/30'
                      : 'border-slate-200'
                  }`}
                  rows={12}
                  placeholder="Exemplo:\n\nEstamos buscando um Desenvolvedor Full Stack para integrar nosso time de tecnologia. O profissional será responsável por desenvolver aplicações web utilizando React, Node.js e MongoDB. Requisitos: experiência com TypeScript, conhecimento em APIs REST, familiaridade com metodologias ágeis..."
                />
                <div className="flex items-center justify-between mt-2">
                  <div className={`text-sm font-medium ${
                    formData.jobDescription.trim().split(/\s+/).filter(w => w.length > 0).length >= 50
                      ? 'text-green-600'
                      : formData.jobDescription.trim().length > 0
                      ? 'text-orange-600'
                      : 'text-slate-500'
                  }`}>
                    {formData.jobDescription.trim().split(/\s+/).filter(w => w.length > 0).length} / 50 palavras
                    {formData.jobDescription.trim().split(/\s+/).filter(w => w.length > 0).length >= 50 && ' ✓'}
                  </div>
                  {formData.jobDescription.trim().split(/\s+/).filter(w => w.length > 0).length < 50 && formData.jobDescription.trim().length > 0 && (
                    <div className="text-sm text-orange-600">
                      Faltam {50 - formData.jobDescription.trim().split(/\s+/).filter(w => w.length > 0).length} palavras
                    </div>
                  )}
                </div>
              </div>
            </div>
          )})

          {/* Step 6: Template */}
          {step === 6 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Escolha o Template</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(['modern', 'classic', 'bold'] as const).map((template) => (
                  <div
                    key={template}
                    onClick={() => updateField('template', template)}
                    className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.template === template
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="aspect-[3/4] bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-slate-400 capitalize">{template[0]}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 capitalize mb-1">{template}</h3>
                    <p className="text-xs text-slate-500">
                      {template === 'modern' && 'Design limpo e contemporâneo'}
                      {template === 'classic' && 'Layout tradicional e profissional'}
                      {template === 'bold' && 'Design ousado com sidebar'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Review & Generate */}
          {step === 7 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Revisar e Gerar</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{formData.experiences.length}</div>
                  <div className="text-sm text-blue-700 font-medium">Experiências</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">{formData.education.length}</div>
                  <div className="text-sm text-emerald-700 font-medium">Formações</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-1">{formData.skills.length}</div>
                  <div className="text-sm text-purple-700 font-medium">Habilidades</div>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-3">O que a IA fará:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-700">Otimizar todas as descrições para a vaga específica</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-700">Incluir palavras-chave essenciais do ATS</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-700">Gerar PDF profissional pronto para envio</span>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-center">
                <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-amber-800 font-medium">Esta geração utilizará 1 crédito</span>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
            <button
              onClick={step === 1 ? onCancel : prevStep}
              className="px-6 py-3 border-2 border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all"
            >
              {step === 1 ? 'Cancelar' : 'Voltar'}
            </button>
            <button
              onClick={nextStep}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
            >
              {step === totalSteps ? 'Gerar Currículo' : 'Próximo'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVWizard;
