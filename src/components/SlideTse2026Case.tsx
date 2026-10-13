import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Globe, Phone, MapPin, Home } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

interface PollData {
  institute: string;
  date: string;
  method: string;
  icon: 'phone' | 'web' | 'flow' | 'home';
  sampleSize: number;
  bolsonaro: number;
  lula: number;
  diagnosis: string;
}

export const SlideTse2026Case: React.FC = () => {
  const polls: PollData[] = [
    { institute: 'PoderData / Aya', date: '08/out/2026', method: 'Telefônica (CATI)', icon: 'phone', sampleSize: 2500, bolsonaro: 53.0, lula: 47.0, diagnosis: 'Liderança fora da margem' },
    { institute: 'AtlasIntel / Bloomberg', date: '09/out/2026', method: 'Painel Web (RDR)', icon: 'web', sampleSize: 5026, bolsonaro: 52.8, lula: 47.2, diagnosis: 'Liderança fora da margem' },
    { institute: 'Ipespe', date: '10/out/2026', method: 'Telefônica (CATI)', icon: 'phone', sampleSize: 2000, bolsonaro: 52.7, lula: 47.3, diagnosis: 'Liderança fora da margem' },
    { institute: 'Datafolha', date: '08/out/2026', method: 'Presencial Ponto de Fluxo', icon: 'flow', sampleSize: 2884, bolsonaro: 52.0, lula: 48.0, diagnosis: 'Empate técnico no limite' },
    { institute: 'Vox Brasil', date: '09/out/2026', method: 'Presencial Domiciliar', icon: 'home', sampleSize: 2100, bolsonaro: 49.1, lula: 50.9, diagnosis: 'Empate técnico numérico' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-2 sm:py-3 space-y-3">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-2.5 flex flex-col md:flex-row md:items-end justify-between gap-2"
      >
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#d4af37] uppercase tracking-[0.2em]">
            <span>Seção 07.1</span>
            <span className="text-white/20">/</span>
            <span>Estudo de Caso Real</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Consolidação dos Levantamentos de 2º Turno (Outubro 2026)" speed={22} delay={100} />
          </h2>
        </div>
        <div className="text-xs font-mono text-white/50 tracking-wider">
          MÓDULO V · CENÁRIO PRESIDENCIAL & MODOS DE COLETA
        </div>
      </motion.div>

      {/* Real Polls Comparison Table (all 5 methodologies displayed simultaneously) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="overflow-x-auto rounded-xl border border-white/10 shadow-xl"
      >
        <table className="w-full text-left text-xs">
          <thead className="bg-[#15171c] text-white/90 border-b border-white/10 font-mono uppercase text-[10px] tracking-wider">
            <tr>
              <th className="py-2 px-3">Instituto</th>
              <th className="py-2 px-3">Data</th>
              <th className="py-2 px-3">Modo de Coleta</th>
              <th className="py-2 px-3">Amostra (n)</th>
              <th className="py-2 px-3 text-blue-300">F. Bolsonaro</th>
              <th className="py-2 px-3 text-red-300">Lula</th>
              <th className="py-2 px-3 text-right">Diagnóstico Metodológico</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 bg-[#0f1013]/60 font-mono text-white/80">
            {polls.map((poll, idx) => (
              <motion.tr
                key={poll.institute}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="hover:bg-white/[0.03] transition-colors"
              >
                <td className="py-2 px-3 font-semibold text-white font-sans">{poll.institute}</td>
                <td className="py-2 px-3 text-white/50">{poll.date}</td>
                <td className="py-2 px-3 text-white/80 font-sans flex items-center gap-1.5">
                  {poll.icon === 'web' && <Globe className="w-3.5 h-3.5 text-blue-400" />}
                  {poll.icon === 'phone' && <Phone className="w-3.5 h-3.5 text-emerald-400" />}
                  {poll.icon === 'flow' && <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />}
                  {poll.icon === 'home' && <Home className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{poll.method}</span>
                </td>
                <td className="py-2 px-3 font-bold text-white">{poll.sampleSize.toLocaleString('pt-BR')}</td>
                <td className="py-2 px-3 font-bold text-blue-300">{poll.bolsonaro.toFixed(1)}%</td>
                <td className="py-2 px-3 font-bold text-red-300">{poll.lula.toFixed(1)}%</td>
                <td className="py-2 px-3 text-right font-sans text-xs text-white/60">{poll.diagnosis}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Explanatory Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-6 p-3.5 bg-[#121418] border border-white/10 rounded-xl space-y-2 shadow-xl"
        >
          <span className="text-[10px] font-mono uppercase text-[#d4af37] block">
            Por que Divergem se Todos Usam Cotas?
          </span>
          <div className="space-y-1.5 text-xs text-white/70">
            <div className="p-2 bg-white/[0.02] border border-white/10 rounded-lg">
              <strong className="text-white block font-sans text-[11px]">Web Randomizado (AtlasIntel):</strong>
              <span className="text-white/60 text-[11px]">Captura eleitores hiperconectados; maior taxa de resposta de classes urbanas.</span>
            </div>
            <div className="p-2 bg-white/[0.02] border border-white/10 rounded-lg">
              <strong className="text-white block font-sans text-[11px]">Presencial Ponto de Fluxo (Datafolha):</strong>
              <span className="text-white/60 text-[11px]">Subcaptura idosos e vulneráveis reclusos; favorece transeuntes economicamente ativos.</span>
            </div>
            <div className="p-2 bg-white/[0.02] border border-white/10 rounded-lg">
              <strong className="text-white block font-sans text-[11px]">Presencial Domiciliar (Vox Brasil):</strong>
              <span className="text-white/60 text-[11px]">Atinge melhor beneficiários sociais em casa durante o dia útil.</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="lg:col-span-6 p-3.5 bg-[#121418] border border-white/10 rounded-xl space-y-2 shadow-xl"
        >
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Exigências Legais · Resolução TSE nº 23.600</span>
          </div>
          <div className="space-y-1.5 text-xs text-white/70">
            <div className="p-2 bg-white/[0.02] border border-white/10 rounded-lg">
              <strong className="text-white block font-sans text-[11px]">Registro Prévio no PesqEle:</strong>
              <span className="text-white/60 text-[11px]">Obrigatório cadastrar a pesquisa com 5 dias úteis de antecedência à divulgação pública.</span>
            </div>
            <div className="p-2 bg-white/[0.02] border border-white/10 rounded-lg">
              <strong className="text-white block font-sans text-[11px]">Publicização da Matriz de Cotas:</strong>
              <span className="text-white/60 text-[11px]">Exige o detalhamento de cada variável de controle (sexo, idade, instrução, renda e município).</span>
            </div>
            <div className="p-2 bg-white/[0.02] border border-white/10 rounded-lg">
              <strong className="text-white block font-sans text-[11px]">Aviso Metodológico de Não Aleatoriedade:</strong>
              <span className="text-white/60 text-[11px]">Pesquisas sem amostragem probabilística de endereço devem explicitar seu método em nota.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
