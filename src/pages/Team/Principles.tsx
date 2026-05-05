interface Principle {
  num: string;
  title: string;
  desc: string;
}

const PRINCIPLES: Principle[] = [
  {
    num: '01',
    title: 'One craft per practitioner.',
    desc: 'Nobody on this team is a generalist. The SEO lead does SEO. The designer designs. The developer ships. Specialisation is non-negotiable.',
  },
  {
    num: '02',
    title: 'Healthcare-only.',
    desc: 'We do not work outside healthcare. The vocabulary, the compliance posture, the patient psychology — all of it compounds when the team only ships in one industry.',
  },
  {
    num: '03',
    title: 'Decisions over deliverables.',
    desc: 'A weekly Loom and a live dashboard, not a 40-page deck. We bias to clarity and to moves that change the next 30 days, not the next 30 slides.',
  },
  {
    num: '04',
    title: 'Senior practitioners, no juniors.',
    desc: 'Every retainer is staffed by the people whose name is on the page. No account managers, no off-shore handoffs, no "I\'ll check with the team".',
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

        <div className="tm-principles-grid">
          <h2 className="tm-principles-h2">
            Four rules <em>we don&rsquo;t bend.</em>
          </h2>

          <ul className="tm-principles-list">
            {PRINCIPLES.map((p) => (
              <li key={p.num} className="tm-principle">
                <span className="tm-principle-num">{p.num}</span>
                <div>
                  <h3 className="tm-principle-title">{p.title}</h3>
                  <p className="tm-principle-desc">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Principles;
