# AIResume - Otimizador de Currículos com IA

<div align="center">

![AIResume Logo](https://img.shields.io/badge/AIResume-CV%20Optimizer-blue?style=for-the-badge)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Google Gemini](https://img.shields.io/badge/Google-Gemini%20AI-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev/)

**Transforme seu currículo com Inteligência Artificial. Otimize para ATS. Consiga mais entrevistas.**

[🌍 Multi-idioma](#-internacionalização) | [🔒 Compliance](#-compliance) | [✨ Features](#-features)

</div>

---

## 🎯 Sobre o Projeto

**AIResume** é uma plataforma SaaS de otimização de currículos que utiliza **Google Gemini AI** para analisar, pontuar e reescrever CVs para vagas específicas. O sistema identifica palavras-chave relevantes, analisa compatibilidade com ATS (Applicant Tracking Systems) e fornece feedback acionável.

### 🎨 Principais Diferenciais

- ✨ **Análise ATS**: Pontuação de 0-100 baseada em compatibilidade com sistemas de rastreamento
- 🎯 **Otimização Inteligente**: IA reescreve seções do CV para maximizar chances
- 📊 **Visualização de Dados**: Gráficos interativos com Recharts
- 📄 **Geração de PDF**: Download de relatórios profissionais
- 🌐 **Multi-idioma**: Suporte a Português, Inglês e Espanhol
- 💳 **Sistema de Créditos**: Modelo de pagamento flexível por uso
- 📜 **Histórico**: Acesso a análises anteriores
- 🔒 **Compliance Total**: LGPD, GDPR e CCPA

---

## ✨ Features

### Fase 1 - MVP ✅
- [x] Interface moderna e responsiva
- [x] Integração com Google Gemini AI
- [x] Análise de compatibilidade ATS
- [x] Identificação de palavras-chave
- [x] Feedback e sugestões

### Fase 2 - Sistema de Créditos ✅
- [x] 3 créditos gratuitos iniciais
- [x] Sistema de compra de créditos
- [x] Histórico de análises (LocalStorage)
- [x] Contador de créditos na navbar

### Fase 3 - Wizard Multi-Step ✅
- [x] 7 etapas de criação de CV
- [x] Validação por etapa
- [x] Formulários dinâmicos (experiências, educação, skills)
- [x] Seleção de templates
- [x] Integração com análise Gemini

### Fase 4 - Geração de PDF ✅
- [x] Biblioteca jsPDF integrada
- [x] Relatórios formatados profissionalmente
- [x] Download com um clique
- [x] Seções customizadas (score, keywords, feedback)

### Fase 5 - Pagamentos ✅
- [x] 3 planos de créditos (Básico, Popular, Pro)
- [x] Interface de pricing
- [x] Simulação de compra
- [x] Persistência de saldo

### Fase 6 - Internacionalização ✅
- [x] Sistema i18n completo
- [x] Traduções: PT-BR, EN-US, ES-ES
- [x] Detecção automática de idioma
- [x] Seletor de idioma na navbar
- [x] Persistência de preferência

### Fase 7 - Compliance Legal ✅
- [x] Página de Termos de Uso
- [x] Política de Privacidade (LGPD/GDPR/CCPA)
- [x] Página dedicada LGPD
- [x] Página de Compliance
- [x] Links no footer

---

## 🛠️ Tecnologias

### Core
- **React 19.2.4** - Framework UI
- **TypeScript 5.8.2** - Tipagem estática
- **Vite 6.2.0** - Build tool & HMR

### IA & APIs
- **Google Generative AI** - Gemini Flash 3 Preview
- **@google/generative-ai** - SDK oficial

### UI & Styling
- **TailwindCSS** - Utility-first CSS
- **Recharts 3.7.0** - Gráficos e visualizações

### Utilities
- **jsPDF 2.x** - Geração de PDFs
- **LocalStorage API** - Persistência client-side

---

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Git

### Clone o Repositório
```bash
git clone https://github.com/ybngf/airesume.git
cd airesume
```

### Instale Dependências
```bash
npm install
```

### Configure Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz:

```env
VITE_GEMINI_API_KEY=sua_chave_api_aqui
```

> 🔑 **Obter chave API**: https://ai.google.dev/

---

## 💻 Uso

### Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### Build de Produção
```bash
npm run build
```

### Preview de Produção
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

---

## 🌍 Internacionalização

O AIResume suporta 3 idiomas:

| Idioma | Código | Status |
|--------|--------|--------|
| 🇧🇷 Português (Brasil) | `pt-BR` | ✅ Completo |
| 🇺🇸 English (US) | `en-US` | ✅ Completo |
| 🇪🇸 Español | `es-ES` | ✅ Completo |

### Detecção Automática
- **Navegador**: Detecta `navigator.language`
- **LocalStorage**: Persiste preferência do usuário
- **Fallback**: EN-US por padrão

### Usar Traduções em Componentes
```typescript
import { useLanguage } from './i18n/LanguageContext';

function MyComponent() {
  const { t, setLanguage } = useLanguage();
  
  return <h1>{t.heroTitle}</h1>;
}
```

---

## 🔒 Compliance

### Legislações Atendidas

#### 🇧🇷 Brasil - LGPD
- Lei Geral de Proteção de Dados (Lei 13.709/2018)
- DPO designado
- Direitos dos titulares implementados
- Relatório de Impacto (RIPD)

#### 🇪🇺 União Europeia - GDPR
- General Data Protection Regulation (EU 2016/679)
- Privacy by Design/Default
- Data Protection Impact Assessment (DPIA)
- Right to be Forgotten

#### 🇺🇸 EUA - CCPA/CPRA
- California Consumer Privacy Act
- Right to Know, Delete, Opt-Out
- "Do Not Sell My Info" compliance

### Contatos Compliance
- **DPO**: dpo@airesume.com.br
- **Privacy**: privacy@airesume.com.br
- **Legal**: legal@airesume.com.br

---

## 📁 Estrutura do Projeto

```
airesume_2/
├── components/
│   ├── CVWizard.tsx          # Wizard 7 etapas
│   ├── HistoryView.tsx        # Histórico de análises
│   ├── LanguageSelector.tsx   # Seletor de idiomas
│   ├── Navbar.tsx             # Barra de navegação
│   ├── ResultView.tsx         # Exibição de resultados
│   └── legal/
│       ├── Compliance.tsx     # Página de compliance
│       ├── LGPD.tsx           # Página LGPD
│       ├── PrivacyPolicy.tsx  # Política de privacidade
│       └── TermsOfUse.tsx     # Termos de uso
├── i18n/
│   ├── LanguageContext.tsx    # Context API para i18n
│   └── translations.ts        # Traduções PT/EN/ES
├── services/
│   ├── creditsService.ts      # Gestão de créditos
│   ├── geminiService.ts       # Integração Gemini AI
│   └── pdfService.ts          # Geração de PDFs
├── App.tsx                    # Componente principal
├── types.ts                   # Definições TypeScript
├── index.tsx                  # Entry point
└── vite.config.ts             # Configuração Vite
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie sua branch de feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova feature incrível'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

### Padrões de Commit
- `Add:` Nova funcionalidade
- `Fix:` Correção de bug
- `Update:` Atualização de código existente
- `Docs:` Documentação
- `Style:` Formatação
- `Refactor:` Refatoração

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

**Desenvolvido por**: AIResume Team

- GitHub: [@ybngf](https://github.com/ybngf)
- Email: contato@airesume.com.br

---

## 🙏 Agradecimentos

- [Google Gemini](https://ai.google.dev/) - API de IA generativa
- [React Team](https://react.dev/) - Framework incrível
- [Vite](https://vitejs.dev/) - Build tool ultra-rápido
- [TailwindCSS](https://tailwindcss.com/) - CSS utility-first

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

[![GitHub stars](https://img.shields.io/github/stars/ybngf/airesume?style=social)](https://github.com/ybngf/airesume/stargazers)

</div>
