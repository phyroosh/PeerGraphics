import React from 'react';

export const Theme10_BioluminescentDarkfield: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#020713',
        backgroundImage: `
          radial-gradient(circle at 50% 45%, rgba(0, 245, 212, 0.15) 0%, transparent 60%),
          radial-gradient(circle at 30% 70%, rgba(247, 37, 133, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 70% 25%, rgba(114, 9, 183, 0.2) 0%, transparent 55%)
        `,
        color: '#E0FBFC',
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        position: 'relative',
        boxSizing: 'border-box',
        padding: '120px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Top Microscopic Header */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 245, 212, 0.3)', paddingBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#00F5D4', boxShadow: '0 0 16px #00F5D4' }} />
            <span style={{ fontSize: 24, letterSpacing: 4, color: '#00F5D4', fontWeight: 800 }}>
              DARKFIELD CONFOCAL // 100,000X
            </span>
          </div>
          <span style={{ fontSize: 22, color: 'rgba(224, 251, 252, 0.6)', letterSpacing: 2 }}>GENOMIC SURGERY</span>
        </div>

        <div style={{ marginTop: 40 }}>
          <div style={{ fontSize: 28, color: '#F72585', letterSpacing: 5, fontWeight: 800, textTransform: 'uppercase' }}>
            PRECISION GENE EDITING
          </div>
          <h1 style={{ fontSize: 84, fontWeight: 900, lineHeight: 1.05, margin: '14px 0 0 0', color: '#FFFFFF', textShadow: '0 0 40px rgba(0,245,212,0.5)' }}>
            CRISPR-CAS9<br />
            <span style={{ color: '#00F5D4' }}>MOLECULAR SCISSORS</span>
          </h1>
        </div>
      </div>

      {/* Main Bioluminescent Darkfield SVG Graphic: Cas9 Complex */}
      <div style={{ position: 'relative', width: 920, height: 880, margin: '10px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="920" height="880" viewBox="0 0 920 880">
          <defs>
            <radialGradient id="cas9Halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7209B7" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#3A0CA3" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#020713" stopOpacity="0" />
            </radialGradient>
            <filter id="bioGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Floating Bioluminescent Particles */}
          {[
            { cx: 120, cy: 160, r: 4, c: '#00F5D4' },
            { cx: 800, cy: 220, r: 5, c: '#F72585' },
            { cx: 750, cy: 680, r: 3, c: '#00F5D4' },
            { cx: 180, cy: 740, r: 6, c: '#4CC9F0' },
            { cx: 460, cy: 100, r: 4, c: '#F72585' },
          ].map((pt, i) => (
            <circle key={i} cx={pt.cx} cy={pt.cy} r={pt.r} fill={pt.c} filter="url(#bioGlow)" />
          ))}

          {/* Cas9 Protein Envelope (Organic Luminescent Cloud) */}
          <ellipse cx="460" cy="440" rx="380" ry="260" fill="url(#cas9Halo)" />
          <path
            d="M 220 400 C 240 260, 420 230, 580 270 C 720 310, 780 480, 700 590 C 600 700, 320 680, 240 560 Z"
            fill="rgba(58, 12, 163, 0.25)"
            stroke="rgba(114, 9, 183, 0.6)"
            strokeWidth="3"
            filter="url(#bioGlow)"
          />
          <text x="460" y="320" fill="rgba(224, 251, 252, 0.5)" fontSize="24" fontWeight="800" textAnchor="middle" letterSpacing="4">
            CAS9 PROTEIN SHELL
          </text>

          {/* Target DNA Double Helix Strands (Turquoise) */}
          {/* Top Strand */}
          <path
            d="M 80 400 C 220 400, 300 370, 460 370 C 620 370, 700 400, 840 400"
            fill="none"
            stroke="#00F5D4"
            strokeWidth="6"
            filter="url(#bioGlow)"
          />
          {/* Bottom Strand */}
          <path
            d="M 80 480 C 220 480, 300 510, 460 510 C 620 510, 700 480, 840 480"
            fill="none"
            stroke="#00F5D4"
            strokeWidth="6"
            filter="url(#bioGlow)"
          />

          {/* Unwound Single Guide RNA (sgRNA) - Hot Magenta Binding to Target */}
          <path
            d="M 260 440 C 340 440, 400 370, 540 370 C 600 370, 640 440, 680 440"
            fill="none"
            stroke="#F72585"
            strokeWidth="7"
            strokeDasharray="14 6"
            filter="url(#bioGlow)"
          />

          {/* Base Pair Hydrogen Bonding Rungs */}
          {[140, 180, 220, 700, 740, 780].map((x, idx) => (
            <line key={idx} x1={x} y1="400" x2={x} y2="480" stroke="rgba(0, 245, 212, 0.6)" strokeWidth="3" />
          ))}

          {/* Active gRNA Base Pairing with DNA */}
          {[360, 400, 440, 480, 520].map((x, idx) => (
            <line key={idx} x1={x} y1="370" x2={x} y2="400" stroke="#F72585" strokeWidth="4" />
          ))}

          {/* Molecular Cleavage Cut Sites (Glowing Scissors / Arrows) */}
          <g filter="url(#bioGlow)">
            <polygon points="460,340 450,300 470,300" fill="#FF0055" />
            <polygon points="460,540 450,580 470,580" fill="#FF0055" />
            <text x="460" y="280" fill="#FF0055" fontSize="24" fontWeight="bold" textAnchor="middle">DOUBLE-STRAND BREAK</text>
          </g>

          {/* Labels with Neon Indicators */}
          <rect x="100" y="520" width="180" height="44" rx="8" fill="#020713" stroke="#00F5D4" strokeWidth="2" />
          <text x="190" y="550" fill="#00F5D4" fontSize="20" fontWeight="bold" textAnchor="middle">TARGET DNA</text>

          <rect x="640" y="520" width="200" height="44" rx="8" fill="#020713" stroke="#F72585" strokeWidth="2" />
          <text x="740" y="550" fill="#F72585" fontSize="20" fontWeight="bold" textAnchor="middle">GUIDE RNA (gRNA)</text>

          {/* PAM Recognition Site */}
          <rect x="580" y="340" width="100" height="34" rx="6" fill="#F72585" />
          <text x="630" y="364" fill="#FFFFFF" fontSize="18" fontWeight="bold" textAnchor="middle">PAM (NGG)</text>
        </svg>
      </div>

      {/* Bioluminescent Nanotech Callout */}
      <div style={{ backgroundColor: 'rgba(0, 245, 212, 0.05)', border: '1px solid rgba(0, 245, 212, 0.3)', borderRadius: 20, padding: '24px 30px', boxShadow: '0 0 30px rgba(0, 245, 212, 0.1)' }}>
        <div style={{ color: '#00F5D4', fontSize: 22, fontWeight: 'bold' }}>PROGRAMMABLE SEQUENCE TARGETING</div>
        <div style={{ color: '#FFFFFF', fontSize: 24, marginTop: 8, lineHeight: 1.4 }}>
          By synthesizing a custom 20-nucleotide guide RNA, Cas9 can be programmed to locate and snip any exact coordinate within 3 billion human base pairs.
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0, 245, 212, 0.2)', paddingTop: 18 }}>
        <span style={{ fontSize: 20, color: 'rgba(224, 251, 252, 0.7)' }}>PEERGRAPHICS BIOLUMINESCENT LAB</span>
        <span style={{ fontSize: 20, color: '#F72585', fontWeight: 'bold' }}>CHARPENTIER &amp; DOUDNA // NOBEL 2020</span>
      </div>
    </div>
  );
};
