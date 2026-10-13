import { Globe, Home, MapPin, Phone, Radio, ShieldCheck } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { AnimatedNumber } from './AnimatedNumber';
import { TypewriterText } from './TypewriterText';

interface PollData {
  institute: string;
  date: string;
  method: string;
  icon: 'phone' | 'web' | 'flow' | 'home';
  sampleSize: number;
  bolsonaro: number;
  lula: number;
  diagnosis: string;
}

interface SlideTse2026CaseProps {
  subSlide?: number;
  isContinuousMode?: boolean;
}

const POLLS: PollData[] = [
  { institute: 'PoderData / Aya', date: '08/out/2026', method: 'Telefônica (CATI)', icon: 'phone', sampleSize: 2500, bolsonaro: 53.0, lula: 47.0, diagnosis: 'Liderança fora da margem' },
  { institute: 'AtlasIntel / Bloomberg', date: '09/out/2026', method: 'Painel Web (RDR)', icon: 'web', sampleSize: 5026, bolsonaro: 52.8, lula: 47.2, diagnosis: 'Liderança fora da margem' },
  { institute: 'Ipespe', date: '10/out/2026', method: 'Telefônica (CATI)', icon: 'phone', sampleSize: 2000, bolsonaro: 52.7, lula: 47.3, diagnosis: 'Liderança fora da margem' },
  { institute: 'Datafolha', date: '08/out/2026', method: 'Presencial Ponto de Fluxo', icon: 'flow', sampleSize: 2884, bolsonaro: 52.0, lula: 48.0, diagnosis: 'Empate técnico no limite' },
  { institute: 'Vox Brasil', date: '09/out/2026', method: 'Presencial Domiciliar', icon: 'home', sampleSize: 2100, bolsonaro: 49.1, lula: 50.9, diagnosis: 'Empate técnico numérico' },
];

const STEP_META = [
  {
    num: '01',
    stepLabel: 'ETAPA 01 DE 02 · CONSOLIDAÇÃO NUMÉRICA',
    title: 'Resultados por Instituto e Comparação Visual',
    subtitle: 'Tabela comparativa + barras de intenção de voto',
  },
  {
    num: '02',
    stepLabel: 'ETAPA 02 DE 02 · DIAGNÓSTICO METODOLÓGICO',
    title: 'Por que os Institutos Divergem?',
    subtitle: 'O efeito do modo de coleta sobre o resultado',
  },
];

const renderPollTable = (polls: PollData[]) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl"
  >
    <table className="w-full text-left text-base sm:text-lg">
      <thead className="bg-[#15171c] text-white/90 border-b border-white/10 font-mono uppercase text-xs sm:text-sm tracking-wider">
        <tr>
          <th className="py-3.5 px-4">Instituto</th>
          <th className="py-3.5 px-4">Data</th>
          <th className="py-3.5 px-4">Modo de Coleta</th>
          <th className="py-3.5 px-4">Amostra (n)</th>
          <th className="py-3.5 px-4 text-blue-300">F. Bolsonaro</th>
          <th className="py-3.5 px-4 text-red-300">Lula</th>
          <th className="py-3.5 px-4 text-right">Diagnóstico</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white/10 bg-[#0f1013]/90 font-mono text-white/85">
        {polls.map((poll, idx) => (
          <motion.tr
            key={poll.institute}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
            className="hover:bg-white/[0.04] transition-colors"
          >
            <td className="py-3 px-4 font-bold text-white font-sans text-base sm:text-lg">{poll.institute}</td>
            <td className="py-3 px-4 text-white/60 text-sm sm:text-base">{poll.date}</td>
            <td className="py-3 px-4 text-white/90 font-sans flex items-center gap-2 text-sm sm:text-base">
              {poll.icon === 'web' && <Globe className="w-4 h-4 text-blue-400 shrink-0" />}
              {poll.icon === 'phone' && <Phone className="w-4 h-4 text-emerald-400 shrink-0" />}
              {poll.icon === 'flow' && <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />}
              {poll.icon === 'home' && <Home className="w-4 h-4 text-amber-400 shrink-0" />}
              <span className="font-medium">{poll.method}</span>
            </td>
            <td className="py-3 px-4 font-bold text-white text-base sm:text-lg">
              <AnimatedNumber value={poll.sampleSize} duration={1} delay={idx * 0.05} format={(v) => Math.round(v).toLocaleString('pt-BR')} />
            </td>
            <td className="py-3 px-4 font-bold text-blue-300 text-lg sm:text-xl">
              <AnimatedNumber value={poll.bolsonaro} decimals={1} duration={1} delay={idx * 0.05} format={(v) => `${v.toFixed(1)}%`} />
            </td>
            <td className="py-3 px-4 font-bold text-red-300 text-lg sm:text-xl">
              <AnimatedNumber value={poll.lula} decimals={1} duration={1} delay={idx * 0.05} format={(v) => `${v.toFixed(1)}%`} />
            </td>
            <td className="py-3 px-4 text-right font-sans text-sm sm:text-base text-white/70">{poll.diagnosis}</td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  </motion.div>
);

const renderVoteBars = (polls: PollData[]) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-white/10 bg-[#121418]/80 p-5 sm:p-6 shadow-xl space-y-4"
  >
    <div className="flex items-center justify-between">
      <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#d4af37] font-bold">
        Intenção de voto por instituto (2º turno)
      </span>
      <div className="flex items-center gap-4 text-xs font-mono">
        <span className="flex items-center gap-1.5 text-blue-300">
          <span className="w-3 h-3 rounded-sm bg-blue-400 inline-block" /> Bolsonaro
        </span>
        <span className="flex items-center gap-1.5 text-red-300">
          <span className="w-3 h-3 rounded-sm bg-red-400 inline-block" /> Lula
        </span>
      </div>
    </div>

    <div className="space-y-3">
      {polls.map((poll, idx) => (
        <div key={poll.institute} className="grid grid-cols-[150px_1fr_150px] sm:grid-cols-[190px_1fr_150px] items-center gap-3">
          <span className="text-xs sm:text-sm font-mono text-white/70 truncate">{poll.institute}</span>
          <div className="flex items-center gap-1 h-6">
            {/* Bolsonaro bar (left-aligned to center) */}
            <div className="flex justify-end flex-1 h-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${poll.bolsonaro}%` }}
                transition={{ duration: 0.9, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-l-md bg-gradient-to-r from-blue-500/70 to-blue-400"
              />
            </div>
            <div className="w-px h-full bg-white/20 shrink-0" />
            {/* Lula bar (right-aligned to center) */}
            <div className="flex-1 h-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${poll.lula}%` }}
                transition={{ duration: 0.9, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-r-md bg-gradient-to-r from-red-400 to-red-500/70"
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 text-xs sm:text-sm font-mono">
            <span className="font-bold text-blue-300">
              <AnimatedNumber value={poll.bolsonaro} decimals={1} duration={1} delay={idx * 0.08} format={(v) => `${v.toFixed(1)}%`} />
            </span>
            <span className="text-white/30">/</span>
            <span className="font-bold text-red-300">
              <AnimatedNumber value={poll.lula} decimals={1} duration={1} delay={idx * 0.08} format={(v) => `${v.toFixed(1)}%`} />
            </span>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const renderExplanatoryCards = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
    <motion.div
      whileHover={{ scale: 1.012, y: -2, transition: { duration: 0.18 } }}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="lg:col-span-6 p-5 sm:p-6 bg-[#121418] border border-white/10 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between hover:border-[#d4af37]/30"
    >
      <span className="text-sm sm:text-base font-mono uppercase text-[#d4af37] font-bold block">
        Por que os Institutos Divergem se Todos Usam Cotas?
      </span>
      <div className="space-y-3 text-sm sm:text-base text-white/80">
        <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.05] transition-colors">
          <strong className="text-white block font-sans text-base">Web Randomizado (AtlasIntel):</strong>
          <span className="text-white/70">Captura eleitorado hiperconectado e de classe média urbana.</span>
        </div>
        <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.05] transition-colors">
          <strong className="text-white block font-sans text-base">Presencial em Fluxo (Datafolha):</strong>
          <span className="text-white/70">Capta a circulação urbana em grandes centros comerciais e terminais.</span>
        </div>
        <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.05] transition-colors">
          <strong className="text-white block font-sans text-base">Presencial Domiciliar (Vox Brasil):</strong>
          <span className="text-white/70">Acessa diretamente eleitores de menor renda e idosos reclusos em seus lares.</span>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.012, y: -2, transition: { duration: 0.18 } }}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="lg:col-span-6 p-5 sm:p-6 bg-[#121418] border border-white/10 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between hover:border-emerald-400/30"
    >
      <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono text-emerald-400 uppercase font-bold">
        <ShieldCheck className="w-5 h-5" />
        <span>O que o Caso Demonstra sobre o Método</span>
      </div>
      <div className="space-y-3 text-sm sm:text-base text-white/80">
        <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl">
          <strong className="text-white block font-sans text-base">A cota controla a estrutura, não o resultado:</strong>
          <span className="text-white/70">Todos reproduzem o mesmo microcosmo demográfico; a diferença está em quem cada canal consegue alcançar.</span>
        </div>
        <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl">
          <strong className="text-white block font-sans text-base">O modo de coleta é uma variável de viés:</strong>
          <span className="text-white/70">Web, fluxo e domiciliar atingem perfis distintos — e isso desloca o resultado dentro da margem.</span>
        </div>
        <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl">
          <strong className="text-white block font-sans text-base">Margem referencial na prática:</strong>
          <span className="text-white/70">Divergências dentro de ±3% são ruído estrutural do método, não erro de execução.</span>
        </div>
      </div>
    </motion.div>
  </div>
);

export const SlideTse2026Case: React.FC<SlideTse2026CaseProps> = ({ subSlide = 0, isContinuousMode = false }) => {
  const activeStep = Math.min(Math.max(subSlide, 0), 1);

  if (isContinuousMode) {
    return (
      <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-6 space-y-8">
        <div className="border-b border-white/10 pb-4">
          <div className="text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-[0.2em] font-semibold">
            Seção 07.1 / Estudo de Caso Real
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial-serif font-bold text-white mt-1.5">
            Consolidação dos Levantamentos de 2º Turno (Outubro 2026)
          </h2>
        </div>

        <div className="space-y-6">
          {renderPollTable(POLLS)}
          {renderVoteBars(POLLS)}
          {renderExplanatoryCards()}
        </div>
      </div>
    );
  }

  const current = STEP_META[activeStep];

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
            <span>Seção 07.1</span>
            <span className="text-white/20">/</span>
            <span>Estudo de Caso Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Consolidação dos Levantamentos de 2º Turno (Outubro 2026)" speed={22} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/60 tracking-wider">
          <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-300 font-bold">
            Etapa {activeStep + 1} de 2
          </span>
          <span> · MÓDULO V</span>
        </div>
      </motion.div>

      {/* 2-Step Horizontal Roadmap Indicator */}
      <div className="grid grid-cols-2 gap-3">
        {STEP_META.map((s, idx) => {
          const isDone = idx < activeStep;
          const isCurrent = idx === activeStep;

          return (
            <div
              key={s.num}
              className={`p-3 rounded-xl border transition-all flex items-center gap-2.5 ${
                isCurrent
                  ? 'bg-white/[0.08] border-[#d4af37] shadow-lg shadow-[#d4af37]/15'
                  : isDone
                  ? 'bg-white/[0.03] border-emerald-500/30 opacity-80'
                  : 'bg-white/[0.01] border-white/5 opacity-40'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-bold shrink-0 ${
                  isCurrent
                    ? 'bg-[#d4af37] text-black shadow-md'
                    : isDone
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-white/10 text-white/40'
                }`}
              >
                {isDone ? '✓' : s.num}
              </div>
              <div className="min-w-0 flex-1 hidden sm:block">
                <span className="block text-xs font-mono uppercase text-white/50 leading-none">
                  {idx === 0 && 'Números & Barras'}
                  {idx === 1 && 'Divergências'}
                </span>
                <span className={`block text-xs sm:text-sm font-semibold truncate mt-1 ${isCurrent ? 'text-white' : 'text-white/60'}`}>
                  {s.title.split('&')[0].trim()}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Sub-Slide Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -25 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col flex-1 justify-center gap-4"
        >
          {activeStep === 0 && (
            <>
              {renderPollTable(POLLS)}
              {renderVoteBars(POLLS)}
            </>
          )}
          {activeStep === 1 && renderExplanatoryCards()}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Bar: Remote Passador Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
          <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0" />
          <span>
            <strong>Síntese:</strong>{' '}
            {activeStep === 0 && 'Cinco institutos, mesmos percentuais dentro da margem — a diferença está no modo de coleta.'}
            {activeStep === 1 && 'O modo de coleta é uma variável de viés: cada canal alcança um perfil diferente de eleitor.'}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] bg-[#d4af37]/10 px-3 py-1.5 rounded-lg border border-[#d4af37]/20 shrink-0 font-semibold">
          <Radio className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
          <span>
            {activeStep < 1
              ? 'Passador: Pressione [→] para a Etapa 02'
              : 'Última Etapa · Pressione [→] para o Próximo Slide'}
          </span>
        </div>
      </div>
    </div>
  );
};