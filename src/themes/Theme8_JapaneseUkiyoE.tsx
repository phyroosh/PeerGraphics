import React from 'react';

export const Theme8_JapaneseUkiyoE: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#F7EFE1',
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(214, 198, 172, 0.35) 100%)
        `,
        color: '#1A2530',
        fontFamily: "'Hiragino Mincho ProN', 'Yu Mincho', 'Georgia', serif",
        position: 'relative',
        boxSizing: 'border-box',
        padding: '110px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '14px solid #2B3A4A',
        outline: '4px solid #BC4749',
        outlineOffset: '-8px',
      }}
    >
      {/* Ukiyo-e Woodblock Header & Red Hanko Seal */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '3px solid #2B3A4A', paddingBottom: 20 }}>
          <div>
            <div style={{ fontSize: 24, letterSpacing: 4, color: '#BC4749', fontWeight: 'bold' }}>
              大気海洋物理学 // EARTH FLUIDS
            </div>
            <h1 style={{ fontSize: 80, fontWeight: 900, lineHeight: 1.05, margin: '12px 0 0 0', color: '#1B3B6F', letterSpacing: 2 }}>
              THE CORIOLIS<br />
              <span style={{ color: '#BC4749' }}>OCEAN GYRES</span>
            </h1>
          </div>

          {/* Red Traditional Hanko Seal Stamp */}
          <div
            style={{
              width: 80,
              height: 110,
              backgroundColor: '#BC4749',
              border: '3px solid #8A252A',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '4px 4px 0 rgba(0,0,0,0.15)',
            }}
          >
            <span style={{ fontSize: 32, fontWeight: 900, lineHeight: 1.2 }}>海</span>
            <span style={{ fontSize: 32, fontWeight: 900, lineHeight: 1.2 }}>流</span>
          </div>
        </div>
      </div>

      {/* Centerpiece: Woodblock Wave Art & Planetary Deflection Diagram */}
      <div style={{ position: 'relative', width: 920, height: 900, margin: '10px auto' }}>
        <svg width="920" height="900" viewBox="0 0 920 900">
          <defs>
            <radialGradient id="oceanGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1B3B6F" stopOpacity="0.05" />
            </radialGradient>
          </defs>

          {/* Rotating Planetary Sphere (The Globe) */}
          <circle cx="460" cy="450" r="360" fill="url(#oceanGrad)" stroke="#1B3B6F" strokeWidth="4" />
          <line x1="100" y1="450" x2="820" y2="450" stroke="#BC4749" strokeWidth="3" strokeDasharray="12 6" />
          <text x="460" y="440" fill="#BC4749" fontSize="22" fontWeight="bold" textAnchor="middle" letterSpacing="4">
            赤道 EQUATOR (0° LATITUDE)
          </text>

          {/* Northern Hemisphere Clockwise Gyre (Great Wave Curves) */}
          <path
            d="M 460 220 C 620 220, 720 300, 700 370 C 680 430, 520 420, 460 360 C 400 300, 320 310, 320 260 C 320 230, 380 220, 460 220 Z"
            fill="none"
            stroke="#1B3B6F"
            strokeWidth="6"
          />

          {/* Wave Crest Stylized Claws (Ukiyo-e woodblock spray) */}
          <path d="M 680 340 C 720 320, 730 280, 690 300" fill="none" stroke="#2B3A4A" strokeWidth="4" />
          <path d="M 650 370 C 700 370, 720 340, 670 340" fill="none" stroke="#2B3A4A" strokeWidth="4" />
          <path d="M 600 400 C 640 420, 660 390, 620 380" fill="none" stroke="#2B3A4A" strokeWidth="4" />

          {/* Flow Direction Arrows: Clockwise in North */}
          <polygon points="560,215 540,205 540,225" fill="#1B3B6F" />
          <polygon points="705,320 720,335 700,345" fill="#1B3B6F" />
          <polygon points="400,380 420,370 420,390" fill="#1B3B6F" />

          <text x="460" y="290" fill="#1B3B6F" fontSize="28" fontWeight="bold" textAnchor="middle">
            NORTHERN GYRE
          </text>
          <text x="460" y="325" fill="#BC4749" fontSize="20" fontWeight="bold" textAnchor="middle">
            CLOCKWISE DEFLECTION (右偏)
          </text>

          {/* Southern Hemisphere Counter-Clockwise Gyre */}
          <path
            d="M 460 680 C 620 680, 720 600, 700 530 C 680 470, 520 480, 460 540 C 400 600, 320 590, 320 640 C 320 670, 380 680, 460 680 Z"
            fill="none"
            stroke="#1B3B6F"
            strokeWidth="6"
          />

          {/* Flow Direction Arrows: Counter-Clockwise in South */}
          <polygon points="540,685 560,675 560,695" fill="#1B3B6F" />
          <polygon points="700,580 720,565 705,555" fill="#1B3B6F" />

          <text x="460" y="610" fill="#1B3B6F" fontSize="28" fontWeight="bold" textAnchor="middle">
            SOUTHERN GYRE
          </text>
          <text x="460" y="645" fill="#BC4749" fontSize="20" fontWeight="bold" textAnchor="middle">
            COUNTER-CLOCKWISE (左偏)
          </text>

          {/* Earth's Spin Vector at top pole */}
          <line x1="460" y1="90" x2="460" y2="40" stroke="#2B3A4A" strokeWidth="4" />
          <path d="M 420 50 A 40 40 0 0 1 500 50" fill="none" stroke="#2B3A4A" strokeWidth="4" />
          <polygon points="505,48 495,36 490,52" fill="#2B3A4A" />
          <text x="460" y="30" fill="#2B3A4A" fontSize="20" fontWeight="bold" textAnchor="middle">Ω (EARTH ROTATION)</text>
        </svg>
      </div>

      {/* Explanatory Scroll Block */}
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', border: '2px solid #2B3A4A', padding: '24px 32px' }}>
        <div style={{ fontSize: 22, fontWeight: 'bold', color: '#BC4749' }}>
          GEOPHYSICAL PRINCIPLE
        </div>
        <div style={{ fontSize: 24, marginTop: 8, lineHeight: 1.4, color: '#1A2530' }}>
          Because the Earth's surface rotates faster at the equator than at the poles, traveling water and air deflect to the right in the North and to the left in the South—forming colossal ocean gyres.
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #2B3A4A', paddingTop: 18 }}>
        <span style={{ fontSize: 20, fontWeight: 'bold', color: '#1B3B6F' }}>PEERGRAPHICS // UKIYO-E NATURE SERIES</span>
        <span style={{ fontSize: 20, color: '#BC4749' }}>F_c = 2m(v × ω)</span>
      </div>
    </div>
  );
};
