import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

export const S05_TheDivergence: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Curve draw progress (0 to 1 over frames 15 to 140)
  const drawProgress = interpolate(frame, [15, 140], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Labels reveal
  const labelsReveal = spring({
    frame: frame - 90,
    fps,
    config: DESIGN_TOKENS.spring.snappy,
  });

  // Dimensions of the coordinate plane
  const graphWidth = 840;
  const graphHeight = 520;
  const originX = 120;
  const originY = 560;

  // Liking Path: starts high (y=180), drops to zero (y=530)
  // Wanting Path: starts mid (y=380), shoots up to max (y=120)
  const currentGraphX = originX + graphWidth * drawProgress;

  // SVG Cubic Bezier points
  // Liking: M 120 180 C 350 200, 550 500, 960 530
  // Wanting: M 120 380 C 350 360, 550 160, 960 120

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: DESIGN_TOKENS.safeArea.top + 10,
        opacity: entry,
      }}
    >
      {/* Category Pill */}
      <div
        style={{
          backgroundColor: 'rgba(239, 68, 68, 0.15)',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          borderRadius: 99,
          padding: '8px 24px',
          marginBottom: 20,
        }}
      >
        <span
          style={{
            color: '#F87171',
            fontFamily: DESIGN_TOKENS.fonts.mono,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Incentive-Sensitization Model
        </span>
      </div>

      {/* Main Headline */}
      <h1
        style={{
          fontSize: 68,
          fontWeight: 900,
          color: DESIGN_TOKENS.colors.textPrimary,
          textAlign: 'center',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          maxWidth: 940,
          margin: '0 0 24px 0',
        }}
      >
        The Fatal Divergence
      </h1>

      {/* The Divergence Chart Card */}
      <div
        style={{
          width: 920,
          height: 640,
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          border: '2px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 32,
          padding: '24px 20px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          position: 'relative',
        }}
      >
        <svg
          width="880"
          height="590"
          viewBox="0 0 1000 660"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="chartGlowGreen" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="chartGlowOrange" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid lines */}
          {[160, 280, 400, 520].map((y) => (
            <line
              key={y}
              x1="120"
              y1={y}
              x2="960"
              y2={y}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeDasharray="4 4"
            />
          ))}

          {/* Axes */}
          <line x1="120" y1="100" x2="120" y2="550" stroke="#94A3B8" strokeWidth="3" />
          <line x1="120" y1="550" x2="960" y2="550" stroke="#94A3B8" strokeWidth="3" />

          {/* Axis Labels */}
          <text
            x="540"
            y="610"
            textAnchor="middle"
            fill="#CBD5E1"
            fontSize="24"
            fontWeight="700"
            fontFamily={DESIGN_TOKENS.fonts.mono}
          >
            REPEATED EXPOSURE OVER TIME →
          </text>

          <text
            x="40"
            y="320"
            textAnchor="middle"
            fill="#CBD5E1"
            fontSize="22"
            fontWeight="700"
            fontFamily={DESIGN_TOKENS.fonts.mono}
            transform="rotate(-90 40 320)"
          >
            NEURAL RESPONSE INTENSITY
          </text>

          {/* === WANTING CURVE (Orange - RISING) === */}
          <path
            d="M 120 380 C 350 360, 550 160, 960 120"
            stroke={DESIGN_TOKENS.colors.wantingAmber}
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
            filter="url(#chartGlowOrange)"
            strokeDasharray="1000"
            strokeDashoffset={1000 * (1 - drawProgress)}
          />

          {/* === LIKING CURVE (Green - COLLAPSING) === */}
          <path
            d="M 120 180 C 350 200, 550 500, 960 530"
            stroke={DESIGN_TOKENS.colors.likingEmerald}
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
            filter="url(#chartGlowGreen)"
            strokeDasharray="1000"
            strokeDashoffset={1000 * (1 - drawProgress)}
          />

          {/* Floating Indicators at endpoints */}
          {drawProgress > 0.85 && (
            <>
              {/* Wanting Target */}
              <circle cx="960" cy="120" r="10" fill="#FFFFFF" />
              <circle cx="960" cy="120" r="18" fill="none" stroke={DESIGN_TOKENS.colors.wantingAmber} strokeWidth="3" />
              {/* Liking Target */}
              <circle cx="960" cy="530" r="10" fill="#FFFFFF" />
              <circle cx="960" cy="530" r="18" fill="none" stroke={DESIGN_TOKENS.colors.likingEmerald} strokeWidth="3" />
            </>
          )}
        </svg>

        {/* Legend / Callout tags below chart */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            opacity: labelsReveal,
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(124, 45, 18, 0.85)',
              border: `2px solid ${DESIGN_TOKENS.colors.wantingAmber}`,
              borderRadius: 16,
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div style={{width: 14, height: 14, borderRadius: '50%', backgroundColor: DESIGN_TOKENS.colors.wantingAmber}} />
            <span style={{color: '#FFF', fontSize: 20, fontWeight: 800}}>
              WANTING: Hyper-Sensitizing (↑ 100%)
            </span>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(6, 78, 59, 0.85)',
              border: `2px solid ${DESIGN_TOKENS.colors.likingEmerald}`,
              borderRadius: 16,
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div style={{width: 14, height: 14, borderRadius: '50%', backgroundColor: DESIGN_TOKENS.colors.likingEmerald}} />
            <span style={{color: '#FFF', fontSize: 20, fontWeight: 800}}>
              LIKING: Tolerance Crash (↓ 0%)
            </span>
          </div>
        </div>
      </div>

      {/* Explanatory subtitle banner */}
      <div
        style={{
          marginTop: 28,
          width: 900,
          backgroundColor: 'rgba(30, 41, 59, 0.6)',
          borderRadius: 20,
          padding: '20px 28px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <span style={{fontSize: 24, color: '#E2E8F0', textAlign: 'center', lineHeight: 1.4}}>
          Sensitization amplifies the <strong>craving signals</strong> even while hedonic tolerance completely <strong>silences the pleasure</strong>.
        </span>
      </div>
    </div>
  );
};
