import React from 'react';

export const Theme17_MemphisMilano: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#FFE600',
        backgroundImage: `
          radial-gradient(#121212 15%, transparent 16%),
          radial-gradient(#121212 15%, transparent 16%)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 20px',
        color: '#121212',
        fontFamily: "'Arial Black', 'Impact', 'Trebuchet MS', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '110px 75px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Memphis Top Bar with Hard Drop Shadow */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#00F0FF',
            border: '6px solid #121212',
            boxShadow: '10px 10px 0 #121212',
            padding: '16px 26px',
            transform: 'rotate(-1deg)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 22,
                height: 22,
                backgroundColor: '#FF2A85',
                border: '3px solid #121212',
              }}
            />
            <span
              style={{
                fontSize: 22,
                letterSpacing: 3,
                color: '#121212',
                fontWeight: 900,
                textTransform: 'uppercase',
              }}
            >
              MEMPHIS LAB • MILANO 1981
            </span>
          </div>
          <span
            style={{
              backgroundColor: '#121212',
              color: '#FFE600',
              fontWeight: 900,
              fontSize: 18,
              padding: '6px 14px',
            }}
          >
            NON-LINEAR DYNAMICS
          </span>
        </div>

        {/* Explosive Pop Art Headline */}
        <div style={{ marginTop: 36 }}>
          <div
            style={{
              display: 'inline-block',
              backgroundColor: '#FF2A85',
              color: '#FFFFFF',
              border: '4px solid #121212',
              boxShadow: '6px 6px 0 #121212',
              fontSize: 24,
              letterSpacing: 4,
              fontWeight: 900,
              padding: '6px 18px',
              textTransform: 'uppercase',
              transform: 'rotate(1.5deg)',
            }}
          >
            DETERMINISTIC CHAOS
          </div>
          <h1
            style={{
              fontSize: 90,
              fontWeight: 900,
              lineHeight: 1.02,
              margin: '18px 0 0 0',
              color: '#121212',
              textShadow: '8px 8px 0 #00F0FF, 14px 14px 0 #FF2A85',
              letterSpacing: -2,
              textTransform: 'uppercase',
            }}
          >
            THE LORENZ<br />
            ATTRACTOR
          </h1>
        </div>
      </div>

      {/* Center Memphis Vector Playground (Lorenz Butterfly Attractor) */}
      <div
        style={{
          position: 'relative',
          width: 930,
          height: 840,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="930" height="840" viewBox="0 0 930 840" style={{ overflow: 'visible' }}>
          {/* Memphis Decorative Zigzags & Geometrics */}
          <path
            d="M 60 140 L 90 100 L 120 140 L 150 100 L 180 140 L 210 100"
            fill="none"
            stroke="#121212"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="820" cy="120" r="45" fill="#FF2A85" stroke="#121212" strokeWidth="6" />
          <rect x="760" y="680" width="80" height="80" fill="#00F0FF" stroke="#121212" strokeWidth="6" transform="rotate(25 800 720)" />

          {/* Central Card with Massive Hard Shadow */}
          <rect
            x="70"
            y="170"
            width="790"
            height="560"
            fill="#FFFFFF"
            stroke="#121212"
            strokeWidth="7"
          />
          <rect
            x="85"
            y="185"
            width="790"
            height="560"
            fill="#121212"
            style={{ zIndex: -1 }}
          />

          {/* White Canvas Interior Re-overlay for clear border */}
          <rect
            x="70"
            y="170"
            width="790"
            height="560"
            fill="#FFFFFF"
            stroke="#121212"
            strokeWidth="7"
          />

          {/* Lorenz Butterfly Wings 2D Projection */}
          {/* Left Wing Loops */}
          <path
            d="M 465 450 C 350 350, 200 240, 200 420 C 200 580, 360 620, 465 450 Z"
            fill="rgba(0, 240, 255, 0.25)"
            stroke="#00F0FF"
            strokeWidth="8"
          />
          <path
            d="M 465 450 C 370 370, 260 280, 250 400 C 240 520, 380 560, 465 450 Z"
            fill="none"
            stroke="#121212"
            strokeWidth="4"
          />
          <path
            d="M 465 450 C 390 390, 310 320, 300 400 C 290 480, 390 520, 465 450 Z"
            fill="none"
            stroke="#FF2A85"
            strokeWidth="5"
          />

          {/* Right Wing Loops */}
          <path
            d="M 465 450 C 580 350, 730 240, 730 420 C 730 580, 570 620, 465 450 Z"
            fill="rgba(255, 42, 133, 0.25)"
            stroke="#FF2A85"
            strokeWidth="8"
          />
          <path
            d="M 465 450 C 560 370, 670 280, 680 400 C 690 520, 550 560, 465 450 Z"
            fill="none"
            stroke="#121212"
            strokeWidth="4"
          />
          <path
            d="M 465 450 C 540 390, 620 320, 630 400 C 640 480, 540 520, 465 450 Z"
            fill="none"
            stroke="#00F0FF"
            strokeWidth="5"
          />

          {/* Attractor Saddle Point Node */}
          <circle cx="465" cy="450" r="16" fill="#FFE600" stroke="#121212" strokeWidth="6" />

          {/* Floating Memphis Equations Badges */}
          <g transform="translate(100, 200)">
            <rect x="0" y="0" width="190" height="42" fill="#FF2A85" stroke="#121212" strokeWidth="4" />
            <text x="95" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">
              dx/dt = σ(y - x)
            </text>
          </g>

          <g transform="translate(640, 200)">
            <rect x="0" y="0" width="190" height="42" fill="#00F0FF" stroke="#121212" strokeWidth="4" />
            <text x="95" y="28" textAnchor="middle" fill="#121212" fontSize="18" fontWeight="bold">
              dy/dt = x(ρ - z) - y
            </text>
          </g>

          <g transform="translate(370, 660)">
            <rect x="0" y="0" width="190" height="42" fill="#FFE600" stroke="#121212" strokeWidth="4" />
            <text x="95" y="28" textAnchor="middle" fill="#121212" fontSize="18" fontWeight="bold">
              dz/dt = xy - βz
            </text>
          </g>
        </svg>
      </div>

      {/* Analytical Memphis Callout Box with Hard Shadow */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          border: '6px solid #121212',
          boxShadow: '10px 10px 0 #121212',
          padding: '28px 34px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 22, fontWeight: 900, color: '#121212' }}>
              THE BUTTERFLY EFFECT [SENSITIVE DEPENDENCE]
            </span>
          </div>
          <span
            style={{
              backgroundColor: '#FF2A85',
              color: '#FFFFFF',
              border: '3px solid #121212',
              fontSize: 16,
              fontWeight: 900,
              padding: '4px 14px',
            }}
          >
            λ &gt; 0 [CHAOS]
          </span>
        </div>

        <p style={{ margin: 0, fontSize: 22, lineHeight: 1.4, color: '#121212', fontWeight: 600 }}>
          Two trajectories with starting conditions differing by 0.000001% diverge exponentially over time into completely different orbits. The system is 100% deterministic, yet fundamentally unpredictable.
        </p>
      </div>

      {/* Footer Memphis Strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#121212',
          color: '#FFE600',
          padding: '14px 24px',
          fontSize: 18,
          fontWeight: 900,
        }}
      >
        <span>POSTMODERN MATHEMATICAL SYSTEM</span>
        <span style={{ color: '#00F0FF' }}>MEMPHIS MILANO</span>
      </div>
    </div>
  );
};
