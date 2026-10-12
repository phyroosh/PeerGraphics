import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BrainDiagram} from '../components/BrainDiagram';
import {DESIGN_TOKENS} from '../design/tokens';

export const S06_TheMiseryTrap: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Violent urge pulse ("screams that you need it")
  const screamTremor = Math.sin(frame * 0.6) * 4;

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
      {/* Alert Badge */}
      <div
        style={{
          backgroundColor: 'rgba(239, 68, 68, 0.2)',
          border: '1px solid rgba(239, 68, 68, 0.5)',
          borderRadius: 99,
          padding: '8px 24px',
          marginBottom: 20,
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
            backgroundColor: DESIGN_TOKENS.colors.dangerRed,
            boxShadow: `0 0 14px ${DESIGN_TOKENS.colors.dangerRed}`,
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
          Internal Biological Conflict
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
          margin: '0 0 28px 0',
        }}
      >
        The Misery Trap
      </h1>

      {/* Brain Diagram in Divergence Mode with slight tremor */}
      <div style={{marginBottom: 36, transform: `translateX(${screamTremor}px)`}}>
        <BrainDiagram mode="divergence" scale={1.0} />
      </div>

      {/* The Two Clashing Meters */}
      <div
        style={{
          width: 900,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        {/* Urge Meter (Maxed out / Screaming) */}
        <div
          style={{
            backgroundColor: 'rgba(124, 45, 18, 0.45)',
            border: `2px solid ${DESIGN_TOKENS.colors.wantingAmber}`,
            borderRadius: 24,
            padding: '24px 28px',
            boxShadow: `0 12px 30px ${DESIGN_TOKENS.colors.wantingAmberGlow}`,
          }}
        >
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 12}}>
            <span style={{fontSize: 26, fontWeight: 800, color: '#FED7AA'}}>
              DOPAMINE URGE (BRAIN SCREAMING)
            </span>
            <span style={{fontSize: 26, fontWeight: 900, color: DESIGN_TOKENS.colors.wantingAmber}}>
              100% MAXIMUM
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: 24,
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: DESIGN_TOKENS.colors.wantingAmber,
                boxShadow: `0 0 24px ${DESIGN_TOKENS.colors.wantingAmber}`,
                borderRadius: 12,
              }}
            />
          </div>
        </div>

        {/* Pleasure Meter (Flatlined / Zero) */}
        <div
          style={{
            backgroundColor: 'rgba(30, 41, 59, 0.7)',
            border: `2px solid ${DESIGN_TOKENS.colors.dangerRed}`,
            borderRadius: 24,
            padding: '24px 28px',
            boxShadow: `0 12px 30px ${DESIGN_TOKENS.colors.dangerRedGlow}`,
          }}
        >
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 12}}>
            <span style={{fontSize: 26, fontWeight: 800, color: '#CBD5E1'}}>
              ACTUAL PLEASURE (JOY RECEIVED)
            </span>
            <span style={{fontSize: 26, fontWeight: 900, color: DESIGN_TOKENS.colors.dangerRed}}>
              0% FLATLINE
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: 24,
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '2%',
                height: '100%',
                backgroundColor: DESIGN_TOKENS.colors.dangerRed,
                borderRadius: 12,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
