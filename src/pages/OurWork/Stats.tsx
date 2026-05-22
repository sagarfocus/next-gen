import { STATS } from './data';

const Stats = () => (
  <section className="ow-stats" aria-label="Engagement totals">
    <div className="container-shell">
      <div className="ow-stats-grid">
        {STATS.map((s, i) => (
          <div key={s.l} className="ow-stat">
            <span className="ow-stat-mono">0{i + 1}</span>
            <div className="ow-stat-v">{s.v}</div>
            <div className="ow-stat-l">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
