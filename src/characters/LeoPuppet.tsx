import React from 'react';

export interface LeoPuppetProps {
  x?: number;
  y?: number;
  scale?: number;
  facing?: 'left' | 'right';

  // Kinetic & Rigging Parameters
  breathProgress?: number; // 0 to 1 (expands chest, moves shoulders)
  headTilt?: number; // degrees (-15 to +20)
  gazeX?: number; // -1 (look left) to +1 (look right)
  gazeY?: number; // -1 (look up) to +1 (look down)
  blinkProgress?: number; // 0 (open) to 1 (fully closed)
  mouthState?: 'rest' | 'wonder' | 'smile';
  eyebrowState?: 'neutral' | 'arched_wonder' | 'focused';
  
  // Limbs & Props
  lanternRaisedProgress?: number; // 0 (at side) to 1 (chest height)
  lanternLit?: boolean;
  lanternFlameIntensity?: number; // 0 to 1
  windSway?: number; // -1 to +1 (sways scarf and coat tail)
  warmLightWash?: number; // 0 (cool dusk ambient) to 1 (full golden glow on body)
}

/**
 * LeoPuppet: Hierarchical Vector Rigged Character Component.
 * 
 * Features anatomical pivot points, decoupled expressive eyes with pupil tracking,
 * eyelids, procedural breathing, dynamic scarf wind physics, and variable lantern lighting.
 */
export const LeoPuppet: React.FC<LeoPuppetProps> = ({
  x = 0,
  y = 0,
  scale = 1,
  facing = 'right',
  breathProgress = 0,
  headTilt = 0,
  gazeX = 0,
  gazeY = 0,
  blinkProgress = 0,
  mouthState = 'rest',
  eyebrowState = 'neutral',
  lanternRaisedProgress = 0,
  lanternLit = false,
  lanternFlameIntensity = 0,
  windSway = 0,
  warmLightWash = 0,
}) => {
  const flip = facing === 'left' ? -1 : 1;

  // Breathing & Kinetic offsets
  const chestRise = breathProgress * 5; // px
  const shoulderY = -chestRise * 0.8;
  const scarfWaveX = windSway * 12;
  const coatWaveX = windSway * 6;

  // Eye gaze translation
  const pupilOffsetX = gazeX * 5;
  const pupilOffsetY = gazeY * 3;

  // Dynamic color grading: shift from cool twilight to warm lantern illumination
  const skinColor = warmLightWash > 0 ? '#FFE8D6' : '#F7E7D9';
  const skinShadow = warmLightWash > 0 ? '#E8B693' : '#D1B29D';
  const coatColor = warmLightWash > 0 ? '#223348' : '#182433';
  const scarfColor = warmLightWash > 0 ? '#D63031' : '#B71515';
  const hairColor = '#241611';

  // Eyebrow geometry based on state
  let browLeftAngle = 0;
  let browRightAngle = 0;
  let browY = 0;
  if (eyebrowState === 'arched_wonder') {
    browLeftAngle = -12;
    browRightAngle = 14;
    browY = -7;
  } else if (eyebrowState === 'focused') {
    browLeftAngle = 8;
    browRightAngle = -8;
    browY = 2;
  }

  // Lantern position based on raised progress (0 = at side, 1 = lifted high)
  const armAngle = -15 - lanternRaisedProgress * 48; // degrees
  const lanternY = 280 - lanternRaisedProgress * 120;
  const lanternX = 140 + lanternRaisedProgress * 35;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `translate(-50%, -100%) scale(${scale * flip}, ${scale})`,
        transformOrigin: 'bottom center',
        pointerEvents: 'none',
      }}
    >
      <svg
        width="450"
        height="650"
        viewBox="0 0 450 650"
        style={{overflow: 'visible'}}
      >
        <defs>
          {/* Lantern Glow Gradient */}
          <radialGradient id="lantern-ember-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="35%" stopColor="#FFEAA7" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#FD9644" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FA8231" stopOpacity="0" />
          </radialGradient>
          {/* Volumetric Radial Light Aura */}
          <radialGradient id="lantern-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFEAA7" stopOpacity={0.6 * lanternFlameIntensity} />
            <stop offset="50%" stopColor="#FD9644" stopOpacity={0.25 * lanternFlameIntensity} />
            <stop offset="100%" stopColor="#FD9644" stopOpacity="0" />
          </radialGradient>
          {/* Character Drop Shadow */}
          <ellipse id="char-shadow" cx="200" cy="625" rx="100" ry="20" fill="rgba(6, 12, 22, 0.55)" />
        </defs>

        {/* Ground Contact Shadow */}
        <use href="#char-shadow" />

        {/* ======================================================== */}
        {/* LEGS & BOOTS                                             */}
        {/* ======================================================== */}
        <g id="legs" transform="translate(150, 420)">
          {/* Left Leg (Back) */}
          <rect x="25" y="0" width="28" height="140" rx="12" fill="#202A37" />
          <path d="M 22 135 L 56 135 L 62 180 L 15 180 Z" fill="#3D291D" />
          <rect x="12" y="175" width="55" height="20" rx="6" fill="#2B1D14" />

          {/* Right Leg (Front) */}
          <rect x="65" y="0" width="30" height="145" rx="12" fill="#283546" />
          <path d="M 62 140 L 98 140 L 105 185 L 55 185 Z" fill="#4B3324" />
          <rect x="52" y="180" width="60" height="22" rx="7" fill="#322217" />
        </g>

        {/* ======================================================== */}
        {/* COAT TAILS & HIPS (Under Torso Layer)                    */}
        {/* ======================================================== */}
        <g id="hips" transform="translate(145, 320)">
          {/* Coat skirt extending downward under jacket */}
          <path
            d={`M 15 20 Q ${55 + coatWaveX} 120 ${30 + coatWaveX * 1.5} 160 L 115 160 Q 110 80 115 20 Z`}
            fill="#15212E"
          />
        </g>

        {/* ======================================================== */}
        {/* TORSO & CHEST (Breath Animated, Overlaps Hips)           */}
        {/* ======================================================== */}
        <g id="torso" transform={`translate(155, ${195 + shoulderY})`}>
          {/* Main Coat Torso - extends down to 180 to guarantee deep overlap */}
          <path
            d={`M 15 55 C 25 ${15 - chestRise} 90 ${15 - chestRise} 100 55 L 112 175 L 8 175 Z`}
            fill={coatColor}
            stroke="#0E1620"
            strokeWidth="3"
          />

          {/* Integrated Belt at Waistline */}
          <rect x="10" y="150" width="100" height="20" rx="3" fill="#3D2B1F" />
          <rect x="48" y="146" width="24" height="26" rx="4" fill="#D4AF37" stroke="#997C22" strokeWidth="2" />

          {/* Double-Breasted Brass Buttons */}
          <circle cx="42" cy="75" r="4.5" fill="#D4AF37" />
          <circle cx="72" cy="75" r="4.5" fill="#D4AF37" />
          <circle cx="42" cy="102" r="4.5" fill="#D4AF37" />
          <circle cx="72" cy="102" r="4.5" fill="#D4AF37" />
          <circle cx="42" cy="128" r="4.5" fill="#D4AF37" />
          <circle cx="72" cy="128" r="4.5" fill="#D4AF37" />

          {/* Left Arm (Behind Torso, relaxed) */}
          <g transform="translate(10, 58) rotate(15)">
            <circle cx="0" cy="0" r="12" fill="#131C28" />
            <rect x="-10" y="0" width="22" height="90" rx="10" fill="#131C28" />
            <rect x="-8" y="80" width="18" height="60" rx="9" fill="#131C28" />
            <circle cx="1" cy="145" r="10" fill={skinColor} />
          </g>
        </g>

        {/* ======================================================== */}
        {/* WOOL SCARF (Back Layer & Knot)                           */}
        {/* ======================================================== */}
        <g id="scarf-back" transform={`translate(160, ${205 + shoulderY})`}>
          {/* Trailing Scarf Tail with Wind Physics */}
          <path
            d={`M 15 20 Q ${-20 + scarfWaveX} 70 ${-35 + scarfWaveX * 1.6} 140 Q ${-15 + scarfWaveX * 1.8} 145 ${-5 + scarfWaveX} 130 Q 5 60 25 20 Z`}
            fill={scarfColor}
            stroke="#7E1010"
            strokeWidth="2.5"
          />
        </g>

        {/* ======================================================== */}
        {/* HEAD & EXPRESSIVE FACE (Pivot at Neck)                   */}
        {/* ======================================================== */}
        <g
          id="head-group"
          transform={`translate(210, ${180 + shoulderY}) rotate(${headTilt})`}
          style={{transformOrigin: '0px 20px'}}
        >
          {/* Neck */}
          <rect x="-16" y="5" width="32" height="35" rx="10" fill={skinShadow} />

          {/* Hair Back Silhouette */}
          <ellipse cx="0" cy="-38" rx="64" ry="62" fill={hairColor} />

          {/* Face Base */}
          <path
            d="M -42 -40 C -45 -10 -25 32 0 32 C 25 32 45 -10 42 -40 C 40 -68 -40 -68 -42 -40 Z"
            fill={skinColor}
            stroke="#CBA489"
            strokeWidth="2"
          />

          {/* Soft Cheek Blush */}
          <ellipse cx="-22" cy="-4" rx="12" ry="7" fill="rgba(235, 110, 110, 0.28)" />
          <ellipse cx="22" cy="-4" rx="12" ry="7" fill="rgba(235, 110, 110, 0.28)" />

          {/* ==================== EYES & PUPILS ==================== */}
          {/* Left Eye */}
          <g id="left-eye" transform="translate(-20, -16)">
            {/* Sclera (White) */}
            <ellipse cx="0" cy="0" rx="13" ry="14" fill="#FFFFFF" stroke="#3D291D" strokeWidth="2" />
            {/* Pupil & Iris */}
            <g transform={`translate(${pupilOffsetX}, ${pupilOffsetY})`}>
              <circle cx="0" cy="0" r="7" fill="#1C2833" />
              <circle cx="2" cy="-2" r="2.5" fill="#FFFFFF" />
              {/* Golden Reflection from lantern */}
              {lanternLit && <circle cx="-2" cy="2" r="1.8" fill="#FFEAA7" opacity={lanternFlameIntensity} />}
            </g>
            {/* Eyelid (Blink Animation) */}
            <rect
              x="-15"
              y="-16"
              width="30"
              height={32 * blinkProgress}
              fill={skinColor}
              stroke="#A88168"
              strokeWidth="2"
            />
          </g>

          {/* Right Eye */}
          <g id="right-eye" transform="translate(20, -16)">
            {/* Sclera (White) */}
            <ellipse cx="0" cy="0" rx="13" ry="14" fill="#FFFFFF" stroke="#3D291D" strokeWidth="2" />
            {/* Pupil & Iris */}
            <g transform={`translate(${pupilOffsetX}, ${pupilOffsetY})`}>
              <circle cx="0" cy="0" r="7" fill="#1C2833" />
              <circle cx="2" cy="-2" r="2.5" fill="#FFFFFF" />
              {/* Golden Reflection */}
              {lanternLit && <circle cx="-2" cy="2" r="1.8" fill="#FFEAA7" opacity={lanternFlameIntensity} />}
            </g>
            {/* Eyelid (Blink Animation) */}
            <rect
              x="-15"
              y="-16"
              width="30"
              height={32 * blinkProgress}
              fill={skinColor}
              stroke="#A88168"
              strokeWidth="2"
            />
          </g>

          {/* ==================== EYEBROWS ==================== */}
          <g transform={`translate(0, ${browY})`}>
            {/* Left Eyebrow */}
            <path
              d="M -34 -34 Q -20 -38 -8 -34"
              fill="none"
              stroke={hairColor}
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${browLeftAngle}, -20, -35)`}
            />
            {/* Right Eyebrow */}
            <path
              d="M 8 -34 Q 20 -38 34 -34"
              fill="none"
              stroke={hairColor}
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${browRightAngle}, 20, -35)`}
            />
          </g>

          {/* ==================== SPECTACLES ==================== */}
          <g id="spectacles">
            {/* Left Rim */}
            <circle cx="-20" cy="-16" r="17" fill="none" stroke="#D4AF37" strokeWidth="3.5" />
            {/* Right Rim */}
            <circle cx="20" cy="-16" r="17" fill="none" stroke="#D4AF37" strokeWidth="3.5" />
            {/* Bridge */}
            <path d="M -4 -18 Q 0 -22 4 -18" fill="none" stroke="#D4AF37" strokeWidth="3.5" />
            {/* Temples */}
            <path d="M -37 -16 L -48 -20" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
            <path d="M 37 -16 L 48 -20" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
          </g>

          {/* Cute Nose */}
          <path d="M 0 -10 Q 4 0 0 6" fill="none" stroke="#C29B7F" strokeWidth="3" strokeLinecap="round" />

          {/* ==================== MOUTH PHONEMES ==================== */}
          <g id="mouth" transform="translate(0, 18)">
            {mouthState === 'rest' && (
              <path d="M -9 0 Q 0 4 9 0" fill="none" stroke="#873600" strokeWidth="3" strokeLinecap="round" />
            )}
            {mouthState === 'wonder' && (
              <g>
                <ellipse cx="0" cy="2" rx="7" ry="9" fill="#581845" stroke="#C0392B" strokeWidth="2" />
                <ellipse cx="0" cy="7" rx="4" ry="3" fill="#E74C3C" />
              </g>
            )}
            {mouthState === 'smile' && (
              <path d="M -11 -2 Q 0 9 11 -2" fill="none" stroke="#873600" strokeWidth="3.5" strokeLinecap="round" />
            )}
          </g>

          {/* Hair Front Crown & Bangs (Covers forehead completely) */}
          <path
            d="M -56 -25 C -62 -75 -30 -96 0 -96 C 30 -96 62 -75 56 -25 C 50 -10 44 -18 38 -32 C 28 -24 16 -24 4 -36 C -8 -26 -20 -26 -32 -34 C -42 -18 -48 -10 -56 -25 Z"
            fill={hairColor}
          />
          {/* Hair Top Sheen Arc */}
          <path
            d="M -32 -72 Q 0 -84 28 -70"
            fill="none"
            stroke="#3E261E"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>

        {/* ======================================================== */}
        {/* WOOL SCARF (Front Wrap)                                  */}
        {/* ======================================================== */}
        <g id="scarf-front" transform={`translate(150, ${200 + shoulderY})`}>
          <path
            d="M 20 10 Q 60 30 100 10 Q 105 45 60 50 Q 15 45 20 10 Z"
            fill={scarfColor}
            stroke="#8B1010"
            strokeWidth="3"
          />
        </g>

        {/* ======================================================== */}
        {/* RIGHT ARM & BRASS LANTERN (Dynamic Hinge Pivot)          */}
        {/* ======================================================== */}
        <g
          id="arm-lantern"
          transform={`translate(245, ${240 + shoulderY}) rotate(${armAngle})`}
          style={{transformOrigin: '0px 0px'}}
        >
          {/* Upper Arm */}
          <rect x="-10" y="0" width="24" height="75" rx="10" fill={coatColor} stroke="#0E1620" strokeWidth="2.5" />

          {/* Forearm (Elbow Hinge) */}
          <g transform="translate(2, 70) rotate(-25)">
            <rect x="-9" y="0" width="20" height="70" rx="9" fill={coatColor} stroke="#0E1620" strokeWidth="2.5" />

            {/* Hand Clasping Lantern */}
            <circle cx="1" cy="72" r="11" fill={skinColor} />

            {/* Antique Brass Lantern */}
            <g id="lantern" transform="translate(1, 85)">
              {/* Volumetric Aura Glow */}
              {lanternLit && (
                <circle cx="0" cy="45" r="140" fill="url(#lantern-aura)" />
              )}

              {/* Loop Handle */}
              <circle cx="0" cy="-8" r="12" fill="none" stroke="#D4AF37" strokeWidth="3.5" />

              {/* Pyramidal Cap */}
              <polygon points="-24,12 24,12 0,-4" fill="#B78A1E" stroke="#5A4108" strokeWidth="2" />

              {/* Glass Chamber */}
              <rect
                x="-22"
                y="12"
                width="44"
                height="65"
                fill={lanternLit ? 'rgba(255, 243, 199, 0.65)' : 'rgba(200, 220, 240, 0.25)'}
                stroke="#5A4108"
                strokeWidth="2.5"
                rx="3"
              />

              {/* Vertical Brass Cage Struts */}
              <line x1="-12" y1="12" x2="-12" y2="77" stroke="#D4AF37" strokeWidth="2" />
              <line x1="12" y1="12" x2="12" y2="77" stroke="#D4AF37" strokeWidth="2" />

              {/* Base */}
              <rect x="-26" y="77" width="52" height="12" rx="3" fill="#B78A1E" stroke="#5A4108" strokeWidth="2" />

              {/* ================= THE BURNING EMBER ================= */}
              {lanternLit && (
                <g id="ember" transform={`scale(${lanternFlameIntensity})`}>
                  {/* Outer Pulsing Halo */}
                  <circle cx="0" cy="45" r="26" fill="url(#lantern-ember-core)" />
                  {/* Piercing Core */}
                  <circle cx="0" cy="45" r="8" fill="#FFFFFF" />
                  {/* Floating ember sparks */}
                  <circle cx="-6" cy="35" r="2" fill="#FFEAA7" opacity="0.9" />
                  <circle cx="8" cy="30" r="1.5" fill="#FD9644" opacity="0.8" />
                  <circle cx="-3" cy="22" r="1" fill="#FFEAA7" opacity="0.85" />
                </g>
              )}
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
