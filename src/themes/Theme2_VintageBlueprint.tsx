import React from 'react';

export const Theme2_VintageBlueprint: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#0C2D57',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        color: '#E0EDFD',
        fontFamily: "'Courier New', Courier, monospace",
        position: 'relative',
        boxSizing: 'border-box',
        padding: '100px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '12px double rgba(255, 255, 255, 0.3)',
      }}
    >
      {/* Blueprint Header */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid rgba(255,255,255,0.4)', paddingBottom: 16 }}>
          <span style={{ fontSize: 24, letterSpacing: 3, fontWeight: 'bold' }}>SPEC NO. PG-FLUID-089</span>
          <span style={{ fontSize: 24, letterSpacing: 2 }}>SHEET 01 OF 01 // REV D</span>
        </div>

        <div style={{ marginTop: 36 }}>
          <div style={{ fontSize: 26, letterSpacing: 5, color: '#64B5F6', fontWeight: 700 }}>
            AEROSPACE PROPULSION ENGINEERING
          </div>
          <h1 style={{ fontSize: 78, fontWeight: 900, lineHeight: 1.1, margin: '12px 0 0 0', letterSpacing: 2, color: '#FFFFFF' }}>
            DE LAVAL NOZZLE<br />
            <span style={{ color: '#90CAF9' }}>SUPERSONIC ACCELERATION</span>
          </h1>
        </div>
      </div>

      {/* Blueprint Technical Diagram: Convergent-Divergent Nozzle Cutaway */}
      <div style={{ position: 'relative', width: 920, height: 920, margin: '10px auto' }}>
        <svg width="920" height="920" viewBox="0 0 920 920">
          {/* Centerline */}
          <line x1="60" y1="460" x2="860" y2="460" stroke="#90CAF9" strokeWidth="1.5" strokeDasharray="18 6 4 6" />

          {/* Upper Nozzle Contour */}
          <path
            d="M 100 240 C 260 250, 360 380, 440 380 C 520 380, 680 200, 840 180"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5"
          />
          {/* Lower Nozzle Contour */}
          <path
            d="M 100 680 C 260 670, 360 540, 440 540 C 520 540, 680 720, 840 740"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5"
          />

          {/* Hatching for Nozzle Wall Structure (Upper) */}
          <path
            d="M 100 240 L 100 160 L 840 100 L 840 180 C 680 200, 520 380, 440 380 C 360 380, 260 250, 100 240 Z"
            fill="rgba(144, 202, 249, 0.12)"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="2"
          />

          {/* Hatching for Nozzle Wall Structure (Lower) */}
          <path
            d="M 100 680 L 100 760 L 840 820 L 840 740 C 680 720, 520 540, 440 540 C 360 540, 260 670, 100 680 Z"
            fill="rgba(144, 202, 249, 0.12)"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="2"
          />

          {/* Streamlines inside nozzle */}
          <path d="M 110 350 C 260 355, 360 420, 440 420 C 520 420, 680 320, 830 310" fill="none" stroke="#64B5F6" strokeWidth="2" strokeDasharray="8 6" />
          <path d="M 110 410 C 260 415, 360 440, 440 440 C 520 440, 680 390, 830 385" fill="none" stroke="#64B5F6" strokeWidth="2.5" />
          <path d="M 110 510 C 260 505, 360 480, 440 480 C 520 480, 680 530, 830 535" fill="none" stroke="#64B5F6" strokeWidth="2.5" />
          <path d="M 110 570 C 260 565, 360 500, 440 500 C 520 500, 680 600, 830 610" fill="none" stroke="#64B5F6" strokeWidth="2" strokeDasharray="8 6" />

          {/* Throat Dimension Marking */}
          <line x1="440" y1="360" x2="440" y2="180" stroke="#FFD54F" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="440" y1="560" x2="440" y2="740" stroke="#FFD54F" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="440" cy="460" r="10" fill="#FFD54F" />

          {/* Labels with leaders */}
          <g>
            <rect x="180" y="80" width="180" height="48" fill="#0C2D57" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="270" y="112" fill="#FFFFFF" fontSize="22" fontWeight="bold" textAnchor="middle">SUBSONIC</text>
            <text x="270" y="150" fill="#90CAF9" fontSize="20" textAnchor="middle">Mach &lt; 1.0</text>
          </g>

          <g>
            <rect x="360" y="80" width="160" height="48" fill="#0C2D57" stroke="#FFD54F" strokeWidth="2" />
            <text x="440" y="112" fill="#FFD54F" fontSize="22" fontWeight="bold" textAnchor="middle">THROAT</text>
            <text x="440" y="150" fill="#FFD54F" fontSize="20" fontWeight="bold" textAnchor="middle">Mach = 1.0 (CHOKED)</text>
          </g>

          <g>
            <rect x="630" y="80" width="200" height="48" fill="#0C2D57" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="730" y="112" fill="#FFFFFF" fontSize="22" fontWeight="bold" textAnchor="middle">SUPERSONIC</text>
            <text x="730" y="150" fill="#90CAF9" fontSize="20" textAnchor="middle">Mach &gt; 1.0</text>
          </g>

          {/* Expansion Shock Diamond Pattern in Exhaust */}
          <polygon points="600,460 670,410 740,460 670,510" fill="none" stroke="#FFD54F" strokeWidth="2" strokeDasharray="4 4" />
          <polygon points="740,460 800,425 860,460 800,495" fill="none" stroke="#FFD54F" strokeWidth="2" strokeDasharray="4 4" />

          {/* Dimension measurement line across throat */}
          <line x1="420" y1="380" x2="420" y2="540" stroke="#FFFFFF" strokeWidth="1.5" />
          <polyline points="415,395 420,380 425,395" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <polyline points="415,525 420,540 425,525" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <text x="395" y="468" fill="#FFFFFF" fontSize="20" textAnchor="end">Dt = 48.2mm</text>
        </svg>
      </div>

      {/* Engineering Notes & Formulas */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, borderTop: '2px solid rgba(255,255,255,0.3)', paddingTop: 24 }}>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '20px 24px', border: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ color: '#FFD54F', fontSize: 20, fontWeight: 'bold' }}>THERMODYNAMIC PARADOX</div>
          <div style={{ fontSize: 22, marginTop: 8, lineHeight: 1.4, color: '#E0EDFD' }}>
            In supersonic flow, diverging geometry <strong>accelerates</strong> gas rather than slowing it, converting thermal enthalpy directly into kinetic velocity.
          </div>
        </div>

        {/* Title Block Stamp */}
        <div style={{ border: '2px solid #FFFFFF', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 16, color: '#90CAF9' }}>DRAWN BY: AGENT CAD-01</div>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: '#FFFFFF', marginTop: 4 }}>PEERGRAPHICS CORP.</div>
          </div>
          <div style={{ fontSize: 16, borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: 8, color: '#FFD54F' }}>
            STATUS: APPROVED // VALIDATED
          </div>
        </div>
      </div>
    </div>
  );
};
