import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Info, Scale, CheckCircle2, AlertCircle } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideMarginErrorControversy: React.FC = () => {
  const [sampleSize, setSampleSize] = useState<number>(1000);
  const p = 0.5;
  const z = 1.96;
  const marginError = z * Math.sqrt((p * (1 - p)) / sampleSize) * 100;

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
            <span>Seção 04.3</span>
            <span className="text-white/20">/</span>
            <span>Precisão Metodológica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Cálculo da Margem de Erro e seu Caráter Referencial" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO II · CONCESSÃO OPERACIONAL
        </div>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
        {/* Left Column: A Fórmula Clássica Emprestada da AAS */}
        <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-6 sm:p-7 rounded-2xl border border-white/10 shadow-xl space-y-4"
          >
            <div className="flex items-center gap-3">
              <Calculator className="w-6 h-6 text-blue-400" />
              <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-blue-400 font-bold">
                Formulação Clássica de Referência (AAS)
              </span>
            </div>
            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed">
              Fórmula clássica com <strong>95% de confiança</strong> (<MathView math="z = 1,96" />) e variância máxima conservadora (<MathView math="p = 0,50" />):
            </p>
            <div className="p-4 bg-white/[0.04] border border-white/10 rounded-xl text-center text-lg sm:text-xl shadow-inner font-mono">
              <MathView math="e = z \cdot \sqrt{\frac{p(1-p)}{n}} = 1,96 \cdot \sqrt{\frac{0,25}{n}}" block />
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2 text-sm font-mono text-white/80">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="block text-[#d4af37] font-bold text-base sm:text-lg">z = 1,96</span>
                <span className="text-xs text-white/60">Confiança 95%</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="block text-[#d4af37] font-bold text-base sm:text-lg">p = 0,50</span>
                <span className="text-xs text-white/60">Máxima Variância</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="block text-[#d4af37] font-bold text-base sm:text-lg">n Amostral</span>
                <span className="text-xs text-white/60">Tamanho da Amostra</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Calculator with Large Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-[#121418] p-6 sm:p-7 rounded-2xl border border-white/10 shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg font-semibold text-white">Simulador de Margem Nominal:</span>
              <span className="text-base sm:text-lg font-mono text-[#d4af37] font-bold">n = {sampleSize.toLocaleString('pt-BR')} entrevistas</span>
            </div>

            <div className="flex gap-2.5">
              {[1000, 2000, 2500, 2884, 5026].map((size) => (
                <button
                  key={size}
                  onClick={() => setSampleSize(size)}
                  className={`flex-1 py-2 text-sm sm:text-base font-mono rounded-xl border transition-all cursor-pointer font-bold ${
                    sampleSize === size
                      ? 'bg-[#d4af37]/25 border-[#d4af37] text-[#d4af37] shadow-lg shadow-[#d4af37]/20 scale-105'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="p-5 bg-black/50 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-white/50 uppercase block">Margem Teórica Calculada:</span>
                <span className="text-3xl sm:text-4xl font-mono font-bold text-emerald-400 mt-1 block">
                  &plusmn; {marginError.toFixed(2)}%
                </span>
              </div>
              <span className="text-xs sm:text-sm font-mono text-white/50 text-center sm:text-right">
                Padrão divulgado por Datafolha, Quaest e Ipec
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: O Caráter Referencial & Concessão Metodológica */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="bg-[#121418] p-6 sm:p-7 rounded-2xl border border-white/10 shadow-xl h-full flex flex-col justify-between space-y-5"
          >
            <div>
              <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                <Scale className="w-6 h-6 text-[#d4af37]" />
                <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-[#d4af37] font-bold">
                  Fundamentação Conceitual & Concessão Prática
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-editorial-serif font-bold text-white mb-4">
                Por que a Margem de Erro em Cotas é um Indicador Referencial?
              </h3>

              <div className="space-y-4 text-base sm:text-lg text-white/85 font-light leading-relaxed">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2.5 text-white/95 font-bold text-base sm:text-lg">
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-amber-300">Ausência de Sorteio Aleatório Individual:</span>
                  </div>
                  <p className="text-white/80 pl-7 text-sm sm:text-base leading-relaxed">
                    A seleção é dirigida por perfis (sem listagem de CPFs sorteados). Logo, a margem de erro atua como uma <strong>baliza de dispersão teórica</strong>, e não uma probabilidade exata de intervalo clássico.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2.5 text-white/95 font-bold text-base sm:text-lg">
                    <Info className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-blue-300">Concessão Operacional de Mercado:</span>
                  </div>
                  <p className="text-white/80 pl-7 text-sm sm:text-base leading-relaxed">
                    Os institutos calculam a margem como <strong>convenção padronizada de comparabilidade pública</strong>, permitindo confrontar a dispersão entre pesquisas de mesmo porte amostral.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
                  <div className="flex items-center gap-2.5 text-emerald-300 font-bold text-base sm:text-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Conclusão Epistemológica:</span>
                  </div>
                  <p className="text-emerald-100/90 pl-7 text-sm sm:text-base leading-relaxed">
                    A margem deve ser interpretada como um <strong>parâmetro orientador de precisão sob cotas balanceadas</strong>, orientando o debate público com transparência.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-mono text-white/50">
              <span>Seção 04 · Procedimentos Técnicos</span>
              <span className="text-[#d4af37] font-semibold text-sm">Próximo: Matriz Prática (n = 1.000) &rarr;</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
