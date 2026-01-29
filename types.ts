
export interface AnalysisResult {
  score: number;
  matchPercentage: number;
  missingKeywords: string[];
  foundKeywords: string[];
  suggestions: string[];
  optimizedSummary: string;
  feedback: string;
}

export enum AppStep {
  HOME = 'HOME',
  ANALYZING = 'ANALYZING',
  RESULTS = 'RESULTS'
}

// Wizard Types
export interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  current: boolean;
}

export interface CVFormData {
  // Step 1: Personal Info
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  summary: string;
  
  // Step 2: Experience
  experiences: Experience[];
  
  // Step 3: Education
  education: Education[];
  
  // Step 4: Skills
  skills: string[];
  
  // Step 5: Job Description
  jobDescription: string;
  
  // Step 6: Template
  template: 'modern' | 'classic' | 'bold';
}

export const initialCVFormData: CVFormData = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  linkedin: '',
  portfolio: '',
  summary: '',
  experiences: [{
    position: '',
    company: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  }],
  education: [{
    degree: '',
    institution: '',
    startDate: '',
    endDate: '',
    current: false
  }],
  skills: [],
  jobDescription: '',
  template: 'modern'
};
