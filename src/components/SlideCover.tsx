import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Mail, User, BookOpen, Building2, Sparkles } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { sound } from '../utils/audio';

interface SlideCoverProps {
  onStart: () => void;
}

export const SlideCover: React.FC<SlideCoverProps> = ({ onStart }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 flex flex-col justify-between py-2 sm:py-4">
      {/* Decorative Editorial Background Elements with subtle float */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.05, 0.09, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -right-16 w-80 h-80 bg-[#d4af37] rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 -left-16 w-60 h-60 bg-blue-900 rounded-full blur-3xl pointer-events-none"
      />

      {/* Top Academic Department Header - Sliding Down */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="border-b border-white/10 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2"
      >
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-[#d4af37] uppercase">
            <Building2 className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
            <span>UNIVERSIDADE FEDERAL RURAL DE PERNAMBUCO</span>
          </div>
          <p className="text-[11px] text-white/50 tracking-wider uppercase mt-0.5">
            DEPARTAMENTO DE BIOMETRIA E ESTATÍSTICA APLICADA · PROGRAMA DE PÓS-GRADUAÇÃO
          </p>
        </div>
        <div className="text-left sm:text-right text-[11px] font-mono text-white/40">
          <span>DISCIPLINA: SISTEMAS DE AMOSTRAGEM EM LEVANTAMENTOS AGRÍCOLAS</span>
        </div>
      </motion.div>

      {/* Main Hero Section: Title & Philosophy with Typewriter Effect and Editorial Visual */}
      <div className="py-4 sm:py-5 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-1.5 mb-2"
            >
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37]/90 font-mono">
                SEMINÁRIO DE PÓS-GRADUAÇÃO
              </span>
            </motion.div>

            {/* Big Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl font-editorial-serif font-bold tracking-tight text-white leading-[1.08]"
            >
              Amostragem <br />
              <span className="italic font-light bg-gradient-to-r from-[#f4f2ec] via-[#d4af37] to-[#e8d8a0] bg-clip-text text-transparent">
                por Cotas
              </span>
            </motion.h1>

            {/* Typewriter Subtitle Effect */}
            <div className="min-h-[2.5rem] mt-3">
              <p className="text-sm sm:text-base md:text-lg font-light text-white/80 max-w-2xl leading-relaxed font-editorial-sans">
                <TypewriterText
                  text="Metodologia Não Probabilística, Procedimentos Técnicos, Margem de Erro Referencial e Aplicações Eleitorais"
                  speed={20}
                  delay={350}
                />
              </p>
            </div>

            {/* Quick Context Badges - Staggered Appearance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-white/50 font-editorial-sans"
            >
              <span className="hover:text-white transition-colors">Método Não Probabilístico</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="hover:text-white transition-colors">Matriz Multidimensional</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="hover:text-white transition-colors">Pós-Estratificação</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="hover:text-white transition-colors">Eleições Presidenciais 2026 & Marco TSE</span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="hidden lg:block lg:col-span-4"
          >
            <div className="relative group rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-black/40 shadow-2xl shadow-black/80">
              <img
                src="/src/assets/images/electoral_context_1791898487763.jpg"
                alt="Contexto de eleições gerais no Brasil com urna eletrônica e eleitores"
                referrerPolicy="no-referrer"
                className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#d4af37] block font-semibold">
                    Cenário Real · Eleições Brasil
                  </span>
                  <p className="text-[11px] text-white font-medium leading-tight mt-0.5">
                    Pesquisas de Intenção de Voto & Urna Eletrônica
                  </p>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] shrink-0">
                  Res. 23.600
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Institutional Credentials Sheet: Appearing from Corners & Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 border-t border-white/10 items-end">
        {/* Discipline & Professor - Emerging from Bottom-Left */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          whileHover={{ scale: 1.01, y: -2 }}
          className="md:col-span-5 space-y-2 p-3 bg-white/[0.02] border border-white/5 rounded-xl transition-all"
        >
          <div className="flex items-start gap-2.5">
            <BookOpen className="w-3.5 h-3.5 text-[#d4af37] mt-0.5 shrink-0" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-white/40 block">Disciplina</span>
              <p className="text-xs sm:text-sm font-semibold text-white/90">
                SISTEMAS DE AMOSTRAGEM EM LEVANTAMENTOS AGRÍCOLAS
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#d4af37] mt-0.5 shrink-0" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-white/40 block">Docente Responsável</span>
              <p className="text-xs sm:text-sm font-semibold text-white/90">
                PROF. DR. JOSE ANTONIO ALEIXO DA SILVA
              </p>
            </div>
          </div>
        </motion.div>

        {/* Student & Contact - Emerging from Bottom Center */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
          whileHover={{ scale: 1.01, y: -2 }}
          className="md:col-span-4 space-y-2 p-3 bg-white/[0.02] border border-white/5 rounded-xl transition-all"
        >
          <div className="flex items-start gap-2.5">
            <User className="w-3.5 h-3.5 text-[#d4af37] mt-0.5 shrink-0" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-white/40 block">Discente / Autor</span>
              <p className="text-xs sm:text-sm font-semibold text-white/90">
                Gerson Rodrigues Santos
              </p>
              <span className="text-[11px] text-white/50 block">Doutorando em Biometria e Estatística Aplicada</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Mail className="w-3.5 h-3.5 text-[#d4af37] mt-0.5 shrink-0" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-white/40 block">Contato Acadêmico</span>
              <a
                href="mailto:gersonrodriguessantos8@gmail.com"
                className="text-xs text-[#d4af37] hover:underline"
              >
                gersonrodriguessantos8@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Interactive CTA - Emerging from Bottom-Right with gentle pulse */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
          className="md:col-span-3 flex flex-col items-start md:items-end justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04, rotate: 0.5 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              sound.playSlide();
              onStart();
            }}
            className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-[#d4af37] via-[#ecd898] to-[#b89528] text-black font-semibold text-xs rounded-lg hover:shadow-xl hover:shadow-[#d4af37]/25 transition-all cursor-pointer"
          >
            <span>Iniciar Apresentação</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <span className="text-[10px] text-white/40 mt-1.5 font-mono">
            Navegue pelas setas ou teclado
          </span>
        </motion.div>
      </div>
    </div>
  );
};
