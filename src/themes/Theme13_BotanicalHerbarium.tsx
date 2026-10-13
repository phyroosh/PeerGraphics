import React from 'react';

export const Theme13_BotanicalHerbarium: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#F5F0E4',
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(220, 210, 190, 0.3) 100%),
          linear-gradient(rgba(44, 38, 33, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(44, 38, 33, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 30px 30px, 30px 30px',
        color: '#2C2621',
        fontFamily: "'Baskerville', 'Georgia', 'Times New Roman', serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '100px 75px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Victorian Ornamental Outer Border */}
      <div
        style={{
          position: 'absolute',
          top: 30,
          left: 30,
          right: 30,
          bottom: 30,
          border: '2px solid #5B4E3E',
          outline: '1px solid #A89F8D',
          outlineOffset: '-8px',
          pointerEvents: 'none',
        }}
      />

      {/* Top Naturalist Journal Plate Header */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #73644F',
            paddingBottom: 16,
          }}
        >
          <div style={{ fontStyle: 'italic', fontSize: 22, color: '#5B4E3E' }}>
            Herbarium Britannicum • Fasciculus IV
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 4,
              color: '#1B3B2B',
              textTransform: 'uppercase',
            }}
          >
            TABULA LXXVIII
          </div>
        </div>

        {/* Plant Taxonomy & Title */}
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              color: '#3B6048',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            PHYSIOLOGIA VEGETABILIS
          </div>
          <h1
            style={{
              fontSize: 78,
              fontWeight: 400,
              lineHeight: 1.1,
              margin: '12px 0 6px 0',
              fontStyle: 'italic',
              color: '#1B3B2B',
            }}
          >
            Photosynthesis &amp;<br />
            <span style={{ fontStyle: 'normal', fontWeight: 700, color: '#3A2E26' }}>
              The Z-Scheme
            </span>
          </h1>
          <div style={{ fontSize: 20, color: '#685949', fontStyle: 'italic' }}>
            Quantum Photolysis &amp; Electron Transport in Chloroplastida
          </div>
        </div>
      </div>

      {/* Central Botanical Engraving Diagram */}
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
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4E6E58" />
              <stop offset="50%" stopColor="#2E5039" />
              <stop offset="100%" stopColor="#1B3B2B" />
            </linearGradient>
            <linearGradient id="sunbeam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Naturalist Specimen Circle / Loupe Glass */}
          <circle cx="465" cy="430" r="380" fill="#FAF6EE" stroke="#5B4E3E" strokeWidth="2" />
          <circle cx="465" cy="430" r="372" fill="none" stroke="#A89F8D" strokeWidth="1" strokeDasharray="6 4" />

          {/* Sun Photon Stream (Incident Wavelength λ = 680nm) */}
          <path
            d="M 160 120 L 260 380"
            stroke="#C5A059"
            strokeWidth="3"
            strokeDasharray="8 6"
          />
          <text x="170" y="100" fill="#8C6D23" fontSize="18" fontStyle="italic" fontWeight="bold">
            hν (680 nm)
          </text>

          {/* Photosystem II Complex (PSII) */}
          <g transform="translate(200, 370)">
            <rect x="0" y="0" width="130" height="110" rx="8" fill="#2E5039" stroke="#1B3B2B" strokeWidth="2" />
            <text x="65" y="45" textAnchor="middle" fill="#FAF0D7" fontSize="20" fontWeight="bold">
              PS II
            </text>
            <text x="65" y="75" textAnchor="middle" fill="#C5A059" fontSize="17" fontStyle="italic">
              P680
            </text>
            <text x="65" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="13">
              PHOTOLYSIS
            </text>
          </g>

          {/* Water Splitting Complex (2 H2O -> O2 + 4 H+) */}
          <g transform="translate(140, 520)">
            <circle cx="50" cy="50" r="45" fill="#E6DFCE" stroke="#1B3B2B" strokeWidth="1.5" />
            <text x="50" y="46" textAnchor="middle" fill="#1B3B2B" fontSize="15" fontWeight="bold">
              2 H₂O →
            </text>
            <text x="50" y="68" textAnchor="middle" fill="#A0522D" fontSize="14" fontStyle="italic">
              O₂ + 4H⁺
            </text>
          </g>

          {/* Z-Scheme Energy Ascension: Electron Jumps to Plastoquinone */}
          <path
            d="M 265 370 L 265 200"
            stroke="#A0522D"
            strokeWidth="4"
            markerEnd="url(#arrow)"
          />
          <text x="250" y="185" textAnchor="middle" fill="#A0522D" fontSize="18" fontWeight="bold">
            e⁻ [HIGH ENERGY]
          </text>

          {/* Electron Transport Cascade down to Cytochrome b6f */}
          <path
            d="M 275 210 Q 380 230, 440 340"
            fill="none"
            stroke="#1B3B2B"
            strokeWidth="3"
            strokeDasharray="6 4"
          />

          {/* Cytochrome b6f Complex */}
          <g transform="translate(400, 330)">
            <rect x="0" y="0" width="120" height="80" rx="6" fill="#4E6E58" stroke="#1B3B2B" strokeWidth="2" />
            <text x="60" y="38" textAnchor="middle" fill="#FAF0D7" fontSize="16" fontWeight="bold">
              Cyt b₆f
            </text>
            <text x="60" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="14">
              H⁺ PUMP
            </text>
          </g>

          {/* Second Light Influx to Photosystem I (PSI) */}
          <path
            d="M 680 120 L 590 380"
            stroke="#C5A059"
            strokeWidth="3"
            strokeDasharray="8 6"
          />
          <text x="690" y="100" fill="#8C6D23" fontSize="18" fontStyle="italic" fontWeight="bold">
            hν (700 nm)
          </text>

          {/* Photosystem I (PSI) */}
          <g transform="translate(560, 370)">
            <rect x="0" y="0" width="130" height="110" rx="8" fill="#2E5039" stroke="#1B3B2B" strokeWidth="2" />
            <text x="65" y="45" textAnchor="middle" fill="#FAF0D7" fontSize="20" fontWeight="bold">
              PS I
            </text>
            <text x="65" y="75" textAnchor="middle" fill="#C5A059" fontSize="17" fontStyle="italic">
              P700
            </text>
            <text x="65" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="13">
              NADPH SYNTH
            </text>
          </g>

          {/* ATP Synthase Turbine at base */}
          <g transform="translate(390, 480)">
            <ellipse cx="65" cy="40" rx="65" ry="35" fill="#C5A059" fillOpacity="0.25" stroke="#7A6025" strokeWidth="2" />
            <text x="65" y="38" textAnchor="middle" fill="#3B2E24" fontSize="17" fontWeight="bold">
              ATP SYNTHASE
            </text>
            <text x="65" y="58" textAnchor="middle" fill="#8C6D23" fontSize="14" fontStyle="italic">
              ADP + Pi → ATP
            </text>
          </g>

          {/* Botanical Foliage Etching in Corner */}
          <path
            d="M 720 620 Q 820 680, 780 780 Q 710 740, 720 620 Z"
            fill="url(#leafGrad)"
            opacity="0.85"
            stroke="#1B3B2B"
            strokeWidth="1.5"
          />
          <path d="M 720 620 L 780 780" stroke="#FAF0D7" strokeWidth="1.5" opacity="0.6" />
        </svg>
      </div>

      {/* Antique Field Specimen Label Card */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#EDE5D5',
          border: '2px solid #5B4E3E',
          boxShadow: '4px 4px 12px rgba(44, 38, 33, 0.15)',
          padding: '26px 32px',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 20, fontWeight: 'bold', color: '#1B3B2B', textTransform: 'uppercase', letterSpacing: 2 }}>
              Specimen No. 409 // Thylakoid Membrane
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 16,
              color: '#8A3B22',
              fontWeight: 'bold',
            }}
          >
            EFFICIENCY: 34.2%
          </span>
        </div>

        <p style={{ margin: 0, fontSize: 21, lineHeight: 1.45, color: '#3A2E26' }}>
          Light excites electrons in <em>Photosystem II</em>, splitting water molecules into breathable oxygen. The electrons tumble down an electrochemical gradient, driving the molecular turbine of <strong>ATP Synthase</strong> to store solar energy into living matter.
        </p>

        {/* Curator Signature Line */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 14,
            paddingTop: 12,
            borderTop: '1px dashed #A89F8D',
            fontSize: 16,
            color: '#73644F',
            fontStyle: 'italic',
          }}
        >
          <span>Locality: Kew Royal Botanic Gardens</span>
          <span>Colleague: J. Priestley, F.R.S.</span>
        </div>
      </div>

      {/* Footer Natural History Strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #73644F',
          paddingTop: 14,
          fontSize: 18,
          color: '#5B4E3E',
          fontStyle: 'italic',
        }}
      >
        <span>Ex Museo Horti Botanici • Londini</span>
        <span style={{ fontStyle: 'normal', fontWeight: 'bold', letterSpacing: 2, color: '#1B3B2B' }}>
          NATURALIST HERBARIUM
        </span>
      </div>
    </div>
  );
};
