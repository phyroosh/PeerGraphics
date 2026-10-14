# 🎬 PeerGraphics

> **2D Animated Storytelling Studio & Remotion Motion Graphics Engine**  
> Create expressive, cinema-grade 2D animated stories with hierarchical vector puppets, procedural breathing/eye kinetics, multi-plane parallax depth environments, dynamic lighting, and synchronized audio narration using React and Remotion.

---

## ✨ Flagship Capabilities

### 1. 2D Animated Storytelling Pipeline (`2d-animation-storytelling`)
Transform any written narrative into a cohesive, living animated film across three strict phases:
- **Phase 1: Directorial Planning (`director-animation-planning` / `DirectorSKILL.md`)**:
  - Narrative tension mapping, frame-accurate shot breakdowns (`storyboard.md`).
  - Character bibles with 1:4.5 proportions, pivot points, and color tokens (`character-bible.md`).
  - Multi-plane depth blueprints and atmospheric lighting scripts (`moodboard.md`).
  - Cross-scene spatial geography and prop continuity ledgers (`continuity.md`).
- **Phase 2: Asset Creation & Vector Rigging (`asset-rigging-preparation` / `AssetsSKILL.md`)**:
  - Hierarchical SVG vector puppets (`Hips -> Torso -> [Neck -> Head] + [Arms -> Props]`).
  - Strict pivot origins (`transformOrigin`) preventing joint dislocations.
  - Multi-plane background plates across 4 optical parallax planes (Far Sky $Z=3.0$, Midground Forest $Z=1.8$, Ground $Z=1.0$, Foreground $Z=0.5$).
  - Atmospheric FX: procedural fireflies, volumetric light cones, and rising embers.
  - Structured production catalog (`production/assets-manifest.json`).
- **Phase 3: Animation & Staging in Remotion (`story-animation-production` / `AnimatorSKILL.md`)**:
  - **The "Idle Alive" Rule**: Procedural chest breathing (`Math.sin(frame * 0.08)`), involuntary blinks (`spring()`), and pupil gaze tracking.
  - **Anticipation & Recoil**: Spring kinematics on dramatic actions and focus changes.
  - **Optical Parallax Camera**: Dynamic multi-plane translations and subtle handheld drift.
  - **Atmospheric Lighting**: Dynamic warm/cool ambient color washes and volumetric light bloom.
  - **Glassmorphic Subtitles**: Safe-zone compliant narrative caption bars.

### 2. Educational Explanation Videos (`educational-explanation-video`)
- Legacy, opt-in infographic production only. Use it only when the user explicitly requests a risograph/editorial infographic or the `ExplanationVideo` composition. An educational topic without that request uses the cinematic 2D storytelling pipeline above.

### Default-generation contract

The canonical reference is `out/prototype_lantern_keeper.mp4`. New animations, including educational ones, use character-driven story staging with articulated puppets, multi-plane environments, atmospheric lighting, parallax, and living idle motion. The older `ExplanationVideo` / risograph system is retained solely for explicit legacy infographic requests. The enforceable agent instructions live in `AGENTS.md`.

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
bun install
# or
npm install
```

### 2. Launch Localhost YouTube Studio
```bash
./start_studio.sh
# or
npm run studio
```
Open **`http://localhost:4002`** in your browser.

---

## 📂 Project Structure

```text
PeerGraphics/
├── .agents/
│   └── skills/
│       ├── 2d-animation-storytelling/      # Master 3-phase production skill
│       ├── director-animation-planning/    # Phase 1: Directorial planning & blueprint
│       ├── asset-rigging-preparation/      # Phase 2: Vector rigging & depth planes
│       ├── story-animation-production/     # Phase 3: Remotion animation & camera
│       └── educational-explanation-video/  # Educational infographic skill
├── src/
│   ├── animation/                          # Reusable kinematics, camera, and subtitles
│   ├── characters/                         # Hierarchical React/SVG vector puppets (e.g. LeoPuppet)
│   ├── environments/                       # Multi-plane depth environments (e.g. WhisperingWoodsEnv)
│   ├── fx/                                 # Procedural particles, bloom, and volumetric lighting
│   ├── compositions/
│   │   ├── AnimatedStory.tsx               # Flagship 2D Story Engine
│   │   ├── LanternKeeperPrototype.tsx      # The Lantern Keeper reference production
│   │   └── ExplanationVideo.tsx            # Educational video composition
│   └── Root.tsx                            # Registered Remotion compositions
├── production/
│   ├── assets-manifest.json                # Rig & asset registry
│   └── prototype/                          # Directorial blueprints (storyboard, character-bible, etc.)
├── studio/                                 # Localhost YouTube Studio & Auto-Uploader
├── out/                                    # Rendered video outputs (.mp4) and stills (.png)
├── package.json                            # Scripts (render, render:story, render:prototype)
└── README.md
```

---

## 🔑 YouTube API Setup

1. Connect your channel with 1-click if you have `RightClips` on your computer by clicking **Sync RightClips**.
2. Or go to **Settings > Google Cloud Credentials** in the Studio and paste your `client_secrets.json` from the [Google Cloud Console](https://console.cloud.google.com/) (YouTube Data API v3 enabled).
3. Click **Connect Channel** to authorize via OAuth2.

---

## 📜 License
MIT
