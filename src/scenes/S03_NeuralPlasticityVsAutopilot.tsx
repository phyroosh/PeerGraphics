import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

/**
 * Scene 03: Neural Plasticity vs Autopilot
 * Pure Motion Design: Active synaptic problem-solving network vs flatline autopilot freeze.
 * Passes the Mute Test: Viewer sees vibrant synaptic sparks firing across branches,
 * then abruptly flatlining into a frozen loop when identical repetition takes over.
 */
export const S03_NeuralPlasticityVsAutopilot: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Entrance spring
  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Autopilot transition happens at local frame 182 (audio cue: "When you mindlessly repeat...")
  const isAutopilot = frame >= 182;

  const autopilotSpring = spring({
    frame: frame - 182,
    fps,
    config: {damping: 12, stiffness: 200, mass: 1.1},
  });

  // Synaptic pulse frequency
  const sparkIntensity = isAutopilot
    ? interpolate(autopilotSpring, [0, 1], [1, 0.1])
    : 0.8 + 0.2 * Math.sin(frame * 0.4);

  // Warning Stamp Spring
  const stampSpring = spring({
    frame: frame - 200,
    fps,
    config: {damping: 10, stiffness: 220},
  });
  const stampScale = interpolate(stampSpring, [0, 1], [2.2, 1]);

  return (
    <div
      style={{
        width: '1080px',
        height: '1920px',
        position: 'relative',
        boxSizing: 'border-box',
        paddingTop: DESIGN_TOKENS.safeArea.top,
        paddingLeft: DESIGN_TOKENS.safeArea.left,
        paddingRight: DESIGN_TOKENS.safeArea.right,
        opacity: entry,
      }}
    >
      {/* Dynamic Headline */}
      <div style={{marginBottom: 20}}>
        <h1
          style={{
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1.02,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: -1.5,
            color: '#111111',
            fontFamily: DESIGN_TOKENS.fonts.display,
          }}
        >
          HOW THE BRAIN LEARNS
          <br />
          <span
            style={{
              backgroundColor: isAutopilot ? '#FF0055' : '#00E5FF',
              color: isAutopilot ? '#FFFFFF' : '#111111',
              padding: '4px 20px',
              display: 'inline-block',
              boxShadow: '10px 10px 0 #111111',
              transform: isAutopilot ? 'rotate(1deg)' : 'rotate(-2deg)',
              marginTop: 10,
              transition: 'background-color 0.2s',
            }}
          >
            {isAutopilot ? 'AUTOPILOT: ZERO ADAPTATION' : 'ACTIVE PROBLEM SOLVING'}
          </span>
        </h1>
      </div>

      {/* Central Visual Apparatus: The Brain Cortex & Synaptic Network */}
      <div
        style={{
          width: '850px',
          height: '840px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg
          width="850"
          height="840"
          viewBox="0 0 850 840"
          fill="none"
          style={{overflow: 'visible'}}
        >
          {/* Brain Drop Shadow FIRST */}
          <path
            d="M 220 540 C 170 540 120 490 110 410 C 100 330 140 230 220 160 C 310 90 450 90 580 130 C 700 170 770 270 770 370 C 770 450 720 520 640 530 C 580 540 530 590 500 650 C 470 710 430 750 380 750 C 340 750 320 710 330 650 C 340 590 290 540 220 540 Z"
            fill="#111111"
            transform="translate(12, 12)"
          />

          {/* Brain Silhouette Base */}
          <path
            d="M 220 540 C 170 540 120 490 110 410 C 100 330 140 230 220 160 C 310 90 450 90 580 130 C 700 170 770 270 770 370 C 770 450 720 520 640 530 C 580 540 530 590 500 650 C 470 710 430 750 380 750 C 340 750 320 710 330 650 C 340 590 290 540 220 540 Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="6"
          />

          {/* Brain Sulci / Architectural Folding Lines */}
          <path
            d="M 290 200 C 340 240 410 210 460 250 C 510 290 590 260 670 320"
            stroke="#111111"
            strokeWidth="4.5"
            strokeDasharray="8 8"
            fill="none"
          />
          <path
            d="M 230 300 C 280 320 320 380 390 380 C 460 380 510 320 590 360"
            stroke="#111111"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M 310 450 C 370 480 430 440 480 480"
            stroke="#111111"
            strokeWidth="4"
            fill="none"
          />

          {/* Synaptic Nodes and Firing Dendrites inside Cortex */}
          {!isAutopilot ? (
            <g transform="translate(160, 140)">
              {/* Branching Neural Connections */}
              {[
                {x1: 120, y1: 140, x2: 240, y2: 180, color: '#00E5FF'},
                {x1: 240, y1: 180, x2: 360, y2: 130, color: '#FFE600'},
                {x1: 240, y1: 180, x2: 290, y2: 270, color: '#00E5FF'},
                {x1: 290, y1: 270, x2: 410, y2: 290, color: '#FF0055'},
                {x1: 360, y1: 130, x2: 460, y2: 200, color: '#FFE600'},
                {x1: 410, y1: 290, x2: 490, y2: 320, color: '#00E5FF'},
                {x1: 120, y1: 240, x2: 220, y2: 260, color: '#FF0055'},
                {x1: 220, y1: 260, x2: 290, y2: 270, color: '#FFE600'},
              ].map((line, idx) => (
                <line
                  key={idx}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke={line.color}
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity={sparkIntensity}
                />
              ))}

              {/* Pulsing Synaptic Node Circles */}
              {[
                {cx: 120, cy: 140, r: 16, color: '#00E5FF'},
                {cx: 240, cy: 180, r: 20, color: '#FFE600'},
                {cx: 360, cy: 130, r: 18, color: '#00E5FF'},
                {cx: 290, cy: 270, r: 22, color: '#FF0055'},
                {cx: 410, cy: 290, r: 16, color: '#FFE600'},
                {cx: 460, cy: 200, r: 20, color: '#00E5FF'},
                {cx: 490, cy: 320, r: 17, color: '#FF0055'},
                {cx: 120, cy: 240, r: 15, color: '#FFE600'},
                {cx: 220, cy: 260, r: 18, color: '#00E5FF'},
              ].map((node, idx) => (
                <g key={idx}>
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r * sparkIntensity}
                    fill={node.color}
                    stroke="#111111"
                    strokeWidth="4"
                  />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r * 1.5 * sparkIntensity}
                    fill="none"
                    stroke={node.color}
                    strokeWidth="2"
                    opacity={0.6}
                  />
                </g>
              ))}
            </g>
          ) : (
            /* Autopilot State: Trapped in a rigid dull loop */
            <g transform="translate(160, 140)">
              <circle
                cx="300"
                cy="230"
                r="110"
                fill="none"
                stroke="#111111"
                strokeWidth="8"
                strokeDasharray="20 20"
                transform={`rotate(${frame * 1.5} 300 230)`}
              />
              <circle cx="300" cy="230" r="34" fill="#EAE5DB" stroke="#111111" strokeWidth="6" />
              <text x="300" y="242" fill="#111111" fontSize="28" fontWeight="900" textAnchor="middle">
                LOOP
              </text>
            </g>
          )}

          {/* Autopilot ECG Flatline Monitor (Shadow FIRST) */}
          {isAutopilot && (
            <g transform="translate(140, 580)">
              <rect x="8" y="8" width="560" height="95" rx="8" fill="#111111" />
              <rect x="0" y="0" width="560" height="95" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="5" />
              <text x="25" y="42" fill="#FF0055" fontSize="24" fontWeight="900">
                NEURAL ENGAGEMENT:
              </text>
              {/* Flatline line */}
              <line x1="280" y1="36" x2="520" y2="36" stroke="#FF0055" strokeWidth="6" strokeLinecap="round" />
              <text x="25" y="78" fill="#111111" fontSize="30" fontWeight="900">
                0% PLASTIC ADAPTATION (FROZEN)
              </text>
            </g>
          )}

          {/* Giant Risograph Stamp on Autopilot (Shadow FIRST) */}
          {isAutopilot && (
            <g
              transform={`translate(480, 260) scale(${stampScale}) rotate(-6)`}
              style={{transformOrigin: '150px 50px'}}
            >
              <rect
                x="-8"
                y="-8"
                width="320"
                height="105"
                rx="8"
                fill="#111111"
              />
              <rect
                x="-14"
                y="-14"
                width="320"
                height="105"
                rx="8"
                fill="#FF0055"
                stroke="#111111"
                strokeWidth="6"
              />
              <text
                x="146"
                y="32"
                fill="#FFFFFF"
                fontSize="34"
                fontWeight="900"
                textAnchor="middle"
              >
                AUTOPILOT
              </text>
              <text
                x="146"
                y="70"
                fill="#FFE600"
                fontSize="26"
                fontWeight="900"
                textAnchor="middle"
              >
                BRAIN STOPS ADAPTING
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};
