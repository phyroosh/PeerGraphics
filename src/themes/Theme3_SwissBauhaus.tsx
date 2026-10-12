import React from 'react';

export const Theme3_SwissBauhaus: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#F3EFE6',
        color: '#121212',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        position: 'relative',
        boxSizing: 'border-box',
        padding: '120px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Bauhaus Header Banner */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '8px solid #121212', paddingBottom: 24 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 28, height: 28, backgroundColor: '#E63946' }} />
            <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: '#1D3557' }} />
            <div style={{ width: 0, height: 0, borderLeft: '14px solid transparent', borderRight: '14px solid transparent', borderBottom: '28px solid #FFB703' }} />
            <span style={{ fontSize: 26, fontWeight: 900, letterSpacing: 2, marginLeft: 10 }}>GAME THEORY // 01</span>
          </div>
          <span style={{ fontSize: 24, fontWeight: 700, backgroundColor: '#121212', color: '#F3EFE6', padding: '6px 14px' }}>FIG. 2.4</span>
        </div>

        <div style={{ marginTop: 40 }}>
          <div style={{ fontSize: 30, fontWeight: 800, color: '#E63946', letterSpacing: 3, textTransform: 'uppercase' }}>
            MATHEMATICAL STRATEGY
          </div>
          <h1 style={{ fontSize: 88, fontWeight: 900, lineHeight: 0.95, margin: '16px 0 0 0', letterSpacing: -2, textTransform: 'uppercase' }}>
            THE PRISONER’S<br />
            <span style={{ color: '#E63946' }}>DILEMMA</span>
          </h1>
        </div>
      </div>

      {/* Main Visual: Bold Bauhaus 2x2 Payoff Matrix */}
      <div style={{ margin: '30px auto', width: '100%', maxWidth: 920 }}>
        {/* Column Labels */}
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', textAlign: 'center', marginBottom: 12, alignItems: 'flex-end' }}>
          <div />
          <div style={{ fontSize: 26, fontWeight: 900, color: '#1D3557', letterSpacing: 1 }}>PLAYER B: COOPERATE</div>
          <div style={{ fontSize: 26, fontWeight: 900, color: '#E63946', letterSpacing: 1 }}>PLAYER B: DEFECT</div>
        </div>

        {/* Row 1: Player A Cooperate */}
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: 16, marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 16, fontSize: 24, fontWeight: 900, color: '#1D3557', textAlign: 'right', lineHeight: 1.1 }}>
            PLAYER A<br />COOPERATE
          </div>

          {/* Cell 1,1: Win-Win Reward */}
          <div style={{ backgroundColor: '#FFFFFF', border: '6px solid #121212', padding: '36px 28px', position: 'relative', boxShadow: '8px 8px 0 #121212' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#777', letterSpacing: 1 }}>MUTUAL COOPERATION</div>
            <div style={{ fontSize: 44, fontWeight: 900, color: '#1D3557', marginTop: 12 }}>-1 YR , -1 YR</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#333', marginTop: 8 }}>PARETO OPTIMAL</div>
          </div>

          {/* Cell 1,2: Sucker's Payoff */}
          <div style={{ backgroundColor: '#FFFFFF', border: '6px solid #121212', padding: '36px 28px', position: 'relative', boxShadow: '8px 8px 0 #121212' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#777', letterSpacing: 1 }}>EXPLOITATION</div>
            <div style={{ fontSize: 44, fontWeight: 900, color: '#E63946', marginTop: 12 }}>-5 YR , 0 YR</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#E63946', marginTop: 8 }}>SUCKER'S PAYOFF</div>
          </div>
        </div>

        {/* Row 2: Player A Defect */}
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 16, fontSize: 24, fontWeight: 900, color: '#E63946', textAlign: 'right', lineHeight: 1.1 }}>
            PLAYER A<br />DEFECT
          </div>

          {/* Cell 2,1: Temptation to Defect */}
          <div style={{ backgroundColor: '#FFFFFF', border: '6px solid #121212', padding: '36px 28px', position: 'relative', boxShadow: '8px 8px 0 #121212' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#777', letterSpacing: 1 }}>TEMPTATION</div>
            <div style={{ fontSize: 44, fontWeight: 900, color: '#E63946', marginTop: 12 }}>0 YR , -5 YR</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#E63946', marginTop: 8 }}>FREE RIDER ADVANTAGE</div>
          </div>

          {/* Cell 2,2: Nash Equilibrium (Highlighted in Bold Red) */}
          <div style={{ backgroundColor: '#E63946', color: '#FFFFFF', border: '6px solid #121212', padding: '36px 28px', position: 'relative', boxShadow: '12px 12px 0 #121212' }}>
            <div style={{ position: 'absolute', top: -18, right: 20, backgroundColor: '#FFB703', color: '#121212', padding: '4px 14px', fontWeight: 900, fontSize: 16, border: '3px solid #121212' }}>
              STABLE EQUILIBRIUM
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#FFE5D9', letterSpacing: 1 }}>NASH EQUILIBRIUM</div>
            <div style={{ fontSize: 44, fontWeight: 900, color: '#FFFFFF', marginTop: 12 }}>-3 YR , -3 YR</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#FFE5D9', marginTop: 8 }}>DOMINANT STRATEGY TRAP</div>
          </div>
        </div>
      </div>

      {/* Analytical Callout */}
      <div style={{ border: '6px solid #121212', backgroundColor: '#FFFFFF', padding: '32px 36px', boxShadow: '10px 10px 0 #121212' }}>
        <div style={{ fontSize: 24, fontWeight: 900, color: '#E63946', textTransform: 'uppercase' }}>
          THE CORE PARADOX
        </div>
        <div style={{ fontSize: 26, fontWeight: 700, color: '#121212', marginTop: 8, lineHeight: 1.35 }}>
          Individual rational self-interest forces both agents to defect—locking both parties into a strictly worse outcome than mutual cooperation.
        </div>
      </div>

      {/* Footer Strip */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '4px solid #121212', paddingTop: 20 }}>
        <span style={{ fontSize: 22, fontWeight: 900 }}>PEERGRAPHICS // SWISS DESIGN SYSTEM</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: '#1D3557' }}>NASH (1950) // ZERO-SUM THEORY</span>
      </div>
    </div>
  );
};
