import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Termos de Uso / Terms of Use</h1>
        
        <div className="space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-4">
              Ao acessar e usar o AIResume, você concorda com estes Termos de Uso. Se você não concordar com 
              qualquer parte destes termos, não utilize nossa plataforma.
            </p>
            <p className="text-sm italic">
              By accessing and using AIResume, you agree to these Terms of Use. If you do not agree with any 
              part of these terms, please do not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Descrição do Serviço</h2>
            <p className="mb-4">
              O AIResume é uma plataforma de otimização de currículos que utiliza Inteligência Artificial 
              para analisar, otimizar e gerar currículos personalizados para vagas específicas.
            </p>
            <p className="text-sm italic mb-4">
              AIResume is a resume optimization platform that uses Artificial Intelligence to analyze, 
              optimize and generate personalized resumes for specific job positions.
            </p>
            
            <h3 className="font-bold text-lg mb-2">2.1 Serviços Oferecidos:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Análise de compatibilidade ATS (Applicant Tracking System)</li>
              <li>Identificação de palavras-chave relevantes</li>
              <li>Geração de currículos otimizados</li>
              <li>Download de relatórios em PDF</li>
              <li>Histórico de análises</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Sistema de Créditos</h2>
            <p className="mb-4">
              <strong>3.1 Compra de Créditos:</strong> Os créditos são vendidos em pacotes e podem ser 
              utilizados para gerar análises e currículos otimizados. Cada análise consome 1 crédito.
            </p>
            <p className="mb-4">
              <strong>3.2 Validade:</strong> Os créditos não possuem prazo de validade e permanecem 
              disponíveis enquanto sua conta estiver ativa.
            </p>
            <p className="mb-4">
              <strong>3.3 Não Reembolsável:</strong> Créditos comprados não são reembolsáveis, exceto 
              conforme exigido por lei.
            </p>
            <p className="text-sm italic">
              Credits purchased are non-refundable, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Uso Aceitável</h2>
            <p className="mb-2">Você concorda em NÃO:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Usar o serviço para fins ilegais ou não autorizados</li>
              <li>Tentar acessar áreas não autorizadas do sistema</li>
              <li>Fazer engenharia reversa ou copiar nossa tecnologia</li>
              <li>Sobrecarregar nossos servidores com uso excessivo</li>
              <li>Revender ou redistribuir nossos serviços sem autorização</li>
              <li>Fornecer informações falsas ou enganosas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Propriedade Intelectual</h2>
            <p className="mb-4">
              <strong>5.1 Seus Dados:</strong> Você mantém todos os direitos sobre os currículos e informações 
              que fornece. Nós utilizamos seus dados apenas para fornecer o serviço solicitado.
            </p>
            <p className="mb-4">
              <strong>5.2 Nossa Plataforma:</strong> Todo o código, design, algoritmos e tecnologia do AIResume 
              são propriedade exclusiva nossa e protegidos por leis de direitos autorais.
            </p>
            <p className="text-sm italic">
              All code, design, algorithms and technology of AIResume are our exclusive property and 
              protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitação de Responsabilidade</h2>
            <p className="mb-4">
              O AIResume é uma ferramenta de auxílio e não garante contratação ou entrevistas. Os resultados 
              dependem de múltiplos fatores fora do nosso controle.
            </p>
            <p className="mb-4">
              <strong>6.1 Isenção de Garantias:</strong> O serviço é fornecido "como está" sem garantias 
              de qualquer tipo, expressas ou implícitas.
            </p>
            <p className="mb-4">
              <strong>6.2 Limitação de Danos:</strong> Em nenhuma circunstância seremos responsáveis por 
              danos indiretos, incidentais, especiais ou consequenciais.
            </p>
            <p className="text-sm italic">
              The service is provided "as is" without warranties of any kind, express or implied.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Modificações do Serviço</h2>
            <p className="mb-4">
              Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte do serviço 
              a qualquer momento, com ou sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Lei Aplicável</h2>
            <p className="mb-4">
              <strong>Brasil:</strong> Estes termos são regidos pelas leis brasileiras, incluindo o 
              Código de Defesa do Consumidor (CDC) e Marco Civil da Internet.
            </p>
            <p className="mb-4">
              <strong>União Europeia:</strong> Conformidade com GDPR (General Data Protection Regulation) 
              para usuários europeus.
            </p>
            <p className="mb-4">
              <strong>Estados Unidos:</strong> Conformidade com FTC (Federal Trade Commission) e leis 
              estaduais aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contato</h2>
            <p className="mb-2">
              Para dúvidas sobre estes termos, entre em contato:
            </p>
            <p className="font-medium">
              Email: legal@airesume.com.br<br />
              Última atualização: 29 de janeiro de 2025
            </p>
          </section>

          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Nota:</strong> Ao continuar usando o AIResume, você confirma que leu, entendeu e 
              concordou com estes Termos de Uso. / By continuing to use AIResume, you confirm that you 
              have read, understood and agreed to these Terms of Use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
