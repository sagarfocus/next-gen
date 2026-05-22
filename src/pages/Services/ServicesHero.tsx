import { Link } from 'react-router-dom';
import { AnimatedBackground } from '@/lib/motion';
import logoSrc from '../../assets/the-nextgen-logo.png';
import { ArrowIcon } from '@/components/icons';
import { ORBIT_PILLS, CAPABILITIES } from '@/content/services/hero';

const ServicesHero = () => {
  return (
    <section className="svc-hero" aria-labelledby="svc-title">
      <AnimatedBackground variant="aurora" intensity="subtle" />
      <div className="container-shell">
        <div className="svc-grid">
          {/* CENTER stage - title + CTAs */}
          <div className="svc-stage">
            <h1 id="svc-title" className="svc-h1 reveal d2">
              Healthcare
              <br />
              Marketing
              <br />
              <span className="word-accent">Services</span>
            </h1>

            <div className="svc-stage-cta reveal d3">
              <Link to="/growth-plan" className="svc-cta-primary">
                Get Your Growth Plan
                <span className="ico" aria-hidden="true">
                  <ArrowIcon size={14} />
                </span>
              </Link>

              <Link to="/case-studies" className="svc-cta-link">
                View Case Studies
                <span className="ico" aria-hidden="true">
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* ORBIT - premium 3D platform card + revolving pills (moved
              here from Home). Uses the same .ho-* classes as Home so all
              styling is shared. The outer .svc-orbit wrapper just gives
              it the right grid-column placement on this page. */}
          <div className="svc-orbit" aria-hidden="true">
            <div className="ho-stage">
              <div className="ho-ring ho-ring-1" />
              <div className="ho-ring ho-ring-2" />
              <div className="ho-ring ho-ring-3" />
              <div className="ho-ring-glow" />

              <span className="ho-mark m-tl" />
              <span className="ho-mark m-tr" />
              <span className="ho-mark m-bl" />
              <span className="ho-mark m-br" />

              {/* Central 3D platform card */}
              <div className="ho-core">
                <div className="ho-core-inner">
                  <div className="ho-core-mark">
                    <img src={logoSrc} alt="" />
                  </div>
                  <div className="ho-core-divider" />
                  <div className="ho-core-tag">
                    Healthcare
                    <br />
                    Growth OS
                  </div>
                </div>
              </div>

              {/* Ambient orbs */}
              <span className="ho-orb ho-orb-1" />
              <span className="ho-orb ho-orb-2" />
              <span className="ho-orb ho-orb-3" />
              <span className="ho-orb ho-orb-4" />
              <span className="ho-orb ho-orb-5" />

              {/* Revolving 3D pills */}
              {ORBIT_PILLS.map(({ slot, label, sub, icon }) => (
                <span key={slot} className={`ho-pill ${slot}`}>
                  <span className="ho-pill-ico">{icon}</span>
                  <span className="ho-pill-text">
                    <strong className="ho-pill-label">{label}</strong>
                    <span className="ho-pill-sub">{sub}</span>
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* BOTTOM - meta strip + sub paragraph */}
          <div className="svc-sub-row reveal d4">
            <div className="svc-meta">
              <span className="svc-meta-label">HIPAA-Compliant</span>
              <span className="bar" />
              <span className="svc-meta-label">Built for Texas</span>
            </div>
            <p className="svc-sub">
              We deploy a comprehensive, HIPAA-compliant marketing ecosystem designed to dominate
              local search, acquire high-acuity patients, and automate your front-desk operations
              across Texas.
            </p>
          </div>

          {/* CAPABILITY MARQUEE */}
          <div className="svc-bottom reveal d5">
            <span className="svc-bottom-label">Core Capabilities</span>
            <div className="svc-marquee" aria-label="Service capabilities">
              <div className="svc-marquee-track">
                {CAPABILITIES.map((cap) => (
                  <span key={cap} className="svc-marquee-item">
                    {cap}
                  </span>
                ))}
                {/* Duplicate for seamless loop */}
                {CAPABILITIES.map((cap) => (
                  <span key={`dup-${cap}`} className="svc-marquee-item" aria-hidden="true">
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
