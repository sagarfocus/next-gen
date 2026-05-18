interface Step {
  num: string;
  phase: string;
  when: string;
  title: string;
  desc: string;
  outputs: string[];
}

const STEPS: Step[] = [
  {
    num: '01',
    phase: 'Discovery',
    when: 'Week 01',
    title: 'Audit the funnel end-to-end.',
    desc: 'Read-only access to GA4, GSC, GBP, the ad accounts, the call platform, and the CRM. We map what is actually happening before we propose a single change.',
    outputs: ['Funnel scorecard', 'Leak map', 'Quick-win list'],
  },
  {
    num: '02',
    phase: 'Roadmap',
    when: 'Week 02',
    title: 'Lock the 90-day plan.',
    desc: 'A single page that names the three things that will move revenue this quarter, the team shipping each, and the metric each one will be judged against.',
    outputs: ['90-day roadmap', 'KPI scoreboard', 'Owner-per-line'],
  },
  {
    num: '03',
    phase: 'Build',
    when: 'Weeks 03 – 06',
    title: 'Ship the systems.',
    desc: 'Tracking rebuilt server-side. Pages, schema, ad creative, automations, and the dashboard go in. One craftsperson per discipline — no juniors, no handoffs.',
    outputs: ['Tracking stack', 'Pages + schema', 'Ad creative', 'Automations'],
  },
  {
    num: '04',
    phase: 'Launch',
    when: 'Week 07',
    title: 'Go live and calibrate.',
    desc: 'Spend turns on in measured tiers. We hold daily standups for the first two weeks, then a single weekly Loom + live dashboard from there on out.',
    outputs: ['Live spend', 'Daily standups', 'Weekly Loom'],
  },
  {
    num: '05',
    phase: 'Compound',
    when: 'Month 03+',
    title: 'Compound what works.',
    desc: 'Quarterly re-forecasts. Channel mix tilts toward what is paying back. The retainer adapts — every line item earns its place on the next quarter\'s plan.',
    outputs: ['Quarterly review', 'Re-forecast', 'Channel mix tilt'],
  },
];

/**
 * Build the rope SVG path that snakes between step nodes.
 * Nodes sit at x = 40 (centre of the 80-wide column).
 * Between consecutive nodes the path uses a quadratic curve with the
 * control point pushed alternately right and left, creating a winding rope.
 */
const buildRopePath = (count: number) => {
  const x = 40;
  const top = 60;
  const bottom = 60;
  const total = 1000;
  const usable = total - top - bottom;
  const ys = Array.from({ length: count }, (_, i) =>
    Math.round(top + (usable * i) / (count - 1)),
  );
  const segments = [`M ${x} 0`, `L ${x} ${ys[0]}`];
  ys.forEach((y, i) => {
    if (i === 0) return;
    const prev = ys[i - 1];
    const midY = (prev + y) / 2;
    const cx = i % 2 === 1 ? 78 : 2;
    segments.push(`Q ${cx} ${midY} ${x} ${y}`);
  });
  segments.push(`L ${x} ${total}`);
  return segments.join(' ');
};

const ROPE_D = buildRopePath(STEPS.length);

const Process = () => {
  return (
    <section className="tm-section tm-process">
      <div className="container-shell">
        <div className="tm-marker">
          <span className="tm-marker-num">04</span>
          <span>Our Process</span>
          <span className="tm-marker-line" />
          <span className="tm-marker-meta">Signing → Shipping</span>
        </div>

        <header className="tm-pc-head">
          <h2 className="tm-pc-h2">
            From handshake <em>to first lift,</em>
            <br />
            in five stages.
          </h2>
          <p className="tm-pc-lede">
            One rope, five knots. We tie every step to the next so nothing
            falls between an audit and a campaign — and so you always know
            which stage we&rsquo;re on.
          </p>
        </header>

        <ol className="tm-pc-track">
          <svg
            className="tm-pc-rope"
            viewBox="0 0 80 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ropeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4AF7C" />
                <stop offset="100%" stopColor="#B38B6D" />
              </linearGradient>
            </defs>
            {/* Two strokes side-by-side imitate the twist of a rope */}
            <path
              d={ROPE_D}
              fill="none"
              stroke="url(#ropeGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 5"
              opacity="0.85"
            />
            <path
              d={ROPE_D}
              fill="none"
              stroke="url(#ropeGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 5"
              strokeDashoffset="5.5"
              opacity="0.35"
              transform="translate(2 0)"
            />
          </svg>

          {STEPS.map((s, i) => (
            <li
              key={s.num}
              className={`tm-pc-step ${i % 2 === 0 ? 'is-left' : 'is-right'}`}
            >
              <div className="tm-pc-card">
                <div className="tm-pc-card-head">
                  <span className="tm-pc-phase">{s.phase}</span>
                  <span className="tm-pc-when">{s.when}</span>
                </div>
                <h3 className="tm-pc-title">{s.title}</h3>
                <p className="tm-pc-desc">{s.desc}</p>
                <ul className="tm-pc-outputs">
                  {s.outputs.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>

              <div className="tm-pc-knot" aria-hidden="true">
                <span className="tm-pc-knot-ring" />
                <span className="tm-pc-knot-num">{s.num}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
