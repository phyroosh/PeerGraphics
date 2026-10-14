import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {BrainWithAMCC, CYAN, INK, PINK, Sticker, YELLOW, rise} from './amccShared';

export const S01_AMCCHook: React.FC = () => {
  const frame = useCurrentFrame();
  const slash = interpolate(frame, [25, 52], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return <svg width="1080" height="1920" viewBox="0 0 1080 1920">
    <text x="90" y="275" fill={INK} fontSize="94" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif">WILLPOWER</text>
    <text x="90" y="375" fill={INK} fontSize="94" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif">ISN’T A</text>
    <Sticker text="TINY BATTERY" x={95} y={402} color={PINK} width={390} rotate={-1} />
    <g transform={`translate(670 370) rotate(-10)`} opacity={1 - slash * .55}>
      <rect x="0" y="0" width="145" height="280" rx="18" fill="#FFF" stroke={INK} strokeWidth="8" />
      <rect x="42" y="-35" width="60" height="35" rx="6" fill={YELLOW} stroke={INK} strokeWidth="7" />
      <rect x="24" y="42" width="97" height="155" fill={YELLOW} stroke={INK} strokeWidth="5" />
      <text x="72" y="245" textAnchor="middle" fontSize="34" fontWeight="900" fill={INK}>100%</text>
      <line x1="-35" y1="-15" x2="185" y2="320" stroke={PINK} strokeWidth="22" strokeLinecap="round" strokeDasharray={`${slash * 410} 410`} />
    </g>
    <g transform={`translate(250 600)`}><BrainWithAMCC scale={1.15} /><Sticker text="aMCC" x={540} y={185} color={CYAN} width={170} rotate={2} /></g>
    <g opacity={interpolate(frame, [135, 160], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}>
      <path d="M162 1280C315 1195 706 1195 873 1280" fill="none" stroke={INK} strokeWidth="8" strokeLinecap="round" />
      <polygon points="873,1280 830,1256 838,1305" fill={INK} />
      <text x="540" y="1420" textAnchor="middle" fill={INK} fontSize="54" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif">EFFORT WORTH IT?</text>
    </g>
  </svg>;
};
