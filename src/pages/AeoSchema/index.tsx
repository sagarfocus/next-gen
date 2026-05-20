import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import heroImg from '../../assets/Futuristic healthcare.png';
import closingImg from '../../assets/analytics and report.png';

/* ============================================================
   AEO SCHEMA — Answer-engine optimisation page.
   Lavender/cta-blue tone, code-structure metaphor.
   Quote-style shift cards, schema-group code panels, ship-readiness
   criteria, gradient closing.
   ============================================================ */

const COLORS = {
  navy:     '#1A2438',
  navy2:    '#2D3748',
  body:     '#4A5568',
  muted:    '#718096',
  cta:      '#576DB5',
  ctaSoft:  'rgba(87, 109, 181, 0.12)',
  ctaWash:  'rgba(87, 109, 181, 0.05)',
  tan:      '#B38B6D',
  sage:     '#5A8F5A',
  mint:     '#EBF4DD',
  paper:    '#FAFAF8',
};

const STATS = [
  { v: '12',   l: 'Schema types implemented' },
  { v: '88%',  l: 'AI Overview eligibility'  },
  { v: '100%', l: 'Validation pass rate'     },
];

interface Shift {
  n: string;
  headline: string;
  body: string;
}

const SHIFTS: Shift[] = [
  {
    n: '01',
    headline: 'Search is becoming an answer engine.',
    body:
      'Generative results now resolve a third of branded health queries before the user ever sees the blue links. The practice cited inside the answer wins; the rest disappear.',
  },
  {
    n: '02',
    headline: 'Schema is the underwriting layer.',
    body:
      'AI engines need structured assertions about who you are, what you do, and where. Without that, the model defaults to whichever competitor stated it more clearly.',
  },
  {
    n: '03',
    headline: 'Editorial structure outranks copy.',
    body:
      'Question-led headings, source-backed claims, and clean entity markup outperform unstructured prose on every conversational query we have benchmarked.',
  },
];

interface SchemaGroup {
  num: string;
  group: string;
  tag: string;
  description: string;
  types: string[];
  tone: { hex: string; soft: string };
}

const GROUPS: SchemaGroup[] = [
  {
    num: '01',
    group: 'Entity',
    tag: 'Who · Where',
    description: 'Who you are, where you are, and how you are related to other entities in the practice.',
    types: ['Organization', 'MedicalClinic', 'Physician', 'LocalBusiness'],
    tone: { hex: '#576DB5', soft: 'rgba(87, 109, 181, 0.14)' },
  },
  {
    num: '02',
    group: 'Content',
    tag: 'Claims · Answers',
    description: 'What you are saying about clinical topics. The substrate AI engines extract answers from.',
    types: ['MedicalCondition', 'MedicalProcedure', 'FAQPage', 'Article'],
    tone: { hex: '#B38B6D', soft: 'rgba(179, 139, 109, 0.16)' },
  },
  {
    num: '03',
    group: 'Operations',
    tag: 'When · How',
    description: 'Practical signals that determine whether you appear in time-sensitive or insurance-led queries.',
    types: ['OpeningHours', 'AcceptedInsurance', 'AreaServed', 'Review'],
    tone: { hex: '#5A8F5A', soft: 'rgba(143, 188, 143, 0.18)' },
  },
];

const IconValidated = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const IconAnswerable = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7" />
    <line x1="12" y1="17" x2="12" y2="17.5" />
  </svg>
);
const IconSourced = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
    <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.5-1.5" />
  </svg>
);

interface Readiness {
  k: string;
  d: string;
  icon: React.ReactNode;
}

const READINESS: Readiness[] = [
  { k: 'Validated',  d: 'Every page passes Rich Results test with zero errors and zero warnings on entity-level properties.',                       icon: <IconValidated /> },
  { k: 'Answerable', d: 'Every service page leads with a phrased patient question and answers it above the fold in three sentences or fewer.',     icon: <IconAnswerable /> },
  { k: 'Sourced',    d: 'Editorial pieces include linkable, attributable sources. AI engines prefer practices that show their work.',              icon: <IconSourced /> },
];

/* ─── HERO ─── */
const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="AEO & Schema" />
      <div className="mt-8 grid lg:grid-cols-12 gap-x-12 gap-y-12 items-end">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full" style={{ background: COLORS.ctaSoft, color: COLORS.cta }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.cta }} />
            <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase font-bold">Answer Engine Optimisation</span>
          </div>
          <h1 className="mt-7 font-extrabold leading-[1.00] tracking-[-0.038em] text-[clamp(40px,5.8vw,80px)] max-w-[15ch]" style={{ color: COLORS.navy }}>
            Be the practice the{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(95deg, ${COLORS.cta}, ${COLORS.tan})` }}>
              engines cite
            </span>
            .
          </h1>
          <p className="mt-7 text-[18px] leading-[1.65] max-w-[58ch]" style={{ color: COLORS.body }}>
            Schema markup and editorial structure built for AI Overviews, voice search,
            and the next generation of conversational query surfaces. A working
            programme — not a one-time SEO retrofit.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[28px] overflow-hidden border aspect-[5/4] shadow-[0_28px_60px_-32px_rgba(45,55,72,0.32)]" style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}>
            <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(15, 23, 42, 0) 40%, rgba(15, 23, 42, 0.55) 100%)' }} />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
              <div className="rounded-2xl px-4 py-3 backdrop-blur-md font-mono text-[11.5px] tracking-[0.12em] leading-[1.4]" style={{ background: 'rgba(255, 255, 255, 0.18)', border: '1px solid rgba(255, 255, 255, 0.30)', color: '#FFFFFF' }}>
                <span className="opacity-70">@type:</span> <span className="font-bold">MedicalClinic</span><br/>
                <span className="opacity-70">@id:</span> <span>nextgen-health</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md" style={{ background: 'rgba(255, 255, 255, 0.20)', border: '1px solid rgba(255, 255, 255, 0.30)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-white font-bold">Live · validated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats — code-card style */}
      <div className="mt-12 lg:mt-16 grid sm:grid-cols-3 gap-[1px] rounded-[18px] overflow-hidden border" style={{ borderColor: 'rgba(26, 36, 56, 0.10)', background: 'rgba(26, 36, 56, 0.08)' }}>
        {STATS.map((s, i) => (
          <div key={s.l} className="bg-white p-6 sm:p-8 flex flex-col gap-2">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase font-bold" style={{ color: COLORS.cta }}>0{i + 1}</span>
            <span className="font-extrabold text-[clamp(28px,3vw,40px)] leading-[1] tracking-[-0.024em] tabular-nums" style={{ color: COLORS.navy }}>{s.v}</span>
            <span className="text-[12px] uppercase tracking-[0.18em] font-bold" style={{ color: COLORS.muted }}>{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION HEADER ─── */
const SectionHeader = ({ no, eyebrow, title, kicker }: { no: string; eyebrow: string; title: React.ReactNode; kicker?: string }) => (
  <header className="mb-12 lg:mb-16 grid lg:grid-cols-12 gap-x-12 gap-y-4">
    <div className="lg:col-span-7">
      <div className="flex items-center gap-3 font-mono text-[12px] tracking-[0.22em] uppercase" style={{ color: COLORS.cta }}>
        <span className="font-bold">{no}</span>
        <span className="h-px w-12" style={{ background: COLORS.cta, opacity: 0.5 }} />
        <span className="font-bold">{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-extrabold tracking-[-0.024em] leading-[1.08] text-[clamp(28px,3.6vw,46px)]" style={{ color: COLORS.navy }}>
        {title}
      </h2>
    </div>
    {kicker && (
      <p className="lg:col-span-5 text-[15.5px] leading-[1.7] max-w-[44ch] self-end" style={{ color: COLORS.body }}>
        {kicker}
      </p>
    )}
  </header>
);

/* ─── SECTION 01: Three shifts (large pull-quote cards) ─── */
const Shifts = () => (
  <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)' }}>
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <SectionHeader
        no="01"
        eyebrow="Why AEO is the SEO frontier"
        title={<>Three structural shifts moving budget toward schema.</>}
        kicker="The structural realities that reward practices investing in answer-engine optimisation now."
      />

      <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
        {SHIFTS.map((s) => (
          <article key={s.n} className="bg-white rounded-[22px] border p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(45,55,72,0.22)]" style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}>
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[28px] font-extrabold leading-none tracking-[-0.02em]" style={{ color: COLORS.cta, opacity: 0.32 }}>{s.n}</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10.5px] uppercase tracking-[0.18em] font-bold" style={{ background: COLORS.ctaSoft, color: COLORS.cta }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.cta }} />
                Shift
              </span>
            </div>
            <h3 className="text-[22px] font-extrabold tracking-[-0.018em] leading-[1.18]" style={{ color: COLORS.navy }}>
              {s.headline}
            </h3>
            <p className="text-[14.5px] leading-[1.65]" style={{ color: COLORS.body }}>{s.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 02: Schema coverage (3 group code panels) ─── */
const Coverage = () => (
  <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)', background: COLORS.paper }}>
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <SectionHeader
        no="02"
        eyebrow="Schema coverage"
        title={<>Three groups. Twelve types. Every page mapped.</>}
        kicker="Each group of schema does a different job. We deploy at least one type from every group on every public page."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {GROUPS.map((g) => (
          <article key={g.group} className="relative bg-white rounded-[22px] border overflow-hidden flex flex-col" style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}>
            {/* Tone-coloured top strip */}
            <span className="block h-1.5" style={{ background: g.tone.hex }} aria-hidden="true" />

            <div className="p-8 flex flex-col gap-5 flex-1">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[12px] tracking-[0.18em] font-bold" style={{ color: g.tone.hex }}>{g.num}</span>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase font-bold" style={{ color: COLORS.muted }}>{g.tag}</span>
              </div>

              <h3 className="text-[28px] font-extrabold tracking-[-0.022em] leading-none" style={{ color: COLORS.navy }}>
                {g.group}
                <span style={{ color: g.tone.hex }}>.</span>
              </h3>

              <p className="text-[14px] leading-[1.6]" style={{ color: COLORS.body }}>{g.description}</p>

              {/* Schema types as code-style chips */}
              <div className="mt-2 pt-5 border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)' }}>
                <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase font-bold mb-3" style={{ color: COLORS.muted }}>@type</div>
                <div className="flex flex-wrap gap-2">
                  {g.types.map((t) => (
                    <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-md font-mono text-[12px] font-semibold" style={{ background: g.tone.soft, color: g.tone.hex }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 03: Readiness criteria (3 icon cards) ─── */
const ReadinessCriteria = () => (
  <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)' }}>
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <SectionHeader
        no="03"
        eyebrow="Ship-readiness"
        title={<>Three checks the AI search layer rewards.</>}
        kicker="We do not ship a page that misses any of them. Every release passes the same gate."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {READINESS.map((r, i) => (
          <article key={r.k} className="relative bg-white rounded-[22px] border p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(45,55,72,0.22)]" style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}>
            <div className="flex items-center justify-between">
              <span className="inline-grid place-items-center w-14 h-14 rounded-[14px]" style={{ background: COLORS.ctaSoft, color: COLORS.cta }}>
                <span className="w-7 h-7 block">{r.icon}</span>
              </span>
              <span className="inline-grid place-items-center w-9 h-9 rounded-full border font-mono text-[12px] font-bold" style={{ borderColor: COLORS.cta, color: COLORS.cta }}>
                0{i + 1}
              </span>
            </div>
            <h3 className="text-[26px] font-extrabold tracking-[-0.02em] leading-[1.08]" style={{ color: COLORS.navy }}>
              {r.k}
              <span style={{ color: COLORS.cta }}>.</span>
            </h3>
            <p className="text-[14.5px] leading-[1.6]" style={{ color: COLORS.body }}>{r.d}</p>
            <div className="mt-2 pt-4 border-t inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-bold" style={{ borderColor: 'rgba(26, 36, 56, 0.08)', color: COLORS.sage }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.sage }} />
              Pre-flight gate
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 04: Closing CTA ─── */
const Closing = () => (
  <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)' }}>
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <article className="relative rounded-[28px] overflow-hidden grid lg:grid-cols-[1.3fr_1fr]" style={{ background: 'linear-gradient(90deg, #DDD9E5 0%, #DDE3DC 50%, #EFE7CD 100%)' }}>
        <div className="p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
          <div className="font-mono text-[12px] tracking-[0.24em] uppercase font-bold" style={{ color: COLORS.cta }}>
            Two-week schema audit · Fixed fee
          </div>
          <h3 className="mt-5 font-extrabold leading-[1.04] tracking-[-0.028em] text-[clamp(30px,4vw,52px)] max-w-[22ch]" style={{ color: COLORS.navy }}>
            Become the answer the engine quotes, not the link it skips.
          </h3>
          <p className="mt-6 text-[16px] leading-[1.65] max-w-[58ch]" style={{ color: COLORS.body }}>
            The audit returns a per-page schema register, a coverage map of missing entity
            relationships, and a ranked queue of pages to rewrite for AI Overview eligibility.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to="/contact" className="btn-primary">Request the audit →</Link>
            <Link to="/services/seo-local-search" className="text-[14px] font-semibold underline-offset-4 hover:underline" style={{ color: COLORS.navy }}>
              View the SEO programme
            </Link>
          </div>
        </div>
        <div className="relative min-h-[260px] lg:min-h-[440px] overflow-hidden">
          <img src={closingImg} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(221, 227, 220, 0.45) 0%, rgba(221, 227, 220, 0) 30%, rgba(239, 231, 205, 0) 100%)' }} />
        </div>
      </article>
    </div>
  </section>
);

const AeoSchema = () => (
  <>
    <Hero />
    <Shifts />
    <Coverage />
    <ReadinessCriteria />
    <Closing />
  </>
);

export default AeoSchema;
