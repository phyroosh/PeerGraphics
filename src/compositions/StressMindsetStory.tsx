import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {MiraPuppet} from '../characters/MiraPuppet';
import {ChoiceGardenEnv} from '../environments/ChoiceGardenEnv';
import {StorySubtitle} from '../animation/StorySubtitle';

const lines = [
  [0,270,'Two people can do the same hard workout and leave with very different stress signals.'],
  [270,570,'Part of the difference is agency: forced running raised stress hormone in rodent studies; voluntary running did not.'],
  [570,810,'That does not make stress imaginary — and it does not prove the same result in people.'],
  [810,1110,'The brain is always asking: is this a threat I cannot control, or a challenge I can meet?'],
  [1110,1380,'Stress-mindset experiments suggest that a more helpful framing can mean steadier cortisol and more willingness to seek feedback.'],
  [1380,1650,'Name the demand. Choose one action you control. Read that energy as preparation for your next move.'],
] as const;
export const StressMindsetStory: React.FC = () => {
 const frame=useCurrentFrame(); const {fps}=useVideoConfig(); const shot=lines.find(([a,b])=>frame>=a&&frame<b) ?? lines[5];
 const phase=frame/1650; const warmth=interpolate(frame,[0,700,1200,1650],[0,.05,.62,1],{extrapolateRight:'clamp'}); const storm=1-warmth;
 const cameraX=interpolate(frame,[0,570,1110,1650],[0,-55,-10,-85],{extrapolateRight:'clamp'});
 const blink=Math.max(0,1-Math.abs((frame%120)-60)/8); const breath=(Math.sin(frame*.08)+1)/2;
 const forced=frame>=270&&frame<570; const question=frame>=810&&frame<1110; const action=frame>=1380;
 const reach=frame>=1110&&frame<1380; const anticipation=action?interpolate(frame,[1380,1415,1470],[0,-15,0],{extrapolateRight:'clamp'}):0;
 const settle=action?spring({frame:frame-1420,fps,config:{damping:12,stiffness:100}}):0;
 return <div style={{width:1080,height:1920,position:'relative',overflow:'hidden',fontFamily:'Georgia, serif'}}>
   <ChoiceGardenEnv cameraX={cameraX} warmth={warmth} storm={storm}/>
   {frame<270 && <><Sign x={245} label="PUSHED" dark/><Sign x={760} label="CHOSEN"/></>}
   {forced && <div style={{position:'absolute',left:80,right:0,bottom:535,height:170,transform:'skewY(-5deg)',background:'repeating-linear-gradient(90deg,#334D59 0 38px,#1E3441 38px 78px)',borderTop:'9px solid #9CC0C5',borderBottom:'9px solid #182E38',opacity:.9}}/>}
   {question && <div style={{position:'absolute',top:300,left:115,right:165,display:'flex',justifyContent:'space-between',color:'#FFF4CD',fontWeight:800,fontSize:45,textAlign:'center',textShadow:'0 4px 10px #0B1F2B'}}><div>THREAT<br/><span style={{fontSize:27,fontWeight:500}}>no control</span></div><div>CHALLENGE<br/><span style={{fontSize:27,fontWeight:500}}>next action</span></div></div>}
   {reach && <div style={{position:'absolute',top:420,left:680,width:130,height:130,borderRadius:'50%',border:'11px solid #F8E1A0',boxShadow:'0 0 90px #FFE58A',opacity:.9}}/>}
   <div style={{position:'absolute',inset:0,transform:`translate(${cameraX*.15}px,${anticipation}px) scale(${1+settle*.025})`,transformOrigin:'50% 70%'}}><MiraPuppet x={535} y={1480} scale={1.52} pose={forced?'brace':reach?'reach':action?'step':'idle'} expression={forced?'wary':question?'think':action?'relieved':'determined'} breath={breath} blink={blink} gazeX={forced?.7:reach?.75:action?.2:-.25} headTilt={forced?-7:question?6:action?-2:0} scarfSway={Math.sin(frame*.13)*9} warmth={warmth}/></div>
   <div style={{position:'absolute',inset:0,background:`radial-gradient(circle at 50% 50%, transparent 40%, rgba(4,15,20,${.38-.25*warmth}) 100%)`,pointerEvents:'none'}}/>
   <StorySubtitle text={shot[2]} isDramatic={forced||question}/>
 </div>;
};
const Sign:React.FC<{x:number;label:string;dark?:boolean}>=({x,label,dark})=><div style={{position:'absolute',left:x,top:1070,transform:'translateX(-50%)',zIndex:2}}><div style={{width:10,height:260,margin:'auto',background:'#513A26'}}/><div style={{position:'absolute',top:-15,left:-125,width:250,padding:'20px 0',borderRadius:12,background:dark?'#485D66':'#E7B65D',color:dark?'#EFF9FA':'#49321C',font:'700 34px Georgia',textAlign:'center',boxShadow:'0 8px 0 rgba(20,30,30,.3)'}}>{label}</div></div>;
