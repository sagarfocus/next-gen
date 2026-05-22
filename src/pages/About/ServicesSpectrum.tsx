import { PILLARS } from '@/content/about/services-spectrum';

const ServicesSpectrum = () => {
  return (
    <section className="ab-spectrum" aria-labelledby="ab-spec-title">
      <div className="container-shell">
        <div className="ab-spec-head">
          <span className="ab-spec-eyebrow">What We Do</span>
          <h2 id="ab-spec-title" className="ab-spec-h2">
            From digital patient acquisition to operational automation.
          </h2>
          <p className="ab-spec-sub">
            We cover every aspect of clinical growth - the full spectrum of healthcare marketing
            under one operating system.
          </p>
        </div>

        <div className="ab-spec-split">
          {PILLARS.map((pillar) => (
            <article key={pillar.tag} className="ab-spec-pillar">
              <div className="ab-spec-pillar-art" aria-hidden="true">
                {pillar.art}
              </div>
              <div className="ab-spec-pillar-head">
                <span className="ab-spec-pillar-icon" aria-hidden="true">
                  {pillar.icon}
                </span>
                <div>
                  <span className="ab-spec-pillar-tag">{pillar.tag}</span>
                  <h3 className="ab-spec-pillar-title">{pillar.title}</h3>
                </div>
              </div>
              <p className="ab-spec-pillar-text">{pillar.text}</p>

              <ul className="ab-spec-features">
                {pillar.features.map((f) => (
                  <li key={f.title} className="ab-spec-feature">
                    <span className="ab-spec-feature-icon" aria-hidden="true">
                      {f.icon}
                    </span>
                    <div className="ab-spec-feature-body">
                      <h4 className="ab-spec-feature-title">{f.title}</h4>
                      <p className="ab-spec-feature-desc">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="ab-spec-metric">
                <span className="ab-spec-metric-value">{pillar.metric.value}</span>
                <span className="ab-spec-metric-label">{pillar.metric.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSpectrum;
