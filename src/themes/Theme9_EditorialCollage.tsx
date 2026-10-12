import React from 'react';

export const Theme9_EditorialCollage: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#EAE5DB',
        backgroundImage: `
          radial-gradient(#CFC8BD 1.5px, transparent 1.5px)
        `,
        backgroundSize: '24px 24px',
        color: '#111111',
        fontFamily: "'Impact', 'Arial Black', sans-serif",
        position: 'relative',
        boxSizing: 'border-box',
        padding: '110px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Tape Strip across the top left */}
      <div
        style={{
          position: 'absolute',
          top: 30,
          left: 60,
          width: 240,
          height: 50,
          backgroundColor: 'rgba(255, 230, 0, 0.7)',
          transform: 'rotate(-4deg)',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          fontWeight: 900,
          letterSpacing: 2,
          color: '#000000',
        }}
      >
        PSYCHOLOGY FILE // #09
      </div>

      {/* Header Cutout Block */}
      <div style={{ marginTop: 30 }}>
        <div style={{ display: 'inline-block', backgroundColor: '#111111', color: '#FFE600', padding: '6px 16px', fontSize: 24, transform: 'rotate(1deg)' }}>
          COGNITIVE DISTORTIONS
        </div>

        <h1 style={{ fontSize: 86, fontWeight: 900, lineHeight: 0.95, margin: '20px 0 0 0', textTransform: 'uppercase', letterSpacing: -1 }}>
          THE DUNNING<br />
          <span style={{ backgroundColor: '#FF0055', color: '#FFFFFF', padding: '0 16px', display: 'inline-block', transform: 'rotate(-2deg)' }}>
            KRUGER
          </span>{' '}
          EFFECT
        </h1>
      </div>

      {/* Ripped Graph Paper Card with Curve */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '4px solid #111111',
          boxShadow: '16px 16px 0 #111111',
          padding: '40px 36px',
          position: 'relative',
          transform: 'rotate(1deg)',
        }}
      >
        {/* Neon Highlighter Tag */}
        <div style={{ position: 'absolute', top: -20, right: 30, backgroundColor: '#FFE600', border: '3px solid #111111', padding: '4px 18px', fontSize: 18, fontWeight: 900, transform: 'rotate(3deg)' }}>
          CONFIDENCE VS COMPETENCE
        </div>

        <svg width="840" height="600" viewBox="0 0 840 600">
          {/* Grid lines on graph paper */}
          <line x1="100" y1="500" x2="780" y2="500" stroke="#111111" strokeWidth="5" />
          <line x1="100" y1="80" x2="100" y2="500" stroke="#111111" strokeWidth="5" />

          {/* Axis Labels */}
          <text x="780" y="540" fill="#111111" fontSize="22" fontWeight="900" textAnchor="end">EXPERIENCE &gt;</text>
          <text x="110" y="70" fill="#111111" fontSize="22" fontWeight="900">CONFIDENCE ^</text>

          {/* Dunning-Kruger Curve */}
          <path
            d="M 120 480 C 180 140, 240 120, 300 130 C 360 140, 400 460, 480 470 C 560 480, 680 320, 760 260"
            fill="none"
            stroke="#FF0055"
            strokeWidth="10"
            strokeLinecap="round"
          />

          {/* Point 1: Peak of Mount Ignorance */}
          <circle cx="280" cy="130" r="16" fill="#FFE600" stroke="#111111" strokeWidth="4" />
          <rect x="180" y="30" width="220" height="48" fill="#111111" />
          <text x="290" y="62" fill="#FFE600" fontSize="20" fontWeight="900" textAnchor="middle">
            PEAK OF IGNORANCE
          </text>
          <line x1="280" y1="80" x2="280" y2="110" stroke="#111111" strokeWidth="3" strokeDasharray="4 4" />

          {/* Point 2: Valley of Despair */}
          <circle cx="460" cy="470" r="16" fill="#00E5FF" stroke="#111111" strokeWidth="4" />
          <rect x="360" y="530" width="220" height="48" fill="#FF0055" />
          <text x="470" y="562" fill="#FFFFFF" fontSize="20" fontWeight="900" textAnchor="middle">
            VALLEY OF DESPAIR
          </text>

          {/* Point 3: Slope of Enlightenment */}
          <circle cx="740" cy="280" r="16" fill="#FFE600" stroke="#111111" strokeWidth="4" />
          <rect x="620" y="190" width="200" height="48" fill="#111111" />
          <text x="720" y="222" fill="#FFFFFF" fontSize="20" fontWeight="900" textAnchor="middle">
            REAL MASTERY
          </text>

          {/* Quote bubble inside graphic */}
          <text x="200" y="220" fill="#FF0055" fontSize="24" fontWeight="900" fontStyle="italic">
            "I KNOW EVERYTHING!"
          </text>
          <text x="440" y="420" fill="#111111" fontSize="22" fontWeight="900" fontStyle="italic">
            "I know nothing..."
          </text>
        </svg>
      </div>

      {/* Brutalist Editorial Strip Callout */}
      <div style={{ backgroundColor: '#111111', color: '#FFFFFF', padding: '26px 32px', transform: 'rotate(-1deg)', boxShadow: '8px 8px 0 #FF0055' }}>
        <div style={{ color: '#FFE600', fontSize: 22, fontWeight: 900 }}>THE PSYCHOLOGICAL MECHANISM</div>
        <div style={{ fontSize: 24, fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 700, marginTop: 8, lineHeight: 1.35 }}>
          Novices cannot evaluate their own lack of expertise because the skills required to recognize competence are the exact same skills needed to produce it.
        </div>
      </div>

      {/* Footer Editorial Stamped Barcode */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '4px solid #111111', paddingTop: 18 }}>
        <span style={{ fontSize: 22, fontWeight: 900 }}>PEERGRAPHICS // PUNK EDITORIAL RISOGRAPH</span>
        <span style={{ fontSize: 20, backgroundColor: '#FFE600', padding: '4px 10px', color: '#111111' }}>CORNELL UNIV. (1999)</span>
      </div>
    </div>
  );
};
