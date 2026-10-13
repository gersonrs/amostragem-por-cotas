import { Award, BookOpen, CheckCircle2, Target } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { TypewriterText } from './TypewriterText';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

const CONCLUSION_POINTS = [
  {
    icon: <Target className="w-5 h-5 text-[#d4af37]" />,
    accent: 'text-[#d4af37]',
    border: 'border-[#d4af37]/30',
    bg: 'bg-[#d4af37]/8',
    title: 'Pragmatismo com Rigor',
    body: 'As cotas entregam o espelho demográfico da população em 48–72h, onde o sorteio probabilístico é inviável — sem abrir mão da transparência metodológica.',
  },
  {
    icon: <Award className="w-5 h-5 text-amber-400" />,
    accent: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/8',
    title: 'Margem de Erro Referencial',
    body: 'O "± 3,10%" expressa uma convenção de dispersão teórica máxima, e não uma aleatoriedade pura — interpretação crítica obrigatória.',
  },
  {
    icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
    accent: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/8',
    title: 'Pós-Estratificação Algébrica',
    body: 'Pesos f = W_h / w_h corrigem matematicamente os desvios de campo, restaurando a proporcionalidade censitária da amostra final.',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-sky-400" />,
    accent: 'text-sky-400',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/8',
    title: 'Controle Operacional',
    body: 'Travas CAPI em tempo real, auditoria por GPS de 10–20% e pós-estratificação garantem a integridade do microcosmo final.',
  },
];

const FINAL_MESSAGE =
  'Amostragem por Cotas não é uma "concessão tática": é uma técnica estruturada com fundamento teórico próprio, protocolo operacional rígido e aplicação legítima em pesquisas de larga escala — desde que sua margem de erro seja lida como referencial, e não como inferencial.';

export const SlideConclusion: React.FC = () => {
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
            <span>Seção 08</span>
            <span className="text-white/20">/</span>
            <span>Encerramento Acadêmico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Conclusão: Síntese do Seminário" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/60 tracking-wider">
          <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-300 font-bold">
            MÓDULO V · FECHAMENTO
          </span>
        </div>
      </motion.div>

      {/* 4 Key Takeaways */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {CONCLUSION_POINTS.map((point) => (
          <motion.div
            key={point.title}
            variants={itemVariants}
            whileHover={{ scale: 1.015, y: -2, transition: { duration: 0.18 } }}
            className={`p-5 rounded-2xl border ${point.border} ${point.bg} space-y-2.5 shadow-xl`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl border ${point.border} ${point.bg}`}>{point.icon}</div>
              <h4 className={`text-base sm:text-lg font-bold ${point.accent}`}>{point.title}</h4>
            </div>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light">{point.body}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Final Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#15171c] via-[#121418] to-[#101215] border border-[#d4af37]/20 text-center shadow-2xl"
      >
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold mb-3">
          <Award className="w-4 h-4" />
          Mensagem Final
        </span>
        <p className="text-base sm:text-xl lg:text-2xl font-editorial-serif font-light text-white/95 leading-relaxed max-w-5xl mx-auto">
          {FINAL_MESSAGE}
        </p>
      </motion.div>

      {/* Bottom Bar */}
      <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-white/60">
        <div className="flex items-center gap-2 font-medium">
          <span>UFRPE · Sistemas de Amostragem em Levantamentos Agrícolas</span>
        </div>
        <div className="flex items-center gap-2 font-mono">
          <span className="text-[#d4af37]">Próximo:</span>
          <span className="text-white font-semibold">Dúvidas & Perguntas</span>
        </div>
      </div>
    </div>
  );
};