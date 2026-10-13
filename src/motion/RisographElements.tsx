import React from 'react';

/**
 * Risograph Punk Zine aesthetic elements for Theme 09.
 * High-contrast, tactile, punchy vector and styling accents.
 */

export interface StickerTagProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  rotation?: number;
  fontSize?: number;
  shadowOffset?: number;
  borderWidth?: number;
  style?: React.CSSProperties;
}

export const StickerTag: React.FC<StickerTagProps> = ({
  text,
  bgColor = '#FFE600',
  textColor = '#111111',
  rotation = -2,
  fontSize = 34,
  shadowOffset = 8,
  borderWidth = 4,
  style,
}) => {
  return (
    <div
      style={{
        display: 'inline-block',
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: "'Arial Black', 'Impact', sans-serif",
        fontSize,
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: -0.5,
        padding: '6px 20px',
        border: `${borderWidth}px solid #111111`,
        boxShadow: `${shadowOffset}px ${shadowOffset}px 0 #111111`,
        transform: `rotate(${rotation}deg)`,
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {text}
    </div>
  );
};

export interface BannerTapeProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: number;
}

export const BannerTape: React.FC<BannerTapeProps> = ({
  text,
  bgColor = '#FF0055',
  textColor = '#FFFFFF',
  fontSize = 42,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: "'Arial Black', 'Impact', sans-serif",
        fontSize,
        fontWeight: 900,
        textTransform: 'uppercase',
        padding: '10px 28px',
        border: '5px solid #111111',
        boxShadow: '10px 10px 0 #111111',
        display: 'inline-block',
        letterSpacing: -1,
      }}
    >
      {text}
    </div>
  );
};
