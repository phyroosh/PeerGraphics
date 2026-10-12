import React from 'react';

export const Theme7_PhosphorTerminal: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#071009',
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.4) 0px,
            rgba(0, 0, 0, 0.4) 2px,
            transparent 2px,
            transparent 4px
          ),
          radial-gradient(circle at 50% 50%, rgba(51, 255, 51, 0.08) 0%, transparent 80%)
        `,
        color: '#33FF33',
        fontFamily: "'Courier New', Courier, monospace",
        position: 'relative',
        boxSizing: 'border-box',
        padding: '110px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '10px solid #1A3820',
        textShadow: '0 0 10px rgba(51, 255, 51, 0.7)',
      }}
    >
      {/* Terminal Title & Shell Header */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #33FF33', paddingBottom: 16 }}>
          <span style={{ fontSize: 24, fontWeight: 'bold' }}>TTY: /dev/tty0 // VT-100 CRT</span>
          <span style={{ fontSize: 24, color: '#FFB000' }}>[STATUS: 0x00_OK]</span>
        </div>

        <div style={{ marginTop: 36 }}>
          <div style={{ fontSize: 24, color: '#88FF88', letterSpacing: 3 }}>
            &gt; SYSTEM_ARCH // RISC-V PIPELINE
          </div>
          <h1 style={{ fontSize: 80, fontWeight: 900, lineHeight: 1.05, margin: '14px 0 0 0', letterSpacing: 2 }}>
            CPU PIPELINE<br />
            <span style={{ color: '#FFB000' }}>DATA HAZARDS</span>
          </h1>
        </div>
      </div>

      {/* Main Terminal ASCII & Architecture Pipeline Table */}
      <div style={{ border: '2px solid #33FF33', padding: '36px 30px', backgroundColor: 'rgba(51, 255, 51, 0.03)' }}>
        <div style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#FFB000' }}>
          === 5-STAGE INSTRUCTION PIPELINE CLOCK CYCLES ===
        </div>

        {/* Pipeline Stages Diagram */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 28, textAlign: 'center' }}>
          {['IF', 'ID', 'EX', 'MEM', 'WB'].map((stage, idx) => (
            <div key={idx} style={{ border: '2px solid #33FF33', padding: '16px 8px' }}>
              <div style={{ fontSize: 28, fontWeight: 900 }}>{stage}</div>
              <div style={{ fontSize: 14, color: '#88FF88', marginTop: 4 }}>
                {idx === 0 ? 'FETCH' : idx === 1 ? 'DECODE' : idx === 2 ? 'EXEC' : idx === 3 ? 'MEMORY' : 'WRITE'}
              </div>
            </div>
          ))}
        </div>

        {/* Instruction Execution Flow Over Clock Cycles */}
        <div style={{ fontSize: 20, lineHeight: 1.7, whiteSpace: 'pre' }}>
{`CYCLE:      C1    C2    C3    C4    C5    C6
-----------------------------------------------
INSTR 1:  [ IF ][ ID ][ EX ][ MEM ][ WB ]
INSTR 2:        [ IF ][ ID ] -STALL- [ EX ][ MEM ]
INSTR 3:              [ IF ] -STALL- -STALL- [ ID ]`}
        </div>

        {/* Hazard Detection Box */}
        <div style={{ marginTop: 24, border: '2px dashed #FFB000', padding: 20, color: '#FFB000' }}>
          <div style={{ fontSize: 20, fontWeight: 'bold' }}>! READ-AFTER-WRITE (RAW) DEPENDENCY DETECTED !</div>
          <div style={{ fontSize: 18, color: '#FFE082', marginTop: 8 }}>
            ADD R1, R2, R3   -- Writes to register R1 at Cycle 5<br />
            SUB R4, R1, R5   -- Requires register R1 at Cycle 3<br />
            ACTION: Hardware Hazard Unit inserts bubble (2 stall cycles) or invokes Operand Forwarding.
          </div>
        </div>
      </div>

      {/* Register Telemetry Dump */}
      <div style={{ border: '2px solid rgba(51, 255, 51, 0.4)', padding: '20px 24px', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        <div style={{ fontSize: 18, color: '#88FF88', fontWeight: 'bold' }}>HARDWARE REGISTERS [HEX DUMP]</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 12, fontSize: 18 }}>
          <div>[PC]  0x80000000</div>
          <div>[R1]  0x0000002A</div>
          <div>[R2]  0x00000010</div>
          <div>[R3]  0x0000001A</div>
        </div>
      </div>

      {/* Terminal Command Line Footer with Blinking Cursor */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #33FF33', paddingTop: 18 }}>
        <div style={{ fontSize: 22 }}>
          <span>root@peergraphics:~# cat /proc/cpuinfo</span>
          <span style={{ backgroundColor: '#33FF33', color: '#071009', padding: '0 4px', marginLeft: 8 }}>█</span>
        </div>
        <span style={{ fontSize: 18, color: '#88FF88' }}>ARCH // VT-100 TERM</span>
      </div>
    </div>
  );
};
