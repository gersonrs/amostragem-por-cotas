import React from 'react';
import { motion } from 'motion/react';
import { Scale, FileText, CheckCircle2, ShieldCheck, Globe, Home, MapPin, Phone } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlideTseRegulationAnalysis: React.FC = () => {
  const methodologicalInsights = [
    {
      title: 'Painel Digital Web (AtlasIntel)',
      desc: 'Recrutamento pela internet captura com agilidade o eleitorado urbano hiperconectado e de classe média, onde F. Bolsonaro (PL) registrou maior aderência (52,8%).',
      icon: <Globe className="w-3.5 h-3.5 text-cyan-400" />,
      tag: 'Web RDR',
      color: 'border-cyan-500/30',
    },
    {
      title: 'Presencial Domiciliar (Vox Brasil)',
      desc: 'Abordagem residencial atinge com precisão eleitores de menor renda, periferias e rurais, onde Lula (PT) mantém base histórica de sustentação (50,9%).',
      icon: <Home className="w-3.5 h-3.5 text-rose-400" />,
      tag: 'Domiciliar',
      color: 'border-rose-500/30',
    },
    {
      title: 'Presencial em Fluxo (Datafolha)',
      desc: 'Entrevistas em calçadões comerciais e terminais urbanos posicionam-se como ponto intermediário entre o perfil digital e o domiciliar (52,0% vs 48,0%).',
      icon: <MapPin className="w-3.5 h-3.5 text-amber-400" />,
      tag: 'Fluxo Urbano',
      color: 'border-amber-500/30',
    },
  ];

  const tseRules = [
    {
      label: 'a) Matriz Completa de Cotas',
      desc: 'Registro público das cotas de sexo, idade, renda e escolaridade com indicação das fontes censitárias (IBGE/TSE).',
    },
    {
      label: 'b) Estatístico Responsável & CONRE',
      desc: 'Nome, número de registro ativo no Conselho Regional de Estatística (CONRE) e assinatura técnica habilitada.',
    },
    {
      label: 'c) Transparência Contratual',
      desc: 'Identificação completa do contratante, valor econômico do contrato e origem dos recursos financeiros.',
    },
    {
      label: 'd) Metodologia & Questionário Integral',
      desc: 'Divulgação do instrumento de coleta completo e declaração exata do modo (presencial fluxo, domiciliar, CATI ou web).',
    },
    {
      label: 'e) Auditoria Mínima de 10% a 20%',
      desc: 'Relatório obrigatório de controle interno de consistência e fiscalização pós-campo dos questionários colhidos.',
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
            <span>Seção 07.2 & 07.3</span>
            <span className="text-white/20">/</span>
            <span>Marco Regulatório & Metodologia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Análise Metodológica e a Resolução TSE nº 23.600" speed={22} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO V · REGULAÇÃO ELEITORAL & PESQELE
        </div>
      </motion.div>

      {/* Main Grid: Divergences Analysis on Left, TSE Regulation Checklist on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Left Column: As Causas Metodológicas das Divergências */}
        <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-semibold">
              Causas das Divergências entre Institutos
            </span>
          </div>

          {methodologicalInsights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className={`p-3 rounded-xl border ${item.color} bg-[#121418] shadow-md`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-black/40">
                    {item.icon}
                  </div>
                  <h3 className="text-xs font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <span className="text-[10px] font-mono bg-white/5 px-1.5 py-0.5 rounded text-white/60">
                  {item.tag}
                </span>
              </div>
              <p className="text-[11px] text-white/70 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

          <div className="p-2.5 bg-black/40 border border-white/5 rounded-lg text-[10px] font-mono text-white/50">
            Conclusão: O canal de coleta afeta diretamente o alcance demográfico de cada cota.
          </div>
        </div>

        {/* Right Column: O Marco Regulatório - Resolução TSE nº 23.600 */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-4 sm:p-5 rounded-xl border border-[#d4af37]/30 shadow-lg h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#d4af37]" />
                  <h3 className="text-sm font-editorial-serif font-bold text-white">
                    Exigências Obrigatórias no Sistema PesqEle (TSE)
                  </h3>
                </div>
                <span className="text-[10px] font-mono bg-[#d4af37]/10 text-[#d4af37] px-2 py-0.5 rounded border border-[#d4af37]/20">
                  5 Dias de Antecedência
                </span>
              </div>

              <p className="text-[11px] text-white/70 font-light leading-relaxed mb-3">
                Conforme a <strong>Resolução TSE nº 23.600</strong>, a divulgação pública de pesquisas eleitorais exige registro formal prévio com os seguintes elementos mandatórios:
              </p>

              <div className="space-y-1.5">
                {tseRules.map((rule, rIdx) => (
                  <div key={rIdx} className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] leading-relaxed">
                    <span className="font-semibold text-[#d4af37] block text-[10px] font-mono">
                      {rule.label}
                    </span>
                    <span className="text-white/80 font-light">
                      {rule.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
              <span>Fiscalização pelo Ministério Público Eleitoral</span>
              <span className="text-[#d4af37]">Avançar para Conclusão & Referências &rarr;</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
