import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';
import {GeometricCharacter} from '../motion/GeometricCharacter';
import {ProtectiveDome} from '../motion/PhysicalMechanisms';

/**
 * Scene 04: Emotional Safety
 * Pure Motion Design: A protective canopy expands over two characters, deflecting storm bolts.
 * Contempt spikes morph into magnifying glasses and curiosity bubbles.
 * Passes the Mute Test: Safe forcefield shielding partners; curiosity replacing attacks.
 */
export const S04_EmotionalSafety: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Dome expansion (frames 15 - 90)
  const domeProgress = spring({
    frame: frame - 15,
    fps,
    config: {damping: 14, stiffness: 120, mass: 1.1},
  });

  // Storm lightning bolts striking dome and bouncing off (frames 70 - 150)
  const stormFlash = frame > 70 && frame < 150 ? (frame % 10 < 5 ? 1 : 0.3) : 0;

  // Curiosity bubbles popping up (frames 140 - 240)
  const bubble1 = spring({frame: frame - 140, fps, config: {damping: 9, stiffness: 200}});
  const bubble2 = spring({frame: frame - 175, fps, config: {damping: 9, stiffness: 200}});

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
          PRESENCE OF
          <br />
          <span
            style={{
              backgroundColor: '#00E5FF',
              color: '#111111',
              padding: '2px 18px',
              display: 'inline-block',
              boxShadow: '10px 10px 0 #111111',
              transform: 'rotate(-1.5deg)',
              marginTop: 10,
            }}
          >
            EMOTIONAL SAFETY
          </span>
        </h1>
      </div>

      {/* Main Vector Motion SVG */}
      <svg
        width="850"
        height="1100"
        viewBox="0 0 850 1100"
        style={{overflow: 'visible'}}
      >
        {/* EXTERNAL STORM (Tension outside the dome) */}
        {stormFlash > 0 && (
          <g opacity={stormFlash}>
            {/* Lightning bolt hitting left dome shoulder */}
            <path
              d="M 120 180 L 180 270 L 140 320 L 220 420"
              fill="none"
              stroke="#FF0055"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Deflection Sparks */}
            <polygon points="220,420 200,390 240,400 230,430" fill="#FFE600" />
            
            {/* Lightning bolt hitting right dome shoulder */}
            <path
              d="M 720 160 L 660 260 L 700 310 L 630 420"
              fill="none"
              stroke="#FF0055"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <polygon points="630,420 650,390 610,400 620,430" fill="#FFE600" />
          </g>
        )}

        {/* Stable Ground Bedrock Platform */}
        <rect
          x="100"
          y="660"
          width="650"
          height="80"
          rx="12"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="7"
          style={{filter: 'drop-shadow(10px 10px 0 #111111)'}}
        />

        {/* PROTECTIVE EMOTIONAL SAFETY DOME */}
        <g transform="translate(425, 660)">
          <ProtectiveDome radius={360} expansionProgress={domeProgress} />
        </g>

        {/* TWO PARTNERS INSIDE THE DOME */}
        {/* Partner 1 (Cyan) */}
        <g transform="translate(290, 590)">
          <GeometricCharacter
            scale={0.9}
            color="#00E5FF"
            pose="curious"
            gazeX={1} // Looking warmly at partner
            gazeY={0}
            accessory="magnifyingGlass"
          />
        </g>

        {/* Partner 2 (Pink) */}
        <g transform="translate(560, 590)">
          <GeometricCharacter
            scale={0.9}
            color="#FF0055"
            pose="curious"
            gazeX={-1} // Looking warmly back
            gazeY={0}
            accessory="magnifyingGlass"
          />
        </g>

        {/* FLOATING CURIOSITY BUBBLES ("?") */}
        {bubble1 > 0.05 && (
          <g transform={`translate(350, 360) scale(${bubble1})`}>
            <circle cx="0" cy="0" r="32" fill="#FFE600" stroke="#111111" strokeWidth="5" style={{filter: 'drop-shadow(6px 6px 0 #111111)'}} />
            <text x="0" y="11" fill="#111111" fontSize="36" fontWeight="900" textAnchor="middle">
              ?
            </text>
          </g>
        )}

        {bubble2 > 0.05 && (
          <g transform={`translate(500, 340) scale(${bubble2})`}>
            <circle cx="0" cy="0" r="36" fill="#FFFFFF" stroke="#111111" strokeWidth="5" style={{filter: 'drop-shadow(6px 6px 0 #111111)'}} />
            <text x="0" y="12" fill="#00E5FF" fontSize="38" fontWeight="900" textAnchor="middle">
              ?
            </text>
          </g>
        )}

        {/* Central "CURIOSITY > CONTEMPT" Tag */}
        {domeProgress > 0.1 && (
          <g transform={`translate(425, 450) scale(${domeProgress})`}>
            <rect x="-210" y="-24" width="420" height="48" rx="8" fill="#111111" style={{filter: 'drop-shadow(6px 6px 0 #FFE600)'}} />
            <text x="0" y="9" fill="#FFE600" fontSize="28" fontWeight="900" letterSpacing="0.5" textAnchor="middle">
              CURIOSITY &gt; CONTEMPT
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
