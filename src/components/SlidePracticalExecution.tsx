import React from 'react';
import { motion } from 'motion/react';
import { Sliders, CheckSquare, Tablet, ShieldCheck, ArrowRight } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlidePracticalExecution: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Definição das Variáveis',
      desc: 'Seleção das variáveis censitárias críticas (Sexo, Idade, Renda, Escolaridade e Região) com dados oficiais do IBGE ou TSE.',
      icon: <Sliders className="w-5 h-5 text-[#d4af37]" />,
      color: 'border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37]',
      focus: 'Parâmetro Oficial',
    },
    {
      num: '02',
      title: 'Células Exclusivas',
      desc: 'Matriz demográfica disjunta: cada indivíduo da população pertence a uma única célula (sem sobreposições ou lacunas).',
      icon: <CheckSquare className="w-5 h-5 text-blue-400" />,
      color: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
      focus: 'Exclusividade & Exaustividade',
    },
    {
      num: '03',
      title: 'Coleta Digital (CAPI)',
      desc: 'Entrevistas registradas em tablets com travas automáticas: o app bloqueia abordagens assim que a cota atinge 100%.',
      icon: <Tablet className="w-5 h-5 text-emerald-400" />,
      color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
      focus: 'Trava em Tempo Real',
    },
    {
      num: '04',
      title: 'Auditoria & GPS',
      desc: 'Checagem ativa de 10% a 20% das entrevistas via geolocalização por GPS, gravação de verificação e checagem cruzada.',
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      color: 'border-purple-500/40 bg-purple-500/10 text-purple-400',
      focus: 'Auditoria 10% a 20%',
    },
  ];

  return (
    <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-3 lg:py-6 space-y-6 min-h-[calc(100vh-8.5rem)] flex flex-col justify-between">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-[0.2em] font-semibold">
            <span>Seção 06</span>
            <span className="text-white/20">/</span>
            <span>Metodologia Operacional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Como Realizar a Amostragem por Cotas na Prática" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO IV · AS 4 ETAPAS SEQUENCIAIS
        </div>
      </motion.div>

      {/* 4 Sequential Steps Flow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch flex-1">
        {steps.map((st, idx) => (
          <motion.div
            key={st.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.09 * idx }}
            className={`bg-[#121418] p-6 rounded-2xl border ${st.color.split(' ')[0]} shadow-xl flex flex-col justify-between hover:border-white/30 transition-all`}
          >
            <div className="space-y-4">
              {/* Step Badge */}
              <div className="flex items-center justify-between">
                <span className="text-3xl font-mono font-bold text-white/40">
                  {st.num}
                </span>
                <div className="p-2 rounded-xl bg-black/50 border border-white/10">
                  {st.icon}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-editorial-serif font-bold text-white leading-snug">
                {st.title}
              </h3>

              <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                {st.desc}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
              <span className={`text-xs font-mono uppercase px-2.5 py-1 rounded-lg font-bold ${st.color.split(' ')[1]} ${st.color.split(' ')[2]}`}>
                {st.focus}
              </span>
              {idx < 3 && (
                <ArrowRight className="w-4 h-4 text-white/40 hidden lg:block" />
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
        className="p-4 sm:p-5 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm sm:text-base text-white/90"
      >
        <span className="font-light">
          <strong>Padronização Operacional:</strong> Os tablets CAPI bloqueiam automaticamente abordagens a perfis já preenchidos, direcionando o pesquisador apenas às cotas deficitárias.
        </span>
        <span className="text-[#d4af37] font-mono text-xs sm:text-sm font-semibold shrink-0">
          Padrão WAPOR / AAPOR
        </span>
      </motion.div>
    </div>
  );
};
