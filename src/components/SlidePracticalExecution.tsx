import React from 'react';
import { motion } from 'motion/react';
import { Sliders, CheckSquare, Tablet, ShieldCheck, ArrowRight } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlidePracticalExecution: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Definição dos Critérios de Amostragem',
      desc: 'Identificação das variáveis demográficas fundamentais para o objeto da investigação (ex.: Sexo, Idade, Renda, Escolaridade e Região Geográfica), alinhadas aos parâmetros censitários oficiais do IBGE ou TSE.',
      icon: <Sliders className="w-4 h-4 text-[#d4af37]" />,
      color: 'border-[#d4af37]/30 bg-[#d4af37]/5 text-[#d4af37]',
      focus: 'Relevância e Parâmetro Oficial',
    },
    {
      num: '02',
      title: 'Seleção de Categorias de Cotas',
      desc: 'Construção de divisões claras, mutuamente exclusivas e coletivamente exaustivas. Cada indivíduo da população deve pertencer a uma e apenas uma célula demográfica (sem sobreposições ou lacunas).',
      icon: <CheckSquare className="w-4 h-4 text-blue-400" />,
      color: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
      focus: 'Exclusividade & Exaustividade',
    },
    {
      num: '03',
      title: 'Processo de Coleta em Campo (CAPI)',
      desc: 'Abordagem ativa nos pontos de fluxo ou visitas domiciliares. O preenchimento das metas numéricas é monitorado em tempo real via tablets ou smartphones (CAPI), com travas automáticas assim que a cota satura.',
      icon: <Tablet className="w-4 h-4 text-emerald-400" />,
      color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400',
      focus: 'Controle em Tempo Real',
    },
    {
      num: '04',
      title: 'Medidas de Monitoramento & Auditoria',
      desc: 'Auditoria contínua de no mínimo 10% a 20% de todas as entrevistas realizadas. Controle de integridade com checagem de coordenadas por GPS, gravação de áudio de verificação e checagem cruzada.',
      icon: <ShieldCheck className="w-4 h-4 text-purple-400" />,
      color: 'border-purple-500/30 bg-purple-500/5 text-purple-400',
      focus: 'Auditoria Rigorosa (10% a 20%)',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-2 sm:py-3 space-y-3.5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-2.5 flex flex-col sm:flex-row sm:items-end justify-between gap-2"
      >
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#d4af37] uppercase tracking-[0.2em]">
            <span>Seção 06</span>
            <span className="text-white/20">/</span>
            <span>Metodologia Operacional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Como Realizar a Amostragem por Cotas na Prática" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO IV · AS 4 ETAPAS SEQUENCIAIS (APPINIO 2026)
        </div>
      </motion.div>

      {/* 4 Sequential Steps Flow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
        {steps.map((st, idx) => (
          <motion.div
            key={st.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.09 * idx }}
            className={`bg-[#121418] p-4 rounded-xl border ${st.color.split(' ')[0]} shadow-lg flex flex-col justify-between hover:border-white/30 transition-all`}
          >
            <div>
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-mono font-bold text-white/30">
                  {st.num}
                </span>
                <div className="p-1 rounded bg-black/40">
                  {st.icon}
                </div>
              </div>

              <h3 className="text-xs sm:text-sm font-editorial-serif font-bold text-white mb-1.5 leading-snug">
                {st.title}
              </h3>

              <p className="text-[11px] text-white/70 font-light leading-relaxed mb-3">
                {st.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between">
              <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded font-semibold ${st.color.split(' ')[1]} ${st.color.split(' ')[2]}`}>
                {st.focus}
              </span>
              {idx < 3 && (
                <ArrowRight className="w-3 h-3 text-white/30 hidden lg:block" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Operational Protocol Note */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="p-3 bg-white/[0.02] border border-white/10 rounded-xl flex items-center justify-between text-xs text-white/80"
      >
        <span className="font-light">
          <strong>Padronização de Campo:</strong> O software CAPI trava instantaneamente abordagens a perfis com quotas preenchidas, redirecionando o entrevistador para as células ainda deficitárias.
        </span>
        <span className="text-[#d4af37] font-mono text-[11px] shrink-0 ml-4">
          Conformidade WAPOR / AAPOR
        </span>
      </motion.div>
    </div>
  );
};
