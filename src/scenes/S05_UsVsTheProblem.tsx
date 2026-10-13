import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';
import {GeometricCharacter} from '../motion/GeometricCharacter';

/**
 * Scene 05: Us Vs The Problem
 * Pure Motion Design: Two partners standing shoulder-to-shoulder pushing a shared lever.
 * The lever levers a giant spiky "PROBLEM" boulder completely off the cliff!
 * Passes the Mute Test: Two characters cooperating with a mechanical lever to crush a common obstacle.
 */
export const S05_UsVsTheProblem: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Problem boulder drops in (frames 10 - 45)
  const boulderDrop = spring({
    frame: frame - 10,
    fps,
    config: {damping: 10, stiffness: 220, mass: 1.2},
  });
  const boulderY = interpolate(boulderDrop, [0, 1], [-200, 620]);

  // Characters heave the lever down (frames 60 - 120)
  const heaveProgress = spring({
    frame: frame - 60,
    fps,
    config: {damping: 12, stiffness: 140},
  });
  const leverAngle = interpolate(heaveProgress, [0, 1], [0, -32]);
  const partnersPushY = interpolate(heaveProgress, [0, 1], [0, 25]);

  // Boulder flips up and flies away (frames 85 - 150)
  const boulderFlip = spring({
    frame: frame - 85,
    fps,
    config: {damping: 10, stiffness: 160},
  });
  const boulderFlightX = interpolate(boulderFlip, [0, 1], [0, 380]);
  const boulderFlightY = interpolate(boulderFlip, [0, 1], [0, -380]);
  const boulderRotation = interpolate(boulderFlip, [0, 1], [0, 180]);

  // Victory celebration after boulder is launched (frames 110+)
  const isVictorious = frame > 105;

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
          TEAM UP AGAINST
          <br />
          <span
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              padding: '2px 18px',
              display: 'inline-block',
              boxShadow: '10px 10px 0 #111111',
              transform: 'rotate(-2deg)',
              marginTop: 10,
            }}
          >
            THE PROBLEM
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
        {/* Solid Stage Ground Platform */}
        <rect
          x="60"
          y="660"
          width="730"
          height="80"
          rx="12"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="7"
          style={{filter: 'drop-shadow(10px 10px 0 #111111)'}}
        />

        {/* Fulcrum Pivot for Lever */}
        <polygon points="460,660 420,740 500,740" fill="#111111" />
        <circle cx="460" cy="660" r="16" fill="#FFE600" stroke="#111111" strokeWidth="6" />

        {/* SHARED LEVER BEAM (Spans from partners at Left to boulder at Right) */}
        <g transform={`rotate(${leverAngle} 460 660)`}>
          <rect
            x="140"
            y="648"
            width="530"
            height="24"
            rx="6"
            fill="#111111"
          />
          {/* Handle Grip where partners hold on */}
          <rect x="160" y="638" width="100" height="44" rx="8" fill="#FFE600" stroke="#111111" strokeWidth="4" />
        </g>

        {/* TWO PARTNERS STANDING SHOULDER-TO-SHOULDER ON THE LEFT */}
        <g transform={`translate(0, ${isVictorious ? 0 : partnersPushY})`}>
          {/* Partner 1 (Cyan) */}
          <g transform="translate(170, 580)">
            <GeometricCharacter
              scale={0.9}
              color="#00E5FF"
              pose={isVictorious ? 'triumphant' : 'cooperating'}
              gazeX={isVictorious ? 1 : 1} // Looking at partner or problem
              gazeY={isVictorious ? -0.5 : 0}
              armRightAngle={isVictorious ? -120 : -70}
            />
          </g>

          {/* Partner 2 (Pink) */}
          <g transform="translate(265, 580)">
            <GeometricCharacter
              scale={0.9}
              color="#FF0055"
              pose={isVictorious ? 'triumphant' : 'cooperating'}
              gazeX={isVictorious ? -1 : 1}
              gazeY={isVictorious ? -0.5 : 0}
              armRightAngle={isVictorious ? -120 : -70}
            />
          </g>
        </g>

        {/* SHARED GOAL BADGE ABOVE PARTNERS */}
        <g transform="translate(220, 390)">
          <rect x="-100" y="-22" width="200" height="44" rx="8" fill="#111111" style={{filter: 'drop-shadow(6px 6px 0 #00E5FF)'}} />
          <text x="0" y="9" fill="#FFE600" fontSize="28" fontWeight="900" letterSpacing="0.5" textAnchor="middle">
            ONE TEAM
          </text>
        </g>

        {/* VICTORY CELEBRATION SPARKS (When boulder is launched) */}
        {isVictorious && (
          <g transform="translate(220, 310)">
            <polygon points="0,-15 5,-5 16,-5 7,2 10,13 0,6 -10,13 -7,2 -16,-5 -5,-5" fill="#FFE600" stroke="#111111" strokeWidth="3" />
            <polygon points="-70,-20 -65,-12 -57,-12 -63,-7 -61,1 -70,-4 -79,1 -77,-7 -83,-12 -75,-12" fill="#00E5FF" stroke="#111111" strokeWidth="2" />
            <polygon points="70,-20 75,-12 83,-12 77,-7 79,1 70,-4 61,1 63,-7 57,-12 65,-12" fill="#FF0055" stroke="#111111" strokeWidth="2" />
          </g>
        )}

        {/* THE PROBLEM BOULDER (Gets levered up and flying) */}
        <g
          transform={`translate(${560 + boulderFlightX}, ${580 + boulderFlightY}) rotate(${boulderRotation})`}
        >
          {/* Heavy Spiky Polygon Stone */}
          <polygon
            points="0,-85 75,-55 95,35 35,85 -65,75 -95,0 -55,-65"
            fill="#111111"
            stroke="#FF0055"
            strokeWidth="8"
            style={{filter: 'drop-shadow(10px 10px 0 #FF0055)'}}
          />
          <text
            x="0"
            y="12"
            fill="#FFFFFF"
            fontSize="34"
            fontWeight="900"
            fontFamily="'Arial Black', sans-serif"
            textAnchor="middle"
          >
            PROBLEM
          </text>
        </g>
      </svg>
    </div>
  );
};
