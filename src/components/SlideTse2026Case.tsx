import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Globe, Phone, MapPin, Home } from 'lucide-react';
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

export const SlideTse2026Case: React.FC = () => {
  const polls: PollData[] = [
    { institute: 'PoderData / Aya', date: '08/out/2026', method: 'Telefônica (CATI)', icon: 'phone', sampleSize: 2500, bolsonaro: 53.0, lula: 47.0, diagnosis: 'Liderança fora da margem' },
    { institute: 'AtlasIntel / Bloomberg', date: '09/out/2026', method: 'Painel Web (RDR)', icon: 'web', sampleSize: 5026, bolsonaro: 52.8, lula: 47.2, diagnosis: 'Liderança fora da margem' },
    { institute: 'Ipespe', date: '10/out/2026', method: 'Telefônica (CATI)', icon: 'phone', sampleSize: 2000, bolsonaro: 52.7, lula: 47.3, diagnosis: 'Liderança fora da margem' },
    { institute: 'Datafolha', date: '08/out/2026', method: 'Presencial Ponto de Fluxo', icon: 'flow', sampleSize: 2884, bolsonaro: 52.0, lula: 48.0, diagnosis: 'Empate técnico no limite' },
    { institute: 'Vox Brasil', date: '09/out/2026', method: 'Presencial Domiciliar', icon: 'home', sampleSize: 2100, bolsonaro: 49.1, lula: 50.9, diagnosis: 'Empate técnico numérico' },
  ];

  return (
    <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-3 lg:py-6 space-y-6 min-h-[calc(100vh-8.5rem)] flex flex-col justify-between">
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
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO V · CENÁRIO PRESIDENCIAL & MODOS DE COLETA
        </div>
      </motion.div>

      {/* Real Polls Comparison Table */}
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
                <td className="py-3 px-4 font-bold text-white text-base sm:text-lg">{poll.sampleSize.toLocaleString('pt-BR')}</td>
                <td className="py-3 px-4 font-bold text-blue-300 text-lg sm:text-xl">{poll.bolsonaro.toFixed(1)}%</td>
                <td className="py-3 px-4 font-bold text-red-300 text-lg sm:text-xl">{poll.lula.toFixed(1)}%</td>
                <td className="py-3 px-4 text-right font-sans text-sm sm:text-base text-white/70">{poll.diagnosis}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Explanatory Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-6 p-5 sm:p-6 bg-[#121418] border border-white/10 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between"
        >
          <span className="text-sm sm:text-base font-mono uppercase text-[#d4af37] font-bold block">
            Por que os Institutos Divergem se Todos Usam Cotas?
          </span>
          <div className="space-y-3 text-sm sm:text-base text-white/80">
            <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl">
              <strong className="text-white block font-sans text-base">Web Randomizado (AtlasIntel):</strong>
              <span className="text-white/70">Captura eleitorado hiperconectado e de classe média urbana.</span>
            </div>
            <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl">
              <strong className="text-white block font-sans text-base">Presencial em Fluxo (Datafolha):</strong>
              <span className="text-white/70">Capta a circulação urbana em grandes centros comerciais e terminais.</span>
            </div>
            <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl">
              <strong className="text-white block font-sans text-base">Presencial Domiciliar (Vox Brasil):</strong>
              <span className="text-white/70">Acessa diretamente eleitores de menor renda e idosos reclusos em seus lares.</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="lg:col-span-6 p-5 sm:p-6 bg-[#121418] border border-white/10 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between"
        >
          <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono text-emerald-400 uppercase font-bold">
            <ShieldCheck className="w-5 h-5" />
            <span>Exigências Legais · Resolução TSE nº 23.600</span>
          </div>
          <div className="space-y-3 text-sm sm:text-base text-white/80">
            <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl">
              <strong className="text-white block font-sans text-base">Registro Prévio no PesqEle:</strong>
              <span className="text-white/70">Cadastramento obrigatório 5 dias antes de qualquer divulgação pública.</span>
            </div>
            <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl">
              <strong className="text-white block font-sans text-base">Publicização da Matriz de Cotas:</strong>
              <span className="text-white/70">Detalhamento compulsório de sexo, idade, instrução, renda e município.</span>
            </div>
            <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl">
              <strong className="text-white block font-sans text-base">Nota Metodológica Obrigatória:</strong>
              <span className="text-white/70">Transparência explícita sobre a técnica de seleção não probabilística.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
