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
    frame: frame - 80,
    fps,
    config: DESIGN_TOKENS.spring.snappy,
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        padding: '110px 80px 40px 80px',
        opacity: entry,
        boxSizing: 'border-box',
        fontFamily: DESIGN_TOKENS.fonts.primary,
        color: '#121212',
      }}
    >
      {/* Top Header Banner */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '6px solid #121212',
            paddingBottom: 20,
          }}
        >
          <div style={{display: 'flex', gap: 12, alignItems: 'center'}}>
            <div style={{width: 24, height: 24, backgroundColor: '#1D3557'}} />
            <div style={{width: 24, height: 24, borderRadius: '50%', backgroundColor: '#E63946'}} />
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderBottom: '24px solid #FFB703',
              }}
            />
            <span
              style={{
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: 2,
                marginLeft: 8,
                textTransform: 'uppercase',
              }}
            >
              INCENTIVE-SENSITIZATION // 05
            </span>
          </div>
          <span
            style={{
              fontSize: 20,
              fontWeight: 800,
              backgroundColor: '#121212',
              color: '#F3EFE6',
              padding: '6px 14px',
            }}
          >
            FIG. 5.0
          </span>
        </div>

        {/* Headline */}
        <div style={{marginTop: 28}}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: '#E63946',
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            THE PHYSIOLOGICAL TRAP
          </div>
          <h1
            style={{
              fontSize: 70,
              fontWeight: 900,
              lineHeight: 1.05,
              margin: '12px 0 0 0',
              letterSpacing: -2,
              textTransform: 'uppercase',
            }}
          >
            THE FATAL DIVERGENCE:{' '}
            <span
              style={{
                backgroundColor: '#121212',
                color: '#FFFFFF',
                padding: '2px 14px',
                display: 'inline-block',
                boxShadow: '6px 6px 0 #E63946',
              }}
            >
              TOLERANCE vs SENSITIZATION
            </span>
          </h1>
        </div>
      </div>

      {/* Central Quantitative Graph Card */}
      <div
        style={{
          width: '100%',
          maxWidth: 920,
          margin: '20px auto 0 auto',
          backgroundColor: '#FFFFFF',
          border: '6px solid #121212',
          boxShadow: '10px 10px 0 #121212',
          padding: '20px 20px',
          position: 'relative',
        }}
      >
        <svg
          width="870"
          height="430"
          viewBox="0 0 1000 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid lines */}
          {[140, 250, 360, 470].map((y) => (
            <line
              key={y}
              x1="120"
              y1={y}
              x2="960"
              y2={y}
              stroke="#121212"
              strokeOpacity="0.12"
              strokeDasharray="6 6"
              strokeWidth="2"
            />
          ))}

          {/* Axes */}
          <line x1="120" y1="60" x2="120" y2="480" stroke="#121212" strokeWidth="5" />
          <line x1="120" y1="480" x2="960" y2="480" stroke="#121212" strokeWidth="5" />

          {/* Axis Labels */}
          <text
            x="540"
            y="535"
            textAnchor="middle"
            fill="#121212"
            fontSize="23"
            fontWeight="900"
            fontFamily={DESIGN_TOKENS.fonts.mono}
            letterSpacing="2"
          >
            REPEATED EXPOSURE OVER TIME →
          </text>

          <text
            x="48"
            y="270"
            textAnchor="middle"
            fill="#121212"
            fontSize="21"
            fontWeight="900"
            fontFamily={DESIGN_TOKENS.fonts.mono}
            letterSpacing="2"
            transform="rotate(-90 48 270)"
          >
            NEURAL RESPONSE INTENSITY
          </text>

          {/* === WANTING CURVE (Vermilion Red - RISING) === */}
          <path
            d="M 120 330 C 350 310, 550 140, 960 100"
            stroke="#E63946"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset={1000 * (1 - drawProgress)}
          />

          {/* === LIKING CURVE (Cobalt Navy - COLLAPSING) === */}
          <path
            d="M 120 160 C 350 180, 550 430, 960 460"
            stroke="#1D3557"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset={1000 * (1 - drawProgress)}
          />

          {/* Floating Indicators at endpoints */}
          {drawProgress > 0.85 && (
            <>
              {/* Wanting Target */}
              <circle cx="960" cy="100" r="14" fill="#E63946" stroke="#121212" strokeWidth="4" />
              <circle cx="960" cy="100" r="6" fill="#FFFFFF" />
              {/* Liking Target */}
              <circle cx="960" cy="460" r="14" fill="#1D3557" stroke="#121212" strokeWidth="4" />
              <circle cx="960" cy="460" r="6" fill="#FFFFFF" />
            </>
          )}
        </svg>

        {/* Legend / Callout tags pinned on top right */}
        <div
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            opacity: labelsReveal,
          }}
        >
          <div
            style={{
              backgroundColor: '#E63946',
              color: '#FFFFFF',
              border: '4px solid #121212',
              boxShadow: '4px 4px 0 #121212',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div style={{width: 12, height: 12, backgroundColor: '#FFFFFF', border: '2px solid #121212'}} />
            <span style={{fontSize: 17, fontWeight: 900, letterSpacing: 0.5}}>
              WANTING: Sensitizing (↑ 100%)
            </span>
          </div>

          <div
            style={{
              backgroundColor: '#1D3557',
              color: '#FFFFFF',
              border: '4px solid #121212',
              boxShadow: '4px 4px 0 #121212',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div style={{width: 12, height: 12, backgroundColor: '#FFFFFF', border: '2px solid #121212'}} />
            <span style={{fontSize: 17, fontWeight: 900, letterSpacing: 0.5}}>
              LIKING: Tolerance (↓ 0%)
            </span>
          </div>
        </div>
      </div>

      {/* Explanatory subtitle banner */}
      <div
        style={{
          width: '100%',
          maxWidth: 920,
          margin: '18px auto 0 auto',
          backgroundColor: '#FFFFFF',
          border: '4px solid #121212',
          boxShadow: '6px 6px 0 #121212',
          padding: '14px 20px',
          textAlign: 'center',
        }}
      >
        <span style={{fontSize: 20, fontWeight: 700, color: '#121212', lineHeight: 1.35}}>
          Sensitization amplifies the <strong>craving signals</strong> even while hedonic tolerance completely <strong>silences the pleasure</strong>.
        </span>
      </div>

      {/* Pinned Bottom Footer Banner */}
      <div
        style={{
          position: 'absolute',
          bottom: 50,
          left: 80,
          right: 80,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '4px solid #121212',
          paddingTop: 16,
        }}
      >
        <span style={{fontSize: 20, fontWeight: 900}}>PEERGRAPHICS // SWISS DESIGN SYSTEM</span>
        <span style={{fontSize: 18, fontWeight: 700, color: '#1D3557'}}>BERRIDGE & ROBINSON (1993, 2016)</span>
      </div>
    </div>
  );
};

