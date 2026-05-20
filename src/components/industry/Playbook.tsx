export interface PlayStep {
  name: string;
  body: string;
}

interface PlaybookProps {
  steps: PlayStep[];
}

const Playbook = ({ steps }: PlaybookProps) => {
  return (
    <section className="iv-section iv-playbook" aria-labelledby="iv-play-title">
      <div className="container-shell">
        <div className="iv-playbook-grid">
          <header className="iv-playbook-head">
            <span className="iv-section-num">02</span>
            <h2 id="iv-play-title" className="iv-section-title">
              The playbook,
              <br />
              <em>step by step.</em>
            </h2>
            <p className="iv-playbook-sub">
              The same shape every engagement - tuned for this vertical.
            </p>
          </header>

          <ol className="iv-playbook-steps">
            {steps.map((s, i) => (
              <li key={s.name} className="iv-playbook-step">
                <span className="iv-playbook-idx">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="iv-playbook-name">{s.name}</h3>
                  <p className="iv-playbook-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Playbook;
