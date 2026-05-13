import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const HEAD_META = [
  { label: 'Channel',  value: 'In-person · Field' },
  { label: 'Geo',      value: 'DFW + 4 metros' },
  { label: 'Cadence',  value: 'Weekly activations' },
  { label: 'Updated',  value: 'May 2026' },
];

const FIELD_CHANNELS = [
  {
    n: '01',
    name: 'Community Events',
    summary: 'Health fairs, school sports physicals, senior centers, corporate wellness days.',
    desc: 'A dedicated street team books, staffs, and reports on the 15–25 highest-yield community moments per metro. Branded booth, intake tablets, and same-day lead handoff to your front desk.',
  },
  {
    n: '02',
    name: 'B2B Referral Visits',
    summary: 'PCPs, OB-GYNs, urgent care, gyms, schools, employers.',
    desc: 'Quarterly visit cadence with named territory reps. Co-branded literature, lunch-and-learns, and a CRM-tracked referral loop so every drop-in turns into a measurable downstream consult.',
  },
  {
    n: '03',
    name: 'Door-to-Door Geo Drops',
    summary: 'Hyper-local print + intake card distribution.',
    desc: 'Targeted ZIP-level walks aligned with your highest-paying procedure. QR-tracked print pieces, every door an attributable touch in the dashboard.',
  },
  {
    n: '04',
    name: 'Sponsorship + Activations',
    summary: 'Local sports leagues, charity 5Ks, festival booths.',
    desc: 'Sponsorship deals that lock in screening tables, signage, and post-event lead exports. We negotiate the deal, staff the booth, and measure the ROI down to first-visit revenue.',
  },
];

const DELIVERABLES = [
  { tag: 'Field Ops',     list: ['Territory mapping', 'Booth + collateral kit', 'Trained brand ambassadors'] },
  { tag: 'Lead Capture',  list: ['Tablet intake forms', 'QR-coded print', 'Live CRM sync'] },
  { tag: 'Reporting',     list: ['Daily activation report', 'Cost per qualified lead', 'Booked-visit attribution'] },
  { tag: 'Compliance',    list: ['HIPAA-aware intake', 'Consent capture', 'Photo + media releases'] },
];

const METRICS = [
  { v: '320+',   k: 'Activations / yr',   d: 'Field events run for healthcare clients across DFW, Austin, Houston, and surrounding metros.' },
  { v: '$68',    k: 'Cost / qualified lead', d: 'Median cost per consult-ready lead from on-site activations across 2025 cohorts.' },
  { v: '4.1×',   k: 'ROAS',               d: 'Median return on field marketing spend, blended across community + B2B channels.' },
  { v: '11 days', k: 'Time to ramp',      d: 'From signed contract to first activated booth, including staffing and collateral.' },
];

const PROCESS = [
  { k: 'Map',      d: 'Audit your service area, payer mix, and current referral graph. Surface the 10 highest-yield community + B2B touchpoints.' },
  { k: 'Build',    d: 'Design the booth, collateral, intake flow, and CRM hand-off. Train the territory reps on your tone, services, and compliance.' },
  { k: 'Activate', d: 'Weekly cadence of events and visits across your metro. Live reporting from the field — every lead, every booked visit.' },
  { k: 'Compound', d: 'Quarterly review of channel ROAS. Cut the low performers, double the winners. The territory plan compounds month over month.' },
];

const SectionHead = ({ no, title, kicker }: { no: string; title: string; kicker?: string }) => (
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
);

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
        <SectionHead no={no} title={title} kicker={kicker} />
        <div className="lg:col-span-9">{children}</div>
      </div>
    </div>
  </section>
);

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Onsite Field Marketing" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            Field Ops · Community · B2B
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            On-the-ground marketing,
            <br />
            <span className="text-line italic">measurably</span>.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            Healthcare grows where doors open in person. We run the booth, walk the territory,
            and book the referral lunch — then attribute every lead back to first-visit revenue
            in your dashboard. Field marketing, accountable to the same numbers as paid media.
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
    title="The four field channels"
    kicker="Each channel runs as its own program with its own metrics, but they share the same lead pipeline."
  >
    <div className="border-t-2 border-heading">
      {FIELD_CHANNELS.map((c) => (
        <article
          key={c.n}
          className="grid lg:grid-cols-12 gap-x-10 gap-y-3 py-7 border-b border-line-faint items-baseline"
        >
          <div className="lg:col-span-1 font-mono text-line text-[14px] tracking-[0.18em]">
            {c.n}
          </div>
          <div className="lg:col-span-4">
            <h3 className="text-heading text-[24px] font-extrabold tracking-[-0.022em] leading-[1.05]">
              {c.name}
              <span className="text-line">.</span>
            </h3>
            <div className="mt-2 text-[12px] uppercase tracking-[0.16em] text-muted font-semibold">
              {c.summary}
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-body text-[16px] leading-[1.65]">{c.desc}</p>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

const Deliverables = () => (
  <Section
    no="02"
    title="What's in every engagement"
    kicker="Four working surfaces, all owned by your dedicated field lead — never tossed between vendors."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-line-faint border border-line-faint">
      {DELIVERABLES.map((d, i) => (
        <div key={d.tag} className="bg-bg p-6 flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[11px] text-line tracking-[0.18em]">
              0{i + 1}.
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-muted font-semibold">
              Surface
            </span>
          </div>
          <h4 className="text-heading text-[18px] font-bold tracking-[-0.015em]">{d.tag}</h4>
          <ul className="space-y-2 text-[13px] text-body mt-auto">
            {d.list.map((l) => (
              <li key={l} className="flex gap-2 items-baseline">
                <span className="text-line">—</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

const Metrics = () => (
  <Section
    no="03"
    title="What the program moves"
    kicker="Median across DFW healthcare clients, 2025. Pulled from the same dashboard your team logs into daily."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-heading">
      {METRICS.map((m, i) => (
        <div key={m.k} className="bg-bg p-7 flex flex-col gap-3">
          <span className="font-mono text-[11px] text-line tracking-[0.18em]">
            0{i + 1}.
          </span>
          <div className="text-heading font-extrabold text-[clamp(36px,4.2vw,52px)] leading-[0.95] tracking-[-0.035em] tabular-nums">
            {m.v}
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">
            {m.k}
          </div>
          <p className="text-body text-[13px] leading-[1.55] mt-1 max-w-[28ch]">{m.d}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Process = () => (
  <Section
    no="04"
    title="How the program runs"
    kicker="Four phases, ninety days to a self-sustaining field motion."
  >
    <div className="border-t-2 border-heading">
      {PROCESS.map((s, i) => (
        <div
          key={s.k}
          className="grid lg:grid-cols-12 gap-x-10 gap-y-2 py-6 border-b border-line-faint items-baseline"
        >
          <div className="lg:col-span-1 font-mono text-line text-[13px] tracking-[0.18em]">
            0{i + 1}.
          </div>
          <div className="lg:col-span-3 text-heading font-bold text-[20px] tracking-[-0.018em]">
            {s.k}
          </div>
          <div className="lg:col-span-8">
            <p className="text-body text-[15.5px] leading-[1.65]">{s.d}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Closing = () => (
  <Section
    no="05"
    title="Book a territory walk"
    kicker="One-hour working session. We map your service area, surface the highest-yield channels, and price a 90-day pilot."
  >
    <div className="bg-heading text-white p-10 sm:p-14 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-[5px] bg-gradient-to-r from-accent-soft via-line to-cta" />
      <div className="font-mono text-[12px] tracking-[0.22em] text-line uppercase">
        Territory Walk · No Cost
      </div>
      <h3 className="mt-5 text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-[-0.028em] max-w-[22ch]">
        Doors open faster when someone is there to open them.
      </h3>
      <p className="mt-6 text-white/75 text-[16px] leading-[1.6] max-w-[58ch]">
        We will not staff a single booth without a territory plan and a defined ROAS target.
        Book the walk, walk away with the plan — pilot only if the math holds up.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Link to="/contact" className="btn-primary">
          Book the walk →
        </Link>
        <Link
          to="/case-studies"
          className="text-white/85 text-[14px] font-medium underline-offset-4 hover:underline"
        >
          See field case studies
        </Link>
      </div>
    </div>
  </Section>
);

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Onsite Field Marketing for Healthcare',
  serviceType: 'Field Marketing · Community Activations · B2B Referrals',
  provider: {
    '@type': 'LocalBusiness',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgenhealth.com',
  },
  areaServed: ['Dallas', 'Fort Worth', 'Austin', 'Houston', 'San Antonio'],
  description:
    'Community activations, B2B referral visits, geo-targeted print, and sponsorships — staffed, attributed, and reported. Field marketing for clinics, medspas, urgent care, and multi-location healthcare brands.',
  offers: {
    '@type': 'Offer',
    description: '90-day field marketing pilot with full attribution dashboard.',
  },
};

const OnsiteFieldMarketing = () => (
  <>
    <Hero />
    <Channels />
    <Deliverables />
    <Metrics />
    <Process />
    <Closing />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
    />
  </>
);

export default OnsiteFieldMarketing;
