import React from 'react';

export const Theme18_GothicAlchemy: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#07152B',
        backgroundImage: `
          radial-gradient(circle at 50% 35%, rgba(229, 184, 66, 0.15) 0%, transparent 65%),
          radial-gradient(circle at 50% 85%, rgba(138, 28, 44, 0.2) 0%, transparent 60%)
        `,
        color: '#FAF2DD',
        fontFamily: "'Cinzel', 'Garamond', 'Palatino', serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '100px 75px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Illuminated Gold Leaf Double Border with Corner Ornaments */}
      <div
        style={{
          position: 'absolute',
          top: 32,
          left: 32,
          right: 32,
          bottom: 32,
          border: '3px solid #E5B842',
          outline: '1px solid #8A1C2C',
          outlineOffset: '-10px',
          boxShadow: 'inset 0 0 30px rgba(229, 184, 66, 0.2)',
          pointerEvents: 'none',
        }}
      />

      {/* Medieval Header with Latin Cartouche */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #E5B842',
            paddingBottom: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 28, color: '#E5B842' }}>✦</span>
            <span
              style={{
                fontSize: 22,
                letterSpacing: 4,
                color: '#E5B842',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              CHRYSOPOEIA COSMICA • CODEX AUREUS
            </span>
          </div>
          <span
            style={{
              fontSize: 18,
              color: '#FCA5A5',
              letterSpacing: 3,
              fontStyle: 'italic',
            }}
          >
            ELEMENTUM 79 [Au]
          </span>
        </div>

        {/* Illuminated Headline */}
        <div style={{ marginTop: 34, textAlign: 'center' }}>
          <div
            style={{
              fontSize: 22,
              color: '#8A1C2C',
              backgroundColor: '#FAF2DD',
              display: 'inline-block',
              padding: '4px 18px',
              borderRadius: 2,
              letterSpacing: 5,
              fontWeight: 800,
              textTransform: 'uppercase',
            }}
          >
            RAPID NEUTRON CAPTURE // R-PROCESS
          </div>
          <h1
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.08,
              margin: '16px 0 0 0',
              color: '#E5B842',
              letterSpacing: 1,
              textShadow: '0 0 25px rgba(229, 184, 66, 0.5)',
              textTransform: 'uppercase',
            }}
          >
            THE COSMIC BIRTH<br />
            <span style={{ color: '#FAF2DD' }}>OF GOLD</span>
          </h1>
        </div>
      </div>

      {/* Center Astrolabe & Kilonova Neutron Star Merger Schematic */}
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
            <radialGradient id="goldCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="50%" stopColor="#E5B842" />
              <stop offset="100%" stopColor="#8A1C2C" />
            </radialGradient>
            <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Astrolabe Armillary Celestial Rings */}
          <circle cx="465" cy="430" r="390" fill="none" stroke="#E5B842" strokeWidth="2" strokeDasharray="10 8" />
          <circle cx="465" cy="430" r="340" fill="none" stroke="#8A1C2C" strokeWidth="1.5" />
          <circle cx="465" cy="430" r="240" fill="none" stroke="#E5B842" strokeWidth="1.5" strokeDasharray="4 6" />

          {/* Zodiac Radiating Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 465 + 240 * Math.cos(rad);
            const y1 = 430 + 240 * Math.sin(rad);
            const x2 = 465 + 380 * Math.cos(rad);
            const y2 = 430 + 380 * Math.sin(rad);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E5B842" strokeWidth="1" strokeOpacity="0.4" />;
          })}

          {/* Gravitational Wave Chirp Ripples from Neutron Star Merger */}
          <path
            d="M 200 430 Q 330 280, 465 430 T 730 430"
            fill="none"
            stroke="#E5B842"
            strokeWidth="3"
            filter="url(#goldGlow)"
          />
          <path
            d="M 230 430 Q 350 330, 465 430 T 700 430"
            fill="none"
            stroke="#8A1C2C"
            strokeWidth="2"
          />

          {/* Two Merging Neutron Stars (Binary Inspiral) */}
          <g transform="translate(360, 400)">
            <circle cx="30" cy="30" r="36" fill="#00F0FF" filter="url(#goldGlow)" />
            <text x="30" y="36" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="bold">NS 1</text>
          </g>
          <g transform="translate(510, 400)">
            <circle cx="30" cy="30" r="36" fill="#00F0FF" filter="url(#goldGlow)" />
            <text x="30" y="36" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="bold">NS 2</text>
          </g>

          {/* Kilonova Neutron Flash Nucleosynthesis Center */}
          <circle cx="465" cy="430" r="85" fill="url(#goldCore)" filter="url(#goldGlow)" />
          <text x="465" y="420" textAnchor="middle" fill="#07152B" fontSize="28" fontWeight="bold">
            ¹⁹⁷Au
          </text>
          <text x="465" y="450" textAnchor="middle" fill="#07152B" fontSize="16" fontWeight="bold">
            79p⁺ • 118n⁰
          </text>

          {/* Alchemical Symbol for Gold (Sun with Dot in Center) */}
          <g transform="translate(465, 180)">
            <circle cx="0" cy="0" r="45" fill="none" stroke="#E5B842" strokeWidth="3" />
            <circle cx="0" cy="0" r="10" fill="#E5B842" />
            <text x="0" y="70" textAnchor="middle" fill="#E5B842" fontSize="16" fontWeight="bold">
              SOL • AURUM
            </text>
          </g>

          {/* Surrounding Golden Isotope Cloud */}
          {[
            { label: '¹⁹⁶Pt', x: 230, y: 300 },
            { label: '²⁰⁴Pb', x: 700, y: 300 },
            { label: '²³⁸U', x: 240, y: 600 },
            { label: '²³²Th', x: 690, y: 600 },
          ].map((iso, i) => (
            <g key={i} transform={`translate(${iso.x}, ${iso.y})`}>
              <circle cx="0" cy="0" r="28" fill="#FAF2DD" stroke="#E5B842" strokeWidth="2" />
              <text x="0" y="6" textAnchor="middle" fill="#07152B" fontSize="15" fontWeight="bold">
                {iso.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Illuminated Golden Manuscript Cartouche */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#FAF2DD',
          color: '#1A140B',
          border: '3px solid #E5B842',
          boxShadow: '0 8px 30px rgba(0,0,0,0.7)',
          padding: '28px 34px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: '#8A1C2C', letterSpacing: 2 }}>
            KILONOVA NUCLEOSYNTHESIS (GW170817)
          </span>
          <span
            style={{
              backgroundColor: '#07152B',
              color: '#E5B842',
              fontSize: 16,
              fontWeight: 700,
              padding: '4px 14px',
            }}
          >
            YIELD: 10× EARTH MASSES
          </span>
        </div>

        <p style={{ margin: 0, fontSize: 21, lineHeight: 1.45, color: '#2B2114' }}>
          Normal stars cannot fuse elements beyond iron (Fe-56). The gold in your wedding ring was forged when two ultra-dense dead stars collided at a third the speed of light, bombarding iron nuclei with sextillions of neutrons in fractions of a millisecond.
        </p>
      </div>

      {/* Footer Medieval Strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #E5B842',
          paddingTop: 16,
          fontSize: 18,
          color: '#E5B842',
        }}
      >
        <span>SCRIPTUM IN ASTRIS • STELLAE MORTUAE</span>
        <span style={{ fontWeight: 800 }}>GOTHIC ALCHEMY</span>
      </div>
    </div>
  );
};
