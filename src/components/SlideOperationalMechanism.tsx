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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-7 space-y-3.5">
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                A investigação inicia-se com o <strong>levantamento rigoroso das distribuições populacionais de controle</strong> a partir das bases censitárias oficiais e contemporâneas do país (Censo Demográfico do <strong>IBGE</strong> e o Cadastro Nacional de Eleitores do <strong>TSE 2026</strong>).
              </p>

              <div className="p-3 bg-white/[0.02] border border-white/10 rounded-lg space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
                  Formulação da Partição Populacional:
                </span>
                <MathView math="N = \sum_{h=1}^H N_h \quad \text{e} \quad W_h = \frac{N_h}{N}, \quad \text{com} \quad \sum_{h=1}^H W_h = 1" />
                <p className="text-[11px] text-white/70 leading-relaxed font-light pt-1 border-t border-white/5">
                  Onde <strong className="text-white">N</strong> é o universo censitário (156,4 milhões de eleitores), <strong className="text-white">N_h</strong> é a contagem exata no estrato <strong className="text-white">h</strong>, e <strong className="text-white">W_h</strong> é a proporção paramétrica inviolável.
                </p>
              </div>

              <div className="p-3 bg-black/40 border border-white/5 rounded-lg space-y-1.5">
                <span className="text-[10px] font-mono text-amber-300 block font-semibold">
                  Regra Inviolável de Gabarito:
                </span>
                <p className="text-[11px] text-white/80 leading-snug font-light">
                  O pesquisador e o instituto <em>não arbitram proporções</em> ao seu arbítrio. O plano é ancorado na verdade-terrena censitária mais recente, sem permitir distorções estruturais prévias.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-mono font-semibold text-white">Variáveis de Controle Oficiais</span>
                <span className="text-[10px] font-mono text-emerald-400">IBGE & TSE 2026</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2 rounded bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">1. Sexo Biológico / Gênero</span>
                  <span className="font-mono text-emerald-400">52,5% Fem / 47,5% Masc</span>
                </div>
                <div className="p-2 rounded bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">2. Faixas Etárias (16-34, 35-59, 60+)</span>
                  <span className="font-mono text-sky-400">TSE 2026 / PNAD Contínua</span>
                </div>
                <div className="p-2 rounded bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">3. Nível de Escolaridade</span>
                  <span className="font-mono text-purple-400">Fund. / Médio / Superior</span>
                </div>
                <div className="p-2 rounded bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">4. Macrorregiões Geográficas</span>
                  <span className="font-mono text-amber-400">SE (43%), NE (27%), S, CO, N</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-200">
                <strong>Objetivo Desta Etapa:</strong> Mapear todas as <strong className="text-white">H células demográficas</strong> da matriz para espelhar perfeitamente o eleitorado nacional.
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-7 space-y-3.5">
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                A partir da matriz de pesos demográficos <strong className="text-amber-300">W_h</strong> e do tamanho amostral pré-estabelecido (<strong className="text-white">n = 1.000 ou 2.000</strong>), calcula-se a <strong>cota numérica exata (n_h)</strong> para cada célula disjunta.
              </p>

              <div className="p-3 bg-white/[0.02] border border-white/10 rounded-lg space-y-2">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                  Cálculo Algébrico das Metas por Célula:
                </span>
                <MathView math="n_h = n \cdot W_h = n \cdot \left(\frac{N_h}{N}\right), \quad \text{com} \quad \sum_{h=1}^H n_h = n" />
                <p className="text-[11px] text-white/70 leading-relaxed font-light pt-1 border-t border-white/5">
                  As cotas são <strong>números inteiros obrigatórios</strong>. Se o estrato h possui peso censitário de 24%, a equipe de campo deve coletar rigorosamente <strong className="text-white">240 entrevistas</strong> naquele estrato.
                </p>
              </div>

              <div className="p-3 bg-black/40 border border-white/5 rounded-lg space-y-1.5">
                <span className="text-[10px] font-mono text-amber-300 block font-semibold">
                  Princípio da Inexistência de Lacunas:
                </span>
                <p className="text-[11px] text-white/80 leading-snug font-light">
                  As categorias demográficas são construídas para serem <strong>mutuamente exclusivas e coletivamente exaustivas</strong>: nenhum respondente pode pertencer a mais de uma célula ou ficar fora de enquadramento.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-mono font-semibold text-white">Exemplo de Alocação (n = 1.000)</span>
                <span className="text-[10px] font-mono text-amber-400">Fechamento Estrito</span>
              </div>

              <div className="space-y-1.5 font-mono text-xs">
                <div className="p-2 rounded bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Mulheres Jovens (16-34)</span>
                  <span className="text-emerald-400 font-bold">W₁ = 24,0% → n₁ = 240</span>
                </div>
                <div className="p-2 rounded bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Mulheres Adultas (35-59)</span>
                  <span className="text-emerald-400 font-bold">W₂ = 20,5% → n₂ = 205</span>
                </div>
                <div className="p-2 rounded bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Mulheres Idosas (60+)</span>
                  <span className="text-emerald-400 font-bold">W₃ = 8,0% → n₃ = 80</span>
                </div>
                <div className="p-2 rounded bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Homens Jovens (16-34)</span>
                  <span className="text-sky-400 font-bold">W₄ = 22,0% → n₄ = 220</span>
                </div>
                <div className="p-2 rounded bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Demais Estratos Masculinos</span>
                  <span className="text-sky-400 font-bold">W₅ = 25,5% → n₅ = 255</span>
                </div>
              </div>

              <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200 flex items-center justify-between">
                <span><strong>Soma Total das Cotas:</strong></span>
                <span className="font-mono font-bold text-white">n = 1.000 (100,0%)</span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-7 space-y-3.5">
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                Em campo, os entrevistadores atuam em <strong>pontos de grande fluxo de pedestres</strong> (estações de metrô, praças, terminais de ônibus e centros comerciais) ou rotas domiciliares predefinidas.
              </p>

              <div className="p-3 bg-white/[0.02] border border-white/10 rounded-lg space-y-2">
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest block font-bold">
                  O Algoritmo do Filtro Inicial (Screener):
                </span>
                <div className="bg-black/50 p-2.5 rounded font-mono text-xs text-white/90 space-y-1">
                  <div>1. Abordagem: "Olá! Você vota nesta cidade?"</div>
                  <div>2. Screener: Idade? Sexo? Escolaridade?</div>
                  <div className="text-sky-300">
                    3. Se Cota [Sexo × Idade] está <strong className="text-emerald-400">ABERTA</strong> → Aplica questionário eleitoral.
                  </div>
                  <div className="text-amber-300">
                    4. Se Cota [Sexo × Idade] está <strong className="text-red-400">SATURADA</strong> → Agradece e aborda outro perfil.
                  </div>
                </div>
              </div>

              <div className="p-3 bg-black/40 border border-white/5 rounded-lg space-y-1.5">
                <span className="text-[10px] font-mono text-sky-300 block font-semibold">
                  Diferença Crucial Frente ao Sorteio Probabilístico:
                </span>
                <p className="text-[11px] text-white/80 leading-snug font-light">
                  O entrevistador <strong>não consulta uma lista nominal de nomes e CPFs</strong>; ele busca ativamente transeuntes elegíveis em tempo real até preencher a cota numérica designada pelo supervisor.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                <span className="text-xs font-mono font-semibold text-white">Abordagem CAPI em Espaço Público</span>
                <span className="text-[10px] font-mono text-sky-400">Coleta Digital</span>
              </div>

              {/* Photo of survey interviewer with CAPI tablet in street */}
              <div className="relative rounded-lg overflow-hidden border border-sky-500/30 group">
                <img
                  src="/src/assets/images/field_survey_capi_1791898488751.jpg"
                  alt="Pesquisadora de opinião aplicando questionário em tablet CAPI em praça pública"
                  referrerPolicy="no-referrer"
                  className="w-full h-28 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                  <span className="text-[9px] text-sky-200 font-mono">
                    Entrevistador em Campo: Tablet com questionário digital CAPI
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2">
                  <Users2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Transeunte Abordado</span>
                    <span className="text-[10px] text-white/60">Verificação de critérios de elegibilidade</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    <span className="font-mono text-emerald-400 font-bold block text-[11px]">COTA &lt; META</span>
                    <span className="text-[9px] text-white/80">Aplica Pesquisa Completa</span>
                  </div>
                  <div className="p-1.5 rounded bg-red-500/10 border border-red-500/30">
                    <span className="font-mono text-red-400 font-bold block text-[11px]">COTA = META</span>
                    <span className="text-[9px] text-white/80">Dispensa Agradecida</span>
                  </div>
                </div>
              </div>

              <div className="p-2 rounded bg-sky-500/10 border border-sky-500/20 text-[10px] text-sky-200">
                <strong>Vantagem Operacional:</strong> Elimina o custo de procurar indivíduos ausentes em domicílios fechados, garantindo a conclusão rápida do levantamento.
              </div>
            </div>
          </div>
        );

      case 3:
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-7 space-y-3.5">
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                Durante a jornada de coleta, cada entrevista é transmitida instantaneamente pelo tablet ou smartphone através de sistemas <strong>CAPI (Computer-Assisted Personal Interviewing)</strong>.
              </p>

              <div className="p-3 bg-white/[0.02] border border-white/10 rounded-lg space-y-2">
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block font-bold">
                  Trava Automática de Saturação (Lockout Digital):
                </span>
                <div className="p-2.5 bg-black/50 rounded font-mono text-xs space-y-1 text-white/90">
                  <div className="flex items-center justify-between text-emerald-400">
                    <span>✓ Cota Jovens (16-34): 240 / 240</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-[10px]">100% SATURADA</span>
                  </div>
                  <div className="flex items-center justify-between text-red-400">
                    <span>🔒 Status no Tablet: BLOQUEADO</span>
                    <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-[10px]">TRAVA ATIVA</span>
                  </div>
                  <div className="text-white/60 text-[10px] pt-1">
                    O sistema digital rejeita novas respostas nessa célula demográfica e emite alerta ao entrevistador.
                  </div>
                </div>
              </div>

              <div className="p-3 bg-black/40 border border-white/5 rounded-lg space-y-1.5">
                <span className="text-[10px] font-mono text-purple-300 block font-semibold">
                  Consolidação do Microcosmo Final:
                </span>
                <p className="text-[11px] text-white/80 leading-snug font-light">
                  O entrevistador passa a concentrar 100% do esforço em captar <strong>perfis residuais difíceis</strong> (ex.: idosos acima de 60 anos ou homens com ensino superior) até que todas as cotas da matriz atinjam exatamente 100%.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-mono font-semibold text-white">Painel CAPI do Entrevistador</span>
                <span className="text-[10px] font-mono text-purple-400">Sincronização 4G/5G</span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-2 rounded bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Mulheres 16-34</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 240/240
                  </span>
                </div>
                <div className="p-2 rounded bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-white/80">Homens 16-34</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 220/220
                  </span>
                </div>
                <div className="p-2 rounded bg-purple-500/10 border border-purple-500/30 flex items-center justify-between">
                  <span className="text-purple-200">Mulheres 60+ (Pendente)</span>
                  <span className="text-amber-400 font-bold">74 / 80 (Faltam 6)</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-200">
                <strong>Conclusão da Coleta:</strong> Quando a última cota fecha, a amostra atinge a representação proporcional exata da sociedade sem necessidade de sorteios nominais caros.
              </div>
            </div>
          </div>
        );
    }
  };

  // Continuous Mode: renders all 4 steps vertically
  if (isContinuousMode) {
    return (
      <div className="w-full max-w-6xl mx-auto px-6 py-4 space-y-6">
        <div className="border-b border-white/10 pb-3">
          <div className="text-[11px] font-mono text-[#d4af37] uppercase tracking-[0.2em]">
            Seção 02 / Morfologia da Amostragem
          </div>
          <h2 className="text-2xl sm:text-3xl font-editorial-serif font-bold text-white mt-1">
            Mecanismo Operacional da Coleta: As 4 Etapas Sequenciais
          </h2>
        </div>

        <div className="space-y-6">
          {stepMeta.map((s, idx) => (
            <div
              key={s.num}
              className="bg-[#121418] border border-white/10 rounded-xl p-5 shadow-xl space-y-4"
            >
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-white/10">
                <div className={`p-1.5 rounded-lg border ${s.accentBg} ${s.accentBorder}`}>
                  {s.icon}
                </div>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${s.accentText} block`}>
                    {s.stepLabel}
                  </span>
                  <h3 className="text-lg font-editorial-serif font-bold text-white">
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
            <span>Seção 02</span>
            <span className="text-white/20">/</span>
            <span>Morfologia da Amostragem</span>
            <span className="text-white/20">/</span>
            <span>Mecanismo Operacional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Mecanismo Operacional da Coleta: As 4 Etapas Sequenciais" speed={22} delay={100} />
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 tracking-wider">
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-amber-300 font-semibold">
            Etapa {activeStep + 1} de 4
          </span>
          <span>· CICLO OPERACIONAL COMPLETO</span>
        </div>
      </motion.div>

      {/* 4-Step Horizontal Roadmap / Stepper Indicator */}
      <div className="grid grid-cols-4 gap-2">
        {stepMeta.map((s, idx) => {
          const isDone = idx < activeStep;
          const isCurrent = idx === activeStep;

          return (
            <div
              key={s.num}
              className={`p-2 rounded-lg border transition-all flex items-center gap-2 ${
                isCurrent
                  ? 'bg-white/[0.08] border-[#d4af37] shadow-md shadow-[#d4af37]/10'
                  : isDone
                  ? 'bg-white/[0.03] border-emerald-500/30 opacity-80'
                  : 'bg-white/[0.01] border-white/5 opacity-40'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                  isCurrent
                    ? 'bg-[#d4af37] text-black shadow-sm'
                    : isDone
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-white/10 text-white/40'
                }`}
              >
                {isDone ? '✓' : s.num}
              </div>
              <div className="min-w-0 flex-1 hidden sm:block">
                <span className="block text-[10px] font-mono uppercase text-white/40 leading-none">
                  {idx === 0 && 'Censo & Pesos'}
                  {idx === 1 && 'Cálculo Paramétrico'}
                  {idx === 2 && 'Filtro Screener'}
                  {idx === 3 && 'Trava Digital'}
                </span>
                <span className={`block text-xs font-medium truncate mt-0.5 ${isCurrent ? 'text-white' : 'text-white/60'}`}>
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
          className="bg-[#121418] border border-white/10 rounded-xl p-4 sm:p-6 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-bl-full pointer-events-none" />

          {/* Sub-Slide Banner */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2.5">
              <div className={`p-1.5 rounded-lg border ${current.accentBg} ${current.accentBorder}`}>
                {current.icon}
              </div>
              <div>
                <span className={`text-[10px] font-mono uppercase tracking-widest ${current.accentText} block`}>
                  {current.stepLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-editorial-serif font-bold text-white">
                  {current.title}
                </h3>
              </div>
            </div>
            <span className="text-[11px] font-mono text-white/40 hidden md:block">
              {current.subtitle}
            </span>
          </div>

          {/* Render Active Step Body */}
          {renderStepDetails(activeStep)}

          {/* Bottom Bar: Remote Passador Status & Golden Rule */}
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>
                <strong>Síntese Operacional:</strong>{' '}
                {activeStep === 0 && 'O Censo fixa os pesos reais que nenhuma pesquisa tem licença para desrespeitar.'}
                {activeStep === 1 && 'As cotas dividem a amostra em compartimentos estanques mutuamente exclusivos.'}
                {activeStep === 2 && 'O entrevistador seleciona transeuntes em fluxo contínuo até saturar cada cota.'}
                {activeStep === 3 && 'A trava CAPI impede a superamostragem e garante o fechamento perfeito do microcosmo.'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded border border-[#d4af37]/20 shrink-0">
              <Radio className="w-3 h-3 text-[#d4af37] animate-pulse" />
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
