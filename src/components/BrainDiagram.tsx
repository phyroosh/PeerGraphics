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

  // Oscillating pulses for neural activity
  const pulseLiking = mode === 'divergence'
    ? 0.15 // heavily attenuated in divergence
    : 0.7 + 0.3 * Math.sin(frame * 0.18);

  const pulseWanting = mode === 'divergence'
    ? 0.9 + 0.4 * Math.sin(frame * 0.45) // hyper-reactive high-speed pulses
    : 0.7 + 0.3 * Math.sin(frame * 0.22);

  // Colors based on mode
  const likingColor = DESIGN_TOKENS.colors.likingEmerald;
  const wantingColor = mode === 'divergence'
    ? DESIGN_TOKENS.colors.dangerRed
    : DESIGN_TOKENS.colors.wantingAmber;

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
        width="680"
        height="560"
        viewBox="0 0 680 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.6))',
          overflow: 'visible',
        }}
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="cortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
          </linearGradient>

          <filter id="glowEmerald" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="glowAmber" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Brain Cortex Silhouette (Lateral View) */}
        <path
          d="M 170 360 C 130 360 90 320 80 260 C 70 200 100 130 170 80 C 240 30 350 30 450 60 C 540 90 600 160 600 230 C 600 290 560 340 500 350 C 450 360 410 400 390 440 C 370 480 340 510 300 510 C 270 510 250 480 260 440 C 270 400 230 360 170 360 Z"
          fill="url(#cortexGrad)"
          stroke="rgba(255, 255, 255, 0.16)"
          strokeWidth="3.5"
        />

        {/* Cortical Sulci / Folds */}
        <path
          d="M 230 110 C 270 140 320 120 360 150 C 400 180 460 160 520 200"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 180 180 C 220 200 250 240 300 240 C 350 240 390 200 450 230"
          stroke="rgba(255, 255, 255, 0.07)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 240 290 C 290 310 330 280 370 310"
          stroke="rgba(255, 255, 255, 0.06)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cerebellum Outline */}
        <path
          d="M 470 350 C 530 360 560 410 540 460 C 510 500 450 490 410 460"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="2.5"
          fill="rgba(15, 23, 42, 0.5)"
        />

        {/* === CIRCUIT A: LIKING (Nucleus Accumbens & Ventral Pallidum) === */}
        {(mode === 'overview' || mode === 'liking' || mode === 'divergence') && (
          <g opacity={mode === 'divergence' ? 0.35 : 1}>
            {/* Hotspot Outer Rings */}
            <circle
              cx="290"
              cy="285"
              r={36 + 8 * pulseLiking}
              fill="none"
              stroke={likingColor}
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity={0.6 * pulseLiking}
            />
            {/* Hedonic Hotspot Core */}
            <circle
              cx="290"
              cy="285"
              r="24"
              fill={likingColor}
              filter="url(#glowEmerald)"
              opacity={0.9 * pulseLiking}
            />
            <circle cx="290" cy="285" r="10" fill="#FFFFFF" opacity={pulseLiking} />

            {/* Ventral Pallidum Hotspot */}
            <circle
              cx="330"
              cy="310"
              r="14"
              fill={likingColor}
              filter="url(#glowEmerald)"
              opacity={0.75 * pulseLiking}
            />

            {/* Liking Annotation Callout */}
            <line
              x1="290"
              y1="285"
              x2="200"
              y2="420"
              stroke={likingColor}
              strokeWidth="2"
              strokeDasharray="3 3"
              opacity={0.8}
            />
            <circle cx="200" cy="420" r="4" fill={likingColor} />
            <rect
              x="80"
              y="425"
              width="240"
              height="60"
              rx="12"
              fill="rgba(6, 78, 59, 0.85)"
              stroke={likingColor}
              strokeWidth="1.5"
            />
            <text
              x="200"
              y="450"
              textAnchor="middle"
              fill="#A7F3D0"
              fontSize="16"
              fontWeight="bold"
              fontFamily={DESIGN_TOKENS.fonts.primary}
            >
              HEDONIC HOTSPOTS
            </text>
            <text
              x="200"
              y="472"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="13"
              fontWeight="600"
              fontFamily={DESIGN_TOKENS.fonts.mono}
            >
              Opioid / Liking System
            </text>
          </g>
        )}

        {/* === CIRCUIT B: WANTING (Mesolimbic Dopamine Pathway) === */}
        {(mode === 'overview' || mode === 'wanting' || mode === 'divergence') && (
          <g>
            {/* VTA Origin (Ventral Tegmental Area) */}
            <circle
              cx="360"
              cy="380"
              r="18"
              fill={wantingColor}
              filter="url(#glowAmber)"
              opacity={0.85 * pulseWanting}
            />
            <circle cx="360" cy="380" r="7" fill="#FFFFFF" opacity={pulseWanting} />

            {/* Axon Projection Path: VTA -> NAc -> Prefrontal Cortex */}
            <path
              d="M 360 380 Q 320 320 290 285 Q 240 230 180 160"
              stroke={wantingColor}
              strokeWidth={mode === 'divergence' ? 7 : 5}
              strokeLinecap="round"
              fill="none"
              filter="url(#glowAmber)"
              opacity={pulseWanting}
            />

            {/* Animated Dopamine Particle Packets along the pathway */}
            {[0, 0.33, 0.66].map((offset, idx) => {
              const t = (frame * 0.04 + offset) % 1;
              // quadratic bezier interpolation: VTA(360,380) -> NAc(290,285) -> PFC(180,160)
              const px = (1 - t) * (1 - t) * 360 + 2 * (1 - t) * t * 290 + t * t * 180;
              const py = (1 - t) * (1 - t) * 380 + 2 * (1 - t) * t * 285 + t * t * 160;

              return (
                <circle
                  key={idx}
                  cx={px}
                  cy={py}
                  r={mode === 'divergence' ? 8 : 6}
                  fill="#FFFFFF"
                  filter="url(#glowAmber)"
                />
              );
            })}

            {/* Prefrontal Cortex Terminal Node */}
            <circle
              cx="180"
              cy="160"
              r="16"
              fill={wantingColor}
              filter="url(#glowAmber)"
              opacity={0.9 * pulseWanting}
            />
            <circle cx="180" cy="160" r="6" fill="#FFFFFF" />

            {/* Wanting Annotation Callout */}
            <line
              x1="360"
              y1="380"
              x2="460"
              y2="420"
              stroke={wantingColor}
              strokeWidth="2"
              strokeDasharray="3 3"
              opacity={0.8}
            />
            <circle cx="460" cy="420" r="4" fill={wantingColor} />
            <rect
              x="360"
              y="425"
              width="240"
              height="60"
              rx="12"
              fill="rgba(124, 45, 18, 0.85)"
              stroke={wantingColor}
              strokeWidth="1.5"
            />
            <text
              x="480"
              y="450"
              textAnchor="middle"
              fill="#FED7AA"
              fontSize="16"
              fontWeight="bold"
              fontFamily={DESIGN_TOKENS.fonts.primary}
            >
              DOPAMINE PROJECTIONS
            </text>
            <text
              x="480"
              y="472"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="13"
              fontWeight="600"
              fontFamily={DESIGN_TOKENS.fonts.mono}
            >
              VTA → Striatum / Wanting
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
