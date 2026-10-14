import React from 'react';

/**
 * Standard Puppet Joint Hierarchy & Kinetic State
 */
export interface CharacterRigProps {
  x?: number;
  y?: number;
  scale?: number;
  facing?: 'left' | 'right';

  // Kinetic & Life Parameters
  breathProgress?: number; // 0 to 1 (chest rise & shoulder lift)
  headTilt?: number; // degrees (-15 to +20)
  gazeX?: number; // -1 (look left) to +1 (look right)
  gazeY?: number; // -1 (look up) to +1 (look down)
  blinkProgress?: number; // 0 (open) to 1 (closed)
  mouthState?: string;
  eyebrowState?: string;

  // Secondary Physics & Environment
  windSway?: number; // -1 to +1 (sways fabric and hair)
  warmLightWash?: number; // 0 (cool ambient) to 1 (warm key illumination)
}

/**
 * Optical Parallax Depth Plane Configuration
 */
export interface DepthPlane {
  name: string;
  depthZ: number; // e.g. 3.0 (Far), 1.8 (Mid), 1.0 (Ground), 0.5 (Near)
  parallaxFactor: number; // velocity multiplier relative to camera
  content: React.ReactNode;
}

/**
 * Virtual Camera State
 */
export interface VirtualCamera {
  x: number;
  y?: number;
  zoom: number;
}
