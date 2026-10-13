import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
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

  // Cards snap in when voice introduces them (~frame 70)
  const cardsReveal = spring({
    frame: frame - 60,
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
              NEUROLOGICAL DISSOCIATION // 02
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
            FIG. 2.0
          </span>
        </div>

        {/* Headline */}
        <div style={{marginTop: 28}}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: '#1D3557',
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            THE BRAIN’S DUAL ARCHITECTURE
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
            LIKING & WANTING ARE{' '}
            <span
              style={{
                backgroundColor: '#E63946',
                color: '#FFFFFF',
                padding: '2px 14px',
                display: 'inline-block',
                boxShadow: '6px 6px 0 #121212',
              }}
            >
              SEPARATE SYSTEMS
            </span>
          </h1>
        </div>
      </div>

      {/* Center Visual: Scaled Brain Diagram Schematic */}
      <div style={{margin: '14px auto 0 auto', display: 'flex', justifyContent: 'center'}}>
        <BrainDiagram mode="overview" scale={0.76} />
      </div>

      {/* Comparison Cards: Positioned cleanly above captions safe zone */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 60px 1fr',
          gap: 16,
          width: '100%',
          maxWidth: 920,
          margin: '20px auto 0 auto',
          alignItems: 'center',
          opacity: cardsReveal,
          transform: `translateY(${(1 - cardsReveal) * 20}px)`,
        }}
      >
        {/* Card 1: LIKING */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '6px solid #121212',
            boxShadow: '8px 8px 0 #121212',
            padding: '20px 18px',
            position: 'relative',
          }}
        >
          <div
            style={{
              backgroundColor: '#1D3557',
              color: '#FFFFFF',
              padding: '4px 10px',
              fontSize: 14,
              fontWeight: 900,
              letterSpacing: 1,
              display: 'inline-block',
              marginBottom: 8,
            }}
          >
            CIRCUIT 01
          </div>
          <div style={{fontSize: 38, fontWeight: 900, color: '#1D3557', letterSpacing: -1}}>
            LIKING
          </div>
          <div style={{fontSize: 20, fontWeight: 800, color: '#121212', marginTop: 4}}>
            Actual Pleasure & Joy
          </div>
          <div style={{fontSize: 15, fontWeight: 700, color: '#666', marginTop: 6}}>
            Medium: Endogenous Opioids
          </div>
        </div>

        {/* Separator Symbol */}
        <div
          style={{
            textAlign: 'center',
            fontSize: 52,
            fontWeight: 900,
            color: '#121212',
            fontFamily: DESIGN_TOKENS.fonts.mono,
          }}
        >
          ≠
        </div>

        {/* Card 2: WANTING */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '6px solid #121212',
            boxShadow: '8px 8px 0 #E63946',
            padding: '20px 18px',
            position: 'relative',
          }}
        >
          <div
            style={{
              backgroundColor: '#E63946',
              color: '#FFFFFF',
              padding: '4px 10px',
              fontSize: 14,
              fontWeight: 900,
              letterSpacing: 1,
              display: 'inline-block',
              marginBottom: 8,
            }}
          >
            CIRCUIT 02
          </div>
          <div style={{fontSize: 38, fontWeight: 900, color: '#E63946', letterSpacing: -1}}>
            WANTING
          </div>
          <div style={{fontSize: 20, fontWeight: 800, color: '#121212', marginTop: 4}}>
            The Raw Urge to Pursue
          </div>
          <div style={{fontSize: 15, fontWeight: 700, color: '#666', marginTop: 6}}>
            Medium: Mesolimbic Dopamine
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
        <span style={{fontSize: 18, fontWeight: 700, color: '#1D3557'}}>BERRIDGE (1993) // HEDONIC DISSOCIATION</span>
      </div>
    </div>
  );
};


