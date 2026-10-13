import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';
import { sound } from '../utils/audio';

export const SlideStepByStepExample: React.FC = () => {
  const [viewMode, setViewMode] = useState<'planejado' | 'desvio'>('planejado');

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
            <span>Capítulo 05</span>
            <span className="text-white/20">/</span>
            <span>Exercício Numérico Aplicado</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Aplicação Numérica Passo a Passo (n = 1.000)" speed={24} delay={100} />
          </h2>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-lg text-xs">
          <button
            onClick={() => {
              sound.playTick();
              setViewMode('planejado');
            }}
            className={`px-3 py-1 rounded transition-all ${
              viewMode === 'planejado'
                ? 'bg-[#d4af37] text-black font-semibold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            01. Matriz Planejada
          </button>
          <button
            onClick={() => {
              sound.playTick();
              setViewMode('desvio');
            }}
            className={`px-3 py-1 rounded transition-all ${
              viewMode === 'desvio'
                ? 'bg-[#d4af37] text-black font-semibold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            02. Desvio & Pós-Estratificação
          </button>
        </div>
      </motion.div>

      {/* Main Content Area with Animated Switch */}
      <AnimatePresence mode="wait">
        {viewMode === 'planejado' ? (
          <motion.div
            key="planejado"
            initial={{ opacity: 0, x: -30, scale: 0.99 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, scale: 0.99 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-2.5"
          >
            <div className="p-2.5 bg-white/[0.02] border border-white/10 rounded-lg flex items-center justify-between text-xs text-white/70">
              <span>
                <strong>Matriz Paramétrica:</strong> Gênero (2) × Faixa Etária (3) = 6 células disjuntas. Fonte: TSE / IBGE.
              </span>
              <span className="font-mono text-[#d4af37] font-semibold">Tamanho contratado: n = 1.000</span>
            </div>

            {/* Compact Parametric Table */}
            <div className="overflow-x-auto rounded-xl border border-white/10 shadow-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#15171c] text-white/90 border-b border-white/10 font-mono uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-2 px-3">Estrato (h)</th>
                    <th className="py-2 px-3">Perfil Demográfico</th>
                    <th className="py-2 px-3">Proporção Censitária (<MathView math="W_h" />)</th>
                    <th className="py-2 px-3">Cálculo (<MathView math="n \times W_h" />)</th>
                    <th className="py-2 px-3 text-[#d4af37]">Meta da Cota (<MathView math="n_h" />)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-[#0f1013]/60 font-mono text-white/80">
                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-1.5 px-3 font-semibold text-white">1</td>
                    <td className="py-1.5 px-3 font-sans text-purple-200">Mulher, 16 a 34 anos</td>
                    <td className="py-1.5 px-3">24,0%</td>
                    <td className="py-1.5 px-3 text-white/50">1.000 × 0,240</td>
                    <td className="py-1.5 px-3 text-white font-bold">240</td>
                  </tr>
                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-1.5 px-3 font-semibold text-white">2</td>
                    <td className="py-1.5 px-3 font-sans text-purple-200">Mulher, 35 a 59 anos</td>
                    <td className="py-1.5 px-3">20,5%</td>
                    <td className="py-1.5 px-3 text-white/50">1.000 × 0,205</td>
                    <td className="py-1.5 px-3 text-white font-bold">205</td>
                  </tr>
                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-1.5 px-3 font-semibold text-white">3</td>
                    <td className="py-1.5 px-3 font-sans text-purple-200">Mulher, 60 anos ou mais</td>
                    <td className="py-1.5 px-3">8,0%</td>
                    <td className="py-1.5 px-3 text-white/50">1.000 × 0,080</td>
                    <td className="py-1.5 px-3 text-white font-bold">80</td>
                  </tr>
                  <tr className="bg-purple-950/20 font-bold border-y border-purple-500/30 text-purple-200">
                    <td className="py-1.5 px-3" colSpan={2}>Subtotal Feminino</td>
                    <td className="py-1.5 px-3">52,5%</td>
                    <td className="py-1.5 px-3 text-white/40">---</td>
                    <td className="py-1.5 px-3 text-[#d4af37]">525</td>
                  </tr>
                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-1.5 px-3 font-semibold text-white">4</td>
                    <td className="py-1.5 px-3 font-sans text-blue-200">Homem, 16 a 34 anos</td>
                    <td className="py-1.5 px-3">22,0%</td>
                    <td className="py-1.5 px-3 text-white/50">1.000 × 0,220</td>
                    <td className="py-1.5 px-3 text-white font-bold">220</td>
                  </tr>
                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-1.5 px-3 font-semibold text-white">5</td>
                    <td className="py-1.5 px-3 font-sans text-blue-200">Homem, 35 a 59 anos</td>
                    <td className="py-1.5 px-3">18,5%</td>
                    <td className="py-1.5 px-3 text-white/50">1.000 × 0,185</td>
                    <td className="py-1.5 px-3 text-white font-bold">185</td>
                  </tr>
                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-1.5 px-3 font-semibold text-white">6</td>
                    <td className="py-1.5 px-3 font-sans text-blue-200">Homem, 60 anos ou mais</td>
                    <td className="py-1.5 px-3">7,0%</td>
                    <td className="py-1.5 px-3 text-white/50">1.000 × 0,070</td>
                    <td className="py-1.5 px-3 text-white font-bold">70</td>
                  </tr>
                  <tr className="bg-blue-950/20 font-bold border-y border-blue-500/30 text-blue-200">
                    <td className="py-1.5 px-3" colSpan={2}>Subtotal Masculino</td>
                    <td className="py-1.5 px-3">47,5%</td>
                    <td className="py-1.5 px-3 text-white/40">---</td>
                    <td className="py-1.5 px-3 text-[#d4af37]">475</td>
                  </tr>
                  <tr className="bg-[#15171c] font-bold text-white text-xs border-t-2 border-white/20">
                    <td className="py-1.5 px-3" colSpan={2}>Total Geral</td>
                    <td className="py-1.5 px-3">100,0%</td>
                    <td className="py-1.5 px-3 text-white/40">---</td>
                    <td className="py-1.5 px-3 text-[#d4af37] font-mono">1.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="desvio"
            initial={{ opacity: 0, x: 30, scale: 0.99 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.99 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start"
          >
            {/* Deviation Analysis: from Left with slight tilt */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -1 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-3"
            >
              <div className="p-4 bg-[#121418] border border-white/10 rounded-xl space-y-2.5 shadow-xl">
                <span className="text-[11px] font-mono uppercase text-amber-400">
                  Desvio de Campo & Compensação Algébrica
                </span>
                <p className="text-xs text-white/80 leading-relaxed font-light">
                  Suponha que no fechamento o <strong>Estrato 3 (Mulher 60+)</strong> coletou apenas <strong>60 questionários</strong> (meta era 80), e o <strong>Estrato 4 (Homem 16-34)</strong> fechou em <strong>240</strong> (meta era 220):
                </p>
                <div className="p-3 bg-white/[0.03] border border-white/10 rounded-lg space-y-2 font-mono text-xs">
                  <div className="text-purple-300">
                    <MathView math="f_3 = \frac{W_3}{w_3} = \frac{0,080}{60 / 1.000} = \frac{0,080}{0,060} = \mathbf{1,333}" block />
                  </div>
                  <div className="text-blue-300 border-t border-white/10 pt-1.5">
                    <MathView math="f_4 = \frac{W_4}{w_4} = \frac{0,220}{240 / 1.000} = \frac{0,220}{0,240} = \mathbf{0,916}" block />
                  </div>
                </div>
                <p className="text-[11px] text-white/60">
                  O peso <MathView math="f_3 = 1,333 > 1" /> infla matematicamente a resposta das idosas entrevistadas, recompondo a proporção censitária de 8%.
                </p>
              </div>
            </motion.div>

            {/* Margin of error comparison: from Right */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 1 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 space-y-2.5"
            >
              <div className="p-4 bg-[#101215] border border-white/10 rounded-xl space-y-3 shadow-xl">
                <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                  Impacto no Erro Amostral Real
                </h4>
                <div className="space-y-2 text-xs">
                  <motion.div whileHover={{ scale: 1.02 }} className="p-2.5 bg-white/[0.03] border border-white/10 rounded-lg">
                    <span className="text-white/50 block font-mono text-[10px]">Margem Nominal Declarada (AAS):</span>
                    <div className="text-lg font-bold font-mono text-blue-300">
                      e = ± 3,10%
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                    <span className="text-amber-300 block font-mono text-[10px]">Margem Efetiva Real (Deff = 1,60):</span>
                    <div className="text-lg font-bold font-mono text-amber-400">
                      e_real = ± 3,92%
                    </div>
                  </motion.div>
                </div>

                <div className="p-2.5 bg-white/[0.02] border border-white/10 rounded-lg text-[11px] text-white/70">
                  <strong>Conclusão:</strong> A incerteza real do levantamento é cerca de <span className="text-[#d4af37] font-semibold">+0,82 p.p. superior</span> à divulgada na imprensa.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
