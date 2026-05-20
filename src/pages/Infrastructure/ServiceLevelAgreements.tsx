import { Link } from 'react-router-dom';

import heroImg from '../../assets/analytics and report.png';
import ctaImg from '../../assets/healthcareimg2.png';

/* ============================================================
   SERVICE LEVEL AGREEMENTS - Image-driven swiss redesign.
   Hero with monitoring image + gauge tiles, 4 severity cards,
   3-step escalation, monitoring grid, image CTA card.
   ============================================================ */

interface Tier {
  level: string;
  label: string;
  desc: string;
  ack: string;
  resolve: string;
  channel: string;
  tone: 'critical' | 'high' | 'standard' | 'low';
}

const TIERS: Tier[] = [
  {
    level: 'SEV-0',
    label: 'Critical',
    desc: 'Production down, security event, or PHI exposure suspected.',
    ack: '< 15 min',
    resolve: '< 4 hr',
    channel: 'Phone + pager',
    tone: 'critical',
  },
  {
    level: 'SEV-1',
    label: 'High',
    desc: 'Booking funnel broken, ad-spend pacing off, or analytics blind spot.',
    ack: '< 1 hr',
    resolve: '< 12 hr',
    channel: 'Slack + email',
    tone: 'high',
  },
  {
    level: 'SEV-2',
    label: 'Standard',
    desc: 'Performance regression, content correction, or scheduled change.',
    ack: '< 4 hr',
    resolve: '< 2 business days',
    channel: 'Slack thread',
    tone: 'standard',
  },
  {
    level: 'SEV-3',
    label: 'Low',
    desc: 'Nice-to-have, exploratory, or strategic question.',
    ack: '< 1 business day',
    resolve: 'Next sprint',
    channel: 'Email + weekly review',
    tone: 'low',
  },
];

interface Record {
  eyebrow: string;
  value: string;
  target: string;
  delta: 'up' | 'down' | 'flat';
  note: string;
}

const RECORDS: Record[] = [
  {
    eyebrow: 'Uptime',
    value: '99.94%',
    target: 'vs 99.9% target',
    delta: 'up',
    note: 'Across all four monitored domains, measured by external monitor.',
  },
  {
    eyebrow: 'SEV-0 Acknowledgement',
    value: '11 min',
    target: 'vs <15 min target',
    delta: 'down',
    note: 'Median acknowledgement time across all critical incidents.',
  },
  {
    eyebrow: 'SEV-0 Resolution',
    value: '2.8 hr',
    target: 'vs <4 hr target',
    delta: 'down',
    note: 'Median time from acknowledgement to incident closure.',
  },
  {
    eyebrow: 'Compliance Escalations',
    value: '0',
    target: 'held at zero',
    delta: 'flat',
    note: 'Incidents escalated to legal counsel or regulators.',
  },
];

interface FlowStep {
  num: string;
  label: string;
  title: string;
  body: string;
}

const ESCALATION: FlowStep[] = [
  {
    num: '01',
    label: 'Signal',
    title: 'Issue detected',
    body: 'Automated monitor, user report, or proactive scan flags an anomaly. A ticket opens with full context.',
  },
  {
    num: '02',
    label: 'Triage',
    title: 'Severity assigned',
    body: 'Account director triages within minutes, assigns SEV-0 through SEV-3, and routes to the owning specialist.',
  },
  {
    num: '03',
    label: 'Own',
    title: 'Specialist resolves',
    body: 'The named owner takes the work. Status updates ship on the channel agreed at signing - phone, Slack, or email.',
  },
  {
    num: '04',
    label: 'Close',
    title: 'Post-mortem',
    body: 'SEV-0 / SEV-1 incidents close with a written post-mortem indexed for the engagement. Patterns drive sprint priorities.',
  },
];

const Gauge = ({ pct, color }: { pct: number; color: string }) => {
  const radius = 30;
  const circ = 2 * Math.PI * radius;
  const dash = (pct / 100) * circ;
  return (
    <svg viewBox="0 0 76 76" width={76} height={76} aria-hidden="true">
      <circle cx="38" cy="38" r={radius} fill="none" stroke="#E2E8F0" strokeWidth="6" />
      <circle
        cx="38"
        cy="38"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 38 38)"
      />
    </svg>
  );
};

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ServiceLevelAgreements = () => {
  const SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Service Level Agreements - Healthcare Marketing',
    serviceType: 'Documented SLA & Response Time Commitment',
    audience: 'Multi-location healthcare practices, networks',
  };

  return (
    <main className="gt-page gt-page-x sla-page-x">
      {/* ─── HERO ─── */}
      <section className="gtx-hero">
        <div className="gt-shell">
          <nav className="gtx-crumb" aria-label="Breadcrumb">
            <Link to="/about">About</Link>
            <span aria-hidden="true">/</span>
            <span>Infrastructure</span>
            <span aria-hidden="true">/</span>
            <span className="cur">Service Level Agreements</span>
          </nav>

          <div className="gtx-hero-grid">
            <div className="gtx-hero-content">
              <span className="gtx-eyebrow">
                <span className="gtx-eyebrow-dot" aria-hidden="true" />
                Service Level Agreements
              </span>
              <h1 className="gtx-hero-title">
                Response time as a
                <em> measurable commitment.</em>
              </h1>
              <p className="gtx-hero-lede">
                Every engagement ships with a written SLA. Severity tiers,
                response targets, monitoring, and escalation paths - documented
                before the first dollar moves and held to weekly.
              </p>
              <div className="gtx-hero-ctas">
                <Link to="/contact" className="gtx-btn-primary">
                  Schedule SLA review
                  <ArrowRight />
                </Link>
                <Link to="/about" className="gtx-btn-link">
                  Back to Infrastructure →
                </Link>
              </div>
            </div>
            <div className="gtx-hero-visual">
              <img src={heroImg} alt="" loading="eager" decoding="async" />
              <div className="gtx-hero-visual-tag" aria-hidden="true">
                <span className="gtx-hero-visual-tag-num">24/7</span>
                <span className="gtx-hero-visual-tag-lbl">On-call monitoring</span>
              </div>
            </div>
          </div>

          {/* Gauge tiles row */}
          <div className="slax-gauge-row">
            <div className="slax-gauge-tile">
              <Gauge pct={96} color="#E1505C" />
              <div>
                <strong>&lt; 15 min</strong>
                <span>SEV-0 acknowledgement</span>
              </div>
            </div>
            <div className="slax-gauge-tile">
              <Gauge pct={99} color="#6FA86F" />
              <div>
                <strong>99.9%</strong>
                <span>Monitored uptime target</span>
              </div>
            </div>
            <div className="slax-gauge-tile">
              <Gauge pct={100} color="#576DB5" />
              <div>
                <strong>24 / 7</strong>
                <span>On-call coverage</span>
              </div>
            </div>
            <div className="slax-gauge-tile">
              <Gauge pct={92} color="#B38B6D" />
              <div>
                <strong>4 min</strong>
                <span>Avg dashboard refresh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEVERITY TIERS (4 cards, color-coded) ─── */}
      <section className="slax-tiers">
        <div className="gt-shell">
          <header className="gtx-sec-head">
            <span className="gtx-eyebrow">
              <span className="gtx-eyebrow-dot" aria-hidden="true" />
              Severity Tiers
            </span>
            <h2 className="gtx-sec-title">
              Four tiers. <em>Each one contractual.</em>
            </h2>
            <p className="gtx-sec-sub">
              Every inbound request is triaged to one of four tiers.
              Acknowledgement and resolution targets are written into the
              engagement, not assumed.
            </p>
          </header>

          <div className="slax-tier-grid">
            {TIERS.map((t) => (
              <article key={t.level} className={`slax-tier-card tone-${t.tone}`}>
                <div className="slax-tier-head">
                  <span className="slax-tier-level">{t.level}</span>
                  <span className="slax-tier-label">{t.label}</span>
                </div>
                <p className="slax-tier-desc">{t.desc}</p>
                <dl className="slax-tier-meta">
                  <div className="slax-tier-row">
                    <dt>Acknowledge</dt>
                    <dd className="slax-tier-num">{t.ack}</dd>
                  </div>
                  <div className="slax-tier-row">
                    <dt>Resolve</dt>
                    <dd className="slax-tier-num">{t.resolve}</dd>
                  </div>
                  <div className="slax-tier-row">
                    <dt>Channel</dt>
                    <dd>{t.channel}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ESCALATION FLOW (4-step card flow) ─── */}
      <section className="slax-escalation">
        <div className="gt-shell">
          <header className="gtx-sec-head">
            <span className="gtx-eyebrow">
              <span className="gtx-eyebrow-dot" aria-hidden="true" />
              Escalation Path
            </span>
            <h2 className="gtx-sec-title">
              From signal to <em>resolution, in four steps.</em>
            </h2>
            <p className="gtx-sec-sub">
              Every incident follows the same documented path. You always know
              which specialist owns the next move.
            </p>
          </header>

          <ol className="slax-flow">
            {ESCALATION.map((step, i) => (
              <li key={step.num} className="slax-flow-step">
                <div className="slax-flow-marker">
                  <span className="slax-flow-num">{step.num}</span>
                  {i < ESCALATION.length - 1 && (
                    <span className="slax-flow-connector" aria-hidden="true" />
                  )}
                </div>
                <div className="slax-flow-body">
                  <span className="slax-flow-label">{step.label}</span>
                  <h3 className="slax-flow-title">{step.title}</h3>
                  <p className="slax-flow-text">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── TRACK RECORD ─── */}
      <section className="slax-record">
        <div className="gt-shell">
          <header className="gtx-sec-head">
            <span className="gtx-eyebrow">
              <span className="gtx-eyebrow-dot" aria-hidden="true" />
              Track Record
            </span>
            <h2 className="gtx-sec-title">
              The numbers we <em>held to.</em>
            </h2>
            <p className="gtx-sec-sub">
              Trailing 12 months across the active book of healthcare
              engagements. Independently verified as part of our annual
              security review.
            </p>
          </header>

          <div className="slax-record-grid">
            {RECORDS.map((r, i) => (
              <article
                key={r.eyebrow}
                className={`slax-record-card ${i === 0 ? 'is-feature' : ''}`}
              >
                <span className="slax-record-eyebrow">{r.eyebrow}</span>
                <div className="slax-record-num">{r.value}</div>
                <div className={`slax-record-delta is-${r.delta}`}>
                  {r.delta === 'up' && <span aria-hidden="true">↑ </span>}
                  {r.delta === 'down' && <span aria-hidden="true">↓ </span>}
                  {r.target}
                </div>
                <p className="slax-record-note">{r.note}</p>
              </article>
            ))}
          </div>

          <p className="slax-record-footnote">
            Methodology: medians computed across all qualifying incidents in
            the trailing 12-month window. Uptime measured by independent
            third-party monitor. Zero compliance escalations covers all
            HIPAA-covered engagements.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="gtx-cta">
        <div className="gt-shell">
          <div className="gtx-cta-card">
            <div className="gtx-cta-card-img">
              <img src={ctaImg} alt="" loading="lazy" decoding="async" />
              <div className="gtx-cta-card-img-tag" aria-hidden="true">
                <span className="dot" /> SLA included in every engagement
              </div>
            </div>
            <div className="gtx-cta-card-body">
              <span className="gtx-eyebrow">
                <span className="gtx-eyebrow-dot" aria-hidden="true" />
                Next Step
              </span>
              <h2 className="gtx-cta-h">
                Want the SLA written into <em>your engagement?</em>
              </h2>
              <p>
                Every contract ships with these terms attached. Schedule a
                review and we'll walk through the redline with your legal team -
                line by line, before signing.
              </p>
              <Link to="/contact" className="gtx-btn-primary">
                Schedule SLA review
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    </main>
  );
};

export default ServiceLevelAgreements;
