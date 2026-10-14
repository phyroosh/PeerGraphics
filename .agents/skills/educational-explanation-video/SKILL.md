---
name: educational-explanation-video
version: 1.2.0
description: >-
  Produce research-grounded vertical educational short videos in a strict two-phase
  workflow: first deliver a copy-ready explanation covering both the root mechanism
  and the concrete actionable solution for the user to voice in ElevenLabs, then wait
  for the supplied audio before planning, implementing, and validating audio-driven visuals
  with Remotion and React.
---

# Educational Explanation Video Production Skill

> [!IMPORTANT]
> **DISAMBIGUATION & ROUTING RULE:**
> This skill is strictly for **academic, scientific, psychological, and conceptual educational explanations** (infographic motion graphics, mechanical metaphors, gauges, diagrams).
> If the user request involves a **story, narrative, character animation, fictional tale, atmospheric world, or cinematic visual storytelling** (e.g. like *The Lantern Keeper*), **DO NOT USE THIS SKILL**.
> Instead, activate the **2D Animated Storytelling Pipeline** (`2d-animation-storytelling` -> `director-animation-planning` -> `asset-rigging-preparation` -> `story-animation-production`).

## Mission

Turn one user-provided topic into a short video that helps a real audience understand, remember, and use one valuable idea. Work as an integrated subject researcher, educator, scriptwriter, visual designer, motion designer, editor, sound designer, and Remotion engineer.

**This skill has two mandatory phases, with a user-controlled handoff between them.** In Phase 1, research the topic and return a complete, accurate, naturally spoken, copy-ready voiceover explanation as plain text that includes both the underlying mechanism and the concrete solution/antidote at the end. The user generates the voice with ElevenLabs. Then stop and wait for the user to supply that audio. In Phase 2, treat the supplied audio as the authoritative narration and timeline; plan and produce the visuals around its actual words, pauses, emphasis, and duration. Never begin visual production before the audio file is provided.

The default deliverable is a native vertical short for YouTube Shorts, Instagram Reels, or TikTok: **9:16, 1080 × 1920 pixels, 30 fps, naturally paced (typically 40–65 seconds, without any rigid 40-second cutoff)** to ensure both the root problem and its practical resolution are fully explained. The video is not a narrated article with animated text. Narration, composition, diagrams, movement, examples, sound, and timing must reinforce one another. A visual must clarify a relationship, expose a mechanism, compare alternatives, make change observable, direct attention, evoke a useful feeling, or aid recall. If it does none of these, remove it.

**Definition of done:** Phase 1 delivers an accurate, engaging explanation with a clear solution and then waits. Phase 2 preserves the supplied voiceover, uses its measured duration and actual timing, designs native vertical visual storytelling for it, implements deterministic frame-accurate Remotion scenes, delivers a rendered video that has been inspected and corrected, and outputs complete YouTube upload metadata (title, description with hashtags, tags, categoryId, pinned comment) and a synchronized `.srt` caption file ready for YouTube upload.

## Operating rules

1. **Respect the phase gate.** A topic triggers research and copy-ready narration only. Do not inspect or modify a video project, storyboard, write visual code, generate assets, or render until the user supplies the ElevenLabs audio.
2. **The voiceover is the source of truth.** After the audio arrives, do not independently rewrite, paraphrase, shorten, expand, reorder, or silently trim the approved narration. If it needs changing, ask the user to approve a script revision and supply or approve a replacement voiceover.
3. **Understand before explaining.** Verify consequential claims, identify a common misconception when useful, and teach one central idea with the supporting mechanism and actionable solution needed to resolve it.
4. **Audio determines visual timing.** Measure the supplied file. Align scene boundaries, text, emphasis, animation, transitions, and captions to the actual narration, not estimated word timing.
5. **Design native to vertical.** Compose directly for a 9:16 mobile screen. Never design a horizontal video and crop it into vertical; protect focal content from platform interface overlays.
6. **Show relationships, not merely nouns.** When explaining a process, render the process. When explaining a distinction, compare the two things. When explaining causality, make the causal path visible.
7. **Use evidence proportionately.** Never invent sources, statistics, quotations, experiments, expert consensus, or certainty.
8. **Use Remotion's actual timing model.** All time-dependent visual state must derive from the current frame and composition configuration. It must not depend on wall-clock time, render order, network timing, mutable cross-frame state, or unseeded randomness.
9. **Prefer crafted specificity over template repetition.** Reusable components should reduce engineering work, not make every topic look identical.
10. **Inspect the rendered artifact.** Passing TypeScript, opening Remotion Studio, or getting an MP4 file is not proof of quality.
11. **Be honest about deliverables.** Distinguish a finished render from a preview, a storyboard, or an unrendered implementation. Report any review that could not be performed.
12. **Do not silently discard user constraints.** Preserve requested language, audience, tone, branding, and supplied assets where feasible. If details are missing, use the defaults below rather than stalling on avoidable questions.
13. **Mandatory YouTube metadata and captions.** Every rendered video in Phase 2 must be accompanied by complete YouTube publishing metadata (`production/metadata.json` and sync to `studio/metadata.json`) including high-CTR title with `#Shorts`, rich description with topic hashtags, searchable tags array, YouTube categoryId (27 = Education, 28 = Science & Tech), high-converting pinned discussion comment, and a synchronized `.srt` caption file (`production/captions.srt` or `out/<video>.srt`).
14. **Visual Style for Educational Explanations — Theme 09 (Punk Editorial & Risograph Collage).** When producing educational explanation shorts under this skill (and NOT 2D animated stories), use **Theme 09 (Punk Editorial & Risograph Collage)** as the motion graphic styling language, while operating as a **veteran motion designer with 20 years of experience creating animations for a university professor**:
    - **NEVER Use Fixed Card Templates**: Absolutely DO NOT treat Theme 09 as a rigid 3-box wireframe (e.g. `<HeadlineBox> + <WhiteCardWithGraph> + <InsightBox>`). The entire 1080×1920 canvas is an active, open vector drawing surface. There are no mandatory card wrappers.
    - **The "Mute Test" (Silent Comprehension Rule)**: The motion must explain the mechanism, conflict, and resolution so vividly that a student watching on mute with zero sound and no subtitles immediately understands what is happening.
    - **Draw Shapes, Characters, Objects & Physical Mechanisms in React**: Use React, SVG primitives (`<path>`, `<circle>`, `<polygon>`, `<g>`, `<mask>`, clipPaths), and Remotion springs to draw the actual entities in the concept:
      * **Characters**: Geometric SVG puppets with expressive postures, head angles, animatable eyes/gaze, and gestures.
      * **Apparatuses & Physical Metaphors**: Balances, scales, tipping beams, pressure chambers, cracking surfaces, fluid pipes, valves, gears, shields, locks, and test rigs.
      * **Animate What is Actually Happening**: Show cause-and-effect with physical weight, recoil, stress fractures, collisions, and progressive transformations.
    - **Theme 09 Aesthetic Signature**: Apply the Risograph Punk Zine aesthetic dynamically to any drawn object: newsprint halftone canvas (`#EAE5DB`), bold risograph spot fills (`#FF0055`, `#FFE600`, `#00E5FF`, `#FFFFFF`), inky black outlines (`stroke="#111111" strokeWidth="4-6"`), offset drop shadows (`boxShadow: 10px 10px 0 #111111` or offset duplicate black SVG shapes), torn paper accents, and chunky sticker labels.
    - **Zero Clutter & Single Focal Mechanism**:
      * Absolutely NO decorative top telemetry bars, fake circuit codes (`CIRCUIT 02`), technical figure tags (`FIG. 4.0`), shape rows (`■ ● ▲`), or top dividing rules.
      * NO badge soup or collections of meaningless capsule tags.
      * Keep the composition focused: one primary animated mechanism or character interaction at a time with generous negative space.
    - **Mobile Typography Standards (iPhone 15 Legible)**:
      * Headlines / Hero phrases: **80px – 110px**
      * Explanatory copy & callouts: **38px – 52px**
      * Absolute minimum font size anywhere on screen: **32px** (NEVER use micro-text < 32px).
    - **Mandatory Actionable Solution at the End**: Every explanation script must provide the concrete solution, actionable antidote, or resolution to the problem before concluding.
    - **Strict YouTube Shorts UI Safe Zones**: Top padding ≥ 160px, Bottom padding ≥ 400px (all visual content terminates cleanly at $y \le 1520\text{ px}$ to clear channel avatar, subscribe button, captions, sound ticker, and progress scrubber), Right margin ≥ 140px (clears Like/Comment/Share action buttons), Left margin ≥ 90px.
15. **Living Animated Background System (No Flat / Static Backgrounds)**: Instead of a dead, static paper background or simple flat CSS gradient, every composition must feature a living, multi-layered environmental canvas that evolves across the narrative arc:
    - **Layer 0: Atmospheric Color Grading & Emotional Shifts**: Dynamically shift the ambient background color and vignette intensity across scenes to mirror the psychological temperature and narrative tension (e.g. warm curiosity beige `#EAE5DB` → volcanic tension `#E8DFD5` with danger vignette on conflict → desaturated cool fog `#E3DFD7` on anxiety → radiant protective cyan `#E0E5E5` on safety → warm amber burst `#ECE5D5` on teamwork → clinical laboratory split on boundary testing → golden dawn horizon `#EFEAD8` on resolution).
    - **Layer 1: Narrative Kinetic Motifs (Story-Reactive Vectors)**: Background elements must actively respond to the narrative action:
      * *Parallax elevation lines*: Stream downward during climbs and falls to convey speed and vertigo.
      * *Seismic shockwave ripples*: Concentric circular waves that expand outwards on physical impacts or weight drops.
      * *Anxiety micro-tremors*: High-frequency horizontal jitter lines that activate during tension, doubt, or hesitation.
      * *Weather & particle barriers*: Atmospheric storm rain sheets deflected around protective domes or shields.
      * *Radial action speed bursts*: Manga/editorial speed rays bursting outward from fulcrums during breakthrough moments.
      * *Comparative environment splits*: Contrasting ambient tones across a central boundary divider.
      * *Golden dawn sunburst*: Rotating rays of warm sunlight expanding across the final resolution.
    - **Layer 2: Ambient Depth Micro-Particles**: Subtle floating dust motes, sparks, and rising energy flakes driven by deterministic frame calculations (`frame % N`, `sin(frame)`).
    - **Layer 3: Tactile 12 fps Risograph Grain Boil**: A stop-motion halftone dot grid and paper grain offset (`Math.floor(frame / 2.5) % 4`) that shifts at 12 fps, infusing the entire production with a tactile, handmade, high-budget animation studio character.
    - **Mute Test & Contrast Safeguard**: Background motifs must remain subordinate (opacity 0.15–0.40) so that foreground characters, vector apparatuses, and captions always maintain 100% razor-sharp readability.

---

# Production pipeline

Operate in the two phases below. The phase boundary is mandatory: the agent must end its first response after presenting the narration and resume only when the user supplies the generated voiceover audio.

## Phase 1 — Explanation writing and voiceover preparation

| Stage | Required work | Exit gate |
|---|---|---|
| 0. Topic brief | Resolve reasonable audience, purpose, language, and constraints | One central question/idea is clear; avoid unnecessary clarification |
| 1. Research and understand | Verify consequential claims, map the mechanism, identify caveats and misconceptions | Agent can explain the topic accurately in plain language |
| 2. Learning design | Choose one primary learning outcome and a simple progression | Every sentence supports the same central idea |
| 3. Voiceover explanation | Write a copy-ready narration covering hook, root mechanism, and concrete actionable solution | Accurate, compelling, natural when spoken (typically 40–65s, no rigid 40s cap) |
| 4. User handoff and stop | Present the narration as plain text, separate from sources or commentary | Stop; wait for user-provided ElevenLabs audio; do no visual production |

**Phase 1 output:** one complete voiceover text with no scene directions, visual descriptions, timestamps, production notes, sound cues, edit instructions, or Markdown inside the narration itself. Put any brief source notes or factual caveats outside the copyable text and only when useful. The voiceover MUST follow the complete narrative arc: **Hook/Puzzle → Core Mechanism/Root Cause → Concrete Actionable Solution/Antidote**. Clearly ask the user to generate the voiceover in ElevenLabs and upload the resulting audio file. Do not create a substitute voiceover, begin the Remotion timeline, or continue into Phase 2 in the same turn.

### Stage 0 — Resolve the Phase 1 brief

Use the topic and any context already provided. Do not ask the user to repeat information already in the conversation. When not specified, assume a general audience with beginner-to-intermediate prior knowledge, conversational English, a single valuable idea resolved with an actionable solution, and a naturally paced vertical short. Ask one concise question only if a missing detail materially changes factual accuracy or the intended audience and cannot be safely defaulted.

Record a brief internally if useful: topic/question; target audience; primary learning outcome; tone/language; must-include or must-avoid requirements; and any sources or user-provided material. **Do not inspect the video repository or create visual assets during Phase 1.**

### Stage 0.1 — Phase 1 scope guard

Only research, reason, and write the explanation. You may consult reliable external references where the topic is current, specialized, disputed, consequential, or unfamiliar. Do not create the art direction, storyboard, scene manifest, Remotion components, audio processing pipeline, captions, rendered frames, or video. Do not generate the final voice track: the user will use ElevenLabs and supply the resulting file.

### Stage 0.2 — Default delivery format

- **Target video format:** vertical 9:16, 1080 × 1920, 30 fps, naturally paced (typically 40–65 seconds, without any rigid 40-second cutoff).
- **Default visual theme for Educational Explanations:** **Theme 09 (Punk Editorial & Risograph Collage)** — Newsprint halftone canvas `#EAE5DB`, risograph hot pink `#FF0055`, high-voltage yellow `#FFE600`, pitch black `#111111` with bold drop shadows, zero top telemetry clutter, minimum font size 32px (iPhone 15 legible), single focal graphic at a time, and strict YouTube Shorts safe zones (Top ≥ 160px, Bottom ≥ 400px, Right margin ≥ 140px). (Note: For 2D animated stories, use the multi-plane vector storytelling art direction defined in `moodboard.md`).
- **Mandatory Content Requirement:** The explanation MUST conclude with a concrete, practical, and actionable solution or resolution to the stated problem/trap.
- **Narration planning length:** approximately 90–140 words as a natural guideline; natural read speed, complexity, language, emphasis, and pauses take precedence over a rigid word count.
- **Narration style:** concise, conversational, vivid but not sensational, accurate, and easy to speak aloud.
- **Visual production input:** only the audio file supplied by the user after external ElevenLabs generation, plus relevant context already in the conversation.
- **Research integrity:** retain source notes separately from the narration; never paste citations or stage directions inside the copy-ready voiceover.

**Phase 1 stop condition:** after the plain-text explanation and a concise handoff request, stop. Do not continue unless the user supplies the generated audio, or explicitly asks to revise the explanation first.

## Phase 2 — Audio-driven visual production

Start only after the user provides the ElevenLabs-generated voiceover audio. The audio—not a guessed duration or the original text's estimated timing—anchors the video timeline. Preserve the recording as supplied unless the user explicitly requests a script revision and supplies or approves replacement audio.

| Stage | Required work | Exit gate |
|---|---|---|
| 4. Audio intake and visual direction | Inspect audio/duration; align transcript; design vertical art direction and storyboard | Every scene is linked to a real spoken phrase and measured time range |
| 5. Timeline and technical plan | Set 1080 × 1920 composition, fps, audio duration, scene manifest and assets | Timeline matches the audio and has no gaps or forced cuts |
| 6. Remotion implementation | Build custom React/SVG/CSS scene components and synchronized animations | Deterministic composition plays with the supplied audio correctly |
| 7. Audio, captions, and mix | Preserve the narration; synchronize optional captions/music/effects without masking speech | No unauthorized narration edits; audio/visual timing checked |
| 8. Render and inspect | Render proofs and final export; inspect frames and full playback | Visual, synchronization, factual, and technical checks pass |
| 9. Evaluation and delivery | Score the result, fix faults, and package actual deliverables | 9:16 video is verified; any limitation is disclosed |

Determine the supplied file's actual duration and build the visual production to that exact length. Do not silently accelerate, cut, stretch, rewrite, or distort the narration to force compliance with an artificial time limit.

## Phase 2 gate — Audio must arrive first

The agent must not infer that audio exists just because narration text was drafted, a temporary audio file is present in a repository, or a previous prompt describes expected timing. Use the file the user supplies as the authorized voiceover. If no accessible audio file is attached or located, politely ask for the file and stop. If the file cannot be decoded, identify the limitation and request a supported replacement rather than guessing timing.

---

## Stage 1 — Understand the topic before explaining it

### 1.1 Build a topic model

Research and reason through the topic before writing the final script. Build a private or project-local concept map that answers:

1. What is the topic in one accurate sentence?
2. What question, confusion, or real-world problem makes it matter?
3. What is the single central idea, mechanism, and actionable solution needed to fully resolve the problem naturally (typically 40–65 seconds)?
4. How do these ideas relate: sequence, hierarchy, comparison, cause and effect, feedback, trade-off, probability, scale, or constraint?
5. What prior knowledge does the explanation rely on?
6. What do beginners commonly confuse with it?
7. What is the strongest concrete example, counterexample, or worked example?
8. What should the viewer be able to explain afterward that they could not explain beforehand?

Do not force every topic into a fixed number of concepts. For this format, choose one central explanatory idea and include only indispensable support. Merge redundant ideas and remove details that do not support the learning objective or cannot be understood in the short runtime.

### 1.2 Research consequential claims

Use available reliable sources when the topic is factual, technical, current, specialized, disputed, or unfamiliar. Favor primary sources where practical: original research, official documentation, standards, government publications, direct datasets, or original statements. Use reputable syntheses to understand the broader field. Do not treat search snippets, social posts, AI-generated summaries, or repeated claims as adequate verification by themselves.

For each significant claim, record:

| Field | What to record |
|---|---|
| Claim ID | Stable short identifier, e.g. `C03` |
| Claim | The precise statement the video may make |
| Claim type | Established fact, interpretation, estimate, analogy, hypothesis, or disputed claim |
| Support | Source title, author/organization, date, and URL or local reference |
| Strength | Direct support, indirect support, mixed evidence, or not verified |
| Limits | Conditions, uncertainty, population, date, or context that changes the meaning |
| Script use | Exact scene or line that depends on it |

This ledger may live in `production/claims.md`. Every meaningful factual claim in the final script must be supported, qualified, or removed. A source supports only what it actually says; do not imply it validates adjacent claims it never examined.

### 1.3 Handle uncertainty and nuance

- Distinguish correlation from causation, a plausible mechanism from a demonstrated one, a model from reality, and an estimate from a measured value.
- Preserve important conditions and boundary cases. Simplify the route to understanding, not the underlying truth.
- When informed sources disagree, explain the disagreement at the level needed by the audience. Do not manufacture false balance where evidence is strongly asymmetric.
- Avoid “scientists proved” or “the brain always” language unless the evidence genuinely warrants it.
- For medical, legal, financial, safety-critical, or similarly high-stakes topics, use especially conservative phrasing and authoritative sources. Include relevant limits and a proportionate disclaimer; do not turn the video into personal professional advice.
- If research tools or external verification are unavailable, mark unverified claims explicitly and narrow the explanation rather than inventing certainty.

### 1.4 Design an analogy carefully

Use an analogy only when its mapping is useful. Write down:

- **Target concept:** what the viewer needs to understand.
- **Source analogy:** the familiar system used to illuminate it.
- **Mapping:** which parts correspond to which parts.
- **Limit:** where the analogy stops being accurate.

Prefer a short, explicit limitation over letting a catchy analogy turn into a false mental model. Do not force metaphor where a literal diagram is clearer.

### Gate 1 — Topic-understanding check

Proceed only when the agent can explain the topic in plain language without the planned graphics, identify its crucial relationships, name likely misconceptions, and distinguish known facts from uncertain interpretation. If not, continue research or narrow the scope.

---

## Stage 2 — Engineer the learning experience

### 2.1 Define observable learning outcomes

Write one primary outcome. Add at most one or two tightly related supporting outcomes only if they are essential to the same central idea. Use verbs such as *identify, distinguish, trace, compare, predict, calculate, or explain*. Avoid vague outcomes such as “know more about the topic.”

Example pattern:

> By the end, the viewer can trace how **A** changes **B** through **C**, and explain one condition where that relationship does not hold.

The outcomes determine what belongs in the video. Attractive facts that do not help reach them are optional.

### 2.2 Sequence ideas from accessible to demanding

Choose a progression that fits the subject. A useful default is:

1. **Question or tension:** establish a meaningful puzzle, prediction, misconception, or practical consequence.
2. **Orientation:** give the viewer just enough context and vocabulary to follow the explanation.
3. **Core model:** introduce the central mechanism, framework, or distinction.
4. **Unfolding:** reveal the steps, dependencies, forces, or evidence in an understandable order.
5. **Concrete application:** work through a case, example, comparison, or prediction.
6. **Boundary or correction:** show where intuition fails or where the simplified model has limits.
7. **Synthesis:** reconstruct the whole idea and state the takeaway in memorable language.

For an educational short, default to a complete, naturally paced narrative arc (typically 40–65s, no artificial 40s cutoff): **hook or paradox → root mechanism/cause → concrete, actionable solution & resolution**. Never leave the viewer hanging with only the diagnosis; always deliver the antidote or actionable principle at the end. The seven steps above are a menu, not seven compulsory beats; compress and reorder them to suit the topic. Do not delay the answer merely to manufacture suspense.

### 2.3 Manage cognitive load deliberately

- Introduce unfamiliar terms immediately before or at the moment they become useful; define them in plain speech.
- Chunk a complex mechanism into stages, but explicitly reconnect the stages into one system.
- Use worked examples before expecting an inexperienced viewer to generalize.
- Keep essential labels near the elements they name. Use arrows, highlighting, position, scale, and grouping to reveal relationships.
- Remove competing decoration during a demanding explanation. A calm visual is often more effective than a continuously moving one.
- Repeat the concept, not the exact same sentence and layout. Revisit it through a changed view: mechanism, example, consequence, then recap.
- Offer short moments of visual stability after a dense reveal so the viewer can inspect what has changed.
- Avoid using a surprising fact, metaphor, sound effect, and full-screen text burst all at once unless they serve one coordinated beat.

Do not claim that a particular device “rewires the brain” or guarantees retention. Use evidence-aligned teaching principles without sensational neuroscience.

### 2.4 Plan attention beats

For each segment, specify what should make the viewer look, infer, or reconsider. Attention should be earned by meaningful changes: a problem appearing, a system assembling, a variable moving, a comparison resolving, a hidden layer being revealed, or a prediction being tested.

As a diagnostic, inspect the script in 5–12 second windows. Each window should have a clear function or deliberate pause. This is not a rule to force a transition every few seconds: a complex diagram may need sustained screen time, and constant cuts can impair comprehension.

### Gate 2 — Learning-design check

For every major segment, complete this sentence:

> “After this segment, the viewer can **[specific understanding]** because they saw or heard **[specific evidence, example, or relationship]**.”

If the sentence cannot be completed precisely, merge, rewrite, or remove the segment.

---

## Stage 3 — Write a speakable explanation

### 3.1 Write for the ear

- Use natural, direct sentence structures and concrete verbs.
- Prefer one main idea per sentence. Split sentences with several nested conditions.
- Define specialized terms in context rather than front-loading a glossary.
- Use signposting sparingly: “Here is the key difference,” “Now follow what happens,” or an equivalent phrase that genuinely helps orientation.
- Avoid academic padding, empty hype, fake intimacy, repeated rhetorical questions, and generic phrases such as “In today's fast-paced world.”
- Use contractions and conversational phrasing when appropriate to the requested voice and language.
- Read the explanation aloud at a natural pace. Repair awkward rhythms, breathless clauses, accidental tongue-twisters, and phrases that only make sense on the page. Do not generate or synthesize the final voiceover; the user will create it externally in ElevenLabs.
- Simplify pronunciation-sensitive names, acronyms, symbols, units, and terms when doing so preserves accuracy. If a pronunciation needs a note, place it outside the copy-ready narration and do not insert bracketed directions into the spoken text.

### 3.2 Make the explanation intellectually complete

For each central concept, answer the questions that apply:

- What is it?
- Why does it happen or matter?
- How does it work, step by step?
- What changes what, and under what conditions?
- What common interpretation is wrong or incomplete?
- Can the viewer test the model with an example?
- What is the boundary of the explanation?

Keep the narration conceptually complete: a viewer should be able to follow the core explanation from the audio alone. In Phase 2, diagrams and motion may make relationships, mechanisms, or changes easier to see, but they must not rescue a missing logical step, an unexplained premise, or information the voiceover never actually explains.

### 3.3 Build a strong opening without misleading

Within the opening beats, establish a specific question, tension, puzzle, counterintuitive result, or relatable consequence. The hook must be relevant to the eventual explanation and must be honestly paid off. Do not use a sensational claim that the rest of the video cannot support.

A practical opening can:

- Show an outcome before its mechanism is revealed.
- Ask the viewer to predict what will happen.
- Place two apparently incompatible results side by side.
- Visualize a hidden process behind an everyday experience.
- State a precise question the video will answer.

Skip elaborate channel idents unless the user explicitly needs one; they consume the most valuable explanatory time.

### 3.4 Script timing for a vertical short

Write for a natural, unhurried spoken duration (typically **40–65 seconds**, without any rigid 40-second cutoff). Approximately **90–140 words** is a starting guideline, not a hard limit. Ensure the narrative completes the full arc: hook $\to$ root mechanism $\to$ concrete actionable solution. Estimate with the actual language and voice in mind; a useful initial estimate for English may be 130–160 words per minute, but pauses, emotional emphasis, unfamiliar terms, and language-specific pacing can change the result.

- Read the complete explanation aloud and time it naturally. Keep the language comfortably speakable; do not solve a duration problem by forcing a breathless delivery.
- Start with a specific hook that leads directly into one central idea. Use only the supporting detail needed for comprehension, then close with a concrete, actionable solution or antidote.
- Cut repetition, generic claims, unnecessary preambles, side facts, and any sentence that does not help the central learning objective.
- Do not write estimated scene timestamps into the narration. Actual scene timing will be established later from the audio the user generates in ElevenLabs and supplies.
- If a topic cannot responsibly be explained in 40–65 seconds, narrow the scope to one defensible mechanism and its direct solution rather than cramming in unrelated details.

### 3.5 Phase 1 narration deliverable

Present one clean, complete narration as plain, easily copyable text. The narration itself must contain only words meant to be spoken. Do **not** include a title in the copy text unless it is intended to be spoken. Do not put in scene numbers, timestamps, headings, visual descriptions, stage directions, pronunciation annotations, [pause] cues, sound cues, citations, editing notes, or Markdown formatting that the narrator should not speak.

Before presenting it, you may keep a separate private/project note with the learning objective and source/claim IDs. If concise sources or a necessary caveat are useful to the user, put them clearly **outside** the copy-ready narration. Never let those notes interrupt the text the user will paste into ElevenLabs.

After presenting the explanation, give a brief handoff instruction to generate the narration in ElevenLabs and upload the resulting audio file. Then stop. Do not append a storyboard, visual prompt, scene plan, production code, or preliminary video work.

### Gate 3 — Voiceover handoff check

Before sending the text, verify that:

- The hook is compelling and honestly paid off.
- The explanation teaches one central idea and its underlying mechanism, not a list of loosely connected facts.
- The ending provides a clear, actionable solution or resolution to the problem discussed.
- Consequential claims are supported, qualified, or removed.
- The language sounds natural when read aloud and is understandable to the intended audience.
- It has a logical progression and a memorable, actionable conclusion.
- Its natural spoken duration is naturally paced (typically 40–65 seconds; approximately 90–140 words is a guideline only).
- The copy-ready block contains narration only, with all source notes or commentary kept separate.
- The agent is ready to stop and wait for the user-supplied ElevenLabs audio.

---

## Stage 4 — Audio intake, art direction, and visual storytelling

### 4.0 Mandatory audio intake gate — no visual work before this point

This stage is available only after the user has provided the ElevenLabs-generated voiceover file. If the audio has not been provided or cannot be accessed, ask for it and stop. Do not use a guessed duration, the script's estimated duration, placeholder TTS, or a different file as a substitute.

#### 4.0.1 Inspect and understand the supplied audio

1. **Identify and validate the file.** Confirm the actual path, file format, successful decoding, sample rate/channels where relevant, and whether the track contains only the intended narration. Preserve the original file unchanged; copy it into the project if needed rather than destructively editing the user's source.
2. **Measure actual duration.** Use available media metadata tooling (for example, `ffprobe`) and confirm by listening or decoding. Treat the measured duration as the authoritative runtime for the composition.
3. **Apply the runtime gate before visual production.** Pacing is natural (typically 40–65 seconds; there is no rigid 40-second cutoff). Inform the user of the exact measured runtime and build to that actual duration. Never silently cut, speed up, stretch, reorder, regenerate, or otherwise distort the narration to force it into an arbitrary range.
4. **Transcribe or align as needed.** If an exact transcript has not been provided, transcribe the audio or use an available speech-alignment tool, then listen-check important terms, numbers, names, clause boundaries, and punctuation. A transcript is an alignment aid, not permission to edit the voiceover.
5. **Create an audio map.** Record each utterance or meaningful phrase with start/end time (and frame once fps is confirmed), semantic purpose, stressed words, pauses, changes in tone, and any uncertainty in the alignment. Use waveform inspection as supporting evidence, not as a replacement for understanding the words.
6. **Lock narration.** Store the supplied source file and a verified transcript/alignment reference. This exact audio is the source of truth. Do not paraphrase, shorten, expand, reorder, replace, or regenerate any spoken content. If there is a serious pronunciation or recording defect, surface it to the user and request approval/replacement audio rather than concealing it by changing the narration.

#### 4.0.2 Inspect the production environment after audio is accepted

Only after the audio passes the runtime gate, inspect the repository and runtime before creating or changing files:

- Read `package.json`, the lockfile, existing Remotion entry points, composition IDs, shared components, asset folders, and project-specific instructions.
- Identify the installed Remotion version and installed packages. Match their APIs; do not upgrade dependencies or replace a working project structure without a clear reason.
- Reuse useful code, fonts, brand assets, rendering scripts, and assets already present. Check for conflicting styles/configuration before adding new ones.
- Determine whether audio analysis, waveform/transcript alignment, caption generation, asset access, rendering, and video inspection tools are available.
- Preserve unrelated project files and keep changes scoped to this video. If no project exists, create the smallest maintainable Remotion project that meets the specification.

### 4.1 Establish a custom visual system

Create `production/art-direction.md` before producing a large set of assets. Specify:

- **Visual thesis:** one sentence describing the visual world and its relationship to the topic.
- **Composition grammar:** grid, margins, alignment principles, foreground/background hierarchy, use of negative space, and standard diagram placement.
- **Typography:** primary typeface, optional secondary typeface, weights, scale steps, line-height, tracking rules, and usage roles.
- **Color logic:** background and surface colors plus semantic colors for categories or states. Define meaning consistently.
- **Shape and line language:** corner radius, stroke width, arrowhead form, line caps, diagram nodes, containers, texture, and illustration approach.
- **Motion grammar:** typical entry, reveal, emphasis, transition, and settling behavior.
- **Depth and atmosphere:** whether to use shadows, grain, gradients, lighting, blur, or parallax and why.
- **Audio identity:** narration, music, ambience, and sound-effect principles.

The design system should make different scenes feel related without making them indistinguishable. Use the subject itself to inspire visual motifs: flows for processes, layers for hierarchies, fields for spatial relationships, timelines for change, or contrasting geometries for competing models.

#### 4.1.1 The 20-Year Veteran Motion Designer Doctrine (Theme 09 Dynamic Styling, NOT a Template)

Never treat Theme 09 as a static 3-box card layout (e.g., headline container + white card with graph + insight box). That is a PowerPoint slide, not educational motion design. 

Instead, act as a **master visualizer with 20 years of experience creating motion graphics for a university professor**. Use the full 1080×1920 vertical canvas to draw characters, physical objects, and active mechanisms in React and SVG that **explain the lesson even on mute**.

##### 1. The Mute Test (Silent Comprehension Standard)
If the video is played on mute without audio or captions, a student watching the motion alone must still understand:
1. **Who the actors are** (the characters, molecules, forces, or entities).
2. **Where the tension or conflict lies** (what is cracking, tipping, colliding, or getting stuck).
3. **What the underlying mechanism is** (cause-and-effect relationship).
4. **How the problem resolves** (the antidote, balance restored, or mechanism unlocked).

If a scene relies solely on reading a text paragraph or looking at a static icon in a box, **it fails the Mute Test**.

##### 2. Deconstructing the Concept into Physical Entities & Forces
Before writing JSX, break down the core beat into physical metaphors:
- **Actors / Characters**: Who experiences the phenomenon? Draw expressive geometric SVG characters (pupil eye movements, body posture, gestures, tool use).
- **Physical Apparatus**: What real-world or mechanical apparatus illustrates the dynamic?
  - *Balances & Scales*: Tipping beams, weights dropping, counterbalances, fulcrums shifting.
  - *Pipes & Flow Circuits*: Fluids pumping, valves closing, blockages forming, leaks springing.
  - *Stress & Fracture*: Surfaces cracking under pressure, shock absorbers dampening blows.
  - *Testing Rigs*: Dials, meters, gauges sweeping into the red zone, needles vibrating.
  - *Shields & Bridges*: Protective canopies forming, barriers dropping, bridges extending between islands.
- **Dynamic Transformation**: Animate the transition between states. Show the crack propagating, the lever tilting, the characters uniting shoulder-to-shoulder, or the shield deflecting the incoming threat.

##### 3. How to Draw Shapes, Characters & Objects in React / SVG
In React, you have total creative freedom to render any vector geometry:
- **Geometric SVG Characters**: Combine `<circle>`, `<ellipse>`, `<path>`, `<rect>`, `<polygon>` into expressive vector puppets.
  - Animate pupil positions with `interpolate` or `spring` to make the character look at the danger, look at the partner, or look up in surprise.
  - Animate arm angles and body tilt to convey confidence, exhaustion, tiptoeing, or determination.
- **Physical Apparatuses**:
  - Draw custom paths with animated `strokeDashoffset` for wires, ropes, and progress trajectories.
  - Use SVG transforms (`transform={`rotate(${angle} ${pivotX} ${pivotY})`}`) to animate levers, see-saws, and pendulum swings.
  - Use SVG `<clipPath>` or masks to create animated reveals, liquid filling, or cutaway x-ray views.
- **Kinetic Physics**:
  - Apply Remotion `spring()` with intentional mass, damping, and stiffness so objects feel like they have physical inertia, weight, and recoil.
  - Show impact recoil: when an anvil drops, the ground compresses or shakes before settling.

##### 4. Theme 09 Aesthetic Skin (Punk Editorial & Risograph Zine)
Apply the Theme 09 visual world dynamically across the scene:
- **Canvas Base**: Tactile newsprint paper (`#EAE5DB`) with halftone dot texture (`radial-gradient(#C4BCAD 2px, transparent 2px)`).
- **Ink & Strokes**: Chunky, tactile pitch-black outlines (`stroke="#111111" strokeWidth="4-6" strokeLinecap="round" strokeLinejoin="round"`).
- **Risograph Spot Palette**:
  - `#FF0055` (Risograph Hot Pink): Energy spikes, alarms, active mechanisms, emotional intensity.
  - `#FFE600` (High-Voltage Neon Yellow): Kinetic highlights, insight tape, curiosity sparks.
  - `#00E5FF` (Electric Cyan): Calming counter-balance, safety fields, verified logic.
  - `#111111` (Pitch Black): Heavy editorial ink, structural bones, solid drop shadows.
  - `#FFFFFF` (Pure White): Crisp contrast cutouts, paper chips, teeth/eyes.
- **Tactile Depth**: Solid offset drop shadows (`10px 10px 0 #111111`), ripped paper edges, and sticker labels.
- **Zero Decorative Telemetry**: NO fake figure codes (`FIG. 4.0`), NO circuit telemetry headers, NO shape rows (`■ ● ▲`), NO badge soup.
- **Mobile Readability Floor**: Minimum **32px** on all labels, numbers, and tags. Headlines **80–110px**.
- **Safe Viewport**: Keep primary actors and mechanisms within YouTube Shorts safe bounds ($y = 160$px to $y = 1520$px, content max-width 850px). Elements can freely use the entire space without being boxed into identical cards.

#### 4.1.2 Mandatory YouTube Shorts UI Safe Zones (Zero-Overlap Guarantee)
Vertical video platforms (specifically YouTube Shorts) overlay heavy native interactive elements. All scenes and themes MUST enforce these exact boundary rules:
- **Top Safe Zone (Padding Top ≥ 160px)**: The top 160px is reserved for phone status bars (time, battery), and the YouTube Shorts camera/search/menu icons. No headlines or tags may start above `y = 160px`.
- **Bottom Safe Zone (Padding Bottom ≥ 400px / Content Ends at y ≤ 1520px)**: The bottom 400px of the screen (`y = 1520px` to `1920px`) is heavily occluded by native YouTube overlays:
  1. Channel avatar, `@channelname`, and `Subscribe` button (`y ≈ 1540–1660`)
  2. Video title and caption description lines (`y ≈ 1660–1780`)
  3. Audio track sound ticker with rotating vinyl disc (`y ≈ 1780–1860`)
  4. Video progress scrubber bar (`y ≈ 1880–1920`)
  **Critical Rule**: All diagrams, callout cards, analytical meters, subtitles, and explanatory copy MUST terminate cleanly at or above `y = 1520px`. Never position essential text or focal graphics below `y = 1520px`.
- **Right Action Rail Safe Zone (Right Margin ≥ 140px / Content Max-Width ≤ 850px)**: The right-hand column (`x = 930px` to `1080px`, from `y = 850px` to `1650px`) contains YouTube's vertical engagement stack (Like + count, Dislike, Comment + count, Share, Remix, Sound). Keep all text, diagram labels, and focal nodes strictly within `x ≤ 920px` (or centered with `maxWidth: 850px`).
- **Left Safe Zone (Margin ≥ 90px)**: Maintain clean typographic breathing room.

### 4.2 Typography and layout standards

For the default **1080 × 1920 vertical canvas**, enforce these strict readability rules validated for compact mobile screens (e.g. iPhone 15 base model):

- **Strict Font Size Floor**: **Minimum 32px everywhere on 1080×1920 canvas**. Never render text below 32px. Micro-text is invisible on mobile screens.
- **Main headline or key phrase**: typically 80–110 px (bold, punchy, high-contrast).
- **Subheads and prominent cards**: typically 44–56 px.
- **Core explanatory text**: typically 36–48 px.
- **Labels, annotations, and data marks**: strictly 32–38 px (never below 32px).
- **Anti-Clutter Guarantee**:
  - Eliminate top telemetry headers, decorative code bars (`FIG. 4.0`), and extra capsule pill badges.
  - Maintain **one clear primary focal point per beat**; secondary elements must be cleanly subordinate.
  - Use generous negative space. Do not cram multiple competing charts or widgets into one scene.
- **Enforce YouTube Shorts Safe Area**: Always honor `DESIGN_TOKENS.safeArea` (`top: 160, bottom: 400, left: 90, right: 140`). Never position text or actionable diagrams outside this inner viewport (ends at $y \le 1520\text{px}$).
- Prefer short lines and intentional line breaks. Stack related material in a clear vertical hierarchy, and avoid stretching short phrases across the full width without compositional reason.

Scale type proportionally for other resolutions; do not blindly reuse 1080p pixel sizes on a different canvas. Prioritize readability at actual playback size, not only at 100% zoom on a large monitor.

Rules:

- Establish one clear primary focus per beat, with secondary and tertiary levels visibly subordinate.
- Align related objects to a grid. Make irregularity feel intentional, not accidental.
- Use negative space to separate concepts and make important objects feel important.
- Do not place explanatory copy over a busy image unless a stable backing or strong contrast keeps it readable.
- Use no more than two type families by default. More are acceptable only when roles are clear and consistently applied.
- Check text for clipping, widow/orphan words, awkward wrapping, inconsistent spacing, and collisions with moving objects.
- Use optical balance, not only mathematical centering. Consider word shape, glyph density, line length, and visual weight.
- Use reliable local fonts where possible. Check that the font files are available to the renderer and that their licensing allows the intended use.

### 4.2.1 Native vertical composition and mobile readability

Design in 9:16 from the start; never build a landscape composition and crop it. The frame is tall, but viewer attention and usable space are limited. Establish a clear top-to-bottom hierarchy, one dominant focal point per beat, and a deliberate balance between visual explanation and negative space.

- Default output is **1080 × 1920, 9:16, 30 fps**. Match a user-specified delivery only when explicitly requested.
- Keep primary concepts away from likely interface overlays and controls. Avoid placing essential labels at the far right or captions at the bottom edge; test against the actual platform when the destination is known.
- Use a purposeful vertical layout: e.g. core object plus close-up, stacked comparison, top-to-bottom process, or a central mechanism with concise annotations. Do not fill every available pixel.
- Make the focal point legible at a glance. If the viewer has to inspect several small objects simultaneously, sequence the reveal or simplify the graphic.
- Keep key visual objects, labels, and motion paths within the composition at all frames, including when elements enter or exit. Do not solve a safe-area issue by shrinking every element until nothing has hierarchy.
- Preview reduced-size frames or a phone-size simulation. Text that looks large on a desktop monitor may be unreadable on a phone.

### 4.3 Color with semantic meaning

Color should encode something stable, not be applied randomly for excitement. For example, one color may consistently represent an input, another a transformation, and a third an outcome. Do not rely on color alone to communicate the difference; reinforce it with labels, shapes, position, or line style.

Check text and important edges against their backgrounds. Use adequate contrast, and examine grayscale or color-vision-deficiency simulations when color encodes critical meaning. Limit accent colors so the focal point remains obvious.

### 4.4 Choose a visual form that explains the concept

Select a form based on the information, not on which component is easiest to code:

| Conceptual job | Useful visual forms | What the viewer should be able to infer |
|---|---|---|
| Sequence or procedure | Step-by-step reveal, timeline, process path | What happens first, next, and why |
| Mechanism | Cutaway, layered system, moving parts, causal chain | Which parts interact and how change propagates |
| Comparison | Matched side-by-side views, aligned scales, controlled contrast | What is different and what is held constant |
| Hierarchy | Nested forms, branching tree, scale, spatial grouping | Which things contain, classify, or depend on others |
| Quantity or evidence | Directly labeled chart, scale, annotated distribution | What magnitude, pattern, uncertainty, or difference matters |
| Abstract idea | Physical metaphor, spatial field, carefully mapped symbols | How the abstract relation corresponds to a familiar model |
| Misconception | Incorrect model, visible failure, then corrected model | Why the initial intuition breaks down |
| Feedback or system behavior | Closed-loop diagram, repeated state changes, input/output paths | How the result feeds back into the cause |
| Historical change | Timeline, map progression, before/after comparison | What changed over time and what caused the shift |
| Decision or trade-off | Two or more consequences, constraint map, balance visualization | What must be traded off and under what conditions |

Custom diagrams should make relationships explicit: arrow direction, line weight, grouping, labels, sequence, and state must all communicate meaning. Do not use a complex chart where a simple comparison would teach better.

### 4.5 Use images and external assets selectively

Use external images, footage, icons, 3D renders, or screenshots only when they provide authenticity, concrete evidence, indispensable detail, or context that would be expensive or inaccurate to recreate.

- Prefer original React/CSS/SVG illustrations for explanatory structures that require exact timing, labels, or changing state.
- Use screenshots for actual interfaces or evidence; do not fabricate the appearance of a real interface or scientific instrument.
- Maintain a source and license note for downloaded assets. Confirm rights before using them in a commercial deliverable.
- Never use an irrelevant stock photo merely to fill space while narration explains an abstract relationship.
- If a necessary visual asset is unavailable, make a clear, well-designed original diagram or state the limitation. Do not imply an illustration is documentary evidence.

### 4.6 Turn every audio beat into a storyboard

Create `production/storyboard.md` or `production/scenes.json` with one entry per meaningful beat. The supplied audio and verified audio map are the timeline source of truth. Build scenes around semantic phrase boundaries and visual teaching needs—not a fixed scene count, arbitrary equal-length blocks, or the original script's estimated timings. Include:

| Field | Required detail |
|---|---|
| Scene ID | Stable identifier, e.g. `S04` |
| Time/frame range | Start/end time measured or aligned from the supplied audio, plus frame range |
| Narration | Exact spoken phrase from the verified transcript that drives the beat |
| Learning job | What this beat teaches or prepares |
| Visual thesis | One sentence stating the core image or transformation |
| Composition | Position, scale, framing, depth, negative space, focal point |
| Elements | Custom components, labels, diagram parts, data, or asset references |
| Motion | What changes, in what order, and why the change matters |
| On-screen text | Exact copy, hierarchy, and duration |
| Audio | Voice emphasis, sound cue, music change, or deliberate silence |
| Transition | How this scene enters, exits, or transforms into the next |
| Validation | The particular fact, number, alignment, or readability concern to check |

For every scene, explicitly answer:

- Which visual concept best communicates the exact phrase being spoken?
- Which word or phrase deserves emphasis, and what is the visual reason?
- When should each reveal begin/end relative to the actual voice, including a pause or vocal shift?
- When should viewer attention move from one element to another?
- Which information is clearer as a diagram, relationship, object, or transformation than as screen text?
- Does a pause, tonal change, or important revelation justify a transition—or should the visual hold still?
- What can the viewer see that they could not infer as clearly from the words alone?

Use on-screen text selectively for key phrases, essential terminology, numbers, concise comparisons, and memorable conclusions. Do **not** display every spoken word as a title. If captions are included, treat them as a separate accessibility layer: transcribe the actual audio, synchronize to its words, and keep captions readable and clear of the key visual and platform overlays. If the answer to the visual question is “nothing,” consider a deliberately simple scene or a quiet hold instead of adding decoration.

### 4.7 Minimum visual variety without formulaic scene cycling

Across the video, use the visual forms the topic actually needs. When appropriate, include more than one scale or representation: a real-world example, a system-level diagram, a close-up of a mechanism, and a concise synthesis.

Do not rotate through templates mechanically. Do not use the same centered title, three cards, floating icons, gradient background, and scale-up animation for every scene. Two adjacent scenes may use the same composition only if continuity aids understanding or the content genuinely calls for it.

### Gate 4 — Storyboard review

Before coding, review the storyboard without looking at the transcript. A reader should be able to infer the broad conceptual journey from the visual descriptions alone. Then compare it with the verified audio map to ensure every graphic serves the exact spoken beat and all scene boundaries match actual time. Check visual variety, selective text, mobile-size readability, platform-safe placement, and the logic of every transition. Redesign scenes where a visual is only an attractive backdrop or where a disconnected shot does not advance the explanation.

---

## Stage 5 — Build a precise timeline and implementation plan

### 5.1 Set composition parameters explicitly

Record the following in a central config or typed object:

- **Width 1080, height 1920, fps 30** by default; aspect ratio 9:16.
- Exact audio duration and total composition frames. Use `Math.ceil(audioDurationSeconds * fps)` for the composition length so frame rounding cannot end the video before the supplied audio; use `Math.round(seconds * fps)` for interior scene boundaries, then check alignment. A few milliseconds of visual tail after audio ends are preferable to truncating speech.
- Composition ID and expected output filename.
- The exact supplied voiceover asset path; audio start offset only if intentionally required.
- Scene start frames and durations.
- Caption source or subtitle track.
- Any user-facing variable props and defaults.

Use integer frames as the final timing unit. Convert seconds with `Math.round(seconds * fps)`, and check cumulative timing to avoid gaps, overlaps, and unintended one-frame flashes. Remember that a composition duration is measured in frames and ends at its last rendered frame; be deliberate about whether a frame range is inclusive or duration-based.

### 5.2 Create a scene manifest

Store scene timing and content metadata centrally when that improves maintainability. A small topic-specific project might use TypeScript instead of JSON for type safety. Avoid duplicating the same scene timing in unrelated components.

An example shape:

```ts
export type SceneSpec = {
  id: string;
  from: number; // parent-timeline start frame
  durationInFrames: number;
  component: React.ComponentType;
  purpose: string;
};
```

Use `<Sequence>` or another supported Remotion timeline primitive to isolate a scene's timing. Child components should work on their local frame when placed inside a `Sequence`. Confirm timing semantics against the installed Remotion version and test with an unmistakable frame counter during development if needed.

### 5.3 Suggested project organization

Adapt this to the existing project rather than treating it as a mandatory scaffold:

```text
src/
  index.ts
  Root.tsx
  compositions/
    ExplanationVideo.tsx
  scenes/
    S01_Hook.tsx
    S02_Context.tsx
    S03_Mechanism.tsx
  components/
    typography/
    diagrams/
    charts/
    transitions/
    captions/
  design/
    tokens.ts
    typography.ts
  data/
    scenes.ts
    claims.ts
public/
  fonts/
  audio/
    voiceover-original.<ext>
  images/
production/
  brief.md
  claims.md
  verified-transcript.md
  audio-map.md
  art-direction.md
  storyboard.md
  review-log.md
```

Use named, typed components with clear responsibilities. Separate design tokens, content data, and animation logic when it makes changes safer. Do not over-engineer a short video with a framework larger than the deliverable.

### 5.4 Reusable components: reuse behavior, customize composition

Good reusable primitives include titles, labels, callouts, arrows, node/edge diagrams, timeline markers, chart axes, captions, highlight masks, sound cue wrappers, and simple transitions.

A reusable component should expose meaningful props, have predictable defaults, and handle long text or missing optional fields safely. Avoid one giant component containing the entire video as nested conditions. Avoid turning every scene into a generic card layout just because a card component exists.

Keep topic-specific concepts in named components such as `FeedbackLoopDiagram` or `NeuronSignalPath` rather than burying their meaning inside anonymous CSS. A future agent should be able to change one scene without accidentally breaking another.

---

## Stage 6 — Remotion implementation standards

### 6.1 Core timing model

Use Remotion's frame-based model as the source of truth:

- `useCurrentFrame()` provides the current frame for deterministic visual calculation.
- `useVideoConfig()` provides the composition's fps, dimensions, and duration.
- `interpolate()` maps a frame or progress value to position, opacity, scale, color, path values, or other visual properties. Clamp extrapolation where the value should not continue beyond its range.
- `spring()` is useful for physical-feeling reveals and emphasis. Tune damping and mass intentionally; not every item should bounce.
- `<Sequence>` and related timeline primitives organize local timing. Their offsets and durations must align with the storyboard.
- Use SVG for crisp diagrams, lines, arrows, axes, masks, and custom vector illustration where appropriate. Use ordinary React/CSS for layout and typography.

Do not introduce a new animation library merely for a simple opacity or position tween. If adding a library for Lottie, path manipulation, 3D, or complex motion, verify that it is compatible with the installed Remotion version and server-side renderer.

A masterclass vector motion example demonstrating a character interacting with a physical tipping balance apparatus:

```tsx
import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const InteractiveBalanceApparatus: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // 1. Weight drops with heavy inertia
  const weightDrop = spring({
    frame: frame - 15,
    fps,
    config: {damping: 10, stiffness: 180, mass: 1.2},
  });
  const weightY = interpolate(weightDrop, [0, 1], [-200, 340]);

  // 2. Beam tilts in direct response to weight impact (Physical causality!)
  const beamAngle = interpolate(weightDrop, [0, 1], [0, -18]);

  // 3. Character reacts: shock posture, pupil eye tracking the falling weight
  const pupilTrackingX = interpolate(weightDrop, [0, 0.7, 1], [-12, -4, 8]);
  const characterArmAngle = interpolate(weightDrop, [0, 1], [0, -45]); // throws arms up

  return (
    <svg width="800" height="700" viewBox="0 0 800 700" style={{overflow: 'visible'}}>
      {/* Heavy Triangular Fulcrum Pivot */}
      <polygon points="400,460 360,540 440,540" fill="#111111" />
      <circle cx="400" cy="460" r="14" fill="#FFE600" stroke="#111111" strokeWidth="5" />

      {/* Dynamic Balancing Beam */}
      <g transform={`rotate(${beamAngle} 400 460)`}>
        {/* Main Timber Beam */}
        <rect x="120" y="448" width="560" height="24" rx="6" fill="#111111" />
        
        {/* Left Pan: Carries the Character */}
        <g transform="translate(180, 448)">
          <line x1="0" y1="0" x2="0" y2="40" stroke="#111111" strokeWidth="6" />
          {/* Geometric Expressive Puppet */}
          <g transform="translate(0, -120)">
            {/* Body */}
            <rect x="-24" y="30" width="48" height="70" rx="14" fill="#FF0055" stroke="#111111" strokeWidth="6" />
            {/* Head with Animatable Eye Tracking */}
            <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#111111" strokeWidth="6" />
            <circle cx={pupilTrackingX} cy="2" r="8" fill="#111111" />
            {/* Expressive Arm throwing up in panic */}
            <g transform={`rotate(${characterArmAngle} 24 40)`}>
              <line x1="0" y1="0" x2="30" y2="-20" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
            </g>
          </g>
        </g>

        {/* Right Pan: Receives Heavy Load */}
        <g transform="translate(620, 448)">
          <line x1="0" y1="0" x2="0" y2="40" stroke="#111111" strokeWidth="6" />
          <rect x="-50" y="40" width="100" height="12" fill="#111111" />
        </g>
      </g>

      {/* Heavy Dropping Block ("UNCHECKED DEMAND") */}
      <g transform={`translate(620, ${weightY})`}>
        <rect x="-45" y="-45" width="90" height="90" rx="8" fill="#FFE600" stroke="#111111" strokeWidth="6" />
        <text x="0" y="8" fill="#111111" fontSize="32" fontWeight="900" textAnchor="middle">
          DEMAND
        </text>
      </g>
    </svg>
  );
};
```

This pattern is illustrative: adapt types, styling, and APIs to the project. Do not blindly paste sample code without verifying imports and timing behavior against the installed version.

### 6.2 Deterministic animation is mandatory

Rendering can occur in parallel, with frames requested out of order. Each component should therefore produce the same image for the same frame and props. Specifically:

- Drive animation with `useCurrentFrame()` or deterministic values derived from it.
- Do not use CSS transitions, CSS keyframe animations, browser animation timers, `setInterval`, elapsed wall-clock time, or media playback events as the visual timeline.
- Do not depend on mutable module-level state or on a prior frame having rendered.
- Do not use unseeded `Math.random()`. If randomness adds value, use stable seeded pseudo-random values derived from a fixed seed and element ID.
- Avoid layout changes that depend on async network responses during render.
- Verify each frame can render independently and repeatedly without visual drift.

When asynchronous data or assets genuinely must load, use Remotion's documented delay/continue-render mechanism or the appropriate built-in media component. Prefer bundling stable local assets when possible.

### 6.3 Motion must communicate

For every animated property, identify its purpose:

- **Reveal:** make the next piece of information available at the moment it is explained.
- **Causal motion:** show how a change propagates through a system.
- **Comparison:** align or transform elements to expose what differs.
- **Emphasis:** temporarily increase contrast, scale, stroke, or isolation for the important item.
- **Orientation:** use a controlled pan, zoom, or transition to clarify spatial relationships.
- **State change:** make a before/after or an internal state visible.
- **Continuity:** transform one scene's object into the next scene's concept to preserve a mental link.

Motion without an explicit purpose is suspect. Remove a move that does not make the idea clearer, more readable, or more emotionally appropriate.

### 6.4 Timing and easing

Use a small motion vocabulary and tune it to content:

- Small label or caption entry: often 6–12 frames at 30 fps.
- Standard object or diagram reveal: often 10–20 frames.
- Major conceptual transformation: often 18–36 frames, with extra hold time for inspection.
- Large emotional transition or deliberate cinematic movement: duration as required by the scene, not by a fixed rule.

These are starting ranges, not requirements. A reveal must be fast enough not to obstruct the thought yet slow enough to follow. Dense diagrams often benefit more from sequential construction than from faster motion.

- Use restrained easing such as linear movement for data, steady progress indicators, or physical quantities where timing should read consistently.
- Use ease-in/ease-out for human-directed movement, entry, and transition.
- Use spring behavior for objects that should feel responsive, not for every label or panel.
- Avoid overshoot when position encodes precise data, alignment, or a scientific mechanism.
- Keep easing consistent for similar actions within one visual system.
- Do not animate every object independently. Group related movement and stagger only when sequence or hierarchy matters.

### 6.5 Transitions

A transition should preserve, reveal, compare, or intentionally break continuity. Favor transitions that grow out of the content: a diagram line extends into a timeline, a node becomes a close-up, a highlighted number expands into a chart, or a spatial move reveals another layer of the same model.

Use simple cuts when the next visual is a distinct thought. Avoid stacking blur, zoom, spin, shake, and wipe effects to disguise weak story structure. Do not use a preset transition solely because it is available in a package. Check support and API for the installed version before adopting `@remotion/transitions` or any additional dependency.

### 6.6 Depth, living animated background, and camera-like motion

Create depth intentionally with scale, overlap, light, contrast, shadow, blur, and controlled parallax. Depth should clarify layers and focus rather than make diagrams harder to parse. Keep labels in readable planes and avoid excessive perspective distortion of text or data.

**The Living Animated Background Architecture**:
Never leave the background as a static flat color or dead wallpaper. Build an environmental `<AnimatedBackground />` layer stack placed behind the scene sequences:
1. **Layer 0 (Atmospheric Hue & Vignette)**: Scene-by-scene color grading that mirrors emotional tension (warm beige curiosity → high-tension danger vignette on conflict → desaturated cool fog on anxiety → serene cyan glow on safety → golden dawn on resolution).
2. **Layer 1 (Narrative Kinetic Motifs)**: Story-reactive vectors that punctuate the action (elevation parallax lines, seismic impact shockwaves, anxiety micro-tremors, weather shield deflection, radial manga speed bursts, split comparison lab grids, rotating sunbursts).
3. **Layer 2 (Depth Micro-Particles)**: Floating dust motes and sparks calculated deterministically from frames.
4. **Layer 3 (Tactile 12 fps Risograph Grain Boil)**: Halftone dot grid and grain offset shifting at 12 fps (`Math.floor(frame / 2.5) % 4`), giving the animation a handcrafted zine feel without distracting from the foreground.

Always subordinate the background: maintain opacity between 0.15 and 0.40 so foreground characters, physical apparatuses, and captions always pop with high contrast. Avoid random, floating screen-wide drift that competes with focal mechanisms.

### 6.7 Charts and quantitative visuals

- Label chart axes, units, sample/population, and time range when those matter to interpretation.
- Use direct labels when a legend would force repeated eye travel.
- Start bar charts at zero unless there is a clear, disclosed reason not to; if a truncated scale is justified, make it visually explicit.
- Do not distort data with 3D perspective or decorative motion.
- Animate a data reveal in a way that preserves comparison: keep the scale fixed while bars or points appear, and don't let each new item silently change the viewer's reference.
- Show uncertainty when it is material. Do not imply precision beyond the source data.
- Verify every plotted value against the claim ledger.

### 6.8 Performance and code quality

- Prefer transform and opacity animation for simple motion; avoid repeated expensive filters or huge blurred layers on many elements.
- Avoid unnecessary DOM nodes and re-render work in complex scenes.
- Keep SVG path counts and filters reasonable, especially for full-screen animated illustrations.
- Cache or precompute static layout data when it is safe and deterministic.
- Ensure every external asset is local or reliably available at render time.
- Use descriptive names, TypeScript types, small components, and explicit constants.
- Remove unused code, unused assets, debug labels, frame counters, and temporary experiments before delivery.
- Do not trade legibility for optimization. Optimize only after identifying an actual rendering or reliability bottleneck.

### 6.9 Audio and asset synchronization

- Use Remotion's supported audio/video components and confirm that media loading is complete before frame capture.
- Keep filenames, audio offsets, and scene timing in a clear source of truth.
- The user-supplied ElevenLabs audio is authoritative. Use its measured duration, verified transcript/alignment, waveform, and listening checks to time every scene, important reveal, emphasis, and caption to the exact phrase that explains it.
- Keep the original audio unchanged. Do not use time-stretching, cuts, reordering, or regenerated narration to satisfy composition timing; if an actual recording fault requires a change, request user approval and replacement audio.
- Do not reveal a crucial diagram before it is verbally introduced unless the scene intentionally asks the viewer to predict what it means.
- Music and sound effects must not mask speech or distract from cognitive effort.
- Use brief sound effects to reinforce meaningful impacts, connections, state changes, or transitions—not every entrance.
- Avoid abrupt audio starts/ends, unexplained silence, clipping, and phase or channel problems.

### Gate 6 — Implementation check

The composition must open and play from the intended entry point; assets must load reliably; the timeline must match the storyboard; key animations must be deterministic; and the implementation must be understandable enough to revise. A successful preview is necessary but not sufficient.

---

## Stage 7 — Supplied narration, captions, and sound design

### 7.1 Preserve and mix the narration

The user-generated ElevenLabs file is the approved voiceover. Use it unchanged as the primary voice track; the visual phase must not become a second scriptwriting phase. The voice should guide attention and clarify meaning, not compete with the visuals. Read the supplied recording in context: note phrasing, emphasis, pauses, cadence, and pronunciation so visual timing can complement the performance.

Do not edit the script independently or regenerate the voiceover to patch a design/timing issue. If there is a materially wrong pronunciation, clipped word, recording defect, or mismatch that cannot be handled visually and ethically, tell the user and request an approved replacement audio file. Do not claim a synthetic voice was recorded by a human.

### 7.2 Caption rules

- Keep captions synchronized to the spoken words, not merely to scene boundaries.
- Use short, readable chunks. Avoid covering the primary diagram or placing captions where platform UI hides them.
- Keep position, font, line breaks, backing, and emphasis consistent. Use a separate caption visual style from labels when both appear.
- Prefer two lines or fewer at a time unless the language or format makes that impractical.
- Use emphasis sparingly for a key word or phrase; full-time karaoke coloring is not automatically helpful.
- Check punctuation, names, numbers, units, and technical vocabulary against the final audio.

If delivering captions separately, use a format supported by the workflow, such as SRT or WebVTT, with validated timings. Do not invent caption timestamps independently of final audio.

### 7.3 Music and effects

Select audio to support the intended emotional temperature. Music may create focus, curiosity, warmth, momentum, or reflection, but should not impose an unrelated emotion or use constant dramatic rises.

- Keep voice intelligibility primary.
- Duck music under narration where needed.
- Avoid repetitive whooshes and impacts as substitutes for purposeful animation.
- Use silence intentionally at moments where a result needs to land or the viewer needs time to inspect a visual.
- Confirm that all audio assets are licensed or supplied by the user.

As a general web-video starting point for stereo delivery, an integrated loudness around **−16 LUFS** and a true peak no higher than **−1 dBTP** can be used as a mix target, but follow the user's platform specification and check the final file. These are delivery guidelines, not a reason to normalize every source without listening.

---

## Stage 8 — Render workflow

### 8.1 Render in passes

Do not render the full-quality final first. Use staged validation:

1. **Layout proof:** still frames or a short preview for typography, composition, and diagrams.
2. **Motion proof:** render representative segments containing the most complicated animations, transitions, chart builds, and caption behavior.
3. **Timing proof:** watch the whole composition with narration or the intended audio timeline.
4. **Final render:** render at the requested dimensions, frame rate, codec, and quality only after proof renders pass.

Use the project's existing scripts whenever possible. Otherwise follow the installed Remotion CLI's current syntax. A typical command pattern is:

```bash
npx remotion render <entry-file> <composition-id> <output-file>
```

The actual entry file, composition ID, flags, codecs, concurrency settings, and output path must be verified in the project and against the installed Remotion version. Do not assume the placeholder command works unchanged in every repository.

### 8.2 Inspect frames systematically

Create a review pass that includes:

- The first frame and final frame.
- Every scene cut or transition boundary.
- The frame where each main text block is fully visible.
- The most visually dense scene.
- The most complex diagram and chart.
- Moments with overlapping text, moving labels, or multiple layers.
- Frames around audio-driven reveals and captions.
- A representative set of frames from every scene, not only the opening and ending.

Inspect both a contact sheet and motion at normal playback speed when tools permit. A contact sheet can reveal layout repetition and continuity issues; motion review reveals timing, pace, stutter, unreadable transitions, and over-animation. If only one review method is available, be explicit about the limitation and still inspect the entire timeline as thoroughly as possible.

### 8.3 Watch the whole export

Review the complete rendered video with audio. Do not assume representative frame checks reveal all issues. Listen for clipped words, bad pronunciations, level jumps, audio gaps, distracting sound effects, or mismatched emphasis. Watch for a visual appearing too early/late, captions leading or lagging, scenes ending mid-motion, unintended black frames, accidental holds, or an ending cut off before the concept lands.

If the video is long and full real-time review is impractical, inspect it in contiguous sections, ensuring no time range is omitted. Report any portion that could not be inspected.

### 8.4 Technical validation

Where tools are available, verify the final file with media metadata tooling such as `ffprobe` or an equivalent:

- Output exists and has non-zero size.
- Video stream is **1080 × 1920 (9:16)** by default, at the intended frame rate (30 fps unless approved otherwise), with the expected codec and measured duration.
- Audio stream contains the exact approved supplied narration and has the intended channels/sample rate.
- Video duration follows the accepted audio duration; check that no words are cut off and that audio/video duration aligns within the expected tolerance. Any intended final-frame rounding must not trim spoken content.
- The file decodes without errors or obvious corruption.
- Captions or sidecar files exist when promised.

Check for failed asset requests and render warnings. If a render flickers, inspect whether animation depends on render order or whether the renderer captures an asset before it has loaded. Fix the cause instead of hiding the problem by reducing concurrency unless the constrained workaround is explicitly accepted and documented.

### 8.5 Iteration discipline

Maintain `production/review-log.md` with issue, severity, timestamp/frame, root cause, fix, and recheck status. Triage issues in this order:

1. Incorrect or misleading explanation.
2. Missing, mistimed, or unreadable visual information.
3. Narration, audio, or caption problems.
4. Composition, hierarchy, typography, and visual consistency.
5. Motion quality, pacing, and transitions.
6. Minor decorative polish.

Fix root causes rather than patching symptoms. After a revision, re-render and re-inspect all affected sections; repeat a full continuity check after changes that affect timing, audio, dimensions, or shared components.

---

## Stage 9 — Evaluation rubric and release gate

Score each dimension from 1 to 5. Scores of 1 or 2 require revision. Do not compensate for an inaccurate explanation with beautiful graphics.

| Dimension | 1 — Fails | 3 — Adequate | 5 — Release quality |
|---|---|---|---|
| Accuracy and evidence | Unsupported or misleading claims | Main claims supported; minor caveats may be thin | Consequential claims traceable; uncertainty and limits handled precisely |
| Learning progression | Disjointed list of facts | Understandable sequence | Each beat prepares the next and leads to usable understanding |
| Clarity of narration | Difficult to follow or unnatural | Clear and reasonably speakable | Precise, natural, paced, and well matched to the audience |
| Explanatory visuals | Decorative or generic | Most concepts have useful visuals | Visuals reveal mechanisms, contrasts, scales, or causal relationships exceptionally well |
| Typography and hierarchy | Hard to read or cluttered | Readable and consistent | Deliberate hierarchy, excellent spacing, strong readability at playback size |
| Motion design | Random, repetitive, or distracting | Functional timing and transitions | Motion makes change and relationships easier to infer; timing feels intentional |
| Visual identity | Inconsistent or template-like | Coherent design language | Distinctive, subject-appropriate system with meaningful variation |
| Audio and captions | Unclear, altered without approval, or mismatched | Supplied narration preserved and generally synchronized | Narration remains intact; scene changes, emphasis, and accurate optional captions align to the actual recording |
| Audio-visual synchronization | Disconnected scenes or mistimed emphasis | Most visuals correspond to the spoken meaning | Each scene, reveal, hold, and transition is precisely motivated by the actual phrase, pause, and emphasis |
| Vertical/mobile composition | Landscape-cropped, cramped, or obscured by UI | Native vertical layout and mostly readable | Composed deliberately for 9:16; excellent hierarchy, safe placement, focal clarity, and phone-size readability |
| Technical integrity | Broken render, flicker, missing media | Plays with no major defects | Deterministic, correctly encoded, cleanly rendered, and reproducible |
| Editorial finish | Obvious leftovers or rushed ending | Usable final cut | No debug artefacts, awkward holds, arbitrary transitions, or unresolved details |

### Release criteria

Release only when all of the following are true:

- No known critical factual errors or materially misleading visuals remain.
- Each primary learning outcome is actually addressed.
- All important diagrams, labels, chart values, and captions have been checked.
- The opening promise is fulfilled by the end.
- The output is 9:16 at 1080 × 1920 by default, is composed natively for vertical mobile viewing, and keeps critical material clear of likely platform overlays.
- Text is readable at actual phone-size playback and safely composed within the frame.
- The supplied narration has not been altered; all visual timing is checked against the real audio, not estimated script time.
- There are no known missing assets, flashes, broken fonts, overlapping elements, render-order animation bugs, or unintended black frames.
- Final audio is intelligible and has no known clipping or abrupt cutoff.
- The actual exported file has been inspected, not merely the live preview.
- Any unmet criterion or unavailable check is disclosed in the handoff.

Target an overall score of **4 or higher** in every dimension. Any score below 4 must be accompanied by an explicit trade-off and justification; accuracy, comprehensibility, asset rights, and technical integrity are not negotiable trade-offs.

---

# Anti-patterns: do not ship these

## Writing and teaching failures

- A hook that promises an answer the video never gives.
- A sequence of facts without a causal or conceptual through-line.
- An explanation that names a mechanism but never shows how it works.
- An analogy presented as literal truth, with no boundary conditions.
- Unverified statistics, invented citations, or inflated claims about brain science.
- A script written for silent reading, with long nested sentences and no spoken rhythm.
- Excess detail that pushes the central learning outcome out of focus.
- Artificial suspense, repetitive summaries, and empty motivational phrasing.
- Delivering a long article, a bundle of unrelated facts, or diagnosing a problem without delivering the actionable solution or resolution.
- Embedding scene directions, timecodes, visual notes, source citations, or editing instructions inside the copy-ready voiceover text.
- Starting storyboard, asset creation, Remotion implementation, or rendering before the user supplies the ElevenLabs audio.
- Rewriting, reordering, shortening, expanding, or regenerating the approved narration during visual production.

## Visual failures

- Treating the design system as a rigid 3-box card template (`<HeadlineBox> + <WhiteCard> + <InsightBox>`) instead of drawing custom shapes, characters, and animated physical mechanisms.
- Failing the Mute Test: visuals that communicate nothing if the audio is on mute, forcing the viewer to rely on voiceover or read paragraphs of text to understand what is happening.
- Static, inert vector shapes that lack physical causality (no recoil on impact, no stress cracks under load, no balance tilt, no kinetic reaction).
- Endless text slides or paragraphs placed on moving backgrounds.
- Generic stock imagery that does not explain the spoken concept.
- Reusing the same layout for every scene regardless of information type.
- Decorative blobs, floating icons, glows, particles, or gradients that have no semantic purpose.
- Continuous parallax, pulsing, bouncing, or camera movement while the viewer is meant to study a diagram.
- Diagram arrows with ambiguous direction, labels far from their elements, or colors that change meaning between scenes.
- Tiny labels or micro-text below 32px (unreadable on compact mobile screens like iPhone 15), poor contrast, overlong on-screen sentences, top telemetry clutter (e.g. FIG 4.0 or circuit codes), badge soup, and text too close to the canvas edge or inside YouTube Shorts UI overlay zones.
- Designing a horizontal frame and cropping it to 9:16, or positioning essential content beneath likely platform controls.
- Using every spoken word as oversized on-screen text instead of choosing selective emphasis and purposeful captions.
- Visual scenes that are beautiful but semantically disconnected from the phrase currently being spoken.
- Showing too many new elements at once, or removing an element before the viewer has understood its role.
- A data visualization that looks impressive but hides scale, units, uncertainty, or the relevant comparison.

## Engineering failures

- Treating “it compiles” as evidence of a good video.
- Animating with CSS transitions or timers that behave differently during parallel rendering.
- Assuming asynchronous media has loaded before taking a frame.
- Relying on network assets that may change or disappear at render time.
- Hard-coding repeated timing values throughout many components without a dependable source of truth.
- Building a monolithic scene component that is difficult to revise.
- Adding dependencies without checking version compatibility and render behavior.
- Making final timing decisions solely from word count when real narration is available.
- Cutting or time-stretching the narration to force an arbitrary duration without user approval.
- Rendering with a guessed timeline rather than measuring the supplied audio.
- Rendering once and not watching the export.
- Silently calling an unrendered project or a partial preview a finished video.

---

# Handoff package

Deliverables depend on the phase actually completed. Do not imply Phase 2 work was done during Phase 1.

**Phase 1 handoff:** present the complete voiceover-ready explanation as plain text, with any useful source notes outside the narration, then ask the user to generate it in ElevenLabs and upload the resulting audio file. Stop at this boundary; do not deliver a storyboard or video yet.

**Phase 2 handoff:** deliver the final vertical video (1080 × 1920, 9:16, usually 30 fps) and the Remotion source changes needed to reproduce it. In addition, deliver complete **YouTube Publishing Metadata** saved to `production/metadata.json` and synced to `studio/metadata.json` (with fields: `topic`, `title` containing `#Shorts`, `description` with summary & structured hashtags, `tags` array, `categoryId` [27 or 28], `privacyStatus`, and `pinnedComment`), along with a synchronized caption sidecar file (`production/captions.srt` or `out/<video>.srt`). Include the verified transcript/audio map, storyboard, art direction, claim/source ledger where relevant. Document external asset/licensing notes and review status, including whether the export was inspected in full, any checks that were unavailable, and any known limitations.

The final response to the user should be brief and specific. State the output path(s) for the video, metadata, and captions, what is finished, and confirm that the video is ready for 1-click upload via PeerGraphics Localhost Studio (`./start_studio.sh`). Do not claim that a render, full playback review, source verification, or caption export happened unless it really did.

---

# Recommended project checks

Use project-specific tooling first. Common checks include:

```bash
# Inspect the repository's actual scripts before choosing commands
cat package.json

# Render using the entry point and composition ID confirmed in the project
npx remotion render <entry-file> <composition-id> <output-file>

# If available, inspect media metadata after rendering
ffprobe -v error -show_streams -show_format <output-file>
```

Replace placeholders with real values from the repository. Do not run commands blindly when the project defines safer or different scripts.

# Official technical references

Consult the current documentation matching the installed Remotion version; APIs and package capabilities can evolve.

- Remotion API overview: https://www.remotion.dev/docs/api
- Animation math (`interpolate`, `spring`, frame-driven movement): https://www.remotion.dev/docs/animation-math
- Timing and trimming: https://www.remotion.dev/docs/timing
- Parameterized rendering and metadata: https://www.remotion.dev/docs/parameterized-rendering
- Flickering and deterministic rendering: https://www.remotion.dev/docs/flickering
- Media and render APIs: https://www.remotion.dev/docs/api

Use official docs to verify exact CLI flags, media components, transition APIs, asset-loading behavior, and rendering configuration. When the installed package version and a current documentation page disagree, investigate the version history or the package's own type definitions before implementing a change.
