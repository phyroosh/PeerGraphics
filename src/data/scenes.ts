export interface SceneSpec {
  id: string;
  from: number;
  durationInFrames: number;
  label: string;
}

export interface CaptionCue {
  from: number;
  to: number;
  text: string;
  highlightWords?: string[];
  color?: string;
}

export const SCENES: SceneSpec[] = [
  {
    id: 'S01_TheChemistryTrap',
    from: 0,
    durationInFrames: 377, // 0.00s - 12.57s
    label: 'The Chemistry Trap',
  },
  {
    id: 'S02_BattleForControl',
    from: 377,
    durationInFrames: 291, // 12.57s - 22.27s
    label: 'Battle For Control',
  },
  {
    id: 'S03_WalkingOnEggshells',
    from: 668,
    durationInFrames: 132, // 22.27s - 26.67s
    label: 'Walking On Eggshells',
  },
  {
    id: 'S04_EmotionalSafety',
    from: 800,
    durationInFrames: 278, // 26.67s - 35.93s
    label: 'Emotional Safety',
  },
  {
    id: 'S05_UsVsTheProblem',
    from: 1078,
    durationInFrames: 160, // 35.93s - 41.27s
    label: 'Us Vs The Problem',
  },
  {
    id: 'S06_TheBoundaryTest',
    from: 1238,
    durationInFrames: 396, // 41.27s - 54.47s
    label: 'The Boundary Test',
  },
  {
    id: 'S07_AntidoteSynthesis',
    from: 1634,
    durationInFrames: 190, // 54.47s - 60.80s
    label: 'Consistent Safety',
  },
];

export const CAPTIONS: CaptionCue[] = [
  {
    from: 0,
    to: 116,
    text: 'We often mistake intense chemistry for a healthy connection,',
    highlightWords: ['intense chemistry', 'healthy connection'],
    color: '#FF0055',
  },
  {
    from: 116,
    to: 224,
    text: 'but the real difference between a healthy and an unhealthy relationship',
    highlightWords: ['real difference', 'unhealthy relationship'],
    color: '#FFE600',
  },
  {
    from: 224,
    to: 284,
    text: "isn't how good the highs feel.",
    highlightWords: ['highs feel'],
    color: '#FF0055',
  },
  {
    from: 284,
    to: 377,
    text: "It's how safe you feel when things get uncomfortable.",
    highlightWords: ['safe you feel', 'uncomfortable'],
    color: '#00E5FF',
  },
  {
    from: 377,
    to: 494,
    text: 'In an unhealthy dynamic, conflict is a battle for control.',
    highlightWords: ['battle for control'],
    color: '#FF0055',
  },
  {
    from: 494,
    to: 552,
    text: 'Boundaries are treated as threats,',
    highlightWords: ['Boundaries', 'threats'],
    color: '#FF0055',
  },
  {
    from: 552,
    to: 668,
    text: 'and disagreements are met with guilt, silence, or anger.',
    highlightWords: ['guilt', 'silence', 'anger'],
    color: '#FF0055',
  },
  {
    from: 668,
    to: 724,
    text: 'You end up walking on eggshells,',
    highlightWords: ['walking on eggshells'],
    color: '#FFE600',
  },
  {
    from: 724,
    to: 800,
    text: 'editing yourself just to keep the peace.',
    highlightWords: ['editing yourself', 'keep the peace'],
    color: '#FF0055',
  },
  {
    from: 800,
    to: 898,
    text: "A healthy relationship isn't the absence of conflict.",
    highlightWords: ['absence of conflict'],
    color: '#FFE600',
  },
  {
    from: 898,
    to: 977,
    text: "It's the presence of emotional safety.",
    highlightWords: ['presence', 'emotional safety'],
    color: '#00E5FF',
  },
  {
    from: 977,
    to: 1078,
    text: 'Differences are met with curiosity instead of contempt.',
    highlightWords: ['curiosity', 'contempt'],
    color: '#00E5FF',
  },
  {
    from: 1078,
    to: 1194,
    text: "When tension rises, it's the two of you teaming up against the problem,",
    highlightWords: ['teaming up', 'the problem'],
    color: '#FFE600',
  },
  {
    from: 1194,
    to: 1238,
    text: 'not against each other.',
    highlightWords: ['not against each other'],
    color: '#00E5FF',
  },
  {
    from: 1238,
    to: 1387,
    text: 'To see where your relationship stands, observe what happens when you set a simple boundary.',
    highlightWords: ['simple boundary', 'observe'],
    color: '#FFE600',
  },
  {
    from: 1387,
    to: 1493,
    text: 'A healthy partner responds with curiosity and respect.',
    highlightWords: ['curiosity', 'respect'],
    color: '#00E5FF',
  },
  {
    from: 1493,
    to: 1634,
    text: 'An unhealthy dynamic responds with guilt, withdrawal, or defensiveness.',
    highlightWords: ['guilt', 'withdrawal', 'defensiveness'],
    color: '#FF0055',
  },
  {
    from: 1634,
    to: 1711,
    text: "That isn't passion, it's control.",
    highlightWords: ["isn't passion", "it's control"],
    color: '#FF0055',
  },
  {
    from: 1711,
    to: 1824,
    text: 'Always choose consistent safety over chaotic intensity.',
    highlightWords: ['consistent safety', 'chaotic intensity'],
    color: '#FFE600',
  },
];
