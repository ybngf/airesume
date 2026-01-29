import React from 'react';

const LGPD: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">LGPD - Lei Geral de Proteção de Dados</h1>
        
        <div className="space-y-8 text-slate-700">
          <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Lei nº 13.709/2018</h2>
            <p className="text-blue-800">
              O AIResume está em total conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD), 
              garantindo transparência e segurança no tratamento de dados pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Base Legal para Tratamento de Dados</h2>
            <p className="mb-4">
              Tratamos seus dados pessoais com base nas seguintes hipóteses legais (Art. 7º LGPD):
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li><strong>Execução de Contrato (Art. 7º, V):</strong> Para fornecer os serviços de otimização 
              de currículos que você contratou</li>
              <li><strong>Legítimo Interesse (Art. 7º, IX):</strong> Para melhorar nossos serviços, prevenir 
              fraudes e garantir segurança</li>
              <li><strong>Consentimento (Art. 7º, I):</strong> Para comunicações de marketing e cookies 
              não essenciais</li>
              <li><strong>Cumprimento de Obrigação Legal (Art. 7º, II):</strong> Quando exigido por lei 
              ou autoridades competentes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Princípios da LGPD Aplicados</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-bold mb-2">✓ Finalidade</h3>
                <p className="text-sm">Dados coletados apenas para propósitos específicos e informados</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-bold mb-2">✓ Adequação</h3>
                <p className="text-sm">Tratamento compatível com finalidades informadas</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-bold mb-2">✓ Necessidade</h3>
                <p className="text-sm">Coleta limitada ao mínimo necessário</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-bold mb-2">✓ Livre Acesso</h3>
                <p className="text-sm">Você pode consultar seus dados a qualquer momento</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-bold mb-2">✓ Transparência</h3>
                <p className="text-sm">Informações claras sobre tratamento de dados</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-bold mb-2">✓ Segurança</h3>
                <p className="text-sm">Medidas técnicas e administrativas de proteção</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Direitos dos Titulares (Art. 18)</h2>
            <p className="mb-4">Como titular de dados, você possui os seguintes direitos garantidos por lei:</p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-green-900">I. Confirmação e Acesso</h3>
                <p className="text-sm">Confirmar existência de tratamento e acessar seus dados</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-green-900">II. Correção</h3>
                <p className="text-sm">Solicitar correção de dados incompletos, inexatos ou desatualizados</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-green-900">III. Anonimização, Bloqueio ou Eliminação</h3>
                <p className="text-sm">Dados desnecessários, excessivos ou tratados em desconformidade</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-green-900">IV. Portabilidade</h3>
                <p className="text-sm">Receber dados em formato estruturado e interoperável</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-green-900">V. Eliminação</h3>
                <p className="text-sm">Deletar dados tratados com consentimento (exceto exceções legais)</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-green-900">VI. Informação sobre Compartilhamento</h3>
                <p className="text-sm">Saber com quais entidades públicas e privadas compartilhamos dados</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-green-900">VII. Não Consentimento</h3>
                <p className="text-sm">Informação sobre possibilidade de não consentir e consequências</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-green-900">VIII. Revogação do Consentimento</h3>
                <p className="text-sm">Revogar consentimento a qualquer momento</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Como Exercer Seus Direitos</h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-bold text-lg mb-3">Canal de Atendimento LGPD:</h3>
              <ul className="space-y-2">
                <li><strong>Email do DPO:</strong> dpo@airesume.com.br</li>
                <li><strong>Formulário Online:</strong> airesume.com.br/lgpd/solicitacao</li>
                <li><strong>Prazo de Resposta:</strong> Até 15 dias úteis</li>
                <li><strong>Gratuito:</strong> Primeira solicitação sem custos</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Encarregado de Dados (DPO)</h2>
            <div className="bg-slate-100 p-6 rounded-xl">
              <p className="mb-2"><strong>Nome:</strong> Encarregado de Proteção de Dados - AIResume</p>
              <p className="mb-2"><strong>Email:</strong> dpo@airesume.com.br</p>
              <p className="mb-2"><strong>Função:</strong> Aceitar reclamações e comunicações dos titulares, 
              prestar esclarecimentos e adotar providências</p>
              <p className="text-sm italic text-slate-600">
                Conforme Art. 41 da LGPD, o DPO é o canal de comunicação entre o controlador, 
                os titulares e a ANPD.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Segurança da Informação (Art. 46-49)</h2>
            <p className="mb-4">Adotamos medidas técnicas e organizacionais para proteger dados pessoais:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Criptografia de dados em trânsito (SSL/TLS) e em repouso (AES-256)</li>
              <li>Controles de acesso baseados em funções (RBAC)</li>
              <li>Monitoramento contínuo de segurança e auditorias</li>
              <li>Plano de resposta a incidentes de segurança</li>
              <li>Treinamento regular de equipe sobre LGPD</li>
              <li>Testes de penetração e avaliações de vulnerabilidade</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Incidentes de Segurança</h2>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
              <p className="mb-3">
                <strong>Compromisso:</strong> Em caso de incidente de segurança que possa acarretar risco 
                ou dano relevante aos titulares:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Comunicaremos a ANPD em prazo razoável</li>
                <li>Notificaremos os titulares afetados</li>
                <li>Descreveremos natureza dos dados afetados</li>
                <li>Informaremos medidas técnicas de proteção adotadas</li>
                <li>Detalharemos riscos relacionados ao incidente</li>
                <li>Apresentaremos motivos da demora (se houver)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Término do Tratamento</h2>
            <p className="mb-4">Eliminamos dados pessoais após término de tratamento, EXCETO:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Cumprimento de obrigação legal ou regulatória (Art. 16, I)</li>
              <li>Estudo por órgão de pesquisa (anonimizado) (Art. 16, II)</li>
              <li>Transferência a terceiro (respeitando LGPD) (Art. 16, III)</li>
              <li>Uso exclusivo do controlador (vedado acesso terceiros, anonimizado) (Art. 16, IV)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Autoridade Nacional (ANPD)</h2>
            <p className="mb-4">
              Você pode apresentar reclamações à Autoridade Nacional de Proteção de Dados (ANPD):
            </p>
            <div className="bg-slate-100 p-4 rounded-xl">
              <p><strong>Site:</strong> www.gov.br/anpd</p>
              <p><strong>Ouvidoria:</strong> Através do portal gov.br</p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border-2 border-green-300">
            <h3 className="font-bold text-lg mb-3 text-green-900">✓ Certificado de Conformidade LGPD</h3>
            <p className="text-sm text-green-800 mb-2">
              O AIResume implementa práticas de governança em privacidade e proteção de dados, 
              demonstrando comprometimento com cumprimento da LGPD.
            </p>
            <p className="text-xs text-green-700">
              Data de Conformidade: Janeiro 2025 | Próxima Auditoria: Julho 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LGPD;
