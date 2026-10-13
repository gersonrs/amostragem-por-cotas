import React from 'react';
import { motion } from 'motion/react';
import { History, ShoppingBag, Users, Vote, HeartPulse, Award } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlideHistoryApplications: React.FC = () => {
  const applications = [
    {
      title: 'Pesquisa de Mercado',
      desc: 'Mapeamento de preferências do consumidor, testes de conceito e segmentação de mercado sem custo de listagem cadastral.',
      icon: <ShoppingBag className="w-4 h-4 text-emerald-400" />,
      color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400',
    },
    {
      title: 'Sociologia',
      desc: 'Investigação de estratificação socioeconômica, tendências culturais, atitudes sociais e inclusão de grupos marginalizados.',
      icon: <Users className="w-4 h-4 text-blue-400" />,
      color: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
    },
    {
      title: 'Ciência Política & Eleições',
      desc: 'Sondagens de intenção de voto, aprovação governamental e termômetro da opinião pública em ciclos eleitorais dinâmicos.',
      icon: <Vote className="w-4 h-4 text-[#d4af37]" />,
      color: 'border-[#d4af37]/30 bg-[#d4af37]/5 text-[#d4af37]',
    },
    {
      title: 'Saúde Pública',
      desc: 'Inquéritos rápidos sobre comportamentos de risco (ex.: tabagismo, adesão vacinal) e disparidades de acesso aos serviços de saúde.',
      icon: <HeartPulse className="w-4 h-4 text-rose-400" />,
      color: 'border-rose-500/30 bg-rose-500/5 text-rose-400',
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
            <span>Seção 01 & 02</span>
            <span className="text-white/20">/</span>
            <span>Trajetória e Aplicações</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Evolução Histórica e Aplicações Multidisciplinares" speed={24} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO I · BOOTH, GALLUP & APPINIO (2026)
        </div>
      </motion.div>

      {/* Main Grid: Historical Pillars + 4 Field Application Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Left Column: Linha do Tempo e Origem dos Pioneiros */}
        <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#121418] p-4 rounded-xl border border-white/10 shadow-lg flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <History className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37]">
                  Origens Históricas Fundamentais
                </span>
              </div>

              {/* Marco 1: Charles Booth */}
              <div className="border-l-2 border-[#d4af37] pl-3 py-1 mb-3">
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>Charles Booth (1892)</span>
                  <span className="text-[10px] font-mono text-[#d4af37]">Londres</span>
                </div>
                <p className="text-[11px] text-white/70 font-light mt-0.5 leading-relaxed">
                  Em <em>"Life and Labour of the People in London"</em>, lançou as bases da representação empírica por categorias sociais para mapear a pobreza urbana.
                </p>
              </div>

              {/* Marco 2: W. I. Thomas */}
              <div className="border-l-2 border-blue-400 pl-3 py-1 mb-3">
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>W. I. Thomas (Início Séc. XX)</span>
                  <span className="text-[10px] font-mono text-blue-400">Sociologia</span>
                </div>
                <p className="text-[11px] text-white/70 font-light mt-0.5 leading-relaxed">
                  Advogou formalmente pelo estabelecimento de quotas explícitas nas ciências sociais como garantia de diversidade amostral.
                </p>
              </div>

              {/* Marco 3: George Gallup */}
              <div className="border-l-2 border-emerald-400 pl-3 py-1">
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>George Gallup (1936)</span>
                  <span className="text-[10px] font-mono text-emerald-400">Consolidação</span>
                </div>
                <p className="text-[11px] text-white/70 font-light mt-0.5 leading-relaxed">
                  Consagrou a técnica mundialmente ao acertar a eleição de Roosevelt com pequena amostra por cotas, derrotando o <em>Literary Digest</em>.
                </p>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-white/40">
              Pilares teóricos documentados em Kish (1965) e Cochran (1977).
            </div>
          </motion.div>
        </div>

        {/* Right Column: 4 Campos de Aplicação Contemporânea (Appinio Research 2026) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 h-full">
            {applications.map((app, idx) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className={`bg-[#121418] p-3.5 rounded-xl border ${app.color.split(' ')[0]} shadow-lg flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1 rounded bg-black/40">
                      {app.icon}
                    </div>
                    <h3 className="text-xs font-semibold text-white">
                      {app.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-white/75 font-light leading-relaxed">
                    {app.desc}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>Guia Appinio (2026)</span>
                  <span className="text-[#d4af37]">&bull; Alta Aplicabilidade</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
