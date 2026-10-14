import React from 'react';
export const ChoiceGardenEnv: React.FC<{cameraX:number; warmth:number; storm:number}> = ({cameraX, warmth, storm}) => {
 const far=cameraX*.12, mid=cameraX*.45, ground=cameraX, near=cameraX*1.4;
 return <div style={{position:'absolute',inset:0,overflow:'hidden',background:`linear-gradient(${warmth>.5?'#F6C878':'#17324A'}, ${warmth>.5?'#D87B55':'#0E2130'})`}}>
  <div style={{position:'absolute',inset:0,transform:`translateX(${far}px)`}}><div style={{position:'absolute',left:110,top:210,width:190,height:190,borderRadius:'50%',background:`rgba(255,231,160,${.15+.55*warmth})`,boxShadow:`0 0 ${160+260*warmth}px rgba(255,206,100,.45)`}}/>{[...Array(18)].map((_,i)=><i key={i} style={{position:'absolute',left:80+(i*139)%1080,top:100+(i*173)%920,width:2,height:storm?78:3,background:'rgba(210,230,242,.35)',transform:`rotate(${storm?-18:0}deg)`}}/>)}</div>
  <svg width="1280" height="1920" style={{position:'absolute',left:-100,transform:`translateX(${mid}px)`}}><path d="M0 1050 180 790l130 260 180-350 165 350 205-280 150 280 160-390 210 410v550H0z" fill="#244456" opacity=".78"/><path d="M0 1260Q350 1050 700 1200T1280 1110v810H0z" fill="#173F3D"/></svg>
  <svg width="1280" height="1920" style={{position:'absolute',left:-100,transform:`translateX(${ground}px)`}}><path d="M0 1370Q340 1250 640 1360T1280 1300v620H0z" fill="#263E35"/><path d="M90 1910Q320 1410 560 1360Q790 1310 1120 1910" fill="none" stroke={warmth>.4?'#E7B65D':'#64827A'} strokeWidth="230" opacity=".85"/><path d="M90 1910Q320 1410 560 1360Q790 1310 1120 1910" fill="none" stroke="#F7DE9B" strokeWidth="14" strokeDasharray="10 35" opacity=".8"/></svg>
  <svg width="1300" height="1920" style={{position:'absolute',left:-120,transform:`translateX(${near}px)`,filter:'blur(1px)'}}><path d="M0 0v1920h150Q60 1500 215 1100T130 0M1300 0v1920h-170q120-430-20-900T1180 0" fill="#102E2E" opacity=".92"/></svg>
 </div>;
};
