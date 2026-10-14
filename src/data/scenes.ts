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
    id: 'S01_TheAnatomyOfWill',
    from: 0,
    durationInFrames: 275, // 0.00s - 9.17s
    label: 'Anatomy of Willpower (aMCC)',
  },
  {
    id: 'S02_FrictionExpandsTheMuscle',
    from: 275,
    durationInFrames: 420, // 9.17s - 23.17s
    label: 'Friction & Neural Growth',
  },
  {
    id: 'S03_TheComfortAtrophyTrap',
    from: 695,
    durationInFrames: 415, // 23.17s - 37.00s
    label: 'Comfort Atrophy & Habit Trap',
  },
  {
    id: 'S04_DailyRenewalProtocol',
    from: 1110,
    durationInFrames: 165, // 37.00s - 42.50s
    label: 'Daily Renewal Requirement',
  },
  {
    id: 'S05_DeliberateMicroFriction',
    from: 1275,
    durationInFrames: 435, // 42.50s - 57.00s
    label: 'Deliberate Micro-Friction Protocol',
  },
];

export const CAPTIONS: CaptionCue[] = [
  {
    from: 0,
    to: 75,
    text: 'Willpower is not a personality trait.',
    highlightWords: ['personality trait'],
    color: '#FF0055',
  },
  {
    from: 89,
    to: 221,
    text: 'It lives in a specific brain structure called the anterior midcingulate cortex,',
    highlightWords: ['anterior midcingulate cortex'],
    color: '#FFE600',
  },
  {
    from: 227,
    to: 275,
    text: 'or aMCC.',
    highlightWords: ['aMCC'],
    color: '#00E5FF',
  },
  {
    from: 285,
    to: 345,
    text: 'Whenever you force yourself through friction—',
    highlightWords: ['force yourself', 'friction'],
    color: '#FF0055',
  },
  {
    from: 352,
    to: 438,
    text: "doing what you don't want to do,",
    highlightWords: ["don't want to do"],
    color: '#FFE600',
  },
  {
    from: 445,
    to: 490,
    text: 'or resisting a craving—',
    highlightWords: ['resisting a craving'],
    color: '#00E5FF',
  },
  {
    from: 498,
    to: 568,
    text: 'this region fires.',
    highlightWords: ['this region fires'],
    color: '#FFE600',
  },
  {
    from: 573,
    to: 645,
    text: 'When you consistently embrace that resistance,',
    highlightWords: ['embrace that resistance'],
    color: '#FF0055',
  },
  {
    from: 655,
    to: 695,
    text: 'the aMCC physically grows.',
    highlightWords: ['physically grows'],
    color: '#00E5FF',
  },
  {
    from: 699,
    to: 768,
    text: 'But here is the catch:',
    highlightWords: ['here is the catch'],
    color: '#FFE600',
  },
  {
    from: 778,
    to: 865,
    text: 'your brain is ruthlessly efficient.',
    highlightWords: ['ruthlessly efficient'],
    color: '#FF0055',
  },
  {
    from: 875,
    to: 975,
    text: 'Slip into comfort, and the aMCC shrinks.',
    highlightWords: ['comfort', 'shrinks'],
    color: '#FF0055',
  },
  {
    from: 982,
    to: 1110,
    text: 'Even worse, once a hard task becomes an easy habit, this region powers down.',
    highlightWords: ['easy habit', 'powers down'],
    color: '#00E5FF',
  },
  {
    from: 1117,
    to: 1195,
    text: 'You cannot store willpower for tomorrow.',
    highlightWords: ['cannot store willpower'],
    color: '#FF0055',
  },
  {
    from: 1205,
    to: 1275,
    text: 'It must be renewed every single day.',
    highlightWords: ['renewed every single day'],
    color: '#FFE600',
  },
  {
    from: 1283,
    to: 1375,
    text: 'The antidote is deliberate friction.',
    highlightWords: ['antidote', 'deliberate friction'],
    color: '#00E5FF',
  },
  {
    from: 1382,
    to: 1458,
    text: 'Every morning, pick one small thing your brain resists—',
    highlightWords: ['brain resists'],
    color: '#FFE600',
  },
  {
    from: 1464,
    to: 1528,
    text: 'five minutes of cold water, delaying your phone, or starting the hardest task first.',
    highlightWords: ['cold water', 'delaying phone', 'hardest task'],
    color: '#FF0055',
  },
  {
    from: 1536,
    to: 1608,
    text: "Do it solely because you don't want to.",
    highlightWords: ["don't want to"],
    color: '#FFE600',
  },
  {
    from: 1616,
    to: 1705,
    text: 'That daily spark keeps your willpower from shrinking.',
    highlightWords: ['daily spark', 'willpower from shrinking'],
    color: '#00E5FF',
  },
];
