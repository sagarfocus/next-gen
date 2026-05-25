interface Pillar {
  num: string;
  label: string;
  title: string;
  body: string;
}

const PILLARS: Pillar[] = [
  {
    num: '01',
    label: 'Talent',
    title: 'One craft per practitioner.',
    body: 'Nobody on this team is a generalist. The SEO lead does SEO. The designer designs. The developer ships. Specialisation is non-negotiable.',
  },
  {
    num: '02',
    label: 'Scope',
    title: 'Healthcare-only.',
    body: 'We do not work outside healthcare. Vocabulary, compliance posture and patient psychology compound when the team only ships in one industry.',
  },
  {
    num: '03',
    label: 'Cadence',
    title: 'Decisions over deliverables.',
    body: 'A weekly Loom and a live dashboard, not a forty-page deck. We bias to clarity and to moves that change the next thirty days.',
  },
  {
    num: '04',
    label: 'Staffing',
    title: 'Seniors only — no juniors.',
    body: 'Every retainer is staffed by the people whose name is on the page. No account managers, no off-shore handoffs, no "I\'ll check with the team."',
  },
  {
    num: '05',
    label: 'Strategy',
    title: 'Compounding over campaigns.',
    body: 'We bias to channels that build equity — organic search, owned audiences, reputation engines — and use paid to bridge the gap, not to be the gap.',
  },
  {
    num: '06',
    label: 'Measurement',
    title: 'Revenue, not vanity.',
    body: 'Form fills are not bookings. Bookings are not revenue. Every dashboard rolls up to booked-and-attended visits.',
  },
];

const Pillars = () => {
  return (
    <section className="ngt-section ngt-pillars">
      <div className="container-shell">
        <div className="ngt-mark">
          <span className="ngt-mark-num">03</span>
          <span className="ngt-mark-lbl">Operating Pillars</span>
          <span className="ngt-mark-line" />
          <span className="ngt-mark-meta">How we work · v.2026.05</span>
        </div>

        <header className="ngt-pl-head">
          <h2 className="ngt-pl-h2">
            Six rules <em>we don&rsquo;t bend.</em>
          </h2>
          <div className="ngt-pl-head-meta">
            <div>
              <span className="ngt-pl-k">Index</span>
              <span className="ngt-pl-v">01 – 06</span>
            </div>
            <div>
              <span className="ngt-pl-k">Domain</span>
              <span className="ngt-pl-v">Healthcare growth</span>
            </div>
            <div>
              <span className="ngt-pl-k">Version</span>
              <span className="ngt-pl-v">2026.05</span>
            </div>
          </div>
        </header>

        <ul className="ngt-pl-grid">
          {PILLARS.map((p) => (
            <li key={p.num} className="ngt-pl-cell">
              <div className="ngt-pl-cell-head">
                <span className="ngt-pl-cell-num">{p.num}</span>
                <span className="ngt-pl-cell-label">{p.label}</span>
              </div>
              <h3 className="ngt-pl-cell-title">{p.title}</h3>
              <p className="ngt-pl-cell-body">{p.body}</p>
              <span className="ngt-pl-cell-bar" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pillars;
