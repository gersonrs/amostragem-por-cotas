import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, ShieldAlert, CheckCircle2, UserX, UserCheck, Shuffle, SlidersHorizontal } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlideBiasesBestPractices: React.FC = () => {
  const biases = [
    {
      title: 'Viés do Entrevistador',
      desc: 'Tendência inconsciente de abordar transeuntes de perfil amigável e receptivo, ignorando quem está apressado ou de semblante sério.',
      icon: <UserX className="w-5 h-5 text-rose-400" />,
      color: 'border-rose-500/30 bg-rose-500/10',
    },
    {
      title: 'Viés de Autosseleção',
      desc: 'Quem aceita prontamente responder tem perfil e atitudes políticas diferentes de quem recusa abordagens de rua habitualmente.',
      icon: <AlertCircle className="w-5 h-5 text-amber-400" />,
      color: 'border-amber-500/30 bg-amber-500/10',
    },
    {
      title: 'Viés de Não Resposta',
      desc: 'Recusa sistemática de certos estratos (idosos com baixa mobilidade, classes altas em condomínios), gerando carência na cota.',
      icon: <ShieldAlert className="w-5 h-5 text-orange-400" />,
      color: 'border-orange-500/30 bg-orange-500/10',
    },
  ];

  const bestPractices = [
    { title: 'Aleatorização de Pontos', desc: 'Alternar bairros, praças, terminais e horários para neutralizar rotinas locais.' },
    { title: 'Treinamento Padronizado', desc: 'Capacitar pesquisadores a abordar sem filtros pessoais de simpatia ou aparência.' },
    { title: 'Coleta Multimodo', desc: 'Combinar fluxo presencial, domiciliar e CATI/web para atingir públicos reclusos.' },
    { title: 'Auditoria Rigorosa (10-20%)', desc: 'Verificação contínua por GPS, auditoria telefônica e gravação de áudio.' },
    { title: 'Pós-Estratificação', desc: 'Ajuste fino de pesos para corrigir eventuais desvios marginais de fechamento.' },
  ];

  return (
    <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-3 lg:py-6 space-y-6 min-h-[calc(100vh-8.5rem)] flex flex-col justify-between">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-[0.2em] font-semibold">
            <span>Seção 06.1</span>
            <span className="text-white/20">/</span>
            <span>Rigor & Controle de Qualidade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Limitações, Vieses em Campo e Melhores Práticas" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO IV · CONTROLE DE ERROS NÃO AMOSTRAIS
        </div>
      </motion.div>

      {/* Main Grid: 3 Biases Cards on Left, Best Practices Checklist on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
        {/* Left Column: As 3 Fontes de Viés da Amostragem por Cotas */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm sm:text-base font-mono uppercase tracking-wider text-rose-400 font-bold">
              3 Principais Fontes de Viés Não Amostral
            </span>
          </div>

          <div className="space-y-3.5 flex-1 flex flex-col justify-between">
            {biases.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className={`p-4 sm:p-5 rounded-2xl border ${b.color} bg-[#121418] shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-black/50 border border-white/10">
                    {b.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {b.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed pl-11">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="p-3 bg-black/50 border border-white/10 rounded-xl text-xs sm:text-sm font-mono text-white/60">
            Fontes: Appinio Research (2026), Kish (1965) e Cochran (1977).
          </div>
        </div>

        {/* Right Column: Melhores Práticas Recomendadas */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-6 sm:p-7 rounded-2xl border border-emerald-500/30 shadow-xl h-full flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-lg sm:text-xl font-editorial-serif font-bold text-white">
                    Protocolo de Melhores Práticas (Mitigação Ativa)
                  </h3>
                </div>
                <span className="text-xs font-mono bg-emerald-500/15 text-emerald-400 px-3 py-1 rounded-lg border border-emerald-500/30 font-bold">
                  Controle Rigoroso
                </span>
              </div>

              <div className="space-y-3">
                {bestPractices.map((bp, bpIdx) => (
                  <div key={bpIdx} className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3 text-sm sm:text-base text-white/90 font-light leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white font-semibold block text-sm sm:text-base">{bp.title}:</strong>
                      <span className="text-white/80">{bp.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-mono text-white/50">
              <span>Garantia de integridade científica</span>
              <span className="text-[#d4af37] font-semibold text-sm">Próximo: Caso Eleições 2026 &rarr;</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
