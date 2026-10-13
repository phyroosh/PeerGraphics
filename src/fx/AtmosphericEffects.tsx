import React from 'react';

export interface AtmosphericEffectsProps {
  frame: number;
  fireflyCount?: number;
  lanternLit?: boolean;
  emberFlareIntensity?: number; // 0 to 1
  lanternPos?: {x: number; y: number};
}

/**
 * AtmosphericEffects: Procedural environmental particles, fireflies,
 * and volumetric lighting rays for cinematic 2D storytelling.
 */
export const AtmosphericEffects: React.FC<AtmosphericEffectsProps> = ({
  frame,
  fireflyCount = 18,
  lanternLit = false,
  emberFlareIntensity = 0,
  lanternPos = {x: 640, y: 1100},
}) => {
  // Deterministic floating fireflies
  const fireflies = Array.from({length: fireflyCount}, (_, i) => {
    const seed = i * 137.5;
    const baseX = (seed * 73) % 960 + 60;
    const baseY = (seed * 127) % 1100 + 400;
    const speed = 0.02 + (i % 5) * 0.01;
    
    // Harmonic floating drift
    const driftX = Math.sin(frame * speed + seed) * 35;
    const driftY = Math.cos(frame * speed * 0.8 + seed) * 45 - ((frame * 0.3 + seed) % 180);
    
    // Glowing pulse
    const pulse = Math.sin(frame * (0.05 + (i % 3) * 0.02) + seed);
    const opacity = Math.max(0, pulse * 0.75 + 0.25);
    const size = 3 + (i % 3) * 1.5;

    return {
      x: baseX + driftX,
      y: baseY + driftY,
      opacity,
      size,
      color: i % 2 === 0 ? '#80DEEA' : '#FFF59D',
    };
  });

  // Rising sparks / embers from lantern when ignited
  const emberSparks = lanternLit
    ? Array.from({length: 22}, (_, i) => {
        const seed = i * 89.3;
        const life = (frame * 2.5 + seed * 2) % 100; // 0 to 100
        const progress = life / 100; // 0 to 1
        
        // Rise upwards with slight wind sway
        const sparkX = lanternPos.x + Math.sin(life * 0.1 + seed) * (20 + progress * 50) - progress * 40;
        const sparkY = lanternPos.y - progress * 320;
        const opacity = Math.sin(progress * Math.PI) * emberFlareIntensity;
        const size = (1 - progress * 0.5) * 3.5;

        return {x: sparkX, y: sparkY, opacity, size};
      })
    : [];

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 5,
      }}
    >
      <svg width="1080" height="1920" viewBox="0 0 1080 1920">
        <defs>
          <radialGradient id="firefly-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="35%" stopColor="#FFF59D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#80DEEA" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="ember-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="50%" stopColor="#FFEAA7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FD9644" stopOpacity="0" />
          </radialGradient>

          {/* Soft Volumetric Light Bloom Gradient */}
          <radialGradient id="lantern-wide-bloom" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#FFEAA7" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#FD9644" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FA8231" stopOpacity="0" />
          </radialGradient>

          {/* Feathered Ray Radial Mask */}
          <radialGradient id="ray-fade" cx="0%" cy="0%" r="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#FFEAA7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FFEAA7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Floating Fireflies */}
        {fireflies.map((f, i) => (
          <g key={i} transform={`translate(${f.x}, ${f.y})`} opacity={f.opacity}>
            <circle cx="0" cy="0" r={f.size * 3} fill="url(#firefly-glow)" opacity="0.6" />
            <circle cx="0" cy="0" r={f.size} fill={f.color} />
          </g>
        ))}

        {/* Volumetric Light Bloom on Lantern Flare */}
        {lanternLit && emberFlareIntensity > 0 && (
          <g
            transform={`translate(${lanternPos.x}, ${lanternPos.y})`}
            opacity={emberFlareIntensity}
            style={{mixBlendMode: 'screen'}}
          >
            {/* Broad Soft Volumetric Bloom Orb */}
            <circle cx="0" cy="0" r="380" fill="url(#lantern-wide-bloom)" />

            {/* Radiant Feathered Light Cones */}
            <g opacity="0.65" style={{filter: 'blur(8px)'}}>
              <path d="M 0 0 L -250 -400 L -170 -440 Z" fill="url(#ray-fade)" />
              <path d="M 0 0 L -80 -460 L 10 -480 Z" fill="url(#ray-fade)" />
              <path d="M 0 0 L 120 -440 L 210 -390 Z" fill="url(#ray-fade)" />
              <path d="M 0 0 L 320 -200 L 390 -120 Z" fill="url(#ray-fade)" />
              <path d="M 0 0 L -360 -180 L -310 -270 Z" fill="url(#ray-fade)" />
            </g>
          </g>
        )}

        {/* Rising Golden Embers */}
        {emberSparks.map((s, i) => (
          <g key={i} transform={`translate(${s.x}, ${s.y})`} opacity={s.opacity}>
            <circle cx="0" cy="0" r={s.size * 2} fill="url(#ember-glow)" />
            <circle cx="0" cy="0" r={s.size * 0.8} fill="#FFFFFF" />
          </g>
        ))}
      </svg>
    </div>
  );
};
