
import React, { useState, useCallback, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import ResultView from './components/ResultView';
import HistoryView from './components/HistoryView';
import CVWizard from './components/CVWizard';
import { analyzeCvWithGemini } from './services/geminiService';
import { creditsService, AnalysisHistory } from './services/creditsService';
import { AnalysisResult, AppStep, CVFormData } from './types';

function App() {
  const [step, setStep] = useState<AppStep>(AppStep.HOME);
  const [cvText, setCvText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [credits, setCredits] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  const [showWizard, setShowWizard] = useState(false);
  
  const analysisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCredits(creditsService.getCredits());
  }, []);

  const scrollToAnalysis = () => {
    analysisRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAnalysis = useCallback(async () => {
    if (!cvText.trim() || !jobDescription.trim()) {
      alert("Por favor, cole seu currículo e a descrição da vaga.");
      return;
    }

    // Verificar créditos
    if (credits <= 0) {
      alert("Você não tem créditos suficientes. Compre mais créditos para continuar.");
      return;
    }

    setLoading(true);
    setError(null);
    setStep(AppStep.ANALYZING);

    try {
      const analysisResult = await analyzeCvWithGemini(cvText, jobDescription);
      setResult(analysisResult);
      setStep(AppStep.RESULTS);
      
      // Usar crédito e salvar no histórico
      creditsService.useCredit();
      setCredits(creditsService.getCredits());
      
      // Extrair título e empresa da descrição (simplificado)
      const lines = jobDescription.split('\n');
      const jobTitle = lines[0]?.substring(0, 50) || 'Vaga Analisada';
      const company = lines[1]?.substring(0, 50) || '';
      
      creditsService.saveAnalysis({
        jobTitle,
        company,
        score: analysisResult.score,
        cvText,
        jobDescription
      });
    } catch (err) {
      setError("Houve um erro ao processar sua análise. Tente novamente mais tarde.");
      setStep(AppStep.HOME);
    } finally {
      setLoading(false);
    }
  }, [cvText, jobDescription, credits]);

  const handleReset = () => {
    setStep(AppStep.HOME);
    setResult(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectHistory = (analysis: AnalysisHistory) => {
    setCvText(analysis.cvText);
    setJobDescription(analysis.jobDescription);
    setShowHistory(false);
    scrollToAnalysis();
  };

  const handleShowHistory = () => {
    setShowHistory(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBuyCredits = (amount: number, price: string) => {
    // Simulação de compra (em produção, integraria com Stripe/Mercado Pago)
    const confirmed = confirm(`Comprar ${amount} crédito${amount !== 1 ? 's' : ''} por ${price}?\n\n(Esta é uma simulação - em produção seria processado o pagamento real)`);
    if (confirmed) {
      creditsService.addCredits(amount);
      setCredits(creditsService.getCredits());
      alert(`✅ Compra realizada! Você ganhou ${amount} crédito${amount !== 1 ? 's' : ''}!`);
    }
  };

  const handleWizardComplete = async (formData: CVFormData) => {
    if (credits <= 0) {
      alert("Você não tem créditos suficientes. Compre mais créditos para continuar.");
      return;
    }

    setShowWizard(false);
    setLoading(true);
    setStep(AppStep.ANALYZING);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      // Converter formData para texto de CV
      const cvTextFromForm = `
Nome: ${formData.fullName}
Email: ${formData.email}
Telefone: ${formData.phone}
Localização: ${formData.location}
LinkedIn: ${formData.linkedin}
Portfolio: ${formData.portfolio}

RESUMO:
${formData.summary}

EXPERIÊNCIA PROFISSIONAL:
${formData.experiences.map(exp => `
${exp.position} - ${exp.company}
${exp.startDate} - ${exp.current ? 'Presente' : exp.endDate}
${exp.description}
`).join('\n')}

FORMAÇÃO:
${formData.education.map(edu => `
${edu.degree} - ${edu.institution}
${edu.startDate} - ${edu.current ? 'Presente' : edu.endDate}
`).join('\n')}

HABILIDADES:
${formData.skills.join(', ')}
      `.trim();

      const analysisResult = await analyzeCvWithGemini(cvTextFromForm, formData.jobDescription);
      setResult(analysisResult);
      setStep(AppStep.RESULTS);
      
      // Usar crédito e salvar no histórico
      creditsService.useCredit();
      setCredits(creditsService.getCredits());
      
      const lines = formData.jobDescription.split('\n');
      const jobTitle = lines[0]?.substring(0, 50) || 'Vaga Analisada';
      const company = lines[1]?.substring(0, 50) || '';
      
      creditsService.saveAnalysis({
        jobTitle,
        company,
        score: analysisResult.score,
        cvText: cvTextFromForm,
        jobDescription: formData.jobDescription
      });
    } catch (err) {
      setError("Houve um erro ao processar sua análise. Tente novamente mais tarde.");
      setStep(AppStep.HOME);
      setShowWizard(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar 
        onGoHome={handleReset} 
        onAnalyze={() => setShowWizard(true)} 
        credits={credits}
        onShowHistory={handleShowHistory}
      />

      <main className="flex-grow pt-20">
        {showWizard ? (
          <CVWizard 
            onComplete={handleWizardComplete}
            onCancel={() => setShowWizard(false)}
          />
        ) : showHistory ? (
          <HistoryView 
            onSelectAnalysis={handleSelectHistory} 
            onBack={() => setShowHistory(false)} 
          />
        ) : (
          <>
            {step === AppStep.HOME && (
            <>
            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100">
                  <span className="mr-1.5 h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  +15.000 currículos gerados este mês
                </div>
                <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tighter">
                  Seu Currículo<br />Ignorado Nunca<br />Mais.
                </h1>
                <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
                  Nossa IA reescreve seu CV para cada vaga específica, usando as palavras-chave exatas que os robôs (ATS) e recrutadores buscam.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowWizard(true)}
                    className="bg-slate-950 text-white px-8 py-4 rounded-xl font-bold flex items-center hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    Gerar CV Otimizado
                  </button>
                  <button 
                    onClick={scrollToAnalysis}
                    className="border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    Testar meu CV atual
                  </button>
                </div>
                <div className="flex items-center gap-4">
                   <div className="flex -space-x-2">
                     {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden"><img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="avatar" /></div>)}
                   </div>
                   <div className="flex items-center gap-1.5">
                     <div className="flex text-amber-400">
                        {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                     </div>
                     <span className="text-sm font-bold text-slate-900">4.9/5 <span className="text-slate-400 font-medium">de satisfação</span></span>
                   </div>
                </div>
              </div>

              {/* MOCKUP PREVIEW */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 scale-105 transform origin-center rotate-1">
                   {/* Resume Header */}
                   <div className="flex justify-between mb-8">
                     <div>
                       <h3 className="text-2xl font-extrabold text-slate-900">SÉRGIO BANHOS</h3>
                       <p className="text-blue-600 font-bold text-sm">Desenvolvedor Fullstack Pleno</p>
                       <p className="text-[10px] text-slate-400 mt-1 flex gap-2"><span>📞 85985509990</span> <span>✉️ sergiobanhos@gmail.com</span> <span>📍 Fortaleza</span></p>
                     </div>
                     <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border-4 border-emerald-400 flex items-center justify-center relative">
                           <span className="text-xs font-black text-emerald-500">98%</span>
                           <div className="absolute -bottom-1 bg-emerald-500 text-white text-[8px] font-bold px-1 rounded">SB</div>
                        </div>
                        <span className="text-[10px] text-emerald-500 font-bold mt-1 uppercase tracking-tighter">ATS SCORE</span>
                     </div>
                   </div>
                   {/* Resume Body */}
                   <div className="grid grid-cols-3 gap-6">
                     <div className="col-span-2 space-y-4">
                       <div>
                         <h4 className="text-[11px] font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">EXPERIÊNCIA</h4>
                         <p className="text-[10px] font-bold">Desenvolvedor Fullstack Pleno - Moldsaof</p>
                         <p className="text-[8px] text-slate-400 mb-1 italic">Outubro de 2023 - Presente | Fortaleza</p>
                         <ul className="text-[8px] space-y-1 list-disc pl-3 text-slate-600">
                           <li>Desenvolveu sistemas web do zero com integração de Inteligência Artificial para clientes de grande porte.</li>
                           <li>Criou scripts e soluções utilizando Python para projetos de Visão Computacional.</li>
                         </ul>
                       </div>
                       <div>
                         <p className="text-[10px] font-bold">Desenvolvedor Fullstack - Freelancer</p>
                         <p className="text-[8px] text-slate-400 mb-1 italic">Janeiro de 2022 - Outubro de 2023</p>
                         <ul className="text-[8px] space-y-1 list-disc pl-3 text-slate-600">
                           <li>Implementou funcionalidades complexas que resultaram na redução de custos.</li>
                         </ul>
                       </div>
                     </div>
                     <div className="space-y-4">
                        <div>
                          <h4 className="text-[11px] font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">RESUMO</h4>
                          <p className="text-[8px] text-slate-600 leading-tight">Desenvolvedor Fullstack com sólida base em Python e React, cursando graduação em tecnologia. Experiência no desenvolvimento de sistemas web do zero e implementação de soluções utilizando IA.</p>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">HABILIDADES</h4>
                          <p className="text-[8px] text-slate-600 leading-tight font-bold">Desenvolvimento Web<br /><span className="font-normal">React, TypeScript, Next.js, Node.js</span></p>
                        </div>
                     </div>
                   </div>
                   {/* Notification Overlay */}
                   <div className="absolute -bottom-10 -right-6 bg-white/90 backdrop-blur rounded-xl shadow-lg border border-slate-100 p-4 flex items-center gap-3 animate-bounce">
                      <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs italic">RH</div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-900 flex items-center">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span> Entrevista Agendada
                        </p>
                        <p className="text-[8px] text-slate-400">Há 2 minutos</p>
                      </div>
                   </div>
                </div>
              </div>
            </section>

            {/* WHY US SECTION */}
            <section className="bg-slate-50 py-24 px-6">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Por que você envia currículos e<br />
                  <span className="text-rose-500 underline decoration-rose-200 underline-offset-8">não recebe respostas?</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                  O problema não é sua experiência. É como você a apresenta. Recrutadores gastam em média 6 segundos por currículo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                    <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth={2} /></svg></div>
                    <h3 className="text-lg font-bold">Barreira dos Robôs</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">75% dos currículos são rejeitados por softwares (ATS) antes de um humano ler, por falta de palavras-chave.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth={2} /></svg></div>
                    <h3 className="text-lg font-bold">Currículo Genérico</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Mandar o mesmo PDF para 50 vagas diferentes é a receita para ser ignorado. Cada vaga exige um foco diferente.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                    <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} /></svg></div>
                    <h3 className="text-lg font-bold">Formatação Quebrada</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Colunas duplas, gráficos e layouts 'criativos' costumam confundir os sistemas de leitura automáticos.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ANALYSIS PREVIEW SECTION (DARK) */}
            <section className="bg-slate-950 py-24 px-6 overflow-hidden">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    Seu currículo passa no teste do robô?
                  </h2>
                  <p className="text-slate-400 text-xl leading-relaxed">
                    Não tente adivinhar. Nossa ferramenta simula exatamente como os sistemas das grandes empresas leem seu arquivo. Descubra sua nota agora.
                  </p>
                  <div className="flex gap-6">
                    <button onClick={scrollToAnalysis} className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">
                      Fazer Análise Gratuita
                    </button>
                    <button className="text-white font-bold flex items-center hover:underline">
                      Saiba mais <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
                <div className="relative">
                   <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-2xl">
                     <div className="flex justify-between items-center mb-6">
                        <span className="text-xs text-slate-500 font-mono">analysis_report_v2.pdf</span>
                        <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">98/100</span>
                     </div>
                     <div className="space-y-3">
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[90%]"></div></div>
                        <div className="h-2 w-3/4 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[70%]"></div></div>
                        <div className="h-2 w-1/2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[95%]"></div></div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[60%]"></div></div>
                     </div>
                     <div className="mt-8 flex gap-3">
                        <span className="bg-slate-800 text-slate-400 text-[10px] px-3 py-1 rounded-full border border-slate-700">Keywords</span>
                        <span className="bg-slate-800 text-slate-400 text-[10px] px-3 py-1 rounded-full border border-slate-700">Format</span>
                        <span className="bg-slate-800 text-slate-400 text-[10px] px-3 py-1 rounded-full border border-slate-700">Skills</span>
                     </div>
                   </div>
                </div>
              </div>
            </section>

            {/* STEPS SECTION */}
            <section className="py-24 px-6 bg-slate-50">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Currículo Otimizado em 3 Passos
                </h2>
                <p className="text-slate-500 text-lg">Sem formulários chatos. Sem perder tempo. Direto ao ponto.</p>
                <div className="relative mt-20 flex flex-col md:flex-row justify-between gap-12">
                   <div className="absolute top-10 left-0 w-full h-px border-t border-dashed border-slate-300 hidden md:block"></div>
                   
                   <div className="relative z-10 bg-slate-50 flex flex-col items-center flex-1">
                      <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeWidth={2} /></svg></div>
                      <span className="absolute -top-4 bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">1</span>
                      <h3 className="font-bold text-slate-900 mb-2">Importe seus Dados</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">Cole o link do seu LinkedIn ou faça upload do seu PDF atual. Nós extraímos tudo.</p>
                   </div>
                   <div className="relative z-10 bg-slate-50 flex flex-col items-center flex-1">
                      <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth={2} /></svg></div>
                      <span className="absolute -top-4 bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">2</span>
                      <h3 className="font-bold text-slate-900 mb-2">Cole a Vaga</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">Copie a descrição da vaga (LinkedIn, Gupy, etc) e cole no nosso sistema.</p>
                   </div>
                   <div className="relative z-10 bg-slate-50 flex flex-col items-center flex-1">
                      <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth={2} /></svg></div>
                      <span className="absolute -top-4 bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
                      <h3 className="font-bold text-slate-900 mb-2">Baixe em PDF</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">A IA gera um novo currículo 100% focado naquela vaga específica. Pronto para envio.</p>
                   </div>
                </div>
                <div className="mt-16">
                  <button onClick={scrollToAnalysis} className="bg-slate-950 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
                    Começar Agora
                  </button>
                </div>
              </div>
            </section>

            {/* ACTUAL ANALYSIS SECTION */}
            <section ref={analysisRef} className="py-24 px-6 max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                 <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Otimize Seu Currículo Agora</h2>
                 <p className="text-slate-500 font-medium">Use o poder do Gemini Pro para ajustar seu perfil à vaga desejada.</p>
                 {credits > 0 ? (
                   <div className="inline-flex items-center bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold border border-emerald-200">
                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     Você tem {credits} análise{credits !== 1 ? 's' : ''} disponível{credits !== 1 ? 'is' : ''}
                   </div>
                 ) : (
                   <div className="inline-flex items-center bg-rose-50 text-rose-700 px-4 py-2 rounded-full text-sm font-bold border border-rose-200">
                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                     </svg>
                     Você não tem créditos. <a href="#pricing" className="ml-1 underline">Adquira agora</a>
                   </div>
                 )}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-800">Seu Currículo (Cole o texto)</label>
                  <textarea
                    value={cvText}
                    onChange={(e) => setCvText(e.target.value)}
                    className="w-full h-[400px] p-6 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none resize-none text-sm transition-all"
                    placeholder="Cole aqui todas as informações do seu currículo atual..."
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-800">Descrição da Vaga (Cole o texto)</label>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="w-full h-[400px] p-6 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none resize-none text-sm transition-all"
                    placeholder="Cole aqui a descrição completa da vaga que você deseja..."
                  />
                </div>
              </div>
              <div className="mt-12 flex justify-center">
                 <button
                  onClick={handleAnalysis}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-black py-5 px-16 rounded-2xl shadow-2xl shadow-blue-100 hover:shadow-blue-200 transition-all transform hover:-translate-y-1 flex items-center disabled:opacity-50"
                >
                  {loading ? "Processando Análise..." : "Analisar Meu Currículo Gratuitamente"}
                </button>
              </div>
            </section>

            {/* PRICING SECTION */}
            <section id="pricing" className="py-24 px-6 bg-slate-50">
               <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16 space-y-4">
                     <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Investimento Único</h2>
                     <p className="text-slate-500 font-medium">Sem assinaturas. Acesso vitalício aos seus créditos.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                     {/* BASIC */}
                     <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Básico</h3>
                        <div className="text-3xl font-black mb-8">R$ 4,90</div>
                        <ul className="space-y-4 mb-12 flex-grow">
                           <li className="flex items-center text-sm font-medium text-slate-600"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg> 1 Currículo Otimizado</li>
                           <li className="flex items-center text-sm font-medium text-slate-600"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg> Download em PDF</li>
                           <li className="flex items-center text-sm font-medium text-slate-600"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg> IA Persuasiva</li>
                        </ul>
                        <button onClick={() => handleBuyCredits(1, 'R$ 4,90')} className="w-full border-2 border-slate-100 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">Começar</button>
                     </div>
                     {/* POPULAR */}
                     <div className="bg-white p-10 rounded-3xl border-2 border-slate-900 shadow-xl flex flex-col relative transform md:scale-105">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest">MAIS VENDIDO</div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Popular</h3>
                        <div className="text-3xl font-black mb-1">R$ 12,90</div>
                        <div className="text-[10px] text-emerald-500 font-bold mb-8">R$ 2,58 / CV</div>
                        <ul className="space-y-4 mb-12 flex-grow">
                           <li className="flex items-center text-sm font-bold text-slate-900"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg> 5 Currículos Otimizados</li>
                           <li className="flex items-center text-sm font-bold text-slate-900"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg> Download em PDF</li>
                           <li className="flex items-center text-sm font-bold text-slate-900"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg> IA Persuasiva</li>
                           <li className="flex items-center text-sm font-bold text-slate-900"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg> Melhor Custo-Benefício</li>
                        </ul>
                        <button onClick={() => handleBuyCredits(5, 'R$ 12,90')} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg">Escolher Popular</button>
                     </div>
                     {/* PRO */}
                     <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Pro</h3>
                        <div className="text-3xl font-black mb-1">R$ 19,90</div>
                        <div className="text-[10px] text-emerald-500 font-bold mb-8">R$ 1,99 / CV</div>
                        <ul className="space-y-4 mb-12 flex-grow">
                           <li className="flex items-center text-sm font-medium text-slate-600"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg> 10 Currículos Otimizados</li>
                           <li className="flex items-center text-sm font-medium text-slate-600"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg> Download em PDF</li>
                           <li className="flex items-center text-sm font-medium text-slate-600"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg> IA Persuasiva</li>
                           <li className="flex items-center text-sm font-medium text-slate-600"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg> Acesso Prioritário</li>
                        </ul>
                        <button onClick={() => handleBuyCredits(10, 'R$ 19,90')} className="w-full border-2 border-slate-100 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">Escolher Pro</button>
                     </div>
                  </div>
                  <div className="mt-12 text-center text-[10px] text-slate-400 font-bold flex items-center justify-center gap-2">
                     <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth={2} /></svg>
                     Garantia de Qualidade: Se o arquivo não abrir, geramos outro sem custo.
                  </div>
               </div>
            </section>
          </>
        )}

        {step === AppStep.ANALYZING && (
          <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
             <div className="w-24 h-24 mb-8">
               <svg className="animate-spin text-blue-600 w-full h-full" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
             </div>
             <h2 className="text-2xl font-black text-slate-900 mb-2">Processando Análise...</h2>
             <p className="text-slate-500 font-medium animate-pulse">O Gemini está lendo cada detalhe do seu perfil profissional.</p>
          </div>
        )}

        {step === AppStep.RESULTS && result && (
          <ResultView result={result} onReset={handleReset} />
        )}
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-2 space-y-6">
              <span className="text-2xl font-extrabold text-white tracking-tighter">AIResume<span className="text-blue-500">.</span></span>
              <p className="max-w-xs leading-relaxed font-medium">Ajudamos profissionais a conseguirem mais entrevistas através de tecnologia inteligente de otimização de currículos. Pare de ser ignorado.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Scanner ATS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gerador de CV</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-900 text-[10px] font-bold text-center tracking-widest uppercase">
            © 2025 AIResume. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
