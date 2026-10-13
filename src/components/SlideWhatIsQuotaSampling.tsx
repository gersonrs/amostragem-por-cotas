import {
    ArrowRight,
    Layers,
    PieChart,
    ShieldCheck,
    Sparkles,
    Target,
} from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { AnimatedNumber } from './AnimatedNumber';
import { TypewriterText } from './TypewriterText';

// Staggered cascade for the "3 Pilares" list
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24, scale: 0.97 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const SlideWhatIsQuotaSampling: React.FC = () => {
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
            <span>Fundamentos Conceituais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="O que é Amostragem por Cotas? Definição & Microcosmo" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO I · CONCEITO FUNDAMENTAL
        </div>
      </motion.div>

      {/* Main Grid: Definição Central + Mecanismo Operacional */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1">
        {/* Left Column: Definição Essencial & A Grande Premissa */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          {/* Card: Definição Essencial */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-5 sm:p-6 rounded-2xl border border-[#d4af37]/30 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37]">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#d4af37] font-bold">
                  Definição Operacional
                </span>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-light mb-4">
                Método de amostragem <strong className="text-amber-300 font-semibold">não probabilístico</strong> onde a população é subdividida em estratos demográficos conhecidos, e os indivíduos são selecionados de forma dirigida em campo para preencher <strong className="text-white font-semibold">cotas numéricas pré-fixadas</strong>.
              </p>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs sm:text-sm font-mono text-amber-300 font-bold uppercase tracking-wider block mb-1">
                    O Objetivo Central:
                  </span>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                    Construir um <strong>microcosmo (espelho fiel)</strong> da população, reproduzindo exatamente as proporções demográficas do censo sem depender de sorteio nominal.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* O Princípio da Mini-População (Espelho Social) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-[#121418] p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <PieChart className="w-5 h-5 text-sky-400" />
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-sky-400 font-bold">
                  O Princípio do Espelho Demográfico
                </span>
              </div>
              <span className="text-xs font-mono bg-sky-500/10 text-sky-300 px-2.5 py-1 rounded border border-sky-500/20 font-semibold">
                Proporção Fixada
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center py-1">
              <div className="bg-white/[0.03] border border-white/10 p-3 rounded-xl">
                <span className="text-xs font-mono text-white/50 block font-medium">População Real (N)</span>
                <span className="text-lg sm:text-2xl font-bold text-white block mt-1">
                  <AnimatedNumber value={156.4} decimals={1} duration={1.2} delay={0.1} format={(v) => `${v.toFixed(1).replace('.', ',')} Mi`} />
                </span>
                <span className="text-xs text-white/60">Eleitorado TSE</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ArrowRight className="w-6 h-6 text-[#d4af37]" />
                <span className="text-xs font-mono text-[#d4af37] font-bold mt-1">Matriz W_h</span>
              </div>
              <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 p-3 rounded-xl">
                <span className="text-xs font-mono text-[#d4af37] block font-medium">Amostra Final (n)</span>
                <span className="text-lg sm:text-2xl font-bold text-amber-300 block mt-1">
                  <AnimatedNumber value={1000} duration={1.2} delay={0.2} format={(v) => Math.round(v).toLocaleString('pt-BR')} />
                  <span className="text-base"> a </span>
                  <AnimatedNumber value={2000} duration={1.2} delay={0.3} format={(v) => Math.round(v).toLocaleString('pt-BR')} />
                </span>
                <span className="text-xs text-white/60">Microcosmo Fiel</span>
              </div>
            </div>

            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg text-sm sm:text-base text-white/80 leading-relaxed font-light">
              <strong>Regra prática:</strong> Se <strong>52%</strong> da população são mulheres e <strong>28%</strong> são jovens (16-34 anos), a amostra de n = 1.000 terá rigorosamente <strong className="text-amber-300">520 mulheres</strong> e <strong className="text-amber-300">280 jovens</strong>.
            </div>
          </motion.div>
        </div>

        {/* Right Column: As 3 Características Distintivas */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="bg-[#121418] p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    3 Pilares Metodológicos
                  </span>
                </div>
                <span className="text-xs font-mono text-white/40">
                  Fundamento Teórico
                </span>
              </div>

              {/* 3 Pilares do Método - Grandes & Legíveis */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-3.5"
              >
                <motion.div variants={itemVariants} whileHover={{ scale: 1.015, y: -2, transition: { duration: 0.18 } }} className="p-3.5 sm:p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1.5 hover:border-amber-400/40 hover:bg-amber-500/[0.04] transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm font-mono font-bold text-amber-400">01.</span>
                      <h4 className="text-base sm:text-lg font-bold text-white">Seleção Não Aleatória</h4>
                    </div>
                    <span className="text-xs font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      Sem Cadastro Nominal
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-white/80 font-light pl-6 leading-relaxed">
                    Não exige sorteio nem cadastro individual da população. A seleção é orientada exclusivamente pelo preenchimento das variáveis da cota.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.015, y: -2, transition: { duration: 0.18 } }} className="p-3.5 sm:p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1.5 hover:border-sky-400/40 hover:bg-sky-500/[0.04] transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm font-mono font-bold text-sky-400">02.</span>
                      <h4 className="text-base sm:text-lg font-bold text-white">Abordagem em Ponto de Fluxo</h4>
                    </div>
                    <span className="text-xs font-mono text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                      Filtro Screener
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-white/80 font-light pl-6 leading-relaxed">
                    Entrevistadores aplicam perguntas de triagem rápidas (sexo, idade, escolaridade) em locais de grande circulação para verificar a eligibilidade.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.015, y: -2, transition: { duration: 0.18 } }} className="p-3.5 sm:p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1.5 hover:border-emerald-400/40 hover:bg-emerald-500/[0.04] transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm font-mono font-bold text-emerald-400">03.</span>
                      <h4 className="text-base sm:text-lg font-bold text-white">Velocidade & Viabilidade Econômica</h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Coleta em 48h - 72h
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-white/80 font-light pl-6 leading-relaxed">
                    Viabiliza pesquisas eleitorais e de conjuntura em tempo recorde com custo drasticamente menor que visitas domiciliares probabilísticas.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <p className="text-xs sm:text-sm text-emerald-200 leading-tight">
                  <strong>A Seguir:</strong> O Mecanismo Operacional em 4 etapas lineares via passador.
                </p>
              </div>
              <span className="text-xs font-mono text-[#d4af37] bg-black/40 px-2.5 py-1 rounded border border-white/10 shrink-0 font-bold">
                Passador [ → ]
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
