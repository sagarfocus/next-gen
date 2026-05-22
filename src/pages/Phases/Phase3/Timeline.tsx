const Timeline = () => (
  <section className="ph3-timeline" aria-labelledby="ph3-timeline-title">
    <h2 id="ph3-timeline-title">A run sheet, not a roadmap.</h2>
    <div className="ph3-tline">
      <div className="ph3-tcell">
        <div className="node" aria-hidden="true">
          <span className="step">01</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2 L4 14 H12 L11 22 L20 10 H12 Z" />
          </svg>
        </div>
        <div className="d">Day 01 - 07</div>
        <div className="t">Switch on.</div>
        <p className="x">
          Search optimizations push live, paid media spends turn on with attribution baked in,
          dashboards begin filling.
        </p>
      </div>
      <div className="ph3-tcell">
        <div className="node" aria-hidden="true">
          <span className="step">02</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 3v18h18" />
            <path d="M7 14l4-4 4 3 5-6" />
          </svg>
        </div>
        <div className="d">Day 08 - 14</div>
        <div className="t">First read.</div>
        <p className="x">
          Channel-level baselines locked. First creative rotation. Editorial calendar begins
          publishing on cadence.
        </p>
      </div>
      <div className="ph3-tcell">
        <div className="node" aria-hidden="true">
          <span className="step">03</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </div>
        <div className="d">Day 15 - 21</div>
        <div className="t">Bend the curve.</div>
        <p className="x">
          Budget reallocation toward the highest cost-per-booking channels. Front desk reports a
          different mix of inbound.
        </p>
      </div>
      <div className="ph3-tcell">
        <div className="node" aria-hidden="true">
          <span className="step">04</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </div>
        <div className="d">Day 22 - 30</div>
        <div className="t">Hand-off.</div>
        <p className="x">
          Documented playbook delivered. Dashboard becomes the weekly operating cadence. Phase 4 -
          Scale - begins.
        </p>
      </div>
    </div>
  </section>
);

export default Timeline;
