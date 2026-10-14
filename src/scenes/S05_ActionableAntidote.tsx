import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

/**
 * Scene 05: The Actionable Antidote
 * Pure Motion Design: The 3 Levers of Practice Variability + Grand Synthesis Stamp.
 * Passes the Mute Test:
 * 1. Cancels identical reps with bold red slash.
 * 2. Locks target bullseye constant.
 * 3. Shows the 3 perturbations (stance, tempo, angle).
 * 4. Slams down the ultimate Risograph rule: REPEAT THE GOAL / NEVER THE MOVEMENT.
 */
export const S05_ActionableAntidote: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Entrance spring
  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Beat 1: Stop Identical Reps (frames 0 - 60)
  const slashSpring = spring({
    frame: frame - 15,
    fps,
    config: {damping: 10, stiffness: 220},
  });

  // Beat 2: Three levers activation (local frames 158 - 273)
  // Lever 1: Stance shift (f150)
  const lever1Spring = spring({frame: frame - 150, fps, config: {damping: 12, stiffness: 180}});
  // Lever 2: Tempo metronome (f178)
  const lever2Spring = spring({frame: frame - 178, fps, config: {damping: 12, stiffness: 180}});
  // Lever 3: Angle shift (f205)
  const lever3Spring = spring({frame: frame - 205, fps, config: {damping: 12, stiffness: 180}});

  // Metronome needle swing
  const metronomeAngle = Math.sin(frame * 0.35) * 35;

  // Grand Final Synthesis Stamp (f273 = 53.65s in script: "Repeat the goal, never the movement")
  const stampSpring = spring({
    frame: frame - 273,
    fps,
    config: {damping: 11, stiffness: 210, mass: 1.15},
  });
  const stampScale = interpolate(stampSpring, [0, 1], [2.6, 1]);
  const stampOpacity = interpolate(stampSpring, [0, 0.2, 1], [0, 1, 1]);

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
      <div style={{marginBottom: 16}}>
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
          THE MASTER PROTOCOL
          <br />
          <span
            style={{
              backgroundColor: '#FF0055',
              color: '#FFFFFF',
              padding: '4px 20px',
              display: 'inline-block',
              boxShadow: '10px 10px 0 #111111',
              transform: 'rotate(-1.5deg)',
              marginTop: 10,
            }}
          >
            VARIABLE PRACTICE
          </span>
        </h1>
      </div>

      {/* Central Visual Apparatus: The 3 Levers & Grand Stamp */}
      <div
        style={{
          width: '850px',
          height: '780px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg
          width="850"
          height="780"
          viewBox="0 0 850 780"
          fill="none"
          style={{overflow: 'visible'}}
        >
          {/* Phase 1 & 2: Before the Grand Stamp, display the 3 Practice Levers */}
          {frame < 273 ? (
            <g>
              {/* Target Constant Anchor Card at Top (Shadow FIRST) */}
              <g transform="translate(115, 50)">
                <rect x="8" y="8" width="620" height="110" rx="12" fill="#111111" />
                <rect x="0" y="0" width="620" height="110" rx="12" fill="#FFFFFF" stroke="#111111" strokeWidth="6" />
                {/* Glowing Bullseye Target */}
                <circle cx="70" cy="55" r="32" fill="none" stroke="#00E5FF" strokeWidth="6" />
                <circle cx="70" cy="55" r="18" fill="#FF0055" />
                <circle cx="70" cy="55" r="6" fill="#FFFFFF" />
                <text x="125" y="52" fill="#111111" fontSize="30" fontWeight="900">
                  TARGET: CONSTANT (LOCKED)
                </text>
                <text x="125" y="86" fill="#008599" fontSize="24" fontWeight="800">
                  Keep the objective 100% fixed
                </text>
              </g>

              {/* Red cancel slash over identical reps */}
              <g transform="translate(180, 190)">
                <rect x="0" y="0" width="490" height="65" rx="8" fill="#EAE5DB" stroke="#111111" strokeWidth="4" />
                <text x="245" y="44" fill="#555555" fontSize="28" fontWeight="800" textAnchor="middle">
                  IDENTICAL VACUUM REPETITIONS
                </text>
                {/* Big Stencil Red X-Out */}
                <line
                  x1="20"
                  y1="10"
                  x2={interpolate(slashSpring, [0, 1], [20, 470])}
                  y2={interpolate(slashSpring, [0, 1], [10, 55])}
                  stroke="#FF0055"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </g>

              {/* The 3 Levers Cards in a Row (Shadows FIRST) */}
              {/* Lever 1: Stance Shift */}
              <g
                transform={`translate(60, 290) scale(${interpolate(lever1Spring, [0, 1], [0.8, 1])})`}
                opacity={lever1Spring}
              >
                <rect x="8" y="8" width="220" height="300" rx="10" fill="#111111" />
                <rect x="0" y="0" width="220" height="300" rx="10" fill="#FFFFFF" stroke="#111111" strokeWidth="6" />
                <rect x="15" y="15" width="190" height="40" rx="6" fill="#FFE600" stroke="#111111" strokeWidth="3" />
                <text x="110" y="42" fill="#111111" fontSize="22" fontWeight="900" textAnchor="middle">
                  #1 STANCE
                </text>
                {/* Footprint / posture icons */}
                <ellipse cx="80" cy="120" rx="14" ry="24" fill="#111111" />
                <ellipse cx="140" cy="140" rx="14" ry="24" fill="#111111" />
                <text x="110" y="210" fill="#111111" fontSize="24" fontWeight="900" textAnchor="middle">
                  SHIFT BASE
                </text>
                <text x="110" y="245" fill="#555555" fontSize="18" fontWeight="700" textAnchor="middle">
                  Wide • Narrow
                </text>
              </g>

              {/* Lever 2: Tempo Shift */}
              <g
                transform={`translate(315, 290) scale(${interpolate(lever2Spring, [0, 1], [0.8, 1])})`}
                opacity={lever2Spring}
              >
                <rect x="8" y="8" width="220" height="300" rx="10" fill="#111111" />
                <rect x="0" y="0" width="220" height="300" rx="10" fill="#FFFFFF" stroke="#111111" strokeWidth="6" />
                <rect x="15" y="15" width="190" height="40" rx="6" fill="#00E5FF" stroke="#111111" strokeWidth="3" />
                <text x="110" y="42" fill="#111111" fontSize="22" fontWeight="900" textAnchor="middle">
                  #2 TEMPO
                </text>
                {/* Metronome needle */}
                <g transform={`translate(110, 160) rotate(${metronomeAngle} 0 0)`}>
                  <line x1="0" y1="20" x2="0" y2="-65" stroke="#111111" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="0" cy="-45" r="10" fill="#FF0055" />
                </g>
                <text x="110" y="210" fill="#111111" fontSize="24" fontWeight="900" textAnchor="middle">
                  VARY SPEED
                </text>
                <text x="110" y="245" fill="#555555" fontSize="18" fontWeight="700" textAnchor="middle">
                  Fast • Slow
                </text>
              </g>

              {/* Lever 3: Angle Shift */}
              <g
                transform={`translate(570, 290) scale(${interpolate(lever3Spring, [0, 1], [0.8, 1])})`}
                opacity={lever3Spring}
              >
                <rect x="8" y="8" width="220" height="300" rx="10" fill="#111111" />
                <rect x="0" y="0" width="220" height="300" rx="10" fill="#FFFFFF" stroke="#111111" strokeWidth="6" />
                <rect x="15" y="15" width="190" height="40" rx="6" fill="#FF0055" stroke="#111111" strokeWidth="3" />
                <text x="110" y="42" fill="#FFFFFF" fontSize="22" fontWeight="900" textAnchor="middle">
                  #3 ANGLE
                </text>
                {/* Rotating trajectory compass */}
                <circle cx="110" cy="130" r="38" fill="none" stroke="#111111" strokeWidth="4" strokeDasharray="6 6" />
                <line x1="110" y1="130" x2="135" y2="100" stroke="#FF0055" strokeWidth="6" strokeLinecap="round" />
                <circle cx="110" cy="130" r="8" fill="#111111" />
                <text x="110" y="210" fill="#111111" fontSize="24" fontWeight="900" textAnchor="middle">
                  ALTER ANGLE
                </text>
                <text x="110" y="245" fill="#555555" fontSize="18" fontWeight="700" textAnchor="middle">
                  ± 15° Trajectory
                </text>
              </g>
            </g>
          ) : (
            /* Grand Final Synthesis Poster Stamp */
            <g
              transform={`translate(75, 120) scale(${stampScale})`}
              style={{transformOrigin: '350px 250px'}}
              opacity={stampOpacity}
            >
              {/* Heavy Poster Drop Shadow */}
              <rect
                x="14"
                y="14"
                width="700"
                height="480"
                rx="16"
                fill="#111111"
              />
              {/* Poster Card Base */}
              <rect
                x="0"
                y="0"
                width="700"
                height="480"
                rx="16"
                fill="#FFFFFF"
                stroke="#111111"
                strokeWidth="8"
              />

              {/* Top Banner Tape */}
              <rect
                x="30"
                y="35"
                width="640"
                height="65"
                rx="8"
                fill="#FFE600"
                stroke="#111111"
                strokeWidth="5"
              />
              <text
                x="350"
                y="80"
                fill="#111111"
                fontSize="38"
                fontWeight="900"
                textAnchor="middle"
                letterSpacing="-0.5"
              >
                THE GOLDEN RULE OF MASTERY
              </text>

              {/* Center Giant Punchlines */}
              <g transform="translate(50, 140)">
                {/* Punchline 1 */}
                <rect x="0" y="0" width="600" height="100" rx="10" fill="#111111" />
                <text
                  x="300"
                  y="68"
                  fill="#FFE600"
                  fontSize="52"
                  fontWeight="900"
                  textAnchor="middle"
                >
                  REPEAT THE GOAL
                </text>

                {/* Punchline 2 */}
                <rect x="0" y="125" width="600" height="100" rx="10" fill="#FF0055" stroke="#111111" strokeWidth="5" />
                <text
                  x="300"
                  y="193"
                  fill="#FFFFFF"
                  fontSize="48"
                  fontWeight="900"
                  textAnchor="middle"
                >
                  NEVER THE MOVEMENT!
                </text>
              </g>

              {/* Verified Ribbon at Bottom */}
              <g transform="translate(180, 400)">
                <rect x="0" y="0" width="340" height="50" rx="8" fill="#00E5FF" stroke="#111111" strokeWidth="4" />
                <text x="170" y="34" fill="#111111" fontSize="26" fontWeight="900" textAnchor="middle">
                  REAL SKILL UNLOCKED 🎯
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};

