// Sistema de créditos simulado (LocalStorage)
export interface UserCredits {
  userId: string;
  credits: number;
  email: string;
}

export interface AnalysisHistory {
  id: string;
  date: string;
  jobTitle: string;
  company: string;
  score: number;
  cvText: string;
  jobDescription: string;
}

const CREDITS_KEY = 'airesume_credits';
const HISTORY_KEY = 'airesume_history';
const DEFAULT_CREDITS = 3; // Créditos iniciais gratuitos

export const creditsService = {
  // Obter créditos do usuário
  getCredits: (): number => {
    const stored = localStorage.getItem(CREDITS_KEY);
    if (!stored) {
      localStorage.setItem(CREDITS_KEY, DEFAULT_CREDITS.toString());
      return DEFAULT_CREDITS;
    }
    return parseInt(stored, 10);
  },

  // Usar um crédito
  useCredit: (): boolean => {
    const current = creditsService.getCredits();
    if (current <= 0) return false;
    localStorage.setItem(CREDITS_KEY, (current - 1).toString());
    return true;
  },

  // Adicionar créditos (para compras)
  addCredits: (amount: number): void => {
    const current = creditsService.getCredits();
    localStorage.setItem(CREDITS_KEY, (current + amount).toString());
  },

  // Salvar análise no histórico
  saveAnalysis: (analysis: Omit<AnalysisHistory, 'id' | 'date'>): void => {
    const history = creditsService.getHistory();
    const newAnalysis: AnalysisHistory = {
      ...analysis,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    history.unshift(newAnalysis); // Adiciona no início
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50))); // Máximo 50
  },

  // Obter histórico de análises
  getHistory: (): AnalysisHistory[] => {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  },

  // Obter uma análise específica
  getAnalysisById: (id: string): AnalysisHistory | null => {
    const history = creditsService.getHistory();
    return history.find(a => a.id === id) || null;
  },

  // Deletar uma análise
  deleteAnalysis: (id: string): void => {
    const history = creditsService.getHistory();
    const filtered = history.filter(a => a.id !== id);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));
  },

  // Reset (para testes)
  reset: (): void => {
    localStorage.removeItem(CREDITS_KEY);
    localStorage.removeItem(HISTORY_KEY);
  }
};
