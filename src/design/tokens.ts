export const DESIGN_TOKENS = {
  canvas: {
    width: 1080,
    height: 1920,
    fps: 30,
    durationInFrames: 1146, // Math.ceil(38.191 * 30) = 1146
  },
  safeArea: {
    top: 140,
    bottom: 280,
    left: 80,
    right: 80,
  },
  colors: {
    bg: '#070B14',
    bgGradientStart: '#0B1120',
    bgGradientEnd: '#05070D',
    surface: 'rgba(15, 23, 42, 0.75)',
    surfaceBorder: 'rgba(255, 255, 255, 0.1)',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textMuted: '#64748B',
    accentSky: '#38BDF8',
    
    // Semantic System A: LIKING (Pleasure / Opioids)
    likingEmerald: '#10B981',
    likingEmeraldGlow: 'rgba(16, 185, 129, 0.45)',
    likingEmeraldDark: '#064E3B',
    
    // Semantic System B: WANTING (Craving / Dopamine)
    wantingAmber: '#F97316',
    wantingAmberGlow: 'rgba(249, 115, 22, 0.5)',
    wantingAmberDark: '#7C2D12',
    
    // Conflict / Warning / Hate
    dangerRed: '#EF4444',
    dangerRedGlow: 'rgba(239, 68, 68, 0.4)',
  },
  fonts: {
    primary: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
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
