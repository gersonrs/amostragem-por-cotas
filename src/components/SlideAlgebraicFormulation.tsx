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
    <div className="w-full max-w-6xl mx-auto px-6 py-2 sm:py-3 space-y-3">
      {/* Header with Typewriter Effect */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-2.5 flex flex-col md:flex-row md:items-end justify-between gap-2"
      >
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#d4af37] uppercase tracking-[0.2em]">
            <span>Seção 04</span>
            <span className="text-white/20">/</span>
            <span>Procedimentos Técnicos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Procedimentos Técnicos e Formulação Matemática" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO II · PARTIÇÃO, ESTIMADORES & PONDERAÇÃO
        </div>
      </motion.div>

      {/* Grid: Formal Equations on Left (sliding in from Left), Live Simulator on Right (sliding in from Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left: LaTeX Equations Display */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-2.5"
        >
          <motion.div
            whileHover={{ scale: 1.015, x: 3 }}
            className="p-3.5 bg-[#121418] border border-white/10 rounded-xl space-y-1.5 shadow-xl transition-all"
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] block">
              1. Partição Matricial & Alocação Proporcional
            </span>
            <div className="p-2 bg-white/[0.03] border border-white/10 rounded-lg text-center text-xs">
              <MathView math="W_h = \frac{N_h}{N}, \quad \sum_{h=1}^H W_h = 1 \quad \implies \quad n_h = n \cdot W_h" block />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.015, x: 3 }}
            className="p-3.5 bg-[#121418] border border-white/10 rounded-xl space-y-1.5 shadow-xl transition-all"
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] block">
              2. Estimador Pontual da Média & Proporção
            </span>
            <div className="p-2 bg-white/[0.03] border border-white/10 rounded-lg text-center text-xs">
              <MathView math="\bar{y}_{cota} = \sum_{h=1}^{H} W_h \left( \frac{1}{n_h} \sum_{i=1}^{n_h} y_{hi} \right), \quad \hat{p}_{cota} = \sum_{h=1}^{H} W_h \hat{p}_h" block />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.015, x: 3 }}
            className="p-3 bg-[#121418] border border-white/10 rounded-xl space-y-1 shadow-xl transition-all"
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] block">
              3. Fator Pós-Estratificação (Post-Stratification Weight)
            </span>
            <div className="p-1.5 bg-white/[0.03] border border-white/10 rounded-lg text-center text-xs">
              <MathView math="f_h = \frac{W_h}{w_h} = \frac{N_h / N}{n_h / n}" block />
            </div>
          </motion.div>

          {/* 3D Statistical Matrix Visualization */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-xl overflow-hidden border border-cyan-500/30 group bg-black/40"
          >
            <img
              src="/src/assets/images/statistical_matrix_1791898488874.jpg"
              alt="Modelagem 3D da matriz de cotas multidimensional e curvas de probabilidade"
              referrerPolicy="no-referrer"
              className="w-full h-28 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-2.5">
              <span className="text-[10px] text-cyan-200 font-mono">
                Visualização 3D: Células Disjuntas da Matriz de Cotas & Curvas de Densidade
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Live Interactive Simulator (sliding in from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 bg-[#111317] border border-white/15 p-4 sm:p-5 rounded-xl space-y-3 shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-[#d4af37]" />
              <h4 className="text-sm font-bold text-white">Simulador de Ponderação em Campo</h4>
            </div>
            <button
              onClick={() => {
                sound.playTick();
                setStratum3Collected(60);
                setStratum4Collected(240);
              }}
              className="flex items-center gap-1 text-[10px] font-mono text-white/40 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Resetar</span>
            </button>
          </div>

          {/* Interactive Sliders */}
          <div className="space-y-3 bg-white/[0.02] p-3 rounded-lg border border-white/10 text-xs">
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] mb-1">
                <span className="text-purple-300">Estrato 3: Mulheres 60+ anos</span>
                <span className="text-white/80">Coletado: <strong className="text-purple-300">{stratum3Collected}</strong> (Meta: 80)</span>
              </div>
              <input
                type="range"
                min="30"
                max="120"
                value={stratum3Collected}
                onChange={(e) => setStratum3Collected(Number(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer h-1"
              />
            </div>

            <div>
              <div className="flex items-center justify-between font-mono text-[11px] mb-1">
                <span className="text-blue-300">Estrato 4: Homens 16-34 anos</span>
                <span className="text-white/80">Coletado: <strong className="text-blue-300">{stratum4Collected}</strong> (Meta: 220)</span>
              </div>
              <input
                type="range"
                min="160"
                max="300"
                value={stratum4Collected}
                onChange={(e) => setStratum4Collected(Number(e.target.value))}
                className="w-full accent-blue-400 cursor-pointer h-1"
              />
            </div>
          </div>

          {/* Computed Output Cards with Hover Rotation */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              whileHover={{ scale: 1.03, rotate: -0.5 }}
              className={`p-3 rounded-lg border transition-all shadow-md ${f3 > 1 ? 'bg-purple-950/20 border-purple-500/30' : 'bg-white/5 border-white/10'}`}
            >
              <span className="text-[10px] font-mono uppercase text-purple-300 block">Fator f₃ (Mulher 60+)</span>
              <div className="text-xl font-mono font-bold text-white mt-0.5">
                {f3.toFixed(3)}
              </div>
              <span className="text-[10px] text-white/50 block mt-0.5">
                {f3 > 1 ? 'Expande peso (> 1)' : 'Reduz peso (< 1)'}
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              className={`p-3 rounded-lg border transition-all shadow-md ${f4 < 1 ? 'bg-blue-950/20 border-blue-500/30' : 'bg-white/5 border-white/10'}`}
            >
              <span className="text-[10px] font-mono uppercase text-blue-300 block">Fator f₄ (Homem 16-34)</span>
              <div className="text-xl font-mono font-bold text-white mt-0.5">
                {f4.toFixed(3)}
              </div>
              <span className="text-[10px] text-white/50 block mt-0.5">
                {f4 < 1 ? 'Amortece peso (< 1)' : 'Expande peso (> 1)'}
              </span>
            </motion.div>
          </div>

          {/* Impact on Estimation Box */}
          <div className="p-2.5 bg-white/[0.03] border border-white/10 rounded-lg space-y-1 text-xs font-mono">
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-[11px]">Média Bruta (Sem Ponderar):</span>
              <strong className="text-amber-400">{(unweightedTwoStrata * 100).toFixed(2)}%</strong>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-1">
              <span className="text-white/80 text-[11px]">Com Pós-Estratificação:</span>
              <strong className="text-emerald-400">{(weightedTwoStrata * 100).toFixed(2)}%</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
