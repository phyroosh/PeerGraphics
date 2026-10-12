import React from 'react';

export const Theme4_RenaissanceCodex: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#EFE2C9',
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(184, 150, 110, 0.3) 100%)
        `,
        color: '#3B2414',
        fontFamily: "'Georgia', 'Times New Roman', serif",
        position: 'relative',
        boxSizing: 'border-box',
        padding: '110px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '14px solid #4A3321',
        outline: '3px solid #C5A059',
        outlineOffset: '-8px',
      }}
    >
      {/* Renaissance Header */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #8B6B4C', paddingBottom: 16 }}>
          <span style={{ fontSize: 22, fontStyle: 'italic', letterSpacing: 2, color: '#6A4A32' }}>CODEX ASTRONOMIA NOVA // 1609</span>
          <span style={{ fontSize: 22, letterSpacing: 2, color: '#C5A059', fontWeight: 'bold' }}>FOLIO LXXII</span>
        </div>

        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <div style={{ fontSize: 24, letterSpacing: 6, color: '#8B5A2B', fontStyle: 'italic', textTransform: 'uppercase' }}>
            De Motibus Stellae Martis
          </div>
          <h1 style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.15, margin: '14px 0 0 0', color: '#2B170B', letterSpacing: 1 }}>
            KEPLER’S LAWS OF<br />
            <span style={{ color: '#8B2500', fontStyle: 'italic' }}>ELLIPTICAL MOTION</span>
          </h1>
        </div>
      </div>

      {/* Centerpiece: Hand-Inked Celestial Ellipse Geometry */}
      <div style={{ position: 'relative', width: 920, height: 900, margin: '10px auto' }}>
        <svg width="920" height="900" viewBox="0 0 920 900">
          <defs>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="60%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#8B2500" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Compass Construction Rings */}
          <circle cx="460" cy="450" r="380" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
          <circle cx="460" cy="450" r="280" fill="none" stroke="#8B6B4C" strokeWidth="0.8" opacity="0.4" />

          {/* Major and Minor Axes */}
          <line x1="100" y1="450" x2="820" y2="450" stroke="#6A4A32" strokeWidth="1.2" strokeDasharray="10 4" />
          <line x1="460" y1="200" x2="460" y2="700" stroke="#6A4A32" strokeWidth="1" strokeDasharray="10 4" />

          {/* Kepler Ellipse (Hand-etched look) */}
          <ellipse cx="460" cy="450" rx="360" ry="220" fill="none" stroke="#2B170B" strokeWidth="4" />

          {/* Equal Area Swept Sectors (Law II) */}
          {/* Sector 1 (Near Perihelion, Sweeping Fast) */}
          <path
            d="M 280 450 L 105 430 A 360 220 0 0 0 115 480 Z"
            fill="rgba(197, 160, 89, 0.35)"
            stroke="#8B5A2B"
            strokeWidth="1.5"
          />
          <text x="160" y="460" fill="#3B2414" fontSize="22" fontStyle="italic" fontWeight="bold">Area A</text>

          {/* Sector 2 (Near Aphelion, Sweeping Slower) */}
          <path
            d="M 280 450 L 780 340 A 360 220 0 0 1 815 480 Z"
            fill="rgba(197, 160, 89, 0.35)"
            stroke="#8B5A2B"
            strokeWidth="1.5"
          />
          <text x="640" y="440" fill="#3B2414" fontSize="22" fontStyle="italic" fontWeight="bold">Area B = Area A</text>

          {/* Sun at Primary Focus F1 (x=280, y=450) */}
          <circle cx="280" cy="450" r="45" fill="url(#sunGlow)" />
          <circle cx="280" cy="450" r="22" fill="#FFB703" stroke="#8B2500" strokeWidth="2.5" />
          {/* Sun Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 280 + Math.cos(rad) * 26;
            const y1 = 450 + Math.sin(rad) * 26;
            const x2 = 280 + Math.cos(rad) * 38;
            const y2 = 450 + Math.sin(rad) * 38;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8B2500" strokeWidth="2" />;
          })}
          <text x="280" y="525" fill="#8B2500" fontSize="24" fontWeight="bold" textAnchor="middle" fontStyle="italic">SOL (Focus I)</text>

          {/* Empty Focus F2 (x=640, y=450) */}
          <circle cx="640" cy="450" r="8" fill="#6A4A32" />
          <circle cx="640" cy="450" r="18" fill="none" stroke="#6A4A32" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="640" y="495" fill="#6A4A32" fontSize="20" textAnchor="middle" fontStyle="italic">Focus II (Vacuum)</text>

          {/* Planet Orbiting at Perihelion */}
          <circle cx="103" cy="450" r="14" fill="#2E4057" stroke="#3B2414" strokeWidth="2" />
          <text x="103" y="415" fill="#2E4057" fontSize="20" fontWeight="bold" textAnchor="middle">Perihelion</text>

          {/* Planet Orbiting at Aphelion */}
          <circle cx="818" cy="450" r="14" fill="#2E4057" stroke="#3B2414" strokeWidth="2" />
          <text x="818" y="415" fill="#2E4057" fontSize="20" fontWeight="bold" textAnchor="middle">Aphelion</text>

          {/* Da Vinci Style Ornamental Flourishes and Marginalia */}
          <text x="460" y="740" fill="#4A3321" fontSize="22" fontStyle="italic" textAnchor="middle">
            "Orbis planetarum non est circulus, sed figura elliptica."
          </text>
        </svg>
      </div>

      {/* Classical Manuscript Callout */}
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', border: '2px solid #8B6B4C', padding: '24px 30px' }}>
        <div style={{ fontSize: 22, fontWeight: 'bold', color: '#8B2500', fontStyle: 'italic' }}>
          LEX PRIMA // THE LAW OF ORBITS
        </div>
        <div style={{ fontSize: 24, fontStyle: 'italic', marginTop: 8, lineHeight: 1.4, color: '#2B170B' }}>
          All planets move in elliptical orbits with the Sun located at one of the two foci, shattering the ancient dogma of uniform circular heavenly motion.
        </div>
      </div>

      {/* Footer Seal */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #8B6B4C', paddingTop: 18 }}>
        <span style={{ fontSize: 20, fontStyle: 'italic', color: '#6A4A32' }}>TYCHO BRAHE OBSERVATIONAL DATA // 1601</span>
        <span style={{ fontSize: 20, fontWeight: 'bold', color: '#C5A059' }}>PEERGRAPHICS CODEX SERIES</span>
      </div>
    </div>
  );
};
