import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';
import { sound } from '../utils/audio';

interface DemographicGroup {
  id: string;
  label: string;
  popWeight: number;
  targetSample: number;
  collected: number;
  color: string;
}

export const SlideInteractiveFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const simulatedSampleTotal = 1000;

  const steps = [
    {
      num: '01',
      title: 'Identificação da População (N)',
      subtitle: 'Universo Censitário',
      desc: 'Define-se a população-alvo (ex.: 156,4M eleitores) e extraem-se as proporções demográficas oficiais de fontes seguras (IBGE Censo / TSE).',
      highlight: 'N = \\sum_{h=1}^H N_h',
    },
    {
      num: '02',
      title: 'Matriz Multidimensional',
      subtitle: 'Estratos Mutuamente Exclusivos',
      desc: 'A população é particionada em H estratos pelo cruzamento de variáveis de controle (Sexo × Idade × Instrução). Cada indivíduo pertence a uma única célula.',
      highlight: 'W_h = \\frac{N_h}{N}, \\quad \\sum W_h = 1',
    },
    {
      num: '03',
      title: 'Definição das Cotas (nh)',
      subtitle: 'Alocação Proporcional',
      desc: 'Fixado o tamanho amostral (n = 1.000), calcula-se a meta de entrevistas para cada estrato h multiplicando Wh pelo tamanho total da amostra.',
      highlight: 'n_h = n \\cdot W_h = n \\cdot \\left(\\frac{N_h}{N}\\right)',
    },
    {
      num: '04',
      title: 'Campo & Abordagem CAPI',
      subtitle: 'Ponto de Fluxo & Trava de Saturação',
      desc: 'Pesquisadores abordam transeuntes para preencher cotas abertas. Ao atingir 100%, o tablet CAPI bloqueia novas abordagens daquele perfil.',
      highlight: 'w_h = \\frac{n_h^{coletado}}{n}',
    },
    {
      num: '05',
      title: 'Pós-Estratificação Algébrica',
      subtitle: 'Ponderação Compensatória',
      desc: 'Se houver desvios ou subdimensionamento em campo, aplica-se o fator multiplicador fh para restaurar a fidelidade censitária.',
      highlight: 'f_h = \\frac{W_h}{w_h} = \\frac{N_h / N}{n_h / n}',
    },
  ];

  const demographicGroups: DemographicGroup[] = [
    { id: 'f_jovem', label: 'Mulheres (16-34)', popWeight: 24.0, targetSample: 240, collected: 240, color: '#d4af37' },
    { id: 'f_adulta', label: 'Mulheres (35-59)', popWeight: 20.5, targetSample: 205, collected: 205, color: '#e8c56e' },
    { id: 'f_idosa', label: 'Mulheres (60+)', popWeight: 8.0, targetSample: 80, collected: 60, color: '#a78bfa' },
    { id: 'm_jovem', label: 'Homens (16-34)', popWeight: 22.0, targetSample: 220, collected: 240, color: '#60a5fa' },
    { id: 'm_adulto', label: 'Homens (35-59)', popWeight: 18.5, targetSample: 185, collected: 185, color: '#38bdf8' },
    { id: 'm_idoso', label: 'Homens (60+)', popWeight: 7.0, targetSample: 70, collected: 70, color: '#93c5fd' },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      sound.playTick();
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      sound.playTick();
      setCurrentStep(currentStep - 1);
    }
  };

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
            <span>Capítulo 02</span>
            <span className="text-white/20">/</span>
            <span>Morfologia da Amostragem</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Fluxo Operacional de Seleção" speed={28} delay={100} />
          </h2>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs font-mono">
          <span className="text-white/40">ETAPA</span>
          <span className="text-[#d4af37] font-bold text-sm">
            {steps[currentStep].num}
          </span>
          <span className="text-white/30">/</span>
          <span className="text-white/50">05</span>
        </div>
      </motion.div>

      {/* Main Interactive Stage Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Visual Step-by-Step Flow with Animated Card */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -0.5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-3"
        >
          {/* Timeline dots */}
          <div className="flex items-center gap-1 pb-1">
            {steps.map((st, idx) => (
              <button
                key={st.num}
                onClick={() => {
                  sound.playTick();
                  setCurrentStep(idx);
                }}
                className={`flex-1 h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === currentStep
                    ? 'bg-[#d4af37] scale-y-150 shadow-md shadow-[#d4af37]/30'
                    : idx < currentStep
                    ? 'bg-white/40 hover:bg-white/60'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Active Step Card with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="bg-[#121418] border border-white/15 p-4 sm:p-5 rounded-xl flex flex-col justify-between shadow-xl min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="uppercase text-[#d4af37]">
                    Fase {steps[currentStep].num} · {steps[currentStep].subtitle}
                  </span>
                  <span className="text-white/40">Passo {currentStep + 1} de 5</span>
                </div>
                <h3 className="text-lg sm:text-xl font-editorial-serif font-bold text-white mt-1.5">
                  {steps[currentStep].title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mt-2 font-light">
                  {steps[currentStep].desc}
                </p>
              </div>

              {/* Formula Callout */}
              <div className="mt-3 pt-2.5 border-t border-white/10">
                <span className="text-[10px] uppercase text-white/40 block font-mono">
                  Formulação Formal:
                </span>
                <div className="mt-1 p-2 bg-white/[0.03] border border-white/10 rounded-lg text-center text-xs">
                  <MathView math={steps[currentStep].highlight} block />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border transition-all cursor-pointer ${
                currentStep === 0
                  ? 'border-white/5 text-white/20 cursor-not-allowed'
                  : 'border-white/15 text-white hover:bg-white/5 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Etapa Anterior</span>
            </button>

            <button
              onClick={handleNextStep}
              disabled={currentStep === steps.length - 1}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentStep === steps.length - 1
                  ? 'bg-white/10 text-white/40 cursor-not-allowed'
                  : 'bg-[#d4af37] text-black hover:bg-[#e4bf47] active:scale-95 shadow-md shadow-[#d4af37]/20'
              }`}
            >
              <span>Próxima Etapa</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Visual Quota Matrix with Animated Meters */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 0.5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 bg-[#101215] border border-white/15 p-4 sm:p-5 rounded-xl space-y-3 shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#d4af37]">Simulador Visual</span>
              <h4 className="text-sm font-bold text-white">Preenchimento de Cotas no Tablet</h4>
            </div>
            <span className="text-xs font-mono text-[#d4af37] bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
              n = {simulatedSampleTotal}
            </span>
          </div>

          {/* Demographic Visual Grid with Hover Animations */}
          <div className="space-y-2">
            {demographicGroups.map((group, idx) => {
              const fillRatio = (group.collected / group.targetSample) * 100;
              const isOver = group.collected > group.targetSample;
              const isUnder = group.collected < group.targetSample;

              return (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.015, x: 2 }}
                  className="p-2 px-3 bg-white/[0.02] border border-white/10 rounded-lg text-xs transition-all shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: group.color }}
                      />
                      <span className="font-semibold text-white/90">{group.label}</span>
                      <span className="text-white/40 text-[10px] font-mono">
                        ({group.popWeight.toFixed(1)}%)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[11px]">
                      <span className="text-white/50">Meta: {group.targetSample}</span>
                      <span className="text-white/30">|</span>
                      <span>
                        Col: <strong className={isUnder ? 'text-amber-400' : isOver ? 'text-blue-400' : 'text-emerald-400'}>{group.collected}</strong>
                      </span>
                      {isUnder && (
                        <span className="text-[9px] text-amber-400 bg-amber-400/10 px-1 rounded">Sub-cota</span>
                      )}
                      {isOver && (
                        <span className="text-[9px] text-blue-400 bg-blue-400/10 px-1 rounded">Saturação</span>
                      )}
                      {!isUnder && !isOver && (
                        <span className="text-[9px] text-emerald-400 bg-emerald-400/10 px-1 rounded">100% Ok</span>
                      )}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(fillRatio, 100)}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: group.color,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Insight box */}
          <div className="p-2.5 bg-white/[0.03] border border-white/10 rounded-lg flex items-start gap-2 text-[11px] text-white/70">
            <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5 animate-pulse" />
            <span>
              <strong>Trava CAPI:</strong> Ao atingir a meta de <em>Homens 16-34</em>, o tablet bloqueia o perfil e orienta o pesquisador para cotas em aberto (ex.: <em>Mulheres 60+</em>).
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
