import React from 'react';
import {Sequence} from 'remotion';
import {AudioVoiceover} from '../components/AudioVoiceover';
import {Captions} from '../components/Captions';
import {DESIGN_TOKENS} from '../design/tokens';
import {SCENES} from '../data/scenes';
import {AnimatedBackground} from '../motion/AnimatedBackground';
import {S01_TheChemistryTrap} from '../scenes/S01_TheChemistryTrap';
import {S02_BattleForControl} from '../scenes/S02_BattleForControl';
import {S03_WalkingOnEggshells} from '../scenes/S03_WalkingOnEggshells';
import {S04_EmotionalSafety} from '../scenes/S04_EmotionalSafety';
import {S05_UsVsTheProblem} from '../scenes/S05_UsVsTheProblem';
import {S06_TheBoundaryTest} from '../scenes/S06_TheBoundaryTest';
import {S07_AntidoteSynthesis} from '../scenes/S07_AntidoteSynthesis';

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
        <S01_TheChemistryTrap />
      </Sequence>

      <Sequence from={SCENES[1].from} durationInFrames={SCENES[1].durationInFrames}>
        <S02_BattleForControl />
      </Sequence>

      <Sequence from={SCENES[2].from} durationInFrames={SCENES[2].durationInFrames}>
        <S03_WalkingOnEggshells />
      </Sequence>

      <Sequence from={SCENES[3].from} durationInFrames={SCENES[3].durationInFrames}>
        <S04_EmotionalSafety />
      </Sequence>

      <Sequence from={SCENES[4].from} durationInFrames={SCENES[4].durationInFrames}>
        <S05_UsVsTheProblem />
      </Sequence>

      <Sequence from={SCENES[5].from} durationInFrames={SCENES[5].durationInFrames}>
        <S06_TheBoundaryTest />
      </Sequence>

      <Sequence from={SCENES[6].from} durationInFrames={SCENES[6].durationInFrames}>
        <S07_AntidoteSynthesis />
      </Sequence>

      {/* Synchronized Captions Overlay */}
      <Captions />
    </div>
  );
};
