import { HelpCircle, MessageCircle, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { TypewriterText } from './TypewriterText';

const QUESTIONS = [
  {
    q: 'Por que a margem de erro das cotas não pode ser tratada como inferencial?',
    a: 'Porque não há sorteio aleatório: os entrevistados são selecionados por conveniência dentro de cotas. A fórmula ±1,96·√(pq/n) só é válida sob amostragem probabilística — aqui ela serve como convenção referencial de dispersão máxima.',
  },
  {
    q: 'Qual a diferença prática entre cota e estrato?',
    a: 'Na estratificada o sorteio ocorre dentro de cada estrato (probabilístico); na cotas o preenchimento é dirigido até saturar a meta n_h = n·W_h. A estrutura é idêntica — o que muda é o mecanismo de seleção interna.',
  },
  {
    q: 'Quando usar cotas em vez de probabilística?',
    a: 'Quando o censo é inviável (populações massivas), o prazo é curto (48–72h), o custo é restrito e o objetivo é descrever a estrutura demográfica — como pesquisas eleitorais de conjuntura — não fazer inferência estocástica formal.',
  },
];

export const SlideQuestions: React.FC = () => {
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
            <span>Seção 09</span>
            <span className="text-white/20">/</span>
            <span>Interação com a Banca</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Dúvidas & Perguntas" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/60 tracking-wider">
          <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-300 font-bold">
            SESSÃO INTERATIVA
          </span>
        </div>
      </motion.div>

      {/* Anticipated Q&A */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {QUESTIONS.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.12 }}
            whileHover={{ scale: 1.015, y: -2, transition: { duration: 0.18 } }}
            className="p-5 sm:p-6 bg-[#121418] border border-white/10 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <p className="text-sm sm:text-base font-bold text-white leading-snug">{item.q}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm sm:text-base text-white/80 leading-relaxed font-light">
              {item.a}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Open Floor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#15171c] to-[#101215] border border-white/10 text-center shadow-2xl"
      >
        <span className="inline-flex items-center gap-3 text-sm sm:text-lg font-mono uppercase tracking-[0.2em] text-[#d4af37] font-bold">
          <MessageSquare className="w-5 h-5 animate-pulse" />
          Mesa aberta para perguntas
        </span>
        <p className="mt-3 text-base sm:text-lg text-white/70 font-light max-w-3xl mx-auto">
          Perguntas sobre método, aplicações, regulamentação e casos práticos são bem-vindas.
        </p>
      </motion.div>

      {/* Bottom Bar */}
      <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-white/60">
        <div className="flex items-center gap-2 font-medium">
          <MessageCircle className="w-4 h-4 text-[#d4af37]" />
          <span>Gerson Rodrigues Santos · Doutorado em Biometria e Estatística Aplicada</span>
        </div>
        <div className="flex items-center gap-2 font-mono">
          <span className="text-[#d4af37]">Próximo:</span>
          <span className="text-white font-semibold">Agradecimentos & Referências</span>
        </div>
      </div>
    </div>
  );
};