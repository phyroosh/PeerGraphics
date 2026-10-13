import React from 'react';

export const Theme11_SynthwaveOutrun: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#0D0221',
        backgroundImage: `
          radial-gradient(circle at 50% 32%, rgba(255, 0, 127, 0.25) 0%, rgba(13, 2, 33, 0) 65%),
          linear-gradient(180deg, #090117 0%, #19053B 45%, #2B0957 60%, #0D0221 100%)
        `,
        color: '#FFFFFF',
        fontFamily: "'Courier New', 'Lucida Console', monospace",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '110px 75px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Outrun Telemetry Bar */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #FF007F',
            boxShadow: '0 4px 15px rgba(255, 0, 127, 0.4)',
            paddingBottom: 18,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 14,
                height: 14,
                backgroundColor: '#00F0FF',
                boxShadow: '0 0 14px #00F0FF, 0 0 28px #00F0FF',
              }}
            />
            <span
              style={{
                fontSize: 24,
                letterSpacing: 4,
                color: '#00F0FF',
                fontWeight: 900,
                textShadow: '0 0 10px rgba(0, 240, 255, 0.7)',
              }}
            >
              CHRONO-RELATIVITY // 1984
            </span>
          </div>
          <span
            style={{
              fontSize: 22,
              color: '#FFB800',
              fontWeight: 700,
              letterSpacing: 3,
              textShadow: '0 0 8px rgba(255, 184, 0, 0.6)',
            }}
          >
            VELOCITY: 0.866 c
          </span>
        </div>

        {/* Category & Title */}
        <div style={{ marginTop: 36 }}>
          <div
            style={{
              fontSize: 28,
              color: '#00F0FF',
              letterSpacing: 8,
              fontWeight: 900,
              textTransform: 'uppercase',
              textShadow: '0 0 12px rgba(0, 240, 255, 0.6)',
            }}
          >
            EINSTEINIAN KINEMATICS
          </div>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 1.05,
              margin: '14px 0 0 0',
              letterSpacing: -1,
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE6FF 30%, #FF007F 80%, #7928CA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(255, 0, 127, 0.6))',
            }}
          >
            TIME<br />
            DILATION
          </h1>
        </div>
      </div>

      {/* Central Synthwave Vector Visual (3D Grid + Retro Sun + Light Clock) */}
      <div
        style={{
          position: 'relative',
          width: 930,
          height: 840,
          margin: '10px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="930" height="840" viewBox="0 0 930 840" style={{ overflow: 'visible' }}>
          <defs>
            {/* Retro Sun Gradient */}
            <linearGradient id="synthSun" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE600" />
              <stop offset="45%" stopColor="#FF007F" />
              <stop offset="100%" stopColor="#7928CA" />
            </linearGradient>

            {/* Neon Glow Filter */}
            <filter id="synthGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Laser Line Glow */}
            <filter id="laserGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Sliced Outrun Synthwave Sun */}
          <g>
            <circle cx="465" cy="300" r="190" fill="url(#synthSun)" filter="url(#synthGlow)" />
            <rect x="250" y="270" width="430" height="6" fill="#0D0221" />
            <rect x="250" y="295" width="430" height="10" fill="#0D0221" />
            <rect x="250" y="325" width="430" height="14" fill="#0D0221" />
            <rect x="250" y="360" width="430" height="18" fill="#0D0221" />
            <rect x="250" y="400" width="430" height="24" fill="#0D0221" />
            <rect x="250" y="445" width="430" height="30" fill="#0D0221" />
          </g>

          {/* Horizon Line */}
          <line
            x1="0"
            y1="500"
            x2="930"
            y2="500"
            stroke="#00F0FF"
            strokeWidth="4"
            filter="url(#laserGlow)"
          />

          {/* 3D Perspective Grid vanishing to horizon (465, 500) */}
          {[-700, -450, -200, 0, 150, 270, 370, 430, 465, 500, 560, 660, 780, 930, 1130, 1380, 1630].map((bx, i) => (
            <line
              key={i}
              x1="465"
              y1="500"
              x2={bx}
              y2="840"
              stroke="rgba(255, 0, 127, 0.45)"
              strokeWidth="2"
            />
          ))}

          {/* Horizontal Grid Traverse Lines in perspective */}
          {[520, 550, 590, 640, 705, 780, 840].map((gy, i) => (
            <line
              key={i}
              x1="0"
              y1={gy}
              x2="930"
              y2={gy}
              stroke="rgba(0, 240, 255, 0.4)"
              strokeWidth="1.5"
            />
          ))}

          {/* Special Relativity Light Clock Diagram Floating in 3D */}
          {/* Frame 1: Observer at Rest (v = 0) */}
          <g transform="translate(100, 180)">
            <rect
              x="0"
              y="0"
              width="240"
              height="280"
              rx="12"
              fill="rgba(13, 2, 33, 0.85)"
              stroke="#00F0FF"
              strokeWidth="2"
              filter="url(#synthGlow)"
            />
            <text x="120" y="32" textAnchor="middle" fill="#00F0FF" fontSize="16" fontWeight="bold">
              FRAME S [REST: v = 0]
            </text>
            <rect x="40" y="50" width="160" height="10" rx="3" fill="#FFE600" />
            <rect x="40" y="220" width="160" height="10" rx="3" fill="#FFE600" />
            <line x1="120" y1="60" x2="120" y2="220" stroke="#FF007F" strokeWidth="4" strokeDasharray="8 6" />
            <circle cx="120" cy="140" r="10" fill="#FF007F" filter="url(#laserGlow)" />
            <text x="120" y="258" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">
              Δt = 2L / c
            </text>
          </g>

          {/* Frame 2: Moving Observer (v = 0.866c) */}
          <g transform="translate(590, 180)">
            <rect
              x="0"
              y="0"
              width="240"
              height="280"
              rx="12"
              fill="rgba(13, 2, 33, 0.85)"
              stroke="#FF007F"
              strokeWidth="2"
              filter="url(#synthGlow)"
            />
            <text x="120" y="32" textAnchor="middle" fill="#FF007F" fontSize="16" fontWeight="bold">
              FRAME S' [v = 0.866 c]
            </text>
            <rect x="20" y="50" width="80" height="10" rx="3" fill="#FFE600" />
            <rect x="140" y="220" width="80" height="10" rx="3" fill="#FFE600" />
            <line x1="60" y1="60" x2="180" y2="220" stroke="#00F0FF" strokeWidth="4" strokeDasharray="8 6" />
            <circle cx="120" cy="140" r="10" fill="#00F0FF" filter="url(#laserGlow)" />
            <text x="120" y="258" textAnchor="middle" fill="#FFE600" fontSize="18" fontWeight="bold">
              Δt' = 2.00 × Δt
            </text>
          </g>

          {/* Center Relativistic Triangle */}
          <g transform="translate(370, 220)">
            <polygon
              points="0,170 190,170 95,30"
              fill="rgba(255, 0, 127, 0.12)"
              stroke="#FFE600"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <text x="95" y="105" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900">
              c Δt'
            </text>
            <text x="95" y="195" textAnchor="middle" fill="#00F0FF" fontSize="16" fontWeight="bold">
              v Δt'
            </text>
            <text x="-5" y="105" textAnchor="end" fill="#FF007F" fontSize="16" fontWeight="bold">
              L
            </text>
          </g>
        </svg>
      </div>

      {/* Analytical Callout HUD Box */}
      <div
        style={{
          width: '100%',
          backgroundColor: 'rgba(25, 5, 59, 0.75)',
          border: '2px solid #FF007F',
          boxShadow: '0 0 25px rgba(255, 0, 127, 0.35), inset 0 0 20px rgba(0, 240, 255, 0.15)',
          borderRadius: 8,
          padding: '28px 34px',
          boxSizing: 'border-box',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, fontWeight: 900, color: '#00F0FF', letterSpacing: 2 }}>
              LORENTZ FACTOR [γ]
            </span>
            <span
              style={{
                backgroundColor: '#FF007F',
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: 900,
                padding: '3px 12px',
                borderRadius: 4,
                boxShadow: '0 0 10px #FF007F',
              }}
            >
              EXACT: 2.0000×
            </span>
          </div>
          <span style={{ fontSize: 20, color: '#FFE600', fontWeight: 900 }}>
            Δt' = γ · Δt
          </span>
        </div>

        {/* Relativistic Progress Bar */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 17, fontWeight: 700, color: '#00F0FF', marginBottom: 6 }}>
            <span>FRACTION OF LIGHT SPEED [v / c]</span>
            <span>86.60% c</span>
          </div>
          <div
            style={{
              width: '100%',
              height: 18,
              backgroundColor: 'rgba(13, 2, 33, 0.8)',
              border: '1px solid #00F0FF',
              padding: 2,
            }}
          >
            <div
              style={{
                width: '86.6%',
                height: '100%',
                background: 'linear-gradient(90deg, #00F0FF 0%, #FF007F 80%, #FFE600 100%)',
                boxShadow: '0 0 12px #FF007F',
              }}
            />
          </div>
        </div>

        <p style={{ margin: 0, fontSize: 22, lineHeight: 1.45, color: '#E0E7FF', fontWeight: 500 }}>
          Because the speed of light <strong style={{ color: '#FFE600' }}>c</strong> is invariant across all frames, a photon bouncing between moving mirrors must trace a longer diagonal path. Therefore, 1 second on the moving craft equals exactly 2 seconds to the stationary observer.
        </p>
      </div>

      {/* Footer Cyber Telemetry Strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(0, 240, 255, 0.3)',
          paddingTop: 18,
          fontSize: 19,
          color: 'rgba(255, 255, 255, 0.65)',
        }}
      >
        <div style={{ display: 'flex', gap: 24 }}>
          <span>GEOMETRY: <strong style={{ color: '#00F0FF' }}>MINKOWSKI 4D</strong></span>
          <span>INVARIANCE: <strong style={{ color: '#FF007F' }}>c = 299,792 km/s</strong></span>
        </div>
        <span style={{ color: '#FFE600', fontWeight: 700 }}>SYNTHWAVE // VECTORS</span>
      </div>
    </div>
  );
};
