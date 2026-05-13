import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

/* ────────────────────────────────────────────────────────────────────
   GROWTH-PLAN DATA — single source for the chart, phase cards, and timeline.
   Keep figures consistent so the visualisation, table, and KPI panel agree.
   ──────────────────────────────────────────────────────────────────── */

interface MonthPoint { m: number; mult: number; label?: string; }
// y axis: growth multiplier vs baseline (1.0 = month 0).
const TRAJECTORY: MonthPoint[] = [
  { m: 0,  mult: 1.00,  label: 'Baseline' },
  { m: 1,  mult: 0.98 },
  { m: 2,  mult: 1.05 },
  { m: 3,  mult: 1.18 },
  { m: 4,  mult: 1.42, label: 'First booked uplift' },
  { m: 5,  mult: 1.78 },
  { m: 6,  mult: 2.15 },
  { m: 7,  mult: 2.52, label: 'Ranking crossover' },
  { m: 8,  mult: 2.84 },
  { m: 9,  mult: 3.10 },
  { m: 10, mult: 3.32 },
  { m: 11, mult: 3.55 },
  { m: 12, mult: 3.80, label: 'Compound zone' },
];

const PHASES = [
  { n: '01', range: [0, 2],  name: 'Diagnose', tone: 'sage',   summary: 'Audit the acquisition stack. Build the dashboard. Establish the baseline.',  deliverables: ['Forensic channel audit', 'Tracking blueprint', 'Baseline scorecard'] },
  { n: '02', range: [2, 5],  name: 'Build',    tone: 'tan',    summary: 'Quiet build. We ship infrastructure before we ship campaigns.',                deliverables: ['Landing system', 'Editorial spine', 'Conversion pipeline'] },
  { n: '03', range: [5, 8],  name: 'Launch',   tone: 'cta',    summary: 'A staged release across paid, organic, and direct. Each ships against a stated hypothesis.', deliverables: ['Paid by intent tier', 'GBP + local push', 'Email recall flows'] },
  { n: '04', range: [8, 12], name: 'Optimize', tone: 'heading',summary: 'A weekly retrospective and rolling 4-week forecast. Anything stalled is replaced.',          deliverables: ['Decision log', 'A/B queue', 'Quarterly review'] },
];

const QUARTERS = [
  { q: 'Q1', months: 'M01 – M03', focus: 'Foundation',  ships: 'Audit, tracking, brand & content infrastructure',   read: 'Baseline locked' },
  { q: 'Q2', months: 'M04 – M06', focus: 'Acquisition', ships: 'Paid launch, GBP optimisation, on-site CRO',         read: 'Bookings curve' },
  { q: 'Q3', months: 'M07 – M09', focus: 'Compounding', ships: 'Organic crossover, content depth, lifecycle email',  read: 'Ranking flip' },
  { q: 'Q4', months: 'M10 – M12', focus: 'Optimising',  ships: 'Channel rebalance, retention engine, board review',  read: 'Compound zone' },
];

const COMMITMENTS = [
  { metric: 'Patient acquisition cost', delta: '−42%', by: 'by month 6',  detail: 'Median reduction across the active book once paid is restructured by intent tier.' },
  { metric: 'Booked visits',            delta: '+78%', by: 'by month 9',  detail: 'Counted as net-new versus the 30 days preceding kickoff. No seasonality credit.' },
  { metric: 'Organic non-brand traffic',delta: '3.8×', by: 'by month 12', detail: 'On the schema-and-content programme we audit during the diagnose phase.' },
];

/* ────────────────────────────────────────────────────────────────────
   SVG CHART — the page's single, authoritative visualisation.
   ──────────────────────────────────────────────────────────────────── */

const ChartWidth = 1280;
const ChartHeight = 460;
const PadL = 64;
const PadR = 64;
const PadT = 56;
const PadB = 64;

const xFor = (m: number) => PadL + (m / 12) * (ChartWidth - PadL - PadR);
const yFor = (mult: number) => {
  const yMin = 0.8;
  const yMax = 4.2;
  const t = (mult - yMin) / (yMax - yMin);
  return ChartHeight - PadB - t * (ChartHeight - PadT - PadB);
};

const PHASE_FILL: Record<string, string> = {
  sage:    'rgba(143, 188, 143, 0.10)',
  tan:     'rgba(179, 139, 109, 0.10)',
  cta:     'rgba(87, 109, 181, 0.10)',
  heading: 'rgba(45, 55, 72, 0.06)',
};

const TrajectoryChart = () => {
  const linePath = TRAJECTORY.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xFor(p.m).toFixed(1)} ${yFor(p.mult).toFixed(1)}`).join(' ');
  const areaPath =
    linePath +
    ` L ${xFor(12)} ${ChartHeight - PadB} L ${xFor(0)} ${ChartHeight - PadB} Z`;

  return (
    <svg viewBox={`0 0 ${ChartWidth} ${ChartHeight}`} preserveAspectRatio="xMidYMid meet" role="img" aria-label="12-month growth trajectory chart" className="w-full h-auto">
      <defs>
        <linearGradient id="gp-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#576DB5" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#576DB5" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Phase bands */}
      {PHASES.map((p) => (
        <rect
          key={p.n}
          x={xFor(p.range[0])}
          y={PadT}
          width={xFor(p.range[1]) - xFor(p.range[0])}
          height={ChartHeight - PadT - PadB}
          fill={PHASE_FILL[p.tone]}
        />
      ))}

      {/* Horizontal rule (baseline) */}
      <line x1={PadL} y1={yFor(1)} x2={ChartWidth - PadR} y2={yFor(1)} stroke="rgba(45,55,72,0.18)" strokeWidth={1} strokeDasharray="2 6" />

      {/* X-axis ticks */}
      {Array.from({ length: 13 }).map((_, i) => (
        <g key={i}>
          <line x1={xFor(i)} y1={ChartHeight - PadB} x2={xFor(i)} y2={ChartHeight - PadB + 6} stroke="rgba(45,55,72,0.4)" strokeWidth={1} />
          <text x={xFor(i)} y={ChartHeight - PadB + 26} textAnchor="middle" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="11" fill="#718096" letterSpacing="0.08em">M{String(i).padStart(2, '0')}</text>
        </g>
      ))}

      {/* Phase labels (top) */}
      {PHASES.map((p) => {
        const mid = (xFor(p.range[0]) + xFor(p.range[1])) / 2;
        return (
          <g key={p.n}>
            <text x={mid} y={PadT - 26} textAnchor="middle" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="11" fill="#B38B6D" letterSpacing="0.22em">{p.n}</text>
            <text x={mid} y={PadT - 8} textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fontWeight="700" fill="#2D3748" letterSpacing="-0.01em">{p.name.toUpperCase()}</text>
          </g>
        );
      })}

      {/* Area + Line */}
      <path d={areaPath} fill="url(#gp-area)" />
      <path d={linePath} fill="none" stroke="#576DB5" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />

      {/* Annotated points */}
      {TRAJECTORY.filter((p) => p.label).map((p) => (
        <g key={p.m}>
          <circle cx={xFor(p.m)} cy={yFor(p.mult)} r={5.5} fill="#fff" stroke="#576DB5" strokeWidth={2} />
          <line x1={xFor(p.m)} y1={yFor(p.mult) - 8} x2={xFor(p.m)} y2={yFor(p.mult) - 36} stroke="#B38B6D" strokeWidth={1} />
          <text x={xFor(p.m)} y={yFor(p.mult) - 44} textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="600" fill="#2D3748">
            {p.label}
          </text>
          <text x={xFor(p.m)} y={yFor(p.mult) - 60} textAnchor="middle" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="10" fill="#B38B6D" letterSpacing="0.16em">
            M{String(p.m).padStart(2, '0')} · {p.mult.toFixed(2)}×
          </text>
        </g>
      ))}

      {/* Y-axis labels */}
      {[1, 2, 3, 4].map((v) => (
        <text key={v} x={PadL - 16} y={yFor(v) + 4} textAnchor="end" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="11" fill="#718096">{v}.0×</text>
      ))}

      {/* Final figure on right axis */}
      <text x={ChartWidth - PadR + 8} y={yFor(3.8) + 4} textAnchor="start" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fontWeight="800" fill="#576DB5" letterSpacing="-0.01em">
        3.80×
      </text>
    </svg>
  );
};

/* ────────────────────────────────────────────────────────────────────
   SECTIONS
   ──────────────────────────────────────────────────────────────────── */

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Growth Plan" />
      <div className="mt-8 grid lg:grid-cols-12 gap-x-16 gap-y-8 items-end">
        <div className="lg:col-span-7">
          <div className="text-line font-mono text-[12px] tracking-[0.24em] uppercase">
            The 12-Month Healthcare Growth Plan
          </div>
          <h1 className="mt-7 text-heading font-extrabold leading-[1.02] tracking-[-0.036em] text-[clamp(40px,5.6vw,76px)] max-w-[18ch]">
            One chart. Twelve months. No surprises.
          </h1>
        </div>
        <div className="lg:col-span-5">
          <p className="text-body text-[17px] leading-[1.7] max-w-[52ch]">
            A growth plan you can read at a glance. Four phases, twelve months, a single
            trajectory benchmarked against your starting line — engineered for healthcare
            practices and underwritten by SEO, paid, and lifecycle channels working together.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Chart = () => (
  <section className="border-t border-line-faint bg-bg-alt">
    <div className="container-shell py-[clamp(48px,7vw,96px)]">
      <div className="flex items-baseline justify-between mb-8 flex-wrap gap-y-3">
        <div>
          <div className="text-line font-mono text-[12px] tracking-[0.24em] uppercase">The Trajectory</div>
          <h2 className="mt-3 text-heading text-[clamp(22px,2vw,28px)] font-bold tracking-[-0.02em]">
            Where the practice is at each month, indexed to its own baseline.
          </h2>
        </div>
        <div className="flex items-baseline gap-6 text-[12px]">
          <span className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-cta/20" /> Curve area</span>
          <span className="flex items-center gap-2"><span className="inline-block w-3 h-px bg-heading/40" /> Baseline</span>
        </div>
      </div>

      <div className="bg-white border border-line-faint p-4 sm:p-8">
        <TrajectoryChart />
      </div>

      <p className="mt-5 text-muted text-[13px] leading-[1.6] max-w-[64ch]">
        Multiplier curve indexed to month-0 patient acquisition cost and booked-visit baselines.
        Ranges reflect the median across active engagements. Individual outcomes vary with starting
        position and clinical vertical.
      </p>
    </div>
  </section>
);

const Phases = () => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(64px,9vw,128px)]">
      <div className="grid lg:grid-cols-12 gap-x-16 gap-y-6 mb-12">
        <div className="lg:col-span-5">
          <div className="text-line font-mono text-[12px] tracking-[0.24em] uppercase">The Four Phases</div>
          <h2 className="mt-4 text-heading text-[clamp(28px,3vw,42px)] font-bold tracking-[-0.024em] leading-[1.1]">
            Read across the chart, top to bottom.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:pt-6">
          <p className="text-body text-[16px] leading-[1.7] max-w-[60ch]">
            Each phase has a window, a deliverable, and a measurement. Nothing ships
            without a stated hypothesis and an exit criterion.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-line-faint border border-line-faint">
        {PHASES.map((p) => (
          <article key={p.n} className="bg-bg p-7 flex flex-col gap-5">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[12px] text-line tracking-[0.18em]">{p.n}</span>
              <span className="font-mono text-[11px] text-muted tracking-[0.16em]">M{String(p.range[0]).padStart(2,'0')} – M{String(p.range[1]).padStart(2,'0')}</span>
            </div>
            <h3 className="text-heading text-[28px] font-extrabold leading-none tracking-[-0.022em]">{p.name}<span className="text-line">.</span></h3>
            <p className="text-body text-[14px] leading-[1.6]">{p.summary}</p>
            <ul className="mt-auto pt-4 border-t border-line-faint space-y-2 text-[13px] text-heading">
              {p.deliverables.map((d) => (
                <li key={d} className="flex gap-2 items-baseline">
                  <span className="text-line">—</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Quarters = () => (
  <section className="border-t border-line-faint bg-bg-alt">
    <div className="container-shell py-[clamp(64px,9vw,128px)]">
      <div className="grid lg:grid-cols-12 gap-x-16 gap-y-6 mb-10">
        <div className="lg:col-span-5">
          <div className="text-line font-mono text-[12px] tracking-[0.24em] uppercase">What ships, by quarter</div>
          <h2 className="mt-4 text-heading text-[clamp(28px,3vw,42px)] font-bold tracking-[-0.024em] leading-[1.1]">
            The plan, on one page.
          </h2>
        </div>
      </div>

      <div className="bg-white border border-line-faint">
        <div className="grid grid-cols-[80px_140px_1.2fr_2fr_160px] gap-x-6 px-6 py-4 bg-heading text-white text-[10px] uppercase tracking-[0.22em] font-bold">
          <span>Quarter</span><span>Window</span><span>Focus</span><span>What ships</span><span className="text-right">Reads as</span>
        </div>
        {QUARTERS.map((q, i) => (
          <div key={q.q} className={`grid grid-cols-[80px_140px_1.2fr_2fr_160px] gap-x-6 px-6 py-6 items-baseline ${i < QUARTERS.length - 1 ? 'border-b border-line-faint' : ''}`}>
            <span className="font-mono text-line text-[16px] tracking-[0.12em]">{q.q}</span>
            <span className="font-mono text-muted text-[12px] tracking-[0.1em]">{q.months}</span>
            <span className="text-heading font-bold text-[18px] tracking-[-0.015em]">{q.focus}</span>
            <span className="text-body text-[14px] leading-[1.55]">{q.ships}</span>
            <span className="text-right text-[11px] uppercase tracking-[0.18em] font-semibold text-cta">{q.read}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Commitments = () => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(64px,9vw,128px)]">
      <div className="grid lg:grid-cols-12 gap-x-16 gap-y-6 mb-12">
        <div className="lg:col-span-5">
          <div className="text-line font-mono text-[12px] tracking-[0.24em] uppercase">What we commit to</div>
          <h2 className="mt-4 text-heading text-[clamp(28px,3vw,42px)] font-bold tracking-[-0.024em] leading-[1.1]">
            Three numbers. Measured monthly. Reported in your dashboard.
          </h2>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-[1px] bg-heading">
        {COMMITMENTS.map((c, i) => (
          <div key={c.metric} className="bg-bg p-8 flex flex-col gap-5">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[11px] text-line tracking-[0.2em]">0{i + 1}</span>
              <span className="font-mono text-[11px] text-muted tracking-[0.16em]">{c.by}</span>
            </div>
            <div className="text-cta font-extrabold text-[64px] leading-none tracking-[-0.04em] tabular-nums">{c.delta}</div>
            <h3 className="text-heading text-[18px] font-bold leading-[1.2] tracking-[-0.012em]">{c.metric}</h3>
            <p className="text-body text-[13.5px] leading-[1.6] mt-auto">{c.detail}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-muted text-[13px] leading-[1.6] max-w-[64ch]">
        Targets are net-new versus baseline measured in the 30 days preceding kickoff. We do not
        report against improvements driven by seasonality or campaigns already in flight at signing.
      </p>
    </div>
  </section>
);

const Closing = () => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(64px,9vw,128px)]">
      <div className="bg-heading text-white p-10 sm:p-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1 bg-cta" />
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-8 items-end">
          <div className="lg:col-span-8">
            <div className="text-line font-mono text-[12px] tracking-[0.24em] uppercase">Step Zero</div>
            <h2 className="mt-5 text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.04] tracking-[-0.028em] max-w-[22ch]">
              Begin with the audit. Decide later.
            </h2>
            <p className="mt-6 text-white/75 text-[16px] leading-[1.65] max-w-[58ch]">
              A two-week, fixed-fee diagnostic that returns a forensic plan whether you continue
              with us or not. If we move forward, the audit fee credits against month one.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
            <Link to="/contact" className="btn-primary">Start the audit →</Link>
            <Link to="/case-studies" className="text-white/80 text-[14px] font-medium underline-offset-4 hover:underline">
              Read the casebook
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GrowthPlan = () => (
  <>
    <Hero />
    <Chart />
    <Phases />
    <Quarters />
    <Commitments />
    <Closing />
  </>
);

export default GrowthPlan;
