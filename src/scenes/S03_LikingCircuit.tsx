import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BrainDiagram} from '../components/BrainDiagram';
import {DESIGN_TOKENS} from '../design/tokens';

export const S03_LikingCircuit: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: DESIGN_TOKENS.spring.default,
  });

  const pleasurePulse = 0.8 + 0.2 * Math.sin(frame * 0.15);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        padding: '110px 80px 40px 80px',
        opacity: entry,
        boxSizing: 'border-box',
        fontFamily: DESIGN_TOKENS.fonts.primary,
        color: '#121212',
      }}
    >
      {/* Top Header Banner */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '6px solid #121212',
            paddingBottom: 20,
          }}
        >
          <div style={{display: 'flex', gap: 12, alignItems: 'center'}}>
            <div style={{width: 24, height: 24, backgroundColor: '#1D3557'}} />
            <div style={{width: 24, height: 24, borderRadius: '50%', backgroundColor: '#1D3557'}} />
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderBottom: '24px solid #FFB703',
              }}
            />
            <span
              style={{
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: 2,
                marginLeft: 8,
                textTransform: 'uppercase',
              }}
            >
              CIRCUIT 01 // HEDONIC HOTSPOTS
            </span>
          </div>
          <span
            style={{
              fontSize: 20,
              fontWeight: 800,
              backgroundColor: '#121212',
              color: '#F3EFE6',
              padding: '6px 14px',
            }}
          >
            FIG. 3.0
          </span>
        </div>

        {/* Headline */}
        <div style={{marginTop: 28}}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: '#1D3557',
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            ANATOMICAL SUBSTRATE // OPIOIDS
          </div>
          <h1
            style={{
              fontSize: 70,
              fontWeight: 900,
              lineHeight: 1.05,
              margin: '12px 0 0 0',
              letterSpacing: -2,
              textTransform: 'uppercase',
            }}
          >
            LIKING IS DRIVEN BY{' '}
            <span
              style={{
                backgroundColor: '#1D3557',
                color: '#FFFFFF',
                padding: '2px 14px',
                display: 'inline-block',
                boxShadow: '6px 6px 0 #121212',
              }}
            >
              FRAGILE OPIOID HOTSPOTS
            </span>
          </h1>
        </div>
      </div>

      {/* Center Brain Schematic */}
      <div style={{margin: '14px auto 0 auto', display: 'flex', justifyContent: 'center'}}>
        <BrainDiagram mode="liking" scale={0.76} />
      </div>

      {/* Analytical Callout Card */}
      <div
        style={{
          width: '100%',
          maxWidth: 920,
          margin: '20px auto 0 auto',
          backgroundColor: '#FFFFFF',
          border: '6px solid #121212',
          boxShadow: '8px 8px 0 #121212',
          padding: '20px 24px',
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
          <span style={{fontSize: 20, fontWeight: 900, color: '#1D3557', textTransform: 'uppercase', letterSpacing: 1}}>
            HEDONIC ANATOMY // VOLUME: ~1 mm³
          </span>
          <span
            style={{
              backgroundColor: '#FFB703',
              color: '#121212',
              padding: '4px 12px',
              fontSize: 15,
              fontWeight: 900,
              border: '2px solid #121212',
            }}
          >
            NUCLEUS ACCUMBENS SHELL
          </span>
        </div>

        {/* Meter */}
        <div style={{marginBottom: 12}}>
          <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 17, fontWeight: 900, marginBottom: 6}}>
            <span>HEDONIC CAPACITY [JOY LEVEL]</span>
            <span style={{color: '#1D3557'}}>{Math.round(85 * pleasurePulse)}% ACTIVE</span>
          </div>
          <div
            style={{
              width: '100%',
              height: 20,
              backgroundColor: '#F3EFE6',
              border: '4px solid #121212',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${85 * pleasurePulse}%`,
                height: '100%',
                backgroundColor: '#1D3557',
              }}
            />
          </div>
        </div>

        <p style={{margin: 0, fontSize: 19, fontWeight: 700, color: '#121212', lineHeight: 1.35}}>
          Tiny cubic-millimeter islands in the ventral striatum that generate genuine contentment and sensory satisfaction.
        </p>
      </div>

      {/* Pinned Bottom Footer Banner */}
      <div
        style={{
          position: 'absolute',
          bottom: 50,
          left: 80,
          right: 80,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '4px solid #121212',
          paddingTop: 16,
        }}
      >
        <span style={{fontSize: 20, fontWeight: 900}}>PEERGRAPHICS // SWISS DESIGN SYSTEM</span>
        <span style={{fontSize: 18, fontWeight: 700, color: '#1D3557'}}>BERRIDGE & KRINGELBACH (2015)</span>
      </div>
    </div>
  );
};

