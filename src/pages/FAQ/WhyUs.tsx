const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const WhyUs = () => {
  return (
    <section className="fp-why" id="why-us">
      <div className="container-shell">
        <div className="fp-why-head">
          <div className="fp-why-eyebrow">Built for clinics</div>
          <h2 className="fp-why-title">
            Tools built to simplify and empower your practice.
          </h2>
          <p className="fp-why-sub">
            Two systems that turn the loose ends of clinic marketing into a
            clean, compliant, measurable workflow.
          </p>
        </div>

        <div className="fp-why-grid">
          {/* TL: Image card — referrals mockup */}
          <div className="fp-card fp-card-img">
            <div className="fp-mock">
              <div className="fp-mock-dash">
                <div className="fp-mock-row">
                  <div className="fp-mock-avatar a1" />
                  <div className="fp-mock-text">
                    <div className="fp-mock-name">Bilash R.</div>
                    <div className="fp-mock-sub">New patient</div>
                  </div>
                  <div className="fp-mock-amt">+$23.46</div>
                </div>
                <span className="fp-mock-pill">Booked</span>
                <div className="fp-mock-row">
                  <div className="fp-mock-avatar a2" />
                  <div className="fp-mock-text">
                    <div className="fp-mock-name">Bishwajit A.</div>
                    <div className="fp-mock-sub">Returning</div>
                  </div>
                  <div className="fp-mock-amt green">+$25.45</div>
                </div>
                <span className="fp-mock-pill cta">Confirmed</span>
              </div>
            </div>
          </div>

          {/* TR: Text card */}
          <a className="fp-card fp-card-text" href="#feature-1">
            <span className="fp-tag">Patient flow</span>
            <h3 className="fp-card-title">
              Send appointment confirmations the moment a patient books.
            </h3>
            <p className="fp-card-desc">
              Our intake automation turns form submissions into EHR records
              and confirmation messages in under three seconds &mdash; no
              front desk lift, no PHI leakage.
            </p>
            <span className="fp-btn">
              Learn more
              <ArrowRight />
            </span>
          </a>

          {/* BL: Text card */}
          <a className="fp-card fp-card-text" href="#feature-2">
            <span className="fp-tag">Practice metrics</span>
            <h3 className="fp-card-title">
              Keep your numbers in check with one live dashboard.
            </h3>
            <p className="fp-card-desc">
              CPA, ROAS, no-show rate, and patient lifetime value &mdash;
              refreshed every fifteen minutes from your ad accounts, EHR, and
              analytics. One screen, no spreadsheets.
            </p>
            <span className="fp-btn">
              Learn more
              <ArrowRight />
            </span>
          </a>

          {/* BR: Image card — finance health mockup */}
          <div className="fp-card fp-card-img">
            <div className="fp-mock">
              <div className="fp-mock-health">
                <div className="fp-mock-banner">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  You earned $5,872.00
                </div>
                <div className="fp-mock-row headline">
                  <div className="fp-mock-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div className="fp-mock-text">
                    <div className="fp-mock-name">Practice Health</div>
                    <div className="fp-mock-sub">Recent update</div>
                  </div>
                </div>
                <div className="fp-mock-bignum">90%</div>
                <div className="fp-mock-caption">
                  Your practice is performing above benchmark.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
