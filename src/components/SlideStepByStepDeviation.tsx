import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Calculator, CheckCircle2, TrendingUp, Info } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideStepByStepDeviation: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-2 sm:py-3 space-y-3.5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-2.5 flex flex-col md:flex-row md:items-end justify-between gap-2"
      >
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#d4af37] uppercase tracking-[0.2em]">
            <span>Seção 05.2 & 05.3</span>
            <span className="text-white/20">/</span>
            <span>Ajuste Matemático</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Desvios de Campo, Ponderação e Margem Nominal" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO III · CORREÇÃO PÓS-ESTRATIFICAÇÃO
        </div>
      </motion.div>

      {/* Grid: Deviation Calculation on Left, Nominal Margin & Correction on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Left Column: Post-Stratification Calculation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-7 bg-[#121418] p-4 sm:p-5 rounded-xl border border-white/10 shadow-lg space-y-3 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-400 mb-1">
              <span className="uppercase font-semibold">Cenário de Desvio Real de Campo</span>
              <AlertTriangle className="w-4 h-4" />
            </div>

            <p className="text-xs text-white/80 leading-relaxed font-light mb-2.5">
              Suponha que no fechamento o <strong>Estrato 3 (Mulher, 60+)</strong> tenha atingido apenas <strong>60 questionários válidos</strong> (recusa por mobilidade), enquanto o <strong>Estrato 4 (Homem, 16-34)</strong> fechou em <strong>240 questionários</strong>:
            </p>

            <div className="p-3 bg-white/[0.03] border border-white/10 rounded-lg space-y-2.5 font-mono text-xs">
              <div className="text-purple-300">
                <span className="text-[10px] text-white/50 block font-mono">Fator de Expansão (Mulheres Idosas Sub-representadas):</span>
                <MathView math="f_3 = \frac{W_3}{w_3} = \frac{0,080}{60 / 1.000} = \frac{0,080}{0,060} = \mathbf{1,333}" block />
              </div>

              <div className="text-blue-300 border-t border-white/10 pt-2">
                <span className="text-[10px] text-white/50 block font-mono">Fator de Deflação (Jovens Sob-representados):</span>
                <MathView math="f_4 = \frac{W_4}{w_4} = \frac{0,220}{240 / 1.000} = \frac{0,220}{0,240} = \mathbf{0,916}" block />
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-[11px] text-white/80 font-light">
            O peso <MathView math="f_3 = 1,333 > 1" /> expande a representatividade das respostas das mulheres idosas coletadas, compensando matematicamente o subdimensionamento de campo.
          </div>
        </motion.div>

        {/* Right Column: Reference Margin of Error (Section 5.3 from LaTeX) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-5 bg-[#121418] p-4 sm:p-5 rounded-xl border border-white/10 shadow-lg space-y-3 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#d4af37] mb-1">
              <span className="uppercase font-semibold">Cálculo da Margem Referencial</span>
              <Calculator className="w-4 h-4" />
            </div>

            <p className="text-[11px] text-white/70 font-light leading-relaxed mb-2">
              A margem nominal (adotada por convenção da AAS para divulgação pública) para <MathView math="n = 1.000" /> e <MathView math="p = 0,50" />:
            </p>

            <div className="p-3 bg-white/[0.03] border border-white/10 rounded-lg text-center space-y-2">
              <span className="text-[10px] font-mono text-white/50 block">Dedução Numérica:</span>
              <MathView math="e_{\text{nominal}} = 1{,}96 \cdot \sqrt{\frac{0{,}5 \times 0{,}5}{1.000}} = 1{,}96 \cdot \sqrt{0{,}00025}" block />
              <div className="text-xl font-bold text-emerald-400 py-1.5 px-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20 inline-flex items-center justify-center gap-2">
                <MathView math="e \approx \pm 3{,}10\%" />
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-white/[0.02] border border-white/10 rounded-lg space-y-1.5 text-[11px]">
            <div className="flex items-center gap-1.5 text-white/90 font-medium">
              <Info className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Garantia de Representatividade Paramétrica:</span>
            </div>
            <p className="text-white/70 font-light leading-relaxed">
              Com os pesos pós-estratificados aplicados a cada questionário, os percentuais de intenção de voto passam a refletir rigorosamente o peso censitário do eleitorado municipal.
            </p>
          </div>

          <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-white/40 flex justify-between">
            <span>Base teórica: Seção 5.2 e 5.3 do artigo</span>
            <span className="text-[#d4af37]">Avançar para Etapas de Campo &rarr;</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
