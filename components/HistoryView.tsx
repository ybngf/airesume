import React from 'react';
import { creditsService, AnalysisHistory } from '../services/creditsService';

interface HistoryViewProps {
  onSelectAnalysis: (analysis: AnalysisHistory) => void;
  onBack: () => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({ onSelectAnalysis, onBack }) => {
  const [history, setHistory] = React.useState<AnalysisHistory[]>([]);

  React.useEffect(() => {
    setHistory(creditsService.getHistory());
  }, []);

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (score >= 60) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-rose-600 bg-rose-50 border-rose-200';
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Deseja realmente excluir esta análise?')) {
      creditsService.deleteAnalysis(id);
      setHistory(creditsService.getHistory());
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Histórico de Análises</h1>
          <p className="text-slate-500">Suas análises anteriores salvas</p>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center text-blue-600 font-semibold hover:underline"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar
        </button>
      </div>

      {history.length === 0 ? (
        <div className="bg-slate-50 rounded-3xl p-16 text-center">
          <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Nenhuma análise ainda</h3>
          <p className="text-slate-500">Faça sua primeira análise de currículo!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {history.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectAnalysis(item)}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.jobTitle || 'Vaga'}
                  </h3>
                  <p className="text-sm text-slate-500">{item.company || 'Empresa não especificada'}</p>
                </div>
                <button
                  onClick={(e) => handleDelete(item.id, e)}
                  className="text-slate-400 hover:text-rose-600 transition-colors"
                  title="Excluir análise"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>

              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold border mb-4 ${getScoreColor(item.score)}`}>
                Score: {item.score}/100
              </div>

              <div className="text-xs text-slate-400">
                {formatDate(item.date)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryView;
