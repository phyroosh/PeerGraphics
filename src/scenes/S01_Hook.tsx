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

  // Endless mechanical scroll offset
  const scrollOffset = (frame * 10) % 260;

  // Conflict pulse on "actively hate" (around frame 60)
  const hatePulse = interpolate(frame, [50, 70, 95], [0, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
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
      {/* Bauhaus Top Header Banner */}
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
            <div style={{width: 24, height: 24, borderRadius: '50%', backgroundColor: '#1D3557'}} />
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
              BEHAVIORAL PARADOX // 01
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
            FIG. 1.0
          </span>
        </div>

        {/* Headline */}
        <div style={{marginTop: 32}}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: '#E63946',
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            THE COMPULSION LOOP
          </div>
          <h1
            style={{
              fontSize: 74,
              fontWeight: 900,
              lineHeight: 1.05,
              margin: '14px 0 0 0',
              letterSpacing: -2,
              textTransform: 'uppercase',
            }}
          >
            EVER STUCK IN A HABIT YOU{' '}
            <span
              style={{
                backgroundColor: hatePulse > 0.5 ? '#121212' : '#E63946',
                color: '#FFFFFF',
                padding: '4px 16px',
                display: 'inline-block',
                boxShadow: '6px 6px 0 #121212',
              }}
            >
              ACTIVELY HATE?
            </span>
          </h1>
        </div>
      </div>

      {/* Center Visual: Brutalist Device / Infinite Scroll Card */}
      <div
        style={{
          width: '100%',
          maxWidth: 920,
          margin: '36px auto 0 auto',
          display: 'flex',
          gap: 28,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Device Viewport Card */}
        <div
          style={{
            width: 440,
            height: 520,
            backgroundColor: '#FFFFFF',
            border: '6px solid #121212',
            boxShadow: '10px 10px 0 #121212',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Brutalist Phone Top Notch */}
          <div
            style={{
              backgroundColor: '#121212',
              color: '#F3EFE6',
              padding: '8px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            <span>LOOP_ENGINE.SYS</span>
            <span style={{color: '#FFB703'}}>REC ●</span>
          </div>

          {/* Endless Mechanical Feed */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              padding: 20,
              transform: `translateY(-${scrollOffset}px)`,
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  backgroundColor: i % 2 === 0 ? '#F3EFE6' : '#FFFFFF',
                  border: '4px solid #121212',
                  padding: '16px 14px',
                  boxShadow: '4px 4px 0 #121212',
                }}
              >
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                  <span style={{fontSize: 14, fontWeight: 900, color: '#1D3557'}}>ITEM // 0{i + 1}</span>
                  <span style={{fontSize: 12, fontWeight: 800, backgroundColor: '#E63946', color: '#FFF', padding: '2px 6px'}}>
                    DOOMSCROLL
                  </span>
                </div>
                <div style={{height: 40, backgroundColor: '#121212', opacity: 0.08, marginBottom: 8}} />
                <div style={{fontSize: 13, fontWeight: 800, color: '#444'}}>
                  REPEAT CYCLE : AUTOMATED
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side Analytical Callout Chips */}
        <div style={{display: 'flex', flexDirection: 'column', gap: 20, flex: 1}}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '6px solid #121212',
              boxShadow: '8px 8px 0 #121212',
              padding: '24px 20px',
            }}
          >
            <div style={{fontSize: 16, fontWeight: 900, color: '#666', letterSpacing: 2}}>
              PHYSIOLOGICAL STATE
            </div>
            <div style={{fontSize: 34, fontWeight: 900, color: '#E63946', marginTop: 8}}>
              ACTION: 100%
            </div>
            <div style={{fontSize: 18, fontWeight: 700, color: '#121212', marginTop: 4}}>
              Compulsive Pursuit
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#121212',
              color: '#FFFFFF',
              border: '6px solid #121212',
              boxShadow: '8px 8px 0 #E63946',
              padding: '24px 20px',
            }}
          >
            <div style={{fontSize: 16, fontWeight: 900, color: '#FFB703', letterSpacing: 2}}>
              SUBJECTIVE PLEASURE
            </div>
            <div style={{fontSize: 34, fontWeight: 900, color: '#FFFFFF', marginTop: 8}}>
              JOY: 0% / HATE
            </div>
            <div style={{fontSize: 18, fontWeight: 700, color: '#CCC', marginTop: 4}}>
              Hedonic Flatline
            </div>
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
        <span style={{fontSize: 18, fontWeight: 700, color: '#1D3557'}}>BERRIDGE LAB // INCENTIVE SALIENCE</span>
      </div>
    </div>
  );
};


