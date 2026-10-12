import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

export const S01_Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Entrance spring
  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Endless scroll offset
  const scrollOffset = (frame * 12) % 400;

  // Conflict pulse on "actively hate" (around frame 60)
  const hateGlitch = interpolate(frame, [50, 70, 95], [0, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

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
      {/* Top Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          backgroundColor: 'rgba(239, 68, 68, 0.15)',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          borderRadius: 99,
          padding: '10px 24px',
          marginBottom: 32,
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: DESIGN_TOKENS.colors.dangerRed,
            boxShadow: `0 0 12px ${DESIGN_TOKENS.colors.dangerRed}`,
          }}
        />
        <span
          style={{
            color: '#FCA5A5',
            fontFamily: DESIGN_TOKENS.fonts.mono,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          The Compulsion Paradox
        </span>
      </div>

      {/* Main Headline */}
      <h1
        style={{
          fontSize: 78,
          fontWeight: 900,
          color: DESIGN_TOKENS.colors.textPrimary,
          textAlign: 'center',
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          maxWidth: 900,
          margin: '0 0 60px 0',
        }}
      >
        Trapped in a Habit You{' '}
        <span
          style={{
            color: DESIGN_TOKENS.colors.dangerRed,
            textShadow: `0 0 ${20 + hateGlitch * 25}px ${DESIGN_TOKENS.colors.dangerRed}`,
          }}
        >
          Actively Hate?
        </span>
      </h1>

      {/* Central Phone Mockup with Endless Loop */}
      <div
        style={{
          position: 'relative',
          width: 440,
          height: 640,
          borderRadius: 48,
          backgroundColor: '#0F172A',
          border: '6px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Dynamic Notch */}
        <div
          style={{
            width: 140,
            height: 28,
            backgroundColor: '#020617',
            borderRadius: '0 0 16px 16px',
            marginBottom: 20,
            zIndex: 10,
          }}
        />

        {/* Endless feed items scrolling */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            transform: `translateY(-${scrollOffset}px)`,
            width: '88%',
          }}
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.7)',
                borderRadius: 20,
                padding: '24px 20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                  }}
                />
                <div
                  style={{
                    width: 120,
                    height: 14,
                    borderRadius: 6,
                    backgroundColor: 'rgba(255,255,255,0.25)',
                  }}
                />
              </div>
              <div
                style={{
                  width: '100%',
                  height: 90,
                  borderRadius: 14,
                  backgroundColor: 'rgba(51, 65, 85, 0.6)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Floating Dissonance Tag Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            border: '2px solid rgba(239, 68, 68, 0.6)',
            borderRadius: 20,
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            width: '82%',
            boxShadow: '0 12px 30px rgba(0,0,0,0.8)',
            zIndex: 20,
          }}
        >
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span style={{color: '#94A3B8', fontSize: 16, fontFamily: DESIGN_TOKENS.fonts.mono}}>
              BEHAVIOR:
            </span>
            <span style={{color: DESIGN_TOKENS.colors.wantingAmber, fontSize: 16, fontWeight: 700}}>
              CONTINUOUS (100%)
            </span>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span style={{color: '#94A3B8', fontSize: 16, fontFamily: DESIGN_TOKENS.fonts.mono}}>
              PLEASURE:
            </span>
            <span style={{color: DESIGN_TOKENS.colors.dangerRed, fontSize: 16, fontWeight: 700}}>
              ZERO / DISGUST (0%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
