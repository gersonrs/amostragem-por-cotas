import { ArrowRight, BookOpen, Building2, GraduationCap, Mail, Sparkles, User } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { sound } from '../utils/audio';
import { TypewriterText } from './TypewriterText';

interface SlideCoverProps {
  onStart: () => void;
}

export const SlideCover: React.FC<SlideCoverProps> = ({ onStart }) => {
  return (
    <div className="relative w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex flex-col justify-between py-4 sm:py-8 min-h-[calc(100vh-8.5rem)]">
      {/* Decorative Editorial Background Elements with subtle float */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.05, 0.09, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -right-16 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 -left-16 w-80 h-80 bg-blue-900 rounded-full blur-3xl pointer-events-none"
      />

      {/* Top Academic Department Header - Sliding Down */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-[0.2em] text-[#d4af37] font-semibold uppercase">
            <Building2 className="w-4 h-4 text-[#d4af37] animate-pulse" />
            <span>UNIVERSIDADE FEDERAL RURAL DE PERNAMBUCO</span>
          </div>
          <p className="text-xs sm:text-sm text-white/60 tracking-wider uppercase mt-1 font-medium">
            DEPARTAMENTO DE BIOMETRIA E ESTATÍSTICA APLICADA · PÓS-GRADUAÇÃO
          </p>
        </div>
        <div className="text-left sm:text-right text-xs sm:text-sm font-mono text-white/50">
          <span>SISTEMAS DE AMOSTRAGEM EM LEVANTAMENTOS AGRÍCOLAS</span>
        </div>
      </motion.div>

      {/* Main Hero Section: Title & Philosophy with Typewriter Effect */}
      <div className="py-6 sm:py-10 my-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-3"
        >
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#d4af37] font-mono font-bold">
            SEMINÁRIO DE PÓS-GRADUAÇÃO
          </span>
        </motion.div>

        {/* Big Editorial Headline - Projector Scale */}
        <motion.h1
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-editorial-serif font-bold tracking-tight text-white leading-[1.05]"
        >
          Amostragem <br />
          <span className="italic font-light bg-gradient-to-r from-[#f4f2ec] via-[#d4af37] to-[#e8d8a0] bg-clip-text text-transparent">
            por Cotas
          </span>
        </motion.h1>

        {/* Typewriter Subtitle Effect - Large & Projector-Clear */}
        <div className="min-h-[3.5rem] mt-4 sm:mt-6">
          <p className="text-base sm:text-xl lg:text-2xl font-light text-white/90 max-w-6xl leading-relaxed font-editorial-sans">
            <TypewriterText
              text="Metodologia Não Probabilística, Procedimentos Técnicos, Margem de Erro Referencial e Aplicações Eleitorais"
              speed={20}
              delay={350}
            />
          </p>
        </div>

        {/* Quick Context Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-5 text-sm sm:text-base text-white/60 font-editorial-sans font-medium"
        >
          <span className="text-[#d4af37] font-semibold">Método Não Probabilístico</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Matriz Demográfica Multidimensional</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Pós-Estratificação Algébrica</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Estudo de Caso: Eleições 2026</span>
        </motion.div>
      </div>

      {/* Institutional Credentials Sheet */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-5 border-t border-white/10 items-end">
        {/* Discipline & Professor */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          className="md:col-span-5 space-y-3 p-4 bg-white/[0.03] border border-white/10 rounded-xl"
        >
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#d4af37] mt-0.5 shrink-0" />
            <div>
              <span className="text-xs uppercase tracking-wider text-white/50 block font-mono">Disciplina</span>
              <p className="text-sm sm:text-base font-bold text-white">
                SISTEMAS DE AMOSTRAGEM EM LEVANTAMENTOS AGRÍCOLAS
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-[#d4af37] mt-0.5 shrink-0" />
            <div>
              <span className="text-xs uppercase tracking-wider text-white/50 block font-mono">Docente Responsável</span>
              <p className="text-sm sm:text-base font-bold text-white">
                PROF. DR. JOSE ANTONIO ALEIXO DA SILVA
              </p>
            </div>
          </div>
        </motion.div>

        {/* Student & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
          className="md:col-span-4 space-y-3 p-4 bg-white/[0.03] border border-white/10 rounded-xl"
        >
          <div className="flex items-start gap-3">
            <User className="w-5 h-5 text-[#d4af37] mt-0.5 shrink-0" />
            <div>
              <span className="text-xs uppercase tracking-wider text-white/50 block font-mono">Discente / Autor</span>
              <p className="text-sm sm:text-base font-bold text-white">
                Gerson Rodrigues Santos
              </p>
              <span className="text-xs sm:text-sm text-white/60 block mt-0.5">Doutorando em Biometria e Estatística Aplicada</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-[#d4af37] mt-0.5 shrink-0" />
            <div>
              <span className="text-xs uppercase tracking-wider text-white/50 block font-mono">Contato Acadêmico</span>
              <a
                href="mailto:gersonrodriguessantos8@gmail.com"
                className="text-xs sm:text-sm text-[#d4af37] hover:underline font-mono"
              >
                gersonrodriguessantos8@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Interactive CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
          className="md:col-span-3 flex flex-col items-start md:items-end justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              sound.playSlide();
              onStart();
            }}
            className="group relative inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#ecd898] to-[#b89528] text-black font-bold text-sm sm:text-base rounded-xl hover:shadow-2xl hover:shadow-[#d4af37]/30 transition-all cursor-pointer"
          >
            <span>Iniciar Apresentação</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </motion.button>
          <span className="text-xs text-white/50 mt-2 font-mono">
            Apresentador: use as setas do controle
          </span>
        </motion.div>
      </div>
    </div>
  );
};
