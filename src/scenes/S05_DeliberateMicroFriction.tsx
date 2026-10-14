import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

export const S05_DeliberateMicroFriction: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Entrance springs
  const headerEntrance = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.snappy,
  });

  const cardsEntrance = spring({
    frame: frame - 20,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Staggered reveal of the 3 friction actions
  const coldEntrance = spring({
    frame: frame - 60,
    fps,
    config: DESIGN_TOKENS.spring.snappy,
  });
  const phoneEntrance = spring({
    frame: frame - 120,
    fps,
    config: DESIGN_TOKENS.spring.snappy,
  });
  const taskEntrance = spring({
    frame: frame - 180,
    fps,
    config: DESIGN_TOKENS.spring.snappy,
  });

  // Final Stamp Entrance (Frame 260+)
  const stampEntrance = spring({
    frame: frame - 260,
    fps,
    config: {damping: 10, mass: 0.8, stiffness: 180},
  });

  // Kinetic sparks
  const sparkAnim = Math.sin(frame * 0.3) * 8;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* ------------------------------------------------------------- */}
      {/* TOP HEADER SECTION (Safe Zone: y >= 160px)                     */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 175,
          left: DESIGN_TOKENS.safeArea.left,
          right: DESIGN_TOKENS.safeArea.right,
          transform: `translateY(${interpolate(headerEntrance, [0, 1], [-60, 0])}px)`,
          opacity: headerEntrance,
        }}
      >
        <div
          style={{
            display: 'inline-block',
            backgroundColor: '#00E5FF',
            color: '#111111',
            border: '4px solid #111111',
            boxShadow: '6px 6px 0 #111111',
            padding: '8px 24px',
            borderRadius: 8,
            fontSize: 34,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: 16,
            transform: 'rotate(-1deg)',
          }}
        >
          THE ACTIONABLE ANTIDOTE
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 80,
            fontWeight: 900,
            lineHeight: 1.05,
            color: '#111111',
            fontFamily: DESIGN_TOKENS.fonts.display,
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
          }}
        >
          CHOOSE DELIBERATE{' '}
          <span
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              padding: '0 14px',
              border: '4px solid #111111',
              boxShadow: '6px 6px 0 #111111',
              display: 'inline-block',
              transform: 'rotate(1.5deg)',
            }}
          >
            FRICTION
          </span>
        </h1>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CENTER FOCAL: 3-WAY MICRO-FRICTION MATRIX (y: 450 - 1060)      */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 450,
          left: DESIGN_TOKENS.safeArea.left,
          right: DESIGN_TOKENS.safeArea.right,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        {/* CARD 1: COLD WATER */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '5px solid #111111',
            boxShadow: '8px 8px 0 #111111',
            borderRadius: 16,
            padding: '18px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            transform: `scale(${interpolate(coldEntrance, [0, 1], [0.85, 1])})`,
            opacity: coldEntrance,
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: '50%',
              backgroundColor: '#00E5FF',
              border: '4px solid #111111',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 44,
              boxShadow: '4px 4px 0 #111111',
            }}
          >
            ❄️
          </div>
          <div style={{flex: 1}}>
            <div
              style={{
                fontSize: 38,
                fontWeight: 900,
                color: '#111111',
                fontFamily: DESIGN_TOKENS.fonts.display,
              }}
            >
              5 MIN COLD WATER
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#008599',
                marginTop: 4,
              }}
            >
              Visceral physical resistance
            </div>
          </div>
          <span
            style={{
              backgroundColor: '#FFE600',
              padding: '6px 14px',
              border: '3px solid #111111',
              borderRadius: 6,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            STEP 01
          </span>
        </div>

        {/* CARD 2: DELAY PHONE */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '5px solid #111111',
            boxShadow: '8px 8px 0 #111111',
            borderRadius: 16,
            padding: '18px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            transform: `scale(${interpolate(phoneEntrance, [0, 1], [0.85, 1])})`,
            opacity: phoneEntrance,
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: '50%',
              backgroundColor: '#FFE600',
              border: '4px solid #111111',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 44,
              boxShadow: '4px 4px 0 #111111',
            }}
          >
            📵
          </div>
          <div style={{flex: 1}}>
            <div
              style={{
                fontSize: 38,
                fontWeight: 900,
                color: '#111111',
                fontFamily: DESIGN_TOKENS.fonts.display,
              }}
            >
              DELAY PHONE CHECK
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#B3003B',
                marginTop: 4,
              }}
            >
              Impulse & craving inhibition
            </div>
          </div>
          <span
            style={{
              backgroundColor: '#FF0055',
              color: '#FFFFFF',
              padding: '6px 14px',
              border: '3px solid #111111',
              borderRadius: 6,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            STEP 02
          </span>
        </div>

        {/* CARD 3: HARDEST TASK FIRST */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '5px solid #111111',
            boxShadow: '8px 8px 0 #111111',
            borderRadius: 16,
            padding: '18px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            transform: `scale(${interpolate(taskEntrance, [0, 1], [0.85, 1])})`,
            opacity: taskEntrance,
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: '50%',
              backgroundColor: '#FF0055',
              border: '4px solid #111111',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 44,
              boxShadow: '4px 4px 0 #111111',
            }}
          >
            ⚡
          </div>
          <div style={{flex: 1}}>
            <div
              style={{
                fontSize: 38,
                fontWeight: 900,
                color: '#111111',
                fontFamily: DESIGN_TOKENS.fonts.display,
              }}
            >
              HARDEST TASK FIRST
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#555555',
                marginTop: 4,
              }}
            >
              Overcoming friction before ease
            </div>
          </div>
          <span
            style={{
              backgroundColor: '#00E5FF',
              padding: '6px 14px',
              border: '3px solid #111111',
              borderRadius: 6,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            STEP 03
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* LOWER SECTION: RESOLUTION BANNER & GOLDEN STAMP (y: 1040 - 1380) */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 1070,
          left: DESIGN_TOKENS.safeArea.left,
          right: DESIGN_TOKENS.safeArea.right,
          backgroundColor: '#FFFFFF',
          border: '5px solid #111111',
          boxShadow: '10px 10px 0 #111111',
          borderRadius: 16,
          padding: '24px 32px',
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12}}>
          <span
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: '#FF0055',
              fontFamily: DESIGN_TOKENS.fonts.display,
            }}
          >
            THE DAILY FORMULA
          </span>
          <span
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              padding: '4px 14px',
              border: '3px solid #111111',
              borderRadius: 6,
              fontSize: 32,
              fontWeight: 900,
            }}
          >
            RENEWAL
          </span>
        </div>

        <div
          style={{
            fontSize: 38,
            fontWeight: 800,
            color: '#111111',
            lineHeight: 1.25,
            fontFamily: DESIGN_TOKENS.fonts.primary,
          }}
        >
          Do it solely because your brain resists it.
        </div>

        <div
          style={{
            marginTop: 8,
            fontSize: 34,
            fontWeight: 900,
            color: '#008599',
          }}
        >
          That spark keeps the aMCC from shrinking.
        </div>
      </div>

      {/* Final Victory Stamp (Frames 260+) */}
      {stampEntrance > 0.05 && (
        <div
          style={{
            position: 'absolute',
            top: 720,
            left: 200,
            right: 200,
            transform: `scale(${interpolate(stampEntrance, [0, 1], [2.2, 1])}) rotate(-5deg)`,
            opacity: stampEntrance,
            zIndex: 40,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              border: '8px solid #111111',
              boxShadow: '14px 14px 0 #111111',
              padding: '24px 44px',
              borderRadius: 20,
              fontSize: 48,
              fontWeight: 900,
              textAlign: 'center',
              fontFamily: DESIGN_TOKENS.fonts.display,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}
          >
            SEEK DAILY FRICTION
          </div>
        </div>
      )}
    </div>
  );
};
