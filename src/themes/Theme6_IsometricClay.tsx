import React from 'react';

export const Theme6_IsometricClay: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#E6EBF2',
        color: '#2B3A4A',
        fontFamily: "'Nunito', 'Comfortaa', system-ui, -apple-system, sans-serif",
        position: 'relative',
        boxSizing: 'border-box',
        padding: '120px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Header Pill */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              padding: '12px 28px',
              borderRadius: 50,
              backgroundColor: '#E6EBF2',
              boxShadow: '8px 8px 16px #C8D1DC, -8px -8px 16px #FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div style={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: '#F28482', boxShadow: 'inset 2px 2px 4px #D06664, inset -2px -2px 4px #FFB0AE' }} />
            <span style={{ fontSize: 22, fontWeight: 900, color: '#457B9D', letterSpacing: 1 }}>
              CELLULAR BIOENERGETICS
            </span>
          </div>

          <span
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: '#8D99AE',
              padding: '10px 20px',
              borderRadius: 30,
              backgroundColor: '#E6EBF2',
              boxShadow: 'inset 4px 4px 8px #C8D1DC, inset -4px -4px 8px #FFFFFF',
            }}
          >
            NANOMACHINE 01
          </span>
        </div>

        <div style={{ marginTop: 44 }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: '#F28482', letterSpacing: 2 }}>
            MOLECULAR MACHINERY
          </div>
          <h1 style={{ fontSize: 80, fontWeight: 900, lineHeight: 1.05, margin: '14px 0 0 0', color: '#1D3557' }}>
            ATP SYNTHASE<br />
            <span style={{ color: '#457B9D' }}>THE ROTARY MOTOR</span>
          </h1>
        </div>
      </div>

      {/* Main Tactile Clay Machine Cutaway (ATP Synthase) */}
      <div
        style={{
          width: '100%',
          height: 840,
          borderRadius: 48,
          backgroundColor: '#E6EBF2',
          boxShadow: '20px 20px 40px #C8D1DC, -20px -20px 40px #FFFFFF',
          padding: 40,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/* Membrane Clay Barrier Indicator */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#8D99AE' }}>INTERMEMBRANE SPACE [H⁺ HIGH]</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#8D99AE' }}>MITOCHONDRIAL MATRIX [H⁺ LOW]</span>
        </div>

        {/* SVG Clay Molecular Turbine */}
        <svg width="800" height="600" viewBox="0 0 800 600">
          <defs>
            {/* Clay Inset Shading Filters */}
            <filter id="clayShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="8" dy="12" stdDeviation="10" floodColor="#B8C4D4" floodOpacity="0.8" />
            </filter>
            <filter id="clayHighlight" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="-6" dy="-6" stdDeviation="6" floodColor="#FFFFFF" floodOpacity="0.9" />
            </filter>
          </defs>

          {/* Mitochondrial Lipid Bilayer (Soft Rounded Membrane) */}
          <rect x="60" y="220" width="680" height="80" rx="40" fill="#F4A261" opacity="0.85" filter="url(#clayShadow)" />
          <text x="400" y="270" fill="#FFFFFF" fontSize="24" fontWeight="900" textAnchor="middle" letterSpacing="2">
            INNER MITOCHONDRIAL MEMBRANE
          </text>

          {/* F0 Rotor Embedded in Membrane (Mint Green Cylinder) */}
          <rect x="330" y="160" width="140" height="190" rx="36" fill="#2A9D8F" filter="url(#clayShadow)" />
          <text x="400" y="210" fill="#FFFFFF" fontSize="22" fontWeight="900" textAnchor="middle">F₀ ROTOR</text>
          <text x="400" y="235" fill="rgba(255,255,255,0.8)" fontSize="16" fontWeight="700" textAnchor="middle">TURBINE</text>

          {/* Central Axle Stator Shaft (Coral) */}
          <rect x="375" y="340" width="50" height="110" rx="20" fill="#F28482" filter="url(#clayShadow)" />

          {/* F1 Catalytic Head (Lilac/Blueberry Spherical Complex) */}
          <circle cx="400" cy="460" r="105" fill="#457B9D" filter="url(#clayShadow)" />
          <text x="400" y="450" fill="#FFFFFF" fontSize="28" fontWeight="900" textAnchor="middle">F₁ HEAD</text>
          <text x="400" y="485" fill="#A8DADC" fontSize="20" fontWeight="800" textAnchor="middle">CATALYTIC</text>

          {/* Protons (H+) streaming through turbine */}
          <g filter="url(#clayShadow)">
            <circle cx="270" cy="110" r="24" fill="#F6BD60" />
            <text x="270" y="117" fill="#1D3557" fontSize="18" fontWeight="900" textAnchor="middle">H⁺</text>

            <circle cx="340" cy="100" r="24" fill="#F6BD60" />
            <text x="340" y="107" fill="#1D3557" fontSize="18" fontWeight="900" textAnchor="middle">H⁺</text>

            <circle cx="410" cy="90" r="24" fill="#F6BD60" />
            <text x="410" y="97" fill="#1D3557" fontSize="18" fontWeight="900" textAnchor="middle">H⁺</text>
          </g>

          {/* Rotation Indicator Curved Arrow */}
          <path d="M 490 240 A 50 50 0 0 1 490 280" fill="none" stroke="#F6BD60" strokeWidth="8" strokeLinecap="round" />
          <polygon points="496,284 480,296 480,274" fill="#F6BD60" />
          <text x="560" y="265" fill="#F4A261" fontSize="20" fontWeight="900">9,000 RPM</text>

          {/* ADP + Pi => ATP Synthesis Capsules */}
          <g filter="url(#clayShadow)">
            <rect x="150" y="430" width="130" height="52" rx="26" fill="#F28482" />
            <text x="215" y="463" fill="#FFFFFF" fontSize="20" fontWeight="900" textAnchor="middle">ADP + Pᵢ</text>

            <line x1="285" y1="456" x2="315" y2="456" stroke="#2B3A4A" strokeWidth="5" strokeLinecap="round" />

            <rect x="520" y="430" width="130" height="52" rx="26" fill="#2A9D8F" />
            <text x="585" y="463" fill="#FFFFFF" fontSize="22" fontWeight="900" textAnchor="middle">ATP</text>
          </g>
        </svg>

        <div style={{ fontSize: 20, fontWeight: 800, color: '#457B9D' }}>
          ROTATIONAL CATALYSIS // CHEMIOSMOTIC COUPLING
        </div>
      </div>

      {/* Tactile Soft Clay Card Explanation */}
      <div
        style={{
          borderRadius: 36,
          backgroundColor: '#E6EBF2',
          boxShadow: '12px 12px 24px #C8D1DC, -12px -12px 24px #FFFFFF',
          padding: '28px 36px',
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 900, color: '#F28482' }}>HOW IT WORKS</div>
        <div style={{ fontSize: 24, fontWeight: 700, color: '#2B3A4A', marginTop: 8, lineHeight: 1.35 }}>
          Protons flow through the membrane wheel, driving mechanical rotation at up to 9,000 RPM—physically squeezing ADP and phosphate together into cellular energy (ATP).
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 20, fontWeight: 800, color: '#8D99AE' }}>PEERGRAPHICS CLAYMORPHIC ENGINE</span>
        <span style={{ fontSize: 20, fontWeight: 900, color: '#2A9D8F' }}>BIO-NANOTECH SERIES</span>
      </div>
    </div>
  );
};
