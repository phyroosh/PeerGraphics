/**
 * Optical Parallax Calculator
 * Computes layer X translation based on depth factor Z.
 * - Z = 3.0 (Far Horizon): ~12% camera velocity
 * - Z = 1.8 (Midground): ~45% camera velocity
 * - Z = 1.0 (Action Ground): 100% camera velocity
 * - Z = 0.5 (Foreground): 140% camera velocity
 */
export const calculateParallaxOffset = (cameraX: number, depthZ: number): number => {
  if (depthZ >= 2.5) return cameraX * 0.12;
  if (depthZ >= 1.5) return cameraX * 0.45;
  if (depthZ >= 0.8) return cameraX * 1.0;
  return cameraX * 1.4;
};

/**
 * Micro Handheld Camera Drift
 * Subtle, organic camera float to keep scene feeling cinematic rather than locked.
 */
export const calculateCameraDrift = (frame: number, intensity: number = 2.0): {x: number; y: number} => {
  return {
    x: Math.sin(frame * 0.03) * intensity,
    y: Math.cos(frame * 0.04) * (intensity * 0.7),
  };
};
