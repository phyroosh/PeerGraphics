import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BrainDiagram} from '../components/BrainDiagram';
import {DESIGN_TOKENS} from '../design/tokens';

export const S04_WantingCircuit: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Surge on dopamine
  const dopamineSurge = interpolate(frame, [0, 60], [30, 96], {
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
        paddingTop: DESIGN_TOKENS.safeArea.top + 20,
        opacity: entry,
      }}
    >
      {/* Circuit Badge */}
      <div
        style={{
          backgroundColor: 'rgba(249, 115, 22, 0.15)',
          border: '1px solid rgba(249, 115, 22, 0.4)',
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
            backgroundColor: DESIGN_TOKENS.colors.wantingAmber,
            boxShadow: `0 0 12px ${DESIGN_TOKENS.colors.wantingAmber}`,
          }}
        />
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
          Circuit B: Motivation Engine
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
        <span style={{color: DESIGN_TOKENS.colors.wantingAmber}}>“Wanting”</span> = Raw Seeking Urge
      </h1>

      {/* Brain Diagram in Wanting Mode */}
      <div style={{marginBottom: 36}}>
        <BrainDiagram mode="wanting" scale={1.05} />
      </div>

      {/* Scientific Deep-Dive Card */}
      <div
        style={{
          width: 900,
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          border: `2px solid ${DESIGN_TOKENS.colors.wantingAmber}`,
          borderRadius: 28,
          padding: '32px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          boxShadow: `0 16px 40px ${DESIGN_TOKENS.colors.wantingAmberGlow}`,
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span style={{fontSize: 28, fontWeight: 800, color: '#FED7AA'}}>
            Mesolimbic Dopamine
          </span>
          <span
            style={{
              fontFamily: DESIGN_TOKENS.fonts.mono,
              fontSize: 20,
              color: '#FB923C',
              backgroundColor: 'rgba(124, 45, 18, 0.6)',
              padding: '6px 16px',
              borderRadius: 12,
            }}
          >
            VTA → Striatum Projection
          </span>
        </div>

        {/* Real Urge Meter */}
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#94A3B8'}}>
            <span>INCENTIVE SALIENCE (DRIVE TO CHASE)</span>
            <span style={{color: DESIGN_TOKENS.colors.wantingAmber, fontWeight: 700}}>
              {Math.round(dopamineSurge)}% PEAK SURGE
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
                width: `${dopamineSurge}%`,
                height: '100%',
                backgroundColor: DESIGN_TOKENS.colors.wantingAmber,
                boxShadow: `0 0 20px ${DESIGN_TOKENS.colors.wantingAmber}`,
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
          Dopamine doesn't make you enjoy the reward—it makes your attention snap toward the cue and compels your body to pursue it.
        </p>
      </div>
    </div>
  );
};
