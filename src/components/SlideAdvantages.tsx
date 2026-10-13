import React from 'react';
import { motion } from 'motion/react';
import { Zap, DollarSign, Users2, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlideAdvantages: React.FC = () => {
  const advantages = [
    {
      title: 'Acessibilidade & Conveniência',
      subtitle: 'Facilidade e Agilidade de Coleta',
      icon: <Zap className="w-4 h-4 text-[#d4af37]" />,
      borderColor: 'border-[#d4af37]/40',
      tagColor: 'bg-[#d4af37]/10 text-[#d4af37]',
      points: [
        'Amostragem Direcionada: foco direto em subgrupos demográficos específicos pré-parametrizados.',
        'Facilidade Operacional: entrevistas em locais públicos estratégicos ou pontos de fluxo urbano.',
        'Sem Agendamentos Repetidos: elimina a complexidade e a perda de tempo em localizar indivíduos ausentes.',
      ],
    },
    {
      title: 'Relação Custo-Benefício',
      subtitle: 'Otimização Orçamentária e de Pessoal',
      icon: <DollarSign className="w-4 h-4 text-emerald-400" />,
      borderColor: 'border-emerald-500/40',
      tagColor: 'bg-emerald-500/10 text-emerald-400',
      points: [
        'Custos Drasticamente Reduzidos: dispensa a logística milionária de sorteios com cadastro nominal.',
        'Alocação Racional de Recursos: concentração dos entrevistadores nos perfis com quotas ainda abertas.',
        'Ideal para Pesquisas com Prazos Curtos: viabiliza pesquisas eleitorais e de mercado com orçamento enxuto.',
      ],
    },
    {
      title: 'Amostragem Representativa',
      subtitle: 'Fidelidade Estrutural à População',
      icon: <Users2 className="w-4 h-4 text-blue-400" />,
      borderColor: 'border-blue-500/40',
      tagColor: 'bg-blue-500/10 text-blue-400',
      points: [
        'Representação Proporcional: espelha a distribuição de sexo, idade, renda e escolaridade da população.',
        'Perspectivas Diversas: assegura que minorias demográficas tenham assento garantido na amostra final.',
        'Controle sobre a Composição: evita que o azar amostral gere desbalanceamento severo de subgrupos.',
      ],
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
            <span>Seção 03</span>
            <span className="text-white/20">/</span>
            <span>Vantagens Metodológicas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Vantagens Pragmáticas da Amostragem por Cotas" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO I · BENEFÍCIOS OPERACIONAIS
        </div>
      </motion.div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch">
        {advantages.map((adv, idx) => (
          <motion.div
            key={adv.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 * idx }}
            className={`bg-[#121418] p-4 sm:p-5 rounded-xl border ${adv.borderColor} shadow-lg flex flex-col justify-between hover:border-white/30 transition-all`}
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="p-1.5 rounded-lg bg-black/40 border border-white/5">
                  {adv.icon}
                </div>
                <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-semibold ${adv.tagColor}`}>
                  Pilar {idx + 1}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-editorial-serif font-bold text-white mb-0.5">
                {adv.title}
              </h3>
              <p className="text-[11px] text-white/50 font-mono mb-3">
                {adv.subtitle}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2">
                {adv.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-[11px] text-white/80 font-light leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white/40 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
              <span>Appinio Insights (2026)</span>
              <span className="text-[#d4af37]">Eficiência Comprovada</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
