import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CYAN, INK, PINK, Puppet, Sticker, YELLOW} from './amccShared';

export const S03_AMCCNetwork: React.FC = () => {
  const frame = useCurrentFrame();
  const cursor = interpolate(frame, [34, 130, 220], [210, 540, 850], {extrapolateLeft:'clamp', extrapolateRight:'clamp'});
  return <svg width="1080" height="1920" viewBox="0 0 1080 1920">
    <Sticker text="NOT A SWITCH" x={90} y={190} color={PINK} width={325} />
    <text x="90" y="355" fill={INK} fontSize="82" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif">A NETWORK</text>
    <text x="90" y="440" fill={INK} fontSize="82" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif">MAKES A MOVE</text>
    <g transform="translate(540 725)">
      <circle r="126" fill={CYAN} stroke={INK} strokeWidth="8" /><text y="12" textAnchor="middle" fontSize="42" fontWeight="900" fill={INK}>aMCC</text>
      <path d="M-100 35L-330 230M0 125L0 350M100 35L330 230" stroke={INK} strokeWidth="10" strokeLinecap="round" />
      <circle cx="-355" cy="255" r="96" fill={PINK} stroke={INK} strokeWidth="7" /><text x="-355" y="263" textAnchor="middle" fontSize="30" fontWeight="900" fill="#FFF">PERSIST</text>
      <circle cx="0" cy="380" r="96" fill={YELLOW} stroke={INK} strokeWidth="7" /><text x="0" y="372" textAnchor="middle" fontSize="28" fontWeight="900" fill={INK}>CHANGE</text><text x="0" y="404" textAnchor="middle" fontSize="28" fontWeight="900" fill={INK}>STRATEGY</text>
      <circle cx="355" cy="255" r="96" fill="#FFF" stroke={INK} strokeWidth="7" /><text x="355" y="263" textAnchor="middle" fontSize="31" fontWeight="900" fill={INK}>QUIT</text>
      <circle cx={cursor - 540} cy={cursor < 600 ? 725 : cursor < 780 ? 1000 : 980} r="17" fill="#FFF" stroke={INK} strokeWidth="5" />
    </g>
    <Puppet x={180} y={1270} tilt={-8} color={PINK} arm={-35} scale={1.1} />
    <path d="M290 1290Q540 1210 795 1290" fill="none" stroke={INK} strokeWidth="8" strokeDasharray="18 12" />
    <text x="540" y="1455" textAnchor="middle" fontSize="46" fontWeight="900" fill={INK}>THE aMCC COORDINATES —</text>
    <text x="540" y="1510" textAnchor="middle" fontSize="46" fontWeight="900" fill={INK}>IT DOESN’T COMMAND ALONE.</text>
  </svg>;
};
