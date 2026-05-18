import { useEffect, useState } from 'react';
import type { ReactElement, ReactNode } from 'react';

interface ValueDetails {
  lead: string;
  body: string;
  dontTitle: string;
  dontList: string[];
  doTitle: string;
  doList: string[];
  proof: { v: string; l: string };
}

interface Value {
  num: string;
  title: string;
  text: ReactNode;
  icon: ReactElement;
  visual: ReactNode;
  details: ValueDetails;
}

const Check = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const X = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const VALUES: Value[] = [
  {
    num: '/01',
    title: 'Patient-First Marketing',
    text: 'Every campaign must serve the patient as much as the practice. We never employ dark patterns, misleading claims, or non-compliant advertising tactics. Marketing should connect the right patient to the right provider at the right time.',
    icon: (
      <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    visual: (
      <div className="ab-value-visual ab-value-visual-compare" aria-hidden="true">
        <div className="ab-vv-row ab-vv-row-bad">
          <span className="ab-vv-chip ab-vv-chip-bad"><X />Dark patterns</span>
          <span className="ab-vv-chip ab-vv-chip-bad"><X />Fake urgency</span>
        </div>
        <div className="ab-vv-row ab-vv-row-good">
          <span className="ab-vv-chip ab-vv-chip-good"><Check />Right patient</span>
          <span className="ab-vv-chip ab-vv-chip-good"><Check />Right time</span>
        </div>
      </div>
    ),
    details: {
      lead: 'Marketing should connect the right patient to the right provider — never manipulate either.',
      body: 'Every campaign we ship is audited for dark patterns, misleading claims, and tactics that prey on patients in vulnerable moments. We design every funnel as if a patient family member were the one clicking.',
      dontTitle: 'What we never do',
      dontList: [
        'Fake urgency timers or "only 2 spots left" claims',
        'Misleading symptom-to-treatment promises',
        'Bait-and-switch landing pages',
        'Tracking PHI without consent or BAA coverage',
        'Dark patterns in forms or pricing',
      ],
      doTitle: 'What we do instead',
      doList: [
        'Honest service descriptions, reviewed by clinicians',
        'Verified provider profiles + credentials',
        'Permission-based retargeting only',
        'Transparent pricing wherever permitted',
        'HIPAA-aware analytics implementations',
      ],
      proof: { v: '100%', l: 'Campaigns audited monthly for compliance' },
    },
  },
  {
    num: '/02',
    title: 'Revenue-Accountable Results',
    text: 'We track actual patient registrations and revenue impact — not vanity metrics like impressions or reach. Our analytics dashboards show Cost Per Acquisition, appointment-to-show ratios, and real ROI tied to your bottom line.',
    icon: (
      <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    visual: (
      <div className="ab-value-visual ab-value-visual-stats" aria-hidden="true">
        <div className="ab-vv-stat">
          <span className="ab-vv-stat-l">CPA</span>
          <span className="ab-vv-stat-v">$148</span>
          <span className="ab-vv-stat-d ab-vv-down">↓ 32%</span>
        </div>
        <div className="ab-vv-stat">
          <span className="ab-vv-stat-l">Show rate</span>
          <span className="ab-vv-stat-v">86%</span>
          <span className="ab-vv-stat-d ab-vv-up">↑ 12%</span>
        </div>
        <div className="ab-vv-stat">
          <span className="ab-vv-stat-l">ROAS</span>
          <span className="ab-vv-stat-v">4.1×</span>
          <span className="ab-vv-stat-d ab-vv-up">real $</span>
        </div>
      </div>
    ),
    details: {
      lead: 'We track patients booked and revenue earned — not impressions and reach.',
      body: 'Every engagement ships with a live dashboard tied to your EHR or PM system. Numbers update weekly, exceptions get escalated, and your account lead can defend every dollar at the board meeting.',
      dontTitle: 'Metrics we ignore',
      dontList: [
        'Impressions and reach as primary KPIs',
        'Clicks divorced from booked appointments',
        'CTR % without conversion context',
        '"Engagement" that doesn’t move revenue',
      ],
      doTitle: 'Metrics we report weekly',
      doList: [
        'Cost per acquired patient (by channel)',
        'Appointment-to-show ratio',
        'Average revenue per new patient',
        'Channel-level ROI tied to PM data',
        'Pipeline forecasted vs. delivered',
      ],
      proof: { v: '4.1×', l: 'Median client ROAS, last 12 months' },
    },
  },
  {
    num: '/03',
    title: 'Compliance Without Compromise',
    text: 'We sign Business Associate Agreements (BAAs) with every client. Our infrastructure — from encrypted forms to secure hosting — is designed to protect patient data at every touchpoint. Compliance is not a feature; it is the foundation.',
    icon: (
      <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
        <path d="M9 12 L 11 14 L 15 10" />
      </svg>
    ),
    visual: (
      <div className="ab-value-visual ab-value-visual-badges" aria-hidden="true">
        <span className="ab-vv-badge">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
          </svg>
          HIPAA Compliant
        </span>
        <span className="ab-vv-badge">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
            <path d="M14 3v5h5" />
          </svg>
          BAA Signed
        </span>
        <span className="ab-vv-badge">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          Encrypted
        </span>
      </div>
    ),
    details: {
      lead: 'BAAs with every client. Encryption at every touchpoint. Compliance is the foundation, not the feature.',
      body: 'Healthcare data leaks ruin practices. We treat compliance as a build-time constraint, not a post-launch checklist — and we audit our own stack quarterly so your team never has to second-guess ours.',
      dontTitle: 'What we won’t risk',
      dontList: [
        'Pixel-based tracking that captures PHI',
        'Non-BAA-covered third-party tools in PHI paths',
        'Plain-text patient data in transit',
        'Vendor changes without compliance review',
      ],
      doTitle: 'Our compliance stack',
      doList: [
        'HIPAA-aligned hosting + infrastructure',
        'BAA signed with every vendor in the data chain',
        'Encrypted form submission end-to-end',
        'PHI-safe analytics implementations',
        'Annual third-party security review',
      ],
      proof: { v: '100%', l: 'BAAs signed with healthcare clients' },
    },
  },
];

const Mission = () => {
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const modalValue = modalIdx !== null ? VALUES[modalIdx] : null;

  useEffect(() => {
    if (modalIdx === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalIdx(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [modalIdx]);

  return (
    <section className="ab-mission" aria-labelledby="ab-mission-title">
      <div className="container-shell">
        <div className="ab-mission-head">
          <span className="ab-mission-eyebrow">
            Our Mission &amp; Core Values
          </span>
          <h2 id="ab-mission-title" className="ab-mission-h2">
            Three principles that guide every campaign we launch.
          </h2>
          <p className="ab-mission-sub">
            Every decision we make is guided by these principles &mdash; from
            the campaigns we launch to the tools we build.
          </p>
        </div>

        <div className="ab-values-grid">
          {VALUES.map((v, i) => (
            <button
              key={v.num}
              type="button"
              className="ab-value"
              aria-haspopup="dialog"
              aria-label={`Read more about ${v.title}`}
              onClick={() => setModalIdx(i)}
            >
              <span className="ab-value-num">{v.num}</span>
              <span className="ab-value-icon" aria-hidden="true">
                {v.icon}
              </span>
              <h3 className="ab-value-title">{v.title}</h3>
              <p className="ab-value-text">{v.text}</p>
              {v.visual}
              <span className="ab-value-cta">Read more
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {modalValue !== null && modalIdx !== null && (
        <div
          className="ab-mission-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ab-mission-modal-title"
          onClick={() => setModalIdx(null)}
        >
          <div className="ab-mission-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="ab-mission-modal-close"
              onClick={() => setModalIdx(null)}
              aria-label="Close details"
            >
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>

            <div className="ab-mission-modal-head">
              <span className={`ab-mission-modal-icon ab-mission-modal-icon-${modalIdx + 1}`} aria-hidden="true">
                {modalValue.icon}
              </span>
              <div>
                <span className="ab-mission-modal-num">{modalValue.num}</span>
                <h2 id="ab-mission-modal-title" className="ab-mission-modal-title">{modalValue.title}</h2>
                <p className="ab-mission-modal-lead">{modalValue.details.lead}</p>
              </div>
            </div>

            <p className="ab-mission-modal-body">{modalValue.details.body}</p>

            <div className="ab-mission-modal-cols">
              <div className="ab-mission-modal-col ab-mission-modal-col-dont">
                <span className="ab-mission-modal-subtag">
                  <X /> {modalValue.details.dontTitle}
                </span>
                <ul>
                  {modalValue.details.dontList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="ab-mission-modal-col ab-mission-modal-col-do">
                <span className="ab-mission-modal-subtag">
                  <Check /> {modalValue.details.doTitle}
                </span>
                <ul>
                  {modalValue.details.doList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="ab-mission-modal-proof">
              <strong>{modalValue.details.proof.v}</strong>
              <span>{modalValue.details.proof.l}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Mission;
