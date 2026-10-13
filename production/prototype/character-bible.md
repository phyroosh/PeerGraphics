# Character Bible: Leo the Lantern Keeper

## 1. Visual Identity & Archetype
- **Name**: Leo
- **Role**: Young curious cartographer / woods explorer.
- **Silhouette**: Slender build with a high-collared traveler's coat and a flowing wool scarf that catches environmental wind. Round inquisitive spectacles and tousled dark auburn hair.
- **Proportion Ratio**: 1:4.5 stylized illustrated storybook proportions (expressive enlarged head and hands for emotional clarity, grounded anatomy for natural movement).

## 2. Master Color Tokens
- **Skin Tone**: `#FCEEE3` (Soft warm porcelain)
- **Skin Shadow / Blush**: `#EABF9F` / `#F0A58F`
- **Hair**: `#2D1E18` (Dark espresso brown with auburn highlights)
- **Spectacles Frame**: `#D4AF37` (Antique brass)
- **Traveler Coat**: `#1E2A38` (Midnight slate blue)
- **Coat Trim & Collar**: `#2C3E50`
- **Wool Scarf**: `#C0392B` (Rich crimson red - primary focal accent)
- **Trousers**: `#34495E` (Dark charcoal denim)
- **Boots**: `#4A3525` (Sturdy leather brown)
- **Eyes (Pupils / Iris)**: `#1A252F` / `#34495E`

## 3. Anatomical Pivot Specifications
- **Head Pivot**: Center bottom of jaw `(x: 200, y: 155)` on 400×600 coordinate grid. Rotates $-10^\circ \to +15^\circ$.
- **Neck & Chest**: Hips-to-shoulders spine. Moves vertically $\pm 4\text{px}$ on breathing cycle.
- **Arms (Right Lantern Hand)**:
  - Shoulder: `(x: 250, y: 175)`.
  - Elbow: `(x: 275, y: 240)`.
  - Wrist: `(x: 290, y: 310)`.
- **Eyes**:
  - Independent eyeball containers. Sclera with responsive pupil tracking:
    - Gaze Left: $x = -4\text{px}$
    - Gaze Center: $x = 0\text{px}$
    - Gaze Right: $x = +4\text{px}$
    - Blink: Top eyelid scales down to $1.0$, obscuring pupil.
- **Mouth**:
  - `rest`: Small thoughtful curve.
  - `gasp_wonder`: Open rounded oval showing warm depth.
  - `smile`: Upturned gentle curve.

## 4. Emotional Expression States
1. **Cautious Contemplation (Shot 1)**: Eyes narrowed slightly, eyebrows level with gentle furrow, lips together, head tilted slightly down.
2. **Astonished Revelation (Shot 2)**: Eyes wide and round, eyebrows arched upward, mouth parted in quiet awe, shoulders raised slightly.
