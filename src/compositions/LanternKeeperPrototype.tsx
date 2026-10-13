import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {LeoPuppet} from '../characters/LeoPuppet';
import {WhisperingWoodsEnv} from '../environments/WhisperingWoodsEnv';
import {AtmosphericEffects} from '../fx/AtmosphericEffects';

/**
 * LanternKeeperPrototype: Minimum Meaningful Prototype (MMP) for 2D Storytelling.
 * 
 * 360 frames (12.0s @ 30 fps) across two cinematic shots:
 * - Shot 1 (Frames 0 - 180): Wide Establishing / Atmospheric Solitude
 * - Shot 2 (Frames 180 - 360): Medium Reaction / Magical Discovery
 */
export const LanternKeeperPrototype: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const isShot1 = frame < 180;
  const shotLocalFrame = isShot1 ? frame : frame - 180;

  // Global time-based wind frequency
  const windTime = frame * 0.05;

  // =============================================================
  // SHOT 1: WIDE ESTABLISHING & MOOD (Frames 0 - 180)
  // =============================================================
  if (isShot1) {
    // Camera Push-in zoom & subtle parallax tracking
    const cameraZoom = interpolate(shotLocalFrame, [0, 180], [1.0, 1.08], {
      extrapolateRight: 'clamp',
    });
    const cameraX = interpolate(shotLocalFrame, [0, 180], [0, -60], {
      extrapolateRight: 'clamp',
    });

    // Procedural Breathing (0 to 1 sine cycle)
    const breathProgress = (Math.sin(shotLocalFrame * 0.09) + 1) / 2;

    // Gaze tracking: starts scanning woods to the right, settles toward center
    const gazeX = interpolate(shotLocalFrame, [0, 70, 140], [0.8, 0.4, 0.1], {
      extrapolateRight: 'clamp',
    });
    const gazeY = interpolate(shotLocalFrame, [0, 70, 140], [0.1, -0.2, 0.0], {
      extrapolateRight: 'clamp',
    });

    // Natural eye blinks at frame 50 and frame 130
    const blink1 = spring({
      frame: shotLocalFrame - 50,
      fps,
      config: {damping: 14, stiffness: 220},
    });
    const blink1Progress = Math.max(0, 1 - Math.abs(blink1 - 0.5) * 2);

    const blink2 = spring({
      frame: shotLocalFrame - 130,
      fps,
      config: {damping: 14, stiffness: 220},
    });
    const blink2Progress = Math.max(0, 1 - Math.abs(blink2 - 0.5) * 2);

    const blinkProgress = Math.max(blink1Progress, blink2Progress);

    // Head tilt: subtle curious inquiry
    const headTilt = Math.sin(shotLocalFrame * 0.04) * 3 - 2;

    // Wind sway on scarf
    const windSway = Math.sin(shotLocalFrame * 0.12) * 0.7;

    return (
      <div
        style={{
          width: 1080,
          height: 1920,
          position: 'relative',
          backgroundColor: '#060A14',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Multi-Plane Depth Environment */}
        <WhisperingWoodsEnv
          cameraX={cameraX}
          cameraZoom={cameraZoom}
          windTime={windTime}
          warmLightIntensity={0}
        />

        {/* Articulated Character: Leo in Wide Staging */}
        <LeoPuppet
          x={530 + cameraX * 0.7}
          y={1360}
          scale={0.95 * cameraZoom}
          facing="right"
          breathProgress={breathProgress}
          headTilt={headTilt}
          gazeX={gazeX}
          gazeY={gazeY}
          blinkProgress={blinkProgress}
          mouthState="rest"
          eyebrowState="neutral"
          lanternRaisedProgress={0}
          lanternLit={false}
          windSway={windSway}
          warmLightWash={0}
        />

        {/* Ambient Environmental Particles */}
        <AtmosphericEffects
          frame={frame}
          fireflyCount={22}
          lanternLit={false}
          emberFlareIntensity={0}
        />

        {/* Subtitle / Story Bar Overlay (Preserving Safe Zones) */}
        <div
          style={{
            position: 'absolute',
            bottom: 340,
            left: 60,
            right: 60,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              padding: '14px 32px',
              backgroundColor: 'rgba(6, 10, 20, 0.65)',
              borderRadius: 32,
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#F0FBFC',
              fontSize: 32,
              fontWeight: 600,
              lineHeight: 1.4,
              textAlign: 'center',
              textShadow: '0 2px 10px rgba(0,0,0,0.85)',
              letterSpacing: '0.02em',
            }}
          >
            In the heart of the whispering woods, Leo searched for the lost ember.
          </div>
        </div>
      </div>
    );
  }

  // =============================================================
  // SHOT 2: MEDIUM REACTION & MAGICAL IGNITION (Frames 180 - 360)
  // =============================================================
  const shot2LocalFrame = shotLocalFrame;

  // Raising lantern (frames 0 to 45 of shot 2)
  const raiseSpring = spring({
    frame: shot2LocalFrame - 5,
    fps,
    config: {damping: 16, stiffness: 90},
  });
  const lanternRaisedProgress = interpolate(raiseSpring, [0, 1], [0.1, 0.95], {
    extrapolateRight: 'clamp',
  });

  // Ember ignition trigger at frame 50 of shot 2 (frame 230 overall)
  const ignitionLocal = shot2LocalFrame - 50;
  const isIgnited = ignitionLocal >= 0;

  // Ignition flare spring (burst of light)
  const flareSpring = spring({
    frame: ignitionLocal,
    fps,
    config: {damping: 12, stiffness: 140},
  });
  const emberFlareIntensity = isIgnited
    ? interpolate(flareSpring, [0, 1], [0, 1])
    : 0;

  // Camera micro-shake on magical flare impact
  const shakeOffset = isIgnited
    ? Math.sin(ignitionLocal * 1.5) * Math.max(0, 6 - ignitionLocal * 0.3)
    : 0;

  // Character acting: Leo's head recoils in awe at ignition
  const recoilSpring = spring({
    frame: ignitionLocal,
    fps,
    config: {damping: 10, stiffness: 120},
  });
  const headTiltShot2 = isIgnited
    ? interpolate(recoilSpring, [0, 1], [-4, 11])
    : interpolate(shot2LocalFrame, [0, 45], [0, -5], {extrapolateRight: 'clamp'});

  // Facial reaction: Eyes wide in wonder, gaze locked onto lantern
  const gazeXShot2 = isIgnited ? 0.35 : 0.45;
  const gazeYShot2 = isIgnited ? 0.2 : 0.65;
  const eyebrowState = isIgnited ? 'arched_wonder' : 'focused';
  const mouthState = isIgnited ? 'wonder' : 'rest';

  // Warm light wash on character
  const warmLightWash = isIgnited ? Math.min(1, emberFlareIntensity * 1.1) : 0;

  // Procedural breathing in shot 2
  const breathProgress2 = (Math.sin(shot2LocalFrame * 0.08) + 1) / 2;
  const windSway2 = Math.sin(shot2LocalFrame * 0.14) * 0.5;

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        position: 'relative',
        backgroundColor: '#060A14',
        overflow: 'hidden',
        fontFamily: 'sans-serif',
        transform: `translate(${shakeOffset}px, ${shakeOffset * 0.5}px)`,
      }}
    >
      {/* Multi-Plane Depth Environment in Medium Framing */}
      <WhisperingWoodsEnv
        cameraX={-50}
        cameraZoom={1.35}
        windTime={windTime}
        warmLightIntensity={warmLightWash}
      />

      {/* Articulated Character: Leo in Medium Close-Up Framing (Waist-Up) */}
      <LeoPuppet
        x={440}
        y={2040}
        scale={2.35}
        facing="right"
        breathProgress={breathProgress2}
        headTilt={headTiltShot2}
        gazeX={gazeXShot2}
        gazeY={gazeYShot2}
        blinkProgress={0}
        mouthState={mouthState}
        eyebrowState={eyebrowState}
        lanternRaisedProgress={lanternRaisedProgress}
        lanternLit={isIgnited}
        lanternFlameIntensity={emberFlareIntensity}
        windSway={windSway2}
        warmLightWash={warmLightWash}
      />

      {/* Atmospheric Particles & Volumetric Light Rays */}
      <AtmosphericEffects
        frame={frame}
        fireflyCount={16}
        lanternLit={isIgnited}
        emberFlareIntensity={emberFlareIntensity}
        lanternPos={{x: 775, y: 1120}}
      />

      {/* Subtitle / Story Bar Overlay (Preserving Safe Zones) */}
      <div
        style={{
          position: 'absolute',
          bottom: 340,
          left: 60,
          right: 60,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            padding: '14px 32px',
            backgroundColor: isIgnited ? 'rgba(18, 14, 10, 0.72)' : 'rgba(6, 10, 20, 0.65)',
            borderRadius: 32,
            backdropFilter: 'blur(8px)',
            border: isIgnited
              ? '1px solid rgba(255, 224, 102, 0.35)'
              : '1px solid rgba(255, 255, 255, 0.12)',
            color: isIgnited ? '#FFF8E1' : '#F0FBFC',
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 1.4,
            textAlign: 'center',
            textShadow: isIgnited
              ? '0 3px 16px rgba(255, 179, 0, 0.7), 0 2px 8px rgba(0,0,0,0.9)'
              : '0 2px 10px rgba(0,0,0,0.85)',
            letterSpacing: '0.02em',
            transition: 'all 0.4s ease',
          }}
        >
          When the lantern flared, he realized he wasn't alone.
        </div>
      </div>
    </div>
  );
};
