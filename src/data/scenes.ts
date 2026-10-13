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
    id: 'S01_TheRoteDrillTrap',
    from: 0,
    durationInFrames: 311, // 0.00s - 10.37s
    label: 'The Rote Drill Trap',
  },
  {
    id: 'S02_BernsteinAndBlacksmith',
    from: 311,
    durationInFrames: 503, // 10.37s - 27.14s
    label: "Bernstein's Discovery",
  },
  {
    id: 'S03_NeuralPlasticityVsAutopilot',
    from: 814,
    durationInFrames: 375, // 27.14s - 39.63s
    label: 'Neuroplasticity vs Autopilot',
  },
  {
    id: 'S04_DynamicMastery',
    from: 1189,
    durationInFrames: 143, // 39.63s - 44.42s
    label: 'Dynamic Mastery',
  },
  {
    id: 'S05_ActionableAntidote',
    from: 1332,
    durationInFrames: 428, // 44.42s - 58.67s
    label: 'Repeat Goal, Vary Movement',
  },
];

export const CAPTIONS: CaptionCue[] = [
  {
    from: 0,
    to: 44,
    text: 'When practicing a skill,',
    highlightWords: ['practicing a skill'],
    color: '#FFE600',
  },
  {
    from: 44,
    to: 155,
    text: 'doing the exact same drill a hundred times feels productive.',
    highlightWords: ['exact same drill', 'hundred times', 'productive'],
    color: '#FF0055',
  },
  {
    from: 155,
    to: 311,
    text: 'But your brain actually learns best when you never repeat the exact same movement.',
    highlightWords: ['never repeat', 'exact same movement'],
    color: '#00E5FF',
  },
  {
    from: 311,
    to: 470,
    text: 'In the nineteen thirties, neurophysiologist Nikolai Bernstein studied master blacksmiths.',
    highlightWords: ['Nikolai Bernstein', 'blacksmiths'],
    color: '#FFE600',
  },
  {
    from: 470,
    to: 572,
    text: 'The hammer hit the exact same millimeter every time,',
    highlightWords: ['exact same millimeter'],
    color: '#FF0055',
  },
  {
    from: 572,
    to: 700,
    text: 'yet the path of their arms and joints was different on every single strike.',
    highlightWords: ['path was different', 'every single strike'],
    color: '#00E5FF',
  },
  {
    from: 700,
    to: 814,
    text: 'He called this repetition without repetition.',
    highlightWords: ['repetition without repetition'],
    color: '#FFE600',
  },
  {
    from: 814,
    to: 908,
    text: 'Your brain does not wire rigid, robotic tracks.',
    highlightWords: ['rigid, robotic tracks'],
    color: '#FF0055',
  },
  {
    from: 908,
    to: 996,
    text: 'Neuroplasticity works by solving problems.',
    highlightWords: ['Neuroplasticity', 'solving problems'],
    color: '#00E5FF',
  },
  {
    from: 996,
    to: 1189,
    text: 'When you mindlessly repeat an identical motion, your nervous system goes on autopilot and stops adapting.',
    highlightWords: ['identical motion', 'autopilot', 'stops adapting'],
    color: '#FF0055',
  },
  {
    from: 1189,
    to: 1332,
    text: 'True mastery is training your brain to find the solution through changing conditions.',
    highlightWords: ['True mastery', 'changing conditions'],
    color: '#00E5FF',
  },
  {
    from: 1332,
    to: 1392,
    text: 'So stop doing identical reps.',
    highlightWords: ['stop doing identical reps'],
    color: '#FF0055',
  },
  {
    from: 1392,
    to: 1490,
    text: 'Keep your target constant, but vary the execution:',
    highlightWords: ['target constant', 'vary the execution'],
    color: '#FFE600',
  },
  {
    from: 1490,
    to: 1605,
    text: 'shift your stance, change the tempo, adjust your angle.',
    highlightWords: ['shift your stance', 'change the tempo', 'adjust your angle'],
    color: '#00E5FF',
  },
  {
    from: 1605,
    to: 1680,
    text: 'Repeat the goal, never the movement.',
    highlightWords: ['Repeat the goal', 'never the movement'],
    color: '#FFE600',
  },
  {
    from: 1680,
    to: 1760,
    text: 'That is how you build real skill.',
    highlightWords: ['build real skill'],
    color: '#00E5FF',
  },
];
