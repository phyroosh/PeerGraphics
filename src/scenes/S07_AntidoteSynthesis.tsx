import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';
import {GeometricCharacter} from '../motion/GeometricCharacter';

/**
 * Scene 07: Antidote Synthesis
 * Pure Motion Design: Oscilloscope Wave comparison & Bedrock Foundation.
 * Wild erratic chaotic spike wave ending in crash vs Steady harmonic wave & solid fortress.
 * Golden stamp seals the definitive life rule.
 * Passes the Mute Test: Clear visual contrast between exhausting turbulence and grounded peace.
 */
export const S07_AntidoteSynthesis: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Animated wave phase for oscillating curves
  const wavePhase = frame * 0.15;

  // Golden seal stamp impact (frames 90 - 150)
  const stampImpact = spring({
    frame: frame - 90,
    fps,
    config: {damping: 8, stiffness: 220, mass: 1.2},
  });
  const stampScale = interpolate(stampImpact, [0, 1], [3, 1]);
  const stampOpacity = interpolate(stampImpact, [0, 1], [0, 1]);

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
      <div style={{marginBottom: 20}}>
        <h1
          style={{
            fontSize: 84,
            fontWeight: 900,
            lineHeight: 1.02,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: -1.5,
            color: '#111111',
            fontFamily: DESIGN_TOKENS.fonts.display,
          }}
        >
          ALWAYS CHOOSE
          <br />
          <span
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              padding: '2px 18px',
              display: 'inline-block',
              boxShadow: '10px 10px 0 #111111',
              transform: 'rotate(-2deg)',
              marginTop: 10,
            }}
          >
            CONSISTENT SAFETY
          </span>
        </h1>
      </div>

      {/* Main Motion Canvas SVG */}
      <svg
        width="850"
        height="900"
        viewBox="0 0 850 900"
        style={{overflow: 'visible'}}
      >
        {/* ========================================= */}
        {/* UPPER REALM: CHAOTIC INTENSITY (TURBULENCE) */}
        {/* ========================================= */}
        <g transform="translate(60, 100)">
          {/* Label Badge */}
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="320" height="42" rx="6" fill="#111111" style={{filter: 'drop-shadow(6px 6px 0 #FF0055)'}} />
            <text x="160" y="30" fill="#FF0055" fontSize="28" fontWeight="900" letterSpacing="0.5" textAnchor="middle">
              CHAOTIC INTENSITY
            </text>
          </g>

          {/* Erratic Wild Spiky Waveform & Lightning */}
          <path
            d={`M 40 140 Q 90 ${80 + Math.sin(wavePhase * 3) * 55} 140 140 Q 190 ${190 + Math.cos(wavePhase * 4) * 65} 240 140 Q 290 ${70 + Math.sin(wavePhase * 5) * 60} 340 140 Q 390 ${200 + Math.sin(wavePhase * 3) * 60} 440 140 Q 490 70 540 140 L 690 140`}
            fill="none"
            stroke="#FF0055"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Electric Crackle Sparks */}
          <polygon points="240,110 255,130 245,135 260,155 235,135 245,130" fill="#FFE600" />
          <polygon points="440,120 455,140 445,145 460,165 435,145 445,140" fill="#FFE600" />
        </g>

        {/* ====================================== */}
        {/* THE GOLDEN RISOGRAPH SEAL OF AUTHORITY */}
        {/* (Bridges the chaos and peace in the center) */}
        {/* ====================================== */}
        {stampImpact > 0.05 && (
          <g
            transform={`translate(425, 360) scale(${stampScale}) rotate(-1.5)`}
            opacity={stampOpacity}
          >
            {/* Chunky Stamp Rectangle with Drop Shadow */}
            <rect
              x="-330"
              y="-40"
              width="660"
              height="80"
              rx="12"
              fill="#FFE600"
              stroke="#111111"
              strokeWidth="7"
              style={{filter: 'drop-shadow(10px 10px 0 #111111)'}}
            />
            <text
              x="0"
              y="15"
              fill="#111111"
              fontSize="38"
              fontWeight="900"
              textAnchor="middle"
              fontFamily="'Arial Black', sans-serif"
              letterSpacing="1"
            >
              ★ SAFETY &gt; INTENSITY ★
            </text>
          </g>
        )}

        {/* =========================================== */}
        {/* LOWER REALM: CONSISTENT SAFETY (BEDROCK)   */}
        {/* =========================================== */}
        <g transform="translate(60, 470)">
          {/* Smooth Rhythmic Harmonic Waveform */}
          <path
            d={`M 40 100 Q 110 ${100 + Math.sin(wavePhase) * 25} 180 100 Q 250 ${100 - Math.sin(wavePhase) * 25} 320 100 Q 390 ${100 + Math.sin(wavePhase) * 25} 460 100 Q 530 ${100 - Math.sin(wavePhase) * 25} 600 100 L 690 100`}
            fill="none"
            stroke="#00E5FF"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Solid Architectural Bedrock Block */}
          <rect
            x="20"
            y="180"
            width="690"
            height="90"
            rx="12"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="7"
            style={{filter: 'drop-shadow(10px 10px 0 #111111)'}}
          />

          {/* Foundation Tag */}
          <text x="365" y="238" fill="#111111" fontSize="32" fontWeight="900" textAnchor="middle" fontFamily="'Arial Black', sans-serif">
            CALM EQUILIBRIUM &amp; TRUST
          </text>

          {/* Two Partners Hand in Hand resting on the Bedrock */}
          <g transform="translate(260, 85)">
            <GeometricCharacter scale={0.8} color="#00E5FF" pose="triumphant" gazeX={1} />
          </g>
          <g transform="translate(470, 85)">
            <GeometricCharacter scale={0.8} color="#FF0055" pose="triumphant" gazeX={-1} />
          </g>
        </g>
      </svg>
    </div>
  );
};
