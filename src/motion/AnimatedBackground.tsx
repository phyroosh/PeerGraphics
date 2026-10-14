import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {SCENES} from '../data/scenes';

/**
 * AnimatedBackground: Living Environmental Storytelling Canvas.
 * 
 * Tailored for Willpower, Neuroplasticity & aMCC Daily Renewal:
 * - Layer 0: Atmospheric color grading & emotional shifts across the 5 scenes
 * - Layer 1: Narrative kinetic motifs (S01 neural grid pulses, S02 hydraulic shockwaves & friction sparks,
 *            S03 cool atrophy fog & autopilot split, S04 radial 24h reset rays, S05 golden victory sunburst)
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
    // S01: Anatomy of Will (Warm curiosity beige with electric cyan neural tint)
    baseColor = '#EAE5DB';
    vignetteColor = 'rgba(0, 229, 255, 0.09)';
  } else if (activeSceneIndex === 1) {
    // S02: Friction & Growth (High-tension kinetic warmth, friction heat)
    baseColor = '#E8DFD5';
    vignetteColor = 'rgba(255, 0, 85, 0.16)';
  } else if (activeSceneIndex === 2) {
    // S03: Comfort Atrophy & Habit Trap (Cool desaturated graying fog)
    baseColor = '#E2E2DC';
    vignetteColor = 'rgba(17, 17, 17, 0.18)';
  } else if (activeSceneIndex === 3) {
    // S04: 24h Reset Clock (High-alert amber/red pulse)
    baseColor = '#ECE5D5';
    vignetteColor = 'rgba(255, 0, 85, 0.14)';
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

  // S02: Seismic shockwaves from hydraulic friction press (local frames: 120, 240, 360)
  const s02Shock1 = spring({frame: sceneLocalFrame - 120, fps, config: {damping: 10, stiffness: 120}});
  const s02Shock2 = spring({frame: sceneLocalFrame - 240, fps, config: {damping: 10, stiffness: 120}});
  const s02Shock3 = spring({frame: sceneLocalFrame - 360, fps, config: {damping: 10, stiffness: 120}});

  // S04: Radial sweep rays for 24h clock
  const s04ClockSweep = (frame * 0.8) % 360;

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

      {/* SCENE 01: Neural Synaptic Network Grid */}
      {activeSceneIndex === 0 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: 0, opacity: 0.25}}
        >
          <g stroke="#111111" strokeWidth="2" strokeDasharray="8 12" fill="none">
            <path d="M 120 300 Q 300 500 540 450 T 960 700" />
            <path d="M 960 300 Q 700 500 540 450 T 120 800" />
            <path d="M 200 1200 Q 540 1000 880 1300" />
          </g>
          {/* Synaptic node dots */}
          {[
            {cx: 300, cy: 500},
            {cx: 540, cy: 450},
            {cx: 700, cy: 500},
            {cx: 540, cy: 1000},
          ].map((pt, i) => (
            <circle key={i} cx={pt.cx} cy={pt.cy} r="6" fill="#00E5FF" stroke="#111111" strokeWidth="2" />
          ))}
        </svg>
      )}

      {/* SCENE 02: Hydraulic Friction Shockwaves */}
      {activeSceneIndex === 1 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: 0}}
        >
          <radialGradient id="friction-glow" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#FF0055" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#FFE600" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#FF0055" stopOpacity="0" />
          </radialGradient>
          <rect width="1080" height="1920" fill="url(#friction-glow)" />

          {/* Shockwave 1 */}
          {s02Shock1 > 0.05 && s02Shock1 < 0.98 && (
            <circle
              cx="540"
              cy="760"
              r={interpolate(s02Shock1, [0, 1], [40, 480])}
              fill="none"
              stroke="#FFE600"
              strokeWidth={interpolate(s02Shock1, [0, 1], [12, 1])}
              opacity={interpolate(s02Shock1, [0, 1], [0.8, 0])}
            />
          )}

          {/* Shockwave 2 */}
          {s02Shock2 > 0.05 && s02Shock2 < 0.98 && (
            <circle
              cx="540"
              cy="760"
              r={interpolate(s02Shock2, [0, 1], [40, 540])}
              fill="none"
              stroke="#FF0055"
              strokeWidth={interpolate(s02Shock2, [0, 1], [14, 1])}
              opacity={interpolate(s02Shock2, [0, 1], [0.85, 0])}
            />
          )}

          {/* Shockwave 3 */}
          {s02Shock3 > 0.05 && s02Shock3 < 0.98 && (
            <circle
              cx="540"
              cy="760"
              r={interpolate(s02Shock3, [0, 1], [50, 620])}
              fill="none"
              stroke="#00E5FF"
              strokeWidth={interpolate(s02Shock3, [0, 1], [16, 1])}
              opacity={interpolate(s02Shock3, [0, 1], [0.9, 0])}
            />
          )}
        </svg>
      )}

      {/* SCENE 03: Cool Atrophy Fog & Habit Autopilot Lines */}
      {activeSceneIndex === 2 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: 0, opacity: 0.3}}
        >
          {/* Sluggish horizontal inertia tracks */}
          {[400, 600, 800, 1000].map((y, i) => (
            <line
              key={i}
              x1="0"
              y1={y}
              x2="1080"
              y2={y}
              stroke="#111111"
              strokeWidth="3"
              strokeDasharray="20 40"
            />
          ))}
        </svg>
      )}

      {/* SCENE 04: 24-Hour Reset Sweeping Lines */}
      {activeSceneIndex === 3 && (
        <svg
          width="1080"
          height="1920"
          style={{position: 'absolute', top: 0, left: 0, opacity: 0.18}}
        >
          <g
            style={{
              transform: `rotate(${s04ClockSweep}deg)`,
              transformOrigin: '540px 960px',
            }}
          >
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <line
                key={i}
                x1="540"
                y1="960"
                x2={540 + Math.cos((deg * Math.PI) / 180) * 1200}
                y2={960 + Math.sin((deg * Math.PI) / 180) * 1200}
                stroke="#FF0055"
                strokeWidth="6"
                strokeDasharray="16 24"
              />
            ))}
          </g>
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
