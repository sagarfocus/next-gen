import { STATS } from '@/content/pricing/roi-stats';

const AutomationROI = () => {
  return (
    <section className="pr-roi" aria-labelledby="pr-roi-title">
      <div className="container-shell">
        <div className="pr-roi-grid">
          <div className="pr-roi-text">
            <span className="pr-roi-eyebrow">Quantifying Automation ROI</span>
            <h2 id="pr-roi-title" className="pr-roi-h2">
              Our retainer pays for itself.
            </h2>
            <p>
              Don&rsquo;t evaluate just the cost of SEO or PPC - factor in
              the operational savings from our AI automation suite.{' '}
              <strong>
                Front-desk turnover, missed calls, manual insurance
                verification, intake transcription
              </strong>{' '}
              - our Clinic Growth OS eliminates these inefficiencies.
            </p>
            <p>
              By saving 15+ staff hours weekly and recovering tens of thousands
              in lost revenue from missed appointments, traditional SEO/PPC
              agencies become <strong>fundamentally obsolete</strong>.
            </p>
          </div>

          <div className="pr-roi-stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="pr-stat">
                <span className="pr-stat-icon" aria-hidden="true">
                  {stat.icon}
                </span>
                <div className="pr-stat-num">{stat.num}</div>
                <h3 className="pr-stat-label">{stat.label}</h3>
                <p className="pr-stat-text">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationROI;
