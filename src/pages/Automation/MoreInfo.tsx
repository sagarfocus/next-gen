import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const PILLARS = [
  {
    num: '01',
    title: 'Workflow first',
    desc: 'Every automation maps a real clinical workflow — intake, follow-up, reminders, billing — not a generic SaaS use case.',
  },
  {
    num: '02',
    title: 'HIPAA-aware',
    desc: 'Encrypted transport, BAA-ready vendor stack, server-side tracking. Compliance is the default, never a retrofit.',
  },
  {
    num: '03',
    title: 'Ships in days',
    desc: 'Import the template, connect your stack, go live. Most clinics move from kickoff to first automated patient in under a week.',
  },
];

const CHECKLIST = [
  'Plug-and-play templates for N8N, Zapier and Make',
  'Pre-built integrations with leading PM / EHR systems',
  'Audit logs and consent capture out of the box',
  'Documented escalation paths for human takeover',
  'Quarterly compliance review with our growth team',
  'Drop-in replacements for 20+ manual front-desk tasks',
];

const SOLUTIONS = [
  {
    tag: 'Front Desk',
    title: 'Patient intake & verification',
    desc: 'Forms, insurance capture, eligibility checks, and chart prep — all complete before the patient walks in.',
  },
  {
    tag: 'Reminders',
    title: 'Two-way SMS & email reminders',
    desc: 'Multi-touch reminder cadences with auto-rescheduling links. Recover 18% of no-shows in the first 60 days.',
  },
  {
    tag: 'Revenue',
    title: 'Reviews, recalls & reactivation',
    desc: 'HIPAA-aware review requests, recall campaigns, and dormant-patient re-engagement that compounds month over month.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Audit',
    desc: 'We map every manual task and rank it by hours saved and revenue impact.',
  },
  {
    num: '02',
    title: 'Build',
    desc: 'We configure templates inside your stack — EHR, PM, calendar, messaging.',
  },
  {
    num: '03',
    title: 'Launch',
    desc: 'Go live with a single touchpoint, then layer the next once it is stable.',
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'We tune cadences, copy, and triggers weekly. You own the data and dashboards.',
  },
];

const STATS = [
  { v: '20+', l: 'hours saved / week' },
  { v: '18%', l: 'no-show recovery' },
  { v: '≤ 7', l: 'days to live' },
];

const ArrowRight = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Check = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const MoreInfo = () => {
  return (
    <main className="amih" id="amih-top">
      <section className="amih-hero" aria-labelledby="amih-hero-title">
        <div className="container-shell">
          <Breadcrumb current="Automation · More info" />

          <div className="amih-hero-grid">
            <div className="amih-hero-copy">
              <span className="amih-eyebrow">
                <i aria-hidden="true" />
                Healthcare automation, deep-dive
              </span>
              <h1 id="amih-hero-title" className="amih-h1">
                The complete playbook for healthcare automation.
              </h1>
              <p className="amih-lede">
                A practitioner&rsquo;s guide to deploying patient-facing
                automation without breaking compliance, scope, or your front
                desk&rsquo;s sanity &mdash; written by the team behind 200+
                live clinical workflows.
              </p>
              <div className="amih-hero-cta">
                <Link to="/free-growth-audit" className="amih-btn amih-btn-primary">
                  Start your automation audit <ArrowRight />
                </Link>
                <a href="#amih-solutions" className="amih-btn amih-btn-ghost">
                  Browse the playbook
                </a>
              </div>
            </div>

            <aside className="amih-hero-card" aria-label="At a glance">
              <span className="amih-card-label">At a glance</span>
              <dl className="amih-card-stats">
                {STATS.map((s) => (
                  <div key={s.l} className="amih-card-stat">
                    <dt>{s.v}</dt>
                    <dd>{s.l}</dd>
                  </div>
                ))}
              </dl>
              <div className="amih-card-meta">
                <span>Updated Q2, 2026</span>
                <span>· 12 min read</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="amih-pillars" aria-labelledby="amih-pillars-title">
        <div className="container-shell">
          <header className="amih-section-head">
            <span className="amih-section-label">/ 01 &nbsp; The principles</span>
            <h2 id="amih-pillars-title" className="amih-h2">
              Three rules every healthcare workflow we ship is built on.
            </h2>
          </header>
          <div className="amih-pillars-grid">
            {PILLARS.map((p) => (
              <article key={p.num} className="amih-pillar">
                <span className="amih-pillar-num">{p.num}</span>
                <h3 className="amih-pillar-title">{p.title}</h3>
                <p className="amih-pillar-desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="amih-about" aria-labelledby="amih-about-title">
        <div className="container-shell">
          <div className="amih-about-grid">
            <div className="amih-about-media" aria-hidden="true">
              <div className="amih-about-frame">
                <span className="amih-frame-cap" />
                <span className="amih-frame-block amih-frame-block--a" />
                <span className="amih-frame-block amih-frame-block--b" />
                <span className="amih-frame-block amih-frame-block--c" />
                <div className="amih-frame-tag">
                  <span>Live workflow</span>
                  <strong>Patient intake</strong>
                </div>
              </div>
            </div>

            <div className="amih-about-copy">
              <span className="amih-section-label">/ 02 &nbsp; What you get</span>
              <h2 id="amih-about-title" className="amih-h2">
                Built for clinics that move fast — without breaking what works.
              </h2>
              <p className="amih-about-lede">
                Every automation we ship sits on top of your existing PM, EHR,
                and calendar — never in place of them. Same data of record,
                same vendors, far less manual work.
              </p>
              <ul className="amih-check-list">
                {CHECKLIST.map((item) => (
                  <li key={item}>
                    <span className="amih-check-icon" aria-hidden="true">
                      <Check />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/automation" className="amih-btn amih-btn-ghost">
                Back to the template library <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="amih-solutions"
        id="amih-solutions"
        aria-labelledby="amih-solutions-title"
      >
        <div className="container-shell">
          <header className="amih-section-head amih-section-head--split">
            <div>
              <span className="amih-section-label">/ 03 &nbsp; The library</span>
              <h2 id="amih-solutions-title" className="amih-h2">
                Three categories that recover the most time and revenue.
              </h2>
            </div>
            <p className="amih-section-sub">
              We start with whichever lane has the biggest leak in your
              clinic. The other two layer in once the first is running clean.
            </p>
          </header>
          <div className="amih-solutions-grid">
            {SOLUTIONS.map((s) => (
              <article key={s.title} className="amih-sol-card">
                <span className="amih-sol-tag">{s.tag}</span>
                <h3 className="amih-sol-title">{s.title}</h3>
                <p className="amih-sol-desc">{s.desc}</p>
                <Link to="/automation" className="amih-sol-link">
                  Read the workflow <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="amih-process" aria-labelledby="amih-process-title">
        <div className="container-shell">
          <header className="amih-section-head amih-section-head--center">
            <span className="amih-section-label">/ 04 &nbsp; How we operate</span>
            <h2 id="amih-process-title" className="amih-h2">
              From audit to live in four deliberate moves.
            </h2>
          </header>
          <ol className="amih-process-grid">
            {STEPS.map((s, i) => (
              <li key={s.num} className="amih-step">
                <span className="amih-step-num">{s.num}</span>
                <h3 className="amih-step-title">{s.title}</h3>
                <p className="amih-step-desc">{s.desc}</p>
                {i < STEPS.length - 1 && (
                  <span className="amih-step-arrow" aria-hidden="true">
                    <ArrowRight />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="amih-cta" aria-labelledby="amih-cta-title">
        <div className="container-shell">
          <div className="amih-cta-frame">
            <div className="amih-cta-copy">
              <span className="amih-cta-eyebrow">Get in touch</span>
              <h2 id="amih-cta-title" className="amih-cta-h2">
                Schedule a free 30-minute automation walkthrough.
              </h2>
              <p className="amih-cta-text">
                Bring your top three manual tasks. We&rsquo;ll show you which
                template fits, what it ships with, and how fast it can be
                live in your stack.
              </p>
              <ul className="amih-cta-list">
                <li>No deck, no pitch — just a working session.</li>
                <li>Includes a one-page summary you can share internally.</li>
                <li>Free, even if you decide not to work with us.</li>
              </ul>
            </div>

            <form
              className="amih-cta-form"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Walkthrough request"
            >
              <div className="amih-row">
                <label className="amih-field">
                  <span>Name</span>
                  <input type="text" name="name" autoComplete="name" />
                </label>
                <label className="amih-field">
                  <span>Email</span>
                  <input type="email" name="email" autoComplete="email" />
                </label>
              </div>
              <div className="amih-row">
                <label className="amih-field">
                  <span>Clinic</span>
                  <input type="text" name="clinic" />
                </label>
                <label className="amih-field">
                  <span>Top manual task</span>
                  <input type="text" name="task" />
                </label>
              </div>
              <label className="amih-field">
                <span>What would you automate first?</span>
                <textarea name="message" rows={3} />
              </label>
              <button type="submit" className="amih-btn amih-btn-primary">
                Request walkthrough <ArrowRight />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MoreInfo;
