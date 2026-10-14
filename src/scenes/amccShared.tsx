import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const INK = '#111111';
export const PINK = '#FF0055';
export const YELLOW = '#FFE600';
export const CYAN = '#00E5FF';

export const Sticker: React.FC<{text: string; x: number; y: number; color?: string; rotate?: number; width?: number}> = ({text, x, y, color = YELLOW, rotate = -2, width = 300}) => (
  <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
    <rect x="8" y="8" width={width} height="64" rx="8" fill={INK} />
    <rect width={width} height="64" rx="8" fill={color} stroke={INK} strokeWidth="5" />
    <text x={width / 2} y="43" fontSize="30" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif" textAnchor="middle" fill={INK}>{text}</text>
  </g>
);

export const BrainWithAMCC: React.FC<{scale?: number; active?: boolean}> = ({scale = 1, active = true}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entrance = spring({frame, fps, config: {damping: 15, stiffness: 150, mass: 0.7}});
  const pulse = active ? 1 + Math.sin(frame * 0.24) * 0.06 : 1;
  return <g transform={`scale(${scale * entrance})`} opacity={entrance}>
    <path d="M120 330C48 325 35 240 80 177C123 116 215 87 313 113C385 95 486 130 522 198C554 257 519 336 448 344C407 348 383 365 356 403C328 441 268 440 244 396C224 360 181 337 120 330Z" fill={INK} transform="translate(12 12)" />
    <path d="M120 330C48 325 35 240 80 177C123 116 215 87 313 113C385 95 486 130 522 198C554 257 519 336 448 344C407 348 383 365 356 403C328 441 268 440 244 396C224 360 181 337 120 330Z" fill="#FFFFFF" stroke={INK} strokeWidth="7" />
    <g fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round">
      <path d="M111 209C165 176 198 227 245 198C290 169 334 216 391 190C431 172 464 197 486 224" />
      <path d="M88 273C151 242 182 295 239 270C290 248 330 299 387 270" />
      <path d="M210 143C246 171 286 145 319 163C350 178 387 151 427 169" />
      <path d="M278 335C323 301 374 326 414 309" />
    </g>
    <g transform={`translate(302 254) scale(${pulse}) translate(-302 -254)`}>
      <path d="M235 294C266 231 342 219 383 273C336 256 283 266 235 294Z" fill={PINK} stroke={INK} strokeWidth="6" />
      <circle cx="308" cy="264" r="37" fill="none" stroke={CYAN} strokeWidth="5" strokeDasharray="10 8" />
      <circle cx="308" cy="264" r="8" fill={YELLOW} stroke={INK} strokeWidth="3" />
    </g>
  </g>;
};

export const Puppet: React.FC<{x: number; y: number; tilt?: number; color?: string; arm?: number; scale?: number}> = ({x, y, tilt = 0, color = CYAN, arm = 0, scale = 1}) => (
  <g transform={`translate(${x} ${y}) rotate(${tilt}) scale(${scale})`}>
    <ellipse cx="0" cy="132" rx="52" ry="12" fill={INK} opacity=".18" />
    <line x1="-20" y1="81" x2="-24" y2="128" stroke={INK} strokeWidth="8" strokeLinecap="round" />
    <line x1="20" y1="81" x2="25" y2="128" stroke={INK} strokeWidth="8" strokeLinecap="round" />
    <rect x="-38" y="8" width="76" height="82" rx="18" fill={color} stroke={INK} strokeWidth="6" />
    <g transform={`rotate(${arm} 28 34)`}><line x1="28" y1="38" x2="75" y2="5" stroke={INK} strokeWidth="8" strokeLinecap="round" /></g>
    <line x1="-28" y1="42" x2="-68" y2="62" stroke={INK} strokeWidth="8" strokeLinecap="round" />
    <circle cx="0" cy="-32" r="39" fill="#FFFFFF" stroke={INK} strokeWidth="6" />
    <circle cx="12" cy="-40" r="9" fill={INK} /><circle cx="15" cy="-43" r="3" fill="#FFFFFF" />
    <path d="M-10 -15Q4 -7 18 -16" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
  </g>
);

export const rise = (frame: number, from = 0, distance = 55) => interpolate(frame, [from, from + 16], [distance, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
