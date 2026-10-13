import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CAPTIONS} from '../data/scenes';
import {DESIGN_TOKENS} from '../design/tokens';

export const Captions: React.FC = () => {
  const frame = useCurrentFrame();

  const activeCue = CAPTIONS.find(
    (cue) => frame >= cue.from && frame < cue.to
  );

  if (!activeCue) {
    return null;
  }

  // Fast 3-frame snap for calm, serene reading rhythm
  const cueProgress = frame - activeCue.from;
  const remainingFrames = activeCue.to - frame;
  const opacity = interpolate(
    Math.min(cueProgress, remainingFrames),
    [0, 3],
    [0, 1],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );

  const words = activeCue.text.split(' ');

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 420, // Strictly >= 400px from bottom (clears YouTube Shorts bottom UI shelf)
        left: DESIGN_TOKENS.safeArea.left,
        right: DESIGN_TOKENS.safeArea.right,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 50,
        pointerEvents: 'none',
        opacity,
      }}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 8,
          border: '4px solid #111111',
          boxShadow: '8px 8px 0 #111111',
          padding: '18px 30px',
          maxWidth: 820,
          textAlign: 'center',
        }}
      >
        <p
          style={{
            margin: 0,
            color: '#111111',
            fontSize: 36,
            fontWeight: 800,
            lineHeight: 1.3,
            fontFamily: DESIGN_TOKENS.fonts.display,
            letterSpacing: '-0.02em',
          }}
        >
          {words.map((word, index) => {
            const cleanWord = word.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
            const isHighlighted = activeCue.highlightWords?.some((hw) =>
              hw.toLowerCase().split(' ').includes(cleanWord)
            );

            const highlightBg = activeCue.color || '#FF0055';
            const highlightTextColor = highlightBg === '#FFE600' || highlightBg === '#00E5FF' ? '#111111' : '#FFFFFF';

            return isHighlighted ? (
              <span
                key={index}
                style={{
                  backgroundColor: highlightBg,
                  color: highlightTextColor,
                  padding: '3px 12px',
                  border: '2px solid #111111',
                  boxShadow: '3px 3px 0 #111111',
                  fontWeight: 900,
                  display: 'inline-block',
                  marginRight: index < words.length - 1 ? '6px' : '0',
                }}
              >
                {word}
              </span>
            ) : (
              <span
                key={index}
                style={{
                  color: '#111111',
                  display: 'inline-block',
                  marginRight: index < words.length - 1 ? '6px' : '0',
                }}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};
