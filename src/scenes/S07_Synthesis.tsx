import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

export const S07_Synthesis: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  const glowPulse = 0.8 + 0.2 * Math.sin(frame * 0.2);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: DESIGN_TOKENS.safeArea.top + 40,
        opacity: entry,
      }}
    >
      {/* Category Pill */}
      <div
        style={{
          backgroundColor: 'rgba(249, 115, 22, 0.15)',
          border: '1px solid rgba(249, 115, 22, 0.4)',
          borderRadius: 99,
          padding: '8px 26px',
          marginBottom: 32,
        }}
      >
        <span
          style={{
            color: '#FDBA74',
            fontFamily: DESIGN_TOKENS.fonts.mono,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Key Insight
        </span>
      </div>

      {/* Hero Takeaway Card */}
      <div
        style={{
          width: 900,
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          border: `3px solid ${DESIGN_TOKENS.colors.wantingAmber}`,
          borderRadius: 36,
          padding: '50px 44px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: `0 24px 60px rgba(249, 115, 22, ${0.25 * glowPulse})`,
          marginBottom: 40,
        }}
      >
        <span
          style={{
            color: '#94A3B8',
            fontSize: 26,
            fontWeight: 700,
            fontFamily: DESIGN_TOKENS.fonts.mono,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          The Reality
        </span>

        <h1
          style={{
            fontSize: 76,
            fontWeight: 900,
            color: DESIGN_TOKENS.colors.textPrimary,
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            margin: '0 0 28px 0',
          }}
        >
          You Are{' '}
          <span
            style={{
              color: DESIGN_TOKENS.colors.wantingAmber,
              textShadow: `0 0 25px ${DESIGN_TOKENS.colors.wantingAmber}`,
            }}
          >
            Trapped in Wanting
          </span>
        </h1>

        <div
          style={{
            width: 120,
            height: 4,
            backgroundColor: DESIGN_TOKENS.colors.wantingAmber,
            borderRadius: 2,
            marginBottom: 32,
          }}
        />

        <p
          style={{
            fontSize: 32,
            color: '#E2E8F0',
            textAlign: 'center',
            lineHeight: 1.45,
            margin: '0 0 28px 0',
          }}
        >
          The pleasure left long ago. Your dopamine circuit is firing on pure conditioned cues.
        </p>

        <div
          style={{
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            borderRadius: 20,
            padding: '18px 28px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              color: DESIGN_TOKENS.colors.accentSky,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            💡 Insight: Stop fighting pleasure. Remove the environment triggers.
          </span>
        </div>
      </div>

      {/* Community Engagement Discussion Prompt */}
      <div
        style={{
          width: 900,
          backgroundColor: 'rgba(30, 41, 59, 0.5)',
          borderRadius: 24,
          padding: '22px 32px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
        }}
      >
        <span style={{fontSize: 30}}>💬</span>
        <span style={{fontSize: 24, fontWeight: 700, color: '#F1F5F9'}}>
          What habit have you caught yourself wanting without liking?
        </span>
      </div>
    </div>
  );
};
