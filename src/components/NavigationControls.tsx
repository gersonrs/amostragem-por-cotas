import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  List,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  BookOpen,
  Monitor
} from 'lucide-react';
import { SLIDES_CONFIG, SlideMeta } from '../types/presentation';
import { sound } from '../utils/audio';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
  currentSubSlide?: number;
  subSlidesCount?: number;
  onNext?: () => void;
  onPrev?: () => void;
  isContinuousMode: boolean;
  onToggleMode: () => void;
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  onNavigate,
  currentSubSlide = 0,
  subSlidesCount = 1,
  onNext,
  onPrev,
  isContinuousMode,
  onToggleMode,
  isDrawerOpen,
  onToggleDrawer,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(!sound.enabled);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  // Timer logic for live seminar rehearsal
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const toggleSound = () => {
    sound.enabled = !sound.enabled;
    setIsMuted(!sound.enabled);
    if (sound.enabled) sound.playTick();
  };

  const handlePrev = () => {
    if (onPrev) {
      onPrev();
    } else if (currentSlide > 0) {
      sound.playTick();
      onNavigate(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else if (currentSlide < totalSlides - 1) {
      sound.playSlide();
      onNavigate(currentSlide + 1);
    }
  };

  const currentMeta: SlideMeta = SLIDES_CONFIG[currentSlide] || SLIDES_CONFIG[0];
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <>
      {/* Top Thin Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-[#d4af37] via-[#f3e7c4] to-[#d4af37] transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Top Minimalist Header Bar (Sleep-Well-Creatives Aesthetic) */}
      <header className="fixed top-3 left-0 right-0 z-40 px-6 sm:px-10 flex items-center justify-between pointer-events-none">
        {/* Brand / Academic Context */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={() => onNavigate(0)}
            className="flex items-center gap-2 text-left group transition-all"
            title="Ir para a Folha de Rosto"
          >
            <span className="w-2 h-2 rounded-full bg-[#d4af37] group-hover:scale-150 transition-transform" />
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-white/70 group-hover:text-white transition-colors">
              UFRPE · Biometria & Estatística
            </span>
          </button>
          <span className="hidden md:inline text-white/20 text-xs">/</span>
          <span className="hidden md:inline text-xs text-white/40 tracking-wider">
            Sistemas de Amostragem
          </span>
        </div>

        {/* Center: Slide Title & Topic + Sub-Slide Indicator */}
        <div className="hidden lg:flex pointer-events-auto items-center gap-2 px-3 py-1 bg-[#121316]/80 backdrop-blur-md rounded-lg border border-white/10 text-xs text-white/70">
          <span className="font-serif italic text-[#d4af37]">{currentMeta.romanNumeral}.</span>
          <span className="text-white/90 font-medium truncate max-w-xs">{currentMeta.title}</span>
          {subSlidesCount > 1 && (
            <span className="px-2 py-0.5 rounded bg-[#d4af37]/15 text-[#d4af37] font-mono text-[10px] font-semibold border border-[#d4af37]/30">
              Etapa {currentSubSlide + 1}/{subSlidesCount}
            </span>
          )}
        </div>

        {/* Right Tools (Timer, Mode, Index, Menu) */}
        <div className="pointer-events-auto flex items-center gap-2 bg-[#121316]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-xl">
          {/* Presentation Timer */}
          <div className="flex items-center gap-1.5 pr-2 border-r border-white/10 text-xs font-mono text-white/70">
            <button
              onClick={() => {
                setTimerRunning(!timerRunning);
                sound.playTick();
              }}
              className="text-[#d4af37] hover:text-white transition-colors p-0.5"
              title={timerRunning ? "Pausar cronômetro" : "Iniciar cronômetro do seminário"}
            >
              {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <span className="tracking-widest">{formatTimer(timerSeconds)}</span>
            {timerSeconds > 0 && !timerRunning && (
              <button
                onClick={() => setTimerSeconds(0)}
                className="text-white/40 hover:text-white transition-colors p-0.5"
                title="Zerar cronômetro"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Toggle Continuous Scroll vs Slide Presentation */}
          <button
            onClick={() => {
              sound.playTick();
              onToggleMode();
            }}
            className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs transition-colors ${
              isContinuousMode
                ? 'bg-white/10 text-white'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
            title={isContinuousMode ? "Mudar para Modo Slides" : "Mudar para Modo Leitura Story-Scroll"}
          >
            {isContinuousMode ? <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" /> : <Monitor className="w-3.5 h-3.5 text-[#d4af37]" />}
            <span className="hidden sm:inline font-sans">{isContinuousMode ? 'Scroll' : 'Slides'}</span>
          </button>

          {/* Audio toggle */}
          <button
            onClick={toggleSound}
            className="p-1 rounded text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            title={isMuted ? "Ativar efeitos sonoros" : "Mutar som"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />}
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1 rounded text-white/60 hover:text-white hover:bg-white/5 transition-colors hidden sm:block"
            title="Alternar tela cheia"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {/* Table of Contents Drawer Toggle */}
          <button
            onClick={() => {
              sound.playTick();
              onToggleDrawer();
            }}
            className="p-1 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors ml-1"
            title="Índice dos Slides"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Floating Presentation Control Dock (Bottom Center) - Active in Slide Mode */}
      {!isContinuousMode && (
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
          <nav
            aria-label="Controles de apresentação"
            className="flex items-center gap-1.5 sm:gap-2.5 bg-[#101114]/90 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/15 shadow-2xl shadow-black/80"
          >
            {/* Previous Slide / Step Button */}
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0 && currentSubSlide === 0}
              className={`p-2 rounded-full transition-all flex items-center justify-center ${
                currentSlide === 0 && currentSubSlide === 0
                  ? 'opacity-30 cursor-not-allowed text-white/30'
                  : 'text-white hover:bg-white/10 hover:scale-105 active:scale-95'
              }`}
              title={
                currentSubSlide > 0
                  ? "Etapa anterior (Seta Esquerda)"
                  : "Slide anterior (Seta Esquerda)"
              }
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Index Counter & Sub-Slide Pips */}
            <div className="px-3 flex items-center gap-2 text-xs font-mono tracking-wider select-none border-x border-white/10">
              <div className="flex items-baseline gap-1">
                <span className="text-[#f3e7c4] font-semibold text-sm">
                  {String(currentSlide + 1).padStart(2, '0')}
                </span>
                <span className="text-white/30">/</span>
                <span className="text-white/50">
                  {String(totalSlides).padStart(2, '0')}
                </span>
              </div>

              {subSlidesCount > 1 && (
                <div className="flex items-center gap-1.5 pl-2 border-l border-white/10">
                  <span className="text-[10px] text-amber-300 font-semibold">
                    Etapa {currentSubSlide + 1}/{subSlidesCount}
                  </span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: subSlidesCount }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all ${
                          i === currentSubSlide
                            ? 'bg-[#d4af37] w-3.5'
                            : i < currentSubSlide
                            ? 'bg-emerald-400 w-1.5'
                            : 'bg-white/20 w-1.5'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Next Slide / Step Button */}
            <button
              onClick={handleNext}
              disabled={
                currentSlide === totalSlides - 1 &&
                currentSubSlide >= subSlidesCount - 1
              }
              className={`p-2 rounded-full transition-all flex items-center justify-center ${
                currentSlide === totalSlides - 1 &&
                currentSubSlide >= subSlidesCount - 1
                  ? 'opacity-30 cursor-not-allowed text-white/30'
                  : 'text-white hover:bg-white/10 hover:scale-105 active:scale-95 bg-[#d4af37]/20 text-[#d4af37]'
              }`}
              title={
                subSlidesCount > 1 && currentSubSlide < subSlidesCount - 1
                  ? "Próxima etapa (Seta Direita / Passador)"
                  : "Próximo slide (Seta Direita / Barra de Espaço)"
              }
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </nav>
        </div>
      )}

      {/* Slide Navigation Drawer (Table of Contents) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-end transition-opacity">
          <div
            className="w-full max-w-md bg-[#0f1013] border-l border-white/10 h-full p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37]">Roteiro do Seminário</span>
                  <h2 className="text-xl font-editorial-serif font-bold text-white mt-1">Sumário dos Slides</h2>
                </div>
                <button
                  onClick={onToggleDrawer}
                  className="text-white/50 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 space-y-2">
                {SLIDES_CONFIG.map((slide, idx) => {
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => {
                        sound.playTick();
                        onNavigate(idx);
                        onToggleDrawer();
                      }}
                      className={`w-full text-left p-3.5 rounded-lg transition-all flex items-start gap-4 group ${
                        isActive
                          ? 'bg-white/10 border border-[#d4af37]/40 shadow-inner'
                          : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <span
                        className={`text-xs font-mono mt-0.5 ${
                          isActive ? 'text-[#d4af37] font-bold' : 'text-white/30 group-hover:text-white/60'
                        }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs tracking-wider uppercase ${
                              isActive ? 'text-[#d4af37]' : 'text-white/40'
                            }`}
                          >
                            {slide.category}
                          </span>
                          <span className="text-[11px] text-white/30 font-mono">
                            ~{slide.estimatedMinutes} min
                          </span>
                        </div>
                        <h4
                          className={`text-sm mt-0.5 ${
                            isActive ? 'text-white font-medium' : 'text-white/70 group-hover:text-white'
                          }`}
                        >
                          {slide.title}
                        </h4>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-white/40 flex items-center justify-between">
              <span>UFRPE · Prof. Aleixo Silva</span>
              <span className="text-[#d4af37]/80">Gerson Rodrigues Santos</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
