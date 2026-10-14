import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CYAN, INK, PINK, Puppet, Sticker, YELLOW} from './amccShared';

export const S05_FrictionLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const build = interpolate(frame, [0, 120], [0, 1], {extrapolateLeft:'clamp', extrapolateRight:'clamp'});
  const rewardX = interpolate(frame, [145, 260], [190, 805], {extrapolateLeft:'clamp', extrapolateRight:'clamp'});
  return <svg width="1080" height="1920" viewBox="0 0 1080 1920">
    <Sticker text="MAKE THE PATH EASIER" x={90} y={185} color={YELLOW} width={430} />
    <text x="90" y="350" fill={INK} fontSize="70" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif">REMOVE FRICTION.</text>
    <text x="90" y="428" fill={INK} fontSize="70" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif">SEE PROGRESS.</text>
    <g transform="translate(110 560)">
      <path d="M35 505H790" stroke={INK} strokeWidth="16" strokeLinecap="round" />
      {[0,1,2,3,4].map((n) => <rect key={n} x={80+n*145} y={390} width="65" height={Math.max(0, 180 - build * (n+1)*28)} rx="10" fill={n%2?PINK:YELLOW} stroke={INK} strokeWidth="6" />)}
      <path d="M35 505C230 320 635 320 790 505" fill="none" stroke={CYAN} strokeWidth="23" strokeLinecap="round" opacity={build} />
      <text x="390" y="295" textAnchor="middle" fontSize="39" fontWeight="900" fill={INK}>FRICTION REMOVED</text>
      <Puppet x={110 + build*530} y={400} tilt={0} color={CYAN} arm={-20} scale={.82} />
    </g>
    <g transform="translate(110 1180)">
      <rect width="820" height="82" rx="12" fill="#FFF" stroke={INK} strokeWidth="7" />
      <rect width={820 * build} height="82" rx="8" fill={CYAN} stroke={INK} strokeWidth="6" />
      <text x="410" y="53" textAnchor="middle" fontSize="34" fontWeight="900" fill={INK}>PROGRESS YOU CAN SEE</text>
    </g>
    <g transform={`translate(${rewardX} 1335)`}><circle r="58" fill={YELLOW} stroke={INK} strokeWidth="7" /><text y="13" textAnchor="middle" fontSize="48" fontWeight="900" fill={INK}>★</text></g>
    <g opacity={interpolate(frame,[285,335],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}>
      <rect x="112" y="1430" width="760" height="84" rx="10" fill={PINK} stroke={INK} strokeWidth="7" />
      <text x="492" y="1486" textAnchor="middle" fontSize="43" fontWeight="900" fill="#FFF">PERSISTENCE = THE NEXT RATIONAL MOVE</text>
    </g>
  </svg>;
};
