import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {LeoPuppet} from '../characters/LeoPuppet';
import {WhisperingWoodsEnv} from '../environments/WhisperingWoodsEnv';
import {AtmosphericEffects} from '../fx/AtmosphericEffects';
import {
  calculateBreathing,
  calculateMultiBlink,
  calculateWindSway,
} from '../animation/kinematics';
import {StorySubtitle} from '../animation/StorySubtitle';

/**
 * AnimatedStory: Master 2D Animated Storytelling Composition for PeerGraphics.
 * 
 * Demonstrates the 3-phase production pipeline:
 * - Phase 1: Directorial Blocking & Shot Continuity
 * - Phase 2: Hierarchical Vector Puppets & Multi-Plane Parallax Environments
 * - Phase 3: Remotion Staging, Procedural Secondary Physics & Cinematic Lighting
 */
export const AnimatedStory: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const isShot1 = frame < 180;
  const shotLocalFrame = isShot1 ? frame : frame - 180;
  const windTime = frame * 0.05;

  // =============================================================
  // SHOT 1: WIDE ESTABLISHING & ATMOSPHERIC SOLITUDE (Frames 0 - 180)
  // =============================================================
  if (isShot1) {
    const cameraZoom = interpolate(shotLocalFrame, [0, 180], [1.0, 1.08], {
      extrapolateRight: 'clamp',
    });
    const cameraX = interpolate(shotLocalFrame, [0, 180], [0, -60], {
      extrapolateRight: 'clamp',
    });

    // Procedural life: Breathing and natural blinks
    const breathProgress = calculateBreathing(shotLocalFrame, 0.09);
    const blinkProgress = calculateMultiBlink(shotLocalFrame, [50, 130], fps);

    // Gaze tracking
    const gazeX = interpolate(shotLocalFrame, [0, 70, 140], [0.8, 0.4, 0.1], {
      extrapolateRight: 'clamp',
    });
    const gazeY = interpolate(shotLocalFrame, [0, 70, 140], [0.1, -0.2, 0.0], {
      extrapolateRight: 'clamp',
    });

    const headTilt = Math.sin(shotLocalFrame * 0.04) * 3 - 2;
    const windSway = calculateWindSway(shotLocalFrame, 0.12, 0.7);

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
        <WhisperingWoodsEnv
          cameraX={cameraX}
          cameraZoom={cameraZoom}
          windTime={windTime}
          warmLightIntensity={0}
        />

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

        <AtmosphericEffects
          frame={frame}
          fireflyCount={22}
          lanternLit={false}
          emberFlareIntensity={0}
        />

        <StorySubtitle text="In the heart of the whispering woods, Leo searched for the lost ember." />
      </div>
    );
  }

  // =============================================================
  // SHOT 2: MEDIUM CLOSE-UP & MAGICAL AWAKENING (Frames 180 - 360)
  // =============================================================
  const shot2LocalFrame = shotLocalFrame;

  // Arm raise spring
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

  // Ignition flare spring
  const flareSpring = spring({
    frame: ignitionLocal,
    fps,
    config: {damping: 12, stiffness: 140},
  });
  const emberFlareIntensity = isIgnited
    ? interpolate(flareSpring, [0, 1], [0, 1])
    : 0;

  // Impact micro-shake
  const shakeOffset = isIgnited
    ? Math.sin(ignitionLocal * 1.5) * Math.max(0, 6 - ignitionLocal * 0.3)
    : 0;

  // Character recoil in awe
  const recoilSpring = spring({
    frame: ignitionLocal,
    fps,
    config: {damping: 10, stiffness: 120},
  });
  const headTiltShot2 = isIgnited
    ? interpolate(recoilSpring, [0, 1], [-4, 11])
    : interpolate(shot2LocalFrame, [0, 45], [0, -5], {extrapolateRight: 'clamp'});

  const gazeXShot2 = isIgnited ? 0.35 : 0.45;
  const gazeYShot2 = isIgnited ? 0.2 : 0.65;
  const eyebrowState = isIgnited ? 'arched_wonder' : 'focused';
  const mouthState = isIgnited ? 'wonder' : 'rest';
  const warmLightWash = isIgnited ? Math.min(1, emberFlareIntensity * 1.1) : 0;

  const breathProgress2 = calculateBreathing(shot2LocalFrame, 0.08);
  const windSway2 = calculateWindSway(shot2LocalFrame, 0.14, 0.5);

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
      <WhisperingWoodsEnv
        cameraX={-50}
        cameraZoom={1.35}
        windTime={windTime}
        warmLightIntensity={warmLightWash}
      />

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

      <AtmosphericEffects
        frame={frame}
        fireflyCount={16}
        lanternLit={isIgnited}
        emberFlareIntensity={emberFlareIntensity}
        lanternPos={{x: 775, y: 1120}}
      />

      <StorySubtitle
        text="When the lantern flared, he realized he wasn't alone."
        isDramatic={isIgnited}
      />
    </div>
  );
};
