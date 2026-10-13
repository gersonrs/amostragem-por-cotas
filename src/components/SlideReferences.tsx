import React from 'react';
import { motion } from 'motion/react';
import { BookMarked, RotateCcw, Building2, CheckCircle2, Award } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { sound } from '../utils/audio';

interface SlideReferencesProps {
  onRestart: () => void;
}

export const SlideReferences: React.FC<SlideReferencesProps> = ({ onRestart }) => {
  const references = [
    {
      authors: 'APPINIO RESEARCH',
      year: '2026',
      title: 'Quota Sampling: Definition, Types, Methods and Examples',
      publication: 'Appinio Insights Guide, Hamburg / London.',
    },
    {
      authors: 'BOOTH, Charles',
      year: '1892',
      title: 'Life and Labour of the People in London',
      publication: 'London: Macmillan.',
    },
    {
      authors: 'BUSSAB, Wilton de Oliveira; MORETTIN, Pedro Alberto',
      year: '2017',
      title: 'Estatística Básica',
      publication: '9. ed. São Paulo: Saraiva.',
    },
    {
      authors: 'COCHRAN, William G.',
      year: '1977',
      title: 'Sampling Techniques',
      publication: '3. ed. New York: John Wiley & Sons.',
    },
    {
      authors: 'KISH, Leslie',
      year: '1965',
      title: 'Survey Sampling',
      publication: 'New York: John Wiley & Sons.',
    },
    {
      authors: 'SOUSA, Jorge de',
      year: '1990',
      title: 'Pesquisa Eleitoral: Críticas e Técnicas',
      publication: 'Brasília: Centro Gráfico do Senado Federal.',
    },
    {
      authors: 'TRIBUNAL SUPERIOR ELEITORAL (TSE)',
      year: '2019/2024',
      title: 'Resolução nº 23.600: Pesquisas eleitorais e registros no PesqEle',
      publication: 'Brasília: Tribunal Superior Eleitoral.',
    },
  ];

  return (
    <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-3 lg:py-6 space-y-6 min-h-[calc(100vh-8.5rem)] flex flex-col justify-between">
      {/* Header with Typewriter Effect */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-[0.2em] font-semibold">
            <span>Seção 08</span>
            <span className="text-white/20">/</span>
            <span>Fechamento Acadêmico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Conclusão e Referências Bibliográficas" speed={24} delay={100} />
          </h2>
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            sound.playSlide();
            onRestart();
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#d4af37] text-black font-bold text-sm hover:bg-[#e4bf47] transition-all cursor-pointer shadow-lg shadow-[#d4af37]/25"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reiniciar Seminário (Slide 1)</span>
        </motion.button>
      </motion.div>

      {/* Synthesis Summary: 3 cards covering Section 8 of the paper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="p-5 sm:p-6 bg-[#121418] border border-white/10 rounded-2xl space-y-3 shadow-xl flex flex-col justify-between"
        >
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono text-[#d4af37] font-bold block uppercase tracking-wider">
              01. Viabilidade Operacional
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white">Pragmatismo Indispensável</h4>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
              Em populações massivas (156M de eleitores), as cotas viabilizam dados precisos em 48 a 72 horas, onde o censo é inviável.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="p-5 sm:p-6 bg-[#121418] border border-amber-500/30 rounded-2xl space-y-3 shadow-xl flex flex-col justify-between"
        >
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono text-amber-400 font-bold block uppercase tracking-wider">
              02. Rigor Epistemológico
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white">Margem como Concessão</h4>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
              A margem nominal expressa uma convenção orientadora de dispersão teórica máxima, e não um sorteio estocástico puro.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="p-5 sm:p-6 bg-[#121418] border border-emerald-500/30 rounded-2xl space-y-3 shadow-xl flex flex-col justify-between"
        >
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono text-emerald-400 font-bold block uppercase tracking-wider">
              03. Boas Práticas & Compliance
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white">Auditoria & Res. TSE</h4>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
              Uso de CAPI com travas em tempo real, checagem por GPS de 10-20% e registro compulsório garantem a idoneidade científica.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Official ABNT References List from LaTeX */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="bg-[#101215] border border-white/15 p-5 sm:p-6 rounded-2xl space-y-3 shadow-2xl flex-1 flex flex-col justify-between"
      >
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-wider font-bold">
          <BookMarked className="w-4 h-4 text-[#d4af37]" />
          <span>Referências Bibliográficas Principais (Normas ABNT)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 font-sans text-xs sm:text-sm text-white/85">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="p-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors leading-relaxed"
            >
              <strong className="text-white font-semibold">{ref.authors}</strong> ({ref.year}). <em>{ref.title}</em>. {ref.publication}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Institutional Final Signature */}
      <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-white/60">
        <div className="flex items-center gap-2 font-medium">
          <Building2 className="w-4 h-4 text-[#d4af37]" />
          <span>UFRPE · Disciplina: Sistemas de Amostragem em Levantamentos Agrícolas</span>
        </div>
        <div className="flex items-center gap-2 font-mono">
          <span>Prof. José Antonio Aleixo da Silva</span>
          <span className="text-white/30">·</span>
          <span className="text-white font-semibold">Gerson Rodrigues Santos</span>
          <span className="text-white/30">·</span>
          <span className="text-[#d4af37]">2026</span>
        </div>
      </div>
    </div>
  );
};
