import React from 'react';
import { motion } from 'motion/react';
import { Users, Clock, DollarSign, Database, GitBranch, CheckCircle2 } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideIntroduction: React.FC = () => {
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
            <span>Contextualização Metodológica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="O Desafio Amostral em Larga Escala e os Dois Paradigmas" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO I · CENSO VS. AMOSTRAGEM
        </div>
      </motion.div>

      {/* Main Grid: Censo vs Pesquisa Dinâmica & Os 2 Paradigmas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Left Column: O Problema de Escala (156,4 Milhões) */}
        <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-4 sm:p-5 rounded-xl border border-white/10 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37]">
                O Desafio da População em Larga Escala
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
              Em contextos populacionais massivos — como o eleitorado brasileiro em <strong>2026</strong>, com cerca de <strong>156,4 milhões de cidadãos aptos ao voto</strong> —, o levantamento censitário periódico contínuo é <em>inviável</em> em termos logísticos, temporais e orçamentários.
            </p>
          </motion.div>

          {/* Comparativo de Custos & Prazos */}
          <div className="grid grid-cols-2 gap-2.5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="bg-white/[0.02] border border-white/10 p-3 rounded-lg"
            >
              <div className="flex items-center gap-1.5 text-rose-400 text-xs font-semibold mb-1">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Censo IBGE</span>
              </div>
              <p className="text-[11px] text-white/70 leading-relaxed font-light">
                Demanda investimentos na ordem de <strong>bilhões de reais</strong> e extensos prazos de apuração de meses ou anos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="bg-white/[0.02] border border-white/10 p-3 rounded-lg"
            >
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Pesquisa de Opinião</span>
              </div>
              <p className="text-[11px] text-white/70 leading-relaxed font-light">
                Exige estimativas em tempo real (<strong>48 a 72 horas</strong>) para tomada de decisão ágil em ciclos dinâmicos.
              </p>
            </motion.div>
          </div>

          {/* Institutos de Mercado */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="p-3 bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-lg flex items-center justify-between"
          >
            <span className="text-[11px] font-mono text-[#d4af37]">
              Adotada pela quase totalidade dos institutos:
            </span>
            <div className="flex gap-2 text-[10px] font-mono text-white/70">
              <span className="bg-black/40 px-2 py-0.5 rounded border border-white/5">Datafolha</span>
              <span className="bg-black/40 px-2 py-0.5 rounded border border-white/5">Quaest</span>
              <span className="bg-black/40 px-2 py-0.5 rounded border border-white/5">Ipec</span>
              <span className="bg-black/40 px-2 py-0.5 rounded border border-white/5">PoderData</span>
              <span className="bg-black/40 px-2 py-0.5 rounded border border-white/5">AtlasIntel</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: A Bifurcação em 2 Paradigmas */}
        <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-[#121418] p-4 sm:p-5 rounded-xl border border-white/10 shadow-lg flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400">
                  A Bifurcação dos Paradigmas Amostrais
                </span>
              </div>

              {/* Paradigma 1: Probabilístico */}
              <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/20 mb-2.5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-semibold text-blue-300">
                    1. Amostragem Probabilística (AAS, Estratificada, Sistemática)
                  </h4>
                  <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">
                    <MathView math="\pi_i > 0" />
                  </span>
                </div>
                <p className="text-[11px] text-white/80 font-light leading-relaxed">
                  Cada elemento <MathView math="i" /> da população possui probabilidade de inclusão estritamente <strong>conhecida e não-nula</strong>. Requer lista nominal exaustiva (cadastro) para sorteio aleatório mecânico.
                </p>
              </div>

              {/* Paradigma 2: Não Probabilístico (Cotas) */}
              <div className="p-3 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-semibold text-[#d4af37]">
                    2. Amostragem Não Probabilística (Por Cotas)
                  </h4>
                  <span className="text-[10px] font-mono bg-[#d4af37]/20 text-[#d4af37] px-1.5 py-0.5 rounded">
                    Seleção Intencional
                  </span>
                </div>
                <p className="text-[11px] text-white/80 font-light leading-relaxed">
                  A inclusão <strong>não advém de sorteio aleatório</strong>, mas da seleção intencional dos pesquisadores orientada a cumprir cotas numéricas pré-estabelecidas que espelham variáveis de controle demográfico.
                </p>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/50">
              <span>Origem histórica: Charles Booth & W. I. Thomas</span>
              <span className="text-[#d4af37]">Avançar para Estrutura &rarr;</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
