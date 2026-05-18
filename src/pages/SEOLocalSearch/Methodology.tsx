interface Step {
  num: string;
  name: string;
  desc: string;
  time: string;
}

const STEPS: Step[] = [
  { num: '01', name: 'Audit', desc: 'Technical, GBP, and competitor diagnostic.', time: 'Week 1–2' },
  { num: '02', name: 'Strategy', desc: 'Priority matrix and KPI dashboard locked.', time: 'Week 2–3' },
  { num: '03', name: 'Foundation', desc: 'Technical fixes, schema, page speed shipped.', time: 'Week 3–5' },
  { num: '04', name: 'Authority', desc: 'GBP rebuild, citations, review program live.', time: 'Week 4–6' },
  { num: '05', name: 'Compound', desc: 'Content cadence, links, monthly retro.', time: 'Ongoing' },
];

const Methodology = () => {
  return (
    <section className="sl-section sl-method" id="method">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">02 — Methodology</div>
            <h2 className="sl-sec-title">
              Five phases over <em>60 days.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            First lift visible
            <br />
            by week 6
          </div>
        </div>

        <div className="sl-timeline">
          <div className="sl-tl-grid">
            {STEPS.map((s) => (
              <div key={s.num} className="sl-tl-step">
                <div className="sl-tl-dot">{s.num}</div>
                <div>
                  <h3 className="sl-tl-name">{s.name}</h3>
                  <p className="sl-tl-desc">{s.desc}</p>
                  <span className="sl-tl-time">{s.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
