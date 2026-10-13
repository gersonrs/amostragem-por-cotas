import { BookMarked, Building2, HeartHandshake, Mail, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { sound } from '../utils/audio';
import { TypewriterText } from './TypewriterText';

interface SlideThanksProps {
  onRestart: () => void;
}

const REFERENCES = [
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

export const SlideThanks: React.FC<SlideThanksProps> = ({ onRestart }) => {
  return (
    <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-3 lg:py-6 space-y-6 min-h-[calc(100vh-8.5rem)] flex flex-col justify-between">
      {/* Header with Typewriter Effect + Restart */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-[0.2em] font-semibold">
            <span>Seção 10</span>
            <span className="text-white/20">/</span>
            <span>Encerramento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Agradecimentos & Referências Bibliográficas" speed={24} delay={100} />
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

      {/* Thank You Hero */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#15171c] via-[#121418] to-[#0d0e11] border border-[#d4af37]/25 text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex p-4 rounded-full bg-[#d4af37]/12 border border-[#d4af37]/30 text-[#d4af37] mb-5"
        >
          <HeartHandshake className="w-8 h-8 sm:w-10 sm:h-10" />
        </motion.div>
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-editorial-serif font-bold text-white">
          Muito Obrigado!
        </h3>
        <p className="mt-3 text-lg sm:text-xl lg:text-2xl text-white/75 font-editorial-sans font-light">
          Obrigado pela atenção, pelas perguntas e pelo debate.
        </p>
        <p className="mt-4 text-sm sm:text-base text-white/55 font-mono max-w-2xl mx-auto">
          Este seminário integra a disciplina <strong className="text-[#d4af37]">Sistemas de Amostragem em Levantamentos Agrícolas</strong> — Doutorado em Biometria e Estatística Aplicada · UFRPE
        </p>
      </motion.div>

      {/* Official ABNT References List */}
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
          {REFERENCES.map((ref, idx) => (
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
        <div className="flex items-center gap-2 font-mono text-[#d4af37]">
          <Mail className="w-4 h-4" />
          <a href="mailto:gersonrodriguessantos8@gmail.com" className="hover:underline">
            gersonrodriguessantos8@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};