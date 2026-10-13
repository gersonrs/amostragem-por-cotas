import React from 'react';
import { motion } from 'motion/react';
import { Layers, Sliders, CheckCircle2, XCircle, ArrowRightLeft, FileSpreadsheet } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideStructureDifference: React.FC = () => {
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
            <span>Estrutura de Amostragem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Características e Diferença da Amostragem Estratificada" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO I · FUNDAMENTOS TEÓRICOS
        </div>
      </motion.div>

      {/* Main Grid: 3 Distinctive Characteristics + Head-to-Head Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Left Column: As 3 Características Distintivas da Amostragem por Cotas */}
        <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#121418] p-3.5 rounded-xl border border-[#d4af37]/30 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-mono text-xs font-bold">1</span>
              <h3 className="text-xs font-semibold text-white">Seleção Não Aleatória</h3>
            </div>
            <p className="text-[11px] text-white/70 font-light leading-relaxed">
              Envolve a <strong>captação dirigida</strong> de participantes com base em critérios demográficos predeterminados, sem mecanismo estocástico de sorteio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#121418] p-3.5 rounded-xl border border-blue-500/30 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono text-xs font-bold">2</span>
              <h3 className="text-xs font-semibold text-white">Alocação por Julgamento e Conveniência</h3>
            </div>
            <p className="text-[11px] text-white/70 font-light leading-relaxed">
              Depende da <strong>triagem ativa de campo</strong> conduzida por entrevistadores treinados para identificar transeuntes ou respondentes elegíveis a cada perfil.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#121418] p-3.5 rounded-xl border border-emerald-500/30 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs font-bold">3</span>
              <h3 className="text-xs font-semibold text-white">Flexibilidade Metodológica</h3>
            </div>
            <p className="text-[11px] text-white/70 font-light leading-relaxed">
              Permite a <strong>adequação ágil</strong> do plano amostral conforme a evolução das metas de campo, contingências climáticas e restrições de custo do projeto.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Confronto Direto Estratificada vs. Cotas */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-4 sm:p-5 rounded-xl border border-white/10 shadow-lg h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <ArrowRightLeft className="w-4 h-4 text-[#d4af37]" />
                  <h3 className="text-sm font-editorial-serif font-bold text-white">
                    Amostragem Estratificada vs. Amostragem por Cotas
                  </h3>
                </div>
                <span className="text-[10px] font-mono bg-white/5 px-2 py-0.5 rounded text-white/50">
                  Semelhança na Partição · Divergência na Seleção
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 mb-3 text-[11px] text-white/80 font-light">
                <strong className="text-[#d4af37]">O Ponto em Comum:</strong> Ambos os métodos particionam a população em estratos homogêneos segundo variáveis de controle (ex.: Sexo, Idade, Escolaridade).
              </div>

              {/* Tabela de Comparação */}
              <div className="grid grid-cols-2 gap-3">
                {/* Lado A: Estratificada */}
                <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-blue-400 font-semibold text-xs">
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>Amostragem Estratificada</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-white/70 font-light">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-blue-400 mt-0.5 shrink-0" />
                      <span>Exige <strong>cadastro nominal completo</strong> (lista de 1 a N com nomes/endereços).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-blue-400 mt-0.5 shrink-0" />
                      <span>Sorteio <strong>aleatório probabilístico</strong> de indivíduos dentro de cada estrato.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <XCircle className="w-3 h-3 text-rose-400 mt-0.5 shrink-0" />
                      <span>Alto custo logístico com recusas e retornos obrigatórios.</span>
                    </li>
                  </ul>
                </div>

                {/* Lado B: Cotas */}
                <div className="p-3 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 space-y-2">
                  <div className="flex items-center gap-1.5 text-[#d4af37] font-semibold text-xs">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Amostragem por Cotas</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-white/70 font-light">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#d4af37] mt-0.5 shrink-0" />
                      <span><strong>Dispensa cadastro nominal</strong> prévio de eleitores/cidadãos.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#d4af37] mt-0.5 shrink-0" />
                      <span>Recrutamento direto em <strong>pontos de fluxo</strong> ou visitas domiciliares.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#d4af37] mt-0.5 shrink-0" />
                      <span>Substituição imediata de recusas até atingir o teto numérico da célula (<MathView math="n_h" />).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-white/40 flex justify-between">
              <span>Critério central: Mecanismo de inclusão de cada elemento</span>
              <span className="text-[#d4af37]">Avançar para Histórico &rarr;</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
