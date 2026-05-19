import { useState } from 'react';
import imgDiscovery from '../../assets/analytics and report.png';
import imgRoadmap from '../../assets/strategy planning.png';
import imgBuild from '../../assets/websitedesign.png';
import imgLaunch from '../../assets/paidmedia.png';
import imgCompound from '../../assets/recall+.png';

interface Step {
  num: string;
  phase: string;
  when: string;
  title: string;
  desc: string;
  img: string;
}

const STEPS: Step[] = [
  {
    num: '01',
    phase: 'Discovery',
    when: 'Week 01',
    title: 'Audit the funnel end-to-end.',
    desc: 'Read-only access to GA4, GSC, GBP, the ad accounts, the call platform, and the CRM. We map what is actually happening before we propose a single change.',
    img: imgDiscovery,
  },
  {
    num: '02',
    phase: 'Roadmap',
    when: 'Week 02',
    title: 'Lock the 90-day plan.',
    desc: 'A single page that names the three things that will move revenue this quarter, the team shipping each, and the metric each one will be judged against.',
    img: imgRoadmap,
  },
  {
    num: '03',
    phase: 'Build',
    when: 'Weeks 03 – 06',
    title: 'Ship the systems.',
    desc: 'Tracking rebuilt server-side. Pages, schema, ad creative, automations, and the dashboard go in. One craftsperson per discipline — no juniors, no handoffs.',
    img: imgBuild,
  },
  {
    num: '04',
    phase: 'Launch',
    when: 'Week 07',
    title: 'Go live and calibrate.',
    desc: 'Spend turns on in measured tiers. We hold daily standups for the first two weeks, then a single weekly Loom + live dashboard from there on out.',
    img: imgLaunch,
  },
  {
    num: '05',
    phase: 'Compound',
    when: 'Month 03+',
    title: 'Compound what works.',
    desc: 'Quarterly re-forecasts. Channel mix tilts toward what is paying back. The retainer adapts — every line item earns its place on the next quarter\'s plan.',
    img: imgCompound,
  },
];

const Process = () => {
  const [active, setActive] = useState(0);

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
            Hover any stage to step inside.
          </p>
        </header>

        <div
          className="tm-pc-stack"
          role="tablist"
          aria-label="Engagement process, five stages"
        >
          {STEPS.map((s, i) => {
            const isActive = active === i;
            return (
              <div
                key={s.num}
                role="tab"
                tabIndex={isActive ? 0 : -1}
                aria-selected={isActive}
                aria-label={`Stage ${s.num}: ${s.title}`}
                className={`tm-pc-panel${isActive ? ' is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    setActive((active + 1) % STEPS.length);
                  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    setActive((active - 1 + STEPS.length) % STEPS.length);
                  }
                }}
              >
                <div
                  className="tm-pc-panel-img"
                  style={{ backgroundImage: `url(${s.img})` }}
                  aria-hidden="true"
                />
                <div className="tm-pc-panel-shade" aria-hidden="true" />
                <div className="tm-pc-panel-content">
                  <span className="tm-pc-panel-phase">
                    <span className="tm-pc-panel-dot" aria-hidden="true" />
                    {s.phase} · {s.when}
                  </span>
                  <h3 className="tm-pc-panel-title">{s.title}</h3>
                  <p className="tm-pc-panel-desc">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
