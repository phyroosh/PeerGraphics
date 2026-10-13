import React from 'react';

export const Theme20_RetroWindows95: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#008080', // Classic Win95 Teal Desktop
        color: '#000000',
        fontFamily: "'MS Sans Serif', 'Tahoma', 'Segoe UI', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '90px 65px 120px 65px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Main Window (Win95 Chrome Frame) */}
      <div
        style={{
          backgroundColor: '#C0C0C0',
          borderTop: '3px solid #FFFFFF',
          borderLeft: '3px solid #FFFFFF',
          borderRight: '3px solid #000000',
          borderBottom: '3px solid #000000',
          boxShadow: 'inset 1px 1px 0 #DFDFDF, inset -1px -1px 0 #808080, 8px 8px 0 rgba(0,0,0,0.4)',
          padding: 6,
        }}
      >
        {/* Navy Gradient Titlebar */}
        <div
          style={{
            background: 'linear-gradient(90deg, #000080 0%, #1084D0 100%)',
            color: '#FFFFFF',
            padding: '8px 14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: 22,
            letterSpacing: 1,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Pixel Computer Icon */}
            <div
              style={{
                width: 20,
                height: 16,
                backgroundColor: '#FFFFFF',
                border: '2px solid #000000',
              }}
            />
            <span>Dial-Up Networking • Connected at 28,800 bps</span>
          </div>

          {/* Window Control Buttons */}
          <div style={{ display: 'flex', gap: 4 }}>
            {['_', '□', 'X'].map((btn, i) => (
              <div
                key={i}
                style={{
                  width: 28,
                  height: 26,
                  backgroundColor: '#C0C0C0',
                  borderTop: '2px solid #FFFFFF',
                  borderLeft: '2px solid #FFFFFF',
                  borderRight: '2px solid #000000',
                  borderBottom: '2px solid #000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
              >
                {btn}
              </div>
            ))}
          </div>
        </div>

        {/* Window Interior Content */}
        <div style={{ padding: '24px 28px' }}>
          <div style={{ fontSize: 22, color: '#000080', fontWeight: 'bold' }}>
            INTERNET PROTOCOL SUITE // RFC-793
          </div>
          <h1
            style={{
              fontSize: 78,
              fontWeight: 900,
              lineHeight: 1.05,
              margin: '8px 0 0 0',
              color: '#000000',
              letterSpacing: -1,
            }}
          >
            TCP/IP 3-WAY<br />
            <span style={{ color: '#000080' }}>HANDSHAKE</span>
          </h1>
        </div>
      </div>

      {/* Central Interactive Packet Transmission Ladder Window */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#C0C0C0',
          borderTop: '3px solid #FFFFFF',
          borderLeft: '3px solid #FFFFFF',
          borderRight: '3px solid #000000',
          borderBottom: '3px solid #000000',
          boxShadow: 'inset 1px 1px 0 #DFDFDF, inset -1px -1px 0 #808080, 8px 8px 0 rgba(0,0,0,0.4)',
          padding: 6,
          margin: '15px 0',
        }}
      >
        {/* Sub-Titlebar */}
        <div
          style={{
            background: 'linear-gradient(90deg, #000080 0%, #1084D0 100%)',
            color: '#FFFFFF',
            padding: '6px 12px',
            fontSize: 18,
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>Packet Monitor // Wireshark_v1.0.exe</span>
          <span>PORT 80 [HTTP]</span>
        </div>

        {/* Inner Inset Sunken Canvas */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '2px solid #808080',
            borderLeft: '2px solid #808080',
            borderRight: '2px solid #FFFFFF',
            borderBottom: '2px solid #FFFFFF',
            padding: '20px 20px',
            height: 720,
            boxSizing: 'border-box',
          }}
        >
          <svg width="890" height="680" viewBox="0 0 890 680" style={{ overflow: 'visible' }}>
            {/* Client Machine & Server Rack Pillars */}
            {/* Client Pillar */}
            <g transform="translate(140, 20)">
              <rect x="-80" y="0" width="160" height="50" fill="#C0C0C0" stroke="#000000" strokeWidth="2" />
              <text x="0" y="32" textAnchor="middle" fill="#000000" fontSize="18" fontWeight="bold">
                CLIENT [BROWSER]
              </text>
              <line x1="0" y1="50" x2="0" y2="600" stroke="#000080" strokeWidth="3" strokeDasharray="6 4" />
            </g>

            {/* Server Pillar */}
            <g transform="translate(750, 20)">
              <rect x="-80" y="0" width="160" height="50" fill="#000080" stroke="#000000" strokeWidth="2" />
              <text x="0" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">
                WEB SERVER
              </text>
              <line x1="0" y1="50" x2="0" y2="600" stroke="#000080" strokeWidth="3" strokeDasharray="6 4" />
            </g>

            {/* Handshake Step 1: SYN [Seq = 100] */}
            <g transform="translate(140, 150)">
              <line x1="0" y1="0" x2="610" y2="100" stroke="#D97706" strokeWidth="5" />
              <polygon points="610,100 590,90 595,105" fill="#D97706" />
              <rect x="180" y="10" width="260" height="42" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
              <text x="310" y="38" textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="bold">
                1. SYN [Seq = 100]
              </text>
            </g>

            {/* Handshake Step 2: SYN-ACK [Seq = 300, Ack = 101] */}
            <g transform="translate(750, 290)">
              <line x1="0" y1="0" x2="-610" y2="100" stroke="#0284C7" strokeWidth="5" />
              <polygon points="-610,100 -590,90 -595,105" fill="#0284C7" />
              <rect x="-460" y="10" width="310" height="42" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
              <text x="-305" y="38" textAnchor="middle" fill="#0369A1" fontSize="16" fontWeight="bold">
                2. SYN-ACK [Seq=300, Ack=101]
              </text>
            </g>

            {/* Handshake Step 3: ACK [Seq = 101, Ack = 301] */}
            <g transform="translate(140, 430)">
              <line x1="0" y1="0" x2="610" y2="100" stroke="#16A34A" strokeWidth="5" />
              <polygon points="610,100 590,90 595,105" fill="#16A34A" />
              <rect x="160" y="10" width="290" height="42" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
              <text x="305" y="38" textAnchor="middle" fill="#15803D" fontSize="16" fontWeight="bold">
                3. ACK [Seq=101, Ack=301]
              </text>
            </g>

            {/* Connection Established Banner */}
            <g transform="translate(240, 580)">
              <rect x="0" y="0" width="410" height="50" fill="#16A34A" stroke="#000000" strokeWidth="2" />
              <text x="205" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="bold">
                STATUS: ESTABLISHED (RTT = 28ms)
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Hex Dump & Transmission Log Card */}
      <div
        style={{
          backgroundColor: '#C0C0C0',
          borderTop: '3px solid #FFFFFF',
          borderLeft: '3px solid #FFFFFF',
          borderRight: '3px solid #000000',
          borderBottom: '3px solid #000000',
          boxShadow: 'inset 1px 1px 0 #DFDFDF, inset -1px -1px 0 #808080, 8px 8px 0 rgba(0,0,0,0.4)',
          padding: '24px 28px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span style={{ fontSize: 20, fontWeight: 'bold', color: '#000080' }}>
            Transmission Control Protocol // Reliability
          </span>
          <span
            style={{
              backgroundColor: '#008080',
              color: '#FFFFFF',
              fontSize: 15,
              fontWeight: 'bold',
              padding: '4px 12px',
            }}
          >
            PACKET LOSS: 0.00%
          </span>
        </div>

        <p style={{ margin: 0, fontSize: 20, lineHeight: 1.45, color: '#000000' }}>
          Before sending any webpage data, TCP performs a strict 3-way synchronization dance: <em>SYN → SYN-ACK → ACK</em>. Both sides negotiate initial sequence numbers to guarantee every byte arrives in perfect order without duplication.
        </p>
      </div>

      {/* Windows 95 Taskbar at Bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: '#C0C0C0',
          borderTop: '2px solid #FFFFFF',
          boxShadow: 'inset 0 1px 0 #DFDFDF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 12px',
          boxSizing: 'border-box',
        }}
      >
        {/* Start Button */}
        <div
          style={{
            backgroundColor: '#C0C0C0',
            borderTop: '2px solid #FFFFFF',
            borderLeft: '2px solid #FFFFFF',
            borderRight: '2px solid #000000',
            borderBottom: '2px solid #000000',
            padding: '4px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontWeight: 'bold',
            fontSize: 18,
          }}
        >
          {/* Windows 4-color flag */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, width: 14, height: 14 }}>
            <div style={{ backgroundColor: '#FF0000' }} />
            <div style={{ backgroundColor: '#00AA00' }} />
            <div style={{ backgroundColor: '#0000FF' }} />
            <div style={{ backgroundColor: '#FFFF00' }} />
          </div>
          <span>Start</span>
        </div>

        {/* Tray Clock Area */}
        <div
          style={{
            borderTop: '2px solid #808080',
            borderLeft: '2px solid #808080',
            borderRight: '2px solid #FFFFFF',
            borderBottom: '2px solid #FFFFFF',
            padding: '4px 16px',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          12:42 PM
        </div>
      </div>
    </div>
  );
};
