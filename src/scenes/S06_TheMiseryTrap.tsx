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

  // Mechanical shudder on "brain screams"
  const screamTremor = Math.sin(frame * 0.7) * 4;

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
            <div style={{width: 24, height: 24, backgroundColor: '#E63946'}} />
            <div style={{width: 24, height: 24, borderRadius: '50%', backgroundColor: '#121212'}} />
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
              NEUROCHEMICAL DISSONANCE // 06
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
            FIG. 6.0
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
            THE PARADOX TRAP
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
            MAXIMUM URGE WITH{' '}
            <span
              style={{
                backgroundColor: '#E63946',
                color: '#FFFFFF',
                padding: '2px 14px',
                display: 'inline-block',
                boxShadow: '6px 6px 0 #121212',
              }}
            >
              ZERO JOY
            </span>
          </h1>
        </div>
      </div>

      {/* Center Brain Schematic (Divergence state with tremor) */}
      <div style={{margin: '14px auto 0 auto', display: 'flex', justifyContent: 'center', transform: `translateX(${screamTremor}px)`}}>
        <BrainDiagram mode="divergence" scale={0.76} />
      </div>

      {/* Clashing Dual Meter Cards in Side-by-Side Grid */}
      <div
        style={{
          width: '100%',
          maxWidth: 920,
          margin: '20px auto 0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
        }}
      >
        {/* Urge Meter (Maxed Out) */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '6px solid #121212',
            boxShadow: '8px 8px 0 #E63946',
            padding: '18px 20px',
          }}
        >
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
            <span
              style={{
                backgroundColor: '#FFB703',
                color: '#121212',
                padding: '3px 8px',
                fontSize: 13,
                fontWeight: 900,
                border: '2px solid #121212',
              }}
            >
              BRAIN SCREAMING
            </span>
            <span style={{fontSize: 20, fontWeight: 900, color: '#E63946'}}>
              100% MAX
            </span>
          </div>
          <div style={{fontSize: 18, fontWeight: 900, color: '#121212', marginBottom: 10}}>
            DOPAMINE PURSUIT
          </div>
          <div
            style={{
              width: '100%',
              height: 20,
              backgroundColor: '#F3EFE6',
              border: '4px solid #121212',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#E63946',
              }}
            />
          </div>
        </div>

        {/* Pleasure Meter (Flatline Zero) */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '6px solid #121212',
            boxShadow: '8px 8px 0 #121212',
            padding: '18px 20px',
          }}
        >
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
            <span
              style={{
                backgroundColor: '#121212',
                color: '#FFFFFF',
                padding: '3px 8px',
                fontSize: 13,
                fontWeight: 900,
              }}
            >
              HEDONIC FLATLINE
            </span>
            <span style={{fontSize: 20, fontWeight: 900, color: '#121212'}}>
              0% ZERO
            </span>
          </div>
          <div style={{fontSize: 18, fontWeight: 900, color: '#121212', marginBottom: 10}}>
            EXPERIENCED JOY
          </div>
          <div
            style={{
              width: '100%',
              height: 20,
              backgroundColor: '#F3EFE6',
              border: '4px solid #121212',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '0%',
                height: '100%',
                backgroundColor: '#1D3557',
              }}
            />
          </div>
        </div>
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
        <span style={{fontSize: 18, fontWeight: 700, color: '#1D3557'}}>THE NEUROLOGICAL MISERY TRAP</span>
      </div>
    </div>
  );
};

