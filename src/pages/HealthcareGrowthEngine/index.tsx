import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import imgSeo from '../../assets/Local Search.png';
import imgPaid from '../../assets/paidmedia.png';
import imgAutomation from '../../assets/medicalautomation.png';
import imgClosing from '../../assets/builtforclinic.png';
import imgHero from '../../assets/Futuristic healthcare.png';
import imgTestimonial from '../../assets/healthcareimg4.png';

/* ============================================================
   HEALTHCARE GROWTH ENGINE — revamped editorial layout.
   Hero · Trust strip · Gap · Channels · Engine loop · Stack ·
   Outcomes · Engagement package · Voice · FAQ · Closing CTA.
   Swiss grid, hairline rules, restrained colour. Every element
   earns its place — visual hierarchy first, copy second.
   ============================================================ */

/* ---------- TYPES ---------- */
interface Channel {
  n: string;
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  img: string;
  href: string;
}

interface Stage {
  n: string;
  k: string;
  cadence: string;
  d: string;
  icon: React.ReactNode;
}

interface Outcome {
  v: string;        // legacy/SR display
  num: number;      // animated target
  prefix: string;
  suffix: string;
  l: string;
  sub: string;
  vs: string;
}

interface PackageItem {
  title: string;
  cadence: string;
  items: string[];
}

interface FaqEntry {
  q: string;
  a: string;
  defaultOpen?: boolean;
}

/* ---------- DATA ---------- */
const HEAD_META = [
  { label: 'Channels',  value: 'SEO · Paid · Automation' },
  { label: 'Cycle',     value: 'Daily ops · weekly review' },
  { label: 'Reporting', value: 'Live dashboard' },
  { label: 'Coverage',  value: '200+ U.S. practices' },
];

const HERO_PULSE = [
  { k: 'Booked visits',    v: '+78%', dir: 'up' as const },
  { k: 'CPV',              v: '−38%', dir: 'down' as const },
  { k: 'Recall recovery',  v: '+22%', dir: 'up' as const },
];

const TRUST_BADGES = [
  'Google Partner',
  'Meta Business Partner',
  'HIPAA-aware workflows',
  'GA4 · GSC · GBP certified',
  'EHR & PMS integrations',
  'SOC-2 vendor stack',
];

const GAP_ROWS: { topic: string; agency: string; engine: string }[] = [
  { topic: 'Goal',        agency: 'Impressions, clicks, vanity dashboards.',           engine: 'Booked appointments, net new patients, LTV.' },
  { topic: 'Cadence',     agency: 'Monthly report. Quarterly review.',                  engine: 'Daily ops, weekly Loom, live dashboard.' },
  { topic: 'Team',        agency: 'Junior account manager — channel silos.',            engine: 'One growth lead. One number. Full-stack pod.' },
  { topic: 'Reporting',   agency: 'Slide decks. Screenshots. Lagging metrics.',         engine: 'Funnel-level instrumentation. Live attribution.' },
  { topic: 'Spend',       agency: 'Flat retainer regardless of return.',                engine: 'Quarterly re-forecast. Spend tilts to what pays back.' },
  { topic: 'Exit',        agency: 'Locked-in 12 months. Data hostage.',                 engine: 'Month-to-month. Your accounts, your dashboards, your data.' },
];

const CHANNELS: Channel[] = [
  {
    n: '01',
    tag: 'Discovery',
    title: 'SEO & Local Search',
    body: 'Technical SEO, local pack dominance, schema, and clinical content that ranks for the searches your patients actually run.',
    bullets: ['Local pack engineering', 'Service-area cluster maps', 'Schema + entity SEO', 'GBP optimisation'],
    img: imgSeo,
    href: '/services/seo-local-search',
  },
  {
    n: '02',
    tag: 'Demand',
    title: 'Paid Media',
    body: 'Google Ads and Meta tuned for booked appointments — not impressions, not clicks, not vanity. Every dollar tied to a visit.',
    bullets: ['Google Ads (Search + PMax)', 'Meta lead campaigns', 'Geo + service segmentation', 'Offline conversion tracking'],
    img: imgPaid,
    href: '/services/google-ads',
  },
  {
    n: '03',
    tag: 'Retention',
    title: 'Automation & AI',
    body: 'Recall, reactivation, intake, and review flows running quietly inside the systems your clinic already uses every day.',
    bullets: ['EHR + PMS automations', 'AI front-desk assist', 'Review & reputation flows', 'Recall + reactivation'],
    img: imgAutomation,
    href: '/automation',
  },
];

const IconMeasure = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 3h18v18H3z" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);
const IconPriority = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 6h13" /><path d="M8 12h13" /><path d="M8 18h13" />
    <circle cx="3.5" cy="6" r="1.4" /><circle cx="3.5" cy="12" r="1.4" /><circle cx="3.5" cy="18" r="1.4" />
  </svg>
);
const IconOperate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const IconCompound = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const STAGES: Stage[] = [
  { n: '01', k: 'Measure',    cadence: 'Days 1–7',   d: 'Read-only access to GA4, GSC, GBP, ad accounts, and the CRM. We map the funnel before we touch anything.', icon: <IconMeasure /> },
  { n: '02', k: 'Prioritise', cadence: 'Days 7–14',  d: 'One scorecard. Every channel scored, every fix priced. The top five ship inside the first 30 days.',     icon: <IconPriority /> },
  { n: '03', k: 'Operate',    cadence: 'Daily',      d: 'Daily ops on every active channel. Weekly Loom + live dashboard. One growth lead, one number.',           icon: <IconOperate /> },
  { n: '04', k: 'Compound',   cadence: 'Quarterly',  d: 'Quarterly re-forecasts. Spend tilts to what is paying back. Every line item re-earns its place.',        icon: <IconCompound /> },
];

interface StackTool { name: string; mark: string; }
interface StackGroup { label: string; icon: React.ReactNode; tools: StackTool[]; }

const IconStackAnalytics = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="6" y1="20" x2="6" y2="12" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="18" y1="20" x2="18" y2="14" />
  </svg>
);
const IconStackAcquisition = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.6" fill="currentColor" />
  </svg>
);
const IconStackEhr = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="6" y="4" width="12" height="16" rx="2" /><path d="M9 4v2h6V4" /><path d="M12 11v5M9.5 13.5h5" />
  </svg>
);
const IconStackAutomation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="M7 6h10M6 8l5 8M18 8l-5 8" />
  </svg>
);
const IconStackFrontDesk = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 13a8 8 0 0 1 16 0" /><path d="M4 13v3a2 2 0 0 0 2 2h1v-5H4Z" /><path d="M20 13v3a2 2 0 0 1-2 2h-1v-5h3Z" />
  </svg>
);
const IconStackReputation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 3 14.6 9 21 9.6 16.2 14 17.7 20.4 12 17.2 6.3 20.4 7.8 14 3 9.6 9.4 9 12 3" />
  </svg>
);
const IconStackContent = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" />
  </svg>
);
interface StackGroupExt extends StackGroup {
  tagline: string;
  tools: (StackTool & { use: string })[];
}

const STACK_GROUPS: StackGroupExt[] = [
  {
    label: 'Analytics',
    icon: <IconStackAnalytics />,
    tagline: 'Read every funnel surface in one place — no more cross-tab guessing.',
    tools: [
      { name: 'GA4',            mark: 'GA', use: 'Behavioural events, conversions, attribution.' },
      { name: 'Search Console', mark: 'SC', use: 'Indexation, impressions, ranking drift.' },
      { name: 'Looker Studio',  mark: 'LS', use: 'Live dashboards shipped to the C-suite.' },
      { name: 'Hotjar',         mark: 'HJ', use: 'Session recordings on the booking funnel.' },
    ],
  },
  {
    label: 'Acquisition',
    icon: <IconStackAcquisition />,
    tagline: 'Every channel where a patient searches — instrumented for booked visits, not clicks.',
    tools: [
      { name: 'Google Ads', mark: 'GA', use: 'Search + Performance Max for high-intent terms.' },
      { name: 'Meta Ads',   mark: 'MA', use: 'Lead campaigns for service-line expansion.' },
      { name: 'GBP',        mark: 'GB', use: 'Local pack dominance + review velocity.' },
      { name: 'Bing',       mark: 'BG', use: 'Microsoft Audience for the 35+ demographic.' },
    ],
  },
  {
    label: 'Automation',
    icon: <IconStackAutomation />,
    tagline: 'Recall, intake, and review flows running quietly inside the systems you already use.',
    tools: [
      { name: 'Zapier',  mark: 'ZP', use: 'Cross-tool orchestration across 800+ apps.' },
      { name: 'HubSpot', mark: 'HS', use: 'Patient CRM, sequences, and lifecycle stages.' },
      { name: 'Twilio',  mark: 'TW', use: 'Two-way SMS for confirmations + reactivation.' },
      { name: 'Birdeye', mark: 'BE', use: 'Automated review requests after every visit.' },
    ],
  },
  {
    label: 'Clinical',
    icon: <IconStackEhr />,
    tagline: 'EHR and PMS integrations that move data — not replace your stack.',
    tools: [
      { name: 'Epic',    mark: 'EP', use: 'FHIR-based read access for booking attribution.' },
      { name: 'Athena',  mark: 'AT', use: 'Visit data sync for closed-loop reporting.' },
      { name: 'NextGen', mark: 'NG', use: 'Appointment + outcome tracking pipeline.' },
      { name: 'Dentrix', mark: 'DX', use: 'Dental PMS recall + reactivation flows.' },
    ],
  },
  {
    label: 'Front Desk',
    icon: <IconStackFrontDesk />,
    tagline: 'Calls, scheduling, and intake routed without dropping a single new-patient lead.',
    tools: [
      { name: 'Twilio',     mark: 'TW', use: 'Programmable voice + SMS for missed-call recovery.' },
      { name: 'Calendly',   mark: 'CL', use: 'Self-serve booking with provider availability sync.' },
      { name: 'Zoom Phone', mark: 'ZM', use: 'Cloud PBX with recording + transcription.' },
      { name: 'Klara',      mark: 'KL', use: 'HIPAA-secure patient messaging + intake.' },
    ],
  },
  {
    label: 'Reputation',
    icon: <IconStackReputation />,
    tagline: 'Review volume and velocity that compounds local-pack ranking month over month.',
    tools: [
      { name: 'Birdeye',     mark: 'BE', use: 'Multi-location review aggregation + alerts.' },
      { name: 'Podium',      mark: 'PD', use: 'SMS-first review requests post-visit.' },
      { name: 'GBP Reviews', mark: 'GR', use: 'Native Google review velocity tracking.' },
      { name: 'Yelp',        mark: 'YP', use: 'Service-line reputation in niche verticals.' },
    ],
  },
  {
    label: 'Content',
    icon: <IconStackContent />,
    tagline: 'Authority content that ranks for the searches your patients actually run.',
    tools: [
      { name: 'WordPress', mark: 'WP', use: 'Headless CMS for clinical content velocity.' },
      { name: 'Webflow',   mark: 'WF', use: 'Marketing site builds with live attribution.' },
      { name: 'Surfer',    mark: 'SF', use: 'SERP-driven topic + entity optimisation.' },
      { name: 'Frase',     mark: 'FR', use: 'Brief generation tuned to clinical intent.' },
    ],
  },
];

const OUTCOMES: Outcome[] = [
  { v: '120+', num: 120, prefix: '',  suffix: '+', sub: 'programs', l: 'Growth programs launched',  vs: 'across 31 U.S. states' },
  { v: '+78%', num: 78,  prefix: '+', suffix: '%', sub: 'year one', l: 'Avg. patient growth',       vs: 'vs. 12% industry baseline' },
  { v: '−38%', num: 38,  prefix: '−', suffix: '%', sub: 'paid',     l: 'Cost per booked visit',     vs: 'vs. prior 6-mo. baseline' },
  { v: '14 d', num: 14,  prefix: '',  suffix: ' d', sub: 'go-live', l: 'From signed to first lift', vs: 'median across last 24 clients' },
];

const PACKAGE: PackageItem[] = [
  {
    title: 'Foundation',
    cadence: 'Weeks 1–2',
    items: [
      'Funnel + attribution audit',
      'Scorecard across 9 surfaces',
      'Prioritised 30-day plan',
      'Tracking + tagging rebuild',
    ],
  },
  {
    title: 'Operate',
    cadence: 'Every week',
    items: [
      'Daily channel ops',
      'Weekly Loom walkthrough',
      'Live dashboard updates',
      'One growth lead, on call',
    ],
  },
  {
    title: 'Compound',
    cadence: 'Every quarter',
    items: [
      'Re-forecast + spend reshape',
      'New experiments queued',
      'Retention & LTV review',
      'Executive board readout',
    ],
  },
];

const FAQS: FaqEntry[] = [
  {
    q: 'How is this different from hiring an agency?',
    a: 'An agency sells channels and reports. The engine sells outcomes — booked visits and patient LTV — across SEO, paid, and automation as one system, with one growth lead accountable to one number.',
    defaultOpen: true,
  },
  {
    q: 'Do you require a 12-month contract?',
    a: 'No. We work month-to-month after the first 30 days. Your accounts, your dashboards, your data — all yours from day one. If we are not earning our keep, you walk.',
  },
  {
    q: 'What does it cost to run?',
    a: 'Engagements start at $2,500/month for single-location clinics and scale with channels, geographies, and media spend. Pricing is fixed monthly — no hourly billing, no surprise line items.',
  },
  {
    q: 'How fast do we see results?',
    a: 'Most clinics see the first measurable lift inside 14 days from tracking fixes and front-desk recovery. SEO compounding lands in the 3–6 month window. Paid is tuned weekly from day one.',
  },
  {
    q: 'Will you work with our existing EHR / PMS / CRM?',
    a: 'Yes. We integrate with the systems your clinic already runs — Epic, Athena, NextGen, Dentrix, HubSpot, and most modern PMS / CRM stacks via native APIs, Zapier, or Make.',
  },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Healthcare Growth Engine',
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgenhealth.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'Integrated SEO, paid media, and automation engineered for patient acquisition and retention across U.S. healthcare practices.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: 2500 },
  },
};

/* ---------- LAYOUT PRIMITIVE ---------- */
const Section = ({
  no,
  title,
  kicker,
  children,
  tone = 'bg',
}: {
  no: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
  tone?: 'bg' | 'alt';
}) => (
  <section className={`border-t border-line-faint ${tone === 'alt' ? 'bg-bg-alt' : 'bg-bg'}`}>
    <div className="container-shell py-[clamp(64px,8.5vw,120px)]">
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
        <div className="lg:col-span-3">
          <div className="flex items-baseline gap-3">
            <span className="text-line font-mono text-[13px] tracking-[0.18em]">{no}</span>
            <span className="h-px flex-1 bg-line-soft" />
          </div>
          <h2 className="mt-4 text-heading text-[clamp(22px,2vw,30px)] font-bold tracking-[-0.02em] leading-[1.1]">
            {title}
          </h2>
          {kicker && (
            <p className="mt-3 text-muted text-[14px] leading-[1.6] max-w-[34ch]">{kicker}</p>
          )}
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </div>
  </section>
);

/* ---------- HERO ---------- */
const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Healthcare Growth Engine" />

      <div className="mt-8 grid lg:grid-cols-12 gap-x-12 gap-y-12 items-start">
        {/* Left — headline + dual CTA */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft animate-pulse" />
            Growth Engine · 2026 Edition
          </div>

          <h1 className="mt-6 text-heading font-extrabold leading-[0.96] tracking-[-0.04em] text-[clamp(44px,6.8vw,92px)]">
            Patient growth,<br />
            <span className="relative inline-block">
              <span className="text-line">engineered</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-line/30" aria-hidden="true" />
            </span>
            .
          </h1>

          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            One integrated system across SEO, paid media, and automation —
            instrumented end-to-end, reviewed weekly, tuned for the economics
            of a clinic. Built for operators who want a number, not a deck.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/free-growth-audit" className="btn-primary">
              Request the free audit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] border border-line-faint text-heading text-sm font-semibold hover:border-line hover:-translate-y-px transition"
            >
              See the channels
            </Link>
            <span className="text-muted text-[13px]">
              From <strong className="text-heading font-semibold">$2,500/mo</strong> · No 12-month lock-in
            </span>
          </div>

          {/* Pulse strip — live KPI snapshot */}
          <div className="mt-10 grid grid-cols-3 gap-px bg-line-faint border border-line-faint rounded-[14px] overflow-hidden">
            {HERO_PULSE.map((p) => (
              <div key={p.k} className="bg-bg px-5 py-4 flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">{p.k}</span>
                <span className="flex items-baseline gap-2">
                  <span className="text-heading text-[clamp(22px,2.2vw,30px)] font-extrabold tracking-[-0.02em]">{p.v}</span>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-[0.12em] ${
                      p.dir === 'up' ? 'text-[#2F855A]' : 'text-line'
                    }`}
                  >
                    {p.dir === 'up' ? '▲' : '▼'} yoy
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual + meta */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[5/6] rounded-[20px] overflow-hidden border border-line-faint bg-bg-soft">
            <img
              src={imgHero}
              alt="Healthcare growth dashboard"
              loading="eager"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-heading/85 via-heading/40 to-transparent">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/70 mb-2">
                Live dashboard · sample
              </div>
              <div className="text-white text-[15px] font-semibold leading-snug max-w-[28ch]">
                Every booked visit traced back to the surface that produced it.
              </div>
            </div>
            <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/95 backdrop-blur font-mono text-[11px] tracking-[0.18em] text-heading font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
              LIVE
            </span>
          </div>

          {/* Meta rail */}
          <div className="mt-6 border-t-2 border-heading">
            {HEAD_META.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_1.4fr] py-2.5 border-b border-line-faint text-[13.5px]"
              >
                <span className="text-muted font-medium">{row.label}</span>
                <span className="text-heading font-semibold text-right">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- TRUST STRIP ---------- */
const TrustStrip = () => (
  <section className="border-t border-line-faint bg-bg-alt">
    <div className="container-shell py-8 sm:py-10">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted whitespace-nowrap">
          Operating partner to
        </span>
        <span className="h-px flex-1 bg-line-faint min-w-[40px]" />
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {TRUST_BADGES.map((b) => (
            <li
              key={b}
              className="inline-flex items-center gap-2 text-heading text-[13px] font-semibold tracking-[-0.005em]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-accent-soft" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

/* ---------- THE GAP (comparison) ---------- */
const TheGap = () => (
  <Section
    no="01"
    title="Why standard agency models fail clinics"
    kicker="Most clinic marketing budgets fund the wrong workflow. The engine rewires the workflow before it spends a dollar."
  >
    <div className="grid md:grid-cols-2 gap-px bg-line-faint border border-line-faint rounded-[16px] overflow-hidden">
      {/* Standard column */}
      <div className="bg-bg-soft p-7 sm:p-9">
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">A</span>
          <h3 className="text-muted text-[18px] font-bold tracking-[-0.015em]">Standard agency</h3>
        </div>
        <ul className="space-y-4">
          {GAP_ROWS.map((r) => (
            <li key={r.topic} className="flex gap-4 items-start">
              <span className="shrink-0 w-20 text-[11px] uppercase tracking-[0.18em] text-muted font-bold pt-1">{r.topic}</span>
              <span className="text-muted text-[14.5px] leading-[1.55] line-through decoration-line-faint decoration-2">
                {r.agency}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Engine column */}
      <div className="bg-bg p-7 sm:p-9 relative">
        <span className="absolute top-7 right-7 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-heading text-white font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
          Engine
        </span>
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-line">B</span>
          <h3 className="text-heading text-[18px] font-bold tracking-[-0.015em]">Growth Engine</h3>
        </div>
        <ul className="space-y-4">
          {GAP_ROWS.map((r) => (
            <li key={r.topic} className="flex gap-4 items-start">
              <span className="shrink-0 w-20 text-[11px] uppercase tracking-[0.18em] text-line font-bold pt-1">{r.topic}</span>
              <span className="text-heading text-[14.5px] leading-[1.55] font-medium">
                {r.engine}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

/* ---------- CHANNELS ---------- */
const Channels = () => (
  <section className="border-t border-line-faint bg-bg-alt">
    <div className="container-shell py-[clamp(64px,8.5vw,120px)]">
      {/* Header on top — eyebrow + big H2 on the left, kicker on the right */}
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 mb-12 lg:mb-16">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase mb-5">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            Channels · 02
          </div>
          <h2 className="text-heading font-extrabold tracking-[-0.03em] leading-[1.04] text-[clamp(36px,4.6vw,68px)]">
            Three channels,<br />one engine.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pt-20">
          <p className="text-body text-[15px] leading-[1.65] max-w-[44ch]">
            Each channel earns its weight; together they compound. One growth lead, one number, one funnel.
          </p>
        </div>
      </div>

      {/* Three cards in a row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {CHANNELS.map((c) => (
          <Link
            to={c.href}
            key={c.n}
            aria-label={`${c.title} — learn more`}
            className="group bg-bg border border-line-faint rounded-[24px] p-4 flex flex-col transition-all duration-300 hover:border-line hover:shadow-[0_28px_56px_-28px_rgba(10,20,38,0.28)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line"
          >
            <div className="relative aspect-square overflow-hidden rounded-[18px] bg-bg-soft">
              <img
                src={c.img}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-line text-white text-[11px] uppercase tracking-[0.18em] font-bold">
                {c.tag}
              </div>
            </div>
            <div className="px-2 pt-5 pb-2 flex flex-col gap-3 flex-1">
              <h3 className="text-heading text-[22px] sm:text-[24px] font-extrabold leading-[1.15] tracking-[-0.022em]">
                {c.title}
              </h3>
              <p className="text-body text-[14.5px] leading-[1.55]">{c.body}</p>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-3 pt-1">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-heading text-[12.5px] font-semibold tracking-[-0.005em]">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-line shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-4 inline-flex items-center gap-2 text-line text-[14px] font-semibold tracking-[-0.005em] transition-all duration-300 group-hover:gap-3 border-t border-line-faint">
                <span className="pt-3">Learn more</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-3 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- HOW IT RUNS — top-aligned header + horizontal rail with moving indicator ---------- */
const HowItRuns = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % STAGES.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [paused]);

  const progressPct = STAGES.length > 1 ? (active / (STAGES.length - 1)) * 100 : 0;

  return (
    <section className="border-t border-line-faint bg-bg">
      <div className="container-shell py-[clamp(64px,8.5vw,120px)]">
        {/* Header — kicker + heading on left, subtext on right (Advantages-style) */}
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-line font-semibold">
                How it runs
              </span>
            </div>
            <h2 className="text-heading font-extrabold leading-[0.98] tracking-[-0.035em] text-[clamp(34px,5vw,68px)]">
              How the engine runs.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-body text-[15.5px] leading-[1.65] max-w-[42ch]">
              One loop, repeated. Measure → prioritise → operate → compound. The cadence is the product.
            </p>
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Horizontal connector with animated progress */}
          <div aria-hidden="true" className="hidden md:block absolute left-0 right-0 top-[27px] px-[12.5%]">
            <div className="relative h-px bg-line-soft">
              <span
                className="absolute top-0 left-0 h-px bg-heading transition-[width] duration-700 ease-out"
                style={{ width: `${progressPct}%` }}
              />
              <span
                className="absolute -top-[5px] h-[11px] w-[11px] rounded-full bg-heading shadow-[0_0_0_4px_rgba(255,255,255,1),0_0_0_5px_rgba(10,20,38,0.12)] transition-[left] duration-700 ease-out"
                style={{ left: `calc(${progressPct}% - 5px)` }}
              />
            </div>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8 relative">
          {STAGES.map((s, i) => {
            const isActive = active === i;
            return (
              <li
                key={s.n}
                onClick={() => { setActive(i); setPaused(true); }}
                aria-current={isActive}
                className="relative flex flex-col gap-4 cursor-pointer"
              >
                <div
                  className={`relative w-14 h-14 rounded-[14px] border grid place-items-center transition-all duration-500 ${
                    isActive
                      ? 'border-line bg-line text-white -translate-y-0.5'
                      : 'border-line-faint bg-bg text-line'
                  }`}
                >
                  <span className="w-5 h-5 block">{s.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-mono text-[12px] text-line tracking-[0.18em] font-semibold">{s.n}</span>
                    <h4
                      className={`text-[22px] font-bold tracking-[-0.02em] transition-colors duration-500 ${
                        isActive ? 'text-heading' : 'text-heading/80'
                      }`}
                    >
                      {s.k}.
                    </h4>
                  </div>
                  <span className="text-muted text-[11.5px] uppercase tracking-[0.18em] font-semibold border border-line-faint rounded-full px-2.5 py-0.5 self-start">
                    {s.cadence}
                  </span>
                  <p className="text-body text-[14.5px] leading-[1.65]">{s.d}</p>
                </div>
              </li>
            );
          })}
        </ol>

          {/* Mobile progress dots */}
          <div className="md:hidden mt-6 flex items-center justify-center gap-1.5">
            {STAGES.map((s, i) => (
              <button
                key={s.n}
                type="button"
                onClick={() => { setActive(i); setPaused(true); }}
                aria-label={`Show ${s.k}`}
                aria-current={active === i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === i ? 'w-7 bg-heading' : 'w-1.5 bg-line-faint'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- STACK & INSTRUMENTATION ---------- */

const ToolTile = ({
  name,
  mark,
  use,
  idx,
  category,
}: {
  name: string;
  mark: string;
  use: string;
  idx: number;
  category: string;
}) => (
  <div className="relative h-full w-full rounded-[18px] overflow-hidden bg-heading isolate">
    <span
      aria-hidden="true"
      className="absolute -top-16 -left-12 w-56 h-56 rounded-full opacity-25"
      style={{ background: 'radial-gradient(circle at 50% 50%, #8FBC8F 0%, transparent 60%)' }}
    />
    <span
      aria-hidden="true"
      className="absolute -bottom-20 -right-16 w-64 h-64 rounded-full opacity-20"
      style={{ background: 'radial-gradient(circle at 50% 50%, #B38B6D 0%, transparent 60%)' }}
    />
    <span
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          'linear-gradient(0deg, #fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    />

    <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col justify-between">
      <div className="flex items-start justify-between gap-4">
        <span className="w-14 h-14 rounded-[12px] bg-white/[0.08] backdrop-blur border border-white/15 grid place-items-center text-white font-mono font-bold text-[15px] tracking-[0.04em]">
          {mark}
        </span>
        <div className="flex flex-col items-end gap-1.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.08] backdrop-blur border border-white/15 text-[9.5px] uppercase tracking-[0.22em] font-bold text-accent-soft">
            <span className="h-1 w-1 rounded-full bg-accent-soft" />
            synced
          </span>
          <span className="font-mono text-[9.5px] text-white/45 tracking-[0.22em] uppercase">
            {category} · 0{idx + 1}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-14 bg-accent-soft/70 rounded-full" />
          <span className="h-1.5 flex-1 bg-white/15 rounded-full" />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-9 bg-white/40 rounded-full" />
          <span className="h-1.5 flex-1 bg-white/15 rounded-full" />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-20 bg-white/25 rounded-full" />
          <span className="h-1.5 w-6 bg-line/70 rounded-full" />
        </div>
        <div className="flex items-end gap-1.5 mt-3 h-12">
          {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-t-sm ${i === 5 ? 'bg-accent-soft' : 'bg-white/20'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="text-white font-extrabold text-[22px] tracking-[-0.02em] leading-tight">{name}</div>
        <div className="text-white/65 text-[12.5px] leading-[1.5] mt-1.5 max-w-[34ch]">{use}</div>
      </div>
    </div>
  </div>
);

const StackCard = ({ group, idx, total }: { group: StackGroupExt; idx: number; total: number }) => {
  const [active, setActive] = useState(0);

  return (
    <article className="snap-start shrink-0 w-[300px] sm:w-[340px] lg:w-[380px] bg-bg border border-line-faint rounded-[22px] overflow-hidden flex flex-col transition-all duration-300 hover:border-line hover:shadow-[0_28px_56px_-28px_rgba(10,20,38,0.28)]">
      <div className="relative aspect-[4/5] bg-bg-soft overflow-hidden">
        {group.tools.map((t, i) => (
          <div
            key={t.name}
            className={`absolute inset-2 transition-all duration-500 ease-out ${
              i === active
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-3 scale-[0.98] pointer-events-none'
            }`}
            aria-hidden={i !== active}
          >
            <ToolTile
              name={t.name}
              mark={t.mark}
              use={t.use}
              idx={i}
              category={group.label}
            />
          </div>
        ))}

        <span className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur font-mono text-[10.5px] tracking-[0.2em] text-heading font-bold uppercase">
          {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <div className="px-5 sm:px-6 pt-5 pb-4 flex items-center gap-3 border-b border-line-faint">
        <span className="shrink-0 w-8 h-8 rounded-[8px] bg-bg-soft border border-line-faint text-line grid place-items-center">
          <span className="w-4 h-4 block">{group.icon}</span>
        </span>
        <div className="flex flex-col min-w-0">
          <span className="text-heading text-[13px] font-bold uppercase tracking-[0.18em]">{group.label}</span>
          <span className="text-muted text-[11.5px] leading-tight truncate">{group.tagline}</span>
        </div>
      </div>

      <ul role="tablist" aria-label={`${group.label} tools`} className="flex flex-col p-2">
        {group.tools.map((t, i) => {
          const isActive = i === active;
          return (
            <li key={t.name}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-all duration-200 text-left ${
                  isActive
                    ? 'bg-heading text-white shadow-[0_8px_22px_-12px_rgba(10,20,38,0.4)]'
                    : 'hover:bg-bg-soft'
                }`}
              >
                <span
                  className={`shrink-0 w-8 h-8 rounded-[7px] grid place-items-center font-mono text-[10.5px] tracking-[0.04em] font-bold transition-colors ${
                    isActive
                      ? 'bg-white/15 text-white border border-white/20'
                      : 'bg-heading text-white'
                  }`}
                >
                  {t.mark}
                </span>
                <span
                  className={`text-[14px] font-semibold tracking-[-0.005em] flex-1 ${
                    isActive ? 'text-white' : 'text-heading'
                  }`}
                >
                  {t.name}
                </span>
                <span
                  className={`shrink-0 transition-all ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent-soft"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

const Stack = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let moved = false;

    const onDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest('button')) return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      scrollStart = track.scrollLeft;
      track.style.cursor = 'grabbing';
      track.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 3) moved = true;
      track.scrollLeft = scrollStart - dx;
    };
    const onUp = (e: PointerEvent) => {
      if (!isDown) return;
      isDown = false;
      track.style.cursor = '';
      try { track.releasePointerCapture(e.pointerId); } catch { /* ignore */ }
      if (moved) {
        const blocker = (ev: Event) => {
          ev.stopPropagation();
          ev.preventDefault();
          track.removeEventListener('click', blocker, true);
        };
        track.addEventListener('click', blocker, true);
      }
    };

    track.addEventListener('pointerdown', onDown);
    track.addEventListener('pointermove', onMove);
    track.addEventListener('pointerup', onUp);
    track.addEventListener('pointercancel', onUp);

    const onScroll = () => {
      const max = track.scrollWidth - track.clientWidth;
      if (max <= 0) { setProgress(0); return; }
      setProgress(Math.min(1, Math.max(0, track.scrollLeft / max)));
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      track.removeEventListener('pointerdown', onDown);
      track.removeEventListener('pointermove', onMove);
      track.removeEventListener('pointerup', onUp);
      track.removeEventListener('pointercancel', onUp);
      track.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollByCard = (dir: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector('article') as HTMLElement | null;
    const step = (firstCard?.offsetWidth ?? 340) + 20;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="border-t border-line-faint bg-bg-alt">
      <div className="container-shell py-[clamp(64px,8.5vw,120px)]">
        <div className="flex items-center gap-3 text-line font-mono text-[11px] tracking-[0.22em] uppercase mb-7">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
          Our Stack
        </div>
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 items-end mb-12 lg:mb-16">
          <h2 className="lg:col-span-7 text-heading font-extrabold leading-[0.96] tracking-[-0.038em] text-[clamp(36px,5.4vw,74px)]">
            One stack across<br />every clinic surface.
          </h2>
          <p className="lg:col-span-4 lg:col-start-9 text-body text-[15px] leading-[1.65] max-w-[42ch]">
            Analytics, acquisition, automation, and clinical systems — instrumented under one roof so every booked visit traces back to the surface that produced it.
          </p>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-[clamp(20px,4vw,48px)] px-[clamp(20px,4vw,48px)] cursor-grab select-none [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            role="region"
            aria-label="Tool stack categories"
          >
            {STACK_GROUPS.map((g, i) => (
              <StackCard key={g.label} group={g} idx={i} total={STACK_GROUPS.length} />
            ))}
            <span aria-hidden="true" className="shrink-0 w-px" />
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-5 items-center">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted font-semibold whitespace-nowrap">
                Drag · swipe · scroll
              </span>
              <div className="relative h-px flex-1 bg-line-faint rounded-full overflow-hidden max-w-[280px]">
                <span
                  className="absolute top-0 left-0 h-full bg-heading rounded-full transition-[width] duration-150"
                  style={{ width: `${Math.max(8, progress * 100)}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 justify-self-end">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous category"
                className="w-11 h-11 rounded-full border border-line-faint text-heading grid place-items-center transition-all hover:border-line hover:bg-bg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next category"
                className="w-11 h-11 rounded-full bg-heading text-white grid place-items-center transition-all hover:bg-heading/85"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-10 text-muted text-[13px] leading-[1.6] max-w-[64ch]">
          Don&apos;t see your tool? We integrate with most modern PMS, EHR, CRM, and
          front-desk stacks via native APIs, Zapier, or Make. We bring instrumentation,
          not new vendors.
        </p>
      </div>
    </section>
  );
};

/* ---------- OUTCOMES — animated counters ---------- */

// Triggers once when an element scrolls into view. Disconnects after firing.
const useInView = <T extends HTMLElement>(threshold = 0.3) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
};

const CountUp = ({
  value,
  prefix = '',
  suffix = '',
  duration = 1700,
  trigger,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    if (typeof window === 'undefined' || !window.requestAnimationFrame) {
      setN(value);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, value, duration]);
  return (
    <span aria-live="polite">
      {prefix}
      <span className="tabular-nums">{n}</span>
      {suffix}
    </span>
  );
};

const Outcomes = () => {
  const [gridRef, inView] = useInView<HTMLDivElement>(0.25);

  return (
    <section className="border-t border-line-faint bg-bg">
      <div className="container-shell py-[clamp(64px,8.5vw,120px)]">
        {/* Editorial hero header */}
        <div className="flex items-center gap-3 text-line font-mono text-[11px] tracking-[0.22em] uppercase mb-7">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
          Outcomes · 05
        </div>
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 items-end mb-12 lg:mb-16">
          <h2 className="lg:col-span-7 text-heading font-extrabold leading-[0.96] tracking-[-0.038em] text-[clamp(36px,5.4vw,74px)]">
            What the engine<br />actually produces.
          </h2>
          <p className="lg:col-span-4 lg:col-start-9 text-body text-[15.5px] leading-[1.65] max-w-[44ch]">
            Aggregate outcomes across practices currently running on the engine — updated quarterly with anonymised, weighted data from active clients.
          </p>
        </div>

        {/* Counter grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
          {OUTCOMES.map((o, i) => (
            <article
              key={o.l}
              className="bg-bg border border-line-faint rounded-[18px] p-7 sm:p-8 flex flex-col gap-4 transition-all duration-300 hover:border-line hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-line font-bold">
                  {o.sub}
                </span>
                <span className="font-mono text-[10.5px] text-muted tracking-[0.18em] font-semibold">
                  0{i + 1}
                </span>
              </div>
              <span className="text-heading text-[clamp(48px,5.2vw,80px)] font-extrabold leading-[0.92] tracking-[-0.038em]">
                <CountUp
                  value={o.num}
                  prefix={o.prefix}
                  suffix={o.suffix}
                  trigger={inView}
                />
              </span>
              <span className="text-heading text-[16px] leading-[1.35] font-semibold tracking-[-0.008em]">
                {o.l}
              </span>
              <div className="mt-auto pt-4 border-t border-line-faint">
                <span className="text-muted text-[13.5px] leading-[1.5]">{o.vs}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-body text-[15px] leading-[1.65] max-w-[68ch]">
          Sample weighted across single-location, multi-location, and FSER clients running
          ≥ 6 months on the engine. Individual results vary by category and geography.
        </p>
      </div>
    </section>
  );
};

/* ---------- ENGAGEMENT PACKAGE ---------- */
const Package = () => (
  <section className="border-t border-line-faint bg-bg-alt">
    <div className="container-shell py-[clamp(64px,8.5vw,120px)]">
      {/* Editorial hero header */}
      <div className="flex items-center gap-3 text-line font-mono text-[11px] tracking-[0.22em] uppercase mb-7">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
        Engagement · 06
      </div>
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 items-end mb-12 lg:mb-16">
        <h2 className="lg:col-span-7 text-heading font-extrabold leading-[0.96] tracking-[-0.038em] text-[clamp(36px,5.4vw,74px)]">
          What you get,<br />week one.
        </h2>
        <p className="lg:col-span-4 lg:col-start-9 text-body text-[15.5px] leading-[1.65] max-w-[44ch]">
          A flat monthly engagement — three phases, one team, no surprise line items. Month-to-month after the first thirty days.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
        {PACKAGE.map((p, i) => (
          <article
            key={p.title}
            className="relative bg-bg rounded-[18px] p-7 sm:p-8 flex flex-col gap-5 border-2 border-line-faint transition-all duration-300 hover:border-line hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-line font-bold">
                Phase {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted font-semibold">
                {p.cadence}
              </span>
            </div>
            <h3 className="text-heading text-[30px] sm:text-[32px] font-extrabold tracking-[-0.024em] leading-[1.05]">
              {p.title}
            </h3>
            <span className="h-px bg-line-faint" />
            <ul className="space-y-3.5">
              {p.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-[15px] leading-[1.5]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-1 text-line"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="font-semibold text-heading">{it}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- VOICE / TESTIMONIAL ---------- */
const Voice = () => (
  <section className="border-t border-line-faint bg-bg">
    <div className="container-shell py-[clamp(64px,8.5vw,120px)]">
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10 items-center">
        <div className="lg:col-span-5">
          <figure className="relative rounded-[20px] overflow-hidden border border-line-faint aspect-[4/5] bg-bg-soft">
            <img
              src={imgTestimonial}
              alt="Clinic operator"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-heading/85 to-transparent text-white">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/70 mb-1">
                Multi-location · Texas
              </div>
              <div className="text-[15px] font-semibold">Dr. Imani Rao — Medical Director</div>
            </figcaption>
          </figure>
        </div>
        <div className="lg:col-span-7">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-line font-mono text-[13px] tracking-[0.18em]">07</span>
            <span className="h-px flex-1 bg-line-soft" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">Operator voice</span>
          </div>
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="text-line/30 mb-4" aria-hidden="true">
            <path d="M0 32V18.667C0 8.358 7.611 0 17 0v8c-4.418 0-8 4.776-8 10.667H17V32H0Zm23 0V18.667C23 8.358 30.611 0 40 0v8c-4.418 0-8 4.776-8 10.667H40V32H23Z" fill="currentColor"/>
          </svg>
          <blockquote className="text-heading text-[clamp(22px,2.6vw,34px)] font-bold leading-[1.25] tracking-[-0.02em]">
            We had four agencies in five years. The engine replaced all of them with one
            number on a Monday dashboard. Six months in we&apos;re booking <span className="text-line">61 % more</span> first visits
            for the same monthly budget.
          </blockquote>
          <div className="mt-8 grid grid-cols-3 gap-px bg-line-faint border border-line-faint rounded-[14px] overflow-hidden max-w-[480px]">
            {[
              { v: '+61%', l: 'first visits' },
              { v: '−42%', l: 'cost / visit' },
              { v: '5.2×',  l: 'recall ROI' },
            ].map((m) => (
              <div key={m.l} className="bg-bg px-4 py-3 flex flex-col gap-0.5">
                <span className="text-heading text-[20px] font-extrabold tracking-[-0.02em]">{m.v}</span>
                <span className="text-muted text-[10.5px] uppercase tracking-[0.18em] font-semibold">{m.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- FAQ ---------- */
const Faq = () => {
  const [openIdx, setOpenIdx] = useState<number>(() => FAQS.findIndex((f) => f.defaultOpen));

  return (
    <Section
      no="08"
      title="Common questions"
      kicker="Asked by operators on the first call. If your question isn't here, write us — we answer the same day."
      tone="alt"
    >
      <ul className="border-t border-line-faint">
        {FAQS.map((f, i) => {
          const open = openIdx === i;
          return (
            <li key={f.q} className="border-b border-line-faint">
              <button
                type="button"
                onClick={() => setOpenIdx(open ? -1 : i)}
                aria-expanded={open}
                className="w-full flex items-center justify-between gap-6 py-5 text-left group"
              >
                <span className="flex items-baseline gap-4 flex-1">
                  <span className="font-mono text-[12px] text-line tracking-[0.18em] font-semibold shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-heading text-[16px] sm:text-[18px] font-bold tracking-[-0.015em] leading-[1.35]">
                    {f.q}
                  </span>
                </span>
                <span
                  className={`shrink-0 w-9 h-9 rounded-full border border-line-faint grid place-items-center text-line transition-all duration-300 ${
                    open ? 'bg-heading text-white border-heading rotate-180' : 'group-hover:border-line'
                  }`}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  open ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pl-9 text-body text-[15px] leading-[1.7] max-w-[64ch]">{f.a}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

/* ---------- CLOSING ---------- */
const Closing = () => (
  <section className="border-t border-line-faint bg-bg">
    <div className="container-shell py-[clamp(64px,8.5vw,120px)]">
      {/* Bigger header on top */}
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 mb-12 lg:mb-16">
        <div className="lg:col-span-7">
          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-line font-mono text-[13px] tracking-[0.18em]">09</span>
            <span className="h-px flex-1 bg-line-soft" />
          </div>
          <h2 className="text-heading font-extrabold tracking-[-0.03em] leading-[1.04] text-[clamp(40px,5vw,72px)]">
            Start with the audit.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pt-16">
          <p className="text-body text-[clamp(16px,1.35vw,19px)] leading-[1.55] max-w-[44ch]">
            Two-week forensic of every search, ad, and front-desk surface your clinic owns. Yours to keep.
          </p>
        </div>
      </div>

      {/* Audit panel — pastel gradient background */}
      <article
        className="rounded-[20px] overflow-hidden border border-line-faint grid md:grid-cols-[1.2fr_1fr] text-heading"
        style={{
          background:
            'linear-gradient(90deg, #DBD4EC 0%, #C6D7EF 22%, #B9DDDB 48%, #CBE5BE 74%, #E8E1A8 100%)',
        }}
      >
        <div className="p-10 sm:p-14 relative flex flex-col">
          <div className="font-mono text-[11.5px] tracking-[0.22em] text-heading/65 font-semibold mb-6">
            AUDIT · 14 DAYS · CONFIDENTIAL · FREE
          </div>
          <h3 className="text-heading text-[clamp(28px,3.4vw,48px)] font-extrabold leading-[1.04] tracking-[-0.028em] max-w-[18ch]">
            See the engine on your own funnel.
          </h3>
          <p className="mt-5 text-heading/80 text-[15.5px] leading-[1.6] max-w-[50ch]">
            We hand you a one-page scorecard, a funnel leak map, and a prioritised
            fix list with dollar values. Yours to keep — take it to any agency or
            run it yourself.
          </p>
          <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2 max-w-[40ch]">
            {['9-surface scorecard', 'Funnel leak map', 'Dollar-priced fixes', 'No signup, no card'].map((b) => (
              <li key={b} className="flex items-center gap-2 text-heading/85 text-[14px] font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="text-heading" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link to="/free-growth-audit" className="btn-primary">
              Request the audit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="text-heading/85 text-[14px] font-semibold underline-offset-4 hover:underline"
            >
              Talk to a growth lead →
            </Link>
          </div>
        </div>
        <div className="relative min-h-[260px] md:min-h-[460px] overflow-hidden">
          <img
            src={imgClosing}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-95"
          />
        </div>
      </article>
    </div>
  </section>
);

/* ---------- ROOT ---------- */
const HealthcareGrowthEngine = () => (
  <>
    <Hero />
    <TrustStrip />
    <TheGap />
    <Channels />
    <HowItRuns />
    <Stack />
    <Outcomes />
    <Package />
    <Voice />
    <Faq />
    <Closing />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
    />
  </>
);

export default HealthcareGrowthEngine;
