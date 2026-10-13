import React from 'react';
import { motion } from 'motion/react';
import { Table, CheckCircle2 } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideStepByStepMatrix: React.FC = () => {
  return (
    <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-3 lg:py-6 space-y-5 min-h-[calc(100vh-8.5rem)] flex flex-col justify-between">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-[0.2em] font-semibold">
            <span>Seção 05</span>
            <span className="text-white/20">/</span>
            <span>Exemplo Prático</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Matriz de Proporções Populacionais e Cotas (n = 1.000)" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO III · MATRIZ PARAMÉTRICA PLANEJADA
        </div>
      </motion.div>

      <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-white/80">
        <span>
          <strong>Matriz Paramétrica:</strong> Gênero (2) × Faixa Etária (3) = 6 células disjuntas. Fonte oficial: TSE / IBGE.
        </span>
        <span className="font-mono text-[#d4af37] font-bold text-base">Amostra Contratada: n = 1.000</span>
      </div>

      {/* Full Parametric Table - Projector Scale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl flex-1 flex flex-col justify-center"
      >
        <table className="w-full text-left text-base sm:text-lg">
          <thead className="bg-[#15171c] text-white/90 border-b border-white/10 font-mono uppercase text-sm sm:text-base tracking-wider">
            <tr>
              <th className="py-3.5 px-5">Estrato (h)</th>
              <th className="py-3.5 px-5">Perfil Demográfico</th>
              <th className="py-3.5 px-5">Proporção Censitária (<MathView math="W_h" />)</th>
              <th className="py-3.5 px-5">Cálculo (<MathView math="n \times W_h" />)</th>
              <th className="py-3.5 px-5 text-[#d4af37]">Meta da Cota (<MathView math="n_h" />)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-[#0f1013]/90 font-mono text-white/90">
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-3 px-5 font-bold text-white text-lg">1</td>
              <td className="py-3 px-5 font-sans text-purple-200 font-semibold text-lg">Mulher, 16 a 34 anos</td>
              <td className="py-3 px-5 font-bold">24,0%</td>
              <td className="py-3 px-5 text-white/60">1.000 × 0,240</td>
              <td className="py-3 px-5 text-white font-bold text-xl">240</td>
            </tr>
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-3 px-5 font-bold text-white text-lg">2</td>
              <td className="py-3 px-5 font-sans text-purple-200 font-semibold text-lg">Mulher, 35 a 59 anos</td>
              <td className="py-3 px-5 font-bold">20,5%</td>
              <td className="py-3 px-5 text-white/60">1.000 × 0,205</td>
              <td className="py-3 px-5 text-white font-bold text-xl">205</td>
            </tr>
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-3 px-5 font-bold text-white text-lg">3</td>
              <td className="py-3 px-5 font-sans text-purple-200 font-semibold text-lg">Mulher, 60 anos ou mais</td>
              <td className="py-3 px-5 font-bold">8,0%</td>
              <td className="py-3 px-5 text-white/60">1.000 × 0,080</td>
              <td className="py-3 px-5 text-white font-bold text-xl">80</td>
            </tr>
            <tr className="bg-purple-950/40 font-bold border-y-2 border-purple-500/50 text-purple-200 text-base sm:text-lg">
              <td className="py-3.5 px-5" colSpan={2}>Subtotal Feminino</td>
              <td className="py-3.5 px-5 text-xl font-bold">52,5%</td>
              <td className="py-3.5 px-5 text-white/50">---</td>
              <td className="py-3.5 px-5 text-[#d4af37] text-xl font-bold">525 entrevistas</td>
            </tr>
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-3 px-5 font-bold text-white text-lg">4</td>
              <td className="py-3 px-5 font-sans text-blue-200 font-semibold text-lg">Homem, 16 a 34 anos</td>
              <td className="py-3 px-5 font-bold">22,0%</td>
              <td className="py-3 px-5 text-white/60">1.000 × 0,220</td>
              <td className="py-3 px-5 text-white font-bold text-xl">220</td>
            </tr>
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-3 px-5 font-bold text-white text-lg">5</td>
              <td className="py-3 px-5 font-sans text-blue-200 font-semibold text-lg">Homem, 35 a 59 anos</td>
              <td className="py-3 px-5 font-bold">18,5%</td>
              <td className="py-3 px-5 text-white/60">1.000 × 0,185</td>
              <td className="py-3 px-5 text-white font-bold text-xl">185</td>
            </tr>
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-3 px-5 font-bold text-white text-lg">6</td>
              <td className="py-3 px-5 font-sans text-blue-200 font-semibold text-lg">Homem, 60 anos ou mais</td>
              <td className="py-3 px-5 font-bold">7,0%</td>
              <td className="py-3 px-5 text-white/60">1.000 × 0,070</td>
              <td className="py-3 px-5 text-white font-bold text-xl">70</td>
            </tr>
            <tr className="bg-blue-950/40 font-bold border-y-2 border-blue-500/50 text-blue-200 text-base sm:text-lg">
              <td className="py-3.5 px-5" colSpan={2}>Subtotal Masculino</td>
              <td className="py-3.5 px-5 text-xl font-bold">47,5%</td>
              <td className="py-3.5 px-5 text-white/50">---</td>
              <td className="py-3.5 px-5 text-[#d4af37] text-xl font-bold">475 entrevistas</td>
            </tr>
            <tr className="bg-[#15171c] font-bold text-white text-lg sm:text-xl border-t-2 border-white/30">
              <td className="py-4 px-5" colSpan={2}>Total Geral Amostral (n)</td>
              <td className="py-4 px-5 text-2xl font-bold text-emerald-400">100,0%</td>
              <td className="py-4 px-5 text-white/50">---</td>
              <td className="py-4 px-5 text-[#d4af37] font-mono text-2xl font-bold">1.000 (100%)</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Summary Badges for Projector View */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
        <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-between">
          <span className="text-sm font-semibold text-purple-200">Maioria do Eleitorado:</span>
          <span className="text-lg font-mono font-bold text-purple-300">Mulheres 52,5%</span>
        </div>
        <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between">
          <span className="text-sm font-semibold text-blue-200">Segmento Jovem (16-34):</span>
          <span className="text-lg font-mono font-bold text-blue-300">460 questionários (46%)</span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-between">
          <span className="text-sm font-semibold text-[#d4af37]">Meta Total Rigorosa:</span>
          <span className="text-lg font-mono font-bold text-emerald-400">1.000 Entrevistas Válidas</span>
        </div>
      </div>
    </div>
  );
};
