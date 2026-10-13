import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, BookOpen, ShieldAlert } from 'lucide-react';
import { MathView } from './MathView';
import { TypewriterText } from './TypewriterText';

export const SlideDeffControversy: React.FC = () => {
  // Simulator State
  const [sampleN, setSampleN] = useState<number>(1000);
  const [rho, setRho] = useState<number>(0.035); // Intraclass correlation
  const [clusterSizeM, setClusterSizeM] = useState<number>(18); // Average interviews per approach point

  // Deff Calculation = 1 + rho * (m - 1)
  const deff = 1 + rho * (clusterSizeM - 1);

  // Theoretical nominal margin of error e = 1.96 * sqrt(0.25 / n)
  const nominalError = (1.96 * Math.sqrt(0.25 / sampleN)) * 100;

  // Real margin of error = nominalError * sqrt(Deff)
  const realError = nominalError * Math.sqrt(deff);
  const inflationPercentage = ((realError / nominalError) - 1) * 100;

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-2 sm:py-3 space-y-3">
      {/* Header with Typewriter Effect */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10 pb-2.5 flex flex-col md:flex-row md:items-end justify-between gap-2"
      >
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#d4af37] uppercase tracking-[0.2em]">
            <span>Capítulo 04</span>
            <span className="text-white/20">/</span>
            <span>Epistemologia Crítica</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="A Crítica de Jorge de Sousa & O Efeito de Desenho (Deff)" speed={24} delay={100} />
          </h2>
        </div>
      </motion.div>

      {/* Two Column Layout: Theory on Left, Interactive Deff Calculator on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Swooping in from Left Corner */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-2.5"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-3.5 bg-[#121418] border border-white/10 rounded-xl space-y-1.5 shadow-xl"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#d4af37] uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Jorge de Sousa (1990) · "Pesquisa Eleitoral: Críticas e Técnicas"</span>
            </div>
            <h3 className="text-sm font-editorial-serif font-bold text-white">
              A Falácia da Margem de Erro Clássica
            </h3>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              O cálculo de erro com base em Amostragem Aleatória Simples (<MathView math="e_{teorico} = 1,96\sqrt{0,25/n}" />) é uma <strong>ficção analítica</strong> em pontos de fluxo, pois pedestres compartilham perfis no mesmo local, violando a independência estatística.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="p-3.5 bg-[#121418] border border-white/10 rounded-xl space-y-2 shadow-xl"
          >
            <span className="text-[10px] font-mono uppercase text-[#d4af37] block">
              Leslie Kish (1965) & Efeito de Desenho (Deff)
            </span>
            <div className="p-2 bg-white/[0.03] border border-white/10 rounded-lg text-center text-xs">
              <MathView math="Deff = 1 + \rho (m - 1) \quad \implies \quad e_{real} = e_{teorico} \cdot \sqrt{Deff}" block />
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-white/60 pt-1 border-t border-white/10">
              <div>
                <strong className="text-white"><MathView math="\rho" />:</strong> Correlação intraclasse no ponto.
              </div>
              <div>
                <strong className="text-white"><MathView math="m" />:</strong> Entrevistas por conglomerado.
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Swooping in from Right Corner */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 bg-[#101215] border border-white/15 p-4 sm:p-5 rounded-xl space-y-3 shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#d4af37]" />
              <h4 className="text-sm font-bold text-white">Simulador do Deff & Margem Real</h4>
            </div>
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[10px] font-mono text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/30"
            >
              Deff = {deff.toFixed(2)}
            </motion.span>
          </div>

          {/* Interactive Sliders */}
          <div className="space-y-2.5 bg-white/[0.02] p-3 rounded-lg border border-white/10 text-xs">
            {/* Sample Size Slider */}
            <div>
              <div className="flex items-center justify-between text-[11px] mb-0.5 font-mono">
                <span className="text-white/80">Amostra (n):</span>
                <span className="font-bold text-[#d4af37]">{sampleN}</span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={sampleN}
                onChange={(e) => setSampleN(Number(e.target.value))}
                className="w-full accent-[#d4af37] cursor-pointer h-1"
              />
            </div>

            {/* Rho Slider */}
            <div>
              <div className="flex items-center justify-between text-[11px] mb-0.5 font-mono">
                <span className="text-white/80">Correlação Intraclasse (<MathView math="\rho" />):</span>
                <span className="font-bold text-purple-300">{(rho * 100).toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="0.00"
                max="0.10"
                step="0.005"
                value={rho}
                onChange={(e) => setRho(Number(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer h-1"
              />
            </div>

            {/* Cluster Size Slider */}
            <div>
              <div className="flex items-center justify-between text-[11px] mb-0.5 font-mono">
                <span className="text-white/80">Entrevistas por Ponto (m):</span>
                <span className="font-bold text-blue-300">{clusterSizeM}</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={clusterSizeM}
                onChange={(e) => setClusterSizeM(Number(e.target.value))}
                className="w-full accent-blue-400 cursor-pointer h-1"
              />
            </div>
          </div>

          {/* Comparison Cards: Rotating/Spring Reveal */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-3 bg-white/[0.03] border border-white/10 rounded-lg shadow-lg"
            >
              <span className="text-[10px] font-mono text-white/40 uppercase block">
                Margem Nominal (AAS)
              </span>
              <div className="text-xl font-mono font-bold text-blue-300 mt-1">
                ± {nominalError.toFixed(2)}%
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-300 uppercase block">
                  Margem Real (Deff)
                </span>
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
              </div>
              <div className="text-xl font-mono font-bold text-amber-400 mt-1">
                ± {realError.toFixed(2)}%
              </div>
            </motion.div>
          </div>

          {/* Warning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="p-2.5 bg-red-950/20 border border-red-500/20 rounded-lg text-xs text-white/70"
          >
            <span className="text-amber-300 font-semibold font-mono text-[11px] block">
              Incerteza Subestimada: +{inflationPercentage.toFixed(1)}%
            </span>
            <p className="text-[11px] text-white/60 mt-0.5">
              Empates técnicos declarados como "vantagem no limite" muitas vezes caem dentro da margem real corrigida pelo Deff.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
