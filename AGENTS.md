# PeerGraphics animation-routing contract

## Default visual language

`out/prototype_lantern_keeper.mp4` is the canonical visual reference for every
new 2D-animation request in this repository. This applies to educational and
explanatory narration as well as fiction, unless the user explicitly asks for
an infographic/motion-graphics treatment.

Use the `2d-animation-storytelling` pipeline and its three phases:

1. Directorial blueprint in `production/` (storyboard, character bible,
   moodboard, continuity).
2. New or extended articulated character puppets, multi-plane environments,
   and atmospheric FX.
3. A story composition with shot-based staging, visual proof frames, and a
   final render.

An educational topic is still told through a small character-driven visual
story: give the concept a concrete world, protagonist, props, acting beats,
and a visual resolution. Do not turn the narration into a presentation.

## Voiceover-first gate

For any request that starts with a topic, research brief, or written script,
first deliver a copy-ready narration and ask the user to generate and upload
the ElevenLabs voiceover. Stop there. Do not build, render, or claim to have
produced a final video from estimated timing or silent placeholder audio.

Only after the user supplies the voice file may an agent start visual
production. That file is the master clock: measure its duration, transcribe or
align its words and pauses, and derive every shot boundary from it. The final
MP4 must contain that narration as an audio stream. Before delivery, run
`bun run verify:render -- out/<story>_video.mp4`; a silent MP4 or one with an
audio/video duration mismatch is an incomplete render, never a finished video.

## University-grade explanation standard

For an educational topic, the visual story must teach with the clarity and
intellectual rigor expected in a world-class lecture—not merely decorate the
narration. Build a visible learning arc: a precise question or misconception,
the model and vocabulary needed to reason about it, a cause-and-effect
demonstration, a concrete example or prediction, then a synthesis and
actionable implication. Integrate labels or diagrams only where they make the
character's world and the mechanism clearer; they must never replace the
story's acting and physical cause-and-effect.

Every 2–6 seconds of narration needs a deliberate attention beat: a new
action, revealed relationship, camera reframing, change in state, or a
purposeful hold for a difficult idea. Do not use meaningless movement,
constant cuts, kinetic text, or decorative particles as a substitute for a
teachable visual change.

## Explicit legacy escape hatch

`ExplanationVideo`, `AMCC_SCENES`, `AMCCBackground`, the risograph components,
and `src/scenes/S*_AMCC*.tsx` are legacy infographic machinery. Do not import,
copy, extend, render, or use them for a new animation unless the user clearly
requests **an infographic**, **punk/risograph/editorial motion graphics**, or
the `ExplanationVideo` composition by name. A topic merely being educational,
scientific, psychological, or explanatory is not sufficient authorization.

## Acceptance gate before rendering

Every new default animation must visibly include all of the following:

- a reusable articulated character puppet with separate head/face, torso,
  arms/prop, and explicit joint pivots;
- continuous life: breathing, eye gaze, blinking, and secondary cloth/hair
  motion while idle;
- at least three independently moving environment planes and a motivated
  parallax camera move;
- anticipation, action, and settle/recoil for meaningful actions;
- storybook lighting/atmosphere and subtitles in the mobile-safe lower zone.
- the supplied ElevenLabs narration embedded in the final MP4 and every
  storyboard timing derived from its measured duration;
- a visual teaching arc with a question, causal demonstration, concrete
  example, and takeaway—not a set of static cards or unrelated illustrations.

Render and inspect proof stills from every major shot and motion previews from
each major sequence. Do not call the work complete merely because TypeScript
passes or an MP4 exists.
