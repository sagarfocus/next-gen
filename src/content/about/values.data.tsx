import type { ReactElement, ReactNode } from 'react';
import { CheckIcon, XIcon } from '@/components/icons';

export interface ValueFAQ {
  q: string;
  a: string;
}

export interface ValueEntry {
  slug: string;
  num: string;
  title: string;
  blurb: string;
  text: string;
  icon: ReactElement;
  visual: ReactNode;
  lead: string;
  body: string;
  longBody: string[];
  dontTitle: string;
  dontList: string[];
  doTitle: string;
  doList: string[];
  proof: { v: string; l: string };
  faqs: ValueFAQ[];
}


export const VALUE_ENTRIES: ValueEntry[] = [
  {
    slug: 'patient-first-marketing',
    num: '/01',
    title: 'Patient-First Marketing',
    blurb: 'Connect the right patient to the right provider — never manipulate either.',
    text: 'Every campaign must serve the patient as much as the practice. We never employ dark patterns, misleading claims, or non-compliant advertising tactics. Marketing should connect the right patient to the right provider at the right time.',
    icon: (
      <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    visual: (
      <div className="ab-value-visual ab-value-visual-compare" aria-hidden="true">
        <div className="ab-vv-row ab-vv-row-bad">
          <span className="ab-vv-chip ab-vv-chip-bad"><XIcon />Dark patterns</span>
          <span className="ab-vv-chip ab-vv-chip-bad"><XIcon />Fake urgency</span>
        </div>
        <div className="ab-vv-row ab-vv-row-good">
          <span className="ab-vv-chip ab-vv-chip-good"><CheckIcon />Right patient</span>
          <span className="ab-vv-chip ab-vv-chip-good"><CheckIcon />Right time</span>
        </div>
      </div>
    ),
    lead: 'Marketing should connect the right patient to the right provider - never manipulate either.',
    body: 'Every campaign we ship is audited for dark patterns, misleading claims, and tactics that prey on patients in vulnerable moments. We design every funnel as if a patient family member were the one clicking.',
    longBody: [
      'Healthcare marketing fails most patients on first contact. Misleading symptom-to-treatment promises, fake urgency, bait-and-switch landing pages — the patterns are well documented and the patient pays for them.',
      'We refuse the pattern. Every campaign that ships from this studio passes a patient-first review before launch. The question is always the same: would I want a family member clicking this ad?',
      'When the answer is no, the campaign doesn’t ship. That’s the whole policy. It costs us short-term clicks; it earns long-term trust — which is the only thing that compounds in healthcare.',
    ],
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
    faqs: [
      {
        q: 'How is the patient-first audit run?',
        a: 'Every campaign passes a documented checklist before launch: clinical claims reviewed, urgency language flagged, dark patterns scored, BAA coverage on every tool. The audit log lives with the campaign so it can be re-checked anytime.',
      },
      {
        q: 'What if a tactic works but you flag it?',
        a: 'It does not ship. We have lost short-term performance over this; we have never lost a long-term client over it. The policy is non-negotiable because the cost of being wrong in healthcare is not recoverable.',
      },
      {
        q: 'Do you review competitor practices too?',
        a: 'Only as benchmark for ours. We do not audit competitor ethics, but if a peer is pulling patients with dark patterns we steer our client away from copying the tactic — and usually toward a more durable position.',
      },
    ],
  },
  {
    slug: 'revenue-accountable-results',
    num: '/02',
    title: 'Revenue-Accountable Results',
    blurb: 'Patients booked and revenue earned — not impressions and reach.',
    text: 'We track actual patient registrations and revenue impact - not vanity metrics like impressions or reach. Our analytics dashboards show Cost Per Acquisition, appointment-to-show ratios, and real ROI tied to your bottom line.',
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
    lead: 'We track patients booked and revenue earned - not impressions and reach.',
    body: 'Every engagement ships with a live dashboard tied to your EHR or PM system. Numbers update weekly, exceptions get escalated, and your account lead can defend every dollar at the board meeting.',
    longBody: [
      'Most agency reporting is decorated noise. Impressions, reach, CTR — numbers that move while the practice’s actual revenue stays flat. The dashboard looks good; the bank account does not.',
      'We refuse to ship that report. Every engagement here starts with a single question: which numbers, when they move, mean the practice is healthier? Those are the numbers we track. Everything else is footnote.',
      'The dashboard ties to your EHR or PM system, updates weekly, and travels with the engagement. When something underperforms it gets escalated before the next planning cycle — not buried in the appendix of a deck.',
    ],
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
    faqs: [
      {
        q: 'What if our EHR doesn’t expose the data?',
        a: 'We bridge to the data the EHR does expose — even if that means writing a server-side connector. Where data simply doesn’t exist (some PMS systems still don’t track show rate), we instrument the gap as part of the engagement.',
      },
      {
        q: 'How often does the dashboard update?',
        a: 'Weekly at minimum. Most clients also get a daily refresh on paid spend so anomalies surface inside the same day rather than at the end of a billing cycle.',
      },
      {
        q: 'Can leadership see the same view we see?',
        a: 'Yes. Every dashboard ships role-aware: a clinic-floor view for operations, a board view for leadership, and a channel view for the marketing team. Same source, different lens.',
      },
    ],
  },
  {
    slug: 'compliance-without-compromise',
    num: '/03',
    title: 'Compliance Without Compromise',
    blurb: 'BAAs everywhere. Encryption everywhere. Compliance as foundation.',
    text: 'We sign Business Associate Agreements (BAAs) with every client. Our infrastructure - from encrypted forms to secure hosting - is designed to protect patient data at every touchpoint. Compliance is not a feature; it is the foundation.',
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
    lead: 'BAAs with every client. Encryption at every touchpoint. Compliance is the foundation, not the feature.',
    body: 'Healthcare data leaks ruin practices. We treat compliance as a build-time constraint, not a post-launch checklist - and we audit our own stack quarterly so your team never has to second-guess ours.',
    longBody: [
      'Compliance failures in healthcare marketing are not survivable for most practices. One breach, one OCR letter, one pixel firing PHI to an ad platform — and the practice spends a year explaining it to regulators.',
      'We build to avoid that outcome on day one. Every tool in our stack is BAA-covered. Every form is encrypted end-to-end. Every analytics implementation strips PHI before any signal leaves your environment.',
      'And every quarter we audit our own stack — because the right time to find a compliance gap is before the regulator does, and because we will not be the vendor that ends a practice.',
    ],
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
    faqs: [
      {
        q: 'Will you sign a BAA with us?',
        a: 'Yes, with every healthcare client. The BAA is in place before any campaign goes live and covers every system in the data path — analytics, ad platforms, CRM, hosting.',
      },
      {
        q: 'What about Meta and Google ads?',
        a: 'We use the BAA-eligible or BAA-equivalent configurations on both platforms, route conversion events through server-side, and strip PHI before any signal is sent. Where a platform cannot meet the bar, we do not run on it.',
      },
      {
        q: 'How often is the stack audited?',
        a: 'Quarterly internal review, annual third-party security review. Findings are logged and remediated before the next quarter closes.',
      },
    ],
  },
];

export const findValue = (slug: string): ValueEntry | undefined =>
  VALUE_ENTRIES.find((v) => v.slug === slug);

export const valueDetailHref = (slug: string): string => `/about/value/${slug}`;
