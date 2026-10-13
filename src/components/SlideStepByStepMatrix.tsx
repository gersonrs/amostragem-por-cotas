import React from 'react';
import { motion } from 'motion/react';
import { Table, CheckCircle2 } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideStepByStepMatrix: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-2 sm:py-3 space-y-3">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-2.5 flex flex-col md:flex-row md:items-end justify-between gap-2"
      >
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#d4af37] uppercase tracking-[0.2em]">
            <span>Seção 05</span>
            <span className="text-white/20">/</span>
            <span>Exemplo Prático</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Matriz de Proporções Populacionais e Cotas (n = 1.000)" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO III · MATRIZ PARAMÉTRICA PLANEJADA
        </div>
      </motion.div>

      <div className="p-2.5 bg-white/[0.02] border border-white/10 rounded-lg flex items-center justify-between text-xs text-white/70">
        <span>
          <strong>Matriz Paramétrica:</strong> Gênero (2) × Faixa Etária (3) = 6 células disjuntas. Fonte censitária oficial: TSE / IBGE.
        </span>
        <span className="font-mono text-[#d4af37] font-semibold">Tamanho total contratado: n = 1.000</span>
      </div>

      {/* Full Parametric Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-x-auto rounded-xl border border-white/10 shadow-xl"
      >
        <table className="w-full text-left text-xs">
          <thead className="bg-[#15171c] text-white/90 border-b border-white/10 font-mono uppercase text-[10px] tracking-wider">
            <tr>
              <th className="py-2.5 px-3.5">Estrato (h)</th>
              <th className="py-2.5 px-3.5">Perfil Demográfico</th>
              <th className="py-2.5 px-3.5">Proporção Censitária (<MathView math="W_h" />)</th>
              <th className="py-2.5 px-3.5">Cálculo (<MathView math="n \times W_h" />)</th>
              <th className="py-2.5 px-3.5 text-[#d4af37]">Meta da Cota (<MathView math="n_h" />)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 bg-[#0f1013]/70 font-mono text-white/80">
            <tr className="hover:bg-white/[0.03] transition-colors">
              <td className="py-2 px-3.5 font-semibold text-white">1</td>
              <td className="py-2 px-3.5 font-sans text-purple-200">Mulher, 16 a 34 anos</td>
              <td className="py-2 px-3.5">24,0%</td>
              <td className="py-2 px-3.5 text-white/50">1.000 × 0,240</td>
              <td className="py-2 px-3.5 text-white font-bold">240</td>
            </tr>
            <tr className="hover:bg-white/[0.03] transition-colors">
              <td className="py-2 px-3.5 font-semibold text-white">2</td>
              <td className="py-2 px-3.5 font-sans text-purple-200">Mulher, 35 a 59 anos</td>
              <td className="py-2 px-3.5">20,5%</td>
              <td className="py-2 px-3.5 text-white/50">1.000 × 0,205</td>
              <td className="py-2 px-3.5 text-white font-bold">205</td>
            </tr>
            <tr className="hover:bg-white/[0.03] transition-colors">
              <td className="py-2 px-3.5 font-semibold text-white">3</td>
              <td className="py-2 px-3.5 font-sans text-purple-200">Mulher, 60 anos ou mais</td>
              <td className="py-2 px-3.5">8,0%</td>
              <td className="py-2 px-3.5 text-white/50">1.000 × 0,080</td>
              <td className="py-2 px-3.5 text-white font-bold">80</td>
            </tr>
            <tr className="bg-purple-950/20 font-bold border-y border-purple-500/30 text-purple-200">
              <td className="py-2 px-3.5" colSpan={2}>Subtotal Feminino</td>
              <td className="py-2 px-3.5">52,5%</td>
              <td className="py-2 px-3.5 text-white/40">---</td>
              <td className="py-2 px-3.5 text-[#d4af37]">525 entrevistas</td>
            </tr>
            <tr className="hover:bg-white/[0.03] transition-colors">
              <td className="py-2 px-3.5 font-semibold text-white">4</td>
              <td className="py-2 px-3.5 font-sans text-blue-200">Homem, 16 a 34 anos</td>
              <td className="py-2 px-3.5">22,0%</td>
              <td className="py-2 px-3.5 text-white/50">1.000 × 0,220</td>
              <td className="py-2 px-3.5 text-white font-bold">220</td>
            </tr>
            <tr className="hover:bg-white/[0.03] transition-colors">
              <td className="py-2 px-3.5 font-semibold text-white">5</td>
              <td className="py-2 px-3.5 font-sans text-blue-200">Homem, 35 a 59 anos</td>
              <td className="py-2 px-3.5">18,5%</td>
              <td className="py-2 px-3.5 text-white/50">1.000 × 0,185</td>
              <td className="py-2 px-3.5 text-white font-bold">185</td>
            </tr>
            <tr className="hover:bg-white/[0.03] transition-colors">
              <td className="py-2 px-3.5 font-semibold text-white">6</td>
              <td className="py-2 px-3.5 font-sans text-blue-200">Homem, 60 anos ou mais</td>
              <td className="py-2 px-3.5">7,0%</td>
              <td className="py-2 px-3.5 text-white/50">1.000 × 0,070</td>
              <td className="py-2 px-3.5 text-white font-bold">70</td>
            </tr>
            <tr className="bg-blue-950/20 font-bold border-y border-blue-500/30 text-blue-200">
              <td className="py-2 px-3.5" colSpan={2}>Subtotal Masculino</td>
              <td className="py-2 px-3.5">47,5%</td>
              <td className="py-2 px-3.5 text-white/40">---</td>
              <td className="py-2 px-3.5 text-[#d4af37]">475 entrevistas</td>
            </tr>
            <tr className="bg-[#15171c] font-bold text-white text-xs border-t-2 border-white/20">
              <td className="py-2 px-3.5" colSpan={2}>Total Geral Amostral (n)</td>
              <td className="py-2 px-3.5">100,0%</td>
              <td className="py-2 px-3.5 text-white/40">---</td>
              <td className="py-2 px-3.5 text-[#d4af37] font-mono text-sm">1.000 (100%)</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};
