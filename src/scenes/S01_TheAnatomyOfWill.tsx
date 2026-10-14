import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

export const S01_TheAnatomyOfWill: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Entrance springs
  const headerEntrance = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.snappy,
  });

  const brainEntrance = spring({
    frame: frame - 15,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  const reticleEntrance = spring({
    frame: frame - 60,
    fps,
    config: {damping: 10, mass: 0.6, stiffness: 140},
  });

  const meterEntrance = spring({
    frame: frame - 50,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Dynamic animations
  const aMCCPulse = Math.sin(frame * 0.2) * 0.15 + 1.0;
  const synapticSpark = Math.floor(frame / 4) % 3;

  // Gauge needle spring
  const needleValue = interpolate(
    spring({frame: frame - 70, fps, config: {damping: 12, stiffness: 100}}),
    [0, 1],
    [-45, 65]
  );

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
            backgroundColor: '#FFE600',
            color: '#111111',
            border: '4px solid #111111',
            boxShadow: '6px 6px 0 #111111',
            padding: '8px 24px',
            borderRadius: 8,
            fontSize: 34,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: 16,
            transform: 'rotate(-1.5deg)',
          }}
        >
          NEUROSCIENCE OF WILLPOWER
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 84,
            fontWeight: 900,
            lineHeight: 1.05,
            color: '#111111',
            fontFamily: DESIGN_TOKENS.fonts.display,
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
          }}
        >
          WILLPOWER HAS AN{' '}
          <span
            style={{
              backgroundColor: '#FF0055',
              color: '#FFFFFF',
              padding: '0 14px',
              border: '4px solid #111111',
              boxShadow: '6px 6px 0 #111111',
              display: 'inline-block',
              transform: 'rotate(1deg)',
            }}
          >
            ANATOMY
          </span>
        </h1>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CENTER FOCAL: ANATOMICAL BRAIN VECTOR APPARATUS (y: 450 - 990) */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 450,
          left: DESIGN_TOKENS.safeArea.left,
          width: 870,
          height: 550,
          transform: `scale(${interpolate(brainEntrance, [0, 1], [0.85, 1])})`,
          opacity: brainEntrance,
        }}
      >
        <svg
          width="870"
          height="550"
          viewBox="0 0 870 550"
          style={{overflow: 'visible'}}
        >
          {/* Drop shadow for entire brain apparatus */}
          <path
            d="M 220 440 C 140 440 90 380 90 290 C 90 160 200 60 380 60 C 580 60 750 140 770 290 C 780 370 720 440 620 440 C 580 440 540 420 500 440 C 440 470 320 470 220 440 Z"
            fill="#111111"
            transform="translate(12, 12)"
          />

          {/* Neocortex Base Silhouette */}
          <path
            d="M 220 440 C 140 440 90 380 90 290 C 90 160 200 60 380 60 C 580 60 750 140 770 290 C 780 370 720 440 620 440 C 580 440 540 420 500 440 C 440 470 320 470 220 440 Z"
            fill="#F4EFE6"
            stroke="#111111"
            strokeWidth="7"
            strokeLinejoin="round"
          />

          {/* Internal Sulci & Gyri (Cerebral Cortex Folds) */}
          <g stroke="#111111" strokeWidth="5" strokeLinecap="round" fill="none">
            <path d="M 200 230 C 260 190 310 250 390 210 C 440 180 490 230 570 200 C 640 170 680 230 730 260" />
            <path d="M 160 320 C 240 300 280 350 360 310 C 420 280 470 340 540 300" />
            <path d="M 280 130 C 340 150 380 110 450 140 C 530 120 590 160 650 140" />
          </g>

          {/* Corpus Callosum Inner Arch */}
          <path
            d="M 290 340 C 310 270 480 260 560 330 C 530 350 490 310 420 310 C 350 310 320 350 290 340 Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="5"
          />

          {/* THE aMCC (Anterior Midcingulate Cortex) */}
          <g
            transform={`translate(430, 240) scale(${aMCCPulse}) translate(-430, -240)`}
          >
            <path
              d="M 330 280 C 370 210 470 210 520 270 C 470 250 380 250 330 280 Z"
              fill="#FF0055"
              stroke="#111111"
              strokeWidth="6"
              style={{filter: 'drop-shadow(0 0 16px rgba(255, 0, 85, 0.6))'}}
            />

            {synapticSpark === 0 && (
              <circle cx="390" cy="245" r="8" fill="#FFE600" stroke="#111111" strokeWidth="3" />
            )}
            {synapticSpark === 1 && (
              <circle cx="440" cy="235" r="9" fill="#00E5FF" stroke="#111111" strokeWidth="3" />
            )}
            {synapticSpark === 2 && (
              <circle cx="480" cy="250" r="8" fill="#FFE600" stroke="#111111" strokeWidth="3" />
            )}
          </g>

          {/* Targeted Reticle & Callout Line */}
          {reticleEntrance > 0.05 && (
            <g opacity={reticleEntrance}>
              <circle
                cx="435"
                cy="245"
                r={interpolate(reticleEntrance, [0, 1], [60, 36])}
                fill="none"
                stroke="#00E5FF"
                strokeWidth="5"
                strokeDasharray="8 6"
              />
              <circle
                cx="435"
                cy="245"
                r="6"
                fill="#FF0055"
                stroke="#111111"
                strokeWidth="2"
              />
              <polyline
                points="435,210 490,120 740,120"
                fill="none"
                stroke="#111111"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g transform="translate(510, 65)">
                <rect
                  x="0"
                  y="0"
                  width="290"
                  height="64"
                  rx="8"
                  fill="#FFE600"
                  stroke="#111111"
                  strokeWidth="5"
                  style={{filter: 'drop-shadow(6px 6px 0 #111111)'}}
                />
                <text
                  x="145"
                  y="43"
                  textAnchor="middle"
                  fill="#111111"
                  fontSize="32"
                  fontWeight="900"
                  fontFamily={DESIGN_TOKENS.fonts.display}
                  letterSpacing="-0.01em"
                >
                  aMCC REGION
                </text>
              </g>
            </g>
          )}

          {/* Character */}
          <g transform="translate(60, 310)">
            <ellipse cx="60" cy="190" rx="50" ry="12" fill="#111111" opacity={0.3} />
            <line x1="45" y1="120" x2="45" y2="185" stroke="#111111" strokeWidth="7" strokeLinecap="round" />
            <line x1="75" y1="120" x2="75" y2="185" stroke="#111111" strokeWidth="7" strokeLinecap="round" />
            <rect
              x="25"
              y="50"
              width="70"
              height="80"
              rx="12"
              fill="#00E5FF"
              stroke="#111111"
              strokeWidth="6"
            />
            <path
              d="M 25 65 Q -5 90 20 120"
              fill="none"
              stroke="#111111"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M 95 65 Q 125 50 145 25"
              fill="none"
              stroke="#111111"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <g transform="translate(60, 20)">
              <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#111111" strokeWidth="6" />
              <circle cx="10" cy="-6" r="8" fill="#111111" />
              <circle cx="12" cy="-8" r="2.5" fill="#FFFFFF" />
            </g>
          </g>
        </svg>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* LOWER SECTION: WILLPOWER ENGINE GAUGE (Safe Zone: y <= 1380)   */}
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
          transform: `translateY(${interpolate(meterEntrance, [0, 1], [40, 0])}px)`,
          opacity: meterEntrance,
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12}}>
          <span
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: '#FF0055',
              fontFamily: DESIGN_TOKENS.fonts.display,
              letterSpacing: '0.02em',
            }}
          >
            ● NEURAL HARDWARE METRIC
          </span>
          <span
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              padding: '4px 14px',
              border: '3px solid #111111',
              borderRadius: 6,
              fontSize: 30,
              fontWeight: 900,
            }}
          >
            VOLUMETRIC
          </span>
        </div>

        <div style={{display: 'flex', alignItems: 'center', gap: 24}}>
          <div style={{width: 140, height: 85, position: 'relative'}}>
            <svg width="140" height="85" viewBox="0 0 140 85">
              <path
                d="M 20 75 A 50 50 0 0 1 120 75"
                fill="none"
                stroke="#EAE5DB"
                strokeWidth="16"
                strokeLinecap="round"
              />
              <path
                d="M 20 75 A 50 50 0 0 1 120 75"
                fill="none"
                stroke="#FF0055"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray="157"
                strokeDashoffset={interpolate(needleValue, [-45, 65], [157, 30])}
              />
              <circle cx="70" cy="75" r="8" fill="#111111" />
              <line
                x1="70"
                y1="75"
                x2="70"
                y2="32"
                stroke="#111111"
                strokeWidth="5"
                strokeLinecap="round"
                transform={`rotate(${needleValue} 70 75)`}
              />
            </svg>
          </div>

          <div style={{flex: 1}}>
            <div
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                fontFamily: DESIGN_TOKENS.fonts.primary,
              }}
            >
              The biological seat of grit and cognitive resistance.
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#FF0055',
                marginTop: 4,
              }}
            >
              Higher Volume = Greater Tenacity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
