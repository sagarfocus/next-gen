interface Principle {
  num: string;
  label: string;
  title: string;
  desc: string;
}

const PRINCIPLES: Principle[] = [
  {
    num: '01',
    label: 'Talent',
    title: 'One craft per practitioner.',
    desc: 'Nobody on this team is a generalist. The SEO lead does SEO. The designer designs. The developer ships. Specialisation is non-negotiable.',
  },
  {
    num: '02',
    label: 'Scope',
    title: 'Healthcare-only.',
    desc: 'We do not work outside healthcare. The vocabulary, the compliance posture, the patient psychology - all of it compounds when the team only ships in one industry.',
  },
  {
    num: '03',
    label: 'Comms',
    title: 'Decisions over deliverables.',
    desc: 'A weekly Loom and a live dashboard, not a 40-page deck. We bias to clarity and to moves that change the next 30 days, not the next 30 slides.',
  },
  {
    num: '04',
    label: 'Staffing',
    title: 'Senior practitioners, no juniors.',
    desc: 'Every retainer is staffed by the people whose name is on the page. No account managers, no off-shore handoffs, no "I\'ll check with the team".',
  },
  {
    num: '05',
    label: 'Strategy',
    title: 'Compounding over campaigns.',
    desc: 'We bias to channels that build equity - organic search, owned audiences, reputation engines - and use paid to bridge the gap, never to be the gap.',
  },
  {
    num: '06',
    label: 'Measurement',
    title: 'Revenue, not vanity.',
    desc: "Form fills are not bookings. Bookings are not revenue. Every dashboard rolls up to booked-and-attended visits - the only metric that ever paid anyone's salary.",
  },
];

const Principles = () => {
  return (
    <section className="tm-section tm-principles">
      <div className="container-shell">
        <div className="tm-marker">
          <span className="tm-marker-num">03</span>
          <span>Operating Principles</span>
          <span className="tm-marker-line" />
          <span className="tm-marker-meta">How we work</span>
        </div>

        <header className="tm-pr-head">
          <h2 className="tm-pr-h2">
            Six rules <em>we don&rsquo;t bend.</em>
          </h2>
          <div className="tm-pr-meta">
            <div className="tm-pr-meta-row">
              <span className="tm-pr-meta-k">Index</span>
              <span className="tm-pr-meta-v">01 - 06</span>
            </div>
            <div className="tm-pr-meta-row">
              <span className="tm-pr-meta-k">Scope</span>
              <span className="tm-pr-meta-v">Healthcare growth</span>
            </div>
            <div className="tm-pr-meta-row">
              <span className="tm-pr-meta-k">Version</span>
              <span className="tm-pr-meta-v">2026.05</span>
            </div>
            <p className="tm-pr-meta-note">
              Operating principles aren&rsquo;t marketing copy. They&rsquo;re the constraints we
              apply to every retainer, every quarter - even when the room is asking us to bend them.
            </p>
          </div>
        </header>

        <ul className="tm-pr-grid">
          {PRINCIPLES.map((p) => (
            <li key={p.num} className="tm-pr-cell">
              <span className="tm-pr-tick" aria-hidden="true" />
              <div className="tm-pr-cell-head">
                <span className="tm-pr-num">{p.num}</span>
                <span className="tm-pr-label">{p.label}</span>
              </div>
              <h3 className="tm-pr-title">{p.title}</h3>
              <p className="tm-pr-desc">{p.desc}</p>
              <span className="tm-pr-bar" aria-hidden="true" />
            </li>
          ))}
        </ul>

        <footer className="tm-pr-foot" aria-hidden="true">
          <span className="tm-pr-foot-k">/ END SECTION</span>
          <span className="tm-pr-foot-line" />
          <span className="tm-pr-foot-v">06 / 06</span>
        </footer>
      </div>
    </section>
  );
};

export default Principles;
