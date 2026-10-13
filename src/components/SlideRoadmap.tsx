import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  BookOpen, 
  Layers, 
  History, 
  Sparkles, 
  Calculator, 
  AlertTriangle, 
  Table, 
  Percent, 
  Workflow, 
  ShieldAlert, 
  Vote, 
  Scale, 
  Award, 
  ArrowRight,
  Clock,
  ChevronRight,
  Target
} from 'lucide-react';
import { TypewriterText } from './TypewriterText';

interface SlideRoadmapProps {
  onNavigate?: (slideIndex: number) => void;
}

interface RoadmapModule {
  id: string;
  romanNumeral: string;
  title: string;
  description: string;
  color: string;
  borderColor: string;
  accentBg: string;
  topics: {
    title: string;
    slideIndex: number;
    icon: React.ReactNode;
    tag: string;
  }[];
}

export const SlideRoadmap: React.FC<SlideRoadmapProps> = ({ onNavigate }) => {
  const modules: RoadmapModule[] = [
    {
      id: 'mod-1',
      romanNumeral: 'MÓDULO I',
      title: 'Contextualização & Estrutura',
      description: 'Definição, mecanismo operacional, o desafio em larga escala, cotas vs. estratificada e histórico',
      color: 'text-[#d4af37]',
      borderColor: 'border-[#d4af37]/30',
      accentBg: 'bg-[#d4af37]/10',
      topics: [
        {
          title: 'O que é Amostragem por Cotas? (Definição & Microcosmo)',
          slideIndex: 2,
          icon: <Target className="w-3.5 h-3.5 text-[#d4af37]" />,
          tag: 'Slide 03',
        },
        {
          title: 'Mecanismo Operacional da Coleta (Ciclo em 4 Etapas)',
          slideIndex: 3,
          icon: <Workflow className="w-3.5 h-3.5 text-emerald-400" />,
          tag: 'Slide 04',
        },
        {
          title: 'O Desafio Amostral & Os 2 Paradigmas',
          slideIndex: 4,
          icon: <BookOpen className="w-3.5 h-3.5 text-blue-400" />,
          tag: 'Slide 05',
        },
        {
          title: 'Estrutura vs. Amostragem Estratificada',
          slideIndex: 5,
          icon: <Layers className="w-3.5 h-3.5 text-indigo-400" />,
          tag: 'Slide 06',
        },
        {
          title: 'Contexto Histórico & Multidisciplinar',
          slideIndex: 6,
          icon: <History className="w-3.5 h-3.5 text-amber-400" />,
          tag: 'Slide 07',
        },
        {
          title: 'Vantagens Pragmáticas do Método',
          slideIndex: 7,
          icon: <Sparkles className="w-3.5 h-3.5 text-yellow-400" />,
          tag: 'Slide 08',
        },
      ],
    },
    {
      id: 'mod-2',
      romanNumeral: 'MÓDULO II',
      title: 'Modelagem Matemática & Margem',
      description: 'Partição populacional, estimadores e caráter referencial da margem',
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/30',
      accentBg: 'bg-indigo-500/10',
      topics: [
        {
          title: 'Procedimentos Técnicos & Proporções (Wh, nh)',
          slideIndex: 8,
          icon: <Calculator className="w-3.5 h-3.5 text-indigo-400" />,
          tag: 'Slide 09',
        },
        {
          title: 'Cálculo da Margem de Erro & Caráter Referencial',
          slideIndex: 9,
          icon: <Scale className="w-3.5 h-3.5 text-indigo-400" />,
          tag: 'Slide 10',
        },
      ],
    },
    {
      id: 'mod-3',
      romanNumeral: 'MÓDULO III',
      title: 'Exemplo Numérico Passo a Passo',
      description: 'Aplicação com n = 1.000, matriz demográfica e pós-estratificação',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      accentBg: 'bg-emerald-500/10',
      topics: [
        {
          title: 'Matriz Paramétrica Planejada (n = 1.000)',
          slideIndex: 10,
          icon: <Table className="w-3.5 h-3.5 text-emerald-400" />,
          tag: 'Slide 11',
        },
        {
          title: 'Desvios de Campo, Ponderação (fh) & Margem Nominal',
          slideIndex: 11,
          icon: <Percent className="w-3.5 h-3.5 text-teal-400" />,
          tag: 'Slide 12',
        },
      ],
    },
    {
      id: 'mod-4',
      romanNumeral: 'MÓDULO IV',
      title: 'Operação de Campo & Vieses',
      description: 'As 4 etapas da Appinio, fontes de viés e controle de qualidade',
      color: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      accentBg: 'bg-orange-500/10',
      topics: [
        {
          title: 'Como Realizar na Prática: As 4 Etapas',
          slideIndex: 12,
          icon: <Workflow className="w-3.5 h-3.5 text-orange-400" />,
          tag: 'Slide 13',
        },
        {
          title: 'Limitações, Vieses & Melhores Práticas',
          slideIndex: 13,
          icon: <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />,
          tag: 'Slide 14',
        },
      ],
    },
    {
      id: 'mod-5',
      romanNumeral: 'MÓDULO V',
      title: 'Cenário TSE 2026 & Conclusão',
      description: 'Pesquisas eleitorais 2026, Resolução TSE 23.600 e referências ABNT',
      color: 'text-sky-400',
      borderColor: 'border-sky-500/30',
      accentBg: 'bg-sky-500/10',
      topics: [
        {
          title: 'Cenário Presidencial 2026: 5 Institutos',
          slideIndex: 14,
          icon: <Vote className="w-3.5 h-3.5 text-sky-400" />,
          tag: 'Slide 15',
        },
        {
          title: 'Análise Metodológica & Resolução TSE nº 23.600',
          slideIndex: 15,
          icon: <Scale className="w-3.5 h-3.5 text-cyan-400" />,
          tag: 'Slide 16',
        },
        {
          title: 'Conclusões & Referências ABNT',
          slideIndex: 16,
          icon: <Award className="w-3.5 h-3.5 text-[#d4af37]" />,
          tag: 'Slide 17',
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-2 sm:py-3 space-y-3.5">
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-2.5 flex flex-col sm:flex-row sm:items-end justify-between gap-2"
      >
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#d4af37] uppercase tracking-[0.2em]">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Roteiro Metodológico</span>
            <span className="text-white/20">/</span>
            <span>Seminário UFRPE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Sumário Executivo & Roadmap" speed={24} delay={100} />
          </h2>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-white/50">
          <span className="inline-flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1 rounded border border-white/10">
            <Clock className="w-3 h-3 text-[#d4af37]" />
            ~50 min estimados
          </span>
          <span className="bg-[#d4af37]/10 text-[#d4af37] px-2 py-1 rounded border border-[#d4af37]/30">
            16 Slides Sequenciais
          </span>
        </div>
      </motion.div>

      {/* Main Roadmap Cards Grid (5 Modules Layout tailored to fit screen comfortably) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {modules.slice(0, 3).map((mod, idx) => (
          <motion.div
            key={mod.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 * idx }}
            className={`bg-[#121418] p-3.5 sm:p-4 rounded-xl border ${mod.borderColor} relative flex flex-col justify-between shadow-lg hover:border-white/30 transition-all`}
          >
            <div>
              {/* Module Header */}
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${mod.accentBg} ${mod.color}`}>
                  {mod.romanNumeral}
                </span>
                <span className="text-[10px] font-mono text-white/40">
                  {mod.topics.length} etapas
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-editorial-serif font-bold text-white mb-0.5">
                {mod.title}
              </h3>
              <p className="text-[11px] text-white/60 mb-2.5 font-light leading-snug">
                {mod.description}
              </p>

              {/* Topic items */}
              <div className="space-y-1.5">
                {mod.topics.map((t) => (
                  <div
                    key={t.slideIndex}
                    onClick={() => onNavigate?.(t.slideIndex)}
                    className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all cursor-pointer group"
                    title={`Ir para ${t.tag}`}
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-1">
                      <div className="p-1 rounded bg-black/40 shrink-0">
                        {t.icon}
                      </div>
                      <span className="text-xs text-white/90 truncate font-light group-hover:text-white transition-colors">
                        {t.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#d4af37]/80 shrink-0 group-hover:text-[#d4af37] flex items-center gap-0.5">
                      {t.tag}
                      <ChevronRight className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Bottom row: Modules IV and V + Navigation Brief */}
        {modules.slice(3, 5).map((mod, idx) => (
          <motion.div
            key={mod.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 + 0.08 * idx }}
            className={`bg-[#121418] p-3.5 sm:p-4 rounded-xl border ${mod.borderColor} relative flex flex-col justify-between shadow-lg hover:border-white/30 transition-all`}
          >
            <div>
              {/* Module Header */}
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${mod.accentBg} ${mod.color}`}>
                  {mod.romanNumeral}
                </span>
                <span className="text-[10px] font-mono text-white/40">
                  {mod.topics.length} etapas
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-editorial-serif font-bold text-white mb-0.5">
                {mod.title}
              </h3>
              <p className="text-[11px] text-white/60 mb-2.5 font-light leading-snug">
                {mod.description}
              </p>

              {/* Topic items */}
              <div className="space-y-1.5">
                {mod.topics.map((t) => (
                  <div
                    key={t.slideIndex}
                    onClick={() => onNavigate?.(t.slideIndex)}
                    className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all cursor-pointer group"
                    title={`Ir para ${t.tag}`}
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-1">
                      <div className="p-1 rounded bg-black/40 shrink-0">
                        {t.icon}
                      </div>
                      <span className="text-xs text-white/90 truncate font-light group-hover:text-white transition-colors">
                        {t.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#d4af37]/80 shrink-0 group-hover:text-[#d4af37] flex items-center gap-0.5">
                      {t.tag}
                      <ChevronRight className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Presenter & Slide Clicker Notice Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-gradient-to-br from-[#121418] via-[#161920] to-[#121418] p-3.5 sm:p-4 rounded-xl border border-white/10 flex flex-col justify-between shadow-lg"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                PROXIMIDADE PEDAGÓGICA
              </span>
            </div>
            <h4 className="text-sm font-editorial-serif font-bold text-white mb-1.5">
              Instruções de Apresentação
            </h4>
            <p className="text-[11px] text-white/70 font-light leading-relaxed mb-3">
              Cada conceito do artigo científico possui seu <strong>próprio slide dedicado</strong>. Não há abas ou botões ocultos que exijam mouse — a apresentação foi calibrada para uso com <strong>passador de slides sem fio</strong>.
            </p>

            <div className="space-y-1.5 text-[11px] font-mono text-white/60 bg-black/40 p-2.5 rounded-lg border border-white/5">
              <div className="flex items-center justify-between">
                <span>Avançar slide:</span>
                <span className="text-[#d4af37] bg-white/5 px-1.5 py-0.5 rounded">
                  [ → ] ou [ PageDown ]
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Recuar slide:</span>
                <span className="text-white/80 bg-white/5 px-1.5 py-0.5 rounded">
                  [ ← ] ou [ PageUp ]
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-mono text-white/40">
              Próximo: Introdução Metodológica
            </span>
            <button
              onClick={() => onNavigate?.(2)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#d4af37] hover:text-[#f4f2ec] transition-colors cursor-pointer"
            >
              Iniciar Seminário <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
