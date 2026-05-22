interface Stat {
  label: string;
  value: string;
  desc: string;
}

const STATS: Stat[] = [
  {
    label: 'Hours saved',
    value: '8+',
    desc: 'Front-desk hours reclaimed per week, per practitioner',
  },
  {
    label: 'No-show drop',
    value: '40%',
    desc: 'Average reduction in no-shows after enabling reminders',
  },
  {
    label: 'ROI / year',
    value: '12K',
    desc: 'Estimated annual savings per clinic location, in USD',
  },
];

const Dots = () => (
  <span className="ic-dots">
    <span />
    <span />
    <span />
  </span>
);

const ImpactBanner = () => {
  return (
    <section className="impact" aria-labelledby="impact-title">
      <div className="container-shell">
        <div className="impact-banner reveal">
          <div className="impact-visual">
            <div className="impact-3d">
              <div className="impact-card ic-back">
                <div className="ic-head">
                  <Dots />
                </div>
              </div>
              <div className="impact-card ic-mid">
                <div className="ic-head">
                  <Dots />
                  <span className="ic-tag">Live</span>
                </div>
                <div className="ic-flow">
                  <div className="ic-step">
                    <span className="ic-num">1</span>
                    Trigger received
                    <span className="ic-pulse" />
                  </div>
                  <div className="ic-step">
                    <span className="ic-num">2</span>
                    Verifying eligibility
                    <span className="ic-pulse" />
                  </div>
                  <div className="ic-step">
                    <span className="ic-num">3</span>
                    EHR record created
                  </div>
                  <div className="ic-step">
                    <span className="ic-num">4</span>
                    Confirmations sent
                  </div>
                </div>
              </div>
              <div className="impact-card ic-front">
                <div className="ic-head">
                  <Dots />
                  <span className="ic-tag">Reminder</span>
                </div>
                <div className="ic-flow">
                  <div className="ic-step">
                    <span className="ic-num">✓</span>
                    Patient confirmed
                  </div>
                  <div className="ic-step">
                    <span className="ic-num">✓</span>
                    Slack notified
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="impact-content">
            <div className="impact-eyebrow">Automation in action</div>
            <h2 className="impact-title" id="impact-title">
              The real impact of running healthcare workflows on autopilot
            </h2>
            <p className="impact-lede">
              Every template in our library has been battle-tested with live clinics. These are the
              average gains our partners report within the first 60 days of going live with our
              automation stack.
            </p>

            <div className="impact-stats">
              {STATS.map((stat) => (
                <div key={stat.label} className="impact-stat">
                  <div className="label">{stat.label}</div>
                  <div className="value">{stat.value}</div>
                  <div className="desc">{stat.desc}</div>
                </div>
              ))}
            </div>

            <div className="impact-foot">
              <span className="impact-badge">Saturday &amp; Sunday support included</span>
              <span className="impact-note">
                * Numbers reflect TheNextGen partner clinic averages and are exclusive of platform
                fees.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactBanner;
