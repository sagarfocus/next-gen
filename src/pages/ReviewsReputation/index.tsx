import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const HEAD_META = [
  { label: 'Coverage',   value: 'Google · Yelp · Healthgrades · Zocdoc' },
  { label: 'Frequency',  value: 'Daily monitoring' },
  { label: 'Response',   value: 'Inside 4 hours' },
  { label: 'Updated',    value: 'May 2026' },
];

const FLOW = [
  { n: '01', k: 'Detect',  d: 'Daily sweep across rated channels. Sentiment classified before triage.' },
  { n: '02', k: 'Sort',    d: 'Promoters routed to public review. Detractors routed to private resolution.' },
  { n: '03', k: 'Respond', d: 'On-brand replies inside four hours, compliant with HIPAA non-disclosure.' },
  { n: '04', k: 'Report',  d: 'Weekly digest with theme analysis. Operational issues flagged to clinic leadership.' },
];

const CHANNELS = [
  { name: 'Google',       focus: 'Local Pack lift',       d: 'Highest-weight channel for local search ranking. The flagship of any reputation programme.' },
  { name: 'Yelp',         focus: 'Brand search',          d: 'Skews older patient cohorts. Important for indemnity insurance-led decisions.' },
  { name: 'Healthgrades', focus: 'Trust signal',          d: 'Indexed prominently in branded SERPs. Often the second result in a doctor name search.' },
  { name: 'Zocdoc',       focus: 'Booking velocity',      d: 'Conversion-stage channel. Reviews here translate directly into appointment bookings.' },
];

const OUTCOMES = [
  { v: '★4.9', k: 'Median rating',  d: 'Across retained practices after 6 months of structured collection.' },
  { v: '+72',  k: 'Reviews / qtr',  d: 'Median new reviews per quarter once the collection flow is live.' },
  { v: '<4h',  k: 'Response SLA',   d: 'Median first-response time across all monitored review channels.' },
  { v: '+28%', k: 'Local Pack',     d: 'Lift in Local Pack appearance for the top 20 service queries.' },
];

const Section = ({ no, title, kicker, children }: { no: string; title: string; kicker?: string; children: React.ReactNode }) => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(56px,8vw,112px)]">
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
        <div className="lg:col-span-3">
          <div className="flex items-baseline gap-3">
            <span className="text-line font-mono text-[13px] tracking-[0.18em]">{no}</span>
            <span className="h-px flex-1 bg-line-soft" />
          </div>
          <h2 className="mt-4 text-heading text-[clamp(22px,2vw,30px)] font-bold tracking-[-0.02em] leading-[1.1]">{title}</h2>
          {kicker && <p className="mt-3 text-muted text-[14px] leading-[1.55] max-w-[34ch]">{kicker}</p>}
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </div>
  </section>
);

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Reviews & Reputation" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            Reviews · Reputation · Local Pack
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            5-star is a<br/>
            <span className="text-line">system</span>, not luck.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            A reputation engine that collects, sorts and replies — without exposing PHI, without
            burning patient trust, without breaking platform rules. The same loop that lifts
            Google Local Pack ranking on a 90-day curve.
          </p>
        </div>
        <div className="lg:col-span-4">
          <div className="border-t-2 border-heading">
            {HEAD_META.map((row) => (
              <div key={row.label} className="grid grid-cols-2 py-3 border-b border-line-faint text-[13px]">
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

const Flow = () => (
  <Section no="01" title="The Detect → Sort → Respond → Report loop" kicker="Four steps. Sentiment-aware throughout. Compliant with HIPAA non-disclosure.">
    <div className="space-y-[1px] bg-line-faint border border-line-faint">
      {FLOW.map((f, i) => (
        <div key={f.n} className="bg-bg p-8 grid lg:grid-cols-12 gap-x-10 gap-y-4 items-center">
          <div className="lg:col-span-1 font-mono text-line text-[18px] tracking-[0.16em]">{f.n}</div>
          <div className="lg:col-span-3">
            <h3 className="text-heading text-[32px] font-extrabold tracking-[-0.022em] leading-none">{f.k}<span className="text-line">.</span></h3>
          </div>
          <div className="lg:col-span-7">
            <p className="text-body text-[15.5px] leading-[1.6]">{f.d}</p>
          </div>
          <div className="lg:col-span-1 lg:text-right text-muted text-[12px]">
            {i < FLOW.length - 1 ? '↓' : '★'}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Channels = () => (
  <Section no="02" title="Channels we monitor" kicker="Four primary rating channels. Each one has a distinct job in patient acquisition.">
    <div className="grid sm:grid-cols-2 gap-[1px] bg-line-faint border border-line-faint">
      {CHANNELS.map((c, i) => (
        <div key={c.name} className="bg-bg p-7 sm:p-8">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[12px] text-line tracking-[0.18em]">0{i + 1}.</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">{c.focus}</span>
          </div>
          <h3 className="mt-5 text-heading text-[30px] font-extrabold tracking-[-0.022em] leading-none">{c.name}</h3>
          <p className="mt-5 text-body text-[14.5px] leading-[1.6]">{c.d}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Outcomes = () => (
  <Section no="03" title="What the loop produces" kicker="Aggregate read from active engagements running the full programme.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-heading">
      {OUTCOMES.map((o, i) => (
        <div key={o.k} className="bg-bg p-7 flex flex-col gap-3">
          <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}.</span>
          <div className="text-heading font-extrabold text-[52px] leading-[0.95] tracking-[-0.035em] tabular-nums">{o.v}</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">{o.k}</div>
          <p className="text-body text-[13px] leading-[1.55] mt-1 max-w-[28ch]">{o.d}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Closing = () => (
  <Section no="04" title="A 30-day reputation pilot" kicker="Flat-fee pilot. Connect channels, install the flow, measure baseline lift.">
    <div className="bg-bg-soft p-10 sm:p-14 border-l-4 border-line">
      <div className="grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <div className="font-mono text-[12px] tracking-[0.2em] text-line uppercase">30-Day Pilot</div>
          <h3 className="mt-5 text-heading text-[clamp(30px,3.5vw,46px)] font-extrabold leading-[1.05] tracking-[-0.026em] max-w-[20ch]">
            Hand us the inbox. We&rsquo;ll hand back a baseline.
          </h3>
          <p className="mt-5 text-body text-[16px] leading-[1.65] max-w-[56ch]">
            Connect Google, Yelp, Healthgrades and Zocdoc. We install the listening flow,
            classify the last 90 days, and deliver a reputation baseline that becomes the
            starting line for the engagement.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
          <Link to="/contact" className="btn-primary">Start the pilot →</Link>
          <Link to="/case-studies" className="text-heading text-[14px] font-medium underline-offset-4 hover:underline">
            Read reputation case studies
          </Link>
        </div>
      </div>
    </div>
  </Section>
);

const ReviewsReputation = () => (
  <>
    <Hero />
    <Flow />
    <Channels />
    <Outcomes />
    <Closing />
  </>
);

export default ReviewsReputation;
