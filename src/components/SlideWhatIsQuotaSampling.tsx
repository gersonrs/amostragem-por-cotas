import React from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  Target, 
  Sparkles, 
  ArrowRight, 
  PieChart, 
  ShieldCheck,
} from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlideWhatIsQuotaSampling: React.FC = () => {

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
            <span>Seção 01</span>
            <span className="text-white/20">/</span>
            <span>Fundamentos Conceituais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="O que é Amostragem por Cotas? Definição & Microcosmo" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO I · CONCEITO FUNDAMENTAL
        </div>
      </motion.div>

      {/* Main Grid: Definição Central + Mecanismo Operacional */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Left Column: Definição Essencial & A Grande Premissa */}
        <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
          {/* Card: Definição Essencial */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-4 sm:p-5 rounded-xl border border-[#d4af37]/30 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-2 mb-2.5">
              <div className="p-1.5 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37]">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37]">
                Definição Operacional
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-light mb-3">
              A <strong>amostragem por cotas</strong> é um método de amostragem <em>não probabilístico</em> em que a população total é subdividida em estratos demográficos conhecidos, e os respondentes são selecionados de forma direcionada em campo para preencher <strong>cotas numéricas pré-determinadas</strong>.
            </p>

            <div className="bg-black/40 border border-white/10 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-white/80 leading-relaxed font-light">
                  <strong className="text-amber-300">O Objetivo Central:</strong> Construir um <strong>microcosmo</strong> ou &quot;espelho proporcional&quot; da população-alvo, garantindo que as opiniões coletadas não sofram de sub-representação ou sobre-representação demográfica.
                </p>
              </div>
            </div>
          </motion.div>

          {/* O Princípio da Mini-População (Espelho Social) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-[#121418] p-3.5 rounded-xl border border-white/10 shadow-lg space-y-2.5"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <PieChart className="w-4 h-4 text-sky-400" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400">
                  O Princípio do Espelho Demográfico
                </span>
              </div>
              <span className="text-[10px] font-mono bg-sky-500/10 text-sky-300 px-2 py-0.5 rounded border border-sky-500/20">
                Proporcionalidade Fixada
              </span>
            </div>

            {/* Visual banner of the microcosm mapping */}
            <div className="relative rounded-lg overflow-hidden border border-sky-500/30 group">
              <img
                src="/src/assets/images/demographic_microcosm_1791898487292.jpg"
                alt="Mapeamento da diversidade populacional para o microcosmo amostral"
                referrerPolicy="no-referrer"
                className="w-full h-24 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                <span className="text-[10px] text-sky-200 font-mono">
                  Microcosmo Estatístico: População (N = 156,4M) → Amostra (n = 1.000 a 2.000)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center pt-0.5">
              <div className="bg-white/[0.02] border border-white/5 p-1.5 rounded-lg">
                <span className="text-[9px] font-mono text-white/50 block">População Real (N)</span>
                <span className="text-xs font-bold text-white block mt-0.5">156,4 Milhões</span>
                <span className="text-[9px] text-white/60">Censo / TSE</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-[9px] font-mono text-[#d4af37]">Matriz W_h</span>
              </div>
              <div className="bg-[#d4af37]/10 border border-[#d4af37]/20 p-1.5 rounded-lg">
                <span className="text-[9px] font-mono text-[#d4af37] block">Amostra Final (n)</span>
                <span className="text-xs font-bold text-amber-300 block mt-0.5">1.000 a 2.000</span>
                <span className="text-[9px] text-white/60">Microcosmo Fiel</span>
              </div>
            </div>

            <p className="text-[11px] text-white/70 leading-relaxed font-light">
              Se 52% da população são mulheres e 28% têm entre 16 e 34 anos, a amostra final de 1.000 entrevistados conterá <strong>exatamente 520 mulheres</strong> e <strong>280 jovens</strong>.
            </p>
          </motion.div>
        </div>

        {/* Right Column: As 3 Características Distintivas & Fundamentação Teórica */}
        <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="bg-[#121418] p-4 sm:p-5 rounded-xl border border-white/10 shadow-lg flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                    Características Distintivas (Seção 2.1)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/40">
                  Fundamento Teórico
                </span>
              </div>

              {/* 3 Pilares do Método */}
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-lg border border-white/10 bg-white/[0.02] space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-amber-400">01.</span>
                      <h4 className="text-xs font-semibold text-white">Seleção Não Aleatória</h4>
                    </div>
                    <span className="text-[9px] font-mono text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                      Sem Sorteio Nominal
                    </span>
                  </div>
                  <p className="text-[11px] text-white/75 font-light pl-4 leading-snug">
                    Captação dirigida de participantes com base em variáveis demográficas pré-fixadas, dispensando listas nominais exaustivas de cidadãos.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg border border-white/10 bg-white/[0.02] space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-sky-400">02.</span>
                      <h4 className="text-xs font-semibold text-white">Alocação por Julgamento e Conveniência</h4>
                    </div>
                    <span className="text-[9px] font-mono text-sky-300 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
                      Triagem em Campo
                    </span>
                  </div>
                  <p className="text-[11px] text-white/75 font-light pl-4 leading-snug">
                    Entrevistadores treinados identificam e abordam transeuntes em pontos estratégicos de fluxo para checar a elegibilidade ao perfil demandado.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg border border-white/10 bg-white/[0.02] space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-emerald-400">03.</span>
                      <h4 className="text-xs font-semibold text-white">Flexibilidade & Velocidade Operacional</h4>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      48h a 72h
                    </span>
                  </div>
                  <p className="text-[11px] text-white/75 font-light pl-4 leading-snug">
                    Adequação ágil da coleta a prazos curtos e orçamentos viáveis, viabilizando diagnósticos em tempo real para tomada de decisão eleitoral e de mercado.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Callout: Transition to Slide 4 (Mecanismo Operacional) */}
            <div className="mt-3 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <p className="text-[10px] sm:text-[11px] text-emerald-200 leading-tight">
                  <strong>A Seguir:</strong> Detalhamento do Mecanismo Operacional em 4 etapas sequenciais.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#d4af37] bg-black/40 px-2 py-0.5 rounded border border-white/10 shrink-0">
                Passador [→]
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
