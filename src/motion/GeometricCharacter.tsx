import React from 'react';

export type CharacterPose = 
  | 'neutral' 
  | 'walking' 
  | 'tense' 
  | 'shocked' 
  | 'curious' 
  | 'cooperating' 
  | 'triumphant'
  | 'defensive';

export interface CharacterProps {
  x?: number;
  y?: number;
  scale?: number;
  pose?: CharacterPose;
  color?: string;
  outlineColor?: string;
  strokeWidth?: number;
  gazeX?: number; // -1 to 1 (left to right)
  gazeY?: number; // -1 to 1 (up to down)
  mouthShape?: 'neutral' | 'smile' | 'open' | 'flat' | 'zipped' | 'frown';
  armLeftAngle?: number;
  armRightAngle?: number;
  bodyAngle?: number;
  accessory?: 'none' | 'magnifyingGlass' | 'shield' | 'wrench' | 'hammer' | 'rope';
  label?: string;
  labelColor?: string;
}

export const GeometricCharacter: React.FC<CharacterProps> = ({
  x = 0,
  y = 0,
  scale = 1,
  pose = 'neutral',
  color = '#FF0055',
  outlineColor = '#111111',
  strokeWidth = 6,
  gazeX = 0,
  gazeY = 0,
  mouthShape = 'neutral',
  armLeftAngle,
  armRightAngle,
  bodyAngle = 0,
  accessory = 'none',
  label,
  labelColor = '#111111',
}) => {
  // Preset defaults per pose if not explicitly overridden
  let defaultLeftArm = 15;
  let defaultRightArm = -15;
  let defaultBodyTilt = 0;
  let defaultHeadTilt = 0;
  let defaultMouth: 'neutral' | 'smile' | 'open' | 'flat' | 'zipped' | 'frown' = mouthShape;

  switch (pose) {
    case 'walking':
      defaultLeftArm = 40;
      defaultRightArm = -35;
      defaultBodyTilt = 5;
      break;
    case 'tense':
      defaultLeftArm = -20;
      defaultRightArm = 20;
      defaultBodyTilt = -3;
      defaultMouth = mouthShape === 'neutral' ? 'flat' : mouthShape;
      break;
    case 'shocked':
      defaultLeftArm = -65;
      defaultRightArm = 65;
      defaultBodyTilt = -8;
      defaultMouth = mouthShape === 'neutral' ? 'open' : mouthShape;
      break;
    case 'curious':
      defaultLeftArm = -10;
      defaultRightArm = -45;
      defaultHeadTilt = 12;
      defaultMouth = mouthShape === 'neutral' ? 'smile' : mouthShape;
      break;
    case 'cooperating':
      defaultLeftArm = -30;
      defaultRightArm = -60;
      defaultBodyTilt = 8;
      defaultMouth = mouthShape === 'neutral' ? 'smile' : mouthShape;
      break;
    case 'defensive':
      defaultLeftArm = -45;
      defaultRightArm = 45;
      defaultBodyTilt = -12;
      defaultMouth = mouthShape === 'neutral' ? 'frown' : mouthShape;
      break;
    case 'triumphant':
      defaultLeftArm = -75;
      defaultRightArm = 75;
      defaultBodyTilt = 0;
      defaultMouth = mouthShape === 'neutral' ? 'smile' : mouthShape;
      break;
    case 'neutral':
    default:
      break;
  }

  const finalLeftArm = armLeftAngle !== undefined ? armLeftAngle : defaultLeftArm;
  const finalRightArm = armRightAngle !== undefined ? armRightAngle : defaultRightArm;
  const finalBodyAngle = bodyAngle !== 0 ? bodyAngle : defaultBodyTilt;

  // Eye pupil offset
  const pupilOffsetX = gazeX * 9;
  const pupilOffsetY = gazeY * 7;

  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Label Sticker above character if present */}
      {label && (
        <g transform="translate(0, -115)">
          <rect
            x={-label.length * 9 - 14}
            y="-22"
            width={label.length * 18 + 28}
            height="42"
            rx="6"
            fill="#FFFFFF"
            stroke={outlineColor}
            strokeWidth="4"
            style={{filter: 'drop-shadow(6px 6px 0 #111111)'}}
          />
          <text
            x="0"
            y="6"
            fill={labelColor}
            fontSize="32"
            fontWeight="900"
            fontFamily="'Arial Black', -apple-system, sans-serif"
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      )}

      {/* Main Character Body Group */}
      <g transform={`rotate(${finalBodyAngle} 0 40)`}>
        {/* Left Arm (Behind Body) */}
        <g transform={`translate(-28, 20) rotate(${finalLeftArm})`}>
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="48"
            stroke={outlineColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <circle cx="0" cy="48" r="8" fill={color} stroke={outlineColor} strokeWidth={strokeWidth - 2} />
        </g>

        {/* Legs */}
        <g transform="translate(-16, 70)">
          <line
            x1="0"
            y1="0"
            x2={pose === 'walking' ? -12 : 0}
            y2="44"
            stroke={outlineColor}
            strokeWidth={strokeWidth + 1}
            strokeLinecap="round"
          />
          <ellipse
            cx={pose === 'walking' ? -16 : -4}
            cy="46"
            rx="12"
            ry="6"
            fill={outlineColor}
          />
        </g>
        <g transform="translate(16, 70)">
          <line
            x1="0"
            y1="0"
            x2={pose === 'walking' ? 14 : 0}
            y2="44"
            stroke={outlineColor}
            strokeWidth={strokeWidth + 1}
            strokeLinecap="round"
          />
          <ellipse
            cx={pose === 'walking' ? 18 : 6}
            cy="46"
            rx="12"
            ry="6"
            fill={outlineColor}
          />
        </g>

        {/* Torso Capsule with Risograph Drop Shadow */}
        <rect
          x="-28"
          y="6"
          width="56"
          height="72"
          rx="18"
          fill="#111111"
          transform="translate(6, 6)"
        />
        <rect
          x="-28"
          y="6"
          width="56"
          height="72"
          rx="18"
          fill={color}
          stroke={outlineColor}
          strokeWidth={strokeWidth}
        />

        {/* Right Arm (In Front of Body) */}
        <g transform={`translate(28, 20) rotate(${finalRightArm})`}>
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="48"
            stroke={outlineColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <circle cx="0" cy="48" r="8" fill={color} stroke={outlineColor} strokeWidth={strokeWidth - 2} />

          {/* Accessory attached to right hand */}
          {accessory === 'magnifyingGlass' && (
            <g transform="translate(0, 48) rotate(-35)">
              <line x1="0" y1="0" x2="0" y2="28" stroke={outlineColor} strokeWidth="6" strokeLinecap="round" />
              <circle cx="0" cy="38" r="18" fill="rgba(0, 229, 255, 0.4)" stroke={outlineColor} strokeWidth="5" />
            </g>
          )}
          {accessory === 'shield' && (
            <g transform="translate(12, 30)">
              <polygon
                points="-18,-24 18,-24 14,24 0,36 -14,24"
                fill="#00E5FF"
                stroke={outlineColor}
                strokeWidth="5"
              />
            </g>
          )}
          {accessory === 'wrench' && (
            <g transform="translate(0, 48) rotate(45)">
              <line x1="0" y1="-8" x2="0" y2="30" stroke={outlineColor} strokeWidth="8" strokeLinecap="round" />
              <circle cx="0" cy="30" r="10" fill="none" stroke={outlineColor} strokeWidth="5" />
            </g>
          )}
        </g>

        {/* Head Group with Tilting and Animatable Eyes */}
        <g transform={`translate(0, -38) rotate(${defaultHeadTilt})`}>
          {/* Head Shadow */}
          <circle cx="6" cy="6" r="38" fill="#111111" />
          {/* Head Circle */}
          <circle
            cx="0"
            cy="0"
            r="38"
            fill="#FFFFFF"
            stroke={outlineColor}
            strokeWidth={strokeWidth}
          />

          {/* Eyes (Left & Right) */}
          {/* Left Eye Sclera & Pupil */}
          <g transform="translate(-13, -4)">
            <ellipse cx="0" cy="0" rx="9" ry="11" fill="#FFFFFF" stroke={outlineColor} strokeWidth="3" />
            <circle cx={pupilOffsetX} cy={pupilOffsetY} r="5" fill="#111111" />
            <circle cx={pupilOffsetX - 2} cy={pupilOffsetY - 2} r="1.5" fill="#FFFFFF" />
          </g>
          {/* Right Eye Sclera & Pupil */}
          <g transform="translate(13, -4)">
            <ellipse cx="0" cy="0" rx="9" ry="11" fill="#FFFFFF" stroke={outlineColor} strokeWidth="3" />
            <circle cx={pupilOffsetX} cy={pupilOffsetY} r="5" fill="#111111" />
            <circle cx={pupilOffsetX - 2} cy={pupilOffsetY - 2} r="1.5" fill="#FFFFFF" />
          </g>

          {/* Eyebrows based on pose */}
          {pose === 'tense' && (
            <>
              <line x1="-20" y1="-18" x2="-6" y2="-12" stroke={outlineColor} strokeWidth="4" strokeLinecap="round" />
              <line x1="6" y1="-12" x2="20" y2="-18" stroke={outlineColor} strokeWidth="4" strokeLinecap="round" />
            </>
          )}
          {pose === 'shocked' && (
            <>
              <line x1="-20" y1="-20" x2="-6" y2="-24" stroke={outlineColor} strokeWidth="4" strokeLinecap="round" />
              <line x1="6" y1="-24" x2="20" y2="-20" stroke={outlineColor} strokeWidth="4" strokeLinecap="round" />
            </>
          )}
          {pose === 'curious' && (
            <>
              <line x1="-20" y1="-16" x2="-6" y2="-18" stroke={outlineColor} strokeWidth="4" strokeLinecap="round" />
              <line x1="6" y1="-22" x2="20" y2="-16" stroke={outlineColor} strokeWidth="4" strokeLinecap="round" />
            </>
          )}

          {/* Mouth */}
          {defaultMouth === 'smile' && (
            <path
              d="M -12 14 Q 0 24 12 14"
              fill="none"
              stroke={outlineColor}
              strokeWidth="4"
              strokeLinecap="round"
            />
          )}
          {defaultMouth === 'frown' && (
            <path
              d="M -12 20 Q 0 10 12 20"
              fill="none"
              stroke={outlineColor}
              strokeWidth="4"
              strokeLinecap="round"
            />
          )}
          {defaultMouth === 'flat' && (
            <line x1="-10" y1="16" x2="10" y2="16" stroke={outlineColor} strokeWidth="4" strokeLinecap="round" />
          )}
          {defaultMouth === 'open' && (
            <ellipse cx="0" cy="18" rx="8" ry="10" fill={outlineColor} />
          )}
          {defaultMouth === 'zipped' && (
            <g transform="translate(0, 16)">
              <line x1="-14" y1="0" x2="14" y2="0" stroke="#FF0055" strokeWidth="5" />
              <line x1="-8" y1="-4" x2="-8" y2="4" stroke={outlineColor} strokeWidth="3" />
              <line x1="0" y1="-4" x2="0" y2="4" stroke={outlineColor} strokeWidth="3" />
              <line x1="8" y1="-4" x2="8" y2="4" stroke={outlineColor} strokeWidth="3" />
            </g>
          )}
        </g>
      </g>
    </g>
  );
};
