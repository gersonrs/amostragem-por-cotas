import React from 'react';
import { motion } from 'motion/react';
import { History, ShoppingBag, Users, Vote, HeartPulse, Award } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlideHistoryApplications: React.FC = () => {
  const applications = [
    {
      title: 'Pesquisa de Mercado',
      desc: 'Testes de produto, preferência de consumidores e segmentação ágil sem necessidade de cadastros prévios.',
      icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
      color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    },
    {
      title: 'Sociologia Aplicada',
      desc: 'Mapeamento de comportamentos e atitudes sociais garantindo voz proporcional a grupos minoritários.',
      icon: <Users className="w-5 h-5 text-blue-400" />,
      color: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    },
    {
      title: 'Ciência Política & Eleições',
      desc: 'Intenção de voto e aprovação governamental apuradas em 48h durante campanhas dinâmicas.',
      icon: <Vote className="w-5 h-5 text-[#d4af37]" />,
      color: 'border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37]',
    },
    {
      title: 'Saúde Pública',
      desc: 'Diagnósticos emergenciais (adesão vacinal, hábitos de vida) quando a urgência não permite visitas domiciliares lentas.',
      icon: <HeartPulse className="w-5 h-5 text-rose-400" />,
      color: 'border-rose-500/30 bg-rose-500/10 text-rose-400',
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
            <span>Seção 01 & 02</span>
            <span className="text-white/20">/</span>
            <span>Trajetória e Aplicações</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-white mt-1.5">
            <TypewriterText text="Evolução Histórica e Aplicações Multidisciplinares" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/50 tracking-wider">
          MÓDULO I · BOOTH, GALLUP & APPINIO (2026)
        </div>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1">
        {/* Left Column: Linha do Tempo */}
        <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl flex-1 flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4 border-b border-white/10 pb-3">
                <History className="w-5 h-5 text-[#d4af37]" />
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#d4af37] font-bold">
                  Origens Históricas Fundamentais
                </span>
              </div>

              {/* Marco 1: Charles Booth */}
              <div className="border-l-3 border-[#d4af37] pl-3.5 py-1 mb-4">
                <div className="flex items-center justify-between text-sm sm:text-base font-bold text-white">
                  <span>Charles Booth (1892)</span>
                  <span className="text-xs font-mono text-[#d4af37]">Londres</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-light mt-1 leading-relaxed">
                  Pioneiro no uso empírico de categorias sociais de controle para investigar a pobreza urbana na Inglaterra.
                </p>
              </div>

              {/* Marco 2: W. I. Thomas */}
              <div className="border-l-3 border-blue-400 pl-3.5 py-1 mb-4">
                <div className="flex items-center justify-between text-sm sm:text-base font-bold text-white">
                  <span>W. I. Thomas (Início Séc. XX)</span>
                  <span className="text-xs font-mono text-blue-400">Sociologia</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-light mt-1 leading-relaxed">
                  Defendeu formalmente cotas proporcionais para assegurar representação fiel de subgrupos demográficos.
                </p>
              </div>

              {/* Marco 3: George Gallup */}
              <div className="border-l-3 border-emerald-400 pl-3.5 py-1">
                <div className="flex items-center justify-between text-sm sm:text-base font-bold text-white">
                  <span>George Gallup (1936)</span>
                  <span className="text-xs font-mono text-emerald-400">Consolidação</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-light mt-1 leading-relaxed">
                  Previu com precisão a reeleição de Roosevelt com pequena amostra por cotas, derrotando o censo do <em>Literary Digest</em>.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs font-mono text-white/50">
              Literatura de referência: Kish (1965) e Cochran (1977).
            </div>
          </motion.div>
        </div>

        {/* Right Column: 4 Campos de Aplicação Contemporânea */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 h-full">
            {applications.map((app, idx) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className={`bg-[#121418] p-5 rounded-2xl border ${app.color.split(' ')[0]} shadow-xl flex flex-col justify-between space-y-3`}
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-2 rounded-xl bg-black/40">
                      {app.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {app.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    {app.desc}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                  <span>Guia Metodológico (2026)</span>
                  <span className="text-[#d4af37] font-semibold">&bull; Alta Aplicabilidade</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
