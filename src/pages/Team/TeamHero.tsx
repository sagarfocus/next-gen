import { AnimatedBackground } from '../../lib/motion';

const TeamHero = () => {
  return (
    <section className="tm-hero">
      <AnimatedBackground variant="mesh" intensity="subtle" />
      <div className="container-shell">
        <div className="tm-hero-grid">
          <div>
            <div className="tm-hero-eyebrow">The People · 2026</div>
            <h1 className="tm-hero-h1">
              Specialists, <em>not</em> generalists.
            </h1>
          </div>
          <p className="tm-hero-lede">
            Nine practitioners. One healthcare-only growth team. Each owns a
            single craft - SEO, paid media, content, design, code -
            and we move in lock-step on every retainer.
          </p>
        </div>

        <div className="tm-hero-meta">
          <div className="tm-hero-meta-item">
            <div className="tm-hero-meta-num">09</div>
            <div className="tm-hero-meta-lbl">Practitioners</div>
          </div>
          <div className="tm-hero-meta-item">
            <div className="tm-hero-meta-num">100%</div>
            <div className="tm-hero-meta-lbl">In-house</div>
          </div>
          <div className="tm-hero-meta-item">
            <div className="tm-hero-meta-num">200+</div>
            <div className="tm-hero-meta-lbl">Clinics served</div>
          </div>
          <div className="tm-hero-meta-item">
            <div className="tm-hero-meta-num">Texas</div>
            <div className="tm-hero-meta-lbl">Headquartered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
