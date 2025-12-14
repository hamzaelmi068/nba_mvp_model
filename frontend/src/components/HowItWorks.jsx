import React, { useRef } from 'react';
import { AnimatedBeam } from './ui/animated-beam';
import { cn } from '../lib/utils';

const Circle = ({ className, children, style }) => {
  return (
    <div
      className={cn('how-it-works-circle', className)}
      style={{
        zIndex: 10,
        display: 'flex',
        width: '48px',
        height: '48px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: '2px solid',
        backgroundColor: 'var(--bg-card)',
        padding: 'var(--space-sm)',
        boxShadow: '0 0 20px -12px rgba(0, 0, 0, 0.8)',
        ...style
      }}
    >
      {children}
    </div>
  );
};

const HowItWorks = () => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  return (
    <section className="how-it-works-section" style={{ marginTop: '60px', marginBottom: '60px' }}>
      <div className="glass-card" style={{ padding: 'var(--space-2xl) var(--space-xl)' }}>
        <h2 className="section-title" style={{ marginBottom: '10px', textAlign: 'center' }}>
          Inside the Black Box
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-tertiary)', marginBottom: '40px', maxWidth: '600px', marginInline: 'auto' }}>
          Our MVP prediction engine transforms raw game data into precise award probabilities through a multi-stage machine learning pipeline.
        </p>
        
        <div
          style={{
            position: 'relative',
            display: 'flex',
            height: '200px',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
          ref={containerRef}
        >
          <div style={{
            display: 'flex',
            width: '100%',
            maxWidth: '1000px',
            flexDirection: 'row', // Horizontal Flow
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            gap: 'var(--space-md)',
            position: 'relative',
            zIndex: 20
          }}>
            {/* Step 1: Raw Stats */}
            <div className="work-step">
              <Circle ref={div1Ref} style={{ borderColor: 'var(--accent-primary)', width: '60px', height: '60px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20V14" />
                </svg>
              </Circle>
              <div className="work-step-content">
                <div className="step-title">Raw Data</div>
                <div className="step-desc">Stats, Advanced Metrics, Team Performance</div>
              </div>
            </div>

            {/* Step 2: Feature Engineering */}
            <div className="work-step">
              <Circle ref={div2Ref} style={{ borderColor: 'var(--accent-secondary)', width: '60px', height: '60px' }}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </Circle>
              <div className="work-step-content">
                <div className="step-title">Processing</div>
                <div className="step-desc">Normalization, Trend Analysis, Weights</div>
              </div>
            </div>

            {/* Step 3: Ensemble Model */}
            <div className="work-step">
              <Circle ref={div3Ref} style={{ borderColor: 'var(--accent-success)', width: '70px', height: '70px', boxShadow: '0 0 30px rgba(16, 185, 129, 0.2)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <path d="M8.5 8.5v.01" /><path d="M16 12v.01" /><path d="M12 16v.01" />
                </svg>
              </Circle>
              <div className="work-step-content">
                <div className="step-title">AI Core</div>
                <div className="step-desc">Random Forest + XGBoost Ensemble</div>
              </div>
            </div>

            {/* Step 4: Prediction */}
            <div className="work-step">
              <Circle ref={div4Ref} style={{ borderColor: 'var(--accent-warning)', width: '60px', height: '60px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </Circle>
              <div className="work-step-content">
                <div className="step-title">Forecast</div>
                <div className="step-desc">MVP Share Probability Score</div>
              </div>
            </div>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div2Ref}
            duration={2}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div3Ref}
            duration={2}
            delay={0.2}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div4Ref}
            duration={2}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

