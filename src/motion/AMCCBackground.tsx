import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {AMCC_SCENES} from '../data/amcc';

const colors = ['#EAE5DB', '#F0E3D5', '#E3EAEB', '#F2E9D8', '#E9E6D8'];

/** A deterministic, scene-reactive risograph atmosphere. */
export const AMCCBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneIndex = Math.max(0, AMCC_SCENES.findIndex((scene) => frame >= scene.from && frame < scene.from + scene.durationInFrames));
  const boil = Math.floor(frame / 2.5) % 4;
  const pulse = (Math.sin(frame * 0.08) + 1) / 2;
  return <div style={{position:'absolute', inset:0, overflow:'hidden', backgroundColor: colors[sceneIndex], zIndex:0}}>
    <svg width="1080" height="1920" style={{position:'absolute', inset:0, opacity:.28, transform:`translate(${boil - 2}px, ${(boil%2)*2}px)`}}>
      <defs><pattern id="amcc-dots" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="2" fill="#9D958A" /></pattern></defs>
      <rect width="1080" height="1920" fill="url(#amcc-dots)" />
      {sceneIndex === 0 && <g stroke="#00E5FF" fill="none" strokeWidth="5" opacity=".55"><circle cx="540" cy="880" r={300+pulse*35}/><circle cx="540" cy="880" r={440+pulse*35}/></g>}
      {sceneIndex === 1 && Array.from({length:7}).map((_,i) => <line key={i} x1={-100+i*200} y1="1520" x2={180+i*200} y2="660" stroke={i%2?'#FF0055':'#FFE600'} strokeWidth="12" opacity=".35" />)}
      {sceneIndex === 2 && Array.from({length:6}).map((_,i) => <path key={i} d={`M0 ${520+i*150} Q540 ${420+i*150} 1080 ${520+i*150}`} stroke="#00E5FF" strokeWidth="5" strokeDasharray="18 16" fill="none" opacity=".45" />)}
      {sceneIndex === 3 && <g stroke="#FF0055" strokeWidth="8" opacity=".25">{Array.from({length:10}).map((_,i) => <line key={i} x1="540" y1="980" x2={540 + Math.cos(i*Math.PI/5)*1300} y2={980 + Math.sin(i*Math.PI/5)*1300} />)}</g>}
      {sceneIndex === 4 && <g stroke="#FFE600" strokeWidth="20" opacity=".3">{Array.from({length:12}).map((_,i) => <line key={i} x1="540" y1="1420" x2={540 + Math.cos((i+frame*.002)*Math.PI/6)*1300} y2={1420 + Math.sin((i+frame*.002)*Math.PI/6)*1300} />)}</g>}
    </svg>
    {Array.from({length:11}).map((_,i) => <div key={i} style={{position:'absolute', width: i%3===0?10:6, height:i%3===0?10:6, borderRadius:'50%', backgroundColor:i%2?'#FF0055':'#00E5FF', left:80+(i*137)%880, top:(220+i*179-frame*(.4+i%3*.15))%1520, opacity:.28}} />)}
    <div style={{position:'absolute', inset:0, boxShadow:'inset 0 0 180px rgba(17,17,17,.13)'}} />
  </div>;
};
