const STATS = [
  { num: '09', label: 'Practitioners', meta: 'In-house' },
  { num: '08', label: 'Disciplines', meta: 'SEO · Paid · Code · Brand' },
  { num: '200+', label: 'Clinics served', meta: 'Since 2018' },
  { num: 'TX', label: 'Headquartered', meta: 'Irving, Texas' },
];

const TeamHero = () => {
  return (
    <section className="ngt-hero">
      <div className="container-shell">
        <div className="ngt-hero-bar">
          <span className="ngt-hero-bar-k">00 / Index</span>
          <span className="ngt-hero-bar-line" />
          <span className="ngt-hero-bar-v">The People · Spring 2026</span>
        </div>

        <div className="ngt-hero-grid">
          <h1 className="ngt-hero-h1">
            A nine-person, <em>healthcare-only</em> growth team.
            <span className="ngt-hero-h1-rule" aria-hidden="true" />
          </h1>

          <aside className="ngt-hero-side">
            <p className="ngt-hero-lede">
              No freelancers, no junior handoffs, no off-shore relay. One craft per practitioner —
              SEO, paid media, content, design, code, automation — moving in lock-step on every
              retainer.
            </p>
            <div className="ngt-hero-meta-row">
              <div>
                <span className="ngt-hero-meta-k">Engagement</span>
                <span className="ngt-hero-meta-v">Retainer · Project</span>
              </div>
              <div>
                <span className="ngt-hero-meta-k">Scope</span>
                <span className="ngt-hero-meta-v">Healthcare only</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="ngt-hero-stats">
          {STATS.map((s, i) => (
            <div key={s.label} className="ngt-hero-stat">
              <span className="ngt-hero-stat-idx">{String(i + 1).padStart(2, '0')}</span>
              <div className="ngt-hero-stat-num">{s.num}</div>
              <div className="ngt-hero-stat-lbl">{s.label}</div>
              <div className="ngt-hero-stat-meta">{s.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
