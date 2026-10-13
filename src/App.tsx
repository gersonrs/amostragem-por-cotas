import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { NavigationControls } from './components/NavigationControls';
import { NeonBackground } from './components/NeonBackground';
import { SlideAdvantages } from './components/SlideAdvantages';
import { SlideAlgebraicFormulation } from './components/SlideAlgebraicFormulation';
import { SlideBiasesBestPractices } from './components/SlideBiasesBestPractices';
import { SlideConclusion } from './components/SlideConclusion';
import { SlideCover } from './components/SlideCover';
import { SlideHistoryApplications } from './components/SlideHistoryApplications';
import { SlideIntroduction } from './components/SlideIntroduction';
import { SlideMarginErrorControversy } from './components/SlideMarginErrorControversy';
import { SlideOperationalMechanism } from './components/SlideOperationalMechanism';
import { SlideQuestions } from './components/SlideQuestions';
import { SlideRoadmap } from './components/SlideRoadmap';
import { SlideStepByStepDeviation } from './components/SlideStepByStepDeviation';
import { SlideStepByStepMatrix } from './components/SlideStepByStepMatrix';
import { SlideStructureDifference } from './components/SlideStructureDifference';
import { SlideThanks } from './components/SlideThanks';
import { SlideTse2026Case } from './components/SlideTse2026Case';
import { SlideWhatIsQuotaSampling } from './components/SlideWhatIsQuotaSampling';
import { SLIDES_CONFIG } from './types/presentation';
import { sound } from './utils/audio';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSubSlide, setCurrentSubSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1); // 1 = forward, -1 = reverse
  const [isContinuousMode, setIsContinuousMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const totalSlides = SLIDES_CONFIG.length;

  const navigateTo = useCallback(
    (index: number, subSlideIndex: number = 0) => {
      if (index === currentSlide && subSlideIndex === currentSubSlide) return;
      setDirection(index >= currentSlide ? 1 : -1);
      setCurrentSlide(index);
      setCurrentSubSlide(subSlideIndex);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [currentSlide, currentSubSlide]
  );

  // Linear remote advance: steps through sub-slides before advancing main slide
  const handleNext = useCallback(() => {
    const meta = SLIDES_CONFIG[currentSlide];
    const subCount = meta?.subSlidesCount || 1;

    if (currentSubSlide < subCount - 1) {
      sound.playSlide();
      setCurrentSubSlide((prev) => prev + 1);
    } else if (currentSlide < totalSlides - 1) {
      sound.playSlide();
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
      setCurrentSubSlide(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSlide, currentSubSlide, totalSlides]);

  // Linear remote retreat: steps backwards through sub-slides before retreating main slide
  const handlePrev = useCallback(() => {
    if (currentSubSlide > 0) {
      sound.playTick();
      setCurrentSubSlide((prev) => prev - 1);
    } else if (currentSlide > 0) {
      sound.playTick();
      const prevSlide = currentSlide - 1;
      const prevSubCount = SLIDES_CONFIG[prevSlide]?.subSlidesCount || 1;
      setDirection(-1);
      setCurrentSlide(prevSlide);
      setCurrentSubSlide(prevSubCount - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSlide, currentSubSlide]);

  // Full presenter remote (passador de slides sem fio) keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;

      const nextKeys = ['ArrowRight', 'PageDown', 'ArrowDown', ' ', 'Enter', 'n'];
      const prevKeys = ['ArrowLeft', 'PageUp', 'ArrowUp', 'p', 'Backspace'];

      if (nextKeys.includes(e.key) && !e.shiftKey) {
        e.preventDefault();
        handleNext();
      } else if (prevKeys.includes(e.key) || (e.key === ' ' && e.shiftKey)) {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        navigateTo(0, 0);
      } else if (e.key === 'End') {
        e.preventDefault();
        const lastIdx = totalSlides - 1;
        const lastSubCount = SLIDES_CONFIG[lastIdx]?.subSlidesCount || 1;
        navigateTo(lastIdx, lastSubCount - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, navigateTo, totalSlides]);

  // Render individual slide component (each concept has its own dedicated slide)
  const renderSlideContent = (index: number) => {
    switch (index) {
      case 0:
        return <SlideCover onStart={() => navigateTo(1, 0)} />;
      case 1:
        return <SlideRoadmap onNavigate={(target) => navigateTo(target, 0)} />;
      case 2:
        return <SlideIntroduction />;
      case 3:
        return <SlideHistoryApplications />;
      case 4:
        return <SlideWhatIsQuotaSampling />;
      case 5:
        return <SlideStructureDifference />;
      case 6:
        return <SlideAlgebraicFormulation />;
      case 7:
        return <SlideMarginErrorControversy />;
      case 8:
        return <SlideStepByStepMatrix />;
      case 9:
        return <SlideStepByStepDeviation />;
      case 10:
        return (
          <SlideOperationalMechanism
            subSlide={currentSubSlide}
            isContinuousMode={isContinuousMode}
          />
        );
      case 11:
        return <SlideAdvantages />;
      case 12:
        return <SlideBiasesBestPractices />;
      case 13:
        return (
          <SlideTse2026Case
            subSlide={currentSubSlide}
            isContinuousMode={isContinuousMode}
          />
        );
      case 14:
        return <SlideConclusion />;
      case 15:
        return <SlideQuestions />;
      case 16:
        return <SlideThanks onRestart={() => navigateTo(0, 0)} />;
      default:
        return <SlideCover onStart={() => navigateTo(1, 0)} />;
    }
  };

  // Kinetic transition variants for bidirectional forward and reverse animation
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.99,
      rotateX: dir > 0 ? 8 : -8,
      filter: 'blur(6px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transformPerspective: 1200,
      transition: {
        duration: 0.42,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.99,
      rotateX: dir > 0 ? -8 : 8,
      filter: 'blur(6px)',
      transformPerspective: 1200,
      transition: {
        duration: 0.3,
        ease: [0.7, 0, 0.84, 0] as const,
      },
    }),
  };

  return (
    <div className="h-screen w-screen bg-[#0b0c0e] text-[#f4f2ec] relative overflow-hidden selection:bg-[#d4af37]/30 selection:text-white bg-noise flex flex-col justify-between">
      {/* Animated Wandering Neon Lines & Ambient Population Constellation */}
      <NeonBackground />

      {/* Subtle Ambient Lighting (z-0 above background) */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-b from-[#d4af37]/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-t from-blue-900/15 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Navigation Header and Controls */}
      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNavigate={navigateTo}
        currentSubSlide={currentSubSlide}
        subSlidesCount={SLIDES_CONFIG[currentSlide]?.subSlidesCount || 1}
        onNext={handleNext}
        onPrev={handlePrev}
        isContinuousMode={isContinuousMode}
        onToggleMode={() => setIsContinuousMode(!isContinuousMode)}
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
      />

      {/* Presentation Canvas: Fits within screen with z-10 above canvas */}
      <main className="relative z-10 flex-1 w-full pt-14 pb-16 overflow-y-auto overflow-x-hidden flex flex-col justify-center">
        {!isContinuousMode ? (
          /* Slide Mode with Motion Bidirectional Transitions */
          <div className="w-full h-full flex flex-col justify-center [perspective:1400px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full my-auto will-change-transform"
              >
                {renderSlideContent(currentSlide)}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* Continuous Scroll Story Mode */
          <div className="space-y-16 divide-y divide-white/10 px-4 sm:px-8 py-6">
            {SLIDES_CONFIG.map((_, idx) => (
              <section key={idx} className="pt-10">
                {renderSlideContent(idx)}
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
