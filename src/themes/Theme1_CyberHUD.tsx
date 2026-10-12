import React from 'react';

export const Theme1_CyberHUD: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#050811',
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(0, 242, 254, 0.12) 0%, transparent 60%),
          linear-gradient(rgba(0, 242, 254, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 242, 254, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 60px 60px, 60px 60px',
        color: '#E0F7FA',
        fontFamily: "'Courier New', monospace, sans-serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '120px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Telemetry Header */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 242, 254, 0.3)', paddingBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#00F2FE', boxShadow: '0 0 12px #00F2FE' }} />
            <span style={{ fontSize: 26, letterSpacing: 4, color: '#00F2FE', fontWeight: 'bold' }}>SYS://BELL-STATE.04</span>
          </div>
          <span style={{ fontSize: 22, color: 'rgba(224, 247, 250, 0.6)', letterSpacing: 2 }}>FIDELITY: 99.84%</span>
        </div>

        <div style={{ marginTop: 40 }}>
          <div style={{ fontSize: 32, color: '#FFB800', letterSpacing: 6, fontWeight: 700, textTransform: 'uppercase' }}>
            QUANTUM MECHANICS
          </div>
          <h1 style={{ fontSize: 84, fontWeight: 900, lineHeight: 1.05, margin: '14px 0 0 0', color: '#FFFFFF', textShadow: '0 0 30px rgba(0,242,254,0.6)' }}>
            QUANTUM<br />
            <span style={{ color: '#00F2FE' }}>ENTANGLEMENT</span>
          </h1>
        </div>
      </div>

      {/* Central Visual: Holographic SVG HUD Diagram */}
      <div style={{ position: 'relative', width: 920, height: 900, margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="920" height="900" viewBox="0 0 920 900" style={{ overflow: 'visible' }}>
          <defs>
            <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00F2FE" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="amberGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFB800" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFB800" stopOpacity="0" />
            </radialGradient>
            <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Concentric Target Rings */}
          <circle cx="460" cy="450" r="380" fill="none" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="2" strokeDasharray="12 8" />
          <circle cx="460" cy="450" r="280" fill="none" stroke="rgba(0, 242, 254, 0.25)" strokeWidth="2" />
          <circle cx="460" cy="450" r="160" fill="none" stroke="rgba(255, 184, 0, 0.2)" strokeWidth="1.5" strokeDasharray="6 6" />

          {/* Crosshairs & Axis lines */}
          <line x1="80" y1="450" x2="840" y2="450" stroke="rgba(0, 242, 254, 0.2)" strokeWidth="1.5" />
          <line x1="460" y1="70" x2="460" y2="830" stroke="rgba(0, 242, 254, 0.2)" strokeWidth="1.5" />

          {/* Entanglement Resonance Wave linking particle A & B */}
          <path
            d="M 230 450 Q 345 330, 460 450 T 690 450"
            fill="none"
            stroke="#00F2FE"
            strokeWidth="5"
            filter="url(#neonBlur)"
          />
          <path
            d="M 230 450 Q 345 570, 460 450 T 690 450"
            fill="none"
            stroke="#FFB800"
            strokeWidth="3"
            strokeDasharray="10 6"
            filter="url(#neonBlur)"
          />

          {/* Particle A (Spin Up - Left) */}
          <circle cx="230" cy="450" r="80" fill="url(#cyanGlow)" />
          <circle cx="230" cy="450" r="42" fill="#050811" stroke="#00F2FE" strokeWidth="4" />
          <line x1="230" y1="465" x2="230" y2="415" stroke="#00F2FE" strokeWidth="6" strokeLinecap="round" />
          <polyline points="218,428 230,410 242,428" fill="none" stroke="#00F2FE" strokeWidth="5" strokeLinecap="round" />
          <text x="230" y="530" fill="#00F2FE" fontSize="24" fontWeight="bold" textAnchor="middle" letterSpacing="2">Q-BIT |A⟩</text>
          <text x="230" y="560" fill="rgba(224, 247, 250, 0.7)" fontSize="18" textAnchor="middle">SPIN UP (+½)</text>

          {/* Particle B (Spin Down - Right) */}
          <circle cx="690" cy="450" r="80" fill="url(#amberGlow)" />
          <circle cx="690" cy="450" r="42" fill="#050811" stroke="#FFB800" strokeWidth="4" />
          <line x1="690" y1="435" x2="690" y2="485" stroke="#FFB800" strokeWidth="6" strokeLinecap="round" />
          <polyline points="678,472 690,490 702,472" fill="none" stroke="#FFB800" strokeWidth="5" strokeLinecap="round" />
          <text x="690" y="530" fill="#FFB800" fontSize="24" fontWeight="bold" textAnchor="middle" letterSpacing="2">Q-BIT |B⟩</text>
          <text x="690" y="560" fill="rgba(224, 247, 250, 0.7)" fontSize="18" textAnchor="middle">SPIN DOWN (-½)</text>

          {/* Central Bell state formula badge */}
          <rect x="330" y="240" width="260" height="66" rx="8" fill="#0B132B" stroke="#00F2FE" strokeWidth="2" />
          <text x="460" y="282" fill="#00F2FE" fontSize="26" fontWeight="bold" textAnchor="middle" letterSpacing="1">
            |Ψ⁺⟩ = (|01⟩ + |10⟩)/√2
          </text>

          {/* Corner brackets for HUD Framing */}
          <path d="M 40 40 L 40 100 M 40 40 L 100 40" stroke="#00F2FE" strokeWidth="3" fill="none" />
          <path d="M 880 40 L 880 100 M 880 40 L 820 40" stroke="#00F2FE" strokeWidth="3" fill="none" />
          <path d="M 40 860 L 40 800 M 40 860 L 100 860" stroke="#00F2FE" strokeWidth="3" fill="none" />
          <path d="M 880 860 L 880 800 M 880 860 L 820 860" stroke="#00F2FE" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* Explanatory Data Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ backgroundColor: 'rgba(11, 19, 43, 0.7)', border: '1px solid rgba(0, 242, 254, 0.4)', borderRadius: 12, padding: '24px 28px' }}>
          <div style={{ color: '#00F2FE', fontSize: 20, fontWeight: 'bold', letterSpacing: 2 }}>MEASUREMENT COLLAPSE</div>
          <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 600, marginTop: 8 }}>INSTANTANEOUS</div>
          <div style={{ color: 'rgba(224, 247, 250, 0.6)', fontSize: 18, marginTop: 6 }}>State correlation holds at infinite spatial distance.</div>
        </div>

        <div style={{ backgroundColor: 'rgba(11, 19, 43, 0.7)', border: '1px solid rgba(255, 184, 0, 0.4)', borderRadius: 12, padding: '24px 28px' }}>
          <div style={{ color: '#FFB800', fontSize: 20, fontWeight: 'bold', letterSpacing: 2 }}>LOCAL REALISM VIOLATION</div>
          <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 600, marginTop: 8 }}>BELL TEST: S = 2.828</div>
          <div style={{ color: 'rgba(224, 247, 250, 0.6)', fontSize: 18, marginTop: 6 }}>Exceeds classical limit of 2.0 (Quantum bound).</div>
        </div>
      </div>

      {/* Bottom Footer Callout */}
      <div style={{ backgroundColor: 'rgba(0, 242, 254, 0.08)', borderLeft: '6px solid #00F2FE', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#00F2FE', fontWeight: 'bold', fontSize: 22 }}>KEY PRINCIPLE: </span>
          <span style={{ fontSize: 22, color: '#FFFFFF' }}>Measuring Particle A fixes Particle B with zero time delay.</span>
        </div>
        <span style={{ fontSize: 18, color: '#00F2FE', opacity: 0.8 }}>#PHYSICS // PEERGRAPHICS</span>
      </div>
    </div>
  );
};
