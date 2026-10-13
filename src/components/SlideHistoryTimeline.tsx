import React from 'react';
import { motion } from 'motion/react';
import { History, Award, BookOpen, Vote } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlideHistoryTimeline: React.FC = () => {
  const timelineEvents = [
    {
      year: '1892',
      figure: 'Charles Booth (Londres)',
      title: 'As Origens na Pesquisa Social Londrina',
      desc: 'Pioneirismo na partição de distritos londrinos em classes socioeconômicas para diagnosticar a pobreza e condições de trabalho sem a exigência de um censo exaustivo.',
      tag: 'Fundação Metodológica',
      icon: BookOpen,
      color: 'border-[#d4af37] text-[#d4af37]',
      bg: 'bg-[#d4af37]/10',
    },
    {
      year: '1936',
      figure: 'O Fracasso da Literary Digest vs George Gallup',
      title: 'A Vitória Histórica das Cotas Proporcionais',
      desc: 'A conceituada Literary Digest consultou 10 milhões por listas telefônicas e registros de automóveis, prevendo erradamente Landon (viés de alta renda). George Gallup acertou a vitória de Franklin D. Roosevelt com apenas 50.000 entrevistas estruturadas por cotas demográficas representativas.',
      tag: 'Marco Epistemológico',
      icon: Award,
      color: 'border-blue-400 text-blue-400',
      bg: 'bg-blue-400/10',
    },
    {
      year: '1990–Presente',
      figure: 'Jorge de Sousa & Resolução TSE nº 23.600',
      title: 'Amadurecimento Crítico & Rigor Contemporâneo',
      desc: 'A publicação de "Pesquisa Eleitoral: Críticas e Técnicas" (Sousa, 1990) expõe a falácia de divulgar margem de erro aleatória em pesquisas de fluxo sem reportar o Efeito de Desenho (Deff). No Brasil, o TSE passa a exigir o detalhamento de cada estrato demográfico no sistema PesqEle.',
      tag: 'Legislação & Deff',
      icon: Vote,
      color: 'border-emerald-400 text-emerald-400',
      bg: 'bg-emerald-400/10',
    },
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
            <span>Capítulo 01</span>
            <span className="text-white/20">/</span>
            <span>Epistemologia Amostral</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Evolução Histórica da Amostragem por Cotas" speed={26} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          PARTE 3 DE 3 · LINHA DO TEMPO CRÍTICA
        </div>
      </motion.div>

      {/* Timeline Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {timelineEvents.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="p-4 sm:p-5 bg-[#121418] border border-white/10 rounded-xl flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-[#d4af37]/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border ${item.color} ${item.bg}`}>
                    {item.tag}
                  </span>
                  <div className="p-1.5 bg-white/5 rounded-lg text-white/60 group-hover:text-white transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-2xl font-editorial-serif font-bold text-[#d4af37] mb-1">
                  {item.year}
                </div>
                <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider mb-2">
                  {item.figure}
                </div>
                <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                <span>Marco Histórico #{idx + 1}</span>
                <span className="text-[#d4af37]">Seminário UFRPE</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
