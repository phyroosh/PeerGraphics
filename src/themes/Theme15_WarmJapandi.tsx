import React from 'react';

/**
 * Theme 15: Warm Japandi & Serene Organic Minimalism
 * Configured with strict YouTube Shorts UI Safe Zones:
 * - Top Safe Zone: >= 160px (clears mobile system bar & YouTube search/camera header)
 * - Bottom Safe Zone: >= 400px (clears channel avatar, title, captions, audio ticker, scrubber)
 * - Right Action Rail: >= 140px margin (clears Like, Dislike, Comment, Share, Remix, Sound buttons)
 */
export const Theme15_WarmJapandi: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#F9F6F0',
        backgroundImage: `
          radial-gradient(circle at 80% 15%, rgba(189, 107, 83, 0.08) 0%, transparent 45%),
          radial-gradient(circle at 15% 75%, rgba(110, 139, 104, 0.08) 0%, transparent 45%)
        `,
        color: '#2B2927',
        fontFamily: "system-ui, -apple-system, 'Inter', 'Helvetica Neue', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        // Safe Zone Insets for YouTube Shorts:
        paddingTop: 160,
        paddingBottom: 400,
        paddingLeft: 90,
        paddingRight: 140,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Japandi Minimalist Header (Safe from YouTube Header Icons) */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 18,
            borderBottom: '1px solid #E2DCD5',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: '#BD6B53',
              }}
            />
            <span
              style={{
                fontSize: 18,
                letterSpacing: 4,
                color: '#7C766F',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              CHRONOBIOLOGY • CYCLE 01
            </span>
          </div>
          <span
            style={{
              fontSize: 15,
              color: '#6E8B68',
              fontWeight: 700,
              letterSpacing: 2,
              backgroundColor: '#EBE6DC',
              padding: '6px 14px',
              borderRadius: 20,
            }}
          >
            24.2H PACEMAKER
          </span>
        </div>

        {/* Serif Headline with Zen Serenity */}
        <div style={{ marginTop: 32 }}>
          <div
            style={{
              fontSize: 20,
              color: '#BD6B53',
              letterSpacing: 6,
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            THE INTERNAL CLOCK
          </div>
          <h1
            style={{
              fontSize: 78,
              fontWeight: 400,
              lineHeight: 1.08,
              margin: '12px 0 0 0',
              color: '#2B2927',
              letterSpacing: -1,
              fontFamily: "'Playfair Display', 'Georgia', serif",
            }}
          >
            Circadian<br />
            <span style={{ fontWeight: 700, color: '#6E8B68' }}>Oscillation</span>
          </h1>
        </div>
      </div>

      {/* Center Organic Wave & Pebble Clock Diagram (Width strictly <= 850px to protect right rail) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 680,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="850" height="680" viewBox="0 0 850 680" style={{ overflow: 'visible' }}>
          {/* Soft Organic Stone Pebble Background Shape */}
          <path
            d="M 100 340 C 80 180, 220 70, 420 60 C 640 50, 760 190, 740 350 C 720 520, 620 620, 390 630 C 190 640, 120 490, 100 340 Z"
            fill="#F2ECE1"
            opacity="0.85"
          />

          {/* 24-Hour Timeline Axis */}
          <line x1="60" y1="340" x2="760" y2="340" stroke="#D3CBC0" strokeWidth="2" />

          {/* Time Markers */}
          {[
            { label: '06:00', x: 120, sub: 'DAWN' },
            { label: '12:00', x: 330, sub: 'NOON' },
            { label: '18:00', x: 540, sub: 'DUSK' },
            { label: '24:00', x: 720, sub: 'NIGHT' },
          ].map((t, i) => (
            <g key={i} transform={`translate(${t.x}, 340)`}>
              <line x1="0" y1="-8" x2="0" y2="8" stroke="#8E857B" strokeWidth="2" />
              <text x="0" y="30" textAnchor="middle" fill="#5A534B" fontSize="15" fontWeight="bold">
                {t.label}
              </text>
              <text x="0" y="48" textAnchor="middle" fill="#8E857B" fontSize="12">
                {t.sub}
              </text>
            </g>
          ))}

          {/* Cortisol Curve (Awakening Surge at 08:00, decline in afternoon) */}
          <path
            d="M 60 410 Q 180 120, 280 160 T 500 400 T 760 440"
            fill="none"
            stroke="#BD6B53"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <text x="200" y="130" fill="#BD6B53" fontSize="17" fontWeight="bold">
            CORTISOL (AWAKE PEAK)
          </text>

          {/* Melatonin Curve (Low during day, massive night surge peaking 03:00) */}
          <path
            d="M 60 440 Q 250 440, 500 370 T 670 140 T 760 200"
            fill="none"
            stroke="#6E8B68"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <text x="640" y="120" textAnchor="middle" fill="#6E8B68" fontSize="17" fontWeight="bold">
            MELATONIN (DEEP SLEEP)
          </text>

          {/* Suprachiasmatic Nucleus (SCN) Pacemaker Badge Floating in Center */}
          <g transform="translate(300, 200)">
            <rect
              x="0"
              y="0"
              width="220"
              height="72"
              rx="36"
              fill="#FFFFFF"
              stroke="#E2DCD5"
              strokeWidth="2"
            />
            <circle cx="36" cy="36" r="20" fill="#E8DFD1" />
            <circle cx="36" cy="36" r="9" fill="#BD6B53" />
            <text x="68" y="32" fill="#2B2927" fontSize="15" fontWeight="bold">
              SCN PACEMAKER
            </text>
            <text x="68" y="52" fill="#7C766F" fontSize="13">
              Hypothalamus Hub
            </text>
          </g>

          {/* Retinal Melanopsin Light Sensor */}
          <g transform="translate(90, 210)">
            <circle cx="30" cy="30" r="26" fill="#FFFFFF" stroke="#6E8B68" strokeWidth="2" />
            <circle cx="30" cy="30" r="12" fill="#6E8B68" />
            <text x="70" y="35" fill="#6E8B68" fontSize="14" fontWeight="bold">
              ipRGC (480nm)
            </text>
          </g>
        </svg>
      </div>

      {/* Tactile Sandstone Information Card & Integrated Footer (Finishes safely at y <= 1500) */}
      <div>
        <div
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: 24,
            padding: '28px 32px',
            boxSizing: 'border-box',
            boxShadow: '0 8px 30px rgba(43, 41, 39, 0.05)',
            border: '1px solid #ECE7DF',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 19, fontWeight: 700, color: '#2B2927' }}>
              Melanopsin Photoreception Window
            </span>
            <span
              style={{
                backgroundColor: '#F2ECE1',
                color: '#BD6B53',
                fontSize: 14,
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: 12,
              }}
            >
              SUPPRESSION: 480 nm
            </span>
          </div>

          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.48, color: '#524E48' }}>
            Deep in the retina, intrinsically photosensitive ganglion cells absorb morning blue photons, resetting the master genetic clock via <em>CLOCK-BMAL1</em> transcription loops. As twilight falls, melatonin synthesis releases, reducing core body temperature by 1°C.
          </p>
        </div>

        {/* Integrated Sub-Tagline within the Safe Content Area */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 18,
            fontSize: 15,
            color: '#8E857B',
            letterSpacing: 2,
          }}
        >
          <span>CIRCADIAN MOLECULAR BIOLOGY</span>
          <span style={{ color: '#2B2927', fontWeight: 600 }}>WARM JAPANDI MINIMAL</span>
        </div>
      </div>
    </div>
  );
};
