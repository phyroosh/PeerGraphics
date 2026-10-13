import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';
import {GeometricCharacter} from '../motion/GeometricCharacter';
import {StickerTag} from '../motion/RisographElements';

/**
 * Scene 01: The Chemistry Trap
 * Pure Motion Design: Roller-coaster thrill peak with sudden drop-off vs Bedrock Anchor.
 * Passes the Mute Test: Viewer immediately sees erratic thrill ending in thin air vs stable ground.
 */
export const S01_TheChemistryTrap: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Entrance spring
  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Beat 1 (frames 0 - 160): "intense chemistry... highs feel"
  // Roller coaster climbs with accelerating velocity
  const climbProgress = interpolate(frame, [15, 140], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cartX = interpolate(climbProgress, [0, 1], [140, 560]);
  const cartY = interpolate(climbProgress, [0, 1], [680, 240]);
  const cartAngle = interpolate(climbProgress, [0, 0.7, 1], [-25, -45, -5]);

  // Cart jitter at peak (instability)
  const jitter = frame > 120 && frame < 200 ? Math.sin(frame * 1.5) * 6 : 0;

  // Track break reveal (frames 140 - 240)
  const trackSnap = spring({
    frame: frame - 140,
    fps,
    config: {damping: 10, stiffness: 200},
  });

  // Beat 2 (frames 220 - 377): "how safe you feel when things get uncomfortable"
  // Ground anchor rises up with solid heavy inertia
  const anchorEntry = spring({
    frame: frame - 220,
    fps,
    config: {damping: 14, stiffness: 140, mass: 1.1},
  });
  const anchorY = interpolate(anchorEntry, [0, 1], [900, 680]);

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
      {/* Dynamic Headline */}
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
          INTENSE CHEMISTRY
          <br />
          <span
            style={{
              backgroundColor: '#FF0055',
              color: '#FFFFFF',
              padding: '2px 18px',
              display: 'inline-block',
              boxShadow: '10px 10px 0 #111111',
              transform: 'rotate(-2deg)',
              marginTop: 10,
            }}
          >
            ≠ REAL SAFETY
          </span>
        </h1>
      </div>

      {/* Main Vector Motion Canvas (Draws the entire mechanical metaphor) */}
      <svg
        width="850"
        height="900"
        viewBox="0 0 850 900"
        style={{overflow: 'visible', position: 'relative'}}
      >
        {/* UPPER REALM: The Erratic Roller Coaster (Chaotic Highs) */}
        <g>
          {/* Rickety Roller Coaster Wooden Supports */}
          <line x1="160" y1="620" x2="160" y2="760" stroke="#111111" strokeWidth="6" strokeDasharray="16 12" />
          <line x1="320" y1="460" x2="320" y2="760" stroke="#111111" strokeWidth="6" strokeDasharray="16 12" />
          <line x1="480" y1="300" x2="480" y2="760" stroke="#111111" strokeWidth="6" strokeDasharray="16 12" />
          <line x1="600" y1="220" x2="600" y2="760" stroke="#111111" strokeWidth="6" strokeDasharray="16 12" />

          {/* Roller Coaster Rails (Climbing steeply then snapping off!) */}
          <path
            d="M 80 700 C 220 640, 360 420, 580 200"
            fill="none"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M 80 700 C 220 640, 360 420, 580 200"
            fill="none"
            stroke="#FFE600"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Jagged Track Break Point (The Chasm Warning) */}
          <g transform={`translate(580, 200) scale(${trackSnap})`}>
            <polygon points="0,-20 30,-35 20,-10 40,0 20,10 30,35 0,20" fill="#FF0055" stroke="#111111" strokeWidth="4" />
            <g transform="translate(110, -30)">
              <rect x="-10" y="-18" width="180" height="42" fill="#FF0055" stroke="#111111" strokeWidth="4" style={{filter: 'drop-shadow(6px 6px 0 #111111)'}} />
              <text x="80" y="10" fill="#FFFFFF" fontSize="30" fontWeight="900" textAnchor="middle">
                DEAD END!
              </text>
            </g>
          </g>

          {/* Roller Coaster Cart Carrying Both Characters */}
          <g transform={`translate(${cartX}, ${cartY - 50 + jitter}) rotate(${cartAngle})`}>
            {/* Cart Body */}
            <rect x="-85" y="-42" width="170" height="64" rx="14" fill="#FF0055" stroke="#111111" strokeWidth="7" style={{filter: 'drop-shadow(8px 8px 0 #111111)'}} />
            {/* Wheels */}
            <circle cx="-50" cy="26" r="16" fill="#FFE600" stroke="#111111" strokeWidth="6" />
            <circle cx="50" cy="26" r="16" fill="#FFE600" stroke="#111111" strokeWidth="6" />

            {/* Thrill Sparks behind cart */}
            {climbProgress > 0.1 && (
              <g transform="translate(-105, 10)">
                <polygon points="0,0 -30,-15 -20,0 -40,15 0,5" fill="#FFE600" />
              </g>
            )}

            {/* Character 1 (Yellow) */}
            <GeometricCharacter
              x={-35}
              y={-72}
              scale={0.7}
              color="#FFE600"
              pose={climbProgress > 0.8 ? 'shocked' : 'curious'}
              gazeX={climbProgress > 0.8 ? 1 : 0}
              gazeY={climbProgress > 0.8 ? 0.8 : -1}
            />
            {/* Character 2 (Cyan) */}
            <GeometricCharacter
              x={35}
              y={-72}
              scale={0.7}
              color="#00E5FF"
              pose={climbProgress > 0.8 ? 'shocked' : 'curious'}
              gazeX={climbProgress > 0.8 ? 1 : -0.5}
              gazeY={climbProgress > 0.8 ? 0.9 : -1}
            />
          </g>
        </g>

        {/* LOWER REALM: Grounded Bedrock Sanctuary (Appears in Beat 2, frames 220+) */}
        {anchorEntry > 0.02 && (
          <g transform={`translate(0, ${anchorY})`} opacity={anchorEntry}>
            {/* Heavy Concrete Bedrock Foundation */}
            <rect
              x="50"
              y="-35"
              width="750"
              height="80"
              rx="12"
              fill="#FFFFFF"
              stroke="#111111"
              strokeWidth="7"
              style={{filter: 'drop-shadow(10px 10px 0 #00E5FF)'}}
            />

            {/* Anchor Icon & Tension Cables */}
            <g transform="translate(110, 5)">
              <circle cx="0" cy="0" r="24" fill="#00E5FF" stroke="#111111" strokeWidth="5" />
              <path d="M 0 -16 L 0 16 M -14 8 Q 0 22 14 8" fill="none" stroke="#111111" strokeWidth="5" strokeLinecap="round" />
            </g>

            {/* Foundation Tag */}
            <g transform="translate(450, 15)">
              <text x="0" y="0" fill="#111111" fontSize="32" fontWeight="900" fontFamily="'Arial Black', sans-serif" textAnchor="middle">
                TRUE ANCHOR: GROUNDED SAFETY
              </text>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
