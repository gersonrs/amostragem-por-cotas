import React from 'react';
import { motion } from 'motion/react';
import { Users, Clock, DollarSign, Database, GitBranch, CheckCircle2 } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideIntroduction: React.FC = () => {
  return (
    <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-3 lg:py-6 space-y-5 min-h-[calc(100vh-8.5rem)] flex flex-col justify-between">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-[0.2em] font-semibold">
            <span>Seção 01</span>
            <span className="text-white/20">/</span>
            <span>Contextualização Metodológica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="O Desafio Amostral em Larga Escala e os Dois Paradigmas" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO I · CENSO VS. AMOSTRAGEM
        </div>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <Users className="w-5 h-5 text-[#d4af37]" />
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#d4af37] font-bold">
                  O Desafio da População em Larga Escala
                </span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-light mb-4">
                Com o eleitorado brasileiro em <strong>156,4 milhões de eleitores</strong>, o levantamento censitário contínuo é <em>completamente inviável</em> em custo e tempo hábil.
              </p>
            </div>

            {/* Comparativo de Custos & Prazos */}
            <div className="grid grid-cols-2 gap-3.5 my-2">
              <div className="bg-white/[0.03] border border-white/10 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-rose-400 text-sm font-bold mb-1.5">
                  <DollarSign className="w-4 h-4" />
                  <span>Censo Completo</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  Investimento de <strong>bilhões de reais</strong> e prazos de apuração de <strong>meses a anos</strong>.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold mb-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Pesquisa por Cotas</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  Diagnóstico rápido em <strong>48h a 72h</strong> com fração ínfima do orçamento.
                </p>
              </div>
            </div>

            {/* Institutos de Mercado */}
            <div className="p-3.5 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <span className="text-xs sm:text-sm font-mono text-[#d4af37] font-bold">
                Padrão nos Maiores Institutos:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/90">
                <span className="bg-black/60 px-2.5 py-1 rounded-lg border border-white/10">Datafolha</span>
                <span className="bg-black/60 px-2.5 py-1 rounded-lg border border-white/10">Quaest</span>
                <span className="bg-black/60 px-2.5 py-1 rounded-lg border border-white/10">Ipec</span>
                <span className="bg-black/60 px-2.5 py-1 rounded-lg border border-white/10">PoderData</span>
                <span className="bg-black/60 px-2.5 py-1 rounded-lg border border-white/10">AtlasIntel</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Os 2 Paradigmas */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-[#121418] p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl flex-1 flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4 border-b border-white/10 pb-3">
                <GitBranch className="w-5 h-5 text-blue-400" />
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-400 font-bold">
                  Dois Paradigmas Amostrais Concorrentes
                </span>
              </div>

              {/* Paradigma 1: Probabilístico */}
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 mb-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm sm:text-base font-bold text-blue-300">
                    1. Paradigma Probabilístico (AAS, Estratificada)
                  </h4>
                  <span className="text-xs font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-bold">
                    <MathView math="\pi_i > 0" />
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                  Cada eleitor tem probabilidade de seleção conhecida e maior que zero. <strong>Exige sorteio nominal</strong> em listas completas ou visitas a domicílios pré-sorteados.
                </p>
              </div>

              {/* Paradigma 2: Não Probabilístico (Cotas) */}
              <div className="p-4 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm sm:text-base font-bold text-amber-300">
                    2. Paradigma Não Probabilístico (Por Cotas)
                  </h4>
                  <span className="text-xs font-mono bg-[#d4af37]/25 text-[#d4af37] px-2 py-0.5 rounded font-bold">
                    Controle por Microcosmo
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                  A seleção <strong>não é por sorteio aleatório</strong>, mas dirigida pelo cumprimento de cotas demográficas que espelham perfeitamente a população censitária.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-mono text-white/60">
              <span>Marco Teórico: Charles Booth & W. I. Thomas</span>
              <span className="text-[#d4af37] font-semibold">Próximo: Cotas vs. Estratificada &rarr;</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
