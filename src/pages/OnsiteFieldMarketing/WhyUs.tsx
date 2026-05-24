import type { ReactElement } from 'react';

interface Pillar {
  pos: 0 | 1 | 2;
  tag: string;
  name: string;
  desc: string;
  list: string[];
  icon: ReactElement;
}

const ReachIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const OpsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.06a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const AttribIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <polyline points="7 14 11 10 14 13 21 6" />
  </svg>
);

const PILLARS: Pillar[] = [
  {
    pos: 0,
    tag: 'Reach',
    name: 'Real reps in the real neighbourhood.',
    desc:
      'We staff every booth, every visit, every door — with background-checked ambassadors trained on your service lines. No third-party event labour, no agency middlemen.',
    list: [
      'Background-checked field crews',
      'Trained on your tone and services',
      'Healthcare-specific event playbooks',
      'COI-insured and OSHA-trained',
    ],
    icon: <ReachIcon />,
  },
  {
    pos: 1,
    tag: 'Operations',
    name: 'A working channel, not a campaign.',
    desc:
      'Booth design, collateral, CRM hand-off, photo releases — owned in-house so seams never break. One field lead runs the territory from week one through quarter four.',
    list: [
      'In-house booth + signage build',
      'Tablet intake with live CRM sync',
      'Same-day front-desk handoff protocol',
      'Quarterly territory refit',
    ],
    icon: <OpsIcon />,
  },
  {
    pos: 2,
    tag: 'Accountability',
    name: 'Every dollar tied to a booked patient.',
    desc:
      'QR-tracked print, tablet intake, and CRM reconciliation reconcile every contact to a first visit. The dashboard makes the spend defensible — no hand-wave reports, no vanity totals.',
    list: [
      'Daily activation report',
      'Cost per qualified lead per channel',
      'Booked-visit attribution rollup',
      'No vendor markup on print or labour',
    ],
    icon: <AttribIcon />,
  },
];

const WhyUs = () => {
  return (
    <section className="sl-section ofm-why-section" id="why-us">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">04 - Why TheNextGen</div>
            <h2 className="sl-sec-title">
              Three things we won&rsquo;t <em>compromise on.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            The other vendors
            <br />
            cut all three
          </div>
        </div>

        <div className="ofm-why-grid">
          {PILLARS.map((p) => (
            <article key={p.tag} className="ofm-why-card" data-pos={p.pos}>
              <div className="ofm-why-icon">{p.icon}</div>
              <div className="ofm-why-tag">{p.tag}</div>
              <h3 className="ofm-why-name">{p.name}</h3>
              <p className="ofm-why-desc">{p.desc}</p>
              <ul className="ofm-why-list">
                {p.list.map((item) => (
                  <li key={item}>
                    <span className="ofm-why-tick" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
