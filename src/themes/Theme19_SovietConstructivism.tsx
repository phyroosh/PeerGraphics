import React from 'react';

export const Theme19_SovietConstructivism: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#EBE5D8',
        color: '#111111',
        fontFamily: "'Trebuchet MS', 'Impact', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '105px 75px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Massive Constructivist Diagonal Background Wedge */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          right: -100,
          width: 600,
          height: 1400,
          backgroundColor: '#D32F2F',
          transform: 'rotate(-25deg)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 500,
          height: 800,
          backgroundColor: '#111111',
          transform: 'rotate(15deg)',
          zIndex: 0,
        }}
      />

      {/* Top Constructivist Banner */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#111111',
            color: '#EBE5D8',
            padding: '14px 24px',
            borderBottom: '6px solid #D32F2F',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 18, height: 18, backgroundColor: '#D32F2F' }} />
            <span
              style={{
                fontSize: 22,
                letterSpacing: 4,
                fontWeight: 900,
                textTransform: 'uppercase',
              }}
            >
              КОСМОНАВТИКА • БЮРО 1903
            </span>
          </div>
          <span
            style={{
              fontSize: 18,
              fontWeight: 900,
              color: '#D32F2F',
              letterSpacing: 2,
            }}
          >
            ЦИОЛКОВСКИЙ
          </span>
        </div>

        {/* Aggressive Angular Headline */}
        <div style={{ marginTop: 36 }}>
          <div
            style={{
              display: 'inline-block',
              backgroundColor: '#D32F2F',
              color: '#FFFFFF',
              fontSize: 26,
              letterSpacing: 5,
              fontWeight: 900,
              padding: '6px 20px',
              textTransform: 'uppercase',
              transform: 'skew(-8deg)',
            }}
          >
            ФОРМУЛА СКОРОСТИ
          </div>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 1.0,
              margin: '18px 0 0 0',
              color: '#111111',
              letterSpacing: -1,
              textTransform: 'uppercase',
            }}
          >
            THE ROCKET<br />
            <span style={{ color: '#D32F2F' }}>EQUATION</span>
          </h1>
        </div>
      </div>

      {/* Central Constructivist Agitprop Vector (Red Wedge Pierces Gravity Well) */}
      <div
        style={{
          position: 'relative',
          width: 930,
          height: 840,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <svg width="930" height="840" viewBox="0 0 930 840" style={{ overflow: 'visible' }}>
          {/* Gravitational Well (Massive Black Sphere) */}
          <circle cx="360" cy="500" r="260" fill="#111111" />
          <text x="360" y="515" textAnchor="middle" fill="#EBE5D8" fontSize="28" fontWeight="900" letterSpacing="4">
            ЗЕМЛЯ [1.0 g]
          </text>
          <text x="360" y="555" textAnchor="middle" fill="#888888" fontSize="16" fontWeight="bold">
            GRAVITATIONAL WELL
          </text>

          {/* Concentric Orbital Elevation Trajectories */}
          <circle cx="360" cy="500" r="320" fill="none" stroke="#D32F2F" strokeWidth="3" strokeDasharray="12 8" />
          <circle cx="360" cy="500" r="380" fill="none" stroke="#111111" strokeWidth="2" strokeDasharray="6 6" />

          {/* El Lissitzky Red Wedge (Ascending Rocket Velocity Vector) */}
          <polygon
            points="680,140 180,680 340,780"
            fill="#D32F2F"
            stroke="#111111"
            strokeWidth="5"
          />

          {/* Rocket Thrust Exhaust Line */}
          <line x1="260" y1="730" x2="100" y2="820" stroke="#FFE600" strokeWidth="12" strokeLinecap="round" />
          <line x1="260" y1="730" x2="60" y2="840" stroke="#FFE600" strokeWidth="6" strokeLinecap="round" />

          {/* Orbital Insertion Velocity Marker */}
          <g transform="translate(620, 100)">
            <rect x="0" y="0" width="240" height="60" fill="#111111" stroke="#D32F2F" strokeWidth="3" />
            <text x="120" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900">
              v₁ = 7.91 km/s
            </text>
            <text x="120" y="80" textAnchor="middle" fill="#111111" fontSize="15" fontWeight="bold">
              ORBITAL INSERTION
            </text>
          </g>

          {/* Constructivist Formula Card in SVG */}
          <g transform="translate(560, 420)">
            <rect x="0" y="0" width="320" height="180" fill="#FFFFFF" stroke="#111111" strokeWidth="5" />
            <text x="20" y="45" fill="#D32F2F" fontSize="18" fontWeight="900">
              TSIOLKOVSKY LAW:
            </text>
            <text x="20" y="95" fill="#111111" fontSize="32" fontWeight="900">
              Δv = vₑ · ln(m₀ / mf)
            </text>
            <text x="20" y="130" fill="#555555" fontSize="16" fontWeight="bold">
              vₑ = EXHAUST VELOCITY
            </text>
            <text x="20" y="155" fill="#555555" fontSize="16" fontWeight="bold">
              m₀ / mf = MASS FRACTION
            </text>
          </g>
        </svg>
      </div>

      {/* Constructivist Propaganda Analysis Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          backgroundColor: '#111111',
          color: '#EBE5D8',
          border: '4px solid #D32F2F',
          padding: '28px 34px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <span style={{ fontSize: 22, fontWeight: 900, color: '#D32F2F', letterSpacing: 2 }}>
            THE TYRANNY OF THE ROCKET EQUATION
          </span>
          <span
            style={{
              backgroundColor: '#D32F2F',
              color: '#FFFFFF',
              fontWeight: 900,
              fontSize: 16,
              padding: '4px 14px',
            }}
          >
            PROPELLANT: 90% TOTAL MASS
          </span>
        </div>

        <p style={{ margin: 0, fontSize: 21, lineHeight: 1.45, color: '#F3EFE6' }}>
          Because fuel itself has mass, every extra kilogram of propellant demands exponentially more fuel to lift it. To reach low Earth orbit at 9,400 m/s with chemical rocket engines, over 90% of a rocket's launch weight must be pure fuel.
        </p>
      </div>

      {/* Footer Avant-Garde Strip */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '2px solid #111111',
          paddingTop: 16,
          fontSize: 18,
          fontWeight: 900,
          color: '#111111',
        }}
      >
        <span>АВАНГАРД • ОРБИТАЛЬНАЯ МЕХАНИКА</span>
        <span style={{ color: '#D32F2F' }}>CONSTRUCTIVISM</span>
      </div>
    </div>
  );
};
