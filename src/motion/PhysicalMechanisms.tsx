import React from 'react';

/**
 * Physical vector mechanisms for educational motion graphics.
 * Designed with Theme 09 (Punk Editorial Risograph) aesthetic:
 * Chunky 5px outlines, risograph spot fills, and bold functional movement.
 */

export interface BalanceScaleProps {
  x?: number;
  y?: number;
  tiltAngle?: number; // degrees (-30 to 30)
  leftWeightLabel?: string;
  rightWeightLabel?: string;
  leftColor?: string;
  rightColor?: string;
  scale?: number;
}

export const BalanceScale: React.FC<BalanceScaleProps> = ({
  x = 0,
  y = 0,
  tiltAngle = 0,
  leftWeightLabel,
  rightWeightLabel,
  leftColor = '#FF0055',
  rightColor = '#FFE600',
  scale = 1,
}) => {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Triangular Fulcrum / Base */}
      <polygon points="0,0 -45,90 45,90" fill="#111111" />
      <circle cx="0" cy="0" r="14" fill="#FFE600" stroke="#111111" strokeWidth="5" />
      <line x1="-70" y1="90" x2="70" y2="90" stroke="#111111" strokeWidth="8" strokeLinecap="round" />

      {/* Main Tilting Lever Beam */}
      <g transform={`rotate(${tiltAngle} 0 0)`}>
        {/* Heavy Timber Beam with Drop Shadow */}
        <rect x="-240" y="-12" width="480" height="24" rx="6" fill="#111111" />
        
        {/* Left Pan */}
        <g transform="translate(-200, 0)">
          <line x1="0" y1="0" x2="0" y2="70" stroke="#111111" strokeWidth="5" />
          <path d="M -50 70 Q 0 95 50 70 Z" fill="#FFFFFF" stroke="#111111" strokeWidth="5" />
          {leftWeightLabel && (
            <g transform="translate(0, 35)">
              <rect x="-40" y="-20" width="80" height="40" rx="6" fill={leftColor} stroke="#111111" strokeWidth="4" />
              <text x="0" y="8" fill="#FFFFFF" fontSize="20" fontWeight="900" textAnchor="middle">
                {leftWeightLabel}
              </text>
            </g>
          )}
        </g>

        {/* Right Pan */}
        <g transform="translate(200, 0)">
          <line x1="0" y1="0" x2="0" y2="70" stroke="#111111" strokeWidth="5" />
          <path d="M -50 70 Q 0 95 50 70 Z" fill="#FFFFFF" stroke="#111111" strokeWidth="5" />
          {rightWeightLabel && (
            <g transform="translate(0, 35)">
              <rect x="-40" y="-20" width="80" height="40" rx="6" fill={rightColor} stroke="#111111" strokeWidth="4" />
              <text x="0" y="8" fill="#111111" fontSize="20" fontWeight="900" textAnchor="middle">
                {rightWeightLabel}
              </text>
            </g>
          )}
        </g>
      </g>
    </g>
  );
};

export interface PressureGaugeProps {
  x?: number;
  y?: number;
  radius?: number;
  pressurePercent?: number; // 0 to 100
  title?: string;
  dangerLevel?: boolean;
}

export const PressureGauge: React.FC<PressureGaugeProps> = ({
  x = 0,
  y = 0,
  radius = 90,
  pressurePercent = 50,
  title = 'TENSION',
  dangerLevel = false,
}) => {
  // Needle angle from -135deg (0%) to 135deg (100%)
  const clampedPressure = Math.min(100, Math.max(0, pressurePercent));
  const needleAngle = -135 + (clampedPressure / 100) * 270;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Outer Rim Shadow */}
      <circle cx="8" cy="8" r={radius} fill="#111111" />
      {/* Gauge Body */}
      <circle cx="0" cy="0" r={radius} fill="#FFFFFF" stroke="#111111" strokeWidth="6" />

      {/* Red Danger Zone Arc (from 70% to 100%) */}
      <path
        d={`M ${radius * 0.75 * Math.cos(Math.PI * 0.1)} ${radius * 0.75 * Math.sin(Math.PI * 0.1)} A ${radius * 0.75} ${radius * 0.75} 0 0 1 ${radius * 0.75 * Math.cos(Math.PI * 0.45)} ${radius * 0.75 * Math.sin(Math.PI * 0.45)}`}
        fill="none"
        stroke="#FF0055"
        strokeWidth="14"
      />

      {/* Ticks */}
      {[-135, -90, -45, 0, 45, 90, 135].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = Math.cos(rad) * (radius - 24);
        const y1 = Math.sin(rad) * (radius - 24);
        const x2 = Math.cos(rad) * (radius - 12);
        const y2 = Math.sin(rad) * (radius - 12);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#111111"
            strokeWidth={i >= 4 ? 5 : 3}
          />
        );
      })}

      {/* Title Label */}
      <text
        x="0"
        y={radius * 0.5}
        fill="#111111"
        fontSize="22"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        textAnchor="middle"
      >
        {title}
      </text>

      {/* Dynamic Needle */}
      <g transform={`rotate(${needleAngle})`}>
        <polygon
          points={`-5,10 5,10 0,-${radius - 16}`}
          fill={dangerLevel ? '#FF0055' : '#111111'}
        />
        <circle cx="0" cy="0" r="10" fill="#FFE600" stroke="#111111" strokeWidth="4" />
      </g>
    </g>
  );
};

export interface StressCrackProps {
  progress?: number; // 0 to 1
  startX?: number;
  startY?: number;
  length?: number;
  strokeWidth?: number;
  color?: string;
}

export const StressCrack: React.FC<StressCrackProps> = ({
  progress = 1,
  startX = 0,
  startY = 0,
  length = 200,
  strokeWidth = 6,
  color = '#FF0055',
}) => {
  if (progress <= 0) return null;

  // Jagged lightning crack path
  const fullPath = `M ${startX} ${startY} l 25 35 l -15 40 l 30 45 l -10 50 l 35 40`;
  const totalLength = length * 1.5;
  const dashOffset = totalLength * (1 - progress);

  return (
    <path
      d={fullPath}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={totalLength}
      strokeDashoffset={dashOffset}
    />
  );
};

export interface ProtectiveDomeProps {
  x?: number;
  y?: number;
  radius?: number;
  expansionProgress?: number; // 0 to 1
  pulse?: number;
}

export const ProtectiveDome: React.FC<ProtectiveDomeProps> = ({
  x = 0,
  y = 0,
  radius = 280,
  expansionProgress = 1,
  pulse = 0,
}) => {
  if (expansionProgress <= 0) return null;
  const currentR = radius * expansionProgress;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Outer Radiant Field */}
      <path
        d={`M -${currentR + 10} 0 A ${currentR + 10} ${currentR + 10} 0 0 1 ${currentR + 10} 0`}
        fill="none"
        stroke="#FFE600"
        strokeWidth="6"
        strokeDasharray="14 12"
        opacity={0.7}
      />
      {/* Primary Cyan Solid Dome */}
      <path
        d={`M -${currentR} 0 A ${currentR} ${currentR} 0 0 1 ${currentR} 0 Z`}
        fill="rgba(0, 229, 255, 0.22)"
        stroke="#00E5FF"
        strokeWidth="8"
      />
      {/* Dome Crest Shield Badge */}
      <g transform={`translate(0, -${currentR}) scale(${expansionProgress})`}>
        <polygon points="-24,-20 24,-20 18,20 0,32 -18,20" fill="#FFE600" stroke="#111111" strokeWidth="5" />
        <text x="0" y="10" fill="#111111" fontSize="22" fontWeight="900" textAnchor="middle">
          ✓
        </text>
      </g>
    </g>
  );
};
