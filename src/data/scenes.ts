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
    id: 'S01_Hook',
    from: 0,
    durationInFrames: 114, // 0.00s - 3.80s
    label: 'The Cognitive Loop',
  },
  {
    id: 'S02_TwoSystems',
    from: 114,
    durationInFrames: 228, // 3.80s - 11.40s
    label: 'Two Separate Circuits',
  },
  {
    id: 'S03_LikingCircuit',
    from: 342,
    durationInFrames: 156, // 11.40s - 16.60s
    label: 'The Liking Circuit',
  },
  {
    id: 'S04_WantingCircuit',
    from: 498,
    durationInFrames: 126, // 16.60s - 20.80s
    label: 'The Wanting Circuit',
  },
  {
    id: 'S05_TheDivergence',
    from: 624,
    durationInFrames: 240, // 20.80s - 28.80s
    label: 'Tolerance vs Sensitization',
  },
  {
    id: 'S06_TheMiseryTrap',
    from: 864,
    durationInFrames: 156, // 28.80s - 34.00s
    label: 'Maximum Urge, Zero Joy',
  },
  {
    id: 'S07_Synthesis',
    from: 1020,
    durationInFrames: 126, // 34.00s - 38.19s
    label: 'Trapped in Wanting',
  },
];

export const CAPTIONS: CaptionCue[] = [
  {
    from: 0,
    to: 114,
    text: 'Ever find yourself stuck doing something you actively hate?',
    highlightWords: ['actively hate'],
    color: '#EF4444',
  },
  {
    from: 114,
    to: 200,
    text: 'Here is why quitting feels impossible:',
    highlightWords: ['impossible'],
  },
  {
    from: 200,
    to: 342,
    text: 'in your brain, liking and wanting are two completely separate systems.',
    highlightWords: ['liking', 'wanting', 'separate systems'],
  },
  {
    from: 342,
    to: 424,
    text: 'Liking is the actual pleasure you feel,',
    highlightWords: ['Liking', 'actual pleasure'],
    color: '#10B981',
  },
  {
    from: 424,
    to: 498,
    text: 'powered by fragile opioid hotspots.',
    highlightWords: ['fragile opioid hotspots'],
    color: '#10B981',
  },
  {
    from: 498,
    to: 585,
    text: 'Wanting is the raw urge to pursue,',
    highlightWords: ['Wanting', 'raw urge'],
    color: '#F97316',
  },
  {
    from: 585,
    to: 624,
    text: 'driven by dopamine.',
    highlightWords: ['dopamine'],
    color: '#F97316',
  },
  {
    from: 624,
    to: 742,
    text: 'Over time, the pleasure hotspots shut down from tolerance.',
    highlightWords: ['shut down', 'tolerance'],
    color: '#10B981',
  },
  {
    from: 742,
    to: 810,
    text: 'But dopamine pathways do the opposite—',
    highlightWords: ['dopamine pathways'],
    color: '#F97316',
  },
  {
    from: 810,
    to: 864,
    text: 'they become hyper-sensitized.',
    highlightWords: ['hyper-sensitized'],
    color: '#F97316',
  },
  {
    from: 864,
    to: 940,
    text: 'Your brain screams that you need it,',
    highlightWords: ['screams', 'need it'],
    color: '#F97316',
  },
  {
    from: 940,
    to: 1020,
    text: 'even while the experience gives you zero joy.',
    highlightWords: ['zero joy'],
    color: '#EF4444',
  },
  {
    from: 1020,
    to: 1091,
    text: 'You are not chasing pleasure anymore.',
    highlightWords: ['not chasing pleasure'],
  },
  {
    from: 1091,
    to: 1146,
    text: 'You are trapped in wanting.',
    highlightWords: ['trapped in wanting'],
    color: '#F97316',
  },
];
