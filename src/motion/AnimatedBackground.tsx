import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {SCENES} from '../data/scenes';

/**
 * AnimatedBackground: Living Environmental Storytelling Canvas.
 * 
 * Replaces the static paper background with a dynamic 4-layer environmental stack:
 * - Layer 0: Atmospheric color grading & emotional temperature shifts across scenes
 * - Layer 1: Narrative kinetic motifs (S01 parallax climb, S02 seismic shockwaves,
 *            S03 anxiety tremor, S04 storm sheets & aura, S05 radial speed burst,
 *            S06 split lab atmosphere, S07 golden dawn sunburst)
 * - Layer 2: Ambient depth micro-particles (floating dust motes & sparks)
 * - Layer 3: Tactile Risograph "boiling" paper grain & halftone dot grid at 12 fps
 */
export const AnimatedBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Tactile 12 fps stop-motion grain boil offset (shifts every 2-3 frames)
  const boilCycle = Math.floor(frame / 2.5) % 4;
  const boilOffsetX = (boilCycle % 2 === 0 ? 1 : -1) * (boilCycle > 1 ? 2 : 1);
  const boilOffsetY = (boilCycle > 1 ? 1 : -1) * 1.5;

  // Identify active scene and progress
  const activeSceneIndex = SCENES.findIndex(
    (s) => frame >= s.from && frame < s.from + s.durationInFrames
  );
  const currentScene = SCENES[activeSceneIndex] || SCENES[0];
  const sceneLocalFrame = frame - currentScene.from;

  // -------------------------------------------------------------
  // LAYER 0: ATMOSPHERIC COLOR & VIGNETTE SHIFTS
  // -------------------------------------------------------------
  let baseColor = '#EAE5DB'; // Default warm newsprint
  let vignetteColor = 'rgba(17, 17, 17, 0.08)';

  if (activeSceneIndex === 0) {
    // S01: Chemistry Trap (Starts warm beige, shifts to suspenseful cool gray as cliff nears)
    const tension = interpolate(frame, [140, 260], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    baseColor = tension > 0.5 ? '#E2DDD2' : '#EAE5DB';
    vignetteColor = `rgba(17, 17, 17, ${0.08 + tension * 0.12})`;
  } else if (activeSceneIndex === 1) {
    // S02: Battle for Control (Volcanic high-tension danger undertones)
    baseColor = '#E8DFD5';
    vignetteColor = 'rgba(255, 0, 85, 0.14)';
  } else if (activeSceneIndex === 2) {
    // S03: Walking on Eggshells (Cold, fragile desaturated fog)
    baseColor = '#E3DFD7';
    vignetteColor = 'rgba(17, 17, 17, 0.22)';
  } else if (activeSceneIndex === 3) {
    // S04: Emotional Safety (Gentle slate outside, radiant cyan aura inside)
    baseColor = '#E0E5E5';
    vignetteColor = 'rgba(0, 229, 255, 0.16)';
  } else if (activeSceneIndex === 4) {
    // S05: Us Vs The Problem (High-energy warm amber teamwork burst)
    baseColor = '#ECE5D5';
    vignetteColor = 'rgba(255, 230, 0, 0.18)';
  } else if (activeSceneIndex === 5) {
    // S06: Boundary Test (Laboratory clinical split)
    baseColor = '#E6E4DE';
    vignetteColor = 'rgba(17, 17, 17, 0.12)';
  } else if (activeSceneIndex === 6) {
    // S07: Antidote Synthesis (Golden dawn horizon)
    const dawn = interpolate(sceneLocalFrame, [20, 100], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    baseColor = dawn > 0.5 ? '#EFEAD8' : '#EAE5DB';
    vignetteColor = `rgba(255, 230, 0, ${0.1 + dawn * 0.18})`;
  }

  // -------------------------------------------------------------
  // LAYER 1: NARRATIVE KINETIC MOTIFS
  // -------------------------------------------------------------

  // S01: Downward-drifting elevation lines (high speed vertical parallax)
  const s01ElevationOffset = (frame * 12) % 180;
  const s01TrackSnap = frame >= 140 && frame <= 220;
  const s01LightningFlash = s01TrackSnap && frame % 10 < 3;

  // S02: Seismic shockwave rings on weight impacts (local frames: 120, 170, 220)
  const s02Shock1 = spring({frame: sceneLocalFrame - 120, fps, config: {damping: 10, stiffness: 120}});
  const s02Shock2 = spring({frame: sceneLocalFrame - 170, fps, config: {damping: 10, stiffness: 120}});
  const s02Shock3 = spring({frame: sceneLocalFrame - 220, fps, config: {damping: 10, stiffness: 120}});

  // S03: Anxiety tremor jitter
  const s03Tremor = activeSceneIndex === 2 && sceneLocalFrame > 50
    ? Math.sin(frame * 2.8) * 3
    : 0;

  // S04: Exterior storm sheets
  const s04RainOffset = (frame * 24) % 600;

  // S05: Radial action speed lines on boulder heave (local frames: 85 - 150)
  const s05Burst = spring({
    frame: sceneLocalFrame - 85,
    fps,
    config: {damping: 12, stiffness: 160},
  });
  const s05BurstScale = interpolate(s05Burst, [0, 1], [0.2, 1.4]);
  const s05BurstOpacity = interpolate(s05Burst, [0, 0.4, 1], [0, 0.6, 0.1]);

  // S07: Golden sunburst rotation
  const s07SunburstAngle = (frame * 0.35) % 360;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: baseColor,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        transform: `translate(${boilOffsetX}px, ${boilOffsetY}px)`,
        transition: 'background-color 0.4s ease',
      }}
    >
      {/* ========================================================= */}
      {/* LAYER 3: TACTILE RISOGRAPH DOT GRID & TEXTURE            */}
      {/* ========================================================= */}
      <svg
        width="1080"
        height="1920"
        style={{position: 'absolute', top: 0, left: 0, opacity: 0.35}}
      >
        <defs>
          <pattern
            id="risograph-dots"
            x={boilOffsetX}
            y={boilOffsetY}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="16" cy="16" r="1.8" fill="#B4ABA0" />
          </pattern>
        </defs>
        <rect width="1080" height="1920" fill="url(#risograph-dots)" />
      </svg>

      {/* ========================================================= */}
      {/* LAYER 1: SCENE-SPECIFIC NARRATIVE ENVIRONMENTAL MOTIFS     */}
      {/* ========================================================= */}

      {/* SCENE 01: High-Speed Parallax Elevation Lines & Horizon Lightning */}
      {activeSceneIndex === 0 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: 0, opacity: 0.28}}
        >
          {/* Vertical elevation speed lines drifting downward */}
          {[120, 260, 400, 540, 680, 820, 960].map((x, i) => (
            <line
              key={i}
              x1={x}
              y1={-200 + s01ElevationOffset + i * 25}
              x2={x}
              y2={2100 + s01ElevationOffset}
              stroke="#111111"
              strokeWidth="2.5"
              strokeDasharray="40 80"
            />
          ))}

          {/* Horizon Storm Flash when Track Snaps */}
          {s01LightningFlash && (
            <rect
              width="1080"
              height="1920"
              fill="rgba(255, 0, 85, 0.12)"
              style={{mixBlendMode: 'multiply'}}
            />
          )}
        </svg>
      )}

      {/* SCENE 02: Volcanic Danger Pit & Seismic Shockwave Ripples */}
      {activeSceneIndex === 1 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: 0}}
        >
          {/* Ambient red hazard glow at bottom */}
          <radialGradient id="hazard-glow" cx="50%" cy="85%" r="60%">
            <stop offset="0%" stopColor="#FF0055" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FF0055" stopOpacity="0" />
          </radialGradient>
          <rect width="1080" height="1920" fill="url(#hazard-glow)" />

          {/* Seismic Shockwave 1 (GUILT crash) */}
          {s02Shock1 > 0.05 && s02Shock1 < 0.98 && (
            <circle
              cx="600"
              cy="980"
              r={interpolate(s02Shock1, [0, 1], [40, 460])}
              fill="none"
              stroke="#FF0055"
              strokeWidth={interpolate(s02Shock1, [0, 1], [10, 1])}
              opacity={interpolate(s02Shock1, [0, 1], [0.8, 0])}
            />
          )}

          {/* Seismic Shockwave 2 (SILENCE crash) */}
          {s02Shock2 > 0.05 && s02Shock2 < 0.98 && (
            <circle
              cx="700"
              cy="940"
              r={interpolate(s02Shock2, [0, 1], [40, 520])}
              fill="none"
              stroke="#111111"
              strokeWidth={interpolate(s02Shock2, [0, 1], [12, 1])}
              opacity={interpolate(s02Shock2, [0, 1], [0.7, 0])}
            />
          )}

          {/* Seismic Shockwave 3 (ANGER crash) */}
          {s02Shock3 > 0.05 && s02Shock3 < 0.98 && (
            <circle
              cx="650"
              cy="900"
              r={interpolate(s02Shock3, [0, 1], [50, 600])}
              fill="none"
              stroke="#FFE600"
              strokeWidth={interpolate(s02Shock3, [0, 1], [14, 1])}
              opacity={interpolate(s02Shock3, [0, 1], [0.9, 0])}
            />
          )}
        </svg>
      )}

      {/* SCENE 03: Fragile Void & Anxiety Tremor Jitter */}
      {activeSceneIndex === 2 && (
        <svg
          width="1080"
          height="1920"
          style={{
            position: 'absolute',
            top: 0,
            left: s03Tremor,
            opacity: 0.3,
          }}
        >
          {/* Subtle horizontal fracture grid */}
          {[350, 550, 750, 950, 1150, 1350].map((y, i) => (
            <line
              key={i}
              x1="60"
              y1={y}
              x2="1020"
              y2={y}
              stroke="#111111"
              strokeWidth="2"
              strokeDasharray="16 24"
            />
          ))}
        </svg>
      )}

      {/* SCENE 04: Emotional Safety — Exterior Storm Sheets & Sanctuary Aura */}
      {activeSceneIndex === 3 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: 0}}
        >
          {/* Radiant Cyan Sanctuary Aura in Center */}
          <radialGradient id="sanctuary-aura" cx="50%" cy="54%" r="45%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#00E5FF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </radialGradient>
          <circle cx="540" cy="1040" r="480" fill="url(#sanctuary-aura)" />

          {/* Exterior Storm Rain Sheets outside the aura */}
          <g opacity={0.25}>
            {[100, 220, 340, 740, 860, 980].map((x, i) => (
              <line
                key={i}
                x1={x}
                y1={-100 + s04RainOffset}
                x2={x - 60}
                y2={300 + s04RainOffset}
                stroke="#FF0055"
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}
          </g>
        </svg>
      )}

      {/* SCENE 05: Us Vs The Problem — Explosive Radial Speed Lines */}
      {activeSceneIndex === 4 && s05BurstOpacity > 0.05 && (
        <svg
          width="1080"
          height="1920"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: s05BurstOpacity,
            transform: `scale(${s05BurstScale})`,
            transformOrigin: '540px 1040px',
          }}
        >
          {/* Radial speed lines bursting from fulcrum center */}
          {Array.from({length: 24}).map((_, i) => {
            const angle = (i * 360) / 24;
            const rad = (angle * Math.PI) / 180;
            const x2 = 540 + Math.cos(rad) * 900;
            const y2 = 1040 + Math.sin(rad) * 900;
            return (
              <line
                key={i}
                x1={540 + Math.cos(rad) * 120}
                y1={1040 + Math.sin(rad) * 120}
                x2={x2}
                y2={y2}
                stroke={i % 2 === 0 ? '#111111' : '#FFE600'}
                strokeWidth={i % 2 === 0 ? '7' : '10'}
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      )}

      {/* SCENE 06: The Boundary Test — Split Laboratory Atmosphere */}
      {activeSceneIndex === 5 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: 0}}
        >
          {/* Left Chamber: Hazard Red Pulse */}
          <rect
            x="0"
            y="0"
            width="540"
            height="1920"
            fill="rgba(255, 0, 85, 0.05)"
          />
          {/* Right Chamber: Tranquil Cyan Clarity */}
          <rect
            x="540"
            y="0"
            width="540"
            height="1920"
            fill="rgba(0, 229, 255, 0.05)"
          />
        </svg>
      )}

      {/* SCENE 07: Antidote Synthesis — Radiant Golden Dawn Sunburst */}
      {activeSceneIndex === 6 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: 0}}
        >
          {/* Golden Dawn Sunburst Rays radiating from bedrock */}
          <g
            transform={`translate(540, 1100) rotate(${s07SunburstAngle})`}
            opacity={0.16}
          >
            {Array.from({length: 16}).map((_, i) => {
              const startAngle = (i * 360) / 16;
              const endAngle = startAngle + 11.25;
              const rad1 = (startAngle * Math.PI) / 180;
              const rad2 = (endAngle * Math.PI) / 180;
              const x1 = Math.cos(rad1) * 1200;
              const y1 = Math.sin(rad1) * 1200;
              const x2 = Math.cos(rad2) * 1200;
              const y2 = Math.sin(rad2) * 1200;
              return (
                <polygon
                  key={i}
                  points={`0,0 ${x1},${y1} ${x2},${y2}`}
                  fill="#FFE600"
                />
              );
            })}
          </g>

          {/* Warm Golden Glow Center */}
          <radialGradient id="dawn-glow" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#FFE600" stopOpacity="0.22" />
            <stop offset="70%" stopColor="#FFE600" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#FFE600" stopOpacity="0" />
          </radialGradient>
          <circle cx="540" cy="1100" r="500" fill="url(#dawn-glow)" />
        </svg>
      )}

      {/* ========================================================= */}
      {/* LAYER 2: AMBIENT DEPTH MICRO-PARTICLES (Drifting gently)   */}
      {/* ========================================================= */}
      <svg
        width="1080"
        height="1920"
        style={{position: 'absolute', top: 0, left: 0, opacity: 0.4}}
      >
        {Array.from({length: 16}).map((_, i) => {
          // Deterministic pseudorandom placement with gentle drift
          const baseX = (i * 68 + 45) % 1000;
          const baseY = (i * 122 + 90) % 1800;
          const driftY = (baseY - (frame * (0.8 + (i % 3) * 0.4))) % 1920;
          const finalY = driftY < 0 ? driftY + 1920 : driftY;
          const driftX = baseX + Math.sin(frame * 0.05 + i) * 15;
          const isSpark = i % 4 === 0;

          return isSpark ? (
            <polygon
              key={i}
              points={`${driftX},${finalY - 6} ${driftX + 4},${finalY} ${driftX},${finalY + 6} ${driftX - 4},${finalY}`}
              fill={i % 2 === 0 ? '#FFE600' : '#00E5FF'}
            />
          ) : (
            <circle
              key={i}
              cx={driftX}
              cy={finalY}
              r={2 + (i % 3)}
              fill="#111111"
              opacity={0.35}
            />
          );
        })}
      </svg>

      {/* ========================================================= */}
      {/* LAYER 0: CORNER VIGNETTE SHADOW (Film-noir / Zine depth)   */}
      {/* ========================================================= */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          background: `radial-gradient(circle at 50% 50%, transparent 60%, ${vignetteColor} 100%)`,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
