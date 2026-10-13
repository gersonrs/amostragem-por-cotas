import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, BookOpen, Layers } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideDefinition: React.FC = () => {
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
            <span>Capítulo 01</span>
            <span className="text-white/20">/</span>
            <span>Epistemologia Amostral</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="O que é Amostragem por Cotas?" speed={28} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          PARTE 1 DE 3 · CONCEITO FUNDAMENTAL
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-7 space-y-3.5">
          {/* Main Definition Card */}
          <motion.div
            initial={{ opacity: 0, x: -35, y: -20, rotate: -0.5 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.01 }}
            className="bg-[#121418] p-5 sm:p-6 rounded-xl border border-white/10 relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37]">
                Definição Operacional
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
              A <strong>amostragem por cotas</strong> é um método <em>não probabilístico</em> no qual a população é dividida em subgrupos disjuntos segundo características de controle conhecidas (sexo, idade, renda, instrução), atribuindo-se metas numéricas (<MathView math="n_h" />) a serem cumpridas por seleção intencional dos pesquisadores até que o tamanho total (<MathView math="n" />) seja alcançado.
            </p>
          </motion.div>

          {/* Three Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <motion.div
              initial={{ opacity: 0, x: -25, y: 25, rotate: -2 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              whileHover={{ scale: 1.03, rotate: -0.8 }}
              className="p-3.5 bg-white/[0.03] border border-white/10 rounded-lg transition-shadow hover:shadow-lg hover:shadow-[#d4af37]/10"
            >
              <span className="text-[10px] font-mono text-[#d4af37]">01. Alocação</span>
              <h4 className="text-xs font-semibold text-white mt-0.5">Matriz Proporcional</h4>
              <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                Espelha os dados censitários (IBGE/TSE), garantindo representação rigorosa de subgrupos populacionais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              whileHover={{ scale: 1.03 }}
              className="p-3.5 bg-white/[0.03] border border-white/10 rounded-lg transition-shadow hover:shadow-lg hover:shadow-blue-500/10"
            >
              <span className="text-[10px] font-mono text-[#d4af37]">02. Seleção</span>
              <h4 className="text-xs font-semibold text-white mt-0.5">Não Aleatória</h4>
              <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                Sem sorteio nominal. O pesquisador aborda indivíduos em pontos de fluxo até preencher a cota.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25, y: 25, rotate: 2 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 0.45, delay: 0.35 }}
              whileHover={{ scale: 1.03, rotate: 0.8 }}
              className="p-3.5 bg-white/[0.03] border border-white/10 rounded-lg transition-shadow hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <span className="text-[10px] font-mono text-[#d4af37]">03. Agilidade</span>
              <h4 className="text-xs font-semibold text-white mt-0.5">Tempo Real (48h)</h4>
              <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                Recusas são prontamente substituídas pelo próximo transeunte do mesmo perfil demográfico.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Column: O Dilema Censitário */}
        <motion.div
          initial={{ opacity: 0, x: 35, y: -15 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 space-y-3"
        >
          <div className="p-5 bg-gradient-to-br from-[#15171c] to-[#0f1013] border border-white/10 rounded-xl space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white/80 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>O Dilema: Censo vs Amostragem</span>
              <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
            </h3>
            <div className="space-y-2 text-xs leading-relaxed text-white/70">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white">Escala Populacional:</strong> Mais de <span className="text-[#d4af37] font-semibold">156,4M</span> de eleitores. Fazer censo contínuo é financeira e operacionalmente inviável.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white">Sigilo Constitucional:</strong> A LGPD e a Justiça Eleitoral vedam o fornecimento de listagens nominais de endereços para sorteio aleatório simples.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white">A Solução por Cotas:</strong> Replica com precisão a pirâmide proporcional do censo mantendo controle estrito da composição da amostra.
                </div>
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-start gap-2 text-xs text-amber-200/90"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5 animate-bounce" />
            <span>
              <strong>Atenção Metodológica:</strong> O método não controla correlações espaciais ocultas de pontos de fluxo nem garante probabilidade de inclusão uniforme.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
