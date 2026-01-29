import React from 'react';

const Compliance: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Compliance e Conformidade Legal</h1>
        
        <div className="space-y-8 text-slate-700">
          <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Compromisso Global com Proteção de Dados</h2>
            <p className="text-blue-50">
              O AIResume opera em conformidade com as principais legislações de proteção de dados 
              do mundo: LGPD (Brasil), GDPR (União Europeia) e CCPA (Califórnia, EUA).
            </p>
          </section>

          {/* BRASIL - LGPD */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl">
                🇧🇷
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Brasil - LGPD</h2>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl mb-4">
              <h3 className="font-bold text-lg mb-2">Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</h3>
              <p className="text-sm mb-3">Em vigor desde setembro de 2020</p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="font-bold mb-2">✓ Conformidades:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• DPO designado e acessível</li>
                    <li>• Base legal definida para tratamento</li>
                    <li>• Consentimento explícito quando necessário</li>
                    <li>• Direitos dos titulares implementados</li>
                    <li>• Relatório de Impacto (RIPD) realizado</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">⚖️ Supervisão:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• ANPD (Autoridade Nacional)</li>
                    <li>• Penalidades: até 2% do faturamento</li>
                    <li>• Máximo: R$ 50 milhões por infração</li>
                    <li>• Auditoria anual de compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-4 rounded-xl">
              <p className="text-sm"><strong>Legislações Complementares Aplicadas:</strong></p>
              <ul className="text-sm list-disc list-inside mt-2 space-y-1">
                <li>Código de Defesa do Consumidor (CDC - Lei 8.078/1990)</li>
                <li>Marco Civil da Internet (Lei 12.965/2014)</li>
                <li>Lei do Cadastro Positivo (Lei 12.414/2011)</li>
              </ul>
            </div>
          </section>

          {/* UNIÃO EUROPEIA - GDPR */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                🇪🇺
              </div>
              <h2 className="text-2xl font-bold text-slate-900">União Europeia - GDPR</h2>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-4">
              <h3 className="font-bold text-lg mb-2">General Data Protection Regulation (Regulation EU 2016/679)</h3>
              <p className="text-sm mb-3">Em vigor desde 25 de maio de 2018</p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="font-bold mb-2">✓ Compliance GDPR:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Privacy by Design</li>
                    <li>• Privacy by Default</li>
                    <li>• Data Protection Officer (DPO)</li>
                    <li>• Legitimate Interest Assessment (LIA)</li>
                    <li>• Data Protection Impact Assessment (DPIA)</li>
                    <li>• Transferências internacionais seguras</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">⚖️ Direitos Expandidos:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Right to be Forgotten</li>
                    <li>• Data Portability</li>
                    <li>• Right to Object</li>
                    <li>• Automated Decision Rights</li>
                    <li>• Breach Notification (72h)</li>
                    <li>• Penalidades: até €20M ou 4% faturamento</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-4 rounded-xl">
              <p className="text-sm"><strong>Mecanismos de Transferência Internacional:</strong></p>
              <ul className="text-sm list-disc list-inside mt-2 space-y-1">
                <li>Standard Contractual Clauses (SCCs) aprovadas pela Comissão Europeia</li>
                <li>Adequacy Decisions quando aplicável</li>
                <li>Binding Corporate Rules (BCRs) para grupos empresariais</li>
              </ul>
            </div>
          </section>

          {/* ESTADOS UNIDOS - CCPA/CPRA */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl">
                🇺🇸
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Estados Unidos - CCPA/CPRA</h2>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-4">
              <h3 className="font-bold text-lg mb-2">California Consumer Privacy Act & CPRA</h3>
              <p className="text-sm mb-3">CCPA desde 2020 | CPRA desde 2023</p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="font-bold mb-2">✓ Direitos dos Consumidores:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Right to Know (informação)</li>
                    <li>• Right to Delete</li>
                    <li>• Right to Opt-Out (venda de dados)</li>
                    <li>• Right to Non-Discrimination</li>
                    <li>• Right to Correct (CPRA)</li>
                    <li>• Right to Limit Use (dados sensíveis)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">⚖️ Requisitos:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• "Do Not Sell My Info" link visível</li>
                    <li>• Privacy Policy atualizada</li>
                    <li>• Verificação de identidade para requests</li>
                    <li>• Resposta em 45 dias</li>
                    <li>• Penalidades: $2,500 a $7,500 por violação</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-4 rounded-xl">
              <p className="text-sm"><strong>Outras Leis Estaduais Aplicáveis:</strong></p>
              <ul className="text-sm list-disc list-inside mt-2 space-y-1">
                <li>Virginia Consumer Data Protection Act (VCDPA)</li>
                <li>Colorado Privacy Act (CPA)</li>
                <li>Connecticut Data Privacy Act (CTDPA)</li>
                <li>Utah Consumer Privacy Act (UCPA)</li>
              </ul>
            </div>
          </section>

          {/* COMPLIANCE TÉCNICO */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Compliance Técnico e Segurança</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-300">
                <h3 className="font-bold text-lg mb-2 text-purple-900">🔒 ISO 27001</h3>
                <p className="text-sm text-purple-800">
                  Gestão de Segurança da Informação conforme padrões internacionais
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300">
                <h3 className="font-bold text-lg mb-2 text-blue-900">🛡️ SOC 2 Type II</h3>
                <p className="text-sm text-blue-800">
                  Controles de segurança, disponibilidade e confidencialidade auditados
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
                <h3 className="font-bold text-lg mb-2 text-green-900">🔐 Criptografia</h3>
                <p className="text-sm text-green-800">
                  TLS 1.3, AES-256, SHA-256 para proteção end-to-end
                </p>
              </div>
            </div>
          </section>

          {/* AUDITORIAS E CERTIFICAÇÕES */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Auditorias e Transparência</h2>
            
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-6 rounded-xl border border-slate-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3">📋 Auditorias Regulares:</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Auditoria de Segurança: Trimestral</li>
                    <li>• Revisão de Privacidade: Semestral</li>
                    <li>• Pentest Externo: Anual</li>
                    <li>• Auditoria de Compliance: Anual</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">📊 Relatórios Publicados:</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Transparency Report: Anual</li>
                    <li>• Data Breach Notifications: Imediato</li>
                    <li>• Subpoena Statistics: Semestral</li>
                    <li>• Privacy Updates: Quando necessário</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PROGRAMA DE COMPLIANCE */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Programa de Compliance AIResume</h2>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold mb-1">Governança de Dados</h3>
                  <p className="text-sm">Políticas, procedimentos e responsabilidades claramente definidos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold mb-1">Treinamento Contínuo</h3>
                  <p className="text-sm">Equipe treinada em LGPD, GDPR e CCPA com atualizações regulares</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold mb-1">Gestão de Incidentes</h3>
                  <p className="text-sm">Plano de resposta 24/7 com notificação em até 72h quando aplicável</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold mb-1">Melhoria Contínua</h3>
                  <p className="text-sm">Revisões periódicas e adaptação às mudanças regulatórias</p>
                </div>
              </div>
            </div>
          </section>

          {/* CONTATO COMPLIANCE */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contato Compliance</h2>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Equipe de Compliance e Proteção de Dados</h3>
              <div className="grid md:grid-cols-2 gap-4 text-blue-50">
                <div>
                  <p className="mb-2"><strong className="text-white">DPO (Data Protection Officer):</strong></p>
                  <p className="text-sm">dpo@airesume.com.br</p>
                </div>
                <div>
                  <p className="mb-2"><strong className="text-white">Compliance Officer:</strong></p>
                  <p className="text-sm">compliance@airesume.com.br</p>
                </div>
                <div>
                  <p className="mb-2"><strong className="text-white">Security Team:</strong></p>
                  <p className="text-sm">security@airesume.com.br</p>
                </div>
                <div>
                  <p className="mb-2"><strong className="text-white">Legal Department:</strong></p>
                  <p className="text-sm">legal@airesume.com.br</p>
                </div>
              </div>
              <p className="text-sm mt-4 text-blue-100">
                Tempo de Resposta: Até 15 dias úteis | Response Time: Up to 15 business days
              </p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl">
            <h3 className="font-bold text-xl mb-2">✓ Compromisso com Excelência em Compliance</h3>
            <p className="text-blue-50">
              O AIResume está comprometido em manter os mais altos padrões de conformidade legal e 
              proteção de dados, adaptando-se continuamente às evoluções regulatórias globais.
            </p>
            <p className="text-sm text-blue-100 mt-3">
              Última Atualização: 29 de Janeiro de 2025 | Próxima Revisão: Julho 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
