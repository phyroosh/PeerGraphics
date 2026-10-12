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

  // Quick 3-frame fade in and out for crisp speech rhythm
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
        bottom: 240, // Positioned safely above YouTube Shorts bottom control shelf
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
          backgroundColor: 'rgba(7, 11, 20, 0.88)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 20,
          padding: '16px 28px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          maxWidth: '92%',
          textAlign: 'center',
          backdropFilter: 'blur(12px)',
        }}
      >
        <p
          style={{
            margin: 0,
            color: DESIGN_TOKENS.colors.textPrimary,
            fontSize: 42,
            fontWeight: 700,
            lineHeight: 1.35,
            fontFamily: DESIGN_TOKENS.fonts.primary,
            letterSpacing: '-0.01em',
          }}
        >
          {words.map((word, index) => {
            const cleanWord = word.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
            const isHighlighted = activeCue.highlightWords?.some((hw) =>
              hw.toLowerCase().split(' ').includes(cleanWord)
            );

            return (
              <span
                key={index}
                style={{
                  color: isHighlighted
                    ? activeCue.color || DESIGN_TOKENS.colors.accentSky
                    : DESIGN_TOKENS.colors.textPrimary,
                  textShadow: isHighlighted
                    ? `0 0 16px ${activeCue.color || DESIGN_TOKENS.colors.accentSky}80`
                    : 'none',
                  marginRight: index < words.length - 1 ? '10px' : '0',
                  display: 'inline-block',
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
