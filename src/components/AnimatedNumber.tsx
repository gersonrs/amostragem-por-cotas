import { animate, useMotionValue, useReducedMotion } from 'motion/react';
import React, { useEffect, useMemo, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
  format?: (value: number) => string;
}

/**
 * Renders a number that counts from 0 to `value` when it mounts.
 * In this slide-deck the slide frame mounts only when it becomes the active
 * slide, so mount-based animation is deterministic (no scroll dependency).
 * Falls back to the final value instantly when prefers-reduced-motion is set.
 */
export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  decimals = 0,
  duration = 1.1,
  delay = 0,
  className,
  format,
}) => {
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const formatFn = useMemo(
    () => (v: number) => (format ? format(v) : v.toFixed(decimals)),
    [format, decimals],
  );
  const [display, setDisplay] = useState<string>(() =>
    reduceMotion ? formatFn(value) : formatFn(0),
  );

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(formatFn(value));
      return;
    }
    const controls = animate(motionValue, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplay(formatFn(latest));
      },
    });
    return () => controls.stop();
  }, [value, duration, delay, reduceMotion, formatFn, motionValue]);

  return <span className={className}>{display}</span>;
};