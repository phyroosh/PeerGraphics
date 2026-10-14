import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

/**
 * Scene 02: Bernstein & The Blacksmith's Discovery
 * Pure Motion Design: Nikolai Bernstein's 1930s kymocyclography experiment.
 * Passes the Mute Test: Viewer immediately sees 3 completely different arm/hammer arcs
 * landing on the exact same millimeter target on the anvil.
 */
export const S02_BernsteinAndBlacksmith: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Entrance spring
  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Hammer swing strikes anvil at local frame 170, 270, and 370
  const isStrike1 = frame >= 165 && frame <= 190;
  const isStrike2 = frame >= 265 && frame <= 290;
  const isStrike3 = frame >= 365 && frame <= 390;
  const anyStrike = isStrike1 || isStrike2 || isStrike3;

  const hammerAngle = anyStrike
    ? 25
    : interpolate(Math.sin(frame * 0.15), [-1, 1], [-55, -15]);

  // Spark burst intensity on strike
  const sparkScale = anyStrike ? 1.4 : 0;

  // Cyclography arc progress (reveal from frame 180 onward)
  const arcProgress1 = interpolate(frame, [180, 240], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const arcProgress2 = interpolate(frame, [250, 320], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const arcProgress3 = interpolate(frame, [330, 400], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  // Final Stamp Spring (f389 = 23.64s in script)
  const stampSpring = spring({
    frame: frame - 389,
    fps,
    config: {damping: 11, stiffness: 200},
  });
  const stampScale = interpolate(stampSpring, [0, 1], [2.4, 1]);

  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        position: 'relative',
        boxSizing: 'border-box',
        paddingTop: DESIGN_TOKENS.safeArea.top,
        paddingLeft: DESIGN_TOKENS.safeArea.left,
        paddingRight: DESIGN_TOKENS.safeArea.right,
        opacity: entry,
      }}
    >
      {/* Dynamic Headline */}
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
          BERNSTEIN’S DISCOVERY
          <br />
          <span
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              padding: '4px 20px',
              display: 'inline-block',
              boxShadow: '10px 10px 0 #111111',
              transform: 'rotate(-1.5deg)',
              marginTop: 10,
            }}
          >
            1930s CYCLOGRAPHY STUDY
          </span>
        </h1>
      </div>

      {/* Central Visual Apparatus: The Blacksmith, Anvil & Cyclography Arcs */}
      <div
        style={{
          width: '850px',
          height: '840px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg
          width="850"
          height="840"
          viewBox="0 0 850 840"
          fill="none"
          style={{overflow: 'visible'}}
        >
          {/* Floating Cyclography Legend Tags (Shadow FIRST, then foreground) */}
          {frame >= 280 && frame < 389 && (
            <g transform="translate(430, 40)">
              <rect x="8" y="8" width="380" height="90" rx="8" fill="#111111" />
              <rect x="0" y="0" width="380" height="90" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="5" />
              <text x="18" y="36" fill="#111111" fontSize="24" fontWeight="900">
                SWING TRAJECTORIES:
              </text>
              <circle cx="28" cy="62" r="8" fill="#FFE600" stroke="#111111" strokeWidth="2" />
              <text x="44" y="68" fill="#111111" fontSize="20" fontWeight="900">#1 HIGH</text>
              <circle cx="145" cy="62" r="8" fill="#00E5FF" stroke="#111111" strokeWidth="2" />
              <text x="160" y="68" fill="#111111" fontSize="20" fontWeight="900">#2 DIRECT</text>
              <circle cx="260" cy="62" r="8" fill="#FF0055" stroke="#111111" strokeWidth="2" />
              <text x="276" y="68" fill="#111111" fontSize="20" fontWeight="900">#3 STEEP</text>
            </g>
          )}

          {/* Ground Floor Shadow */}
          <line
            x1="80"
            y1="680"
            x2="780"
            y2="680"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
          />

          {/* Anvil Wooden Stand Shadow FIRST */}
          <rect
            x="490"
            y="520"
            width="220"
            height="170"
            rx="8"
            fill="#111111"
          />
          {/* Anvil Wooden Stand */}
          <rect
            x="480"
            y="510"
            width="220"
            height="170"
            rx="8"
            fill="#EAE5DB"
            stroke="#111111"
            strokeWidth="6"
          />
          {/* Wood grain grooves */}
          <line x1="530" y1="520" x2="530" y2="670" stroke="#111111" strokeWidth="4" />
          <line x1="600" y1="520" x2="600" y2="670" stroke="#111111" strokeWidth="4" />
          <line x1="660" y1="520" x2="660" y2="670" stroke="#111111" strokeWidth="4" />

          {/* Heavy Cast Iron Anvil */}
          <path
            d="M 460 470 L 720 470 L 680 510 L 500 510 Z"
            fill="#111111"
          />
          <path
            d="M 450 460 L 710 460 L 670 500 L 490 500 Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="6"
          />
          {/* Anvil horn */}
          <path
            d="M 450 460 L 390 450 Q 420 480 470 480 Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="5"
          />

          {/* Target Impact Crosshair on Anvil */}
          <g transform="translate(580, 460)">
            <circle cx="0" cy="0" r="22" fill="none" stroke="#FF0055" strokeWidth="5" />
            <circle cx="0" cy="0" r="8" fill="#FF0055" />
            <line x1="-35" y1="0" x2="35" y2="0" stroke="#FF0055" strokeWidth="4" />
            <line x1="0" y1="-35" x2="0" y2="35" stroke="#FF0055" strokeWidth="4" />
            {/* Precision millimeter readout badge */}
            <g transform="translate(45, -30)">
              <rect x="0" y="0" width="180" height="42" rx="6" fill="#111111" />
              <text x="90" y="28" fill="#FFE600" fontSize="22" fontWeight="900" textAnchor="middle">
                0.00 mm ERROR
              </text>
            </g>
          </g>

          {/* Sparks bursting from anvil on strike */}
          {sparkScale > 0 && (
            <g transform="translate(580, 450)">
              {[-45, -20, 0, 25, 45].map((angle, idx) => (
                <line
                  key={idx}
                  x1="0"
                  y1="0"
                  x2={Math.sin((angle * Math.PI) / 180) * 85}
                  y2={-Math.cos((angle * Math.PI) / 180) * 85}
                  stroke={idx % 2 === 0 ? '#FFE600' : '#FF0055'}
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              ))}
            </g>
          )}

          {/* The Master Blacksmith Puppet */}
          <g transform="translate(240, 420)">
            {/* Legs */}
            <line x1="-30" y1="140" x2="-35" y2="260" stroke="#111111" strokeWidth="12" strokeLinecap="round" />
            <line x1="25" y1="140" x2="20" y2="260" stroke="#111111" strokeWidth="12" strokeLinecap="round" />
            {/* Heavy boots */}
            <rect x="-60" y="245" width="45" height="20" rx="6" fill="#111111" />
            <rect x="5" y="245" width="45" height="20" rx="6" fill="#111111" />

            {/* Torso & Leather Apron */}
            <rect
              x="-55"
              y="0"
              width="110"
              height="150"
              rx="14"
              fill="#FFFFFF"
              stroke="#111111"
              strokeWidth="6"
            />
            {/* Leather Apron Over Torso */}
            <path
              d="M -40 20 L 40 20 L 35 130 L -35 130 Z"
              fill="#FFE600"
              stroke="#111111"
              strokeWidth="5"
            />

            {/* Head & Cap */}
            <circle cx="0" cy="-60" r="42" fill="#FFFFFF" stroke="#111111" strokeWidth="6" />
            {/* Cap visor */}
            <path d="M -40 -75 L 30 -85 L 45 -70 Z" fill="#111111" />
            {/* Eye focused on anvil */}
            <circle cx="20" cy="-58" r="8" fill="#111111" />
            <circle cx="22" cy="-60" r="3" fill="#FFFFFF" />

            {/* Shoulder Pivot & Arm */}
            <g transform={`translate(25, 25) rotate(${hammerAngle} 0 0)`}>
              {/* Upper arm */}
              <line x1="0" y1="0" x2="70" y2="-10" stroke="#111111" strokeWidth="12" strokeLinecap="round" />
              <circle cx="70" cy="-10" r="14" fill="#00E5FF" stroke="#111111" strokeWidth="5" />
              {/* Forearm */}
              <line x1="70" y1="-10" x2="135" y2="35" stroke="#111111" strokeWidth="10" strokeLinecap="round" />
              {/* Hand gripping handle */}
              <circle cx="135" cy="35" r="14" fill="#FFE600" stroke="#111111" strokeWidth="5" />

              {/* Sledgehammer */}
              <g transform="translate(135, 35)">
                <line x1="-30" y1="-40" x2="90" y2="120" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
                {/* Steel Hammer Head */}
                <rect
                  x="60"
                  y="85"
                  width="70"
                  height="45"
                  rx="6"
                  fill="#111111"
                  stroke="#111111"
                  strokeWidth="4"
                  transform="rotate(45 95 105)"
                />
                <rect
                  x="56"
                  y="81"
                  width="68"
                  height="43"
                  rx="6"
                  fill="#FFFFFF"
                  stroke="#111111"
                  strokeWidth="5"
                  transform="rotate(45 95 105)"
                />
              </g>
            </g>
          </g>

          {/* Cyclography Trajectory Curves */}
          {/* Curve 1: Neon Yellow High Arc */}
          <path
            d="M 260 280 C 330 60, 520 120, 580 455"
            fill="none"
            stroke="#FFE600"
            strokeWidth="8"
            strokeDasharray="450"
            strokeDashoffset={450 * (1 - arcProgress1)}
            strokeLinecap="round"
          />
          {/* Curve 2: Electric Cyan Direct Arc */}
          <path
            d="M 260 340 C 370 200, 480 240, 580 455"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="8"
            strokeDasharray="400"
            strokeDashoffset={400 * (1 - arcProgress2)}
            strokeLinecap="round"
          />
          {/* Curve 3: Hot Pink Whiplash Arc */}
          <path
            d="M 260 400 C 400 370, 450 160, 580 455"
            fill="none"
            stroke="#FF0055"
            strokeWidth="8"
            strokeDasharray="450"
            strokeDashoffset={450 * (1 - arcProgress3)}
            strokeLinecap="round"
          />

          {/* Giant Heroic Risograph Stamp on Frame >= 389 */}
          {frame >= 389 && (
            <g
              transform={`translate(90, 160) scale(${stampScale}) rotate(-1.5)`}
              style={{transformOrigin: '330px 50px'}}
            >
              <rect x="10" y="10" width="670" height="100" rx="10" fill="#111111" />
              <rect x="0" y="0" width="670" height="100" rx="10" fill="#FFE600" stroke="#111111" strokeWidth="6" />
              <text x="335" y="44" fill="#111111" fontSize="36" fontWeight="900" textAnchor="middle">
                REPETITION WITHOUT REPETITION
              </text>
              <text x="335" y="80" fill="#FF0055" fontSize="28" fontWeight="900" textAnchor="middle">
                SAME GOAL • DIFFERENT MOTOR PATHS
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};
