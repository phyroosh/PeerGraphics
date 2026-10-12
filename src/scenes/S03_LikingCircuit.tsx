import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BrainDiagram} from '../components/BrainDiagram';
import {DESIGN_TOKENS} from '../design/tokens';

export const S03_LikingCircuit: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Soft hedonic pulse
  const pleasurePulse = 0.8 + 0.2 * Math.sin(frame * 0.15);

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
      {/* Circuit Badge */}
      <div
        style={{
          backgroundColor: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          borderRadius: 99,
          padding: '8px 24px',
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: DESIGN_TOKENS.colors.likingEmerald,
            boxShadow: `0 0 10px ${DESIGN_TOKENS.colors.likingEmerald}`,
          }}
        />
        <span
          style={{
            color: '#6EE7B7',
            fontFamily: DESIGN_TOKENS.fonts.mono,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Circuit A: Hedonic System
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
        <span style={{color: DESIGN_TOKENS.colors.likingEmerald}}>“Liking”</span> = Actual Pleasure
      </h1>

      {/* Brain Diagram in Liking Mode */}
      <div style={{marginBottom: 36}}>
        <BrainDiagram mode="liking" scale={1.05} />
      </div>

      {/* Scientific Deep-Dive Card */}
      <div
        style={{
          width: 900,
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          border: `2px solid ${DESIGN_TOKENS.colors.likingEmerald}`,
          borderRadius: 28,
          padding: '32px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          boxShadow: `0 16px 40px ${DESIGN_TOKENS.colors.likingEmeraldGlow}`,
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span style={{fontSize: 28, fontWeight: 800, color: '#A7F3D0'}}>
            Fragile Opioid Hotspots
          </span>
          <span
            style={{
              fontFamily: DESIGN_TOKENS.fonts.mono,
              fontSize: 20,
              color: '#34D399',
              backgroundColor: 'rgba(6, 78, 59, 0.6)',
              padding: '6px 16px',
              borderRadius: 12,
            }}
          >
            NAc Shell & Ventral Pallidum
          </span>
        </div>

        {/* Real Hedonic Meter */}
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#94A3B8'}}>
            <span>HEDONIC IMPACT (JOY)</span>
            <span style={{color: DESIGN_TOKENS.colors.likingEmerald, fontWeight: 700}}>
              {Math.round(85 * pleasurePulse)}% ACTIVE
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: 20,
              backgroundColor: 'rgba(30, 41, 59, 0.8)',
              borderRadius: 10,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${85 * pleasurePulse}%`,
                height: '100%',
                backgroundColor: DESIGN_TOKENS.colors.likingEmerald,
                boxShadow: `0 0 16px ${DESIGN_TOKENS.colors.likingEmerald}`,
                borderRadius: 10,
              }}
            />
          </div>
        </div>

        <p
          style={{
            margin: 0,
            fontSize: 24,
            color: '#CBD5E1',
            lineHeight: 1.45,
          }}
        >
          Tiny cubic-millimeter islands in the brain that generate the sensation of genuine contentment and sensory satisfaction.
        </p>
      </div>
    </div>
  );
};
