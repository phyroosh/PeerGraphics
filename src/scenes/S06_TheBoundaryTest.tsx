import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';
import {GeometricCharacter} from '../motion/GeometricCharacter';

/**
 * Scene 06: The Boundary Test
 * Pure Motion Design: Side-by-side laboratory test rig.
 * Setting the exact same boundary token yields two completely different physical reactions:
 * Left (Unhealthy): Alarm sirens, slamming iron bars, defensive spike shield.
 * Right (Healthy): Smooth hydraulic absorption, green checkmark, extended bridge.
 * Passes the Mute Test: Direct visual contrast proving boundary response reveals true dynamic.
 */
export const S06_TheBoundaryTest: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Boundary token drops in both chambers (frames 20 - 70)
  const tokenDrop = spring({
    frame: frame - 20,
    fps,
    config: {damping: 12, stiffness: 200},
  });
  const tokenY = interpolate(tokenDrop, [0, 1], [-80, 0]);

  // UNHEALTHY REACTION (Left side): Spikes & Alarm slam down (frames 80 - 180)
  const leftSlam = spring({
    frame: frame - 80,
    fps,
    config: {damping: 8, stiffness: 240, mass: 1.2},
  });
  const leftAlarmFlash = frame > 80 && frame < 360 ? (frame % 8 < 4 ? 1 : 0.3) : 0;

  // HEALTHY REACTION (Right side): Shock absorbers & Green bridge extend (frames 140 - 240)
  const rightBuffer = spring({
    frame: frame - 140,
    fps,
    config: {damping: 14, stiffness: 120},
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        boxSizing: 'border-box',
        paddingTop: DESIGN_TOKENS.safeArea.top,
        paddingLeft: DESIGN_TOKENS.safeArea.left,
        paddingRight: DESIGN_TOKENS.safeArea.right,
        opacity: entry,
      }}
    >
      {/* Cutout Headline */}
      <div style={{marginBottom: 16}}>
        <h1
          style={{
            fontSize: 84,
            fontWeight: 900,
            lineHeight: 1.02,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: -1.5,
            color: '#111111',
            fontFamily: DESIGN_TOKENS.fonts.display,
          }}
        >
          THE BOUNDARY TEST
          <br />
          <span
            style={{
              backgroundColor: '#FF0055',
              color: '#FFFFFF',
              padding: '2px 18px',
              display: 'inline-block',
              boxShadow: '10px 10px 0 #111111',
              transform: 'rotate(-1.5deg)',
              marginTop: 10,
            }}
          >
            OBSERVE THE REACTION
          </span>
        </h1>
      </div>

      {/* Main Motion Canvas SVG */}
      <svg
        width="850"
        height="900"
        viewBox="0 0 850 900"
        style={{overflow: 'visible'}}
      >
        {/* CENTER DIVIDER LINE (Laboratory Split Screen) */}
        <line x1="425" y1="120" x2="425" y2="760" stroke="#111111" strokeWidth="8" strokeDasharray="18 12" />

        {/* ========================================= */}
        {/* LEFT CHAMBER: UNHEALTHY DYNAMIC (CONTROL) */}
        {/* ========================================= */}
        <g transform="translate(210, 140)">
          {/* Header Badge */}
          <rect x="-140" y="0" width="280" height="46" rx="6" fill="#111111" />
          <text x="0" y="32" fill="#FF0055" fontSize="30" fontWeight="900" textAnchor="middle">
            UNHEALTHY
          </text>

          {/* Test Platform Base */}
          <rect x="-180" y="470" width="360" height="50" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="6" style={{filter: 'drop-shadow(8px 8px 0 #111111)'}} />

          {/* Person A (Boundary Setter) on Left */}
          <g transform="translate(-100, 410)">
            <GeometricCharacter
              scale={0.7}
              color="#FFE600"
              pose={leftSlam > 0.5 ? 'defensive' : 'cooperating'}
              gazeX={1}
              gazeY={0}
            />
          </g>

          {/* Boundary Marker Placed in Center */}
          <g transform={`translate(0, ${270 + tokenY})`}>
            <rect x="-55" y="0" width="110" height="50" rx="8" fill="#FFE600" stroke="#111111" strokeWidth="5" />
            <text x="0" y="35" fill="#111111" fontSize="28" fontWeight="900" textAnchor="middle">
              "NO"
            </text>
          </g>

          {/* Person B (Unhealthy Partner) on Right */}
          <g transform="translate(100, 410)">
            <GeometricCharacter
              scale={0.7}
              color="#FF0055"
              pose={leftSlam > 0.1 ? 'defensive' : 'tense'}
              gazeX={-1}
              gazeY={0}
            />
          </g>

          {/* Aggressive Slamming Reaction */}
          {leftSlam > 0.1 && (
            <g transform={`scale(${leftSlam})`}>
              {/* Flashing Red Siren Alarm */}
              <circle cx="0" cy="110" r="28" fill={leftAlarmFlash > 0.5 ? '#FF0055' : '#111111'} stroke="#111111" strokeWidth="6" />
              <text x="0" y="120" fill="#FFFFFF" fontSize="30" fontWeight="900" textAnchor="middle">
                !
              </text>

              {/* Slamming Spiked Iron Wall over boundary */}
              <path
                d="M -80 200 L -60 270 L -40 200 L -20 270 L 0 200 L 20 270 L 40 200 L 60 270 L 80 200"
                fill="none"
                stroke="#FF0055"
                strokeWidth="7"
                strokeLinecap="round"
              />

              {/* Threat Result Stamp */}
              <g transform="translate(0, 560)">
                <rect x="-140" y="-22" width="280" height="44" rx="8" fill="#FF0055" stroke="#111111" strokeWidth="4" />
                <text x="0" y="9" fill="#FFFFFF" fontSize="26" fontWeight="900" letterSpacing="0.5" textAnchor="middle">
                  GUILT &amp; DEFENSE
                </text>
              </g>
            </g>
          )}
        </g>

        {/* ======================================= */}
        {/* RIGHT CHAMBER: HEALTHY DYNAMIC (RESPECT) */}
        {/* ======================================= */}
        <g transform="translate(640, 140)">
          {/* Header Badge */}
          <rect x="-140" y="0" width="280" height="46" rx="6" fill="#111111" />
          <text x="0" y="32" fill="#00E5FF" fontSize="30" fontWeight="900" textAnchor="middle">
            HEALTHY
          </text>

          {/* Test Platform Base */}
          <rect x="-180" y="470" width="360" height="50" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="6" style={{filter: 'drop-shadow(8px 8px 0 #111111)'}} />

          {/* Person A (Boundary Setter) on Left */}
          <g transform="translate(-100, 410)">
            <GeometricCharacter
              scale={0.7}
              color="#FFE600"
              pose="cooperating"
              gazeX={1}
              gazeY={0}
            />
          </g>

          {/* Boundary Marker Placed in Center */}
          <g transform={`translate(0, ${270 + tokenY})`}>
            <rect x="-55" y="0" width="110" height="50" rx="8" fill="#FFE600" stroke="#111111" strokeWidth="5" />
            <text x="0" y="35" fill="#111111" fontSize="28" fontWeight="900" textAnchor="middle">
              "NO"
            </text>
          </g>

          {/* Person C (Healthy Partner) on Right */}
          <g transform="translate(100, 410)">
            <GeometricCharacter
              scale={0.7}
              color="#00E5FF"
              pose={rightBuffer > 0.1 ? 'curious' : 'cooperating'}
              gazeX={-1}
              gazeY={0}
              accessory={rightBuffer > 0.1 ? 'magnifyingGlass' : undefined}
            />
          </g>

          {/* Smooth Hydraulic Buffer & Respect Bridge */}
          {rightBuffer > 0.1 && (
            <g transform={`scale(${rightBuffer})`}>
              {/* Glowing Calm Cyan Shield Checkmark */}
              <circle cx="0" cy="110" r="28" fill="#00E5FF" stroke="#111111" strokeWidth="6" />
              <text x="0" y="120" fill="#111111" fontSize="30" fontWeight="900" textAnchor="middle">
                ✓
              </text>

              {/* Soft Spring Dampers cushioning the boundary */}
              <path
                d="M -70 250 Q -35 220 0 250 Q 35 280 70 250"
                fill="none"
                stroke="#00E5FF"
                strokeWidth="8"
                strokeLinecap="round"
              />

              {/* Respect Result Stamp */}
              <g transform="translate(0, 560)">
                <rect x="-140" y="-22" width="280" height="44" rx="8" fill="#111111" stroke="#00E5FF" strokeWidth="4" />
                <text x="0" y="9" fill="#00E5FF" fontSize="26" fontWeight="900" letterSpacing="0.5" textAnchor="middle">
                  CURIOSITY &amp; PEACE
                </text>
              </g>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};
