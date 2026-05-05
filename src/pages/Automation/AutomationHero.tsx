import Breadcrumb from '../../components/Breadcrumb';

const AutomationHero = () => {
  return (
    <section className="au-hero" aria-labelledby="hero-title">
      <div className="container-shell">
        <Breadcrumb current="Automation" />
        <div className="au-hero-grid">
          <div className="reveal">
            <div className="eyebrow">
              <span className="pulse" />
              HIPAA-aware automation library
            </div>

            <h1 className="au-title" id="hero-title">
              Explore healthcare{' '}
              <span className="accent">automation</span> that resonates with
              every patient touchpoint
            </h1>

            <p className="au-lede">
              We&rsquo;ve packaged the workflows our agency uses internally
              &mdash; patient intake, reminders, reviews, insurance
              verification, AI chat, and more &mdash; into ready-to-import N8N
              templates. Free, plug-and-play, built for clinics.
            </p>

            <div className="au-cta-row">
              <a href="#templates" className="au-btn au-btn-primary au-btn-hero">
                Get the templates
                <svg
                  width={13}
                  height={13}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="/contact" className="au-btn au-btn-ghost au-btn-hero">
                Schedule a call
              </a>
            </div>

            <div className="au-trust">
              <span className="au-trust-label">Trusted by 350+ clinic teams</span>
              <div className="au-trust-logos" aria-label="Featured customers">
                <span>SunCrest&nbsp;Med</span>
                <span>NorthLake&nbsp;Dental</span>
                <span>VitalSpa</span>
              </div>
            </div>
          </div>

          <div className="au-hero-visual reveal d2" aria-hidden="true">
            <div className="h-blob" />

            <div className="h-card h-main">
              <div className="h-main-head">
                <div className="h-main-title">
                  <span className="dot" /> Intake Workflow · Active
                </div>
                <span className="h-main-tag">N8N</span>
              </div>
              <div className="h-flow">
                <div className="h-node">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 17l6-6 4 4 8-8" />
                    <polyline points="14 7 21 7 21 14" />
                  </svg>
                  Webhook
                </div>
                <div className="h-node">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  Verify
                </div>
                <div className="h-node">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  EHR
                </div>
                <div className="h-node">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22 6 12 13 2 6" />
                  </svg>
                  Email
                </div>
              </div>
              <div className="h-main-foot">
                <div className="h-foot-stat">
                  <strong>1,284</strong> <span>runs · 30d</span>
                </div>
                <span className="h-foot-cta">View workflow →</span>
              </div>
            </div>

            <div className="h-card h-notif">
              <div className="h-notif-head">
                <div className="h-notif-icon">
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div className="h-notif-title">Patient confirmed</div>
                  <div className="h-notif-time">2 min ago</div>
                </div>
              </div>
              <p>
                Sarah K. confirmed her 2:30 PM appointment via SMS. EHR record
                updated.
              </p>
            </div>

            <div className="h-card h-integ">
              <div className="h-integ-title">Connected to</div>
              <div className="h-integ-row">
                <span className="h-int gs">G</span>
                <span className="h-int tw">T</span>
                <span className="h-int gp">AI</span>
                <span className="h-int sl">S</span>
                <span className="h-int fb">f</span>
                <span className="more">+12</span>
              </div>
            </div>

            <div className="h-chip">
              <span className="c-dot" />
              8.4 hrs / week saved
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationHero;
