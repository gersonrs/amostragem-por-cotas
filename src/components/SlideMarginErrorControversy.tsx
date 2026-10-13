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
            <span>Seção 04.3</span>
            <span className="text-white/20">/</span>
            <span>Precisão Metodológica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Cálculo da Margem de Erro e seu Caráter Referencial" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO II · CONCESSÃO OPERACIONAL & INTERPRETAÇÃO
        </div>
      </motion.div>

      {/* Main Grid: Theoretical Formulation & Epistemological Reality */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Left Column: A Fórmula Clássica Emprestada da AAS */}
        <div className="lg:col-span-6 space-y-2.5 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-4 rounded-xl border border-white/10 shadow-lg space-y-2"
          >
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-blue-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-semibold">
                Formulação Clássica (AAS - Amostragem Aleatória Simples)
              </span>
            </div>
            <p className="text-[11px] text-white/80 font-light leading-relaxed">
              Em levantamentos quantitativos, convenciona-se calcular a margem de erro nominal com 95% de confiança (<MathView math="z_{\alpha/2} = 1,96" />) e máxima variância (<MathView math="p = 0,50" />):
            </p>
            <div className="p-3 bg-white/[0.03] border border-white/10 rounded-lg text-center text-sm shadow-inner">
              <MathView math="e = z_{\alpha/2} \cdot \sqrt{\frac{p(1-p)}{n}} = 1,96 \cdot \sqrt{\frac{0,25}{n}}" block />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1 text-[10px] font-mono text-white/60">
              <div className="p-1.5 rounded bg-white/[0.02] border border-white/5 text-center">
                <span className="block text-[#d4af37] font-bold">z = 1,96</span>
                <span>Nível 95%</span>
              </div>
              <div className="p-1.5 rounded bg-white/[0.02] border border-white/5 text-center">
                <span className="block text-[#d4af37] font-bold">p = 0,50</span>
                <span>Cenário Conservador</span>
              </div>
              <div className="p-1.5 rounded bg-white/[0.02] border border-white/5 text-center">
                <span className="block text-[#d4af37] font-bold">n Amostral</span>
                <span>Total de Entrevistas</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-[#121418] p-4 rounded-xl border border-white/10 shadow-lg space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-white">Simulador de Margem Nominal:</span>
              <span className="text-xs font-mono text-[#d4af37] font-bold">n = {sampleSize.toLocaleString('pt-BR')} questionários</span>
            </div>

            <div className="flex gap-2">
              {[1000, 2000, 2500, 2884, 5026].map((size) => (
                <button
                  key={size}
                  onClick={() => setSampleSize(size)}
                  className={`flex-1 py-1 text-[10px] font-mono rounded border transition-all cursor-pointer ${
                    sampleSize === size
                      ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37] font-bold'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="p-3 bg-black/40 rounded-lg border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-white/50 block">Margem de Erro Teórica Estimada:</span>
                <span className="text-xl font-mono font-bold text-emerald-400">
                  &plusmn; {marginError.toFixed(2)}%
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/40 max-w-[200px] text-right">
                Padrão adotado pelos grandes institutos (Datafolha, Quaest, Ipec)
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
            className="bg-[#121418] p-4 sm:p-5 rounded-xl border border-white/10 shadow-lg h-full flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Scale className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37] font-semibold">
                  Fundamentação Conceitual & Concessão Prática
                </span>
              </div>

              <h3 className="text-base font-editorial-serif font-bold text-white mb-2">
                Por que a Margem de Erro em Cotas é um Indicador Referencial?
              </h3>

              <div className="space-y-2.5 text-[11px] text-white/80 font-light leading-relaxed">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-white/90 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-amber-300">Ausência de Sorteio Estocástico Estrito:</span>
                  </div>
                  <p className="text-white/70">
                    Como a seleção dos indivíduos nos estratos ocorre por abordagem dirigida em pontos de fluxo ou visitas domiciliares sem lista nominal completa prévia (<MathView math="\pi_i" /> não estritamente quantificado para cada cidadão), os pressupostos formais do Teorema Central do Limite perdem sustentação estocástica absoluta.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-white/90 font-medium">
                    <Info className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-blue-300">Concessão Operacional de Divulgação:</span>
                  </div>
                  <p className="text-white/70">
                    O cálculo clássico é mantido pelos institutos de pesquisa como uma <strong>concessão pragmática padronizada</strong> para permitir comparabilidade com o público e o mercado, servindo como uma medida de referência da variabilidade amostral máxima esperada.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Interpretação Científica Adequada:</span>
                  </div>
                  <p className="text-emerald-100/80">
                    A margem divulgada deve ser tratada como um <strong>parâmetro orientador de dispersão</strong> da amostra sob proporções equilibradas, e não como uma certeza probabilística mecânica irrefutável.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
              <span>Seção 04 · Procedimentos Técnicos</span>
              <span className="text-[#d4af37]">Próximo: Exemplo Numérico Passo a Passo (n = 1.000) &rarr;</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
