import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DESIGN_TOKENS} from '../design/tokens';

interface BrainDiagramProps {
  mode: 'overview' | 'liking' | 'wanting' | 'divergence';
  scale?: number;
}

export const BrainDiagram: React.FC<BrainDiagramProps> = ({
  mode,
  scale = 1,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  // Snappy pulse for neural activity
  const pulseLiking = mode === 'divergence'
    ? 0.2 // heavily attenuated in tolerance
    : 0.8 + 0.2 * Math.sin(frame * 0.2);

  const pulseWanting = mode === 'divergence'
    ? 0.9 + 0.3 * Math.sin(frame * 0.5) // hyper-reactive
    : 0.8 + 0.2 * Math.sin(frame * 0.25);

  const likingColor = '#1D3557'; // Deep Cobalt
  const wantingColor = '#E63946'; // Vermilion Red

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${scale * entrance})`,
        opacity: entrance,
      }}
    >
      <svg
        width="760"
        height="580"
        viewBox="0 0 760 580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          overflow: 'visible',
        }}
      >
        {/* Background shadow layer for brutalist graphic feel */}
        <path
          d="M 195 385 C 155 385 115 345 105 285 C 95 225 125 155 195 105 C 265 55 375 55 475 85 C 565 115 625 185 625 255 C 625 315 585 365 525 375 C 475 385 435 425 415 465 C 395 505 365 535 325 535 C 295 535 275 505 285 465 C 295 425 255 385 195 385 Z"
          fill="#121212"
          transform="translate(10, 10)"
        />

        {/* Brain Cortex Silhouette (Lateral View) — Crisp Bauhaus White Card */}
        <path
          d="M 195 385 C 155 385 115 345 105 285 C 95 225 125 155 195 105 C 265 55 375 55 475 85 C 565 115 625 185 625 255 C 625 315 585 365 525 375 C 475 385 435 425 415 465 C 395 505 365 535 325 535 C 295 535 275 505 285 465 C 295 425 255 385 195 385 Z"
          fill="#FFFFFF"
          stroke="#121212"
          strokeWidth="6"
        />

        {/* Architectural Grid / Sulci Lines */}
        <path
          d="M 250 135 C 290 165 340 145 380 175 C 420 205 480 185 540 225"
          stroke="#121212"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M 200 205 C 240 225 270 265 320 265 C 370 265 410 225 470 255"
          stroke="#121212"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 260 315 C 310 335 350 305 390 335"
          stroke="#121212"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cerebellum Outline with Bauhaus Hatching */}
        <path
          d="M 490 375 C 550 385 580 435 560 485 C 530 525 470 515 430 485"
          stroke="#121212"
          strokeWidth="4"
          fill="#F3EFE6"
        />

        {/* === CIRCUIT A: LIKING (Nucleus Accumbens & Ventral Pallidum) === */}
        {(mode === 'overview' || mode === 'liking' || mode === 'divergence') && (
          <g opacity={mode === 'divergence' ? 0.35 : 1}>
            {/* Hotspot Target Rings */}
            <circle
              cx="310"
              cy="305"
              r={36 + 6 * pulseLiking}
              fill="none"
              stroke={likingColor}
              strokeWidth="3"
              strokeDasharray="4 4"
            />
            {/* Hedonic Hotspot Core */}
            <circle
              cx="310"
              cy="305"
              r="24"
              fill={likingColor}
              stroke="#121212"
              strokeWidth="4"
            />
            <circle cx="310" cy="305" r="8" fill="#FFB703" />

            {/* Ventral Pallidum Hotspot */}
            <circle
              cx="355"
              cy="330"
              r="14"
              fill={likingColor}
              stroke="#121212"
              strokeWidth="3"
            />

            {/* Bauhaus Leader Line & Callout Box */}
            <line
              x1="310"
              y1="305"
              x2="180"
              y2="440"
              stroke="#121212"
              strokeWidth="4"
            />
            <rect
              x="60"
              y="445"
              width="240"
              height="75"
              fill="#FFFFFF"
              stroke="#121212"
              strokeWidth="5"
            />
            {/* Hard drop shadow on callout */}
            <rect
              x="66"
              y="451"
              width="240"
              height="75"
              fill="none"
              stroke="#121212"
              strokeWidth="2"
            />
            <text
              x="180"
              y="475"
              textAnchor="middle"
              fill={likingColor}
              fontSize="17"
              fontWeight="900"
              fontFamily={DESIGN_TOKENS.fonts.primary}
              letterSpacing="1"
            >
              HEDONIC HOTSPOTS
            </text>
            <text
              x="180"
              y="500"
              textAnchor="middle"
              fill="#121212"
              fontSize="14"
              fontWeight="800"
              fontFamily={DESIGN_TOKENS.fonts.mono}
            >
              {mode === 'divergence' ? 'TOLERANCE COLLAPSE (↓)' : 'Opioid System (~1 mm³)'}
            </text>
          </g>
        )}

        {/* === CIRCUIT B: WANTING (Mesolimbic Dopamine Pathway) === */}
        {(mode === 'overview' || mode === 'wanting' || mode === 'divergence') && (
          <g>
            {/* Axon Projection Tract: VTA -> NAc -> Prefrontal Cortex */}
            <path
              d="M 380 400 Q 340 340 310 305 Q 260 250 200 180"
              stroke={wantingColor}
              strokeWidth={mode === 'divergence' ? 10 : 7}
              strokeLinecap="round"
              fill="none"
            />

            {/* VTA Origin (Ventral Tegmental Area) */}
            <circle
              cx="380"
              cy="400"
              r="18"
              fill={wantingColor}
              stroke="#121212"
              strokeWidth="4"
            />
            <circle cx="380" cy="400" r="7" fill="#FFFFFF" />

            {/* Animated Dopamine Particle Packets along the tract */}
            {[0, 0.33, 0.66].map((offset, idx) => {
              const speed = mode === 'divergence' ? 0.08 : 0.04;
              const t = (frame * speed + offset) % 1;
              const px = (1 - t) * (1 - t) * 380 + 2 * (1 - t) * t * 310 + t * t * 200;
              const py = (1 - t) * (1 - t) * 400 + 2 * (1 - t) * t * 305 + t * t * 180;

              return (
                <circle
                  key={idx}
                  cx={px}
                  cy={py}
                  r={mode === 'divergence' ? 9 : 7}
                  fill="#FFFFFF"
                  stroke="#121212"
                  strokeWidth="3"
                />
              );
            })}

            {/* Terminal Prefrontal Cortex Node */}
            <circle
              cx="200"
              cy="180"
              r="18"
              fill={wantingColor}
              stroke="#121212"
              strokeWidth="4"
            />
            <circle cx="200" cy="180" r="6" fill="#FFFFFF" />

            {/* Bauhaus Leader Line & Callout Box */}
            <line
              x1="380"
              y1="400"
              x2="500"
              y2="440"
              stroke="#121212"
              strokeWidth="4"
            />
            <rect
              x="420"
              y="445"
              width="250"
              height="75"
              fill={wantingColor}
              stroke="#121212"
              strokeWidth="5"
            />
            <text
              x="545"
              y="475"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="17"
              fontWeight="900"
              fontFamily={DESIGN_TOKENS.fonts.primary}
              letterSpacing="1"
            >
              DOPAMINE PROJECTIONS
            </text>
            <text
              x="545"
              y="500"
              textAnchor="middle"
              fill="#FFB703"
              fontSize="14"
              fontWeight="800"
              fontFamily={DESIGN_TOKENS.fonts.mono}
            >
              {mode === 'divergence' ? 'HYPER-SENSITIZED (↑ 100%)' : 'VTA → Striatum (Urge)'}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

