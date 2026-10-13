import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

/**
 * Scene 04: Dynamic Mastery
 * Pure Motion Design: The brain solving problems across shifting vectors.
 * Passes the Mute Test: Gauge sweeps from Fragile to Mastery as neural routing
 * automatically adapts to shifting external noise and angles.
 */
export const S04_DynamicMastery: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Entrance spring
  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Gauge needle sweep: sweeps with snappy recoil from -70deg to 65deg
  const gaugeSpring = spring({
    frame: frame - 15,
    fps,
    config: {damping: 10, stiffness: 140, mass: 1.1},
  });
  const needleAngle = interpolate(gaugeSpring, [0, 1], [-70, 65]);

  // Dynamic vector arrows swirling & oscillating
  const vectorAngle1 = Math.sin(frame * 0.18) * 25;
  const vectorAngle2 = Math.cos(frame * 0.22) * 20;

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
            fontSize: 90,
            fontWeight: 900,
            lineHeight: 1.02,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: -1.5,
            color: '#111111',
            fontFamily: DESIGN_TOKENS.fonts.display,
          }}
        >
          TRUE MASTERY
          <br />
          <span
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              padding: '4px 20px',
              display: 'inline-block',
              boxShadow: '10px 10px 0 #111111',
              transform: 'rotate(-2deg)',
              marginTop: 10,
            }}
          >
            ADAPTING TO CHANGE
          </span>
        </h1>
      </div>

      {/* Central Visual Apparatus: The Dynamic Mastery Gauge & Shifting Solutions */}
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
          {/* Gauge Center Drop Shadow FIRST */}
          <circle
            cx="425"
            cy="420"
            r="260"
            fill="#111111"
            transform="translate(14, 14)"
          />
          {/* Gauge Face Base */}
          <circle
            cx="425"
            cy="420"
            r="260"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="8"
          />

          {/* Dial Arc Zones */}
          {/* Left Zone: Fragile (Red #FF0055) */}
          <path
            d="M 230 420 A 195 195 0 0 1 350 245"
            stroke="#FF0055"
            strokeWidth="28"
            strokeLinecap="round"
            fill="none"
          />
          {/* Middle Zone: Vacuum Drill (Yellow #FFE600) */}
          <path
            d="M 360 238 A 195 195 0 0 1 490 238"
            stroke="#FFE600"
            strokeWidth="28"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right Zone: Adaptive Mastery (Cyan #00E5FF) */}
          <path
            d="M 500 245 A 195 195 0 0 1 620 420"
            stroke="#00E5FF"
            strokeWidth="28"
            strokeLinecap="round"
            fill="none"
          />

          {/* Dial Ticks */}
          {[-70, -45, -20, 0, 20, 45, 65].map((angle, idx) => {
            const rad = ((angle - 90) * Math.PI) / 180;
            const x1 = 425 + Math.cos(rad) * 160;
            const y1 = 420 + Math.sin(rad) * 160;
            const x2 = 425 + Math.cos(rad) * 185;
            const y2 = 420 + Math.sin(rad) * 185;
            return (
              <line
                key={idx}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#111111"
                strokeWidth="5"
                strokeLinecap="round"
              />
            );
          })}

          {/* Gauge Center Fulcrum */}
          <circle cx="425" cy="420" r="32" fill="#111111" />
          <circle cx="425" cy="420" r="18" fill="#FFE600" />

          {/* Heavy Mechanical Needle */}
          <g transform={`translate(425, 420) rotate(${needleAngle} 0 0)`}>
            <polygon
              points="0,-185 -14,0 14,0"
              fill="#111111"
            />
            <polygon
              points="0,-185 -8,0 8,0"
              fill="#FF0055"
            />
          </g>

          {/* Status Badge inside Gauge (Shadow FIRST) */}
          <g transform="translate(265, 510)">
            <rect x="8" y="8" width="320" height="70" rx="8" fill="#111111" />
            <rect x="0" y="0" width="320" height="70" rx="8" fill="#00E5FF" stroke="#111111" strokeWidth="5" />
            <text x="160" y="47" fill="#111111" fontSize="30" fontWeight="900" textAnchor="middle">
              ADAPTIVE MASTERY
            </text>
          </g>

          {/* Top Left: Fatigue Noise Badge (Shadow FIRST) */}
          <g transform={`translate(150, 150) rotate(${vectorAngle1} 60 40)`}>
            <rect x="8" y="8" width="200" height="65" rx="8" fill="#111111" />
            <rect x="0" y="0" width="200" height="65" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="5" />
            <text x="100" y="42" fill="#FF0055" fontSize="24" fontWeight="900" textAnchor="middle">
              FATIGUE NOISE
            </text>
          </g>

          {/* Top Right: Angle Shift Badge (Shadow FIRST) */}
          <g transform={`translate(520, 150) rotate(${vectorAngle2} 60 40)`}>
            <rect x="8" y="8" width="200" height="65" rx="8" fill="#111111" />
            <rect x="0" y="0" width="200" height="65" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="5" />
            <text x="100" y="42" fill="#00E5FF" fontSize="24" fontWeight="900" textAnchor="middle">
              ANGLE SHIFT
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};
