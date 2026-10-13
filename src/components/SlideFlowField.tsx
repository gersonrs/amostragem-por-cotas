import React from 'react';
import { motion } from 'motion/react';
import { Tablet, Lock, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideFlowField: React.FC = () => {
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
            <span>Capítulo 02</span>
            <span className="text-white/20">/</span>
            <span>Morfologia da Amostragem</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Operação de Campo: Ponto de Fluxo & Trava CAPI" speed={26} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          FLUXO PARTE 2 · EXECUÇÃO EM CAMPO & SATURAÇÃO
        </div>
      </motion.div>

      {/* Two Column Layout: Field Operation on Left, Trava CAPI & Pós-Estratificação on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Field Protocol */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 space-y-3"
        >
          <div className="p-4 sm:p-5 bg-[#121418] border border-white/10 rounded-xl space-y-3 shadow-xl">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#d4af37]">
              <span className="uppercase">Protocolo Operacional de Campo</span>
              <Tablet className="w-4 h-4" />
            </div>

            <div className="space-y-2.5 text-xs text-white/80 leading-relaxed">
              <div className="flex items-start gap-2.5 p-2 bg-white/[0.02] border border-white/5 rounded-lg">
                <span className="font-mono text-[#d4af37] font-bold">1.</span>
                <div>
                  <strong className="text-white block font-sans">Abordagem em Ponto de Fluxo:</strong>
                  Pesquisadores se posicionam em logradouros de grande circulação (praças, feiras, estações).
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 bg-white/[0.02] border border-white/5 rounded-lg">
                <span className="font-mono text-[#d4af37] font-bold">2.</span>
                <div>
                  <strong className="text-white block font-sans">Filtragem Demográfica Inicial:</strong>
                  Antes do questionário substantivo, verifica-se idade, sexo e escolaridade do transeunte.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 bg-white/[0.02] border border-white/5 rounded-lg">
                <span className="font-mono text-[#d4af37] font-bold">3.</span>
                <div>
                  <strong className="text-white block font-sans">Substituição Instantânea de Recusas:</strong>
                  Se um indivíduo recusa responder, não se insiste: o pesquisador aborda imediatamente o próximo transeunte com o mesmo perfil.
                </div>
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-between text-xs text-blue-200"
          >
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Coleta contínua até atingir as metas exatas de cada célula da matriz.</span>
            </div>
            <span className="font-mono font-bold text-blue-300">n = 1.000</span>
          </motion.div>
        </motion.div>

        {/* Right Column: Trava CAPI e Pós-Estratificação */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-6 space-y-3"
        >
          {/* Trava CAPI Box */}
          <div className="p-4 sm:p-5 bg-gradient-to-br from-[#181a20] to-[#111317] border border-white/10 rounded-xl space-y-2.5 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                Mecanismo Eletrônico (CAPI / Tablets)
              </span>
              <Lock className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-base font-editorial-serif font-bold text-white">
              A Trava de Saturação de Cota
            </h3>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              Quando uma célula demográfica atinge 100% de sua meta (ex.: Homens 16-34 anos atingem 240 entrevistas), o software CAPI <strong>bloqueia automaticamente</strong> novas entrevistas daquele perfil.
            </p>
            <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-2 text-xs text-emerald-300">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Evita o superdimensionamento de jovens universitários que circulam com facilidade.</span>
            </div>
          </div>

          {/* O que fazer se houver sub-representação residual */}
          <div className="p-3.5 bg-[#121418] border border-white/10 rounded-xl space-y-1.5 shadow-lg">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#d4af37]">
              <span>Desvios Residuais em Campo</span>
              <span>Fator Compensador</span>
            </div>
            <p className="text-xs text-white/70 font-light">
              Grupos difíceis de abordar na rua (ex.: Mulheres idosas 60+) podem fechar abaixo da cota. Corrige-se aplicando a <strong>ponderação pós-estratificação</strong>:
            </p>
            <div className="p-2 bg-white/[0.03] border border-white/10 rounded-lg text-center text-xs">
              <MathView math="f_h = \frac{W_h}{w_h} = \frac{N_h / N}{n_h / n}" block />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
