import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Privacidade / Privacy Policy</h1>
        
        <div className="space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introdução</h2>
            <p className="mb-4">
              Esta Política de Privacidade descreve como o AIResume coleta, usa, armazena e protege 
              suas informações pessoais. Estamos comprometidos com a transparência e proteção de seus dados.
            </p>
            <p className="text-sm italic">
              This Privacy Policy describes how AIResume collects, uses, stores and protects your personal 
              information. We are committed to transparency and protection of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Dados Coletados</h2>
            
            <h3 className="font-bold text-lg mb-3">2.1 Dados Fornecidos por Você:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li><strong>Informações do Currículo:</strong> Nome, email, telefone, endereço, experiência 
              profissional, formação acadêmica, habilidades</li>
              <li><strong>Informações de Pagamento:</strong> Dados de transação processados por 
              gateways de pagamento terceirizados</li>
              <li><strong>Descrições de Vagas:</strong> Textos de vagas que você analisa</li>
            </ul>

            <h3 className="font-bold text-lg mb-3">2.2 Dados Coletados Automaticamente:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Endereço IP e localização geográfica</li>
              <li>Tipo de navegador e dispositivo</li>
              <li>Páginas visitadas e tempo de permanência</li>
              <li>Cookies e tecnologias similares</li>
              <li>Histórico de uso da plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Uso dos Dados</h2>
            <p className="mb-2">Utilizamos seus dados para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li><strong>Fornecer o Serviço:</strong> Analisar e otimizar currículos usando IA</li>
              <li><strong>Processar Pagamentos:</strong> Gerenciar compras de créditos</li>
              <li><strong>Melhorar a Plataforma:</strong> Análise de uso e desenvolvimento de novos recursos</li>
              <li><strong>Comunicação:</strong> Enviar notificações sobre sua conta e atualizações</li>
              <li><strong>Suporte:</strong> Responder dúvidas e resolver problemas</li>
              <li><strong>Segurança:</strong> Prevenir fraudes e garantir integridade do sistema</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Compartilhamento de Dados</h2>
            <p className="mb-4">
              <strong>NÃO vendemos seus dados.</strong> Compartilhamos informações apenas nos seguintes casos:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li><strong>Processadores de IA:</strong> Google Gemini API para análise de currículos 
              (dados anonimizados quando possível)</li>
              <li><strong>Processadores de Pagamento:</strong> Stripe, Mercado Pago ou similares</li>
              <li><strong>Provedores de Infraestrutura:</strong> Serviços de hospedagem e armazenamento</li>
              <li><strong>Requisitos Legais:</strong> Quando exigido por lei ou ordem judicial</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Armazenamento e Segurança</h2>
            <p className="mb-4">
              <strong>5.1 Localização:</strong> Dados armazenados em servidores seguros com criptografia 
              em repouso e em trânsito (SSL/TLS).
            </p>
            <p className="mb-4">
              <strong>5.2 Retenção:</strong> Mantemos seus dados enquanto sua conta estiver ativa ou 
              conforme necessário para fornecer serviços. Histórico de análises mantido por até 12 meses.
            </p>
            <p className="mb-4">
              <strong>5.3 Medidas de Segurança:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Criptografia AES-256 para dados sensíveis</li>
              <li>Autenticação multifator disponível</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Backups regulares e redundantes</li>
              <li>Controle de acesso restrito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Seus Direitos</h2>
            
            <h3 className="font-bold text-lg mb-3">Conforme LGPD, GDPR e CCPA, você tem direito a:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li><strong>Acesso:</strong> Solicitar cópia de todos os seus dados</li>
              <li><strong>Correção:</strong> Atualizar informações incorretas</li>
              <li><strong>Exclusão:</strong> Solicitar remoção de seus dados (direito ao esquecimento)</li>
              <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
              <li><strong>Oposição:</strong> Optar por não receber comunicações de marketing</li>
              <li><strong>Restrição:</strong> Limitar o processamento de seus dados</li>
              <li><strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
            </ul>
            
            <p className="mb-4">
              <strong>Para exercer seus direitos:</strong> Entre em contato através de privacy@airesume.com.br
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Cookies e Tecnologias de Rastreamento</h2>
            <p className="mb-4">
              Utilizamos cookies para melhorar sua experiência. Você pode gerenciar preferências de 
              cookies nas configurações do seu navegador.
            </p>
            
            <h3 className="font-bold text-lg mb-3">Tipos de Cookies:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essenciais:</strong> Necessários para funcionamento básico</li>
              <li><strong>Funcionais:</strong> Lembrar preferências e idioma</li>
              <li><strong>Analíticos:</strong> Entender como você usa o site</li>
              <li><strong>Marketing:</strong> Personalizar anúncios (apenas com consentimento)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Transferências Internacionais</h2>
            <p className="mb-4">
              Seus dados podem ser transferidos e processados fora do seu país. Garantimos proteção 
              adequada através de:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Cláusulas contratuais padrão aprovadas</li>
              <li>Certificações Privacy Shield (quando aplicável)</li>
              <li>Conformidade com GDPR para transferências da UE</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Menores de Idade</h2>
            <p className="mb-4">
              Nossos serviços não são direcionados a menores de 16 anos. Se descobrirmos que coletamos 
              dados de menores sem consentimento parental, deletaremos imediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Alterações nesta Política</h2>
            <p className="mb-4">
              Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas 
              por email ou aviso na plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contato - DPO</h2>
            <p className="mb-4">
              <strong>Encarregado de Dados (DPO):</strong><br />
              Email: dpo@airesume.com.br<br />
              Email Privacidade: privacy@airesume.com.br<br />
              Prazo de Resposta: Até 15 dias úteis
            </p>
            <p className="text-sm italic">
              Response Time: Up to 15 business days
            </p>
          </section>

          <div className="mt-12 p-6 bg-green-50 rounded-xl border border-green-200">
            <p className="text-sm text-green-900">
              <strong>Certificações:</strong> AIResume está comprometido com conformidade LGPD (Brasil), 
              GDPR (União Europeia) e CCPA (Califórnia, EUA). / AIResume is committed to LGPD (Brazil), 
              GDPR (European Union) and CCPA (California, USA) compliance.
            </p>
            <p className="text-xs text-green-800 mt-2">
              Última atualização: 29 de janeiro de 2025 / Last updated: January 29, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
