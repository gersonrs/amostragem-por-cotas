import React from 'react';
import { motion } from 'motion/react';
import { Scale, CheckCircle2, AlertCircle } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideParadigmComparison: React.FC = () => {
  const comparisonRows = [
    {
      dim: 'Probabilidade de Inclusão (\\pi_i)',
      prob: 'Conhecida a priori e estritamente positiva (\\pi_i > 0) para todos os N elementos.',
      quota: 'Desconhecida e nula para quem não circula no ponto de abordagem no horário.',
      iconProb: true,
    },
    {
      dim: 'Mecanismo de Seleção',
      prob: 'Sorteio estocástico pseudo-aleatório (tabelas de números aleatórios ou gerador algorítmico).',
      quota: 'Seleção intencional do pesquisador até saturar a meta numérica da célula.',
      iconProb: true,
    },
    {
      dim: 'Cadastro Nominal (Frame)',
      prob: 'Indispensável lista nominal exaustiva numerada de 1 até N (endereço/telefone).',
      quota: 'Dispensado; requer apenas proporções censitárias populacionais conhecidas (W_h).',
      iconProb: false,
    },
    {
      dim: 'Tratamento de Recusas',
      prob: 'Gera atrito severo; exige retorno ao domicílio (3x) e imputação estatística complexa.',
      quota: 'Substituição instantânea pelo próximo transeunte do mesmo perfil demográfico.',
      iconProb: false,
    },
    {
      dim: 'Margem de Erro & Inferência',
      prob: 'Validade formal assegurada pelo Teorema Central do Limite e Teoria do Desenho Amostral.',
      quota: 'Caráter referencial; calculada por convenção da AAS para balizar a variabilidade esperada.',
      iconProb: false,
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
            <TypewriterText text="Probabilística vs Amostragem por Cotas" speed={28} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          PARTE 2 DE 3 · COMPARAÇÃO DE PARADIGMAS
        </div>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="overflow-x-auto rounded-xl border border-white/10 shadow-2xl bg-[#0f1013]/90"
      >
        <table className="w-full text-left text-xs">
          <thead className="bg-[#15171c] text-white/90 border-b border-white/10 uppercase tracking-wider text-[11px] font-mono">
            <tr>
              <th className="py-3 px-4 w-[28%] flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Dimensão Analítica</span>
              </th>
              <th className="py-3 px-4 w-[36%] text-blue-300 font-semibold border-l border-white/5">
                Amostragem Probabilística (AAS / Estratificada)
              </th>
              <th className="py-3 px-4 w-[36%] text-[#d4af37] font-semibold border-l border-white/5">
                Amostragem por Cotas (Não Probabilística)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-white/80">
            {comparisonRows.map((row, idx) => (
              <motion.tr
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="hover:bg-white/[0.03] transition-colors"
              >
                <td className="py-2.5 px-4 font-semibold text-white">
                  <MathView math={row.dim} />
                </td>
                <td className="py-2.5 px-4 text-blue-100/90 leading-relaxed border-l border-white/5">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
                    <span><MathView math={row.prob} /></span>
                  </div>
                </td>
                <td className="py-2.5 px-4 text-[#f3e7c4] leading-relaxed border-l border-white/5">
                  <div className="flex items-start gap-1.5">
                    <AlertCircle className="w-3 h-3 text-[#d4af37] shrink-0 mt-0.5" />
                    <span><MathView math={row.quota} /></span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Synthesis Footnote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="p-3 bg-white/[0.02] border border-white/10 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-white/60 gap-2"
      >
        <span>
          <strong className="text-white">Conclusão Teórica:</strong> O método de cotas substitui a aleatoriedade mecânica na seleção pela proporcionalidade censitária forçada nas margens.
        </span>
        <span className="text-[11px] font-mono text-[#d4af37] shrink-0">
          UFRPE · Levantamentos Agrícolas
        </span>
      </motion.div>
    </div>
  );
};
