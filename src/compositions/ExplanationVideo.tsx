import React from 'react';
import {Sequence} from 'remotion';
import {AudioVoiceover} from '../components/AudioVoiceover';
import {Captions} from '../components/Captions';
import {DESIGN_TOKENS} from '../design/tokens';
import {SCENES} from '../data/scenes';
import {AnimatedBackground} from '../motion/AnimatedBackground';
import {S01_TheRoteDrillTrap} from '../scenes/S01_TheRoteDrillTrap';
import {S02_BernsteinAndBlacksmith} from '../scenes/S02_BernsteinAndBlacksmith';
import {S03_NeuralPlasticityVsAutopilot} from '../scenes/S03_NeuralPlasticityVsAutopilot';
import {S04_DynamicMastery} from '../scenes/S04_DynamicMastery';
import {S05_ActionableAntidote} from '../scenes/S05_ActionableAntidote';

export const ExplanationVideo: React.FC = () => {
  return (
    <div
      style={{
        width: DESIGN_TOKENS.canvas.width,
        height: DESIGN_TOKENS.canvas.height,
        backgroundColor: '#EAE5DB',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: DESIGN_TOKENS.fonts.display,
        color: '#111111',
      }}
    >
      {/* Living Animated Background Stack (Atmosphere, Kinetic Motifs, Particles, Grain Boil) */}
      <AnimatedBackground />

      {/* Synchronized ElevenLabs Audio Voiceover */}
      <AudioVoiceover />

      {/* Synchronized Visual Scenes (Theme 09: Punk Editorial & Risograph Collage) */}
      <Sequence from={SCENES[0].from} durationInFrames={SCENES[0].durationInFrames}>
        <S01_TheRoteDrillTrap />
      </Sequence>

      <Sequence from={SCENES[1].from} durationInFrames={SCENES[1].durationInFrames}>
        <S02_BernsteinAndBlacksmith />
      </Sequence>

      <Sequence from={SCENES[2].from} durationInFrames={SCENES[2].durationInFrames}>
        <S03_NeuralPlasticityVsAutopilot />
      </Sequence>

      <Sequence from={SCENES[3].from} durationInFrames={SCENES[3].durationInFrames}>
        <S04_DynamicMastery />
      </Sequence>

      <Sequence from={SCENES[4].from} durationInFrames={SCENES[4].durationInFrames}>
        <S05_ActionableAntidote />
      </Sequence>

      {/* Synchronized Captions Overlay */}
      <Captions />
    </div>
  );
};
