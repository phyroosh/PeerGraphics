import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

export const S03_TheComfortAtrophyTrap: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Entrance springs
  const headerEntrance = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.snappy,
  });

  const mainEntrance = spring({
    frame: frame - 15,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Phase transition from Comfort Slump (0-200) to Habit Autopilot (200-415)
  const isHabitPhase = frame > 200;
  const habitPhaseSpring = spring({
    frame: frame - 200,
    fps,
    config: DESIGN_TOKENS.spring.snappy,
  });

  // Shrinkage animation of aMCC
  const shrinkProgress = interpolate(frame, [80, 180], [1.0, 0.45], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Autopilot disconnection drop
  const powerDown = interpolate(frame, [250, 340], [100, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* ------------------------------------------------------------- */}
      {/* TOP HEADER SECTION (Safe Zone: y >= 160px)                     */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 175,
          left: DESIGN_TOKENS.safeArea.left,
          right: DESIGN_TOKENS.safeArea.right,
          transform: `translateY(${interpolate(headerEntrance, [0, 1], [-60, 0])}px)`,
          opacity: headerEntrance,
        }}
      >
        <div
          style={{
            display: 'inline-block',
            backgroundColor: '#111111',
            color: '#FFE600',
            border: '4px solid #111111',
            boxShadow: '6px 6px 0 #FFE600',
            padding: '8px 24px',
            borderRadius: 8,
            fontSize: 34,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: 16,
            transform: 'rotate(-1deg)',
          }}
        >
          THE USE-IT-OR-LOSE-IT RULE
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 82,
            fontWeight: 900,
            lineHeight: 1.05,
            color: '#111111',
            fontFamily: DESIGN_TOKENS.fonts.display,
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
          }}
        >
          COMFORT SHRINKS THE{' '}
          <span
            style={{
              backgroundColor: '#FF0055',
              color: '#FFFFFF',
              padding: '0 14px',
              border: '4px solid #111111',
              boxShadow: '6px 6px 0 #111111',
              display: 'inline-block',
              transform: 'rotate(1.5deg)',
            }}
          >
            CIRCUIT
          </span>
        </h1>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CENTER FOCAL: DUAL ATROPHY & HABIT METAPHOR (y: 450 - 990)    */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 450,
          left: DESIGN_TOKENS.safeArea.left,
          width: 870,
          height: 540,
          transform: `scale(${interpolate(mainEntrance, [0, 1], [0.9, 1])})`,
          opacity: mainEntrance,
        }}
      >
        <svg
          width="870"
          height="540"
          viewBox="0 0 870 540"
          style={{overflow: 'visible'}}
        >
          {/* PHASE 1: COMFORT SINK & SHRINKING aMCC (0 - 200 frames) */}
          {!isHabitPhase && (
            <g>
              {/* Slumping Comfort Recliner */}
              <g transform="translate(140, 190)">
                <rect x="20" y="240" width="300" height="30" rx="15" fill="#111111" opacity={0.3} />
                <path
                  d="M 40 240 C 40 120 70 80 180 80 C 260 80 290 140 290 240 Z"
                  fill="#EAE5DB"
                  stroke="#111111"
                  strokeWidth="6"
                />
                <rect x="20" y="220" width="300" height="40" rx="10" fill="#FFFFFF" stroke="#111111" strokeWidth="6" />

                <g transform="translate(140, 120)">
                  <circle cx="20" cy="0" r="34" fill="#FFFFFF" stroke="#111111" strokeWidth="6" />
                  <line x1="12" y1="-2" x2="26" y2="-2" stroke="#111111" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 12 10 Q 20 18 26 10" fill="none" stroke="#111111" strokeWidth="4" />
                  <rect x="-10" y="36" width="60" height="70" rx="10" fill="#00E5FF" stroke="#111111" strokeWidth="6" />
                  <text x="70" y="-30" fontSize="34" fontWeight="900" fill="#111111">
                    Z
                  </text>
                  <text x="95" y="-55" fontSize="42" fontWeight="900" fill="#FF0055">
                    Z
                  </text>
                </g>
              </g>

              {/* SHRINKING aMCC Apparatus */}
              <g transform="translate(610, 270)">
                <ellipse
                  cx="0"
                  cy="0"
                  rx="75"
                  ry="50"
                  fill="none"
                  stroke="#FF0055"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  opacity={0.4}
                />

                <g transform={`scale(${shrinkProgress})`}>
                  <ellipse
                    cx="0"
                    cy="0"
                    rx="75"
                    ry="50"
                    fill={shrinkProgress < 0.6 ? '#777777' : '#FF0055'}
                    stroke="#111111"
                    strokeWidth="7"
                  />
                  <text
                    x="0"
                    y="12"
                    textAnchor="middle"
                    fontSize="32"
                    fontWeight="900"
                    fill="#FFFFFF"
                    fontFamily={DESIGN_TOKENS.fonts.display}
                  >
                    aMCC
                  </text>
                </g>

                <g transform="translate(-80, 85)">
                  <rect
                    x="0"
                    y="0"
                    width="160"
                    height="50"
                    rx="6"
                    fill="#FF0055"
                    stroke="#111111"
                    strokeWidth="4"
                    style={{filter: 'drop-shadow(4px 4px 0 #111111)'}}
                  />
                  <text
                    x="80"
                    y="34"
                    textAnchor="middle"
                    fontSize="26"
                    fontWeight="900"
                    fill="#FFFFFF"
                    fontFamily={DESIGN_TOKENS.fonts.display}
                  >
                    -SHRINKING
                  </text>
                </g>
              </g>
            </g>
          )}

          {/* PHASE 2: THE HABIT PARADOX & AUTOPILOT POWER DOWN (200 - 415 frames) */}
          {isHabitPhase && (
            <g opacity={habitPhaseSpring}>
              {/* Conveyor Treadmill */}
              <g transform="translate(100, 340)">
                <rect x="0" y="60" width="360" height="25" rx="6" fill="#111111" />
                <circle cx="20" cy="72" r="18" fill="#FFFFFF" stroke="#111111" strokeWidth="5" />
                <circle cx="340" cy="72" r="18" fill="#FFFFFF" stroke="#111111" strokeWidth="5" />

                <g transform="translate(180, 50)">
                  <line x1="-30" y1="0" x2="-10" y2="-60" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
                  <line x1="20" y1="0" x2="0" y2="-60" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
                  <rect x="-20" y="-130" width="45" height="70" rx="8" fill="#FFE600" stroke="#111111" strokeWidth="6" />
                  <circle cx="5" cy="-160" r="26" fill="#FFFFFF" stroke="#111111" strokeWidth="5" />
                  <circle cx="14" cy="-162" r="4" fill="#111111" />
                  <line x1="10" y1="-150" x2="20" y2="-150" stroke="#111111" strokeWidth="4" />
                </g>

                {/* Autopilot Tag - Wider to fit comfortably */}
                <g transform="translate(10, -110)">
                  <rect
                    x="0"
                    y="0"
                    width="340"
                    height="50"
                    rx="8"
                    fill="#00E5FF"
                    stroke="#111111"
                    strokeWidth="4"
                    style={{filter: 'drop-shadow(4px 4px 0 #111111)'}}
                  />
                  <text
                    x="170"
                    y="34"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="900"
                    fill="#111111"
                    fontFamily={DESIGN_TOKENS.fonts.display}
                  >
                    ⚙️ BASAL GANGLIA: HABIT
                  </text>
                </g>
              </g>

              {/* Power Down Circuit Disconnect */}
              <g transform="translate(560, 160)">
                <rect
                  x="0"
                  y="0"
                  width="250"
                  height="260"
                  rx="14"
                  fill="#FFFFFF"
                  stroke="#111111"
                  strokeWidth="6"
                  style={{filter: 'drop-shadow(8px 8px 0 #111111)'}}
                />

                <text
                  x="125"
                  y="45"
                  textAnchor="middle"
                  fontSize="28"
                  fontWeight="900"
                  fill="#111111"
                  fontFamily={DESIGN_TOKENS.fonts.display}
                >
                  aMCC FIRING
                </text>

                <rect x="40" y="70" width="170" height="36" rx="6" fill="#EAE5DB" stroke="#111111" strokeWidth="4" />
                <rect
                  x="40"
                  y="70"
                  width={interpolate(powerDown, [0, 100], [0, 170])}
                  height="36"
                  rx="6"
                  fill="#FF0055"
                />

                <text
                  x="125"
                  y="150"
                  textAnchor="middle"
                  fontSize="44"
                  fontWeight="900"
                  fill="#FF0055"
                  fontFamily={DESIGN_TOKENS.fonts.display}
                >
                  {Math.round(powerDown)}%
                </text>

                <text
                  x="125"
                  y="200"
                  textAnchor="middle"
                  fontSize="28"
                  fontWeight="900"
                  fill="#111111"
                  fontFamily={DESIGN_TOKENS.fonts.display}
                >
                  POWERS DOWN
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* LOWER SECTION: CORE TAKEAWAY CARD (Top: 1010)                 */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 1010,
          left: DESIGN_TOKENS.safeArea.left,
          right: DESIGN_TOKENS.safeArea.right,
          backgroundColor: '#FFFFFF',
          border: '5px solid #111111',
          boxShadow: '10px 10px 0 #111111',
          borderRadius: 16,
          padding: '22px 30px',
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12}}>
          <span
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: '#FF0055',
              fontFamily: DESIGN_TOKENS.fonts.display,
            }}
          >
            THE HABIT PARADOX
          </span>
          <span
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              padding: '4px 14px',
              border: '3px solid #111111',
              borderRadius: 6,
              fontSize: 30,
              fontWeight: 900,
            }}
          >
            NO FRICTION
          </span>
        </div>

        <div
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: '#111111',
            lineHeight: 1.25,
            fontFamily: DESIGN_TOKENS.fonts.primary,
          }}
        >
          Once a hard task becomes easy and automatic, the aMCC stops firing.
        </div>

        <div
          style={{
            marginTop: 8,
            fontSize: 32,
            fontWeight: 700,
            color: '#555555',
          }}
        >
          Habits don't grow willpower. Only new resistance does.
        </div>
      </div>
    </div>
  );
};
