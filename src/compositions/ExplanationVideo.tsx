import React from 'react';
import {Sequence} from 'remotion';
import {AudioVoiceover} from '../components/AudioVoiceover';
import {Captions} from '../components/Captions';
import {DESIGN_TOKENS} from '../design/tokens';
import {SCENES} from '../data/scenes';
import {S01_Hook} from '../scenes/S01_Hook';
import {S02_TwoSystems} from '../scenes/S02_TwoSystems';
import {S03_LikingCircuit} from '../scenes/S03_LikingCircuit';
import {S04_WantingCircuit} from '../scenes/S04_WantingCircuit';
import {S05_TheDivergence} from '../scenes/S05_TheDivergence';
import {S06_TheMiseryTrap} from '../scenes/S06_TheMiseryTrap';
import {S07_Synthesis} from '../scenes/S07_Synthesis';

export const ExplanationVideo: React.FC = () => {
  return (
    <div
      style={{
        width: DESIGN_TOKENS.canvas.width,
        height: DESIGN_TOKENS.canvas.height,
        background: `linear-gradient(180deg, ${DESIGN_TOKENS.colors.bgGradientStart} 0%, ${DESIGN_TOKENS.colors.bg} 50%, ${DESIGN_TOKENS.colors.bgGradientEnd} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: DESIGN_TOKENS.fonts.primary,
      }}
    >
      {/* Subtle Background Radial Highlights */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          left: -200,
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 200,
          right: -200,
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Synchronized ElevenLabs Audio Voiceover */}
      <AudioVoiceover />

      {/* Synchronized Visual Scenes */}
      <Sequence from={SCENES[0].from} durationInFrames={SCENES[0].durationInFrames}>
        <S01_Hook />
      </Sequence>

      <Sequence from={SCENES[1].from} durationInFrames={SCENES[1].durationInFrames}>
        <S02_TwoSystems />
      </Sequence>

      <Sequence from={SCENES[2].from} durationInFrames={SCENES[2].durationInFrames}>
        <S03_LikingCircuit />
      </Sequence>

      <Sequence from={SCENES[3].from} durationInFrames={SCENES[3].durationInFrames}>
        <S04_WantingCircuit />
      </Sequence>

      <Sequence from={SCENES[4].from} durationInFrames={SCENES[4].durationInFrames}>
        <S05_TheDivergence />
      </Sequence>

      <Sequence from={SCENES[5].from} durationInFrames={SCENES[5].durationInFrames}>
        <S06_TheMiseryTrap />
      </Sequence>

      <Sequence from={SCENES[6].from} durationInFrames={SCENES[6].durationInFrames}>
        <S07_Synthesis />
      </Sequence>

      {/* Synchronized Captions Overlay */}
      <Captions />
    </div>
  );
};
