import React from 'react';
import { motion } from 'motion/react';
import { Scale, FileText, CheckCircle2, ShieldCheck, Globe, Home, MapPin, Phone } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlideTseRegulationAnalysis: React.FC = () => {
  const methodologicalInsights = [
    {
      title: 'Painel Digital Web (AtlasIntel)',
      desc: 'Internet capta o eleitorado urbano hiperconectado e de classe média, com maior taxa de resposta no segmento.',
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      tag: 'Web RDR',
      color: 'border-cyan-500/30',
    },
    {
      title: 'Presencial Domiciliar (Vox Brasil)',
      desc: 'Visita residencial atinge eleitores de menor renda e periferias presentes em casa durante horário comercial.',
      icon: <Home className="w-5 h-5 text-rose-400" />,
      tag: 'Domiciliar',
      color: 'border-rose-500/30',
    },
    {
      title: 'Presencial em Fluxo (Datafolha)',
      desc: 'Calçadões comerciais e terminais urbanos posicionam-se como ponto intermediário de transeuntes ativos.',
      icon: <MapPin className="w-5 h-5 text-amber-400" />,
      tag: 'Fluxo Urbano',
      color: 'border-amber-500/30',
    },
  ];

  const tseRules = [
    {
      label: 'a) Matriz Completa de Cotas',
      desc: 'Registro público das cotas com fontes censitárias oficiais (IBGE/TSE).',
    },
    {
      label: 'b) Estatístico Responsável & CONRE',
      desc: 'Registro ativo no Conselho Regional de Estatística e assinatura técnica habilitada.',
    },
    {
      label: 'c) Transparência Financeira',
      desc: 'Identificação completa do contratante, valor econômico e origem dos recursos.',
    },
    {
      label: 'd) Metodologia & Questionário',
      desc: 'Divulgação do questionário integral e declaração explícita do modo de abordagem.',
    },
    {
      label: 'e) Auditoria de 10% a 20%',
      desc: 'Fiscalização pós-campo e controle interno de consistência das entrevistas.',
    },
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
            <span>Seção 07.2 & 07.3</span>
            <span className="text-white/20">/</span>
            <span>Marco Regulatório & Metodologia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Análise Metodológica e a Resolução TSE nº 23.600" speed={22} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO V · REGULAÇÃO ELEITORAL & PESQELE
        </div>
      </motion.div>

      {/* Main Grid: Divergences Analysis on Left, TSE Regulation Checklist on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
        {/* Left Column: As Causas Metodológicas das Divergências */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm sm:text-base font-mono uppercase tracking-wider text-[#d4af37] font-bold">
              Causas das Divergências entre Modos
            </span>
          </div>

          <div className="space-y-3.5 flex-1 flex flex-col justify-between">
            {methodologicalInsights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className={`p-4 sm:p-5 rounded-2xl border ${item.color} bg-[#121418] shadow-lg`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-black/50 border border-white/10">
                      {item.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded-lg text-white/80 font-bold">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed pl-11">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="p-3 bg-black/50 border border-white/10 rounded-xl text-xs sm:text-sm font-mono text-white/60">
            Conclusão: O meio de contato modula o perfil de quem responde à cota.
          </div>
        </div>

        {/* Right Column: O Marco Regulatório - Resolução TSE nº 23.600 */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-6 sm:p-7 rounded-2xl border border-[#d4af37]/40 shadow-xl h-full flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-[#d4af37]" />
                  <h3 className="text-lg sm:text-xl font-editorial-serif font-bold text-white">
                    Exigências Obrigatórias no Sistema PesqEle (TSE)
                  </h3>
                </div>
                <span className="text-xs font-mono bg-[#d4af37]/15 text-[#d4af37] px-3 py-1 rounded-lg border border-[#d4af37]/30 font-bold">
                  5 Dias de Antecedência
                </span>
              </div>

              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-4">
                Conforme a <strong>Resolução TSE nº 23.600</strong>, qualquer pesquisa pública exige cadastro prévio e verificação dos seguintes requisitos:
              </p>

              <div className="space-y-2.5">
                {tseRules.map((rule, rIdx) => (
                  <div key={rIdx} className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm sm:text-base leading-relaxed">
                    <span className="font-bold text-[#d4af37] block text-sm font-mono mb-0.5">
                      {rule.label}
                    </span>
                    <span className="text-white/85 font-light">
                      {rule.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-mono text-white/50">
              <span>Fiscalização pelo Ministério Público Eleitoral</span>
              <span className="text-[#d4af37] font-semibold text-sm">Conclusão & Referências &rarr;</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
