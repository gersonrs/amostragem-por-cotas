import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, RotateCcw } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';
import { sound } from '../utils/audio';

export const SlideAlgebraicFormulation: React.FC = () => {
  // Interactive Reweighting Simulator State
  const totalSample = 1000;
  const [stratum3Collected, setStratum3Collected] = useState<number>(60); // Target 80 (8%)
  const [stratum4Collected, setStratum4Collected] = useState<number>(240); // Target 220 (22%)

  // Parametric population weights Wh
  const W3 = 0.080; // 8.0% (Mulher 60+)
  const W4 = 0.220; // 22.0% (Homem 16-34)

  // Sample weights wh
  const w3 = stratum3Collected / totalSample;
  const w4 = stratum4Collected / totalSample;

  // Post-stratification factors fh = Wh / wh
  const f3 = w3 > 0 ? W3 / w3 : 0;
  const f4 = w4 > 0 ? W4 / w4 : 0;

  // Candidate preference (example: 40% vs 65%)
  const p3 = 0.40;
  const p4 = 0.65;
  const unweightedTwoStrata = (p3 * stratum3Collected + p4 * stratum4Collected) / (stratum3Collected + stratum4Collected);
  const weightedTwoStrata = (p3 * W3 + p4 * W4) / (W3 + W4);

  return (
    <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-3 lg:py-6 space-y-5 min-h-[calc(100vh-8.5rem)] flex flex-col justify-between">
      {/* Header with Typewriter Effect */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-[0.2em] font-semibold">
            <span>Seção 04</span>
            <span className="text-white/20">/</span>
            <span>Procedimentos Técnicos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Procedimentos Técnicos e Formulação Matemática" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO II · PARTIÇÃO, ESTIMADORES & PONDERAÇÃO
        </div>
      </motion.div>

      {/* Grid: Formal Equations on Left, Live Simulator on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
        {/* Left: LaTeX Equations Display */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-3.5 flex flex-col justify-between"
        >
          <motion.div
            whileHover={{ scale: 1.015, x: 3 }}
            className="p-4 bg-[#121418] border border-white/10 rounded-2xl space-y-2 shadow-xl"
          >
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#d4af37] block font-bold">
              1. Partição Matricial & Alocação Proporcional
            </span>
            <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl text-center text-sm">
              <MathView math="W_h = \frac{N_h}{N}, \quad \sum_{h=1}^H W_h = 1 \quad \implies \quad n_h = n \cdot W_h" block />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.015, x: 3 }}
            className="p-4 bg-[#121418] border border-white/10 rounded-2xl space-y-2 shadow-xl"
          >
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#d4af37] block font-bold">
              2. Estimador Pontual da Média & Proporção
            </span>
            <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl text-center text-sm">
              <MathView math="\bar{y}_{cota} = \sum_{h=1}^{H} W_h \left( \frac{1}{n_h} \sum_{i=1}^{n_h} y_{hi} \right), \quad \hat{p}_{cota} = \sum_{h=1}^{H} W_h \hat{p}_h" block />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.015, x: 3 }}
            className="p-4 bg-[#121418] border border-white/10 rounded-2xl space-y-2 shadow-xl"
          >
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#d4af37] block font-bold">
              3. Fator de Pós-Estratificação (Pesos de Calibração)
            </span>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              Compensa distorções empíricas entre a proporção obtida (<MathView math="w_h = n_h/n" />) e a paramétrica (<MathView math="W_h" />):
            </p>
            <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl text-center text-sm">
              <MathView math="f_h = \frac{W_h}{w_h} = \frac{N_h / N}{n_h / n}" block />
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Live Interactive Simulator */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 bg-[#111317] border border-white/15 p-5 sm:p-6 rounded-2xl space-y-4 shadow-2xl flex flex-col justify-between"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#d4af37]" />
              <h4 className="text-base sm:text-lg font-bold text-white">Simulador de Ponderação em Tempo Real</h4>
            </div>
            <button
              onClick={() => {
                sound.playTick();
                setStratum3Collected(60);
                setStratum4Collected(240);
              }}
              className="flex items-center gap-1.5 text-xs font-mono text-white/50 hover:text-white transition-colors bg-white/5 px-2.5 py-1 rounded-lg"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Resetar</span>
            </button>
          </div>

          {/* Interactive Sliders */}
          <div className="space-y-4 bg-white/[0.02] p-4 rounded-xl border border-white/10 text-sm">
            <div>
              <div className="flex items-center justify-between font-mono text-xs sm:text-sm mb-1.5">
                <span className="text-purple-300 font-semibold">Estrato 3: Mulheres 60+ anos</span>
                <span className="text-white/80">Coletado: <strong className="text-purple-300 font-bold">{stratum3Collected}</strong> (Meta: 80)</span>
              </div>
              <input
                type="range"
                min="30"
                max="120"
                value={stratum3Collected}
                onChange={(e) => setStratum3Collected(Number(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer h-2"
              />
            </div>

            <div>
              <div className="flex items-center justify-between font-mono text-xs sm:text-sm mb-1.5">
                <span className="text-blue-300 font-semibold">Estrato 4: Homens 16-34 anos</span>
                <span className="text-white/80">Coletado: <strong className="text-blue-300 font-bold">{stratum4Collected}</strong> (Meta: 220)</span>
              </div>
              <input
                type="range"
                min="160"
                max="300"
                value={stratum4Collected}
                onChange={(e) => setStratum4Collected(Number(e.target.value))}
                className="w-full accent-blue-400 cursor-pointer h-2"
              />
            </div>
          </div>

          {/* Computed Output Cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`p-4 rounded-xl border transition-all shadow-md ${f3 > 1 ? 'bg-purple-950/30 border-purple-500/40' : 'bg-white/5 border-white/10'}`}
            >
              <span className="text-xs font-mono uppercase text-purple-300 block font-bold">Fator f₃ (Mulher 60+)</span>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1">
                {f3.toFixed(3)}
              </div>
              <span className="text-xs text-white/60 block mt-1">
                {f3 > 1 ? 'Expande peso (> 1)' : 'Reduz peso (< 1)'}
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`p-4 rounded-xl border transition-all shadow-md ${f4 < 1 ? 'bg-blue-950/30 border-blue-500/40' : 'bg-white/5 border-white/10'}`}
            >
              <span className="text-xs font-mono uppercase text-blue-300 block font-bold">Fator f₄ (Homem 16-34)</span>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1">
                {f4.toFixed(3)}
              </div>
              <span className="text-xs text-white/60 block mt-1">
                {f4 < 1 ? 'Amortece peso (< 1)' : 'Expande peso (> 1)'}
              </span>
            </motion.div>
          </div>

          {/* Impact on Estimation Box */}
          <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl space-y-2 text-sm font-mono">
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-xs sm:text-sm">Média Bruta (Sem Ponderação):</span>
              <strong className="text-amber-400 text-base">{(unweightedTwoStrata * 100).toFixed(2)}%</strong>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-1.5">
              <span className="text-white/90 text-xs sm:text-sm font-bold">Média Corrigida (Com Pós-Estratificação):</span>
              <strong className="text-emerald-400 text-lg">{(weightedTwoStrata * 100).toFixed(2)}%</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
