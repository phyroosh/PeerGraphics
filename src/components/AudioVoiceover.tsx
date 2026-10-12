import React from 'react';
import {Audio, staticFile} from 'remotion';

export const AudioVoiceover: React.FC = () => {
  return (
    <Audio
      src={staticFile('audio/voiceover.mp3')}
      startFrom={0}
      volume={1}
    />
  );
};
