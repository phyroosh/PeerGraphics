import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BrainDiagram} from '../components/BrainDiagram';
import {DESIGN_TOKENS} from '../design/tokens';

export const S02_TwoSystems: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Cards reveal when the voice says "liking and wanting are two completely separate systems" (~frame 80)
  const cardsReveal = spring({
    frame: frame - 60,
    fps,
    config: DESIGN_TOKENS.spring.snappy,
  });

  const cardSplitDistance = interpolate(cardsReveal, [0, 1], [0, 24]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: DESIGN_TOKENS.safeArea.top + 20,
        opacity: entry,
      }}
    >
      {/* Category Pill */}
      <div
        style={{
          backgroundColor: 'rgba(56, 189, 248, 0.15)',
          border: '1px solid rgba(56, 189, 248, 0.35)',
          borderRadius: 99,
          padding: '8px 24px',
          marginBottom: 24,
        }}
      >
        <span
          style={{
            color: DESIGN_TOKENS.colors.accentSky,
            fontFamily: DESIGN_TOKENS.fonts.mono,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          Neuroscience Discovery
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: 70,
          fontWeight: 900,
          color: DESIGN_TOKENS.colors.textPrimary,
          textAlign: 'center',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          maxWidth: 920,
          margin: '0 0 32px 0',
        }}
      >
        Your Brain Has{' '}
        <span
          style={{
            background: 'linear-gradient(90deg, #10B981, #F97316)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Two Separate Circuits
        </span>
      </h1>

      {/* Vector Brain Diagram */}
      <div style={{marginBottom: 40}}>
        <BrainDiagram mode="overview" scale={1.05} />
      </div>

      {/* The Two Uncoupled System Cards */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: cardSplitDistance,
          width: 920,
          justifyContent: 'center',
          opacity: cardsReveal,
          transform: `translateY(${(1 - cardsReveal) * 30}px)`,
        }}
      >
        {/* Card 1: LIKING */}
        <div
          style={{
            flex: 1,
            backgroundColor: 'rgba(6, 78, 59, 0.45)',
            border: `2px solid ${DESIGN_TOKENS.colors.likingEmerald}`,
            borderRadius: 24,
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: `0 12px 30px ${DESIGN_TOKENS.colors.likingEmeraldGlow}`,
          }}
        >
          <span
            style={{
              color: '#A7F3D0',
              fontFamily: DESIGN_TOKENS.fonts.mono,
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: '0.08em',
              marginBottom: 8,
            }}
          >
            CIRCUIT 1
          </span>
          <span
            style={{
              color: DESIGN_TOKENS.colors.likingEmerald,
              fontSize: 48,
              fontWeight: 900,
              marginBottom: 8,
            }}
          >
            LIKING
          </span>
          <span
            style={{
              color: '#E2E8F0',
              fontSize: 24,
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Actual Pleasure & Joy
          </span>
        </div>

        {/* Not Equal Sign */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: '#94A3B8',
            fontFamily: DESIGN_TOKENS.fonts.mono,
            padding: '0 8px',
          }}
        >
          ≠
        </div>

        {/* Card 2: WANTING */}
        <div
          style={{
            flex: 1,
            backgroundColor: 'rgba(124, 45, 18, 0.45)',
            border: `2px solid ${DESIGN_TOKENS.colors.wantingAmber}`,
            borderRadius: 24,
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: `0 12px 30px ${DESIGN_TOKENS.colors.wantingAmberGlow}`,
          }}
        >
          <span
            style={{
              color: '#FED7AA',
              fontFamily: DESIGN_TOKENS.fonts.mono,
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: '0.08em',
              marginBottom: 8,
            }}
          >
            CIRCUIT 2
          </span>
          <span
            style={{
              color: DESIGN_TOKENS.colors.wantingAmber,
              fontSize: 48,
              fontWeight: 900,
              marginBottom: 8,
            }}
          >
            WANTING
          </span>
          <span
            style={{
              color: '#E2E8F0',
              fontSize: 24,
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            The Raw Urge to Pursue
          </span>
        </div>
      </div>
    </div>
  );
};
