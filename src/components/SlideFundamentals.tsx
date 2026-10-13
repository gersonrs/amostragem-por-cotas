import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, BookOpen, Layers, Clock } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';
import { sound } from '../utils/audio';

export const SlideFundamentals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'conceito' | 'paradigmas' | 'historia'>('conceito');

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-2 sm:py-3 space-y-3.5">
      {/* Editorial Chapter Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-2.5 flex flex-col sm:flex-row sm:items-end justify-between gap-2"
      >
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#d4af37] uppercase tracking-[0.2em]">
            <span>Capítulo 01</span>
            <span className="text-white/20">/</span>
            <span>Epistemologia Amostral</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="O que é Amostragem por Cotas?" speed={30} delay={150} />
          </h2>
        </div>

        {/* Interactive Sub-Navigation Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-white/5 rounded-lg border border-white/10 text-xs">
          <button
            onClick={() => {
              sound.playTick();
              setActiveTab('conceito');
            }}
            className={`py-1 px-3 text-xs font-medium rounded-md transition-all ${
              activeTab === 'conceito'
                ? 'bg-[#d4af37] text-black font-semibold shadow-md'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            Definição
          </button>
          <button
            onClick={() => {
              sound.playTick();
              setActiveTab('paradigmas');
            }}
            className={`py-1 px-3 text-xs font-medium rounded-md transition-all ${
              activeTab === 'paradigmas'
                ? 'bg-[#d4af37] text-black font-semibold shadow-md'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            Probabilística vs Cotas
          </button>
          <button
            onClick={() => {
              sound.playTick();
              setActiveTab('historia');
            }}
            className={`py-1 px-3 text-xs font-medium rounded-md transition-all ${
              activeTab === 'historia'
                ? 'bg-[#d4af37] text-black font-semibold shadow-md'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            História
          </button>
        </div>
      </motion.div>

      {/* Tab 1: Definição Essencial with Corner Entrances & Rotational Pop */}
      <AnimatePresence mode="wait">
        {activeTab === 'conceito' && (
          <motion.div
            key="conceito"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start"
          >
            <div className="lg:col-span-7 space-y-3.5">
              {/* Main Definition Card coming from Top-Left corner */}
              <motion.div
                initial={{ opacity: 0, x: -35, y: -20, rotate: -0.5 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                whileHover={{ scale: 1.01 }}
                className="bg-[#121418] p-5 sm:p-6 rounded-xl border border-white/10 relative overflow-hidden shadow-xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37]">Definição Operacional</span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                  A <strong>amostragem por cotas</strong> é um método <em>não probabilístico</em> no qual a população é dividida em subgrupos disjuntos segundo características de controle conhecidas (sexo, idade, renda, instrução), atribuindo-se metas numéricas (<MathView math="n_h" />) a serem cumpridas por seleção intencional dos pesquisadores até que o tamanho total (<MathView math="n" />) seja alcançado.
                </p>
              </motion.div>

              {/* Three Pillar Cards: Staggered with slight rotations */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Pillar 1: from Bottom-Left with slight tilt */}
                <motion.div
                  initial={{ opacity: 0, x: -25, y: 25, rotate: -2 }}
                  animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                  whileHover={{ scale: 1.03, rotate: -0.8 }}
                  className="p-3.5 bg-white/[0.03] border border-white/10 rounded-lg transition-shadow hover:shadow-lg hover:shadow-[#d4af37]/10"
                >
                  <span className="text-[10px] font-mono text-[#d4af37]">01. Alocação</span>
                  <h4 className="text-xs font-semibold text-white mt-0.5">Matriz Proporcional</h4>
                  <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                    Espelha os dados censitários (IBGE/TSE), garantindo representação de subgrupos.
                  </p>
                </motion.div>

                {/* Pillar 2: from Bottom Center */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.25 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-3.5 bg-white/[0.03] border border-white/10 rounded-lg transition-shadow hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <span className="text-[10px] font-mono text-[#d4af37]">02. Seleção</span>
                  <h4 className="text-xs font-semibold text-white mt-0.5">Não Aleatória</h4>
                  <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                    Sem sorteio nominal. O pesquisador aborda indivíduos em pontos de fluxo.
                  </p>
                </motion.div>

                {/* Pillar 3: from Bottom-Right with slight tilt */}
                <motion.div
                  initial={{ opacity: 0, x: 25, y: 25, rotate: 2 }}
                  animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 }}
                  whileHover={{ scale: 1.03, rotate: 0.8 }}
                  className="p-3.5 bg-white/[0.03] border border-white/10 rounded-lg transition-shadow hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <span className="text-[10px] font-mono text-[#d4af37]">03. Agilidade</span>
                  <h4 className="text-xs font-semibold text-white mt-0.5">Tempo Real (48h)</h4>
                  <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                    Recusas são supridas pelo próximo transeunte do mesmo perfil demográfico.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Emerging from Top-Right corner */}
            <motion.div
              initial={{ opacity: 0, x: 35, y: -15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 space-y-3"
            >
              <div className="p-5 bg-gradient-to-br from-[#15171c] to-[#0f1013] border border-white/10 rounded-xl space-y-2.5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-white/80 pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>O Dilema: Censo vs Amostragem</span>
                  <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                </h3>
                <div className="space-y-2 text-xs leading-relaxed text-white/70">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white">Escala Populacional:</strong> Mais de <span className="text-[#d4af37] font-semibold">156,4M</span> de eleitores. Censo contínuo é impraticável.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white">Sigilo Constitucional:</strong> A LGPD e o TSE vedam listagens nominais privadas para sorteio aleatório simples.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white">A Solução por Cotas:</strong> Replica a pirâmide proporcional mantendo controle da composição amostral.
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-start gap-2 text-xs text-amber-200/90"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5 animate-bounce" />
                <span>
                  <strong>Atenção Metodológica:</strong> O método não controla correlações espaciais ocultas de pontos de fluxo.
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Tab 2: Comparação de Paradigmas */}
        {activeTab === 'paradigmas' && (
          <motion.div
            key="paradigmas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <div className="overflow-x-auto rounded-xl border border-white/10 shadow-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#15171c] text-white/90 border-b border-white/10 uppercase tracking-wider text-[10px] font-mono">
                  <tr>
                    <th className="py-2.5 px-3.5">Dimensão Analítica</th>
                    <th className="py-2.5 px-3.5 text-blue-300">Probabilística (AAS / Estratificada)</th>
                    <th className="py-2.5 px-3.5 text-[#d4af37]">Amostragem por Cotas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-[#0f1013]/60 text-white/80">
                  {[
                    { dim: 'Probabilidade (\\pi_i)', prob: 'Conhecida e positiva (\\pi_i > 0) para todos.', quota: 'Desconhecida; depende do ponto de fluxo e trânsito.' },
                    { dim: 'Mecanismo', prob: 'Sorteio estocástico pseudo-aleatório.', quota: 'Seleção intencional para cumprir a meta da célula.' },
                    { dim: 'Cadastro Nominal', prob: 'Indispensável lista nominal de 1 a N.', quota: 'Dispensado; requer apenas proporções censitárias (W_h).' },
                    { dim: 'Não Resposta / Recusa', prob: 'Gera atrito grave e exige modelos de imputação.', quota: 'Substituição instantânea por indivíduo de mesmo estrato.' },
                    { dim: 'Margem de Erro', prob: 'Formalmente garantida pelo TCL clássico.', quota: 'Ficção formal (Sousa, 1990); requer correção pelo Deff.' },
                  ].map((row, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.05 }}
                      className="hover:bg-white/[0.03] transition-colors"
                    >
                      <td className="py-2 px-3.5 font-semibold text-white"><MathView math={row.dim} /></td>
                      <td className="py-2 px-3.5 text-blue-200/90"><MathView math={row.prob} /></td>
                      <td className="py-2 px-3.5 text-[#f3e7c4]"><MathView math={row.quota} /></td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Linha do Tempo Histórica */}
        {activeTab === 'historia' && (
          <motion.div
            key="historia"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="relative border-l border-white/15 pl-5 ml-2 space-y-4"
          >
            {[
              {
                year: '1892 · Charles Booth (Londres)',
                title: 'As Origens na Pesquisa Social Londrina',
                desc: 'Pioneirismo na divisão de bairros londrinos em grupos econômicos para diagnosticar a pobreza sem censo exaustivo.',
                color: 'bg-[#d4af37]',
              },
              {
                year: '1936 · O Fracasso da Literary Digest vs George Gallup',
                title: 'A Vitória Histórica das Cotas Controladas',
                desc: 'A Literary Digest consultou 10 milhões por lista telefônica e errou por viés de classe alta. Gallup acertou com 50 mil cotas representativas.',
                color: 'bg-white/40',
              },
              {
                year: '1990–Presente · Jorge de Sousa e o Marco do TSE',
                title: 'Amadurecimento Crítico & Resolução TSE nº 23.600',
                desc: 'Jorge de Sousa desmascara o uso ingênuo do erro aleatório em cotas. O TSE passa a exigir o detalhamento de cada célula no sistema PesqEle.',
                color: 'bg-[#d4af37]',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                className="relative group"
              >
                <div className={`absolute -left-[27px] top-1 w-2.5 h-2.5 rounded-full ${item.color} ring-4 ring-black group-hover:scale-150 transition-transform`} />
                <span className="text-[11px] font-mono text-[#d4af37]">{item.year}</span>
                <h4 className="text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-white/70 mt-0.5 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
