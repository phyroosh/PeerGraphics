/**
 * Design Tokens for PeerGraphics
 * Default Visual System: Theme 9 (Editorial Collage & Risograph Punk Zine)
 * 
 * Mobile-First & YouTube Shorts Safe Rules:
 * - Top Safe Zone: >= 160px (clears mobile system status & YouTube top bar)
 * - Bottom Safe Zone: >= 400px (clears channel avatar, title, captions, sound ticker, scrubber)
 * - Right Margin: >= 140px (clears Like, Dislike, Comment, Share, Remix, Sound buttons)
 * - Left Margin: >= 90px
 * - Strict Mobile Typography: Minimum font size 32px anywhere on canvas (tested on iPhone 15 base)
 * - Anti-Clutter Rule: NO noisy top telemetry headers, NO fake figure labels (FIG. 4.0), NO extra capsule soup.
 */
export const DESIGN_TOKENS = {
  canvas: {
    width: 1080,
    height: 1920,
    fps: 30,
    durationInFrames: 1801,
  },
  safeArea: {
    top: 160,              // Clears top navigation & camera/search UI
    bottom: 400,           // Clears channel avatar, subscribe button, captions, sound title, seek bar
    left: 90,              // Clean left margin
    right: 140,            // Clears right action rail (Like, Comment, Share, Sound icon)
    contentMaxWidth: 850,  // Active content max width
    contentMaxHeight: 1360,// Total vertical safe height: y = 160 to y = 1520
  },
  // Default Visual System Identifier
  defaultTheme: 'Theme9_EditorialCollage',
  
  colors: {
    // Editorial Collage & Risograph Base Canvas & Surfaces
    bg: '#EAE5DB',              // Newsprint halftone warm paper
    surface: '#FFFFFF',         // Crisp white card cutout
    surfaceAlt: '#F4EFE6',      // Layered newsprint card
    border: '#111111',          // Heavy pitch black borders
    surfaceBorder: '#111111',   // Bold black card border
    bgGradientStart: '#EAE5DB',
    bgGradientEnd: '#DFD8CC',
    
    // High-Voltage Risograph Accents
    risographPink: '#FF0055',   // Primary energy, core tension, key callout
    highVoltageYellow: '#FFE600',// Highlight badge, insight header, contrast pill
    electricCyan: '#00E5FF',    // Secondary contrast, data node
    pureBlack: '#111111',       // High-contrast brutalist text & heavy shadows
    pureWhite: '#FFFFFF',       // Clean inverse text
    
    // Typography
    textPrimary: '#111111',     // Pitch black
    textSecondary: '#222222',   // High-contrast secondary
    textMuted: '#555555',       // Subordinate notes (still bold and legible)
    textInverse: '#FFFFFF',     // Clean white
    
    // Semantic mappings for scenes
    accentPrimary: '#FF0055',   // Risograph pink
    accentSecondary: '#FFE600', // Neon yellow
    accentBadge: '#FFE600',
    accentSky: '#00E5FF',
    likingEmerald: '#00E5FF',
    likingEmeraldGlow: 'rgba(0, 229, 255, 0.3)',
    likingEmeraldDark: '#008599',
    wantingAmber: '#FF0055',
    wantingAmberGlow: 'rgba(255, 0, 85, 0.3)',
    wantingAmberDark: '#B3003B',
    dangerRed: '#FF0055',
    dangerRedGlow: 'rgba(255, 0, 85, 0.35)',
    
    // Compatibility Palette Tokens
    matchaGreen: '#6E8B68',
    terracotta: '#BD6B53',
    slate: '#524E48',
    sand: '#8E857B',
    oatMilk: '#F9F6F0',
    pebble: '#E8DFD1',
  },
  radii: {
    card: 28,
    pill: 40,
    round: '50%',
    sm: 12,
    md: 20,
    lg: 32,
  },
  typography: {
    // Mobile legibility scales (calibrated for iPhone 15 base display)
    headline: 88,              // Primary impact headline (80px - 110px)
    subhead: 48,               // Secondary subtitle / take (42px - 54px)
    body: 38,                  // Core explanatory text (36px - 44px)
    minimum: 32,               // Absolute floor: NO text smaller than 32px anywhere
  },
  borders: {
    editorialStandard: '5px solid #111111',
    editorialHeavy: '8px solid #111111',
    editorialThin: '4px solid #111111',
  },
  shadows: {
    editorial: '10px 10px 0 #111111',
    editorialPink: '10px 10px 0 #FF0055',
    editorialLarge: '14px 14px 0 #111111',
    editorialYellow: '10px 10px 0 #FFE600',
    ambient: '0 8px 30px rgba(43, 41, 39, 0.05)',
    elevated: '0 16px 40px rgba(43, 41, 39, 0.08)',
  },
  fonts: {
    display: "'Arial Black', 'Impact', -apple-system, sans-serif",
    primary: "system-ui, -apple-system, 'Inter', 'Helvetica Neue', sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  spring: {
    default: {
      damping: 14,
      mass: 0.7,
      stiffness: 150,
    },
    snappy: {
      damping: 12,
      mass: 0.5,
      stiffness: 180,
    },
    gentle: {
      damping: 20,
      mass: 1.0,
      stiffness: 90,
    },
  },
};
