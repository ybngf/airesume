
import React from 'react';
import { AnalysisResult } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import jsPDF from 'jspdf';

interface ResultViewProps {
  result: AnalysisResult;
  onReset: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ result, onReset }) => {
  const chartData = [
    { name: 'Match', value: result.score },
    { name: 'Gap', value: 100 - result.score },
  ];
  
  const COLORS = ['#2563eb', '#f1f5f9'];

  const handleDownloadReport = () => {
    const doc = new jsPDF();
    let y = 20;
    
    // Title
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Relatório de Análise de Currículo', 20, y);
    y += 15;
    
    // Score
    doc.setFontSize(14);
    doc.text(`Pontuação: ${result.score}/100`, 20, y);
    y += 10;
    
    // Compatibility
    doc.setFontSize(12);
    doc.text(`Compatibilidade: ${result.matchPercentage}%`, 20, y);
    y += 15;
    
    // Feedback
    doc.setFont('helvetica', 'bold');
    doc.text('Feedback:', 20, y);
    y += 7;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const feedbackLines = doc.splitTextToSize(result.feedback, 170);
    feedbackLines.forEach((line: string) => {
      doc.text(line, 20, y);
      y += 5;
    });
    y += 10;
    
    // Keywords Found
    if (result.foundKeywords.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('Palavras-chave Encontradas:', 20, y);
      y += 7;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(result.foundKeywords.join(', '), 20, y, { maxWidth: 170 });
      y += 15;
    }
    
    // Missing Keywords
    if (result.missingKeywords.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('Palavras-chave Faltantes:', 20, y);
      y += 7;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(result.missingKeywords.join(', '), 20, y, { maxWidth: 170 });
      y += 15;
    }
    
    // Optimized Summary
    if (y > 200) {
      doc.addPage();
      y = 20;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Resumo Profissional Otimizado:', 20, y);
    y += 7;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const summaryLines = doc.splitTextToSize(result.optimizedSummary, 170);
    summaryLines.forEach((line: string) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      doc.text(line, 20, y);
      y += 5;
    });
    
    doc.save('Analise_Curriculo.pdf');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Resultado da sua Análise</h1>
          <p className="text-slate-500">Veja como seu currículo se sai para esta oportunidade.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleDownloadReport}
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Baixar PDF
          </button>
          <button 
            onClick={onReset}
            className="flex items-center text-blue-600 font-semibold hover:underline border-2 border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-all"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Nova Análise
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Score Card */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Pontuação Geral</h3>
          <div className="relative w-48 h-48 mb-6">
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  innerRadius={65}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-slate-900">{result.score}</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest">pontos</span>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed italic">
            "{result.feedback}"
          </p>
        </div>

        {/* Keywords Comparison */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center mb-4">
               <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
               </div>
               <h3 className="font-semibold text-slate-900">Palavras-chave Encontradas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {result.foundKeywords.map((kw, i) => (
                <span key={i} className="bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full border border-emerald-100">
                  {kw}
                </span>
              ))}
              {result.foundKeywords.length === 0 && <p className="text-slate-400 text-sm italic">Nenhuma correspondência direta encontrada.</p>}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center mb-4">
               <div className="bg-rose-100 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
               </div>
               <h3 className="font-semibold text-slate-900">Palavras-chave Faltantes</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {result.missingKeywords.map((kw, i) => (
                <span key={i} className="bg-rose-50 text-rose-700 text-xs font-medium px-3 py-1 rounded-full border border-rose-100">
                  {kw}
                </span>
              ))}
              {result.missingKeywords.length === 0 && <p className="text-slate-400 text-sm italic">Você cobriu todas as palavras essenciais!</p>}
            </div>
          </div>

          <div className="md:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center mb-4">
               <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
               </div>
               <h3 className="font-semibold text-slate-900">Sugestões de Melhoria</h3>
            </div>
            <ul className="space-y-3">
              {result.suggestions.map((sug, i) => (
                <li key={i} className="flex items-start text-sm text-slate-600 leading-relaxed">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  {sug}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-600 p-8 rounded-3xl shadow-xl text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Resumo Profissional Otimizado
        </h3>
        <p className="text-blue-50 leading-relaxed mb-6 font-medium">
          Copie e cole este resumo no início do seu currículo para aumentar as chances de ser selecionado pelos algoritmos de triagem.
        </p>
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 relative">
          <p className="text-white text-lg italic">
            {result.optimizedSummary}
          </p>
          <button 
            onClick={() => {
              navigator.clipboard.writeText(result.optimizedSummary);
              alert("Copiado para a área de transferência!");
            }}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
            title="Copiar texto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
