export type Language = 'pt-BR' | 'en-US' | 'es-ES';

export interface Translations {
  // Navbar
  navHome: string;
  navCreateCV: string;
  navHistory: string;
  navPricing: string;
  navCredits: string;
  
  // Hero Section
  heroMonthlyBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroTestCV: string;
  heroGenerateCV: string;
  
  // How It Works
  howItWorksTitle: string;
  howItWorksStep1Title: string;
  howItWorksStep1Desc: string;
  howItWorksStep2Title: string;
  howItWorksStep2Desc: string;
  howItWorksStep3Title: string;
  howItWorksStep3Desc: string;
  
  // Analysis Section
  analysisTitle: string;
  analysisSubtitle: string;
  analysisCVLabel: string;
  analysisCVPlaceholder: string;
  analysisJobLabel: string;
  analysisJobPlaceholder: string;
  analysisButton: string;
  analysisCreditsAvailable: string;
  analysisNoCredits: string;
  analysisBuyCredits: string;
  
  // Results
  resultsTitle: string;
  resultsScore: string;
  resultsCompatibility: string;
  resultsKeywordsFound: string;
  resultsKeywordsMissing: string;
  resultsFeedback: string;
  resultsOptimizedSummary: string;
  resultsDownloadPDF: string;
  
  // Pricing
  pricingTitle: string;
  pricingSubtitle: string;
  pricingBasicTitle: string;
  pricingBasicPrice: string;
  pricingBasicCredits: string;
  pricingBasicPerCV: string;
  pricingBasicButton: string;
  pricingPopularTitle: string;
  pricingPopularPrice: string;
  pricingPopularCredits: string;
  pricingPopularPerCV: string;
  pricingPopularButton: string;
  pricingPopularBadge: string;
  pricingProTitle: string;
  pricingProPrice: string;
  pricingProCredits: string;
  pricingProPerCV: string;
  pricingProButton: string;
  
  // Wizard Steps
  wizardStep1Title: string;
  wizardStep2Title: string;
  wizardStep3Title: string;
  wizardStep4Title: string;
  wizardStep5Title: string;
  wizardStep6Title: string;
  wizardStep7Title: string;
  
  // Form Fields
  formFullName: string;
  formEmail: string;
  formPhone: string;
  formLocation: string;
  formLinkedIn: string;
  formPortfolio: string;
  formSummary: string;
  formPosition: string;
  formCompany: string;
  formStartDate: string;
  formEndDate: string;
  formCurrentJob: string;
  formDescription: string;
  formDegree: string;
  formInstitution: string;
  formCurrentlyStudying: string;
  formSkills: string;
  formJobDescription: string;
  formTemplate: string;
  
  // Buttons
  btnNext: string;
  btnBack: string;
  btnCancel: string;
  btnGenerate: string;
  btnAdd: string;
  btnRemove: string;
  btnBuy: string;
  btnConfirm: string;
  
  // Validations
  validationRequired: string;
  validationEmail: string;
  validationPhone: string;
  validationMinWords: string;
  validationMinSkills: string;
  
  // Footer
  footerDescription: string;
  footerProduct: string;
  footerLegal: string;
  footerScanner: string;
  footerGenerator: string;
  footerPricing: string;
  footerLogin: string;
  footerTerms: string;
  footerPrivacy: string;
  footerLGPD: string;
  footerCompliance: string;
  footerSupport: string;
  footerRights: string;
}

export const translations: Record<Language, Translations> = {
  'pt-BR': {
    // Navbar
    navHome: 'Início',
    navCreateCV: 'Criar CV',
    navHistory: 'Histórico',
    navPricing: 'Preços',
    navCredits: 'créditos',
    
    // Hero
    heroMonthlyBadge: '+15.000 currículos gerados este mês',
    heroTitle: 'Seu Currículo Ignorado Nunca Mais.',
    heroSubtitle: 'Nossa IA reescreve seu CV para cada vaga específica, usando as palavras-chave exatas que os robôs (ATS) e recrutadores buscam.',
    heroTestCV: 'Testar meu CV atual',
    heroGenerateCV: 'Gerar CV Otimizado',
    
    // How It Works
    howItWorksTitle: 'Como Funciona',
    howItWorksStep1Title: '1. Cole seu CV e a vaga',
    howItWorksStep1Desc: 'Nossa IA analisa seu currículo atual e a descrição da vaga desejada',
    howItWorksStep2Title: '2. IA analisa e otimiza',
    howItWorksStep2Desc: 'Identificamos gaps, palavras-chave e reescrevemos para maximizar compatibilidade',
    howItWorksStep3Title: '3. Receba seu CV perfeito',
    howItWorksStep3Desc: 'Baixe em PDF pronto para aplicar e aumentar suas chances de entrevista',
    
    // Analysis
    analysisTitle: 'Analise Seu Currículo Agora',
    analysisSubtitle: 'Descubra como seu CV está performando contra sistemas ATS',
    analysisCVLabel: 'Seu Currículo Atual',
    analysisCVPlaceholder: 'Cole aqui todo o conteúdo do seu currículo atual...',
    analysisJobLabel: 'Descrição da Vaga Desejada',
    analysisJobPlaceholder: 'Cole aqui a descrição completa da vaga...',
    analysisButton: 'Analisar Meu Currículo',
    analysisCreditsAvailable: 'créditos disponíveis',
    analysisNoCredits: 'Você não tem créditos suficientes.',
    analysisBuyCredits: 'Comprar créditos',
    
    // Results
    resultsTitle: 'Resultado da Análise',
    resultsScore: 'Pontuação ATS',
    resultsCompatibility: 'Compatibilidade',
    resultsKeywordsFound: 'Palavras-chave Encontradas',
    resultsKeywordsMissing: 'Palavras-chave Faltantes',
    resultsFeedback: 'Feedback e Sugestões',
    resultsOptimizedSummary: 'Resumo Otimizado',
    resultsDownloadPDF: 'Baixar Relatório em PDF',
    
    // Pricing
    pricingTitle: 'Investimento Único',
    pricingSubtitle: 'Sem mensalidade. Pague apenas pelos créditos que usar.',
    pricingBasicTitle: 'Básico',
    pricingBasicPrice: 'R$ 4,90',
    pricingBasicCredits: '1 crédito',
    pricingBasicPerCV: 'R$ 4,90 por CV',
    pricingBasicButton: 'Começar',
    pricingPopularTitle: 'Popular',
    pricingPopularPrice: 'R$ 12,90',
    pricingPopularCredits: '5 créditos',
    pricingPopularPerCV: 'R$ 2,58 por CV',
    pricingPopularButton: 'Escolher',
    pricingPopularBadge: 'MAIS VENDIDO',
    pricingProTitle: 'Pro',
    pricingProPrice: 'R$ 19,90',
    pricingProCredits: '10 créditos',
    pricingProPerCV: 'R$ 1,99 por CV',
    pricingProButton: 'Escolher',
    
    // Wizard
    wizardStep1Title: 'Informações Pessoais',
    wizardStep2Title: 'Experiência',
    wizardStep3Title: 'Formação',
    wizardStep4Title: 'Habilidades',
    wizardStep5Title: 'Vaga Desejada',
    wizardStep6Title: 'Template',
    wizardStep7Title: 'Revisão',
    
    // Form Fields
    formFullName: 'Nome Completo',
    formEmail: 'Email',
    formPhone: 'Telefone',
    formLocation: 'Localização',
    formLinkedIn: 'LinkedIn',
    formPortfolio: 'Portfolio',
    formSummary: 'Resumo Profissional',
    formPosition: 'Cargo',
    formCompany: 'Empresa',
    formStartDate: 'Data de Início',
    formEndDate: 'Data de Término',
    formCurrentJob: 'Trabalho atual',
    formDescription: 'Descrição',
    formDegree: 'Curso',
    formInstitution: 'Instituição',
    formCurrentlyStudying: 'Estudando atualmente',
    formSkills: 'Habilidades',
    formJobDescription: 'Descrição da Vaga',
    formTemplate: 'Template',
    
    // Buttons
    btnNext: 'Próximo',
    btnBack: 'Voltar',
    btnCancel: 'Cancelar',
    btnGenerate: 'Gerar Currículo',
    btnAdd: 'Adicionar',
    btnRemove: 'Remover',
    btnBuy: 'Comprar',
    btnConfirm: 'Confirmar',
    
    // Validations
    validationRequired: 'Este campo é obrigatório',
    validationEmail: 'Digite um email válido',
    validationPhone: 'Use o formato: (11) 99999-9999',
    validationMinWords: 'Mínimo de 50 palavras',
    validationMinSkills: 'Adicione pelo menos 3 habilidades',
    
    // Footer
    footerDescription: 'Ajudamos profissionais a conseguirem mais entrevistas através de tecnologia inteligente de otimização de currículos. Pare de ser ignorado.',
    footerProduct: 'Produto',
    footerLegal: 'Legal',
    footerScanner: 'Scanner ATS',
    footerGenerator: 'Gerador de CV',
    footerPricing: 'Preços',
    footerLogin: 'Login',
    footerTerms: 'Termos de Uso',
    footerPrivacy: 'Privacidade',
    footerLGPD: 'LGPD',
    footerCompliance: 'Compliance',
    footerSupport: 'Suporte',
    footerRights: '© 2025 AIResume. Todos os direitos reservados.',
  },
  
  'en-US': {
    // Navbar
    navHome: 'Home',
    navCreateCV: 'Create CV',
    navHistory: 'History',
    navPricing: 'Pricing',
    navCredits: 'credits',
    
    // Hero
    heroMonthlyBadge: '+15,000 resumes generated this month',
    heroTitle: 'Your Resume Ignored Never Again.',
    heroSubtitle: 'Our AI rewrites your CV for each specific job, using the exact keywords that robots (ATS) and recruiters search for.',
    heroTestCV: 'Test my current CV',
    heroGenerateCV: 'Generate Optimized CV',
    
    // How It Works
    howItWorksTitle: 'How It Works',
    howItWorksStep1Title: '1. Paste your CV and job',
    howItWorksStep1Desc: 'Our AI analyzes your current resume and the desired job description',
    howItWorksStep2Title: '2. AI analyzes and optimizes',
    howItWorksStep2Desc: 'We identify gaps, keywords and rewrite to maximize compatibility',
    howItWorksStep3Title: '3. Get your perfect CV',
    howItWorksStep3Desc: 'Download in PDF ready to apply and increase your interview chances',
    
    // Analysis
    analysisTitle: 'Analyze Your Resume Now',
    analysisSubtitle: 'Discover how your CV is performing against ATS systems',
    analysisCVLabel: 'Your Current Resume',
    analysisCVPlaceholder: 'Paste here all the content of your current resume...',
    analysisJobLabel: 'Desired Job Description',
    analysisJobPlaceholder: 'Paste here the complete job description...',
    analysisButton: 'Analyze My Resume',
    analysisCreditsAvailable: 'credits available',
    analysisNoCredits: 'You don\'t have enough credits.',
    analysisBuyCredits: 'Buy credits',
    
    // Results
    resultsTitle: 'Analysis Result',
    resultsScore: 'ATS Score',
    resultsCompatibility: 'Compatibility',
    resultsKeywordsFound: 'Keywords Found',
    resultsKeywordsMissing: 'Missing Keywords',
    resultsFeedback: 'Feedback and Suggestions',
    resultsOptimizedSummary: 'Optimized Summary',
    resultsDownloadPDF: 'Download PDF Report',
    
    // Pricing
    pricingTitle: 'One-Time Investment',
    pricingSubtitle: 'No monthly fee. Pay only for the credits you use.',
    pricingBasicTitle: 'Basic',
    pricingBasicPrice: '$0.99',
    pricingBasicCredits: '1 credit',
    pricingBasicPerCV: '$0.99 per CV',
    pricingBasicButton: 'Start',
    pricingPopularTitle: 'Popular',
    pricingPopularPrice: '$2.59',
    pricingPopularCredits: '5 credits',
    pricingPopularPerCV: '$0.52 per CV',
    pricingPopularButton: 'Choose',
    pricingPopularBadge: 'BEST SELLER',
    pricingProTitle: 'Pro',
    pricingProPrice: '$3.99',
    pricingProCredits: '10 credits',
    pricingProPerCV: '$0.40 per CV',
    pricingProButton: 'Choose',
    
    // Wizard
    wizardStep1Title: 'Personal Information',
    wizardStep2Title: 'Experience',
    wizardStep3Title: 'Education',
    wizardStep4Title: 'Skills',
    wizardStep5Title: 'Target Job',
    wizardStep6Title: 'Template',
    wizardStep7Title: 'Review',
    
    // Form Fields
    formFullName: 'Full Name',
    formEmail: 'Email',
    formPhone: 'Phone',
    formLocation: 'Location',
    formLinkedIn: 'LinkedIn',
    formPortfolio: 'Portfolio',
    formSummary: 'Professional Summary',
    formPosition: 'Position',
    formCompany: 'Company',
    formStartDate: 'Start Date',
    formEndDate: 'End Date',
    formCurrentJob: 'Current job',
    formDescription: 'Description',
    formDegree: 'Degree',
    formInstitution: 'Institution',
    formCurrentlyStudying: 'Currently studying',
    formSkills: 'Skills',
    formJobDescription: 'Job Description',
    formTemplate: 'Template',
    
    // Buttons
    btnNext: 'Next',
    btnBack: 'Back',
    btnCancel: 'Cancel',
    btnGenerate: 'Generate Resume',
    btnAdd: 'Add',
    btnRemove: 'Remove',
    btnBuy: 'Buy',
    btnConfirm: 'Confirm',
    
    // Validations
    validationRequired: 'This field is required',
    validationEmail: 'Enter a valid email',
    validationPhone: 'Use format: (11) 99999-9999',
    validationMinWords: 'Minimum 50 words',
    validationMinSkills: 'Add at least 3 skills',
    
    // Footer
    footerDescription: 'We help professionals get more interviews through intelligent resume optimization technology. Stop being ignored.',
    footerProduct: 'Product',
    footerLegal: 'Legal',
    footerScanner: 'ATS Scanner',
    footerGenerator: 'CV Generator',
    footerPricing: 'Pricing',
    footerLogin: 'Login',
    footerTerms: 'Terms of Use',
    footerPrivacy: 'Privacy',
    footerLGPD: 'GDPR',
    footerCompliance: 'Compliance',
    footerSupport: 'Support',
    footerRights: '© 2025 AIResume. All rights reserved.',
  },
  
  'es-ES': {
    // Navbar
    navHome: 'Inicio',
    navCreateCV: 'Crear CV',
    navHistory: 'Historial',
    navPricing: 'Precios',
    navCredits: 'créditos',
    
    // Hero
    heroMonthlyBadge: '+15.000 currículums generados este mes',
    heroTitle: 'Tu Currículum Ignorado Nunca Más.',
    heroSubtitle: 'Nuestra IA reescribe tu CV para cada vacante específica, usando las palabras clave exactas que los robots (ATS) y reclutadores buscan.',
    heroTestCV: 'Probar mi CV actual',
    heroGenerateCV: 'Generar CV Optimizado',
    
    // How It Works
    howItWorksTitle: 'Cómo Funciona',
    howItWorksStep1Title: '1. Pega tu CV y la vacante',
    howItWorksStep1Desc: 'Nuestra IA analiza tu currículum actual y la descripción de la vacante deseada',
    howItWorksStep2Title: '2. IA analiza y optimiza',
    howItWorksStep2Desc: 'Identificamos brechas, palabras clave y reescribimos para maximizar compatibilidad',
    howItWorksStep3Title: '3. Recibe tu CV perfecto',
    howItWorksStep3Desc: 'Descarga en PDF listo para aplicar y aumentar tus posibilidades de entrevista',
    
    // Analysis
    analysisTitle: 'Analiza Tu Currículum Ahora',
    analysisSubtitle: 'Descubre cómo está funcionando tu CV contra sistemas ATS',
    analysisCVLabel: 'Tu Currículum Actual',
    analysisCVPlaceholder: 'Pega aquí todo el contenido de tu currículum actual...',
    analysisJobLabel: 'Descripción de la Vacante Deseada',
    analysisJobPlaceholder: 'Pega aquí la descripción completa de la vacante...',
    analysisButton: 'Analizar Mi Currículum',
    analysisCreditsAvailable: 'créditos disponibles',
    analysisNoCredits: 'No tienes créditos suficientes.',
    analysisBuyCredits: 'Comprar créditos',
    
    // Results
    resultsTitle: 'Resultado del Análisis',
    resultsScore: 'Puntuación ATS',
    resultsCompatibility: 'Compatibilidad',
    resultsKeywordsFound: 'Palabras Clave Encontradas',
    resultsKeywordsMissing: 'Palabras Clave Faltantes',
    resultsFeedback: 'Retroalimentación y Sugerencias',
    resultsOptimizedSummary: 'Resumen Optimizado',
    resultsDownloadPDF: 'Descargar Informe en PDF',
    
    // Pricing
    pricingTitle: 'Inversión Única',
    pricingSubtitle: 'Sin mensualidad. Paga solo por los créditos que uses.',
    pricingBasicTitle: 'Básico',
    pricingBasicPrice: '€0,99',
    pricingBasicCredits: '1 crédito',
    pricingBasicPerCV: '€0,99 por CV',
    pricingBasicButton: 'Comenzar',
    pricingPopularTitle: 'Popular',
    pricingPopularPrice: '€2,59',
    pricingPopularCredits: '5 créditos',
    pricingPopularPerCV: '€0,52 por CV',
    pricingPopularButton: 'Elegir',
    pricingPopularBadge: 'MÁS VENDIDO',
    pricingProTitle: 'Pro',
    pricingProPrice: '€3,99',
    pricingProCredits: '10 créditos',
    pricingProPerCV: '€0,40 por CV',
    pricingProButton: 'Elegir',
    
    // Wizard
    wizardStep1Title: 'Información Personal',
    wizardStep2Title: 'Experiencia',
    wizardStep3Title: 'Formación',
    wizardStep4Title: 'Habilidades',
    wizardStep5Title: 'Vacante Deseada',
    wizardStep6Title: 'Plantilla',
    wizardStep7Title: 'Revisión',
    
    // Form Fields
    formFullName: 'Nombre Completo',
    formEmail: 'Email',
    formPhone: 'Teléfono',
    formLocation: 'Ubicación',
    formLinkedIn: 'LinkedIn',
    formPortfolio: 'Portfolio',
    formSummary: 'Resumen Profesional',
    formPosition: 'Cargo',
    formCompany: 'Empresa',
    formStartDate: 'Fecha de Inicio',
    formEndDate: 'Fecha de Término',
    formCurrentJob: 'Trabajo actual',
    formDescription: 'Descripción',
    formDegree: 'Curso',
    formInstitution: 'Institución',
    formCurrentlyStudying: 'Estudiando actualmente',
    formSkills: 'Habilidades',
    formJobDescription: 'Descripción de la Vacante',
    formTemplate: 'Plantilla',
    
    // Buttons
    btnNext: 'Siguiente',
    btnBack: 'Volver',
    btnCancel: 'Cancelar',
    btnGenerate: 'Generar Currículum',
    btnAdd: 'Añadir',
    btnRemove: 'Eliminar',
    btnBuy: 'Comprar',
    btnConfirm: 'Confirmar',
    
    // Validations
    validationRequired: 'Este campo es obligatorio',
    validationEmail: 'Ingresa un email válido',
    validationPhone: 'Usa el formato: (11) 99999-9999',
    validationMinWords: 'Mínimo 50 palabras',
    validationMinSkills: 'Añade al menos 3 habilidades',
    
    // Footer
    footerDescription: 'Ayudamos a profesionales a conseguir más entrevistas a través de tecnología inteligente de optimización de currículums. Deja de ser ignorado.',
    footerProduct: 'Producto',
    footerLegal: 'Legal',
    footerScanner: 'Escáner ATS',
    footerGenerator: 'Generador de CV',
    footerPricing: 'Precios',
    footerLogin: 'Iniciar Sesión',
    footerTerms: 'Términos de Uso',
    footerPrivacy: 'Privacidad',
    footerLGPD: 'RGPD',
    footerCompliance: 'Cumplimiento',
    footerSupport: 'Soporte',
    footerRights: '© 2025 AIResume. Todos los derechos reservados.',
  },
};

export const detectLanguage = (): Language => {
  // Try to get from localStorage first
  const saved = localStorage.getItem('airesume-language') as Language;
  if (saved && translations[saved]) return saved;
  
  // Detect from browser
  const browserLang = navigator.language;
  
  if (browserLang.startsWith('pt')) return 'pt-BR';
  if (browserLang.startsWith('es')) return 'es-ES';
  return 'en-US'; // default
};

export const saveLanguage = (lang: Language) => {
  localStorage.setItem('airesume-language', lang);
};
