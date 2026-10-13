import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  MapPin, 
  Smartphone, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Database,
  Users2,
  Radio
} from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

interface SlideOperationalMechanismProps {
  subSlide?: number;
  isContinuousMode?: boolean;
}

export const SlideOperationalMechanism: React.FC<SlideOperationalMechanismProps> = ({ 
  subSlide = 0,
  isContinuousMode = false
}) => {
  // Clamp subSlide between 0 and 3
  const activeStep = Math.min(Math.max(subSlide, 0), 3);

  const stepMeta = [
    {
      num: '01',
      stepLabel: 'ETAPA 01 DE 04 · MAPEAMENTO CENSITÁRIO',
      title: 'Mapeamento Demográfico & Bases Oficiais',
      subtitle: 'Parametrização do Universo Censitário (N = 156,4 Milhões)',
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      accentBorder: 'border-emerald-500/40',
      accentBg: 'bg-emerald-500/10',
      accentText: 'text-emerald-400',
    },
    {
      num: '02',
      stepLabel: 'ETAPA 02 DE 04 · ALOCAÇÃO PROPORCIONAL',
      title: 'Fixação Paramétrica das Cotas Numéricas',
      subtitle: 'Cálculo Rígido do Teto Amostral por Estrato (n = 1.000)',
      icon: <Calculator className="w-4 h-4 text-amber-400" />,
      accentBorder: 'border-amber-500/40',
      accentBg: 'bg-amber-500/10',
      accentText: 'text-amber-400',
    },
    {
      num: '03',
      stepLabel: 'ETAPA 03 DE 04 · TRIAGEM DIRECIONADA EM CAMPO',
      title: 'Abordagem em Ponto de Fluxo & Filtro Screener',
      subtitle: 'Entrevistador em Campo: Elegibilidade e Inclusão Direcionada',
      icon: <MapPin className="w-4 h-4 text-sky-400" />,
      accentBorder: 'border-sky-500/40',
      accentBg: 'bg-sky-500/10',
      accentText: 'text-sky-400',
    },
    {
      num: '04',
      stepLabel: 'ETAPA 04 DE 04 · SATURAÇÃO & TRAVA CAPI',
      title: 'Saturação de Cotas, Trava CAPI & Bloqueio Dinâmico',
      subtitle: 'Controle em Tempo Real e Consolidação do Microcosmo Final',
      icon: <Smartphone className="w-4 h-4 text-purple-400" />,
      accentBorder: 'border-purple-500/40',
      accentBg: 'bg-purple-500/10',
      accentText: 'text-purple-400',
    },
  ];

  const renderStepDetails = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-light">
                A investigação inicia-se com o <strong>levantamento das distribuições populacionais</strong> a partir das bases censitárias oficiais do país: <strong>IBGE</strong> (Censo Demográfico) e <strong>TSE 2026</strong> (Cadastro Eleitoral).
              </p>

              <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl space-y-2.5">
                <span className="text-xs sm:text-sm font-mono text-emerald-400 uppercase tracking-widest block font-bold">
                  Partição Populacional & Pesos Paramétricos:
                </span>
                <div className="py-2 text-center sm:text-left">
                  <MathView math="N = \sum_{h=1}^H N_h \quad \text{e} \quad W_h = \frac{N_h}{N}, \quad \text{com} \quad \sum_{h=1}^H W_h = 1" />
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light pt-2 border-t border-white/5">
                  <strong className="text-white">N:</strong> Universo censitário (156,4 milhões de eleitores) · <strong className="text-white">W_h:</strong> Proporção inviolável do estrato <strong className="text-white">h</strong>.
                </p>
              </div>

              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1.5">
                <span className="text-xs sm:text-sm font-mono text-amber-300 block font-bold">
                  Regra Inviolável de Gabarito:
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                  O pesquisador <em>não inventa percentuais</em>. O gabarito demográfico é rigorosamente determinado pelos dados públicos oficiais.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-sm sm:text-base font-mono font-bold text-white">Variáveis de Controle Oficiais</span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">IBGE & TSE 2026</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">1. Sexo / Gênero</span>
                  <span className="font-mono text-emerald-400 font-bold">52,5% Fem / 47,5% Masc</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">2. Faixas Etárias (16-34, 35-59, 60+)</span>
                  <span className="font-mono text-sky-400 font-bold">TSE 2026 / PNAD Contínua</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">3. Nível de Escolaridade</span>
                  <span className="font-mono text-purple-400 font-bold">Fund. / Médio / Superior</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">4. Macrorregiões Geográficas</span>
                  <span className="font-mono text-amber-400 font-bold">SE (43%), NE (27%), S, CO, N</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200">
                <strong>Objetivo:</strong> Mapear todas as <strong className="text-white">H células</strong> da matriz para espelhar a sociedade nacional.
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-light">
                Com base nos pesos <strong className="text-amber-300">W_h</strong> e no tamanho da amostra (<strong className="text-white">n = 1.000</strong>), calcula-se a <strong>cota numérica obrigatória (n_h)</strong> para cada estrato demográfico.
              </p>

              <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl space-y-2.5">
                <span className="text-xs sm:text-sm font-mono text-amber-400 uppercase tracking-widest block font-bold">
                  Cálculo Algébrico das Metas por Célula:
                </span>
                <div className="py-2 text-center sm:text-left">
                  <MathView math="n_h = n \cdot W_h = n \cdot \left(\frac{N_h}{N}\right), \quad \text{com} \quad \sum_{h=1}^H n_h = n" />
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light pt-2 border-t border-white/5">
                  As cotas são <strong>números inteiros obrigatórios</strong>. Se o estrato tem peso de 24%, a equipe deve coletar rigorosamente <strong className="text-amber-300 font-bold">240 questionários</strong>.
                </p>
              </div>

              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1.5">
                <span className="text-xs sm:text-sm font-mono text-amber-300 block font-bold">
                  Inexistência de Lacunas:
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                  As células são <strong>mutuamente exclusivas e coletivamente exaustivas</strong>: nenhum respondente pode pertencer a mais de uma célula ou ficar fora da matriz.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-sm sm:text-base font-mono font-bold text-white">Exemplo de Alocação (n = 1.000)</span>
                <span className="text-xs font-mono text-amber-400 font-semibold">Fechamento Estrito</span>
              </div>

              <div className="space-y-2 font-mono text-xs sm:text-sm">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Mulheres Jovens (16-34)</span>
                  <span className="text-emerald-400 font-bold">W₁ = 24,0% → n₁ = 240</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Mulheres Adultas (35-59)</span>
                  <span className="text-emerald-400 font-bold">W₂ = 20,5% → n₂ = 205</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Mulheres Idosas (60+)</span>
                  <span className="text-emerald-400 font-bold">W₃ = 8,0% → n₃ = 80</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Homens Jovens (16-34)</span>
                  <span className="text-sky-400 font-bold">W₄ = 22,0% → n₄ = 220</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Demais Estratos</span>
                  <span className="text-sky-400 font-bold">W₅ = 25,5% → n₅ = 255</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-200 flex items-center justify-between font-bold">
                <span>Total Amostral Planejado:</span>
                <span className="font-mono text-white text-base">n = 1.000 (100%)</span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-light">
                Entrevistadores operam em <strong>pontos de grande fluxo de pedestres</strong> (praças, terminais de transporte, centros comerciais) com roteiro de triagem estruturado.
              </p>

              <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl space-y-2.5">
                <span className="text-xs sm:text-sm font-mono text-sky-400 uppercase tracking-widest block font-bold">
                  O Algoritmo do Filtro Inicial (Screener):
                </span>
                <div className="bg-black/60 p-3.5 rounded-xl font-mono text-xs sm:text-sm text-white/90 space-y-1.5 border border-white/5">
                  <div className="text-white/60">1. Abordagem: "Olá! Você é eleitor nesta cidade?"</div>
                  <div>2. Screener Demográfico: Idade? Gênero? Escolaridade?</div>
                  <div className="text-emerald-400 font-bold">
                    3. Cota [Gênero × Faixa] ABERTA → Aplica questionário completo.
                  </div>
                  <div className="text-amber-400 font-bold">
                    4. Cota SATURADA → Agradece e aborda outro perfil pendente.
                  </div>
                </div>
              </div>

              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1.5">
                <span className="text-xs sm:text-sm font-mono text-sky-300 block font-bold">
                  Diferença Prática do Sorteio:
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                  Não há lista nominal de CPFs ou domicílios fixos fechados: a triagem busca participantes em trânsito até completar a cota.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-sm sm:text-base font-mono font-bold text-white">Fluxograma de Decisão em Campo</span>
                <span className="text-xs font-mono text-sky-400 font-semibold">Ponto de Fluxo</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <Users2 className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-white block">Transeunte Abordado</span>
                    <span className="text-xs text-white/60">Verificação de critérios demográficos</span>
                  </div>
                </div>

                <div className="flex justify-center text-white/40">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <span className="font-mono text-emerald-400 font-bold block text-sm">COTA &lt; META</span>
                    <span className="text-xs text-white/80 mt-1 block">Aplica Pesquisa (15 min)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
                    <span className="font-mono text-red-400 font-bold block text-sm">COTA = META</span>
                    <span className="text-xs text-white/80 mt-1 block">Dispensa Agradecida</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/30 text-xs sm:text-sm text-sky-200">
                <strong>Vantagem:</strong> Elimina perdas com recusas domiciliares prolongadas, reduzindo o tempo de coleta para menos de 72h.
              </div>
            </div>
          </div>
        );

      case 3:
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-light">
                Cada questionário respondido é transmitido em tempo real via tablets ou smartphones utilizando sistemas <strong>CAPI (Computer-Assisted Personal Interviewing)</strong>.
              </p>

              <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl space-y-2.5">
                <span className="text-xs sm:text-sm font-mono text-purple-400 uppercase tracking-widest block font-bold">
                  Trava Automática de Saturação (Lockout Digital):
                </span>
                <div className="p-3.5 bg-black/60 rounded-xl font-mono text-xs sm:text-sm space-y-2 text-white/90 border border-white/5">
                  <div className="flex items-center justify-between text-emerald-400 font-bold">
                    <span>✓ Cota Jovens (16-34): 240 / 240</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-xs">100% SATURADA</span>
                  </div>
                  <div className="flex items-center justify-between text-red-400 font-bold">
                    <span>🔒 Status no Tablet: BLOQUEADO</span>
                    <span className="px-2 py-0.5 rounded bg-red-500/20 text-xs">TRAVA ATIVA</span>
                  </div>
                  <div className="text-white/70 text-xs pt-1 border-t border-white/5">
                    O aplicativo impede novas inserções nessa célula e força a busca exclusiva de estratos pendentes.
                  </div>
                </div>
              </div>

              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1.5">
                <span className="text-xs sm:text-sm font-mono text-purple-300 block font-bold">
                  Fechamento do Microcosmo:
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                  A equipe passa a caçar <strong>perfis residuais raros</strong> (ex.: idosos 60+ de alta escolaridade) até que todas as cotas atinjam exatamente 100%.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-sm sm:text-base font-mono font-bold text-white">Painel CAPI do Entrevistador</span>
                <span className="text-xs font-mono text-purple-400 font-semibold">Monitoramento 5G</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm font-mono">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Mulheres 16-34</span>
                  <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> 240/240 (Concluída)
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Homens 16-34</span>
                  <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> 220/220 (Concluída)
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-between">
                  <span className="text-purple-200">Mulheres 60+ (Pendente)</span>
                  <span className="text-amber-400 font-bold">74 / 80 (Faltam 6)</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200 font-medium">
                <strong>Conclusão:</strong> Quando a última cota atinge a meta, a amostra final espelha fielmente a sociedade sem custos de repetição.
              </div>
            </div>
          </div>
        );
    }
  };

  // Continuous Mode: renders all 4 steps vertically
  if (isContinuousMode) {
    return (
      <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-6 space-y-8">
        <div className="border-b border-white/10 pb-4">
          <div className="text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-[0.2em] font-semibold">
            Seção 02 / Morfologia da Amostragem
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial-serif font-bold text-white mt-1.5">
            Mecanismo Operacional da Coleta: As 4 Etapas Sequenciais
          </h2>
        </div>

        <div className="space-y-6">
          {stepMeta.map((s, idx) => (
            <div
              key={s.num}
              className="bg-[#121418] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className={`p-2 rounded-xl border ${s.accentBg} ${s.accentBorder}`}>
                  {s.icon}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold">
                    {s.stepLabel}
                  </span>
                  <h3 className="text-xl font-editorial-serif font-bold text-white">
                    {s.title}
                  </h3>
                </div>
              </div>
              {renderStepDetails(idx)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Slide Mode: Interactive Stepper controlled by presenter passador ArrowRight
  const current = stepMeta[activeStep];

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
            <span>Seção 02</span>
            <span className="text-white/20">/</span>
            <span>Morfologia da Amostragem</span>
            <span className="text-white/20">/</span>
            <span>Mecanismo Operacional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Mecanismo Operacional da Coleta: As 4 Etapas Sequenciais" speed={22} delay={100} />
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-white/60 tracking-wider">
          <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-300 font-bold">
            Etapa {activeStep + 1} de 4
          </span>
          <span>· CICLO OPERACIONAL</span>
        </div>
      </motion.div>

      {/* 4-Step Horizontal Roadmap / Stepper Indicator */}
      <div className="grid grid-cols-4 gap-3">
        {stepMeta.map((s, idx) => {
          const isDone = idx < activeStep;
          const isCurrent = idx === activeStep;

          return (
            <div
              key={s.num}
              className={`p-3 rounded-xl border transition-all flex items-center gap-2.5 ${
                isCurrent
                  ? 'bg-white/[0.08] border-[#d4af37] shadow-lg shadow-[#d4af37]/15'
                  : isDone
                  ? 'bg-white/[0.03] border-emerald-500/30 opacity-80'
                  : 'bg-white/[0.01] border-white/5 opacity-40'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-bold shrink-0 ${
                  isCurrent
                    ? 'bg-[#d4af37] text-black shadow-md'
                    : isDone
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-white/10 text-white/40'
                }`}
              >
                {isDone ? '✓' : s.num}
              </div>
              <div className="min-w-0 flex-1 hidden sm:block">
                <span className="block text-xs font-mono uppercase text-white/50 leading-none">
                  {idx === 0 && 'Censo & Pesos'}
                  {idx === 1 && 'Cálculo Paramétrico'}
                  {idx === 2 && 'Filtro Screener'}
                  {idx === 3 && 'Trava Digital'}
                </span>
                <span className={`block text-xs sm:text-sm font-semibold truncate mt-1 ${isCurrent ? 'text-white' : 'text-white/60'}`}>
                  {s.title.split('&')[0].trim()}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Sub-Slide Content Area (Linear Stepper View with AnimatePresence) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -25 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#121418] border border-white/10 rounded-2xl p-5 sm:p-7 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-bl-full pointer-events-none" />

          {/* Sub-Slide Banner */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl border ${current.accentBg} ${current.accentBorder}`}>
                {current.icon}
              </div>
              <div>
                <span className={`text-xs font-mono uppercase tracking-widest ${current.accentText} block font-bold`}>
                  {current.stepLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-editorial-serif font-bold text-white">
                  {current.title}
                </h3>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-mono text-white/50 hidden md:block">
              {current.subtitle}
            </span>
          </div>

          {/* Render Active Step Body */}
          {renderStepDetails(activeStep)}

          {/* Bottom Bar: Remote Passador Status & Golden Rule */}
          <div className="mt-5 pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
              <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0" />
              <span>
                <strong>Síntese Operacional:</strong>{' '}
                {activeStep === 0 && 'O Censo fixa os pesos reais que nenhuma pesquisa tem licença para desrespeitar.'}
                {activeStep === 1 && 'As cotas dividem a amostra em compartimentos estanques mutuamente exclusivos.'}
                {activeStep === 2 && 'O entrevistador seleciona transeuntes em fluxo contínuo até saturar cada cota.'}
                {activeStep === 3 && 'A trava CAPI impede a superamostragem e garante o fechamento perfeito do microcosmo.'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] bg-[#d4af37]/10 px-3 py-1.5 rounded-lg border border-[#d4af37]/20 shrink-0 font-semibold">
              <Radio className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
              <span>
                {activeStep < 3
                  ? `Passador: Pressione [→] para a Etapa 0${activeStep + 2}`
                  : 'Última Etapa · Pressione [→] para o Próximo Slide'}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
