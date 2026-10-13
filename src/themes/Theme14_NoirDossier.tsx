import React from 'react';

export const Theme14_NoirDossier: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#0A0C10',
        backgroundImage: `
          radial-gradient(circle at 50% 20%, rgba(220, 38, 38, 0.12) 0%, transparent 60%),
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 50px 50px, 50px 50px',
        color: '#E2E8F0',
        fontFamily: "'Courier New', 'Consolas', monospace",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '110px 75px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Evidence Header */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #334155',
            paddingBottom: 18,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 14,
                height: 14,
                backgroundColor: '#DC2626',
                boxShadow: '0 0 10px #DC2626',
              }}
            />
            <span
              style={{
                fontSize: 22,
                letterSpacing: 4,
                color: '#F87171',
                fontWeight: 900,
              }}
            >
              METRO FORENSICS // CASE #94-8201
            </span>
          </div>
          <span
            style={{
              backgroundColor: '#FEF08A',
              color: '#000000',
              fontWeight: 900,
              fontSize: 16,
              padding: '4px 12px',
              letterSpacing: 2,
            }}
          >
            CHAIN OF CUSTODY: SEALED
          </span>
        </div>

        {/* Rubber Stamp & Headline */}
        <div style={{ marginTop: 32, position: 'relative' }}>
          {/* Rotated Stamped Badge */}
          <div
            style={{
              position: 'absolute',
              right: 10,
              top: 0,
              border: '4px solid #DC2626',
              color: '#DC2626',
              padding: '6px 16px',
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: 4,
              transform: 'rotate(12deg)',
              boxShadow: '0 0 12px rgba(220, 38, 38, 0.4)',
              textTransform: 'uppercase',
            }}
          >
            TOP SECRET
          </div>

          <div
            style={{
              fontSize: 26,
              color: '#FCD34D',
              letterSpacing: 6,
              fontWeight: 900,
              textTransform: 'uppercase',
            }}
          >
            CRIMINAL GENOMICS
          </div>
          <h1
            style={{
              fontSize: 84,
              fontWeight: 900,
              lineHeight: 1.05,
              margin: '14px 0 0 0',
              color: '#F8FAFC',
              letterSpacing: -1,
            }}
          >
            DNA STR<br />
            <span style={{ color: '#F87171' }}>PROFILING</span>
          </h1>
        </div>
      </div>

      {/* Central Gel Electrophoresis & Pinboard Diagram */}
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
            <filter id="evidenceGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Detective Corkboard & Manila Folder Backplate */}
          <rect
            x="40"
            y="40"
            width="850"
            height="780"
            rx="8"
            fill="#111827"
            stroke="#1F2937"
            strokeWidth="2"
          />

          {/* Yellow Crime Scene Tape Stripe */}
          <rect x="40" y="70" width="850" height="28" fill="#FACC15" />
          <text x="465" y="90" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="900" letterSpacing="4">
            POLICE EVIDENCE LINE • DO NOT CROSS • CRIME LAB VERIFIED
          </text>

          {/* Gel Electrophoresis Chamber (Dark UV Transilluminator) */}
          <rect
            x="80"
            y="130"
            width="440"
            height="650"
            rx="6"
            fill="#050811"
            stroke="#374151"
            strokeWidth="2"
          />
          <text x="300" y="165" textAnchor="middle" fill="#9CA3AF" fontSize="16" fontWeight="bold">
            STR GEL ELECTROPHORESIS (16 LOCI)
          </text>

          {/* Gel Well Columns: Ladder | Crime Scene Sample | Suspect A */}
          <line x1="200" y1="180" x2="200" y2="760" stroke="#1F2937" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="340" y1="180" x2="340" y2="760" stroke="#1F2937" strokeWidth="1" strokeDasharray="4 4" />

          {/* Column Headers */}
          <text x="140" y="200" textAnchor="middle" fill="#6B7280" fontSize="14" fontWeight="bold">LADDER</text>
          <text x="270" y="200" textAnchor="middle" fill="#F87171" fontSize="14" fontWeight="bold">SCENE [Q]</text>
          <text x="430" y="200" textAnchor="middle" fill="#34D399" fontSize="14" fontWeight="bold">SUSPECT [K]</text>

          {/* Fluorescent DNA Bands */}
          {/* Molecular Ladder */}
          {[240, 290, 350, 420, 500, 590, 680, 730].map((by, i) => (
            <rect key={i} x="105" y={by} width="70" height="6" rx="2" fill="#60A5FA" opacity="0.75" />
          ))}

          {/* Crime Scene DNA Bands (Loci: D3S1358, vWA, FGA, Amelogenin) */}
          <rect x="235" y="290" width="70" height="7" rx="2" fill="#F87171" filter="url(#evidenceGlow)" />
          <rect x="235" y="350" width="70" height="7" rx="2" fill="#F87171" filter="url(#evidenceGlow)" />
          <rect x="235" y="470" width="70" height="7" rx="2" fill="#F87171" filter="url(#evidenceGlow)" />
          <rect x="235" y="590" width="70" height="7" rx="2" fill="#F87171" filter="url(#evidenceGlow)" />
          <rect x="235" y="680" width="70" height="7" rx="2" fill="#F87171" filter="url(#evidenceGlow)" />

          {/* Suspect DNA Bands (Exact Match Confirmation!) */}
          <rect x="395" y="290" width="70" height="7" rx="2" fill="#34D399" filter="url(#evidenceGlow)" />
          <rect x="395" y="350" width="70" height="7" rx="2" fill="#34D399" filter="url(#evidenceGlow)" />
          <rect x="395" y="470" width="70" height="7" rx="2" fill="#34D399" filter="url(#evidenceGlow)" />
          <rect x="395" y="590" width="70" height="7" rx="2" fill="#34D399" filter="url(#evidenceGlow)" />
          <rect x="395" y="680" width="70" height="7" rx="2" fill="#34D399" filter="url(#evidenceGlow)" />

          {/* Red Connecting String Pinning the Matches */}
          <line x1="305" y1="293" x2="395" y2="293" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="305" y1="473" x2="395" y2="473" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="305" y1="683" x2="395" y2="683" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />

          {/* Pinned Suspect Polaroid / Case Card on the right */}
          <g transform="translate(560, 150)">
            {/* Paperclip */}
            <rect x="20" y="-12" width="16" height="36" rx="8" fill="none" stroke="#9CA3AF" strokeWidth="3" />
            
            {/* Manila Card */}
            <rect x="0" y="0" width="290" height="380" rx="4" fill="#E2D9C8" stroke="#D1C7B3" strokeWidth="2" />
            <rect x="15" y="15" width="260" height="150" fill="#1F2937" />
            <circle cx="145" cy="70" r="32" fill="#4B5563" />
            <path d="M 100 145 C 100 115, 190 115, 190 145 Z" fill="#4B5563" />

            <text x="20" y="195" fill="#111827" fontSize="16" fontWeight="bold">NAME: DOE, JOHN</text>
            <text x="20" y="222" fill="#4B5563" fontSize="14">LOCUS: TH01 [ALLELE 7, 9]</text>
            <text x="20" y="246" fill="#4B5563" fontSize="14">LOCUS: D21S11 [29, 31.2]</text>
            <text x="20" y="270" fill="#4B5563" fontSize="14">AMELOGENIN: X / Y [MALE]</text>

            <rect x="20" y="300" width="250" height="50" fill="#DC2626" rx="3" />
            <text x="145" y="332" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900" letterSpacing="2">
              100% LOCUS MATCH
            </text>
          </g>

          {/* Random Match Probability Calculation Card */}
          <g transform="translate(560, 560)">
            <rect x="0" y="0" width="290" height="200" rx="4" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
            <text x="15" y="32" fill="#FCD34D" fontSize="14" fontWeight="bold">MATCH PROBABILITY (Pm)</text>
            <text x="15" y="70" fill="#F8FAFC" fontSize="24" fontWeight="900">1 in 4.2 × 10¹⁵</text>
            <text x="15" y="105" fill="#9CA3AF" fontSize="13">Exceeds Earth's population</text>
            <text x="15" y="125" fill="#9CA3AF" fontSize="13">by 500,000 times.</text>
            <line x1="15" y1="145" x2="275" y2="145" stroke="#374151" strokeWidth="1" />
            <text x="15" y="175" fill="#34D399" fontSize="15" fontWeight="bold">VERDICT: INDISPUTABLE</text>
          </g>
        </svg>
      </div>

      {/* Forensic Intelligence Card */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#111827',
          border: '2px solid #374151',
          borderLeft: '8px solid #DC2626',
          padding: '26px 32px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 20, fontWeight: 900, color: '#F87171', letterSpacing: 2 }}>
            CODIS CORE LOCI // BIO-FORENSIC REPORT
          </span>
          <span style={{ color: '#FCD34D', fontSize: 16, fontWeight: 900 }}>
            STATISTICAL POWER: 99.999999%
          </span>
        </div>

        <p style={{ margin: 0, fontSize: 21, lineHeight: 1.45, color: '#D1D5DB' }}>
          Short Tandem Repeats (STRs) are highly polymorphic 2-to-6 base-pair stutters in non-coding DNA. Because loci on separate chromosomes segregate independently via Mendel’s law, multiplying their allele frequencies makes duplicate profiles mathematically impossible outside identical twins.
        </p>
      </div>

      {/* Footer Detective Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #1F2937',
          paddingTop: 16,
          fontSize: 18,
          color: '#64748B',
        }}
      >
        <span>EVIDENCE REPOSITORY // FBI CODIS DATABASE</span>
        <span style={{ color: '#FCD34D', fontWeight: 800 }}>NOIR DOSSIER</span>
      </div>
    </div>
  );
};
