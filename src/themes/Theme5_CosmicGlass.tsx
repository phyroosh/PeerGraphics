import React from 'react';

export const Theme5_CosmicGlass: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#090A1A',
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(121, 40, 202, 0.45) 0%, transparent 50%),
          radial-gradient(circle at 80% 60%, rgba(0, 112, 243, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 50% 85%, rgba(255, 0, 128, 0.35) 0%, transparent 50%)
        `,
        color: '#FFFFFF',
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: 'relative',
        boxSizing: 'border-box',
        padding: '120px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Top Header & Glass Badge */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 22px',
              borderRadius: 40,
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'linear-gradient(135deg, #FF0080, #7928CA)' }} />
            <span style={{ fontSize: 20, letterSpacing: 2, fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}>
              NEURAL ARCHITECTURES
            </span>
          </div>

          <span style={{ fontSize: 22, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>ATTN(Q, K, V)</span>
        </div>

        <div style={{ marginTop: 40 }}>
          <div style={{ fontSize: 28, fontWeight: 700, background: 'linear-gradient(90deg, #FF0080, #7928CA, #0070F3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: 2 }}>
            DEEP LEARNING FOUNDATIONS
          </div>
          <h1 style={{ fontSize: 82, fontWeight: 900, lineHeight: 1.05, margin: '14px 0 0 0', letterSpacing: -1 }}>
            TRANSFORMER<br />
            <span style={{ background: 'linear-gradient(90deg, #0070F3, #00DFD8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              SELF-ATTENTION
            </span>
          </h1>
        </div>
      </div>

      {/* Main Frosted Glass Visual Card */}
      <div
        style={{
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: 32,
          padding: '40px 36px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <span style={{ fontSize: 22, fontWeight: 800, color: 'rgba(255, 255, 255, 0.9)' }}>MULTI-HEAD ATTENTION MATRIX</span>
          <span style={{ fontSize: 18, color: '#00DFD8', backgroundColor: 'rgba(0, 223, 216, 0.15)', padding: '6px 14px', borderRadius: 20, fontWeight: 700 }}>
            d_k = 64 // 8 HEADS
          </span>
        </div>

        {/* Attention Vectors Diagram */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 30 }}>
          {/* Query Vector */}
          <div style={{ backgroundColor: 'rgba(255, 0, 128, 0.12)', border: '1px solid rgba(255, 0, 128, 0.3)', borderRadius: 20, padding: '24px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: '#FF0080' }}>Q</div>
            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>QUERY</div>
            <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>"What am I looking for?"</div>
          </div>

          {/* Key Vector */}
          <div style={{ backgroundColor: 'rgba(121, 40, 202, 0.12)', border: '1px solid rgba(121, 40, 202, 0.3)', borderRadius: 20, padding: '24px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: '#BD00FF' }}>K</div>
            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>KEY</div>
            <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>"What clues do I offer?"</div>
          </div>

          {/* Value Vector */}
          <div style={{ backgroundColor: 'rgba(0, 112, 243, 0.12)', border: '1px solid rgba(0, 112, 243, 0.3)', borderRadius: 20, padding: '24px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: '#0070F3' }}>V</div>
            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>VALUE</div>
            <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>"The content delivered"</div>
          </div>
        </div>

        {/* Attention Heatmap Visualization */}
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: 20, padding: 24, border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginBottom: 14 }}>
            TOKEN AFFINITY WEIGHTS: [Q · K^T / √d_k]
          </div>

          {/* Simulated Softmax Heatmap Rows */}
          {[
            { token: 'The', scores: [0.85, 0.05, 0.05, 0.05] },
            { token: 'animal', scores: [0.10, 0.75, 0.10, 0.05] },
            { token: 'crossed', scores: [0.05, 0.20, 0.65, 0.10] },
            { token: 'it', scores: [0.05, 0.82, 0.05, 0.08] },
          ].map((row, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
              <span style={{ width: 90, fontSize: 18, fontWeight: 700, color: '#FFFFFF' }}>{row.token}</span>
              <div style={{ flex: 1, display: 'flex', gap: 8 }}>
                {row.scores.map((score, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      flex: 1,
                      height: 28,
                      borderRadius: 6,
                      backgroundColor: `rgba(0, 223, 216, ${score})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                      fontWeight: 800,
                      color: score > 0.4 ? '#090A1A' : '#FFFFFF',
                    }}
                  >
                    {Math.round(score * 100)}%
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scaled Dot-Product Formula Glass Card */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: 24,
          padding: '28px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 20, color: '#00DFD8', fontWeight: 800 }}>ATTENTION FORMULA</div>
          <div style={{ fontSize: 32, fontWeight: 900, marginTop: 4, letterSpacing: 1 }}>
            softmax( Q · Kᵀ / √dₖ ) · V
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)' }}>VASWANI ET AL.</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#FF0080' }}>2017 BREAKTHROUGH</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.7, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 18 }}>
        <span style={{ fontSize: 20, fontWeight: 600 }}>PEERGRAPHICS COSMIC GLASS ENGINE</span>
        <span style={{ fontSize: 18 }}>MODERN EXPLAINER SERIES</span>
      </div>
    </div>
  );
};
