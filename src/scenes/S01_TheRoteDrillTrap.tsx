import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

/**
 * Scene 01: The Rote Drill Trap
 * Pure Motion Design: Robotic practitioner on a rigid monorail vs real-world perturbation.
 * Passes the Mute Test: Viewer immediately sees a robotic drill jamming and shattering
 * when a slight real-world obstacle is introduced.
 */
export const S01_TheRoteDrillTrap: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Entrance spring
  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Rep counter: counts from 1 to 100 rapidly in Beat 1
  const repCount = Math.min(100, Math.floor(interpolate(frame, [15, 140], [1, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })));

  // Robotic swing oscillation in Beat 1 (frames 0 - 155)
  const isRoboticPhase = frame < 155;
  const swingAngle = isRoboticPhase
    ? Math.sin(frame * 0.28) * 35
    : interpolate(frame, [155, 175], [35, -20], {extrapolateRight: 'clamp'});

  // Perturbation collision & track snap (frames 155 - 311)
  const collisionSpring = spring({
    frame: frame - 155,
    fps,
    config: {damping: 10, stiffness: 220, mass: 1.2},
  });

  // Puppet recoil & eye panic
  const puppetRecoilX = interpolate(collisionSpring, [0, 1], [0, -45]);
  const puppetTilt = interpolate(collisionSpring, [0, 1], [0, -18]);
  const eyeWide = interpolate(collisionSpring, [0, 1], [1, 1.8]);

  // Stamp slam on "NEVER REPEAT"
  const stampSpring = spring({
    frame: frame - 180,
    fps,
    config: {damping: 12, stiffness: 180},
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
            fontSize: 90,
            fontWeight: 900,
            lineHeight: 1.02,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: -1.5,
            color: '#111111',
            fontFamily: DESIGN_TOKENS.fonts.display,
          }}
        >
          THE ROTE TRAP
          <br />
          <span
            style={{
              backgroundColor: isRoboticPhase ? '#FFE600' : '#FF0055',
              color: isRoboticPhase ? '#111111' : '#FFFFFF',
              padding: '4px 20px',
              display: 'inline-block',
              boxShadow: '10px 10px 0 #111111',
              transform: isRoboticPhase ? 'rotate(-2deg)' : 'rotate(1deg)',
              marginTop: 12,
              transition: 'background-color 0.2s',
            }}
          >
            {isRoboticPhase ? '100 IDENTICAL REPS' : 'NEVER REPEAT THE SAME'}
          </span>
        </h1>
      </div>

      {/* Central Visual Apparatus: The Rigid Monorail & Puppet */}
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
          {/* Tally Box in Top Right (Shadow FIRST, then foreground box) */}
          <g transform="translate(560, 60)">
            <rect
              x="8"
              y="8"
              width="240"
              height="100"
              rx="8"
              fill="#111111"
            />
            <rect
              x="0"
              y="0"
              width="240"
              height="100"
              rx="8"
              fill="#FFFFFF"
              stroke="#111111"
              strokeWidth="5"
            />
            <text
              x="120"
              y="45"
              fill="#111111"
              fontSize="32"
              fontWeight="900"
              textAnchor="middle"
            >
              DRILL COUNT
            </text>
            <text
              x="120"
              y="85"
              fill={repCount === 100 ? '#FF0055' : '#111111'}
              fontSize="40"
              fontWeight="900"
              textAnchor="middle"
            >
              #{repCount} / 100
            </text>
          </g>

          {/* Shadow track */}
          <line
            x1="100"
            y1="560"
            x2="750"
            y2="560"
            stroke="#111111"
            strokeWidth="18"
            strokeLinecap="round"
          />
          {/* Track base rail */}
          <line
            x1="90"
            y1="550"
            x2="740"
            y2="550"
            stroke={isRoboticPhase ? '#111111' : '#FF0055'}
            strokeWidth="14"
            strokeLinecap="round"
          />

          {/* Track sleepers / ties */}
          {[140, 220, 300, 380, 460, 540, 620, 700].map((tx, idx) => (
            <line
              key={idx}
              x1={tx}
              y1="535"
              x2={tx}
              y2="565"
              stroke="#111111"
              strokeWidth="6"
            />
          ))}

          {/* Jagged Fracture Lines on Impact */}
          {frame >= 155 && (
            <g transform="translate(520, 480)">
              <path
                d="M 0 0 L -25 35 L 15 70 L -10 110"
                stroke="#FF0055"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 20 20 L 45 45 L 25 80"
                stroke="#111111"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          )}

          {/* Obstacle / Real World Variation Block entering track (Shadow FIRST) */}
          {frame >= 140 && (
            <g
              transform={`translate(${interpolate(collisionSpring, [0, 1], [700, 520])}, 450)`}
            >
              <rect
                x="10"
                y="10"
                width="90"
                height="100"
                rx="8"
                fill="#111111"
              />
              <rect
                x="0"
                y="0"
                width="90"
                height="100"
                rx="8"
                fill="#FF0055"
                stroke="#111111"
                strokeWidth="6"
              />
              <text
                x="45"
                y="60"
                fill="#FFFFFF"
                fontSize="32"
                fontWeight="900"
                textAnchor="middle"
              >
                NOISE
              </text>
            </g>
          )}

          {/* The Practitioner Vector Puppet */}
          <g
            transform={`translate(${380 + puppetRecoilX}, 380) rotate(${puppetTilt} 0 100)`}
          >
            {/* Torso shadow FIRST */}
            <rect
              x="-35"
              y="0"
              width="90"
              height="130"
              rx="12"
              fill="#111111"
            />
            {/* Torso */}
            <rect
              x="-45"
              y="-10"
              width="90"
              height="130"
              rx="12"
              fill={isRoboticPhase ? '#FFE600' : '#FF0055'}
              stroke="#111111"
              strokeWidth="6"
            />

            {/* Head */}
            <circle
              cx="0"
              cy="-60"
              r="40"
              fill="#FFFFFF"
              stroke="#111111"
              strokeWidth="6"
            />
            {/* Eyes */}
            <circle
              cx="-14"
              cy="-62"
              r={7 * eyeWide}
              fill="#111111"
            />
            <circle
              cx="14"
              cy="-62"
              r={7 * eyeWide}
              fill="#111111"
            />
            {/* Eyeballs highlight */}
            <circle cx="-16" cy="-64" r="2.5" fill="#FFFFFF" />
            <circle cx="12" cy="-64" r="2.5" fill="#FFFFFF" />

            {/* Robot Antenna / Headband */}
            <line x1="0" y1="-100" x2="0" y2="-120" stroke="#111111" strokeWidth="6" />
            <circle cx="0" cy="-125" r="10" fill={isRoboticPhase ? '#00E5FF' : '#FF0055'} stroke="#111111" strokeWidth="5" />

            {/* Mechanical Swinging Arm with Tool/Racket */}
            <g transform={`translate(35, 10) rotate(${swingAngle} 0 0)`}>
              <line
                x1="0"
                y1="0"
                x2="80"
                y2="50"
                stroke="#111111"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <circle cx="80" cy="50" r="14" fill="#00E5FF" stroke="#111111" strokeWidth="5" />
              {/* Tool head */}
              <ellipse
                cx="120"
                cy="70"
                rx="35"
                ry="22"
                fill="#FFFFFF"
                stroke="#111111"
                strokeWidth="6"
              />
            </g>

            {/* Legs anchored to rail */}
            <line x1="-25" y1="120" x2="-25" y2="165" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
            <line x1="25" y1="120" x2="25" y2="165" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
            <rect x="-35" y="155" width="25" height="15" rx="4" fill="#111111" />
            <rect x="15" y="155" width="25" height="15" rx="4" fill="#111111" />
          </g>

          {/* Integrated Stamp Banner inside Canvas on Frame >= 180 */}
          {frame >= 180 && (
            <g
              transform={`translate(120, 620) scale(${stampScale}) rotate(-1.5)`}
              style={{transformOrigin: '300px 45px'}}
            >
              <rect x="10" y="10" width="600" height="95" rx="10" fill="#111111" />
              <rect x="0" y="0" width="600" height="95" rx="10" fill="#FF0055" stroke="#111111" strokeWidth="6" />
              <text x="300" y="44" fill="#FFFFFF" fontSize="36" fontWeight="900" textAnchor="middle">
                ROBOTIC DRILLS SNAP
              </text>
              <text x="300" y="78" fill="#FFE600" fontSize="26" fontWeight="900" textAnchor="middle">
                THE REAL WORLD IS NEVER IDENTICAL
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};
