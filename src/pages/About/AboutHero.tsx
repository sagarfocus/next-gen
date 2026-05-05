const ORBIT_PILLS: { cls: string; label: string }[] = [
  { cls: 'p1', label: 'Patient Acquisition' },
  { cls: 'p2', label: 'HIPAA Compliance' },
  { cls: 'p3', label: 'Local SEO' },
  { cls: 'p4', label: 'Automation & AI' },
  { cls: 'p5', label: 'Reputation' },
  { cls: 'p6', label: 'Brand Strategy' },
];

const AboutHero = () => {
  return (
    <section className="ab-hero" aria-labelledby="ab-title">
      <div className="container-shell">
        <div className="ab-hero-grid">
          <div className="ab-hero-text">
            <span className="ab-hero-eyebrow reveal d1">
              About Our Healthcare Marketing Agency
            </span>
            <h1 id="ab-title" className="ab-hero-h1 reveal d2">
              The Clinical Growth{' '}
              <span className="accent">Operating System</span>.
            </h1>
            <p className="ab-hero-lede reveal d3">
              We are not a standard boutique firm. We are a{' '}
              <em>clinical growth operating system</em> bridging digital patient
              acquisition and front-desk operational capacity for healthcare
              providers across Texas.
            </p>

            <div className="ab-hero-trust reveal d4">
              <div className="ab-hero-trust-item">
                <span className="ab-hero-trust-item-num">
                  200<em>+</em>
                </span>
                <span className="ab-hero-trust-item-label">
                  Practices Served
                </span>
              </div>
              <div className="ab-hero-trust-item">
                <span className="ab-hero-trust-item-num">
                  $10M<em>+</em>
                </span>
                <span className="ab-hero-trust-item-label">
                  Ad Spend Managed
                </span>
              </div>
              <div className="ab-hero-trust-item">
                <span className="ab-hero-trust-item-num">
                  98<em>%</em>
                </span>
                <span className="ab-hero-trust-item-label">
                  HIPAA Audit Pass
                </span>
              </div>
            </div>
          </div>

          <div className="ab-hero-visual" aria-hidden="true">
            <div className="ab-hero-orbit">
              <div className="ab-hero-hub">
                <div>
                  <div className="ab-hero-hub-mark">N+</div>
                  <span className="ab-hero-hub-name">TheNextGen</span>
                  <span className="ab-hero-hub-tag">Healthcare</span>
                </div>
              </div>

              {ORBIT_PILLS.map((pill) => (
                <span key={pill.cls} className={`ab-orbit-pill ${pill.cls}`}>
                  <span className="dot" />
                  {pill.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
