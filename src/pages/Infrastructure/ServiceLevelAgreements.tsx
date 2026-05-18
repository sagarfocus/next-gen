import { Link } from 'react-router-dom';

/* ============================================================
   SERVICE LEVEL AGREEMENTS — Swiss scoreboard / dashboard.
   Big metric tiles, branching escalation-path tree, severity
   ladder. Blue accent. Measurement-grade aesthetic.
   ============================================================ */

interface Tier {
  level: string;
  label: string;
  desc: string;
  ack: string;
  resolve: string;
  channel: string;
}

const TIERS: Tier[] = [
  {
    level: 'SEV-0',
    label: 'Critical',
    desc: 'Production system down, security event, or PHI exposure suspected.',
    ack: '< 15 min',
    resolve: '< 4 hr',
    channel: 'Phone + on-call pager',
  },
  {
    level: 'SEV-1',
    label: 'High',
    desc: 'Booking funnel broken, ad-spend pacing off, or analytics blind spot.',
    ack: '< 1 hr',
    resolve: '< 12 hr',
    channel: 'Slack + email',
  },
  {
    level: 'SEV-2',
    label: 'Standard',
    desc: 'Performance regression, content correction, or scheduled change request.',
    ack: '< 4 hr',
    resolve: '< 2 business days',
    channel: 'Slack thread',
  },
  {
    level: 'SEV-3',
    label: 'Low',
    desc: 'Nice-to-have, exploratory, or longer-form strategic question.',
    ack: '< 1 business day',
    resolve: 'Next sprint',
    channel: 'Email + weekly review',
  },
];

interface Monitor {
  domain: string;
  target: string;
  current: string;
}

const MONITORS: Monitor[] = [
  { domain: 'Website uptime', target: '99.9%', current: '99.98%' },
  { domain: 'Ad-platform sync', target: '99.5%', current: '99.81%' },
  { domain: 'Conversion API', target: '99.5%', current: '99.92%' },
  { domain: 'Dashboard refresh', target: '< 15 min', current: '4 min avg' },
];

const Gauge = ({ pct, color }: { pct: number; color: string }) => {
  const radius = 32;
  const circ = 2 * Math.PI * radius;
  const dash = (pct / 100) * circ;
  return (
    <svg viewBox="0 0 80 80" width={80} height={80} aria-hidden="true">
      <circle cx="40" cy="40" r={radius} fill="none" stroke="#E2E8F0" strokeWidth="6" />
      <circle
        cx="40"
        cy="40"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 40 40)"
      />
    </svg>
  );
};

const EscalationTree = () => (
  <svg
    viewBox="0 0 760 320"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="sla-tree-svg"
  >
    {/* Trunk + branches */}
    <g stroke="#576DB5" strokeWidth="1.4" fill="none" strokeLinecap="round">
      <line x1="40" y1="160" x2="160" y2="160" />
      <line x1="160" y1="160" x2="160" y2="56" />
      <line x1="160" y1="160" x2="160" y2="160" />
      <line x1="160" y1="160" x2="160" y2="264" />
      <line x1="160" y1="56" x2="320" y2="56" />
      <line x1="160" y1="160" x2="320" y2="160" />
      <line x1="160" y1="264" x2="320" y2="264" />
      {/* sub-branches */}
      <line x1="480" y1="56" x2="320" y2="56" />
      <line x1="480" y1="56" x2="480" y2="32" />
      <line x1="480" y1="56" x2="480" y2="80" />
      <line x1="480" y1="32" x2="640" y2="32" />
      <line x1="480" y1="80" x2="640" y2="80" />

      <line x1="480" y1="160" x2="320" y2="160" />
      <line x1="480" y1="160" x2="640" y2="160" />

      <line x1="480" y1="264" x2="320" y2="264" />
      <line x1="480" y1="264" x2="640" y2="264" />
    </g>

    {/* Trigger */}
    <g>
      <rect x="6" y="142" width="124" height="36" rx="3" fill="#fff" stroke="#1A2438" strokeWidth="1.4" />
      <text x="68" y="158" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="800" letterSpacing="2" fill="#718096" textAnchor="middle">SIGNAL</text>
      <text x="68" y="172" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1A2438" textAnchor="middle">Issue detected</text>
    </g>

    {/* Severity router */}
    <g>
      <rect x="124" y="142" width="74" height="36" rx="3" fill="#576DB5" />
      <text x="161" y="166" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">Triage</text>
    </g>

    {/* Three branches */}
    {[
      { y: 56, label: 'SEV-0', tone: '#576DB5' },
      { y: 160, label: 'SEV-1', tone: '#7F8FB8' },
      { y: 264, label: 'SEV-2/3', tone: '#A0AEC0' },
    ].map((b) => (
      <g key={b.label}>
        <rect x="230" y={b.y - 16} width="100" height="32" rx="3" fill="#fff" stroke={b.tone} strokeWidth="1.4" />
        <text x="280" y={b.y + 4} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill={b.tone} textAnchor="middle">{b.label}</text>
      </g>
    ))}

    {/* Leaves */}
    {[
      { x: 540, y: 32, t: 'Account Director' },
      { x: 540, y: 80, t: 'Security On-call' },
      { x: 540, y: 160, t: 'Owning Specialist' },
      { x: 540, y: 264, t: 'Sprint Backlog' },
    ].map((l) => (
      <g key={l.t}>
        <rect x={l.x - 60} y={l.y - 14} width="200" height="28" rx="3" fill="#EEF1F8" stroke="#C7D2EA" strokeWidth="1" />
        <text x={l.x + 40} y={l.y + 4} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="600" fill="#1A2438" textAnchor="middle">{l.t}</text>
      </g>
    ))}

    {/* Labels */}
    <text x="12" y="20" fontFamily="ui-monospace, Menlo" fontSize="9" letterSpacing="2" fill="#A0AEC0">FIG. C · ESCALATION PATHS</text>
  </svg>
);

const ServiceLevelAgreements = () => {
  const SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Service Level Agreements — Healthcare Marketing',
    serviceType: 'Documented SLA & Response Time Commitment',
    audience: 'Multi-location healthcare practices, networks',
  };

  return (
    <main className="sla-page">
      {/* Hero / scoreboard */}
      <section className="sla-hero">
        <div className="sla-shell">
          <nav className="sla-crumb" aria-label="Breadcrumb">
            <Link to="/about">About</Link>
            <span aria-hidden="true">·</span>
            <span>Infrastructure</span>
            <span aria-hidden="true">·</span>
            <span className="cur">Service Level Agreements</span>
          </nav>

          <div className="sla-hero-grid">
            <div className="sla-hero-copy">
              <span className="sla-eyebrow">03 · Service Level Agreements</span>
              <h1 className="sla-h1">Response time as a measurable commitment.</h1>
              <p className="sla-lede">
                Every engagement ships with a written SLA. Severity tiers, response
                targets, monitoring, and escalation paths — documented before the
                first dollar moves.
              </p>
            </div>

            <div className="sla-hero-tiles" aria-hidden="true">
              <div className="sla-tile">
                <Gauge pct={96} color="#576DB5" />
                <div>
                  <strong>&lt; 15 min</strong>
                  <span>SEV-0 acknowledgement</span>
                </div>
              </div>
              <div className="sla-tile">
                <Gauge pct={99} color="#6FA86F" />
                <div>
                  <strong>99.9%</strong>
                  <span>Monitored uptime target</span>
                </div>
              </div>
              <div className="sla-tile">
                <Gauge pct={100} color="#B38B6D" />
                <div>
                  <strong>24 / 7</strong>
                  <span>On-call coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Severity ladder */}
      <section className="sla-tiers">
        <div className="sla-shell">
          <div className="sla-section-head">
            <span className="sla-section-num">A</span>
            <h2 className="sla-section-h2">Severity tiers.</h2>
            <p className="sla-section-sub">Every inbound request is triaged to one of four tiers. Acknowledgement and resolution targets are contractual.</p>
          </div>

          <table className="sla-table" aria-label="SLA severity tiers">
            <thead>
              <tr>
                <th scope="col">Tier</th>
                <th scope="col">Definition</th>
                <th scope="col">Acknowledge</th>
                <th scope="col">Resolve</th>
                <th scope="col">Channel</th>
              </tr>
            </thead>
            <tbody>
              {TIERS.map((t) => (
                <tr key={t.level}>
                  <th scope="row">
                    <span className="sla-tier-level">{t.level}</span>
                    <span className="sla-tier-label">{t.label}</span>
                  </th>
                  <td>{t.desc}</td>
                  <td className="sla-num">{t.ack}</td>
                  <td className="sla-num">{t.resolve}</td>
                  <td>{t.channel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Escalation tree */}
      <section className="sla-paths">
        <div className="sla-shell">
          <div className="sla-section-head">
            <span className="sla-section-num">B</span>
            <h2 className="sla-section-h2">Escalation paths.</h2>
            <p className="sla-section-sub">Where each tier routes — and who owns the resolution.</p>
          </div>
          <div className="sla-tree-frame">
            <EscalationTree />
          </div>
        </div>
      </section>

      {/* Monitoring grid */}
      <section className="sla-monitoring">
        <div className="sla-shell">
          <div className="sla-section-head">
            <span className="sla-section-num">C</span>
            <h2 className="sla-section-h2">What we monitor.</h2>
            <p className="sla-section-sub">Live monitors, real-time dashboards, weekly reports — measured against published targets.</p>
          </div>

          <div className="sla-mon-grid">
            {MONITORS.map((m, i) => (
              <article key={m.domain} className="sla-mon">
                <span className="sla-mon-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="sla-mon-domain">{m.domain}</h3>
                <div className="sla-mon-row">
                  <span className="sla-mon-label">Target</span>
                  <span className="sla-mon-target">{m.target}</span>
                </div>
                <div className="sla-mon-row">
                  <span className="sla-mon-label">Trailing 30d</span>
                  <span className="sla-mon-current">{m.current}</span>
                </div>
                <div className="sla-mon-bar">
                  <div className="sla-mon-fill" style={{ width: `${88 + i * 3}%` }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sla-cta">
        <div className="sla-shell">
          <div className="sla-cta-frame">
            <div>
              <span className="sla-eyebrow">Next</span>
              <h2 className="sla-section-h2">Want the SLA written into your engagement?</h2>
              <p>Every contract ships with these terms attached. Schedule a review and we'll walk through the redline with your legal team.</p>
            </div>
            <Link to="/contact" className="sla-cta-btn">
              Schedule SLA review
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    </main>
  );
};

export default ServiceLevelAgreements;
