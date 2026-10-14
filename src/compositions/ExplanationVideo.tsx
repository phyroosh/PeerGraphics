import React from 'react';
import {Sequence} from 'remotion';
import {AudioVoiceover} from '../components/AudioVoiceover';
import {Captions} from '../components/Captions';
import {DESIGN_TOKENS} from '../design/tokens';
import {AMCC_SCENES} from '../data/amcc';
import {AMCCBackground} from '../motion/AMCCBackground';
import {S01_AMCCHook} from '../scenes/S01_AMCCHook';
import {S02_AMCCCostBenefit} from '../scenes/S02_AMCCCostBenefit';
import {S03_AMCCNetwork} from '../scenes/S03_AMCCNetwork';
import {S04_NextStep} from '../scenes/S04_NextStep';
import {S05_FrictionLoop} from '../scenes/S05_FrictionLoop';

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
      <AMCCBackground />

      {/* Synchronized ElevenLabs Audio Voiceover */}
      <AudioVoiceover />

      {/* Synchronized Visual Scenes (Theme 09: Punk Editorial & Risograph Collage) */}
      <Sequence from={AMCC_SCENES[0].from} durationInFrames={AMCC_SCENES[0].durationInFrames}>
        <S01_AMCCHook />
      </Sequence>

      <Sequence from={AMCC_SCENES[1].from} durationInFrames={AMCC_SCENES[1].durationInFrames}>
        <S02_AMCCCostBenefit />
      </Sequence>

      <Sequence from={AMCC_SCENES[2].from} durationInFrames={AMCC_SCENES[2].durationInFrames}>
        <S03_AMCCNetwork />
      </Sequence>

      <Sequence from={AMCC_SCENES[3].from} durationInFrames={AMCC_SCENES[3].durationInFrames}>
        <S04_NextStep />
      </Sequence>

      <Sequence from={AMCC_SCENES[4].from} durationInFrames={AMCC_SCENES[4].durationInFrames}>
        <S05_FrictionLoop />
      </Sequence>

      {/* Synchronized Captions Overlay */}
      <Captions />
    </div>
  );
};
