import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {SCENES} from '../data/scenes';

/**
 * AnimatedBackground: Living Environmental Storytelling Canvas.
 * 
 * Tailored for Brain Plasticity & Bernstein's Repetition Without Repetition:
 * - Layer 0: Atmospheric color grading & emotional shifts across the 5 scenes
 * - Layer 1: Narrative kinetic motifs (S01 rigid track fractures, S02 blacksmith forge shockwaves & sparks,
 *            S03 neural web & autopilot split, S04 radial speed rays on mastery, S05 golden victory sunburst)
 * - Layer 2: Ambient depth micro-particles (floating sparks and motes)
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
    // S01: Rote Drill Trap (Begins warm beige, shifts to high-tension warning as mono-track breaks)
    const tension = interpolate(sceneLocalFrame, [140, 220], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    baseColor = tension > 0.5 ? '#E4DDD2' : '#EAE5DB';
    vignetteColor = `rgba(255, 0, 85, ${0.05 + tension * 0.15})`;
  } else if (activeSceneIndex === 1) {
    // S02: Bernstein & Forge (Warm volcanic forge ambience, heavy energy)
    baseColor = '#E8DFD5';
    vignetteColor = 'rgba(255, 0, 85, 0.16)';
  } else if (activeSceneIndex === 2) {
    // S03: Neuroplasticity vs Autopilot (Dual psychological atmosphere: cold fog vs active cyan)
    baseColor = '#E2E2DC';
    vignetteColor = 'rgba(0, 229, 255, 0.14)';
  } else if (activeSceneIndex === 3) {
    // S04: Dynamic Mastery (High-energy warm amber breakthrough)
    baseColor = '#ECE5D5';
    vignetteColor = 'rgba(255, 230, 0, 0.20)';
  } else if (activeSceneIndex === 4) {
    // S05: Actionable Antidote (Radiant golden dawn horizon)
    const dawn = interpolate(sceneLocalFrame, [30, 120], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    baseColor = dawn > 0.5 ? '#EFEAD8' : '#ECE5D5';
    vignetteColor = `rgba(255, 230, 0, ${0.12 + dawn * 0.18})`;
  }

  // -------------------------------------------------------------
  // LAYER 1: NARRATIVE KINETIC MOTIFS
  // -------------------------------------------------------------

  // S01: Monorail track lines + horizontal stress fractures
  const s01Break = activeSceneIndex === 0 && sceneLocalFrame > 155;
  const s01Tremor = s01Break ? Math.sin(frame * 2.5) * 4 : 0;

  // S02: Seismic shockwaves from hammer impacts (local frames: 170, 270, 390)
  const s02Shock1 = spring({frame: sceneLocalFrame - 170, fps, config: {damping: 10, stiffness: 120}});
  const s02Shock2 = spring({frame: sceneLocalFrame - 270, fps, config: {damping: 10, stiffness: 120}});
  const s02Shock3 = spring({frame: sceneLocalFrame - 390, fps, config: {damping: 10, stiffness: 120}});

  // S04: Radial speed rays burst on breakthrough
  const s04Burst = spring({
    frame: sceneLocalFrame - 20,
    fps,
    config: {damping: 12, stiffness: 150},
  });
  const s04BurstScale = interpolate(s04Burst, [0, 1], [0.3, 1.3]);
  const s04BurstOpacity = interpolate(s04Burst, [0, 0.3, 1], [0, 0.5, 0.15]);

  // S05: Golden dawn sunburst rotation
  const s05SunburstAngle = (frame * 0.35) % 360;

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

      {/* SCENE 01: Rigid Track Lines & Fracture Warning */}
      {activeSceneIndex === 0 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: s01Tremor, opacity: 0.28}}
        >
          {/* Rigid vertical mono-track rails */}
          {[200, 360, 540, 720, 880].map((x, i) => (
            <line
              key={i}
              x1={x}
              y1={-100}
              x2={x}
              y2={2020}
              stroke="#111111"
              strokeWidth="3"
              strokeDasharray={s01Break ? '20 30' : '40 60'}
            />
          ))}
          {/* Fracture warning red flashes on break */}
          {s01Break && frame % 12 < 4 && (
            <rect
              width="1080"
              height="1920"
              fill="rgba(255, 0, 85, 0.12)"
              style={{mixBlendMode: 'multiply'}}
            />
          )}
        </svg>
      )}

      {/* SCENE 02: Volcanic Blacksmith Forge Shockwaves */}
      {activeSceneIndex === 1 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: 0}}
        >
          <radialGradient id="forge-glow" cx="50%" cy="75%" r="65%">
            <stop offset="0%" stopColor="#FF0055" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#FFE600" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#FF0055" stopOpacity="0" />
          </radialGradient>
          <rect width="1080" height="1920" fill="url(#forge-glow)" />

          {/* Seismic Shockwave 1 (Strike 1) */}
          {s02Shock1 > 0.05 && s02Shock1 < 0.98 && (
            <circle
              cx="540"
              cy="980"
              r={interpolate(s02Shock1, [0, 1], [40, 480])}
              fill="none"
              stroke="#FFE600"
              strokeWidth={interpolate(s02Shock1, [0, 1], [12, 1])}
              opacity={interpolate(s02Shock1, [0, 1], [0.8, 0])}
            />
          )}

          {/* Seismic Shockwave 2 (Strike 2) */}
          {s02Shock2 > 0.05 && s02Shock2 < 0.98 && (
            <circle
              cx="540"
              cy="980"
              r={interpolate(s02Shock2, [0, 1], [40, 540])}
              fill="none"
              stroke="#00E5FF"
              strokeWidth={interpolate(s02Shock2, [0, 1], [14, 1])}
              opacity={interpolate(s02Shock2, [0, 1], [0.85, 0])}
            />
          )}

          {/* Seismic Shockwave 3 (Strike 3) */}
          {s02Shock3 > 0.05 && s02Shock3 < 0.98 && (
            <circle
              cx="540"
              cy="980"
              r={interpolate(s02Shock3, [0, 1], [50, 620])}
              fill="none"
              stroke="#FF0055"
              strokeWidth={interpolate(s02Shock3, [0, 1], [16, 1])}
              opacity={interpolate(s02Shock3, [0, 1], [0.9, 0])}
            />
          )}
        </svg>
      )}

      {/* SCENE 03: Neural Web & Autopilot Split Canvas */}
      {activeSceneIndex === 2 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: 0}}
        >
          {/* Autopilot hazard glow on left half */}
          <rect x="0" y="0" width="540" height="1920" fill="rgba(255, 0, 85, 0.05)" />
          {/* Active cyan neuroplastic field on right half */}
          <rect x="540" y="0" width="540" height="1920" fill="rgba(0, 229, 255, 0.06)" />
          {/* Subtle neural network background strands */}
          <g opacity={0.2} stroke="#111111" strokeWidth="2" strokeDasharray="10 15">
            <path d="M 120 400 Q 300 650 540 800 T 960 1100" fill="none" />
            <path d="M 960 400 Q 700 650 540 800 T 120 1200" fill="none" />
          </g>
        </svg>
      )}

      {/* SCENE 04: Explosive Radial Speed Rays on Mastery */}
      {activeSceneIndex === 3 && s04BurstOpacity > 0.05 && (
        <svg
          width="1080"
          height="1920"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: s04BurstOpacity,
            transform: `scale(${s04BurstScale})`,
            transformOrigin: '540px 960px',
          }}
        >
          {Array.from({length: 24}).map((_, i) => {
            const angle = (i * 360) / 24;
            const rad = (angle * Math.PI) / 180;
            const x2 = 540 + Math.cos(rad) * 900;
            const y2 = 960 + Math.sin(rad) * 900;
            return (
              <line
                key={i}
                x1={540 + Math.cos(rad) * 120}
                y1={960 + Math.sin(rad) * 120}
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

      {/* SCENE 05: Radiant Golden Dawn Sunburst */}
      {activeSceneIndex === 4 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: 0}}
        >
          <g
            style={{
              transform: `rotate(${s05SunburstAngle}deg)`,
              transformOrigin: '540px 960px',
              opacity: 0.22,
            }}
          >
            {Array.from({length: 16}).map((_, i) => {
              const startAngle = (i * 360) / 16;
              const rad1 = (startAngle * Math.PI) / 180;
              const rad2 = ((startAngle + 11.25) * Math.PI) / 180;
              const p1 = `${540 + Math.cos(rad1) * 1400},${960 + Math.sin(rad1) * 1400}`;
              const p2 = `${540 + Math.cos(rad2) * 1400},${960 + Math.sin(rad2) * 1400}`;
              return (
                <polygon
                  key={i}
                  points={`540,960 ${p1} ${p2}`}
                  fill={i % 2 === 0 ? '#FFE600' : '#FF0055'}
                />
              );
            })}
          </g>
        </svg>
      )}

      {/* ========================================================= */}
      {/* LAYER 2: AMBIENT DEPTH MICRO-PARTICLES (SPARKS & MOTES)   */}
      {/* ========================================================= */}
      <svg
        width="1080"
        height="1920"
        style={{position: 'absolute', top: 0, left: 0, pointerEvents: 'none'}}
      >
        {[
          {seedX: 180, seedY: 340, speed: 1.4, r: 4, color: '#FF0055'},
          {seedX: 320, seedY: 620, speed: 0.9, r: 6, color: '#FFE600'},
          {seedX: 490, seedY: 280, speed: 1.8, r: 5, color: '#00E5FF'},
          {seedX: 720, seedY: 540, speed: 1.1, r: 4, color: '#111111'},
          {seedX: 860, seedY: 820, speed: 1.6, r: 6, color: '#FF0055'},
          {seedX: 240, seedY: 1100, speed: 1.3, r: 5, color: '#FFE600'},
          {seedX: 620, seedY: 1300, speed: 1.5, r: 4, color: '#00E5FF'},
          {seedX: 800, seedY: 1450, speed: 0.8, r: 5, color: '#111111'},
        ].map((pt, i) => {
          const cy = ((pt.seedY - frame * pt.speed) % 1920 + 1920) % 1920;
          const cx = pt.seedX + Math.sin((frame + i * 20) * 0.05) * 18;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={pt.r}
              fill={pt.color}
              opacity={0.35}
            />
          );
        })}
      </svg>

      {/* Dynamic Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          boxShadow: `inset 0 0 160px ${vignetteColor}`,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
