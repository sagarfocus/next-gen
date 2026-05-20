import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import loopVisual from '../../assets/analytics and report.png';
import channelsVisual from '../../assets/ouradvanbtage.png';
import closingVisual from '../../assets/builtforclinic.png';

/* ============================================================
   REVIEWS & REPUTATION — editorial redesign
   Tone-coded loop progression (sage → tan → cta → navy),
   premium card hierarchy, decorative gradient panel for the
   header rows, and color-tinted channel cards.
   ============================================================ */

const HEAD_META = [
  { label: 'Coverage',  value: 'Google · Yelp · Healthgrades · Zocdoc' },
  { label: 'Frequency', value: 'Daily monitoring' },
  { label: 'Response',  value: 'Inside 4 hours' },
  { label: 'Updated',   value: 'May 2026' },
];

/* ─── Flow icons (4 steps) ─── */
const IconDetect = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M16 16l5 5" />
    <path d="M11 8v3l2 1" />
  </svg>
);
const IconSort = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 5h18l-7 9v6l-4-2v-4z" />
  </svg>
);
const IconRespond = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
  </svg>
);
const IconReport = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 3v18h18" />
    <path d="M7 14l3-4 4 3 5-7" />
  </svg>
);

interface FlowStep {
  n: string;
  k: string;
  d: string;
  icon: React.ReactNode;
  tone: { hex: string; soft: string };
}

const FLOW: FlowStep[] = [
  { n: '01', k: 'Detect',  d: 'Daily sweep across rated channels. Sentiment classified before triage.',                   icon: <IconDetect />,  tone: { hex: '#5A8F5A', soft: 'rgba(143, 188, 143, 0.18)' } },
  { n: '02', k: 'Sort',    d: 'Promoters routed to public review. Detractors routed to private resolution.',             icon: <IconSort />,    tone: { hex: '#B38B6D', soft: 'rgba(179, 139, 109, 0.18)' } },
  { n: '03', k: 'Respond', d: 'On-brand replies inside four hours, compliant with HIPAA non-disclosure.',                 icon: <IconRespond />, tone: { hex: '#576DB5', soft: 'rgba(87, 109, 181, 0.16)'  } },
  { n: '04', k: 'Report',  d: 'Weekly digest with theme analysis. Operational issues flagged to clinic leadership.',     icon: <IconReport />,  tone: { hex: '#2D3748', soft: 'rgba(45, 55, 72, 0.10)'    } },
];

/* ─── Channel glyphs (simplified vector marks, not trademark logos) ─── */
const IconGoogle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12a9 9 0 1 1-3.2-6.9" />
    <path d="M12 12h9" />
  </svg>
);
const IconYelp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="12 2 14.6 8.6 21.6 9.2 16.4 13.8 18 20.6 12 17 6 20.6 7.6 13.8 2.4 9.2 9.4 8.6" />
  </svg>
);
const IconHealthgrades = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.8 9.5c0 5.3-8.8 10-8.8 10s-8.8-4.7-8.8-10a5.5 5.5 0 0 1 10-3.2 5.5 5.5 0 0 1 7.6 3.2z" />
    <path d="M9 12h2v-2h2v2h2v2h-2v2h-2v-2H9z" />
  </svg>
);
const IconZocdoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 4h12L6 20h12" />
  </svg>
);

interface ChannelEntry {
  name: string;
  focus: string;
  d: string;
  icon: React.ReactNode;
  tone: { hex: string; soft: string };
}

const CHANNELS: ChannelEntry[] = [
  { name: 'Google',       focus: 'Local Pack lift',  d: 'Highest-weight channel for local search ranking. The flagship of any reputation programme.', icon: <IconGoogle />,       tone: { hex: '#576DB5', soft: 'rgba(87, 109, 181, 0.14)'  } },
  { name: 'Yelp',         focus: 'Brand search',     d: 'Skews older patient cohorts. Important for indemnity insurance-led decisions.',               icon: <IconYelp />,         tone: { hex: '#B33A2B', soft: 'rgba(179, 58, 43, 0.12)'   } },
  { name: 'Healthgrades', focus: 'Trust signal',     d: 'Indexed prominently in branded SERPs. Often the second result in a doctor name search.',      icon: <IconHealthgrades />, tone: { hex: '#5A8F5A', soft: 'rgba(143, 188, 143, 0.18)' } },
  { name: 'Zocdoc',       focus: 'Booking velocity', d: 'Conversion-stage channel. Reviews here translate directly into appointment bookings.',         icon: <IconZocdoc />,       tone: { hex: '#B38B6D', soft: 'rgba(179, 139, 109, 0.18)' } },
];

interface Outcome {
  v: string;
  k: string;
  d: string;
}

const OUTCOMES: Outcome[] = [
  { v: '★4.9', k: 'Median rating', d: 'Across retained practices after 6 months of structured collection.' },
  { v: '+72',  k: 'Reviews / qtr', d: 'Median new reviews per quarter once the collection flow is live.' },
  { v: '<4h',  k: 'Response SLA',  d: 'Median first-response time across all monitored review channels.' },
  { v: '+28%', k: 'Local Pack',    d: 'Lift in Local Pack appearance for the top 20 service queries.' },
];

/* ─── Editorial section header — bold all-caps + arrow chain on the right ─── */
const SectionHeader = ({
  no,
  eyebrow,
  title,
  kicker,
}: {
  no: string;
  eyebrow?: string;
  title: React.ReactNode;
  kicker?: string;
}) => (
  <header className="mb-[clamp(40px,5vw,72px)] grid lg:grid-cols-12 gap-x-12 gap-y-6 items-end">
    <div className="lg:col-span-8">
      <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.24em] uppercase">
        <span className="font-bold">{no}</span>
        <span className="h-px w-16 bg-line-soft" />
        {eyebrow && <span>{eyebrow}</span>}
      </div>
      <h2 className="mt-5 text-heading font-extrabold uppercase leading-[1.02] tracking-[-0.022em] text-[clamp(28px,4.4vw,56px)]">
        {title}
      </h2>
    </div>
    {kicker && (
      <p className="lg:col-span-4 text-body text-[15px] leading-[1.7] max-w-[44ch]">{kicker}</p>
    )}
  </header>
);

/* ─── Hero ─── */
const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Reviews & Reputation" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            Reviews · Reputation · Local Pack
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            5-star is a<br />
            <span className="text-line">system</span>, not luck.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            A reputation engine that collects, sorts and replies — without exposing PHI, without
            burning patient trust, without breaking platform rules. The same loop that lifts
            Google Local Pack ranking on a 90-day curve.
          </p>
        </div>
        <div className="lg:col-span-5">
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

/* ─── Section 01: The Detect → Sort → Respond → Report loop ─── */
const Flow = () => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <SectionHeader
        no="01"
        eyebrow="The loop"
        title={
          <>
            The Detect <span className="text-line">→</span> Sort{' '}
            <span className="text-line">→</span> Respond{' '}
            <span className="text-line">→</span> Report loop.
          </>
        }
        kicker="Four steps. Sentiment-aware throughout. Compliant with HIPAA non-disclosure. The loop runs daily and reports weekly to clinic leadership."
      />

      {/* Flow cards on soft gradient panel with connecting line */}
      <div
        className="relative rounded-[24px] p-6 sm:p-10 lg:p-14"
        style={{
          background:
            'linear-gradient(90deg, #DDD9E5 0%, #DDE3DC 50%, #EFE7CD 100%)',
        }}
      >
        {/* Feature visual — system at work, set inside the gradient panel */}
        <div className="relative mb-8 lg:mb-12 grid lg:grid-cols-[2fr_3fr] gap-6 lg:gap-10 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm font-mono text-[11px] tracking-[0.18em] uppercase text-line font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-soft" />
              The system, at work
            </span>
            <h3 className="mt-4 text-heading text-[clamp(22px,2.4vw,32px)] font-extrabold tracking-[-0.022em] leading-[1.08]">
              Every signal classified, routed, and reported in one place.
            </h3>
            <p className="mt-3 text-body text-[14.5px] leading-[1.6] max-w-[44ch]">
              A single dashboard tracks sentiment, response time, theme analysis, and Local Pack
              movement — so leadership sees the same number the loop ships against.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-[18px] overflow-hidden border border-white/60 bg-white shadow-[0_28px_60px_-32px_rgba(45,55,72,0.30)]">
              <img
                src={loopVisual}
                alt=""
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Decorative dashed connecting curve (desktop) */}
        <svg
          className="hidden lg:block absolute left-0 right-0 bottom-[200px] w-full h-[40px] pointer-events-none"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 80 20 C 280 -10, 380 50, 580 20 S 880 -10, 1120 20"
            fill="none"
            stroke="url(#fline)"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
          <defs>
            <linearGradient id="fline" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5A8F5A" />
              <stop offset="33%" stopColor="#B38B6D" />
              <stop offset="66%" stopColor="#576DB5" />
              <stop offset="100%" stopColor="#2D3748" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {FLOW.map((f) => (
            <article
              key={f.n}
              className="group bg-white border border-line-faint rounded-[18px] p-6 sm:p-7 flex flex-col gap-5 shadow-[0_18px_38px_-28px_rgba(45,55,72,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_48px_-26px_rgba(45,55,72,0.28)]"
            >
              <div className="flex items-start justify-between">
                <span
                  className="inline-grid place-items-center w-12 h-12 rounded-full font-mono text-[15px] font-bold border-2 bg-white"
                  style={{ borderColor: f.tone.hex, color: f.tone.hex }}
                >
                  {f.n}
                </span>
                <span
                  className="inline-grid place-items-center w-12 h-12 rounded-[12px] shrink-0"
                  style={{ background: f.tone.soft, color: f.tone.hex }}
                  aria-hidden="true"
                >
                  <span className="w-6 h-6 block">{f.icon}</span>
                </span>
              </div>
              <h3 className="text-heading text-[26px] font-extrabold tracking-[-0.022em] leading-[1.05]">
                {f.k}
                <span style={{ color: f.tone.hex }}>.</span>
              </h3>
              <p className="text-body text-[14px] leading-[1.6]">{f.d}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Section 02: Channels we monitor ─── */
const Channels = () => (
  <section className="border-t border-line-faint bg-bg-alt">
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <SectionHeader
        no="02"
        eyebrow="Coverage"
        title={<>Channels we monitor.</>}
        kicker="Four primary rating channels. Each one has a distinct job in patient acquisition — and a distinct way of being optimised."
      />

      {/* Wide feature image — sets the visual context for the channel grid */}
      <div className="mb-8 lg:mb-12 relative rounded-[20px] overflow-hidden border border-line-faint bg-bg-soft aspect-[21/9] shadow-[0_24px_56px_-32px_rgba(45,55,72,0.24)]">
        <img
          src={channelsVisual}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(26, 36, 56, 0.55) 0%, rgba(26, 36, 56, 0.05) 55%, rgba(26, 36, 56, 0) 100%)',
          }}
        />
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 max-w-[40ch] text-white">
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase font-bold text-white/85">
            One dashboard · Four channels
          </span>
          <h3 className="mt-2 text-[clamp(22px,2.4vw,30px)] font-extrabold tracking-[-0.022em] leading-[1.1]">
            Sentiment, ranking, and response time — measured side by side.
          </h3>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
        {CHANNELS.map((c, i) => (
          <article
            key={c.name}
            className="group relative bg-white border border-line-faint rounded-[20px] overflow-hidden p-7 sm:p-9 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_48px_-24px_rgba(45,55,72,0.22)]"
          >
            {/* Top accent strip in the channel's tone */}
            <span
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: c.tone.hex }}
              aria-hidden="true"
            />

            <div className="flex items-start justify-between">
              <span className="font-mono text-[12px] text-muted tracking-[0.18em] font-bold">
                0{i + 1}.
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10.5px] uppercase tracking-[0.18em] font-bold"
                style={{ background: c.tone.soft, color: c.tone.hex }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: c.tone.hex }}
                  aria-hidden="true"
                />
                {c.focus}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span
                className="inline-grid place-items-center w-14 h-14 rounded-[14px] shrink-0"
                style={{ background: c.tone.soft, color: c.tone.hex }}
                aria-hidden="true"
              >
                <span className="w-7 h-7 block">{c.icon}</span>
              </span>
              <h3 className="text-heading text-[32px] font-extrabold tracking-[-0.024em] leading-none">
                {c.name}
              </h3>
            </div>

            <p className="text-body text-[15px] leading-[1.65]">{c.d}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Section 03: Outcomes ─── */
const Outcomes = () => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <SectionHeader
        no="03"
        eyebrow="Outcomes"
        title={<>What the loop produces.</>}
        kicker="Aggregate read from active engagements running the full programme. Updated quarterly."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {OUTCOMES.map((o, i) => (
          <article
            key={o.k}
            className="bg-white border border-line-faint rounded-[18px] p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-line"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-line font-bold">
              0{i + 1}
            </span>
            <div className="text-heading font-extrabold text-[clamp(40px,4.8vw,60px)] leading-[0.95] tracking-[-0.035em] tabular-nums">
              {o.v}
            </div>
            <div className="text-[11px] uppercase tracking-[0.20em] text-muted font-bold">
              {o.k}
            </div>
            <p className="text-body text-[13.5px] leading-[1.6] max-w-[30ch]">{o.d}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Section 04: Closing pilot CTA ─── */
const Closing = () => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <article
        className="relative rounded-[24px] overflow-hidden grid lg:grid-cols-[1.3fr_1fr]"
        style={{
          background: 'linear-gradient(90deg, #DDD9E5 0%, #DDE3DC 50%, #EFE7CD 100%)',
        }}
      >
        <div className="p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
          <div className="font-mono text-[12px] tracking-[0.24em] text-line uppercase font-bold">
            30-Day Pilot · Flat fee
          </div>
          <h3 className="mt-5 text-heading font-extrabold leading-[1.04] tracking-[-0.028em] text-[clamp(30px,4vw,52px)] max-w-[20ch]">
            Hand us the inbox. We&rsquo;ll hand back a baseline.
          </h3>
          <p className="mt-6 text-body text-[16px] leading-[1.65] max-w-[56ch]">
            Connect Google, Yelp, Healthgrades and Zocdoc. We install the listening flow,
            classify the last 90 days, and deliver a reputation baseline that becomes the
            starting line for the engagement.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to="/contact" className="btn-primary">
              Start the pilot →
            </Link>
            <Link
              to="/case-studies"
              className="text-heading text-[14px] font-medium underline-offset-4 hover:underline"
            >
              Read reputation case studies
            </Link>
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-[480px] overflow-hidden">
          <img
            src={closingVisual}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, rgba(221, 227, 220, 0.45) 0%, rgba(221, 227, 220, 0) 30%, rgba(239, 231, 205, 0) 100%)',
            }}
          />
        </div>
      </article>
    </div>
  </section>
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
