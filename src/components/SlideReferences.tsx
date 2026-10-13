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
      title: 'Resolução nº 23.600: Dispõe sobre pesquisas eleitorais e seus registros no sistema PesqEle',
      publication: 'Brasília: Tribunal Superior Eleitoral.',
    },
  ];

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
            <span>Seção 08</span>
            <span className="text-white/20">/</span>
            <span>Fechamento Acadêmico</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
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
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#d4af37] text-black font-semibold text-xs hover:bg-[#e4bf47] transition-all cursor-pointer shadow-md shadow-[#d4af37]/20"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reiniciar Seminário (Slide 1)</span>
        </motion.button>
      </motion.div>

      {/* Synthesis Summary: 3 cards covering Section 8 of the paper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="p-3 bg-[#121418] border border-white/10 rounded-xl space-y-1 shadow-lg"
        >
          <span className="text-[10px] font-mono text-[#d4af37]">01. Viabilidade Operacional</span>
          <h4 className="text-xs font-bold text-white">Pragmatismo Indispensável</h4>
          <p className="text-[11px] text-white/70 leading-relaxed font-light">
            Em populações de larga escala (156M eleitores), o método por cotas viabiliza estimativas em tempo real (48-72h), sendo essencial onde o censo é impraticável.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="p-3 bg-[#121418] border border-amber-500/20 rounded-xl space-y-1 shadow-lg"
        >
          <span className="text-[10px] font-mono text-amber-400">02. Rigor Epistemológico</span>
          <h4 className="text-xs font-bold text-white">Margem como Concessão</h4>
          <p className="text-[11px] text-white/70 leading-relaxed font-light">
            A margem de erro nominal constitui um indicador referencial de dispersão teórica sob hipótese conservadora, e não uma garantia estocástica irrefutável.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="p-3 bg-[#121418] border border-emerald-500/20 rounded-xl space-y-1 shadow-lg"
        >
          <span className="text-[10px] font-mono text-emerald-400">03. Boas Práticas & Compliance</span>
          <h4 className="text-xs font-bold text-white">Auditoria & Marco TSE</h4>
          <p className="text-[11px] text-white/70 leading-relaxed font-light">
            O uso de CAPI com travas de saturação, auditoria contínua de 10% a 20% e o registro prévio na Resolução TSE nº 23.600 asseguram a integridade dos dados.
          </p>
        </motion.div>
      </div>

      {/* Official ABNT References List from LaTeX */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="bg-[#101215] border border-white/15 p-3 rounded-xl space-y-1.5 shadow-2xl"
      >
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#d4af37] uppercase tracking-wider">
          <BookMarked className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Referências Bibliográficas (Normas ABNT · Artigo Original)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 font-sans text-[11px] text-white/80 max-h-32 overflow-y-auto pr-1">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="p-1 bg-white/[0.01] hover:bg-white/[0.04] rounded transition-colors"
            >
              <strong className="text-white">{ref.authors}</strong> ({ref.year}). <em>{ref.title}</em>. {ref.publication}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Institutional Final Signature */}
      <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] text-white/50">
        <div className="flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>UFRPE · Disciplina: Sistemas de Amostragem em Levantamentos Agrícolas</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Prof. José Antonio Aleixo da Silva</span>
          <span className="text-white/20">·</span>
          <span>Gerson Rodrigues Santos</span>
          <span className="text-white/20">·</span>
          <span className="text-[#d4af37]">Outubro de 2026</span>
        </div>
      </div>
    </div>
  );
};
