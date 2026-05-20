import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import imgSeo from '../../assets/Local Search.png';
import imgPaid from '../../assets/paidmedia.png';
import imgAutomation from '../../assets/medicalautomation.png';
import imgClosing from '../../assets/builtforclinic.png';

/* ============================================================
   HEALTHCARE GROWTH ENGINE - bordered-card layout.
   Each section pairs a 3-col label rail with a visual content
   block. Image-led channel cards, iconified process stages,
   prominent stat cards, image+content closing CTA. Swiss grid
   + bordered boxes = scannable without losing typographic
   discipline.
   ============================================================ */

const HEAD_META = [
  { label: 'Channels',  value: 'SEO · Paid · Automation' },
  { label: 'Cycle',     value: 'Daily ops, weekly review' },
  { label: 'Reporting', value: 'Live dashboard' },
  { label: 'Engaged',   value: '200+ practices' },
];

interface Channel {
  n: string;
  tag: string;
  title: string;
  body: string;
  img: string;
  href: string;
}

const CHANNELS: Channel[] = [
  {
    n: '01',
    tag: 'Discovery',
    title: 'SEO & Local Search',
    body: 'Technical SEO, local pack, schema, and content that ranks for the searches patients actually run.',
    img: imgSeo,
    href: '/services/seo-local-search',
  },
  {
    n: '02',
    tag: 'Demand',
    title: 'Paid Media',
    body: 'Google Ads and Meta tuned for booked appointments - not impressions, not clicks, not vanity.',
    img: imgPaid,
    href: '/services/google-ads',
  },
  {
    n: '03',
    tag: 'Retention',
    title: 'Automation & AI',
    body: 'Recall, reactivation, intake, and review flows running inside the systems your clinic already uses.',
    img: imgAutomation,
    href: '/automation',
  },
];

interface Stage {
  n: string;
  k: string;
  d: string;
  icon: React.ReactNode;
}

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
  { n: '01', k: 'Measure',    d: 'Read-only access to GA4, GSC, GBP, ad accounts, and the CRM. Map the funnel before we touch anything.', icon: <IconMeasure /> },
  { n: '02', k: 'Prioritise', d: 'One scorecard. Every channel scored, every fix priced. The top five ship inside the first 30 days.',       icon: <IconPriority /> },
  { n: '03', k: 'Operate',    d: 'Daily ops on every active channel. Weekly Loom + live dashboard. One growth lead, one number.',            icon: <IconOperate /> },
  { n: '04', k: 'Compound',   d: 'Quarterly re-forecasts. Spend tilts to what is paying back. Every line item re-earns its place.',          icon: <IconCompound /> },
];

interface Outcome {
  v: string;
  l: string;
  sub: string;
}

const OUTCOMES: Outcome[] = [
  { v: '120+', sub: 'programs', l: 'Growth programs launched' },
  { v: '+78%', sub: 'year one', l: 'Avg. patient growth' },
  { v: '−38%', sub: 'paid',     l: 'Cost per booked visit' },
  { v: '14 d', sub: 'go-live',  l: 'From signed to first lift' },
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

const Section = ({
  no,
  title,
  kicker,
  children,
}: {
  no: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(56px,8vw,112px)]">
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
            <p className="mt-3 text-muted text-[14px] leading-[1.55] max-w-[34ch]">{kicker}</p>
          )}
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </div>
  </section>
);

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Healthcare Growth Engine" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            Growth Engine · 2026
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            Patient growth,<br />
            <span className="text-line">engineered</span>.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            One integrated system across SEO, paid media, and automation -
            instrumented end-to-end, reviewed weekly, tuned for the economics
            of a clinic.
          </p>
        </div>
        <div className="lg:col-span-4">
          <div className="border-t-2 border-heading">
            {HEAD_META.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-2 py-3 border-b border-line-faint text-[14px]"
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

const Channels = () => (
  <Section
    no="01"
    title="Three channels, one engine"
    kicker="Each channel earns its weight; together they compound. One growth lead, one number to hit."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {CHANNELS.map((c) => (
        <Link
          to={c.href}
          key={c.n}
          aria-label={`${c.title} — learn more`}
          className="group bg-bg border-2 border-line-faint rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 hover:border-line hover:shadow-[0_28px_56px_-28px_rgba(10,20,38,0.28)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line"
        >
          <div className="relative aspect-[5/4] overflow-hidden bg-bg-soft">
            <img
              src={c.img}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            />
            <div className="absolute top-4 left-4 px-2.5 py-1.5 rounded-md bg-white/90 backdrop-blur-sm font-mono text-[12px] tracking-[0.18em] text-line font-semibold">
              {c.n}
            </div>
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-heading/90 backdrop-blur-sm text-[11px] uppercase tracking-[0.18em] text-white font-bold">
              {c.tag}
            </div>
          </div>
          <div className="p-7 sm:p-9 flex flex-col gap-4 flex-1">
            <h3 className="text-heading text-[26px] sm:text-[28px] font-extrabold leading-[1.08] tracking-[-0.022em]">
              {c.title}
            </h3>
            <p className="text-body text-[15.5px] leading-[1.65]">{c.body}</p>
            <span className="mt-auto pt-2 inline-flex items-center gap-2 text-line text-[14px] font-semibold tracking-[-0.005em] transition-transform duration-300 group-hover:gap-3">
              Learn more
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
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
  </Section>
);

const HowItRuns = () => (
  <Section
    no="02"
    title="How the engine runs"
    kicker="Same loop, run weekly. Measure → prioritise → operate → compound."
  >
    <div className="grid sm:grid-cols-2 gap-5">
      {STAGES.map((s) => (
        <article
          key={s.n}
          className="relative bg-bg border border-line-faint rounded-[14px] p-6 sm:p-7 flex gap-5 items-start transition-all duration-300 hover:border-line hover:shadow-[0_18px_40px_-28px_rgba(10,20,38,0.22)]"
        >
          <div className="shrink-0 w-12 h-12 rounded-[10px] border border-line-faint bg-bg-soft text-line grid place-items-center">
            <span className="w-5 h-5 block">{s.icon}</span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[12px] text-line tracking-[0.18em]">{s.n}</span>
              <h4 className="text-heading text-[20px] font-bold tracking-[-0.018em]">{s.k}.</h4>
            </div>
            <p className="text-body text-[14.5px] leading-[1.6]">{s.d}</p>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

const Outcomes = () => (
  <Section
    no="03"
    title="What it produces"
    kicker="Aggregate outcomes across practices currently running on the engine. Updated quarterly."
  >
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
      {OUTCOMES.map((o) => (
        <article
          key={o.l}
          className="bg-bg border border-line-faint rounded-[14px] p-7 flex flex-col gap-3 transition-all duration-300 hover:border-line hover:-translate-y-0.5"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-line">
            {o.sub}
          </span>
          <span className="text-heading text-[clamp(34px,3.4vw,52px)] font-extrabold leading-[1] tracking-[-0.028em]">
            {o.v}
          </span>
          <span className="text-muted text-[13px] uppercase tracking-[0.16em] font-semibold">
            {o.l}
          </span>
        </article>
      ))}
    </div>
  </Section>
);

const Closing = () => (
  <Section
    no="04"
    title="Start with the audit"
    kicker="Two-week forensic of every search, ad, and front-desk surface your clinic owns. Free, no signup."
  >
    <article className="bg-heading text-white rounded-[16px] overflow-hidden border border-heading grid md:grid-cols-[1.2fr_1fr]">
      <div className="p-10 sm:p-14 relative flex flex-col">
        <div className="font-mono text-[11px] tracking-[0.22em] text-white/60 mb-6">
          AUDIT · 14 DAYS · CONFIDENTIAL
        </div>
        <h3 className="text-[clamp(28px,3.4vw,48px)] font-extrabold leading-[1.04] tracking-[-0.028em] max-w-[18ch]">
          See the engine on your own funnel.
        </h3>
        <p className="mt-5 text-white/75 text-[15.5px] leading-[1.6] max-w-[50ch]">
          We hand you a one-page scorecard, a funnel leak map, and a prioritised
          fix list with dollar values. Yours to keep - take it to any agency or
          run it yourself.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link to="/free-growth-audit" className="btn-primary">
            Request the audit →
          </Link>
          <Link
            to="/services"
            className="text-white/85 text-[14px] font-medium underline-offset-4 hover:underline"
          >
            Browse services
          </Link>
        </div>
      </div>
      <div className="relative min-h-[260px] md:min-h-[420px] bg-accent-soft/10 overflow-hidden">
        <img
          src={imgClosing}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(26,36,56,0.55) 0%, rgba(26,36,56,0.10) 30%, rgba(26,36,56,0) 70%)',
          }}
        />
      </div>
    </article>
  </Section>
);

const HealthcareGrowthEngine = () => (
  <>
    <Hero />
    <Channels />
    <HowItRuns />
    <Outcomes />
    <Closing />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
    />
  </>
);

export default HealthcareGrowthEngine;
