---
name: 2d-animation-storytelling
version: 1.0.0
description: >-
  Master production skill for creating beautiful, cohesive 2D animated stories in PeerGraphics.
  Orchestrates the complete 3-phase production pipeline: Phase 1 Directorial Planning
  (director-animation-planning), Phase 2 Vector Puppet & Environment Rigging (asset-rigging-preparation),
  and Phase 3 Remotion Staging & Story Animation (story-animation-production). Use whenever
  a user requests an animated story, character-driven video, illustrated tale, or cinematic 2D animation.
---

# 2D Animated Storytelling Production Pipeline

## Mission

Turn any written narrative or story idea into an emotionally engaging, visually breathtaking 2D animated film featuring living vector-rigged characters, multi-plane depth environments, atmospheric cinematic lighting, fluid spring kinetics, and synchronized audio narration.

**Core Philosophy:**
We do not make slide shows or moving static graphics. We make illustrated worlds feel **alive**. Every character breathes, looks with intention, and interacts with their world. Every camera motion is motivated. Every background has depth.

---

## The Three-Phase Production Lifecycle

When tasked with generating a 2D animated story, execute the three phases sequentially without skipping:

```
[Written Story / Script]
         │
         ▼
[Phase 1: Directorial Planning] ──► (director-animation-planning / DirectorSKILL.md)
  Outputs: production/storyboard.md, character-bible.md, moodboard.md, continuity.md
         │
         ▼
[Phase 2: Asset Creation & Rigging] ──► (asset-rigging-preparation / AssetsSKILL.md)
  Outputs: src/characters/<Name>Puppet.tsx, src/environments/<Name>Env.tsx, src/fx/, assets-manifest.json
         │
         ▼
[Phase 3: Animation & Production] ──► (story-animation-production / AnimatorSKILL.md)
  Outputs: src/compositions/<Story>Story.tsx, registered in Root.tsx, rendered in out/
```

---

## 1. Phase 1 — Directorial Planning (`director-animation-planning`)
1. **Analyze Narrative Arc**: Identify the emotional tone, tension beats, and rhythm of the story.
2. **Shot Breakdown**: Divide the story into frame-accurate cinematic shots ($[fromFrame, durationInFrames]$ @ 30 fps).
3. **Character Design**: Define visual silhouette, 1:4.5 storybook proportions, color hex tokens, and expression bank.
4. **Environment & Mood**: Establish 4-plane depth architecture and lighting color script.
5. **Continuity**: Guarantee screen direction (180-degree rule), prop persistence, and light angle.
6. **Deliverables**: Write `production/storyboard.md`, `character-bible.md`, `moodboard.md`, and `continuity.md`.

## 2. Phase 2 — Asset Rigging & Environment Decomposition (`asset-rigging-preparation`)
1. **Hierarchical SVG Puppetry**: Build `<CharacterName>Puppet.tsx` with articulated anatomical tree:
   `Root -> Hips -> Torso -> [Neck -> Head (Sclera, Pupils, Eyelids, Mouth)] + [Arms -> Hand -> Props]`.
2. **Explicit Joint Pivots**: Set `transformOrigin` on every joint to prevent detachment or tearing.
3. **Decoupled Features**: Enable independent eye gaze tracking (`gazeX`, `gazeY`), blinking (`blinkProgress`), and phoneme mouths.
4. **Multi-Plane Environments**: Separate backgrounds into 4 depth planes (Far Sky $Z=3.0$, Midground $Z=1.8$, Ground $Z=1.0$, Foreground $Z=0.5$).
5. **Atmospheric FX**: Build procedural fireflies, volumetric lighting cones, and floating embers.
6. **Deliverables**: Create `src/characters/`, `src/environments/`, `src/fx/`, and register in `production/assets-manifest.json`.

## 3. Phase 3 — Story Animation & Remotion Production (`story-animation-production`)
1. **Kinetic Staging**: Orchestrate shots in `src/compositions/<StoryName>Story.tsx`.
2. **Idle Alive Rule**: Apply continuous sinusoidal chest breathing (`sin(frame * 0.08)`) and involuntary eye blinks.
3. **Anticipation & Recoil**: Drive dramatic moments with Remotion `spring()` curves.
4. **Optical Parallax**: Move environment planes at differentiated speeds proportional to camera velocity.
5. **Dynamic Lighting**: Wash character and background with reactive ambient light shifts.
6. **Glassmorphic Subtitles**: Ensure all narration text is centered inside glassmorphic safe-zone pill bars.
7. **Deliverables**: Register composition in `src/Root.tsx`, render proof stills, and render final video to `out/<story>_video.mp4`.

---

## Verification & Quality Gates

Before presenting final work to the user:
- [ ] `bun run build` passes with zero TypeScript errors.
- [ ] Proof stills for all key beats are rendered and visually inspected with `view_file`.
- [ ] Characters exhibit organic life while idle (breathing, eye saccades, blinks).
- [ ] No joint dislocations, tearing, or missing layers occur during motion.
- [ ] Full video renders deterministically with `npx remotion render`.
