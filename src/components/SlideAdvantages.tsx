import React from 'react';
import { motion } from 'motion/react';
import { Zap, DollarSign, Users2, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlideAdvantages: React.FC = () => {
  const advantages = [
    {
      title: 'Acessibilidade & Agilidade',
      subtitle: 'Velocidade Operacional em Campo',
      icon: <Zap className="w-5 h-5 text-[#d4af37]" />,
      borderColor: 'border-[#d4af37]/40',
      tagColor: 'bg-[#d4af37]/15 text-[#d4af37]',
      points: [
        'Amostragem Direcionada: captação ativa orientada aos subgrupos que ainda precisam de preenchimento.',
        'Facilidade Logística: entrevistas em pontos de fluxo e grande circulação urbana.',
        'Sem Visitas Repetidas: dispensa a perda de tempo com retornos a domicílios fechados ou ausentes.',
      ],
    },
    {
      title: 'Custo-Benefício Máximo',
      subtitle: 'Otimização de Pessoal e Recursos',
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      borderColor: 'border-emerald-500/40',
      tagColor: 'bg-emerald-500/15 text-emerald-400',
      points: [
        'Custos Drasticamente Menores: dispensa a logística milionária de sorteios com cadastros nominais.',
        'Alocação Racional da Equipe: entrevistadores focam 100% nas cotas pendentes.',
        'Prazos Curtíssimos: viabiliza pesquisas eleitorais de opinião pública com coleta em 48h a 72h.',
      ],
    },
    {
      title: 'Espelho Populacional',
      subtitle: 'Fidelidade Estrutural ao Censo',
      icon: <Users2 className="w-5 h-5 text-blue-400" />,
      borderColor: 'border-blue-500/40',
      tagColor: 'bg-blue-500/15 text-blue-400',
      points: [
        'Proporcionalidade Rígida: reproduz fielmente as proporções de sexo, idade, região e escolaridade.',
        'Voz a Subgrupos: assegura assento a minorias demográficas que poderiam ser ignoradas ao acaso.',
        'Blindagem contra Desbalanceamento: impede que distorções aleatórias comprometam a amostra final.',
      ],
    },
  ];

  return (
    <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-3 lg:py-6 space-y-5 min-h-[calc(100vh-8.5rem)] flex flex-col justify-between">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-[0.2em] font-semibold">
            <span>Seção 03</span>
            <span className="text-white/20">/</span>
            <span>Vantagens Metodológicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Vantagens Pragmáticas da Amostragem por Cotas" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO I · BENEFÍCIOS OPERACIONAIS
        </div>
      </motion.div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch flex-1">
        {advantages.map((adv, idx) => (
          <motion.div
            key={adv.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 * idx }}
            className={`bg-[#121418] p-6 rounded-2xl border ${adv.borderColor} shadow-xl flex flex-col justify-between hover:border-white/30 transition-all space-y-4`}
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                  {adv.icon}
                </div>
                <span className={`text-xs font-mono uppercase px-2.5 py-1 rounded font-bold ${adv.tagColor}`}>
                  Pilar {idx + 1}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-editorial-serif font-bold text-white mb-1">
                {adv.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/50 font-mono mb-4">
                {adv.subtitle}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {adv.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Appinio Insights (2026)</span>
              <span className="text-[#d4af37] font-semibold">Eficiência Comprovada</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
