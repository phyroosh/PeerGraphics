import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

export const S02_FrictionExpandsTheMuscle: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Entrance springs
  const headerEntrance = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.snappy,
  });

  const apparatusEntrance = spring({
    frame: frame - 15,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Physical Straining Kinetics
  const pushCycle = Math.sin(frame * 0.15);
  const characterLean = interpolate(pushCycle, [-1, 1], [15, 25]);
  const leverAngle = interpolate(pushCycle, [-1, 1], [-18, -4]);

  // Neural Hypertrophy
  const growthSpring = spring({
    frame: frame - 250,
    fps,
    config: {damping: 12, mass: 1.2, stiffness: 90},
  });
  const aMCCScale = interpolate(growthSpring, [0, 1], [1.0, 1.85]);

  const sparkFlash = frame % 8 < 3;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* ------------------------------------------------------------- */}
      {/* TOP HEADER SECTION (Safe Zone: y >= 160px)                     */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 175,
          left: DESIGN_TOKENS.safeArea.left,
          right: DESIGN_TOKENS.safeArea.right,
          transform: `translateY(${interpolate(headerEntrance, [0, 1], [-60, 0])}px)`,
          opacity: headerEntrance,
        }}
      >
        <div
          style={{
            display: 'inline-block',
            backgroundColor: '#FF0055',
            color: '#FFFFFF',
            border: '4px solid #111111',
            boxShadow: '6px 6px 0 #111111',
            padding: '8px 24px',
            borderRadius: 8,
            fontSize: 34,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: 16,
            transform: 'rotate(1deg)',
          }}
        >
          THE NEURAL RESISTANCE LAW
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 82,
            fontWeight: 900,
            lineHeight: 1.05,
            color: '#111111',
            fontFamily: DESIGN_TOKENS.fonts.display,
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
          }}
        >
          FRICTION EXPANDS THE{' '}
          <span
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              padding: '0 14px',
              border: '4px solid #111111',
              boxShadow: '6px 6px 0 #111111',
              display: 'inline-block',
              transform: 'rotate(-1.5deg)',
            }}
          >
            CIRCUIT
          </span>
        </h1>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CENTER FOCAL: HYDRAULIC FRICTION PRESS (y: 450 - 990)         */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 450,
          left: DESIGN_TOKENS.safeArea.left,
          width: 870,
          height: 540,
          transform: `scale(${interpolate(apparatusEntrance, [0, 1], [0.9, 1])})`,
          opacity: apparatusEntrance,
        }}
      >
        <svg
          width="870"
          height="540"
          viewBox="0 0 870 540"
          style={{overflow: 'visible'}}
        >
          {/* Base Platform */}
          <rect
            x="40"
            y="470"
            width="790"
            height="36"
            rx="8"
            fill="#111111"
            transform="translate(10, 10)"
          />
          <rect
            x="40"
            y="470"
            width="790"
            height="36"
            rx="8"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="6"
          />

          {/* Friction Press (Right) */}
          <g transform="translate(520, 130)">
            <rect
              x="0"
              y="60"
              width="240"
              height="280"
              rx="12"
              fill="#EAE5DB"
              stroke="#111111"
              strokeWidth="6"
            />
            <path
              d="M 50 100 L 190 130 L 50 160 L 190 190 L 50 220 L 190 250 L 50 280 L 190 310"
              fill="none"
              stroke="#FF0055"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="120" cy="18" r="45" fill="#FFFFFF" stroke="#111111" strokeWidth="5" />
            <path
              d="M 90 18 A 30 30 0 0 1 150 18"
              fill="none"
              stroke="#FF0055"
              strokeWidth="8"
            />
            <line
              x1="120"
              y1="18"
              x2="140"
              y2="0"
              stroke="#111111"
              strokeWidth="5"
              strokeLinecap="round"
              transform={`rotate(${interpolate(pushCycle, [-1, 1], [20, 60])} 120 18)`}
            />

            {sparkFlash && (
              <g stroke="#FFE600" strokeWidth="4" strokeLinecap="round">
                <line x1="-15" y1="200" x2="-45" y2="185" />
                <line x1="-10" y1="230" x2="-40" y2="245" />
                <line x1="-20" y1="215" x2="-55" y2="215" />
              </g>
            )}
          </g>

          {/* Lever & Fulcrum */}
          <g transform="translate(420, 470)">
            <polygon points="-35,0 35,0 0,-50" fill="#111111" />
            <line
              x1="0"
              y1="-50"
              x2="90"
              y2="-380"
              stroke="#111111"
              strokeWidth="14"
              strokeLinecap="round"
              transform={`rotate(${leverAngle} 0 -50)`}
            />
          </g>

          {/* Straining Character */}
          <g transform={`translate(260, 470) rotate(${characterLean} 0 0)`}>
            <line x1="-120" y1="0" x2="-50" y2="-90" stroke="#111111" strokeWidth="10" strokeLinecap="round" />
            <line x1="-20" y1="0" x2="-20" y2="-90" stroke="#111111" strokeWidth="10" strokeLinecap="round" />
            <polygon
              points="-80,-90 0,-100 20,-200 -70,-190"
              fill="#00E5FF"
              stroke="#111111"
              strokeWidth="6"
            />
            <path
              d="M -20 -170 L 60 -190 L 140 -200"
              fill="none"
              stroke="#111111"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g transform="translate(-10, -240)">
              <circle cx="0" cy="0" r="38" fill="#FFFFFF" stroke="#111111" strokeWidth="6" />
              <circle cx="16" cy="-2" r="9" fill="#111111" />
              <circle cx="18" cy="-5" r="2.5" fill="#FFFFFF" />
              <line x1="2" y1="-18" x2="26" y2="-10" stroke="#111111" strokeWidth="5" strokeLinecap="round" />
            </g>
          </g>

          {/* Craving Lure Being Defied */}
          <g transform="translate(80, 260)">
            <circle cx="0" cy="0" r="42" fill="#FFE600" stroke="#111111" strokeWidth="5" />
            <text x="0" y="12" textAnchor="middle" fontSize="36" fontWeight="900" fill="#111111">
              ⚡
            </text>
            <text
              x="0"
              y="70"
              textAnchor="middle"
              fontSize="32"
              fontWeight="900"
              fill="#FF0055"
              fontFamily={DESIGN_TOKENS.fonts.display}
            >
              CRAVING
            </text>
            <path
              d="M 55 -55 Q 65 0 55 55"
              fill="none"
              stroke="#111111"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </g>

          {/* THE EXPANDING aMCC NEURAL CORE */}
          <g transform="translate(640, 70)">
            {growthSpring > 0.1 && (
              <circle
                cx="0"
                cy="0"
                r={45 * aMCCScale}
                fill="none"
                stroke="#00E5FF"
                strokeWidth="4"
                strokeDasharray="6 6"
                opacity={0.7}
              />
            )}
            <g transform={`scale(${aMCCScale})`}>
              <ellipse
                cx="0"
                cy="0"
                rx="35"
                ry="22"
                fill="#FF0055"
                stroke="#111111"
                strokeWidth="5"
                style={{filter: 'drop-shadow(0 0 14px rgba(255, 0, 85, 0.7))'}}
              />
              <text
                x="0"
                y="8"
                textAnchor="middle"
                fontSize="22"
                fontWeight="900"
                fill="#FFFFFF"
                fontFamily={DESIGN_TOKENS.fonts.display}
              >
                aMCC
              </text>
            </g>

            {growthSpring > 0.2 && (
              <g transform="translate(60, -30)">
                <rect
                  x="0"
                  y="0"
                  width="130"
                  height="45"
                  rx="6"
                  fill="#FFE600"
                  stroke="#111111"
                  strokeWidth="4"
                  style={{filter: 'drop-shadow(4px 4px 0 #111111)'}}
                />
                <text
                  x="65"
                  y="30"
                  textAnchor="middle"
                  fontSize="24"
                  fontWeight="900"
                  fill="#111111"
                  fontFamily={DESIGN_TOKENS.fonts.display}
                >
                  +GROWTH
                </text>
              </g>
            )}
          </g>
        </svg>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* LOWER SECTION: MECHANISM CARD (Top: 1010)                      */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 1010,
          left: DESIGN_TOKENS.safeArea.left,
          right: DESIGN_TOKENS.safeArea.right,
          backgroundColor: '#FFFFFF',
          border: '5px solid #111111',
          boxShadow: '10px 10px 0 #111111',
          borderRadius: 16,
          padding: '22px 30px',
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12}}>
          <span
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: '#111111',
              fontFamily: DESIGN_TOKENS.fonts.display,
            }}
          >
            CAUSE & EFFECT
          </span>
          <span
            style={{
              backgroundColor: '#00E5FF',
              color: '#111111',
              padding: '4px 14px',
              border: '3px solid #111111',
              borderRadius: 6,
              fontSize: 30,
              fontWeight: 900,
            }}
          >
            ACTIVE FIRING
          </span>
        </div>

        <div
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: '#111111',
            lineHeight: 1.25,
            fontFamily: DESIGN_TOKENS.fonts.primary,
          }}
        >
          Pushing against what you resist physically sparks new synaptic density.
        </div>

        <div
          style={{
            marginTop: 8,
            fontSize: 32,
            fontWeight: 900,
            color: '#FF0055',
            letterSpacing: '0.02em',
          }}
        >
          No Resistance = No Neural Growth.
        </div>
      </div>
    </div>
  );
};
