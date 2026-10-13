import React from 'react';

export const Theme16_SteampunkHorology: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#161412',
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.12) 0%, transparent 60%),
          linear-gradient(rgba(212, 175, 55, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(212, 175, 55, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 48px 48px, 48px 48px',
        color: '#E8DEC8',
        fontFamily: "'Courier New', 'Baskerville', serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '105px 75px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Brass Riveted Plate Header */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#241F1A',
            border: '2px solid #8C7034',
            padding: '16px 24px',
            boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8), 0 4px 10px rgba(0,0,0,0.5)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Brass Screw Head */}
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: '#D4AF37',
                border: '2px solid #5A4720',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: 10, height: 2, backgroundColor: '#161412' }} />
            </div>
            <span
              style={{
                fontSize: 20,
                letterSpacing: 4,
                color: '#D4AF37',
                fontWeight: 900,
                textTransform: 'uppercase',
              }}
            >
              ROYAL THERMAL APPARATUS • REG. 1824
            </span>
          </div>
          <span
            style={{
              fontSize: 18,
              color: '#34D399',
              fontWeight: 'bold',
              letterSpacing: 2,
            }}
          >
            PATENT #C-273
          </span>
        </div>

        {/* Vintage Foundry Headline */}
        <div style={{ marginTop: 36 }}>
          <div
            style={{
              fontSize: 24,
              color: '#C8963E',
              letterSpacing: 6,
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            THERMODYNAMIC REVERSIBILITY
          </div>
          <h1
            style={{
              fontSize: 84,
              fontWeight: 900,
              lineHeight: 1.05,
              margin: '12px 0 0 0',
              color: '#F4ECD8',
              letterSpacing: -1,
              textShadow: '0 4px 12px rgba(0,0,0,0.9)',
            }}
          >
            THE CARNOT<br />
            <span style={{ color: '#D4AF37' }}>HEAT ENGINE</span>
          </h1>
        </div>
      </div>

      {/* Center Steampunk Brass Watchmaker & Indicator Schematic */}
      <div
        style={{
          position: 'relative',
          width: 930,
          height: 860,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="930" height="860" viewBox="0 0 930 860" style={{ overflow: 'visible' }}>
          <defs>
            <radialGradient id="brassGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#241F1A" stopOpacity="0.8" />
            </radialGradient>
            <linearGradient id="ironGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A4036" />
              <stop offset="50%" stopColor="#29231E" />
              <stop offset="100%" stopColor="#161412" />
            </linearGradient>
          </defs>

          {/* Heavy Brass Pressure Gauge Bezel */}
          <circle cx="465" cy="430" r="390" fill="url(#brassGlow)" stroke="#8C7034" strokeWidth="8" />
          <circle cx="465" cy="430" r="376" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 6" />

          {/* Brass Rivets on Outer Bezel */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const rx = 465 + 383 * Math.cos(rad);
            const ry = 430 + 383 * Math.sin(rad);
            return (
              <circle key={i} cx={rx} cy={ry} r="5" fill="#D4AF37" stroke="#3A2E16" strokeWidth="1.5" />
            );
          })}

          {/* Interlocking Brass Cog Gears (Escapement Mechanism) */}
          <g transform="translate(180, 240)">
            <circle cx="100" cy="100" r="90" fill="url(#ironGrad)" stroke="#C8963E" strokeWidth="4" />
            {/* Cog teeth */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const tx = 100 + 95 * Math.cos(rad);
              const ty = 100 + 95 * Math.sin(rad);
              return <rect key={i} x={tx - 7} y={ty - 7} width="14" height="14" rx="2" fill="#D4AF37" />;
            })}
            <circle cx="100" cy="100" r="30" fill="#241F1A" stroke="#8C7034" strokeWidth="3" />
            <circle cx="100" cy="100" r="8" fill="#D4AF37" />
          </g>

          {/* Carnot P-V Diagram Chamber */}
          <g transform="translate(420, 200)">
            {/* P-V Axes */}
            <line x1="60" y1="360" x2="380" y2="360" stroke="#C8963E" strokeWidth="2.5" />
            <line x1="60" y1="60" x2="60" y2="360" stroke="#C8963E" strokeWidth="2.5" />
            <text x="50" y="45" textAnchor="end" fill="#D4AF37" fontSize="18" fontWeight="bold">PRESSURE [P]</text>
            <text x="380" y="395" textAnchor="middle" fill="#D4AF37" fontSize="18" fontWeight="bold">VOLUME [V]</text>

            {/* Carnot Closed Loop 4 Stages */}
            {/* A -> B (Isothermal Expansion at TH) */}
            <path
              d="M 120 100 Q 180 120, 260 160"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="4"
            />
            {/* B -> C (Adiabatic Expansion) */}
            <path
              d="M 260 160 Q 290 230, 320 300"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="4"
            />
            {/* C -> D (Isothermal Compression at TC) */}
            <path
              d="M 320 300 Q 240 280, 170 260"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="4"
            />
            {/* D -> A (Adiabatic Compression) */}
            <path
              d="M 170 260 Q 140 180, 120 100"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="4"
            />

            {/* Stage Nodes */}
            <circle cx="120" cy="100" r="7" fill="#F59E0B" />
            <text x="110" y="85" fill="#F59E0B" fontSize="16" fontWeight="bold">1 [TH]</text>
            <circle cx="260" cy="160" r="7" fill="#D4AF37" />
            <text x="275" y="150" fill="#D4AF37" fontSize="16" fontWeight="bold">2</text>
            <circle cx="320" cy="300" r="7" fill="#38BDF8" />
            <text x="335" y="320" fill="#38BDF8" fontSize="16" fontWeight="bold">3 [TC]</text>
            <circle cx="170" cy="260" r="7" fill="#94A3B8" />
            <text x="155" y="280" fill="#94A3B8" fontSize="16" fontWeight="bold">4</text>

            {/* Work Output Shaded Interior */}
            <polygon
              points="120,100 260,160 320,300 170,260"
              fill="rgba(212, 175, 55, 0.15)"
              stroke="none"
            />
            <text x="215" y="210" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">
              WORK W_net
            </text>
          </g>

          {/* Steampunk Pressure Gauge Dial Needle at Bottom */}
          <g transform="translate(465, 660)">
            <circle cx="0" cy="0" r="60" fill="#241F1A" stroke="#8C7034" strokeWidth="3" />
            <text x="0" y="-30" textAnchor="middle" fill="#D4AF37" fontSize="14">BOILER PSI</text>
            <text x="0" y="5" textAnchor="middle" fill="#F59E0B" fontSize="24" fontWeight="900">450 PSI</text>
            {/* Compass Needle */}
            <polygon points="-4,0 4,0 0,-70" fill="#E11D48" />
            <circle cx="0" cy="0" r="8" fill="#D4AF37" />
          </g>
        </svg>
      </div>

      {/* Cast Iron Thermal Efficiency Card */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#201B17',
          border: '3px solid #8C7034',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8), 0 8px 20px rgba(0,0,0,0.6)',
          padding: '26px 32px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 20, fontWeight: 900, color: '#D4AF37', letterSpacing: 2 }}>
              THEORETICAL CEILING // CARNOT EFFICIENCY
            </span>
          </div>
          <span
            style={{
              backgroundColor: '#3A2E16',
              color: '#F59E0B',
              fontSize: 16,
              fontWeight: 900,
              padding: '4px 14px',
              border: '1px solid #8C7034',
            }}
          >
            η_max = 1 - (Tc / Th)
          </span>
        </div>

        <p style={{ margin: 0, fontSize: 21, lineHeight: 1.45, color: '#D8CEB7' }}>
          No heat engine operating between two thermal reservoirs can ever be more efficient than a reversible Carnot engine. Entropy dictates that a mandatory fraction of input heat must be discarded to the cold sink.
        </p>
      </div>

      {/* Footer Industrial Strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #5A4720',
          paddingTop: 16,
          fontSize: 18,
          color: '#A89264',
        }}
      >
        <span>MANCHESTER HOROLOGICAL WORKS • 1824</span>
        <span style={{ color: '#D4AF37', fontWeight: 900 }}>STEAMPUNK HOROLOGY</span>
      </div>
    </div>
  );
};
