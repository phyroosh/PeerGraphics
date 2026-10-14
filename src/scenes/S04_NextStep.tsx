import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {CYAN, INK, PINK, Puppet, Sticker, YELLOW} from './amccShared';

export const S04_NextStep: React.FC = () => {
  const frame = useCurrentFrame(); const {fps} = useVideoConfig();
  const open = spring({frame: frame - 115, fps, config:{damping:16,stiffness:130}});
  const stepY = interpolate(open,[0,1],[180,0]);
  return <svg width="1080" height="1920" viewBox="0 0 1080 1920">
    <Sticker text="THE PRACTICAL MOVE" x={90} y={185} color={CYAN} width={410} />
    <text x="90" y="355" fill={INK} fontSize="77" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif">MAKE THE NEXT</text>
    <text x="90" y="438" fill={INK} fontSize="77" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif">ACTION SMALLER.</text>
    <g transform="translate(150 560)">
      <path d="M20 555L730 555L730 455L575 455L575 355L410 355L410 255L235 255L235 155L20 155Z" fill="#FFF" stroke={INK} strokeWidth="8" />
      <rect x="20" y="155" width="215" height="100" fill={PINK} stroke={INK} strokeWidth="5" /><text x="128" y="218" textAnchor="middle" fill="#FFF" fontSize="31" fontWeight="900">OPEN DOC</text>
      <rect x="235" y="255" width="175" height="100" fill={YELLOW} stroke={INK} strokeWidth="5" /><text x="322" y="318" textAnchor="middle" fill={INK} fontSize="30" fontWeight="900">1 PROBLEM</text>
      <rect x="410" y="355" width="165" height="100" fill={CYAN} stroke={INK} strokeWidth="5" /><text x="492" y="418" textAnchor="middle" fill={INK} fontSize="30" fontWeight="900">5 MIN</text>
      <rect x="575" y="455" width="155" height="100" fill="#FFF" stroke={INK} strokeWidth="5" /><text x="652" y="518" textAnchor="middle" fill={INK} fontSize="30" fontWeight="900">START</text>
      <g transform={`translate(${140 + stepY} ${120 - stepY * .2})`}><Puppet x={0} y={0} tilt={-5} color={PINK} arm={-40} scale={.8} /></g>
    </g>
    <g opacity={open} transform={`translate(0 ${interpolate(open,[0,1],[70,0])})`}>
      <rect x="124" y="1250" width="720" height="155" rx="18" fill="#FFF" stroke={INK} strokeWidth="7" />
      <text x="484" y="1310" textAnchor="middle" fill={INK} fontSize="43" fontWeight="900">OBVIOUS NEXT STEP</text>
      <path d="M225 1360H745" stroke={INK} strokeWidth="9" strokeLinecap="round" /><polygon points="745,1360 705,1335 705,1385" fill={INK} />
    </g>
  </svg>;
};
