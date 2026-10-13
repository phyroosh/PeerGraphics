import React from 'react';

export interface WhisperingWoodsEnvProps {
  cameraX?: number; // Virtual camera X offset for parallax
  cameraZoom?: number; // Virtual camera zoom level
  windTime?: number; // Time variable for wind sway animation
  warmLightIntensity?: number; // 0 (cold dusk) to 1 (warm golden wash from lantern)
}

/**
 * WhisperingWoodsEnv: Multi-Plane Depth Environment for 2D Storytelling.
 * 
 * Implements 4 distinct depth planes with calculated optical parallax:
 * - Plane 0 (Far Horizon, Z=3.0): Sky, crescent moon, stars, distant mountain ridge
 * - Plane 1 (Midground, Z=1.8): Silhouetted pine forest canopy, rolling hill, mist
 * - Plane 2 (Action Ground, Z=1.0): Mossy clearing, ancient boulder, ground path
 * - Plane 3 (Foreground Framing, Z=0.5): Overhanging branches & vines with depth blur
 */
export const WhisperingWoodsEnv: React.FC<WhisperingWoodsEnvProps> = ({
  cameraX = 0,
  cameraZoom = 1,
  windTime = 0,
  warmLightIntensity = 0,
}) => {
  // Parallax offsets
  const farX = cameraX * 0.12;
  const midX = cameraX * 0.45;
  const groundX = cameraX * 1.0;
  const foreX = cameraX * 1.4;

  // Gentle wind swaying for foliage
  const branchSway = Math.sin(windTime * 1.8) * 4;
  const ivySway = Math.cos(windTime * 2.2) * 6;

  // Color grade adjustment based on warm lantern intensity
  const mistOpacity = 0.35 - warmLightIntensity * 0.15;

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
        transform: `scale(${cameraZoom})`,
        transformOrigin: '540px 1080px',
      }}
    >
      {/* ========================================================= */}
      {/* PLANE 0: FAR HORIZON & NIGHT SKY (Z = 3.0)               */}
      {/* ========================================================= */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: -150,
          width: 1380,
          height: 1920,
          transform: `translateX(${farX}px)`,
        }}
      >
        <svg width="1380" height="1920" viewBox="0 0 1380 1920">
          <defs>
            {/* Deep Twilight Sky Gradient */}
            <linearGradient id="twilight-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#060A14" />
              <stop offset="35%" stopColor="#0B132B" />
              <stop offset="70%" stopColor="#1C2541" />
              <stop offset="100%" stopColor="#3A506B" />
            </linearGradient>

            {/* Moon Glow */}
            <radialGradient id="moon-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E0F7FA" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#80DEEA" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0B132B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Sky Backdrop */}
          <rect width="1380" height="1920" fill="url(#twilight-sky)" />

          {/* Twinkling Stars */}
          <g id="stars" opacity="0.85">
            <circle cx="180" cy="180" r="2.2" fill="#FFFFFF" />
            <circle cx="340" cy="260" r="1.5" fill="#E0F7FA" />
            <circle cx="520" cy="140" r="2.5" fill="#FFFFFF" />
            <circle cx="780" cy="210" r="1.8" fill="#E0F7FA" />
            <circle cx="950" cy="120" r="3.0" fill="#FFFFFF" />
            <circle cx="1120" cy="280" r="1.6" fill="#FFFFFF" />
            <circle cx="260" cy="420" r="1.4" fill="#E0F7FA" />
            <circle cx="850" cy="380" r="2.0" fill="#FFFFFF" />
            <circle cx="680" cy="320" r="1.2" fill="#E0F7FA" />
            <circle cx="430" cy="460" r="1.8" fill="#FFFFFF" />
          </g>

          {/* Glowing Crescent Moon */}
          <g id="moon" transform="translate(980, 260)">
            <circle cx="0" cy="0" r="120" fill="url(#moon-halo)" />
            {/* Crescent silhouette */}
            <path
              d="M 30 -40 A 50 50 0 1 0 30 40 A 42 42 0 1 1 30 -40 Z"
              fill="#F0FBFC"
            />
          </g>

          {/* Distant Mountain Ridge Silhouette */}
          <path
            d="M 0 1100 L 160 1020 L 380 1080 L 620 980 L 890 1060 L 1140 990 L 1380 1070 L 1380 1400 L 0 1400 Z"
            fill="#121C2B"
            opacity="0.85"
          />

          {/* Distant Atmospheric Mist Layer */}
          <rect x="0" y="980" width="1380" height="350" fill="rgba(58, 80, 107, 0.28)" />
        </svg>
      </div>

      {/* ========================================================= */}
      {/* PLANE 1: MIDGROUND FOREST TREELINE (Z = 1.8)              */}
      {/* ========================================================= */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: -200,
          width: 1480,
          height: 1920,
          transform: `translateX(${midX}px)`,
        }}
      >
        <svg width="1480" height="1920" viewBox="0 0 1480 1920">
          <defs>
            {/* Tree Silhouette Gradient */}
            <linearGradient id="tree-sil-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B1320" />
              <stop offset="100%" stopColor="#070C14" />
            </linearGradient>
          </defs>

          {/* Midground Rolling Hills & Pines */}
          <g fill="url(#tree-sil-grad)">
            {/* Pine 1 */}
            <polygon points="120,700 80,820 160,820" />
            <polygon points="120,780 60,930 180,930" />
            <polygon points="120,890 40,1100 200,1100" />
            <rect x="110" y="1100" width="20" height="140" fill="#070C14" />

            {/* Pine 2 (Taller) */}
            <polygon points="320,620 270,760 370,760" />
            <polygon points="320,720 240,890 400,890" />
            <polygon points="320,840 210,1080 430,1080" />
            <rect x="308" y="1080" width="24" height="180" fill="#070C14" />

            {/* Pine 3 */}
            <polygon points="560,680 510,810 610,810" />
            <polygon points="560,770 480,940 640,940" />
            <polygon points="560,890 450,1120 670,1120" />
            <rect x="548" y="1120" width="24" height="140" fill="#070C14" />

            {/* Pine 4 (Right side dense grove) */}
            <polygon points="920,600 860,750 980,750" />
            <polygon points="920,710 830,880 1010,880" />
            <polygon points="920,830 790,1090 1050,1090" />
            <rect x="906" y="1090" width="28" height="180" fill="#070C14" />

            {/* Pine 5 */}
            <polygon points="1180,660 1130,790 1230,790" />
            <polygon points="1180,750 1100,920 1260,920" />
            <polygon points="1180,870 1070,1110 1290,1110" />
            <rect x="1168" y="1110" width="24" height="150" fill="#070C14" />

            {/* Rolling midground forest floor */}
            <path d="M 0 1180 Q 380 1120 780 1190 T 1480 1160 L 1480 1500 L 0 1500 Z" fill="#070C14" />
          </g>

          {/* Drifting Midground Fog Bank */}
          <rect
            x="0"
            y="1080"
            width="1480"
            height="180"
            fill="rgba(42, 60, 84, 0.42)"
            opacity={mistOpacity}
          />
        </svg>
      </div>

      {/* ========================================================= */}
      {/* PLANE 2: ACTION GROUND TERRAIN & BOULDER (Z = 1.0)       */}
      {/* ========================================================= */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: -100,
          width: 1280,
          height: 1920,
          transform: `translateX(${groundX}px)`,
        }}
      >
        <svg width="1280" height="1920" viewBox="0 0 1280 1920">
          <defs>
            {/* Ground Forest Bed Gradient */}
            <linearGradient id="ground-bed" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#12231A" />
              <stop offset="40%" stopColor="#0B1710" />
              <stop offset="100%" stopColor="#040906" />
            </linearGradient>

            {/* Ancient Mossy Boulder Gradient */}
            <linearGradient id="boulder-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#253529" />
              <stop offset="60%" stopColor="#141E17" />
              <stop offset="100%" stopColor="#0A0F0C" />
            </linearGradient>
          </defs>

          {/* Main Clearing Knoll Surface */}
          <path
            d="M 0 1240 Q 320 1190 640 1220 T 1280 1210 L 1280 1920 L 0 1920 Z"
            fill="url(#ground-bed)"
          />

          {/* Ancient Mossy Boulder (Stage Right) */}
          <path
            d="M 820 1280 C 800 1170 940 1100 1060 1140 C 1140 1170 1190 1230 1160 1310 Z"
            fill="url(#boulder-grad)"
            stroke="#08100B"
            strokeWidth="3"
          />
          {/* Moss Patch on Boulder */}
          <path
            d="M 850 1210 Q 940 1140 1040 1160 Q 990 1220 890 1220 Z"
            fill="#2D5A27"
            opacity="0.85"
          />

          {/* Cobblestones & Forest Floor Path Texture */}
          <ellipse cx="260" cy="1265" rx="35" ry="12" fill="#1C2D21" />
          <ellipse cx="440" cy="1285" rx="50" ry="16" fill="#18271C" />
          <ellipse cx="680" cy="1275" rx="40" ry="14" fill="#162319" />
          <ellipse cx="560" cy="1320" rx="60" ry="18" fill="#121D15" />

          {/* Small Wild Forest Sprouts / Mushrooms */}
          <g transform="translate(360, 1260)">
            <path d="M 0 0 Q -5 -25 0 -35 Q 8 -20 0 0" fill="#2D5A27" />
            <path d="M 12 0 Q 8 -18 16 -28 Q 20 -15 12 0" fill="#3E7B35" />
          </g>
          <g transform="translate(740, 1270)">
            <path d="M 0 0 Q -4 -20 2 -30 Q 8 -16 0 0" fill="#2D5A27" />
          </g>
        </svg>
      </div>

      {/* ========================================================= */}
      {/* PLANE 3: FOREGROUND FRAMING CANOPY & VINES (Z = 0.5)      */}
      {/* ========================================================= */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: -80,
          width: 1240,
          height: 1920,
          transform: `translateX(${foreX}px)`,
          filter: 'blur(1.2px)', // Cinematic lens edge blur
        }}
      >
        <svg width="1240" height="1920" viewBox="0 0 1240 1920">
          {/* Overhanging Pine Boughs (Top Screen Framing) */}
          <g id="top-canopy" transform={`translate(${branchSway}, 0)`}>
            {/* Left High Bough */}
            <path
              d="M -50 -20 Q 180 80 340 180 Q 220 180 140 140 Q 60 170 -50 90 Z"
              fill="#060C08"
            />
            {/* Hanging Pine Needle Tufts */}
            <path d="M 140 140 L 150 200 L 130 190 L 140 140" fill="#060C08" />
            <path d="M 220 170 L 235 240 L 210 220 L 220 170" fill="#060C08" />
            <path d="M 290 180 L 310 260 L 280 235 L 290 180" fill="#060C08" />

            {/* Right Top Framing Branch */}
            <path
              d="M 1290 -30 Q 1060 120 880 220 Q 980 210 1060 160 Q 1160 170 1290 80 Z"
              fill="#060C08"
            />
            <path d="M 940 210 L 920 280 L 950 260 L 940 210" fill="#060C08" />
            <path d="M 1040 170 L 1020 240 L 1050 230 L 1040 170" fill="#060C08" />
          </g>

          {/* Creeping Foreground Ivy / Roots (Bottom Corners Framing) */}
          <g id="bottom-framing" transform={`translate(${ivySway}, 0)`}>
            {/* Bottom-Left Silhouette Fern */}
            <path
              d="M -40 1960 Q 80 1820 120 1720 Q 80 1790 20 1860 Q 110 1760 160 1680 Q 90 1790 -40 1960 Z"
              fill="#040805"
            />
            {/* Bottom-Right Foreground Plant */}
            <path
              d="M 1280 1960 Q 1160 1830 1110 1740 Q 1150 1810 1210 1870 Q 1130 1780 1080 1700 Q 1150 1800 1280 1960 Z"
              fill="#040805"
            />
          </g>
        </svg>
      </div>

      {/* ========================================================= */}
      {/* DYNAMIC ATMOSPHERIC VIGNETTE & COLOR GRADE SHIFT           */}
      {/* ========================================================= */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          background: `radial-gradient(circle at 65% 55%, rgba(255, 234, 167, ${0.35 * warmLightIntensity}) 0%, rgba(11, 19, 43, 0.4) 65%, rgba(6, 10, 20, 0.85) 100%)`,
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          transition: 'background 0.5s ease',
        }}
      />
    </div>
  );
};
