import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, ShieldAlert, CheckCircle2, UserX, UserCheck, Shuffle, SlidersHorizontal } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlideBiasesBestPractices: React.FC = () => {
  const biases = [
    {
      title: 'Viés do Entrevistador',
      desc: 'Tendência inconsciente do pesquisador de campo de abordar transeuntes com semblante simpático, calmo e receptivo, ignorando indivíduos com postura apressada ou fechada.',
      icon: <UserX className="w-3.5 h-3.5 text-rose-400" />,
      color: 'border-rose-500/30 bg-rose-500/5',
    },
    {
      title: 'Viés de Autosseleção',
      desc: 'Participantes que aceitam prontamente responder a questionários possuem traços atitudinais, políticos e psicológicos distintos daqueles que habitualmente evitam abordagens em vias públicas.',
      icon: <AlertCircle className="w-3.5 h-3.5 text-amber-400" />,
      color: 'border-amber-500/30 bg-amber-500/5',
    },
    {
      title: 'Viés de Não Resposta',
      desc: 'Quando determinados estratos censitários (ex.: idosos com mobilidade reduzida ou alta renda) recusam sistematicamente a entrevista, gerando subdimensionamento da célula.',
      icon: <ShieldAlert className="w-3.5 h-3.5 text-orange-400" />,
      color: 'border-orange-500/30 bg-orange-500/5',
    },
  ];

  const bestPractices = [
    'Definir Objetivos Claros e critérios de cotas estritamente relevantes às variáveis em estudo.',
    'Aleatorizar Locais de Coleta: alternar praças, terminais de ônibus e bairros em diferentes horários.',
    'Treinamento Padronizado: capacitar entrevistadores para neutralizar preferências e hesitações pessoais.',
    'Múltiplos Canais de Contato: combinar abordagens presenciais, telefônicas (CATI) e painéis online quando viável.',
    'Auditoria e Checagem Contínua: validação de no mínimo 10% a 20% das entrevistas via GPS e gravação de áudio.',
    'Análise de Sensibilidade: testar a estabilidade das conclusões frente a variações nos pesos pós-estratificados.',
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
            <span>Seção 06.1</span>
            <span className="text-white/20">/</span>
            <span>Rigor & Controle de Qualidade</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Limitações, Vieses em Campo e Melhores Práticas" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO IV · CONTROLE DE ERROS NÃO AMOSTRAIS
        </div>
      </motion.div>

      {/* Main Grid: 3 Biases Cards on Left, Best Practices Checklist on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Left Column: As 3 Fontes de Viés da Amostragem por Cotas */}
        <div className="lg:col-span-6 space-y-2.5 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold">
              Principais Fontes de Viés Não Amostral
            </span>
          </div>

          {biases.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className={`p-3 rounded-xl border ${b.color} bg-[#121418] shadow-md`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1 rounded bg-black/40">
                  {b.icon}
                </div>
                <h3 className="text-xs font-semibold text-white">
                  {b.title}
                </h3>
              </div>
              <p className="text-[11px] text-white/70 font-light leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}

          <div className="p-2.5 bg-black/40 border border-white/5 rounded-lg text-[10px] font-mono text-white/50">
            Fonte teórica: Appinio Research (2026) e Cochran (1977).
          </div>
        </div>

        {/* Right Column: Melhores Práticas Recomendadas */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-4 sm:p-5 rounded-xl border border-emerald-500/30 shadow-lg h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-editorial-serif font-bold text-white">
                    Protocolo de Melhores Práticas (Checklist)
                  </h3>
                </div>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                  Mitigação Ativa
                </span>
              </div>

              <div className="space-y-2">
                {bestPractices.map((bp, bpIdx) => (
                  <div key={bpIdx} className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-white/80 font-light leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
              <span>Garantia de integridade científica</span>
              <span className="text-[#d4af37]">Avançar para Caso Eleições 2026 &rarr;</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
