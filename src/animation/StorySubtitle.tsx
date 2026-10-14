import React from 'react';

export interface StorySubtitleProps {
  text: string;
  isDramatic?: boolean;
  bottomOffset?: number;
}

/**
 * StorySubtitle: Standard Glassmorphic Cinematic Subtitle Bar.
 * Enforces YouTube Shorts / TikTok safe zones (centered, bottom padding >= 320px).
 */
export const StorySubtitle: React.FC<StorySubtitleProps> = ({
  text,
  isDramatic = false,
  bottomOffset = 340,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: bottomOffset,
        left: 60,
        right: 60,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 20,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          padding: '14px 32px',
          backgroundColor: isDramatic ? 'rgba(18, 14, 10, 0.72)' : 'rgba(6, 10, 20, 0.65)',
          borderRadius: 32,
          backdropFilter: 'blur(8px)',
          border: isDramatic
            ? '1px solid rgba(255, 224, 102, 0.35)'
            : '1px solid rgba(255, 255, 255, 0.12)',
          color: isDramatic ? '#FFF8E1' : '#F0FBFC',
          fontSize: 32,
          fontWeight: 600,
          lineHeight: 1.4,
          textAlign: 'center',
          textShadow: isDramatic
            ? '0 3px 16px rgba(255, 179, 0, 0.7), 0 2px 8px rgba(0,0,0,0.9)'
            : '0 2px 10px rgba(0,0,0,0.85)',
          letterSpacing: '0.02em',
          transition: 'all 0.4s ease',
        }}
      >
        {text}
      </div>
    </div>
  );
};
