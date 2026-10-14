import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {BrainWithAMCC, CYAN, INK, PINK, Sticker, YELLOW} from './amccShared';

export const S02_AMCCCostBenefit: React.FC = () => {
  const frame = useCurrentFrame();
  const tilt = interpolate(frame, [20, 90, 190], [-13, 9, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const flow = (frame % 42) / 42;
  return <svg width="1080" height="1920" viewBox="0 0 1080 1920">
    <Sticker text="A COST–BENEFIT HUB" x={90} y={185} color={YELLOW} width={425} />
    <text x="90" y="340" fill={INK} fontSize="70" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif">WHAT WILL THIS</text>
    <text x="90" y="418" fill={INK} fontSize="70" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif">TAKE — AND GIVE?</text>
    <g transform={`translate(540 800) rotate(${tilt})`}>
      <line x1="-330" y1="0" x2="330" y2="0" stroke={INK} strokeWidth="26" strokeLinecap="round" />
      <line x1="-252" y1="0" x2="-252" y2="120" stroke={INK} strokeWidth="7" /><path d="M-317 120Q-252 165 -187 120Z" fill="#FFF" stroke={INK} strokeWidth="6" />
      <line x1="252" y1="0" x2="252" y2="120" stroke={INK} strokeWidth="7" /><path d="M187 120Q252 165 317 120Z" fill="#FFF" stroke={INK} strokeWidth="6" />
      <rect x="-308" y="55" width="112" height="64" rx="8" fill={PINK} stroke={INK} strokeWidth="5" /><text x="-252" y="98" textAnchor="middle" fontSize="29" fontWeight="900" fill="#FFF">EFFORT</text>
      <rect x="196" y="55" width="112" height="64" rx="8" fill={YELLOW} stroke={INK} strokeWidth="5" /><text x="252" y="98" textAnchor="middle" fontSize="29" fontWeight="900" fill={INK}>REWARD</text>
    </g>
    <polygon points="540,820 482,930 598,930" fill={INK} /><circle cx="540" cy="820" r="18" fill={CYAN} stroke={INK} strokeWidth="6" />
    <g transform="translate(265 1030)"><BrainWithAMCC scale={.68} /></g>
    {[{x:130, label:'DISCOMFORT', c:PINK}, {x:410, label:'ATTENTION', c:CYAN}, {x:690, label:'RESOURCES', c:YELLOW}].map((item, i) => <g key={item.label}>
      <rect x={item.x} y="1290" width="245" height="110" rx="14" fill={item.c} stroke={INK} strokeWidth="6" />
      <text x={item.x + 122} y="1358" textAnchor="middle" fontSize="31" fontWeight="900" fill={INK}>{item.label}</text>
      <circle cx={item.x + 122} cy={1260 - flow * 150} r="10" fill={item.c} stroke={INK} strokeWidth="4" />
      <path d={`M${item.x + 122} 1280 L540 1180`} stroke={INK} strokeWidth="5" strokeDasharray="11 10" />
    </g>)}
  </svg>;
};
