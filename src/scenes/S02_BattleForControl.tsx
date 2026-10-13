import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';
import {GeometricCharacter} from '../motion/GeometricCharacter';

/**
 * Scene 02: Battle For Control
 * Pure Motion Design: A tipping balance beam over an abyss.
 * When Left erects a boundary, Right drops heavy weights of Guilt, Silence, and Anger to tilt and crush it.
 * Passes the Mute Test: Physical weapons of guilt, silence, and anger violently tipping the scale.
 */
export const S02_BattleForControl: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // 1. Boundary placement by Left character (frames 20 - 70)
  const boundaryDrop = spring({
    frame: frame - 25,
    fps,
    config: {damping: 12, stiffness: 180},
  });

  // 2. Threat reaction / lightning spark from Right (frames 70 - 110)
  const threatAlarm = spring({
    frame: frame - 70,
    fps,
    config: {damping: 8, stiffness: 220},
  });

  // 3. Weight 1: GUILT drops (frames 120 - 165)
  const guiltDrop = spring({
    frame: frame - 120,
    fps,
    config: {damping: 10, stiffness: 190, mass: 1.1},
  });
  const guiltY = interpolate(guiltDrop, [0, 1], [-150, 460]);

  // 4. Weight 2: SILENCE wall drops (frames 170 - 215)
  const silenceDrop = spring({
    frame: frame - 170,
    fps,
    config: {damping: 10, stiffness: 190, mass: 1.2},
  });
  const silenceY = interpolate(silenceDrop, [0, 1], [-150, 390]);

  // 5. Weight 3: ANGER spiked weight drops (frames 220 - 265)
  const angerDrop = spring({
    frame: frame - 220,
    fps,
    config: {damping: 9, stiffness: 200, mass: 1.3},
  });
  const angerY = interpolate(angerDrop, [0, 1], [-150, 320]);

  // Dynamic balance tilt angle calculated from accumulated weights
  const beamTilt = 
    interpolate(guiltDrop, [0, 1], [0, 6]) +
    interpolate(silenceDrop, [0, 1], [0, 7]) +
    interpolate(angerDrop, [0, 1], [0, 9]); // Total ~22 degrees tilt

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        boxSizing: 'border-box',
        paddingTop: DESIGN_TOKENS.safeArea.top,
        paddingLeft: DESIGN_TOKENS.safeArea.left,
        paddingRight: DESIGN_TOKENS.safeArea.right,
        opacity: entry,
      }}
    >
      {/* Cutout Headline */}
      <div style={{marginBottom: 16}}>
        <h1
          style={{
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1.02,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: -1.5,
            color: '#111111',
            fontFamily: DESIGN_TOKENS.fonts.display,
          }}
        >
          CONFLICT IS A
          <br />
          <span
            style={{
              backgroundColor: '#FF0055',
              color: '#FFFFFF',
              padding: '2px 18px',
              display: 'inline-block',
              boxShadow: '10px 10px 0 #111111',
              transform: 'rotate(1.5deg)',
              marginTop: 10,
            }}
          >
            BATTLE FOR CONTROL
          </span>
        </h1>
      </div>

      {/* Main Vector Motion Canvas */}
      <svg
        width="850"
        height="900"
        viewBox="0 0 850 900"
        style={{overflow: 'visible'}}
      >
        {/* Base Fulcrum Platform */}
        <polygon points="425,520 375,660 475,660" fill="#111111" />
        <circle cx="425" cy="520" r="18" fill="#FFE600" stroke="#111111" strokeWidth="6" />

        {/* Abyss Spikes Beneath (Safely above Y = 850) */}
        <path
          d="M 100 780 L 140 730 L 180 780 L 220 730 L 260 780 L 300 730 L 340 780 L 380 730 L 420 780 L 460 730 L 500 780 L 540 730 L 580 780 L 620 730 L 660 780 L 700 730 L 740 780"
          fill="none"
          stroke="#FF0055"
          strokeWidth="6"
        />

        {/* Dynamic Tilting Beam Group */}
        <g transform={`rotate(${beamTilt} 425 520)`}>
          {/* Main Heavy Balance Beam */}
          <rect
            x="80"
            y="508"
            width="690"
            height="24"
            rx="6"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="7"
            style={{filter: 'drop-shadow(10px 10px 0 #111111)'}}
          />

          {/* LEFT SIDE: Victim placing Boundary */}
          <g transform="translate(180, 480)">
            <GeometricCharacter
              x={0}
              y={0}
              scale={0.85}
              color="#00E5FF"
              pose={beamTilt > 8 ? 'shocked' : 'tense'}
              gazeX={1}
              gazeY={beamTilt > 8 ? -0.5 : 0}
            />

            {/* The Boundary Marker placed on beam */}
            <g transform={`translate(110, -30) scale(${boundaryDrop})`}>
              <rect x="-12" y="-50" width="24" height="60" rx="4" fill="#FFE600" stroke="#111111" strokeWidth="5" />
              <line x1="-30" y1="-30" x2="30" y2="-30" stroke="#111111" strokeWidth="5" />
              <g transform="translate(0, -70)">
                <rect x="-100" y="-20" width="200" height="42" rx="6" fill="#111111" />
                <text x="0" y="8" fill="#FFE600" fontSize="28" fontWeight="900" textAnchor="middle">
                  BOUNDARY
                </text>
              </g>
            </g>
          </g>

          {/* RIGHT SIDE: Aggressor treating boundary as threat */}
          <g transform="translate(670, 480)">
            <GeometricCharacter
              x={0}
              y={0}
              scale={0.85}
              color="#FF0055"
              pose="defensive"
              gazeX={-1}
              gazeY={0}
            />

            {/* Threat Lightning Zap */}
            {threatAlarm > 0.1 && (
              <path
                d="M -30 -40 L -80 -20 L -50 0 L -110 20"
                fill="none"
                stroke="#FF0055"
                strokeWidth="6"
                strokeLinecap="round"
              />
            )}
          </g>
        </g>

        {/* DROPPING WEAPONS (Fall onto the right beam) */}
        {/* Weight 1: GUILT */}
        {frame > 115 && (
          <g transform={`translate(520, ${guiltY + 30}) rotate(-6)`}>
            <rect x="-65" y="-28" width="130" height="56" rx="8" fill="#111111" stroke="#FF0055" strokeWidth="5" style={{filter: 'drop-shadow(6px 6px 0 #111111)'}} />
            <text x="0" y="10" fill="#FFFFFF" fontSize="32" fontWeight="900" textAnchor="middle">
              GUILT
            </text>
          </g>
        )}

        {/* Weight 2: SILENCE */}
        {frame > 165 && (
          <g transform={`translate(615, ${silenceY + 10}) rotate(4)`}>
            <rect x="-70" y="-28" width="140" height="56" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="6" style={{filter: 'drop-shadow(6px 6px 0 #111111)'}} />
            <text x="0" y="10" fill="#111111" fontSize="32" fontWeight="900" textAnchor="middle">
              SILENCE
            </text>
          </g>
        )}

        {/* Weight 3: ANGER */}
        {frame > 215 && (
          <g transform={`translate(710, ${angerY - 10}) rotate(-8)`}>
            <rect x="-65" y="-28" width="130" height="56" rx="8" fill="#FF0055" stroke="#111111" strokeWidth="6" style={{filter: 'drop-shadow(6px 6px 0 #FFE600)'}} />
            <text x="0" y="10" fill="#FFFFFF" fontSize="32" fontWeight="900" textAnchor="middle">
              ANGER
            </text>
          </g>
        )}

      </svg>
    </div>
  );
};
