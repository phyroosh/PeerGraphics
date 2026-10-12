/**
 * Design Tokens for PeerGraphics
 * Default Visual System: Theme 3 (Swiss Bauhaus & Neo-Brutalist)
 */
export const DESIGN_TOKENS = {
  canvas: {
    width: 1080,
    height: 1920,
    fps: 30,
    durationInFrames: 1146,
  },
  safeArea: {
    top: 140,
    bottom: 280,
    left: 80,
    right: 80,
  },
  // Default Visual System Identifier
  defaultTheme: 'Theme3_SwissBauhaus',
  
  colors: {
    // Swiss Bauhaus & Neo-Brutalist Base Canvas & Cards
    bg: '#F3EFE6',              // Modernist warm off-white canvas
    surface: '#FFFFFF',         // Crisp white card surface
    surfaceAlt: '#F9F8F5',      // Subordinate card background
    border: '#121212',          // Heavy pitch-black brutalist borders
    surfaceBorder: '#121212',   // Brutalist card border
    bgGradientStart: '#F3EFE6',
    bgGradientEnd: '#EBE5D8',
    
    // Typography
    textPrimary: '#121212',     // Stark brutalist black
    textSecondary: '#333333',   // High-contrast secondary
    textMuted: '#666666',       // Muted annotations
    textInverse: '#FFFFFF',     // White on dark backgrounds
    
    // Swiss Bauhaus Primary Semantic Palette
    vermilionRed: '#E63946',    // Conflict, penalty, defect, focal point
    deepNavy: '#1D3557',        // Structure, baseline, cooperation
    cadmiumYellow: '#FFB703',   // Highlights, badges, equilibrium status
    
    // Legacy / Scene Semantic Compatibility Mappings
    accentSky: '#1D3557',
    likingEmerald: '#1D3557',
    likingEmeraldGlow: 'rgba(29, 53, 87, 0.25)',
    likingEmeraldDark: '#112238',
    wantingAmber: '#E63946',
    wantingAmberGlow: 'rgba(230, 57, 70, 0.25)',
    wantingAmberDark: '#9E1C26',
    dangerRed: '#E63946',
    dangerRedGlow: 'rgba(230, 57, 70, 0.3)',
    accentPrimary: '#E63946',
    accentSecondary: '#1D3557',
    accentBadge: '#FFB703',
  },
  borders: {
    brutalistStandard: '6px solid #121212',
    brutalistHeavy: '8px solid #121212',
    brutalistThin: '3px solid #121212',
  },
  shadows: {
    brutalist: '8px 8px 0 #121212',
    brutalistLarge: '12px 12px 0 #121212',
    brutalistDeep: '16px 16px 0 #121212',
  },
  fonts: {
    primary: "'Helvetica Neue', Helvetica, -apple-system, Arial, sans-serif",
    display: "'Helvetica Neue', Helvetica, -apple-system, Arial, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  spring: {
    default: {
      damping: 15,
      mass: 0.8,
      stiffness: 120,
    },
    snappy: {
      damping: 12,
      mass: 0.6,
      stiffness: 160,
    },
    gentle: {
      damping: 20,
      mass: 1.0,
      stiffness: 80,
    },
  },
};
