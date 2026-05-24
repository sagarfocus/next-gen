import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const Hero = () => {
  return (
    <section className="mau-hero">
      <div className="container-shell">
        <div className="mau-hero-grid">
          <div>
            <div className="mau-hero-crumb">
              <Link to="/services">Services</Link>
              <span className="sep">/</span>
              <span className="cur">Medical Automation</span>
            </div>
            <span className="mau-hero-eyebrow">
              <span className="dot" /> HIPAA-aware · EHR-connected · BAA on every tool
            </span>
            <h1 className="mau-hero-title">
              Healthcare automation the <em>clinic actually runs on.</em>
            </h1>
            <p className="mau-hero-lede">
              Six workflows on one BAA-covered stack — patient intake, insurance verify,
              adaptive reminders, after-hours AI triage, review capture, recall. Wired into
              your EHR with audit-ready logs and a live dashboard your team can defend.
            </p>

            <div className="mau-hero-ctas">
              <Link to="/free-growth-audit" className="sl-btn-primary">
                Get my free workflow audit
                <ArrowIcon />
              </Link>
              <a href="#workflows" className="sl-btn-ghost">
                See the six workflows
                <svg
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
              </a>
            </div>

            <ul className="mau-hero-bullets">
              <li>
                <span className="mau-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                One workflow live in two weeks. All six in eight
              </li>
              <li>
                <span className="mau-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Athena, Epic, eClinicalWorks, Kareo, custom — connected via HL7/FHIR
              </li>
              <li>
                <span className="mau-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Audit-ready logs, redacted AI prompts, human-in-loop on every flow
              </li>
            </ul>
          </div>

          <div className="mau-hero-mock" aria-hidden="true">
            <div className="mau-hero-panel">
              <div className="mau-hero-panel-bar">
                <span className="mau-hero-panel-title">Workflow status — live</span>
                <span className="mau-hero-panel-meta">Updated 12s ago</span>
              </div>
              <div className="mau-hero-flow">
                <div className="mau-hero-flow-row active">
                  <span className="mau-hero-flow-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3v3h6V3" /><path d="m9 13 2 2 4-4" /></svg>
                  </span>
                  <div className="mau-hero-flow-body">
                    <span className="mau-hero-flow-name">Patient intake</span>
                    <span className="mau-hero-flow-sub">Form → EHR record</span>
                  </div>
                  <span className="mau-hero-flow-stat">87s</span>
                </div>
                <div className="mau-hero-flow-row">
                  <span className="mau-hero-flow-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" /><path d="m9 12 2 2 4-4" /></svg>
                  </span>
                  <div className="mau-hero-flow-body">
                    <span className="mau-hero-flow-name">Insurance verify</span>
                    <span className="mau-hero-flow-sub">Eligibility · copay</span>
                  </div>
                  <span className="mau-hero-flow-stat">Real-time</span>
                </div>
                <div className="mau-hero-flow-row">
                  <span className="mau-hero-flow-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M18 16V11a6 6 0 0 0-12 0v5l-2 2h16Z" /><path d="M10 20a2 2 0 0 0 4 0" /></svg>
                  </span>
                  <div className="mau-hero-flow-body">
                    <span className="mau-hero-flow-name">Adaptive reminder</span>
                    <span className="mau-hero-flow-sub">3-touch SMS ladder</span>
                  </div>
                  <span className="mau-hero-flow-stat muted">24h</span>
                </div>
                <div className="mau-hero-flow-row">
                  <span className="mau-hero-flow-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="9" cy="12" r="1.2" /><circle cx="15" cy="12" r="1.2" /><path d="M12 18v2" /></svg>
                  </span>
                  <div className="mau-hero-flow-body">
                    <span className="mau-hero-flow-name">AI triage</span>
                    <span className="mau-hero-flow-sub">After-hours routing</span>
                  </div>
                  <span className="mau-hero-flow-stat">24/7</span>
                </div>
              </div>
            </div>

            <div className="mau-hero-card c1">
              <span className="lbl">No-show drop</span>
              <span className="val">−54<em>%</em></span>
              <span className="dlt">vs. baseline</span>
            </div>

            <div className="mau-hero-card c2">
              <span className="lbl">Intake → EHR</span>
              <span className="val">87<em>s</em></span>
              <span className="dlt">Median</span>
            </div>

            <div className="mau-hero-tag t1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" /><polyline points="9 12 11 14 15 10" /></svg>
              HIPAA-aware
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
