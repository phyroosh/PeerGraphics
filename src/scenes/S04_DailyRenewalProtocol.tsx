import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

export const S04_DailyRenewalProtocol: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Entrance springs
  const headerEntrance = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.snappy,
  });

  const clockEntrance = spring({
    frame: frame - 15,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Calendar flip & Reset meter
  const resetProgress = interpolate(frame, [40, 110], [100, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const sweepAngle = interpolate(frame, [0, 160], [0, 360]);

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
            transform: 'rotate(-1.5deg)',
          }}
        >
          THE 24-HOUR HALF-LIFE
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
          WILLPOWER CANNOT BE{' '}
          <span
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              padding: '0 14px',
              border: '4px solid #111111',
              boxShadow: '6px 6px 0 #111111',
              display: 'inline-block',
              transform: 'rotate(1deg)',
            }}
          >
            STORED
          </span>
        </h1>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CENTER FOCAL: 24-HOUR RESET APPARATUS & VAULT (y: 470 - 1060)  */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 460,
          left: DESIGN_TOKENS.safeArea.left,
          width: 870,
          height: 610,
          transform: `scale(${interpolate(clockEntrance, [0, 1], [0.9, 1])})`,
          opacity: clockEntrance,
        }}
      >
        <svg
          width="870"
          height="610"
          viewBox="0 0 870 610"
          style={{overflow: 'visible'}}
        >
          {/* Leaking Willpower Vault (Left Side) */}
          <g transform="translate(100, 160)">
            {/* Vault Box */}
            <rect
              x="0"
              y="0"
              width="280"
              height="360"
              rx="16"
              fill="#FFFFFF"
              stroke="#111111"
              strokeWidth="7"
              style={{filter: 'drop-shadow(10px 10px 0 #111111)'}}
            />
            {/* Vault Wheel */}
            <circle cx="140" cy="140" r="65" fill="#EAE5DB" stroke="#111111" strokeWidth="6" />
            <circle cx="140" cy="140" r="20" fill="#FF0055" stroke="#111111" strokeWidth="4" />
            {/* Vault Spokes */}
            {[0, 45, 90, 135].map((a, i) => (
              <line
                key={i}
                x1="140"
                y1="140"
                x2={140 + Math.cos((a * Math.PI) / 180) * 60}
                y2={140 + Math.sin((a * Math.PI) / 180) * 60}
                stroke="#111111"
                strokeWidth="5"
              />
            ))}

            {/* Label */}
            <text
              x="140"
              y="260"
              textAnchor="middle"
              fontSize="28"
              fontWeight="900"
              fill="#111111"
              fontFamily={DESIGN_TOKENS.fonts.display}
            >
              WILLPOWER VAULT
            </text>

            {/* Leaking Energy Drops at Bottom */}
            <g transform="translate(140, 370)">
              <circle cx="-25" cy={interpolate(frame % 20, [0, 20], [0, 40])} r="7" fill="#FFE600" />
              <circle cx="0" cy={interpolate((frame + 7) % 20, [0, 20], [0, 40])} r="9" fill="#00E5FF" />
              <circle cx="25" cy={interpolate((frame + 14) % 20, [0, 20], [0, 40])} r="6" fill="#FF0055" />
            </g>
          </g>

          {/* 24-Hour Reset Dial & Calendar Flip (Right Side) */}
          <g transform="translate(560, 160)">
            {/* Calendar Card */}
            <rect
              x="0"
              y="0"
              width="280"
              height="360"
              rx="16"
              fill="#FFFFFF"
              stroke="#111111"
              strokeWidth="7"
              style={{filter: 'drop-shadow(10px 10px 0 #111111)'}}
            />
            {/* Red Calendar Header */}
            <path
              d="M 0 16 C 0 7 7 0 16 0 L 264 0 C 273 0 280 7 280 16 L 280 80 L 0 80 Z"
              fill="#FF0055"
              stroke="#111111"
              strokeWidth="6"
            />
            <text
              x="140"
              y="52"
              textAnchor="middle"
              fontSize="34"
              fontWeight="900"
              fill="#FFFFFF"
              fontFamily={DESIGN_TOKENS.fonts.display}
            >
              EVERY 24 HOURS
            </text>

            {/* Giant Reset Counter */}
            <text
              x="140"
              y="180"
              textAnchor="middle"
              fontSize="78"
              fontWeight="900"
              fill="#111111"
              fontFamily={DESIGN_TOKENS.fonts.display}
            >
              RESET
            </text>

            {/* Reset Bar */}
            <rect x="30" y="220" width="220" height="30" rx="6" fill="#EAE5DB" stroke="#111111" strokeWidth="4" />
            <rect
              x="30"
              y="220"
              width={interpolate(resetProgress, [0, 100], [0, 220])}
              height="30"
              rx="6"
              fill="#FFE600"
            />

            <text
              x="140"
              y="290"
              textAnchor="middle"
              fontSize="28"
              fontWeight="900"
              fill="#FF0055"
              fontFamily={DESIGN_TOKENS.fonts.display}
            >
              SLATE CLEARS
            </text>
          </g>
        </svg>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* LOWER SECTION: CORE TAKEAWAY CARD (y: 1100 - 1380)           */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 1100,
          left: DESIGN_TOKENS.safeArea.left,
          right: DESIGN_TOKENS.safeArea.right,
          backgroundColor: '#FFFFFF',
          border: '5px solid #111111',
          boxShadow: '10px 10px 0 #111111',
          borderRadius: 16,
          padding: '24px 32px',
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
            DAILY RE-ENGAGEMENT
          </span>
          <span
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              padding: '4px 14px',
              border: '3px solid #111111',
              borderRadius: 6,
              fontSize: 32,
              fontWeight: 900,
            }}
          >
            DAILY
          </span>
        </div>

        <div
          style={{
            fontSize: 38,
            fontWeight: 800,
            color: '#111111',
            lineHeight: 1.25,
            fontFamily: DESIGN_TOKENS.fonts.primary,
          }}
        >
          Yesterday's discipline does not protect today's cortex.
        </div>

        <div
          style={{
            marginTop: 8,
            fontSize: 34,
            fontWeight: 900,
            color: '#FF0055',
          }}
        >
          It must be re-earned every sunrise.
        </div>
      </div>
    </div>
  );
};
