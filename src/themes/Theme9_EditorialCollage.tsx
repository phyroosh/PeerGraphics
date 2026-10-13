import React from 'react';

/**
 * Theme 9: Editorial Collage & Risograph Punk Zine (Default System)
 * 
 * Clean, uncluttered, high-impact educational design:
 * - NO noisy top telemetry bars, figure tags (FIG. 4.0), or capsule clutter.
 * - Mobile-first font sizes (minimum 32px everywhere, tested for iPhone 15 base displays).
 * - Strict YouTube Shorts UI Safe Zones:
 *   * Top safe margin >= 160px
 *   * Bottom safe margin >= 400px (all content finishes by y <= 1500px)
 *   * Right margin >= 140px (max width <= 850px)
 * - Single focal graphic at a time with maximum clarity.
 */
export const Theme9_EditorialCollage: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#EAE5DB',
        backgroundImage: `
          radial-gradient(#C4BCAD 2px, transparent 2px)
        `,
        backgroundSize: '28px 28px',
        color: '#111111',
        fontFamily: "'Arial Black', 'Impact', -apple-system, sans-serif",
        position: 'relative',
        boxSizing: 'border-box',
        // YouTube Shorts Safe Area:
        paddingTop: 160,
        paddingBottom: 400,
        paddingLeft: 90,
        paddingRight: 140,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Bold Cutout Headline (No distracting top telemetry or fake figure labels) */}
      <div>
        <h1
          style={{
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1.02,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: -1.5,
            color: '#111111',
          }}
        >
          THE DUNNING<br />
          <span
            style={{
              backgroundColor: '#FF0055',
              color: '#FFFFFF',
              padding: '2px 18px',
              display: 'inline-block',
              boxShadow: '8px 8px 0 #111111',
              transform: 'rotate(-1.5deg)',
            }}
          >
            KRUGER
          </span>{' '}
          EFFECT
        </h1>
      </div>

      {/* Central Single Focal Graphic (Ripped Graph Paper Card) */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          border: '5px solid #111111',
          boxShadow: '14px 14px 0 #111111',
          padding: '36px 32px',
          boxSizing: 'border-box',
          position: 'relative',
          margin: '10px 0',
        }}
      >
        <svg width="800" height="560" viewBox="0 0 800 560" style={{ overflow: 'visible' }}>
          {/* Subtle graph paper grid lines */}
          <line x1="80" y1="460" x2="740" y2="460" stroke="#111111" strokeWidth="6" />
          <line x1="80" y1="80" x2="80" y2="460" stroke="#111111" strokeWidth="6" />

          {/* Large, Mobile-Legible Axis Labels (Minimum 32px) */}
          <text x="740" y="515" fill="#111111" fontSize="34" fontWeight="900" textAnchor="end">
            EXPERIENCE →
          </text>
          <text x="95" y="70" fill="#111111" fontSize="34" fontWeight="900">
            CONFIDENCE ↑
          </text>

          {/* Bold Risograph Curve */}
          <path
            d="M 100 440 C 160 120, 240 100, 300 110 C 370 120, 410 420, 480 430 C 560 440, 640 280, 720 220"
            fill="none"
            stroke="#FF0055"
            strokeWidth="14"
            strokeLinecap="round"
          />

          {/* Peak 1: Peak of Ignorance */}
          <circle cx="280" cy="110" r="18" fill="#FFE600" stroke="#111111" strokeWidth="5" />
          <g transform="translate(170, 20)">
            <rect x="0" y="0" width="220" height="52" fill="#111111" />
            <text x="110" y="37" fill="#FFE600" fontSize="32" fontWeight="900" textAnchor="middle">
              FALSE PEAK
            </text>
          </g>

          {/* Point 2: Valley */}
          <circle cx="460" cy="430" r="18" fill="#00E5FF" stroke="#111111" strokeWidth="5" />
          <g transform="translate(360, 340)">
            <rect x="0" y="0" width="230" height="52" fill="#FF0055" />
            <text x="115" y="37" fill="#FFFFFF" fontSize="32" fontWeight="900" textAnchor="middle">
              REAL DOUBT
            </text>
          </g>

          {/* Point 3: Real Mastery */}
          <circle cx="710" cy="230" r="18" fill="#FFE600" stroke="#111111" strokeWidth="5" />
          <g transform="translate(560, 150)">
            <rect x="0" y="0" width="200" height="52" fill="#111111" />
            <text x="100" y="37" fill="#FFFFFF" fontSize="32" fontWeight="900" textAnchor="middle">
              MASTERY
            </text>
          </g>
        </svg>
      </div>

      {/* Clean High-Contrast Key Insight Card (Large Mobile-Readable Copy) */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#111111',
          color: '#FFFFFF',
          padding: '30px 32px',
          boxSizing: 'border-box',
          boxShadow: '10px 10px 0 #FF0055',
        }}
      >
        <div style={{ color: '#FFE600', fontSize: 32, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1 }}>
          WHY IT HAPPENS
        </div>
        <div
          style={{
            fontSize: 38,
            fontFamily: "system-ui, -apple-system, 'Inter', sans-serif",
            fontWeight: 800,
            marginTop: 12,
            lineHeight: 1.35,
            color: '#FFFFFF',
          }}
        >
          Novices lack the exact expertise needed to judge their own competence.
        </div>
      </div>
    </div>
  );
};
