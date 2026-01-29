import React from 'react';

interface NavbarProps {
  onGoHome: () => void;
  onAnalyze: () => void;
  credits?: number;
  onShowHistory?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGoHome, onAnalyze, credits, onShowHistory }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={onGoHome}>
          <span className="text-2xl font-extrabold tracking-tighter text-slate-900">AIResume<span className="text-slate-900">.</span></span>
        </div>
        
        <div className="flex items-center space-x-6">
          {credits !== undefined && (
            <div className="flex items-center bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
              <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-bold text-slate-900">{credits} crédito{credits !== 1 ? 's' : ''}</span>
            </div>
          )}
          {onShowHistory && (
            <button
              onClick={onShowHistory}
              className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Histórico
            </button>
          )}
          <a href="#pricing" className="text-sm font-semibold text-slate-900 hover:opacity-70 transition-opacity">Preços</a>
          <button 
            onClick={onAnalyze}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-all"
          >
            Criar CV →
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
