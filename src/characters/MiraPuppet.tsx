import React from 'react';

export type MiraPose = 'idle' | 'brace' | 'reach' | 'step';
export interface MiraPuppetProps { x: number; y: number; scale?: number; pose?: MiraPose; expression?: 'wary' | 'think' | 'determined' | 'relieved'; breath?: number; blink?: number; gazeX?: number; headTilt?: number; scarfSway?: number; warmth?: number; }

/** A compact, reusable articulated SVG puppet. Every limb group pivots at its joint. */
export const MiraPuppet: React.FC<MiraPuppetProps> = ({x, y, scale = 1, pose = 'idle', expression = 'think', breath = 0, blink = 0, gazeX = 0, headTilt = 0, scarfSway = 0, warmth = 0}) => {
  const brace = pose === 'brace'; const reach = pose === 'reach'; const step = pose === 'step';
  const shoulder = brace ? -28 : reach ? -62 : 12; const elbow = brace ? 50 : reach ? 18 : 8;
  const chest = breath * 5; const pupil = gazeX * 4;
  const mouth = expression === 'relieved' ? 'M-10 34 Q0 43 10 34' : expression === 'wary' ? 'M-9 38 L9 38' : 'M-7 36 Q0 39 7 36';
  return <svg width="430" height="700" viewBox="0 0 430 700" style={{position:'absolute', left:x, top:y, overflow:'visible', transform:`translate(-50%,-100%) scale(${scale})`}}>
    <ellipse cx="215" cy="640" rx="105" ry="19" fill="rgba(9,20,27,.32)"/>
    <g transform="translate(215 470)">
      <g transform={`rotate(${step ? -12 : 0} 0 10)`} style={{transformOrigin:'0px 10px'}}><rect x="-61" y="0" width="35" height="126" rx="17" fill="#334C43"/><path d="M-70 113h58l8 25h-72z" fill="#293437"/></g>
      <g transform={`rotate(${step ? 14 : 0} 0 10)`} style={{transformOrigin:'0px 10px'}}><rect x="25" y="0" width="35" height="126" rx="17" fill="#3E5C4F"/><path d="M17 113h58l8 25H11z" fill="#293437"/></g>
      <path d="M-90 -155 Q-88 -20 -75 22 H78 Q91 -70 86 -155Z" fill="#263C59" stroke="#16283B" strokeWidth="5"/>
      <g transform={`translate(-72 -137) rotate(${shoulder})`} style={{transformOrigin:'0px 0px'}}><rect x="-15" y="0" width="30" height="103" rx="14" fill="#B8543D"/><g transform={`translate(0 96) rotate(${elbow})`} style={{transformOrigin:'0px 0px'}}><rect x="-13" y="0" width="26" height="86" rx="13" fill="#E2B49B"/><circle cx="0" cy="91" r="16" fill="#B96F52"/></g></g>
      <g transform={`translate(72 -137) rotate(${reach ? -75 : brace ? 32 : -10})`} style={{transformOrigin:'0px 0px'}}><rect x="-15" y="0" width="30" height="103" rx="14" fill="#B8543D"/><g transform={`translate(0 96) rotate(${reach ? 18 : 20})`} style={{transformOrigin:'0px 0px'}}><rect x="-13" y="0" width="26" height="86" rx="13" fill="#E2B49B"/><circle cx="0" cy="91" r="16" fill="#B96F52"/>{reach && <circle cx="14" cy="100" r="25" fill="#E7B65D" stroke="#6D4A21" strokeWidth="5"/>}</g></g>
      <g transform={`translate(0 ${-175-chest})`}><path d={`M-72 11 Q-137 ${64+scarfSway} -116 126 Q-74 ${85+scarfSway} -38 31Z`} fill="#E7B65D"/><ellipse cy="-50" rx="91" ry="101" fill="#B8543D" stroke="#7F392C" strokeWidth="5"/><g transform={`rotate(${headTilt})`} style={{transformOrigin:'0px 8px'}}><ellipse cy="-38" rx="61" ry="66" fill="#B96F52"/><path d="M-55 -58 Q0 -119 55 -58v-36Q0-145-55-94z" fill="#38251F"/><g transform={`translate(${-23+pupil} -48)`}><ellipse rx="15" ry="16" fill="#FFF9E9"/><circle r="7" fill="#26313A"/><rect x="-17" y="-18" width="34" height={blink*36} fill="#B96F52"/></g><g transform={`translate(${23+pupil} -48)`}><ellipse rx="15" ry="16" fill="#FFF9E9"/><circle r="7" fill="#26313A"/><rect x="-17" y="-18" width="34" height={blink*36} fill="#B96F52"/></g><path d={mouth} fill="none" stroke="#5A2B2A" strokeWidth="4" strokeLinecap="round"/></g></g>
      <circle cx="0" cy="-73" r="14" fill={warmth > .4 ? '#FFF0A7' : '#E7B65D'} opacity={.7 + warmth*.3}/>
    </g>
  </svg>;
};
