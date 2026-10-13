import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';
import {GeometricCharacter} from '../motion/GeometricCharacter';
import {PressureGauge, StressCrack} from '../motion/PhysicalMechanisms';

/**
 * Scene 03: Walking On Eggshells
 * Pure Motion Design: Character tiptoeing on cracking eggshells with mouth zipped shut.
 * Pressure gauge spikes into critical red zone.
 * Passes the Mute Test: Literal fragile shells cracking under pressure while voice is silenced.
 */
export const S03_WalkingOnEggshells: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Tiptoe stepping progress
  const stepCycle = (frame % 30) / 30;
  const charBobY = Math.sin(frame * 0.25) * 8;
  const charX = interpolate(frame, [0, 132], [220, 520], {
    extrapolateRight: 'clamp',
  });

  // Eggshell crack propagation underfoot
  const crack1Progress = interpolate(frame, [15, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const crack2Progress = interpolate(frame, [50, 100], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Pressure gauge needle surge
  const pressurePercent = interpolate(frame, [10, 110], [30, 95], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Zipper closing animation on mouth
  const zipperClosed = frame > 40;

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
          WALKING ON
          <br />
          <span
            style={{
              backgroundColor: '#FFE600',
              color: '#111111',
              padding: '2px 18px',
              display: 'inline-block',
              boxShadow: '10px 10px 0 #111111',
              transform: 'rotate(-1.5deg)',
              marginTop: 10,
            }}
          >
            EGGSHELLS
          </span>
        </h1>
      </div>

      {/* Main Motion Graphic SVG */}
      <svg
        width="850"
        height="1100"
        viewBox="0 0 850 1100"
        style={{overflow: 'visible'}}
      >
        {/* Tension Meter in Top Right */}
        <g transform="translate(680, 240)">
          <PressureGauge
            radius={90}
            pressurePercent={pressurePercent}
            title="ANXIETY"
            dangerLevel={pressurePercent > 80}
          />
        </g>

        {/* FRAGILE EGGSHELL BRIDGES (Path of cracked shells) */}
        {/* Shell 1 */}
        <g transform="translate(180, 620)">
          <path
            d="M -120 0 C -120 -80, -40 -120, 0 -120 C 40 -120, 120 -80, 120 0 Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="7"
            style={{filter: 'drop-shadow(8px 8px 0 #111111)'}}
          />
          {/* Crack lines running through Shell 1 */}
          <StressCrack progress={crack1Progress} startX={0} startY={-110} length={120} strokeWidth={6} color="#FF0055" />
        </g>

        {/* Shell 2 */}
        <g transform="translate(420, 630)">
          <path
            d="M -120 0 C -120 -85, -40 -125, 0 -125 C 40 -125, 120 -85, 120 0 Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="7"
            style={{filter: 'drop-shadow(8px 8px 0 #111111)'}}
          />
          {/* Crack lines running through Shell 2 */}
          <StressCrack progress={crack2Progress} startX={10} startY={-120} length={130} strokeWidth={6} color="#FF0055" />
        </g>

        {/* Shell 3 */}
        <g transform="translate(660, 625)">
          <path
            d="M -120 0 C -120 -80, -40 -120, 0 -120 C 40 -120, 120 -80, 120 0 Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="7"
            style={{filter: 'drop-shadow(8px 8px 0 #111111)'}}
          />
        </g>

        {/* Tiptoeing Character */}
        <g transform={`translate(${charX}, ${470 + charBobY})`}>
          <GeometricCharacter
            scale={0.9}
            color="#FF0055"
            pose="tense"
            mouthShape={zipperClosed ? 'zipped' : 'flat'}
            gazeX={0}
            gazeY={1} // Looking nervously down at the cracking shells
          />

          {/* Flying Sweat Drops */}
          {pressurePercent > 60 && (
            <g transform="translate(38, -45)">
              <ellipse cx="0" cy="0" rx="5" ry="8" fill="#00E5FF" transform="rotate(30)" />
            </g>
          )}

          {/* "EDITING SPEECH" Speech Bubble with Muzzle / X */}
          {zipperClosed && (
            <g transform="translate(-160, -115)">
              <rect x="0" y="0" width="270" height="46" rx="8" fill="#111111" stroke="#FF0055" strokeWidth="4" style={{filter: 'drop-shadow(6px 6px 0 #FF0055)'}} />
              <text x="135" y="32" fill="#FFE600" fontSize="26" fontWeight="900" letterSpacing="0.5" textAnchor="middle">
                EDITING SPEECH
              </text>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};
