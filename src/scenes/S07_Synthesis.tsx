import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

export const S07_Synthesis: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
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
              SYNTHESIS & RESOLUTION // 07
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
            FIG. 7.0
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
            THE SCIENTIFIC VERDICT
          </div>
          <h2
            style={{
              fontSize: 50,
              fontWeight: 900,
              lineHeight: 1.1,
              margin: '12px 0 0 0',
              letterSpacing: -1,
              textTransform: 'uppercase',
              color: '#121212',
            }}
          >
            YOU ARE NOT CHASING PLEASURE ANYMORE.
          </h2>
        </div>
      </div>

      {/* Hero Poster Centerpiece Card */}
      <div
        style={{
          width: '100%',
          maxWidth: 920,
          margin: '24px auto 0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {/* Massive Vermilion Hero Box */}
        <div
          style={{
            backgroundColor: '#E63946',
            color: '#FFFFFF',
            border: '6px solid #121212',
            boxShadow: '10px 10px 0 #121212',
            padding: '28px 28px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -14,
              right: 20,
              backgroundColor: '#FFB703',
              color: '#121212',
              padding: '4px 12px',
              fontSize: 14,
              fontWeight: 900,
              border: '2px solid #121212',
            }}
          >
            THE BIOLOGICAL TRAP
          </div>

          <h1
            style={{
              fontSize: 62,
              fontWeight: 900,
              lineHeight: 1.05,
              margin: '4px 0 0 0',
              letterSpacing: -2,
              textTransform: 'uppercase',
            }}
          >
            YOU ARE TRAPPED<br />IN WANTING.
          </h1>
        </div>

        {/* Analytical Explanation Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '6px solid #121212',
            boxShadow: '8px 8px 0 #121212',
            padding: '20px 24px',
          }}
        >
          <div style={{fontSize: 21, fontWeight: 700, color: '#121212', lineHeight: 1.4}}>
            The pleasure left long ago through tolerance. Your dopamine pursuit hardware was hyper-sensitized to environmental triggers.
          </div>
        </div>

        {/* Strategic Insight Strip */}
        <div
          style={{
            backgroundColor: '#FFB703',
            color: '#121212',
            border: '4px solid #121212',
            boxShadow: '6px 6px 0 #121212',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <span style={{fontSize: 22, fontWeight: 900}}>TAKEAWAY:</span>
          <span style={{fontSize: 18, fontWeight: 800, lineHeight: 1.3}}>
            Do not fight cravings with willpower alone. Alter the environment to remove the cues that trigger dopamine sensitization.
          </span>
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
        <span style={{fontSize: 18, fontWeight: 700, color: '#1D3557'}}>BERRIDGE & ROBINSON (1993, 2016)</span>
      </div>
    </div>
  );
};

