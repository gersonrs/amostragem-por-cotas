import React from 'react';
import { motion } from 'motion/react';
import { Users, Layers, Calculator, ArrowRight } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideFlowMatrix: React.FC = () => {
  const demographicCells = [
    { label: 'Mulheres (16-34)', popWeight: '24,0%', target: 240, color: 'border-[#d4af37] text-[#d4af37]' },
    { label: 'Mulheres (35-59)', popWeight: '20,5%', target: 205, color: 'border-amber-400 text-amber-400' },
    { label: 'Mulheres (60+)', popWeight: '8,0%', target: 80, color: 'border-purple-400 text-purple-400' },
    { label: 'Homens (16-34)', popWeight: '22,0%', target: 220, color: 'border-blue-400 text-blue-400' },
    { label: 'Homens (35-59)', popWeight: '18,5%', target: 185, color: 'border-sky-400 text-sky-400' },
    { label: 'Homens (60+)', popWeight: '7,0%', target: 70, color: 'border-indigo-400 text-indigo-400' },
  ];

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
            <TypewriterText text="Do Universo à Matriz Multidimensional de Cotas" speed={26} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          FLUXO PARTE 1 · PLANEJAMENTO PARAMÉTRICO
        </div>
      </motion.div>

      {/* 3 Steps Pipeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="p-4 bg-[#121418] border border-white/10 rounded-xl space-y-2.5 shadow-xl relative"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37]">
              Fase 01 · Universo
            </span>
            <Users className="w-4 h-4 text-[#d4af37]" />
          </div>
          <h3 className="text-base font-editorial-serif font-bold text-white">
            Identificação Censitária (N)
          </h3>
          <p className="text-xs text-white/70 leading-relaxed font-light">
            Mapeia-se o universo total da pesquisa (ex.: 156,4M de eleitores aptos no TSE / IBGE Censo). Extraem-se os totais marginais oficiais.
          </p>
          <div className="p-2 bg-white/[0.03] border border-white/10 rounded-lg text-center text-xs">
            <MathView math="N = \sum_{h=1}^H N_h" block />
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="p-4 bg-[#121418] border border-white/10 rounded-xl space-y-2.5 shadow-xl relative"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
              Fase 02 · Estruturação
            </span>
            <Layers className="w-4 h-4 text-blue-400" />
          </div>
          <h3 className="text-base font-editorial-serif font-bold text-white">
            Matriz Multidimensional (Wh)
          </h3>
          <p className="text-xs text-white/70 leading-relaxed font-light">
            Cruza-se as variáveis de controle (Sexo × Idade × Instrução). Cada indivíduo pertence estritamente a uma única célula disjunta.
          </p>
          <div className="p-2 bg-white/[0.03] border border-white/10 rounded-lg text-center text-xs">
            <MathView math="W_h = \frac{N_h}{N}, \quad \sum_{h=1}^H W_h = 1" block />
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="p-4 bg-[#121418] border border-white/10 rounded-xl space-y-2.5 shadow-xl relative"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
              Fase 03 · Alocação
            </span>
            <Calculator className="w-4 h-4 text-emerald-400" />
          </div>
          <h3 className="text-base font-editorial-serif font-bold text-white">
            Cálculo das Cotas (nh)
          </h3>
          <p className="text-xs text-white/70 leading-relaxed font-light">
            Fixado o tamanho amostral global (<MathView math="n = 1.000" />), multiplica-se a proporção populacional <MathView math="W_h" /> para obter a meta de cada célula.
          </p>
          <div className="p-2 bg-white/[0.03] border border-white/10 rounded-lg text-center text-xs">
            <MathView math="n_h = n \cdot W_h = n \cdot \left(\frac{N_h}{N}\right)" block />
          </div>
        </motion.div>
      </div>

      {/* Visual Live Representation of Matrix Allocation */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="p-3.5 bg-gradient-to-br from-[#121418] to-[#0c0d10] border border-white/10 rounded-xl space-y-2 shadow-xl"
      >
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-white/70 uppercase">
            Matriz Resultante de Cotas para Amostra de <strong className="text-white">n = 1.000</strong> Eleitores
          </span>
          <span className="text-[#d4af37] font-semibold">Total: 1.000 Entrevistas (100%)</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-1">
          {demographicCells.map((c, i) => (
            <div key={i} className={`p-2 rounded-lg bg-white/[0.02] border ${c.color} text-center space-y-0.5`}>
              <div className="text-[10px] text-white/60 truncate">{c.label}</div>
              <div className="text-xs font-bold text-white font-mono">{c.popWeight}</div>
              <div className="text-[10px] text-white/40 font-mono">Meta: <span className="text-[#d4af37] font-bold">{c.target}</span></div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
