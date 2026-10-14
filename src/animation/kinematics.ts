import {spring, SpringConfig} from 'remotion';

/**
 * Procedural Breathing: Returns smooth 0 to 1 sinusoidal cycle.
 */
export const calculateBreathing = (frame: number, frequency: number = 0.08): number => {
  return (Math.sin(frame * frequency) + 1) / 2;
};

/**
 * Natural Eyelid Blink: Returns 0 (open) to 1 (fully closed).
 * Uses spring damping for organic eyelid snap.
 */
export const calculateBlink = (
  frame: number,
  blinkFrame: number,
  fps: number = 30,
  config: Partial<SpringConfig> = {damping: 14, stiffness: 220}
): number => {
  const spr = spring({
    frame: frame - blinkFrame,
    fps,
    config,
  });
  return Math.max(0, 1 - Math.abs(spr - 0.5) * 2);
};

/**
 * Multi-Blink Cycle: Combines multiple scheduled blink trigger frames.
 */
export const calculateMultiBlink = (
  frame: number,
  blinkFrames: number[],
  fps: number = 30
): number => {
  return blinkFrames.reduce((maxBlink, bf) => {
    return Math.max(maxBlink, calculateBlink(frame, bf, fps));
  }, 0);
};

/**
 * Secondary Wind Sway: Returns harmonic oscillation between -1 and +1.
 */
export const calculateWindSway = (
  frame: number,
  frequency: number = 0.12,
  amplitude: number = 1.0
): number => {
  return Math.sin(frame * frequency) * amplitude;
};
