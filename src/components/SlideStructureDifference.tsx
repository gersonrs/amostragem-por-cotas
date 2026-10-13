import React from 'react';
import { motion } from 'motion/react';
import { Layers, Sliders, CheckCircle2, XCircle, ArrowRightLeft, FileSpreadsheet } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideStructureDifference: React.FC = () => {
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
            <span>Seção 02</span>
            <span className="text-white/20">/</span>
            <span>Estrutura de Amostragem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Características e Diferença da Amostragem Estratificada" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO I · FUNDAMENTOS TEÓRICOS
        </div>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1">
        {/* Left Column: As 3 Características Distintivas */}
        <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#121418] p-4 sm:p-5 rounded-2xl border border-[#d4af37]/30 shadow-xl flex-1 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-mono text-sm font-bold">1</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Seleção Não Aleatória</h3>
            </div>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed pl-10">
              Captação dirigida de participantes por critérios demográficos, sem sorteio estocástico nominal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#121418] p-4 sm:p-5 rounded-2xl border border-blue-500/30 shadow-xl flex-1 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono text-sm font-bold">2</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Abordagem Ativa em Campo</h3>
            </div>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed pl-10">
              Triagem ativa por entrevistadores em pontos estratégicos de circulação para checar elegibilidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#121418] p-4 sm:p-5 rounded-2xl border border-emerald-500/30 shadow-xl flex-1 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-sm font-bold">3</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Flexibilidade Operacional</h3>
            </div>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed pl-10">
              Adequação rápida a prazos estritos, dispensando múltiplos retornos a domicílios fechados.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Confronto Direto Estratificada vs. Cotas */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl h-full flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <ArrowRightLeft className="w-5 h-5 text-[#d4af37]" />
                  <h3 className="text-base sm:text-lg lg:text-xl font-editorial-serif font-bold text-white">
                    Amostragem Estratificada vs. Amostragem por Cotas
                  </h3>
                </div>
                <span className="text-xs font-mono bg-white/5 px-2.5 py-1 rounded text-white/60">
                  Partição Igual · Seleção Oposta
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 mb-4 text-xs sm:text-sm text-white/90 font-light">
                <strong className="text-[#d4af37] font-semibold">O Ponto em Comum:</strong> Ambos particionam a população em estratos conhecidos (sexo, idade, escolaridade, região).
              </div>

              {/* Tabela de Comparação */}
              <div className="grid grid-cols-2 gap-4">
                {/* Lado A: Estratificada */}
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm sm:text-base">
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Estratificada (Probabilística)</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-light">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <span>Exige <strong>cadastro nominal completo</strong> (lista nominal de 1 a N).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <span>Sorteio <strong>aleatório formal</strong> de indivíduos por estrato.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                      <span>Custo elevado com recusas e visitas repetidas a domicílios.</span>
                    </li>
                  </ul>
                </div>

                {/* Lado B: Cotas */}
                <div className="p-4 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 space-y-3">
                  <div className="flex items-center gap-2 text-[#d4af37] font-bold text-sm sm:text-base">
                    <Layers className="w-4 h-4" />
                    <span>Por Cotas (Não Probabilística)</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-light">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0" />
                      <span><strong>Dispensa cadastro nominal</strong> prévio de cidadãos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0" />
                      <span>Recrutamento direto em <strong>pontos de grande fluxo</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0" />
                      <span>Substituição imediata até atingir a cota numérica (<MathView math="n_h" />).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs font-mono text-white/50 flex justify-between">
              <span>Diferença central: O mecanismo final de captação de cada elemento</span>
              <span className="text-[#d4af37] font-semibold">Próximo: Histórico & Aplicações &rarr;</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
