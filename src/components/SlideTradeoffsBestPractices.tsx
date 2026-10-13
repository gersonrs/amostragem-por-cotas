import React from 'react';
import { motion } from 'motion/react';
import { ThumbsUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const SlideTradeoffsBestPractices: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-2 sm:py-3 space-y-3">
      {/* Header with Typewriter Effect */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-2.5"
      >
        <div className="flex items-center gap-2 text-[11px] font-mono text-[#d4af37] uppercase tracking-[0.2em]">
          <span>Capítulo 07</span>
          <span className="text-white/20">/</span>
          <span>Balanço Metodológico</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-editorial-serif font-bold text-white mt-1">
          <TypewriterText text="Vantagens, Vieses em Campo & Boas Práticas" speed={24} delay={100} />
        </h2>
      </motion.div>

      {/* Two Column Grid: Top Corners Reveal (Top-Left & Top-Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Vantagens: Swooping in from TOP-LEFT corner with slight counter-clockwise tilt */}
        <motion.div
          initial={{ opacity: 0, x: -70, y: -40, rotate: -2 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.015, rotate: -0.5 }}
          className="p-3.5 bg-[#121418] border border-white/10 rounded-xl space-y-2.5 shadow-xl hover:border-emerald-500/30 transition-all"
        >
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
            <ThumbsUp className="w-3.5 h-3.5 animate-pulse" />
            <span>Vantagens do Método de Cotas</span>
          </div>

          <div className="space-y-2 text-xs text-white/70">
            <motion.div
              whileHover={{ x: 3 }}
              className="p-2 bg-white/[0.02] border border-white/10 rounded-lg transition-all"
            >
              <strong className="text-white block font-sans text-[11px]">Agilidade e Custo Reduzido:</strong>
              <span className="text-[11px]">Resultados em 48 a 72h. Não requer cadastro nominal dos milhões de eleitores.</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 3 }}
              className="p-2 bg-white/[0.02] border border-white/10 rounded-lg transition-all"
            >
              <strong className="text-white block font-sans text-[11px]">Garantia Marginal de Subgrupos:</strong>
              <span className="text-[11px]">Subgrupos minoritários (idosos 70+, comunidades tradicionais) têm vagas fixadas na amostra.</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 3 }}
              className="p-2 bg-white/[0.02] border border-white/10 rounded-lg transition-all"
            >
              <strong className="text-white block font-sans text-[11px]">Zero Células Vazias por Recusa:</strong>
              <span className="text-[11px]">Transeunte que recusa é imediatamente substituído por outro do mesmo perfil demográfico.</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Limitações e Vieses: Swooping in from TOP-RIGHT corner with slight clockwise tilt */}
        <motion.div
          initial={{ opacity: 0, x: 70, y: -40, rotate: 2 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.015, rotate: 0.5 }}
          className="p-3.5 bg-[#121418] border border-white/10 rounded-xl space-y-2.5 shadow-xl hover:border-amber-500/30 transition-all"
        >
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400 uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />
            <span>Limitações e Vieses Críticos</span>
          </div>

          <div className="space-y-2 text-xs text-white/70">
            <motion.div
              whileHover={{ x: -3 }}
              className="p-2 bg-white/[0.02] border border-white/10 rounded-lg transition-all"
            >
              <strong className="text-white block font-sans text-[11px]">Viés Inconsciente do Entrevistador:</strong>
              <span className="text-[11px]">Tendência a abordar indivíduos mais receptivos, bem-vestidos e acessíveis fisicamente.</span>
            </motion.div>

            <motion.div
              whileHover={{ x: -3 }}
              className="p-2 bg-white/[0.02] border border-white/10 rounded-lg transition-all"
            >
              <strong className="text-white block font-sans text-[11px]">Invisibilidade Espacial & Periférica:</strong>
              <span className="text-[11px]">Trabalhadores noturnos ou residentes em áreas periféricas têm chance de inclusão próxima a zero.</span>
            </motion.div>

            <motion.div
              whileHover={{ x: -3 }}
              className="p-2 bg-white/[0.02] border border-white/10 rounded-lg transition-all"
            >
              <strong className="text-white block font-sans text-[11px]">Incerteza do Erro Amostral:</strong>
              <span className="text-[11px]">Impossibilidade de aplicar inferência clássica ingênua sem modelagem do efeito de conglomeração.</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Best Practices Section: Emerging from Bottom Corners & Center */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="p-3.5 bg-[#101215] border border-white/15 rounded-xl space-y-2 shadow-2xl"
      >
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#d4af37] uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Boas Práticas Contemporâneas para Pesquisadores</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-white/70">
          {/* Card 1: from Bottom-Left */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="p-2.5 bg-white/[0.02] border border-white/10 rounded-lg space-y-1 hover:border-[#d4af37]/30 transition-all"
          >
            <span className="text-[#d4af37] font-mono font-bold text-xs">01</span>
            <strong className="text-white block font-sans text-[11px]">CAPI com GPS e Bloqueio Automático</strong>
            <p className="text-[11px] leading-relaxed">
              Tablets com registro georreferenciado e trava de software imediata assim que a cota atinge 100%.
            </p>
          </motion.div>

          {/* Card 2: from Bottom-Center */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="p-2.5 bg-white/[0.02] border border-white/10 rounded-lg space-y-1 hover:border-[#d4af37]/30 transition-all"
          >
            <span className="text-[#d4af37] font-mono font-bold text-xs">02</span>
            <strong className="text-white block font-sans text-[11px]">Randomização dos Pontos de Fluxo</strong>
            <p className="text-[11px] leading-relaxed">
              Sorteio sistemático de setores censitários e bairros em vez de concentração em uma só avenida central.
            </p>
          </motion.div>

          {/* Card 3: from Bottom-Right */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="p-2.5 bg-white/[0.02] border border-white/10 rounded-lg space-y-1 hover:border-[#d4af37]/30 transition-all"
          >
            <span className="text-[#d4af37] font-mono font-bold text-xs">03</span>
            <strong className="text-white block font-sans text-[11px]">Transparência do Deff e Pesos fh</strong>
            <p className="text-[11px] leading-relaxed">
              Divulgação clara dos fatores de pós-estratificação e da margem de erro real corrigida pelo desenho.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
