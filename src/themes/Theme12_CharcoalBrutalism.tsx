import React from 'react';

export const Theme12_CharcoalBrutalism: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#121316',
        backgroundImage: `
          radial-gradient(circle at 85% 15%, rgba(255, 87, 34, 0.08) 0%, transparent 40%),
          linear-gradient(rgba(244, 244, 245, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(244, 244, 245, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        color: '#F4F4F5',
        fontFamily: "system-ui, -apple-system, 'SF Pro Display', 'Inter', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '110px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Architectural Header */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            borderBottom: '2px solid #27272A',
            paddingBottom: 22,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 10, height: 10, backgroundColor: '#FF5722' }} />
              <span
                style={{
                  fontSize: 20,
                  letterSpacing: 5,
                  color: '#A1A1AA',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                }}
              >
                STRUCTURAL MECHANICS // LAB.08
              </span>
            </div>
            <div style={{ fontSize: 15, color: '#71717A', letterSpacing: 2, marginTop: 6 }}>
              COORDINATES: [LAT 47.3769° N, LONG 8.5417° E] • ZURICH
            </div>
          </div>
          <div
            style={{
              border: '1px solid #3F3F46',
              padding: '6px 14px',
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: 2,
              color: '#FF5722',
            }}
          >
            FIG. 04-A
          </div>
        </div>

        {/* Big Bold Brutalist Headline */}
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              fontSize: 24,
              color: '#FF5722',
              letterSpacing: 6,
              fontWeight: 900,
              textTransform: 'uppercase',
            }}
          >
            DISCONTINUOUS COMPRESSION
          </div>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 1.0,
              margin: '16px 0 0 0',
              letterSpacing: -2,
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}
          >
            TENSEGRITY<br />
            EQUILIBRIUM
          </h1>
        </div>
      </div>

      {/* Center Architectural Tensegrity Diagram */}
      <div
        style={{
          position: 'relative',
          width: 920,
          height: 840,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="920" height="840" viewBox="0 0 920 840" style={{ overflow: 'visible' }}>
          {/* Subtle Coordinate Axis and Dimension Circles */}
          <circle cx="460" cy="420" r="360" fill="none" stroke="#27272A" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="460" cy="420" r="220" fill="none" stroke="#27272A" strokeWidth="1" />
          <line x1="60" y1="420" x2="860" y2="420" stroke="#27272A" strokeWidth="1" />
          <line x1="460" y1="40" x2="460" y2="800" stroke="#27272A" strokeWidth="1" />

          {/* Dimension tick marks */}
          {[-300, -200, -100, 100, 200, 300].map((dx, i) => (
            <line key={i} x1={460 + dx} y1="414" x2={460 + dx} y2="426" stroke="#52525B" strokeWidth="1.5" />
          ))}

          {/* Continuous Tension Network (Dashed cables) */}
          <polygon
            points="240,240 680,210 760,590 470,720 180,550"
            fill="rgba(255, 87, 34, 0.03)"
            stroke="#71717A"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <polygon
            points="460,150 780,420 540,680 140,430"
            fill="none"
            stroke="#A1A1AA"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Tension cross-bracing ties */}
          <line x1="240" y1="240" x2="760" y2="590" stroke="#FF5722" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="8 6" />
          <line x1="680" y1="210" x2="180" y2="550" stroke="#FF5722" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="8 6" />
          <line x1="460" y1="150" x2="470" y2="720" stroke="#FF5722" strokeWidth="2" strokeOpacity="0.8" />

          {/* Floating Solid Compression Struts (Thick Bars with Metal Endcaps) */}
          {/* Strut A */}
          <line x1="220" y1="260" x2="680" y2="580" stroke="#F4F4F5" strokeWidth="18" strokeLinecap="round" />
          <line x1="220" y1="260" x2="680" y2="580" stroke="#121316" strokeWidth="6" strokeLinecap="round" />
          <circle cx="220" cy="260" r="14" fill="#FF5722" />
          <circle cx="680" cy="580" r="14" fill="#FF5722" />

          {/* Strut B */}
          <line x1="720" y1="240" x2="260" y2="600" stroke="#F4F4F5" strokeWidth="18" strokeLinecap="round" />
          <line x1="720" y1="240" x2="260" y2="600" stroke="#121316" strokeWidth="6" strokeLinecap="round" />
          <circle cx="720" cy="240" r="14" fill="#FF5722" />
          <circle cx="260" cy="600" r="14" fill="#FF5722" />

          {/* Strut C (Vertical-ish tilt) */}
          <line x1="480" y1="170" x2="440" y2="700" stroke="#F4F4F5" strokeWidth="18" strokeLinecap="round" />
          <line x1="480" y1="170" x2="440" y2="700" stroke="#121316" strokeWidth="6" strokeLinecap="round" />
          <circle cx="480" cy="170" r="14" fill="#FF5722" />
          <circle cx="440" cy="700" r="14" fill="#FF5722" />

          {/* Vector Annotations & Node Callouts */}
          <g transform="translate(130, 200)">
            <rect x="0" y="0" width="130" height="34" fill="#18181B" stroke="#3F3F46" />
            <text x="65" y="23" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="bold">
              NODE N-01
            </text>
          </g>

          <g transform="translate(710, 570)">
            <rect x="0" y="0" width="150" height="34" fill="#18181B" stroke="#FF5722" />
            <text x="75" y="23" textAnchor="middle" fill="#FF5722" fontSize="14" fontWeight="bold">
              T = +14.2 kN
            </text>
          </g>

          {/* Center Isotropic Status Badge */}
          <g transform="translate(350, 400)">
            <rect x="0" y="0" width="220" height="42" fill="#18181B" stroke="#F4F4F5" strokeWidth="2" />
            <text x="110" y="27" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900" letterSpacing="2">
              ZERO CONTACT
            </text>
          </g>
        </svg>
      </div>

      {/* Structural Card Callout */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#18181B',
          border: '1px solid #3F3F46',
          borderLeft: '8px solid #FF5722',
          padding: '28px 34px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 20, fontWeight: 900, color: '#FFFFFF', letterSpacing: 2 }}>
              SELF-STRESSED STATE // EQUILIBRIUM
            </span>
          </div>
          <span
            style={{
              backgroundColor: '#27272A',
              color: '#FF5722',
              fontSize: 15,
              fontWeight: 800,
              padding: '4px 12px',
              border: '1px solid #3F3F46',
              letterSpacing: 1,
            }}
          >
            STABLE [NO RIGID JOINTS]
          </span>
        </div>

        {/* Structural Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
          <div style={{ backgroundColor: '#121316', padding: '12px 14px', border: '1px solid #27272A' }}>
            <div style={{ fontSize: 13, color: '#A1A1AA', letterSpacing: 1 }}>COMPRESSION BARS</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#F4F4F5', marginTop: 4 }}>3 SOLID</div>
          </div>
          <div style={{ backgroundColor: '#121316', padding: '12px 14px', border: '1px solid #27272A' }}>
            <div style={{ fontSize: 13, color: '#A1A1AA', letterSpacing: 1 }}>TENSION CABLES</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#FF5722', marginTop: 4 }}>9 TENSILE</div>
          </div>
          <div style={{ backgroundColor: '#121316', padding: '12px 14px', border: '1px solid #27272A' }}>
            <div style={{ fontSize: 13, color: '#A1A1AA', letterSpacing: 1 }}>STIFFNESS RATIO</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#F4F4F5', marginTop: 4 }}>99.2%</div>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: 21, lineHeight: 1.45, color: '#D4D4D8', fontWeight: 400 }}>
          Coined by Buckminster Fuller: rigid compression struts float in a continuous web of tension without ever touching each other. Load applied anywhere is instantaneously distributed throughout the entire structure.
        </p>
      </div>

      {/* Footer Minimalist Strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #27272A',
          paddingTop: 18,
          fontSize: 17,
          color: '#71717A',
          letterSpacing: 2,
        }}
      >
        <span>PRINCIPLE: CONTINUOUS TENSION, DISCONTINUOUS COMPRESSION</span>
        <span style={{ color: '#F4F4F5', fontWeight: 700 }}>BRUTALIST MONOLITH</span>
      </div>
    </div>
  );
};
