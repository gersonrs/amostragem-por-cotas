import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { UserCheck, UserX, Trophy, AlertTriangle, RotateCcw, CheckCircle, Sparkles, MapPin } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { sound } from '../utils/audio';

interface Candidate {
  id: number;
  name: string;
  categoryKey: 'f_jovem' | 'f_idosa' | 'm_jovem' | 'm_idoso';
  categoryLabel: string;
  avatarTone: string;
  quote: string;
}

const CANDIDATE_POOL: Candidate[] = [
  { id: 1, name: 'Lucas', categoryKey: 'm_jovem', categoryLabel: 'Homem (16-34)', avatarTone: 'from-blue-500 to-indigo-600', quote: 'A caminho da universidade na Boa Vista.' },
  { id: 2, name: 'Dona Maria', categoryKey: 'f_idosa', categoryLabel: 'Mulher (60+)', avatarTone: 'from-purple-500 to-pink-600', quote: 'Saindo da farmácia com calma.' },
  { id: 3, name: 'Camila', categoryKey: 'f_jovem', categoryLabel: 'Mulher (16-34)', avatarTone: 'from-amber-400 to-orange-500', quote: 'A caminho do estágio em tecnologia.' },
  { id: 4, name: 'Seu Severino', categoryKey: 'm_idoso', categoryLabel: 'Homem (60+)', avatarTone: 'from-emerald-500 to-teal-600', quote: 'Comprando sementes na feira livre.' },
  { id: 5, name: 'Matheus', categoryKey: 'm_jovem', categoryLabel: 'Homem (16-34)', avatarTone: 'from-blue-500 to-indigo-600', quote: 'Ouvindo música nos fones de ouvido.' },
  { id: 6, name: 'Beatriz', categoryKey: 'f_jovem', categoryLabel: 'Mulher (16-34)', avatarTone: 'from-amber-400 to-orange-500', quote: 'Voltando do curso de pós-graduação.' },
  { id: 7, name: 'Dona Tereza', categoryKey: 'f_idosa', categoryLabel: 'Mulher (60+)', avatarTone: 'from-purple-500 to-pink-600', quote: 'Esperando a neta na saída da escola.' },
  { id: 8, name: 'Seu Antônio', categoryKey: 'm_idoso', categoryLabel: 'Homem (60+)', avatarTone: 'from-emerald-500 to-teal-600', quote: 'Lendo o jornal diário no banco da praça.' },
];

export const SlideGameFieldSimulator: React.FC = () => {
  const quotasTarget = {
    f_jovem: 3,
    f_idosa: 2,
    m_jovem: 3,
    m_idoso: 2,
  };

  const [collected, setCollected] = useState({
    f_jovem: 0,
    f_idosa: 0,
    m_jovem: 0,
    m_idoso: 0,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'warn' | 'neutral' } | null>(null);
  const [gameCompleted, setGameCompleted] = useState(false);

  const currentCandidate = CANDIDATE_POOL[currentIndex % CANDIDATE_POOL.length];
  const totalTarget = Object.values(quotasTarget).reduce((a, b) => a + b, 0);
  const totalCollected = Object.values(collected).reduce((a, b) => a + b, 0);

  useEffect(() => {
    const isWin =
      collected.f_jovem === quotasTarget.f_jovem &&
      collected.f_idosa === quotasTarget.f_idosa &&
      collected.m_jovem === quotasTarget.m_jovem &&
      collected.m_idoso === quotasTarget.m_idoso;

    if (isWin && !gameCompleted) {
      setGameCompleted(true);
      sound.playSuccess();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // safe fallback
      }
    }
  }, [collected, gameCompleted, quotasTarget]);

  const handleInterview = () => {
    sound.playTick();
    const key = currentCandidate.categoryKey;
    const currentCount = collected[key];
    const target = quotasTarget[key];

    if (currentCount >= target) {
      setScore((prev) => Math.max(0, prev - 30));
      setFeedback({
        text: `Viés de Saturação! Cota para ${currentCandidate.categoryLabel} já atingiu a meta (${currentCount}/${target}). (-30 pts)`,
        type: 'warn',
      });
    } else {
      setCollected((prev) => ({ ...prev, [key]: prev[key] + 1 }));
      setScore((prev) => prev + 100);
      setFeedback({
        text: `${currentCandidate.name} adicionado(a) com sucesso à cota de ${currentCandidate.categoryLabel}. (+100 pts)`,
        type: 'success',
      });
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const handleSkip = () => {
    sound.playTick();
    const key = currentCandidate.categoryKey;
    const isFull = collected[key] >= quotasTarget[key];

    if (isFull) {
      setScore((prev) => prev + 25);
      setFeedback({
        text: `Decisão correta! A cota para ${currentCandidate.categoryLabel} já está preenchida. (+25 pts)`,
        type: 'neutral',
      });
    } else {
      setFeedback({
        text: `${currentCandidate.name} dispensado(a). A cota ainda tem vagas abertas (${collected[key]}/${quotasTarget[key]}).`,
        type: 'neutral',
      });
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    sound.playTick();
    setCollected({
      f_jovem: 0,
      f_idosa: 0,
      m_jovem: 0,
      m_idoso: 0,
    });
    setScore(0);
    setCurrentIndex(0);
    setFeedback(null);
    setGameCompleted(false);
  };

  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-demonstration for hands-free presentation clickers
  useEffect(() => {
    if (!isAutoPlay || gameCompleted) return;

    const timer = setTimeout(() => {
      const key = currentCandidate.categoryKey;
      const isFull = collected[key] >= quotasTarget[key];

      // Smart decision by the virtual field interviewer
      if (isFull) {
        handleSkip();
      } else {
        handleInterview();
      }
    }, 2400);

    return () => clearTimeout(timer);
  }, [currentIndex, isAutoPlay, gameCompleted, collected]);

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
            <span>Gamificação</span>
            <span className="text-white/20">/</span>
            <span>Simulador de Campo Interativo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial-serif font-bold text-white mt-1">
            <TypewriterText text="Desafio do Amostrador de Fluxo" speed={26} delay={100} />
          </h2>
        </div>

        {/* Live Score Display */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-lg text-xs font-mono shadow-md"
        >
          <span className="text-white/50">Score:</span>
          <span className="font-bold text-[#d4af37]">{score} pts</span>
          <button
            onClick={handleReset}
            className="p-1 text-white/50 hover:text-white transition-colors cursor-pointer"
            title="Reiniciar"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </motion.div>

      {/* Main Game Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left: Quotas Status Board - from Left */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -0.5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-[#121418] border border-white/10 p-3.5 rounded-xl space-y-2.5 shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Painel de Cotas (Metas CAPI)</span>
            </h4>
            <span className="text-[11px] font-mono text-white/50">
              {totalCollected} / {totalTarget}
            </span>
          </div>

          <div className="space-y-2">
            {/* Quota 1 */}
            <motion.div whileHover={{ x: 2 }} className="p-2 px-2.5 bg-white/[0.02] border border-white/10 rounded-lg text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-amber-200">Mulheres (16-34)</span>
                <span className="font-mono text-white text-[11px]">{collected.f_jovem} / {quotasTarget.f_jovem}</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-amber-400"
                  animate={{ width: `${Math.min((collected.f_jovem / quotasTarget.f_jovem) * 100, 100)}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>

            {/* Quota 2 */}
            <motion.div whileHover={{ x: 2 }} className="p-2 px-2.5 bg-white/[0.02] border border-white/10 rounded-lg text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-purple-300">Mulheres (60+) [Risco Recusa]</span>
                <span className="font-mono text-white text-[11px]">{collected.f_idosa} / {quotasTarget.f_idosa}</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-purple-400"
                  animate={{ width: `${Math.min((collected.f_idosa / quotasTarget.f_idosa) * 100, 100)}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>

            {/* Quota 3 */}
            <motion.div whileHover={{ x: 2 }} className="p-2 px-2.5 bg-white/[0.02] border border-white/10 rounded-lg text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-blue-300">Homens (16-34)</span>
                <span className="font-mono text-white text-[11px]">{collected.m_jovem} / {quotasTarget.m_jovem}</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-400"
                  animate={{ width: `${Math.min((collected.m_jovem / quotasTarget.m_jovem) * 100, 100)}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>

            {/* Quota 4 */}
            <motion.div whileHover={{ x: 2 }} className="p-2 px-2.5 bg-white/[0.02] border border-white/10 rounded-lg text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-emerald-300">Homens (60+)</span>
                <span className="font-mono text-white text-[11px]">{collected.m_idoso} / {quotasTarget.m_idoso}</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-emerald-400"
                  animate={{ width: `${Math.min((collected.m_idoso / quotasTarget.m_idoso) * 100, 100)}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Transeunte Approach Stage - from Right */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 0.5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 bg-[#101215] border border-white/15 p-4 rounded-xl space-y-3 shadow-2xl"
        >
          {!gameCompleted ? (
            <>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="uppercase text-[#d4af37]">Transeunte se Aproximando no Calçadão</span>
                <span className="text-white/40">ID #{currentCandidate.id}</span>
              </div>

              {/* Candidate Profile Card with smooth entrance & flip on new candidate */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCandidate.id}
                  initial={{ opacity: 0, x: 30, rotate: 1.5, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, rotate: -1.5, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  whileHover={{ scale: 1.015 }}
                  className="p-4 bg-[#16181d] border border-white/15 rounded-xl flex items-center gap-3.5 shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: [0, -3, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${currentCandidate.avatarTone} flex items-center justify-center font-bold text-lg text-white shadow-lg shrink-0`}
                  >
                    {currentCandidate.name.charAt(0)}
                  </motion.div>

                  <div className="flex-1 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white font-editorial-serif">{currentCandidate.name}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-mono">
                        {currentCandidate.categoryLabel}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 italic font-light">
                      "{currentCandidate.quote}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Feedback Alert */}
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className={`p-2.5 rounded-lg text-xs flex items-center gap-2 ${
                      feedback.type === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-200'
                        : feedback.type === 'warn'
                        ? 'bg-red-500/10 border border-red-500/30 text-red-200'
                        : 'bg-white/5 border border-white/10 text-white/70'
                    }`}
                  >
                    {feedback.type === 'success' && <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                    {feedback.type === 'warn' && <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 animate-bounce" />}
                    {feedback.type === 'neutral' && <Sparkles className="w-3.5 h-3.5 text-white/50 shrink-0" />}
                    <span className="text-[11px] leading-tight">{feedback.text}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons with Spring Micro-Haptics */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSkip}
                  className="py-2.5 px-3 rounded-lg border border-white/15 text-white/80 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <UserX className="w-3.5 h-3.5 text-white/50" />
                  <span>Dispensar Transeunte</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03, rotate: 0.5 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleInterview}
                  className="py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b89528] text-black font-semibold transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-[#d4af37]/20"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Abordar & Entrevistar</span>
                </motion.button>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="py-6 text-center space-y-3"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37] mx-auto flex items-center justify-center text-[#d4af37]"
              >
                <Trophy className="w-6 h-6" />
              </motion.div>
              <h3 className="text-lg font-editorial-serif font-bold text-white">
                Todas as Cotas Foram Cumpridas!
              </h3>
              <p className="text-xs text-white/70 max-w-sm mx-auto leading-relaxed">
                Parabéns! Cotas preenchidas com sucesso sem estourar as células. Pontuação final: <strong className="text-[#d4af37] font-mono">{score} pontos</strong>.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="px-4 py-2 rounded-lg bg-[#d4af37] text-black font-semibold text-xs cursor-pointer shadow-lg shadow-[#d4af37]/25"
              >
                Jogar Novamente
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
