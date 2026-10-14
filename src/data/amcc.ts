export interface AMCCSceneSpec {
  id: string;
  from: number;
  durationInFrames: number;
  purpose: string;
}

export interface AMCCCaptionCue {
  from: number;
  to: number;
  text: string;
  accent: '#FF0055' | '#FFE600' | '#00E5FF';
}

// Measured narration: 60.029375 s × 30 fps = 1800.88125 → 1801 frames.
export const AMCC_RUNTIME = 1801;

export const AMCC_SCENES: AMCCSceneSpec[] = [
  {id: 'S01', from: 0, durationInFrames: 278, purpose: 'Dispel the battery metaphor and introduce the aMCC.'},
  {id: 'S02', from: 278, durationInFrames: 414, purpose: 'Show the aMCC integrating costs and expected reward.'},
  {id: 'S03', from: 692, durationInFrames: 300, purpose: 'Correct the single-switch misconception.'},
  {id: 'S04', from: 992, durationInFrames: 381, purpose: 'Make the first action small and obvious.'},
  {id: 'S05', from: 1373, durationInFrames: 428, purpose: 'Remove friction, make progress visible, and close the feedback loop.'},
];

// Boundaries are derived from the supplied MP3's detected pauses and reviewed
// against the approved narration. They are intentionally phrase-level, not word-level.
export const AMCC_CAPTIONS: AMCCCaptionCue[] = [
  {from: 0, to: 106, text: "Willpower isn't a tiny battery you either have or don't.", accent: '#FF0055'},
  {from: 123, to: 267, text: 'The aMCC helps weigh: is this goal worth the effort?', accent: '#FFE600'},
  {from: 278, to: 410, text: 'It integrates reward, discomfort, attention, and your body’s resources.', accent: '#00E5FF'},
  {from: 414, to: 536, text: 'Then it helps coordinate control with other brain systems.', accent: '#FFE600'},
  {from: 546, to: 691, text: 'It is not a “willpower switch.”', accent: '#FF0055'},
  {from: 692, to: 810, text: 'It helps choose: persist, change strategy, or quit.', accent: '#00E5FF'},
  {from: 812, to: 965, text: 'Don’t rely on motivation alone.', accent: '#FFE600'},
  {from: 992, to: 1138, text: 'Make the next action smaller and obvious.', accent: '#FF0055'},
  {from: 1145, to: 1305, text: 'Open the document. Do one problem. Walk for five minutes.', accent: '#00E5FF'},
  {from: 1373, to: 1518, text: 'Remove friction. Make progress visible. Attach a meaningful reward.', accent: '#FFE600'},
  {from: 1525, to: 1692, text: 'Manageable next steps teach your brain effort is worth it.', accent: '#00E5FF'},
  {from: 1698, to: 1801, text: 'Make persistence the rational next move.', accent: '#FF0055'},
];
