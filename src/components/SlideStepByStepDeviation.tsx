import { AlertTriangle, Calculator, CheckCircle2, Info } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { AnimatedNumber } from './AnimatedNumber';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideStepByStepDeviation: React.FC = () => {
  return (
    <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-3 lg:py-6 space-y-6 min-h-[calc(100vh-8.5rem)] flex flex-col justify-between">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-[0.2em] font-semibold">
            <span>Seção 05.2 & 05.3</span>
            <span className="text-white/20">/</span>
            <span>Ajuste Matemático</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Desvios de Campo, Ponderação e Margem Nominal" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO III · CORREÇÃO PÓS-ESTRATIFICAÇÃO
        </div>
      </motion.div>

      {/* Grid: Deviation Calculation on Left, Nominal Margin & Correction on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
        {/* Left Column: Post-Stratification Calculation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-7 bg-[#121418] p-6 sm:p-7 rounded-2xl border border-white/10 shadow-xl space-y-5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-sm sm:text-base font-mono text-amber-400 mb-2">
              <span className="uppercase font-bold tracking-wider">Cenário de Desvio Real de Campo</span>
              <AlertTriangle className="w-5 h-5" />
            </div>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-4">
              Ao fechar o campo, o <strong>Estrato 3 (Mulher, 60+)</strong> atingiu apenas{' '}
              <strong><AnimatedNumber value={60} duration={1} format={(v) => `${Math.round(v)} entrevistas`} /></strong>{' '}
              (recusas por mobilidade), e o <strong>Estrato 4 (Homem, 16-34)</strong> fechou em{' '}
              <strong><AnimatedNumber value={240} duration={1} delay={0.1} format={(v) => `${Math.round(v)} entrevistas`} /></strong>:
            </p>

            <div className="p-4 sm:p-5 bg-white/[0.03] border border-white/10 rounded-xl space-y-4 font-mono">
              <div className="text-purple-300">
                <span className="text-xs sm:text-sm text-purple-400 font-bold uppercase block mb-1">
                  Fator de Expansão (Mulheres Idosas Sub-representadas):
                </span>
                <div className="text-base sm:text-lg">
                  <MathView math="f_3 = \frac{W_3}{w_3} = \frac{0,080}{60 / 1.000} = \frac{0,080}{0,060} = \mathbf{1,333}" block />
                  <span className="text-2xl font-bold text-purple-300 inline-flex items-center gap-1 mt-1">
                    <AnimatedNumber value={1.333} decimals={3} duration={1.1} delay={0.3} format={(v) => v.toFixed(3).replace('.', ',')} />
                  </span>
                </div>
              </div>

              <div className="text-blue-300 border-t border-white/10 pt-3">
                <span className="text-xs sm:text-sm text-blue-400 font-bold uppercase block mb-1">
                  Fator de Deflação (Jovens Sob-representados):
                </span>
                <div className="text-base sm:text-lg">
                  <MathView math="f_4 = \frac{W_4}{w_4} = \frac{0,220}{240 / 1.000} = \frac{0,220}{0,240} = \mathbf{0,916}" block />
                  <span className="text-2xl font-bold text-blue-300 inline-flex items-center gap-1 mt-1">
                    <AnimatedNumber value={0.916} decimals={3} duration={1.1} delay={0.45} format={(v) => v.toFixed(3).replace('.', ',')} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-purple-500/15 border border-purple-500/30 rounded-xl text-sm sm:text-base text-white/90 font-light flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
            <span>
              O peso <MathView math="f_3 = 1,333 > 1" /> amplia a voz de cada idosa entrevistada, corrigindo matematicamente qualquer viés de sub-representação.
            </span>
          </div>
        </motion.div>

        {/* Right Column: Reference Margin of Error */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-5 bg-[#121418] p-6 sm:p-7 rounded-2xl border border-white/10 shadow-xl space-y-5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-sm sm:text-base font-mono text-[#d4af37] mb-2">
              <span className="uppercase font-bold tracking-wider">Cálculo da Margem Referencial</span>
              <Calculator className="w-5 h-5" />
            </div>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-3">
              Margem nominal padrão de mercado para <MathView math="n = 1.000" /> e máxima incerteza (<MathView math="p = 0,50" />):
            </p>

            <div className="p-5 bg-white/[0.04] border border-white/10 rounded-xl text-center space-y-3">
              <span className="text-xs font-mono text-white/50 uppercase block">Dedução Numérica Formal:</span>
              <div className="text-base sm:text-lg">
                <MathView math="e_{\text{nominal}} = 1{,}96 \cdot \sqrt{\frac{0{,}5 \times 0{,}5}{1.000}} = 1{,}96 \cdot \sqrt{0{,}00025}" block />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 py-2.5 px-6 bg-emerald-500/15 rounded-xl border border-emerald-500/30 inline-flex items-center justify-center gap-2">
                <span>±</span>
                <AnimatedNumber value={3.1} decimals={2} duration={1.4} delay={0.4} format={(v) => `${v.toFixed(2).replace('.', ',')}%`} />
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl space-y-2 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-white/95 font-semibold">
              <Info className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Garantia Paramétrica Pós-Ponderação:</span>
            </div>
            <p className="text-white/80 font-light leading-relaxed">
              Com os pesos aplicados a cada formulário, os percentuais eleitorais finais reproduzem perfeitamente o perfil do censo oficial do município.
            </p>
          </div>

          <div className="pt-3 border-t border-white/10 text-xs font-mono text-white/50 flex justify-between">
            <span>Base teórica: Seção 5.2 e 5.3</span>
            <span className="text-[#d4af37] font-semibold">Etapas Práticas de Campo &rarr;</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
