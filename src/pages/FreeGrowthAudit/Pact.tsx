import type { ReactNode } from 'react';

const Pact = () => {
  const promises: { k: string; v: ReactNode }[] = [
    {
      k: 'No upsell on the call.',
      v: <>The plan ships either way. We do not pitch you on the audit call. Promise.</>,
    },
    {
      k: 'Run by a strategist.',
      v: <>A senior growth lead does the audit - not a sales rep with a template.</>,
    },
    { k: 'Yours to keep.', v: <>The PDF is yours. Take it to any agency, or run it yourself.</> },
  ];
  return (
    <section className="fga-pact" aria-labelledby="fga-pact-title">
      <div className="container-shell">
        <div className="fga-pact-tree">
          <div className="fga-pact-root">
            <span className="fga-section-tag">The promise</span>
            <h2 id="fga-pact-title" className="fga-pact-h">
              The pact <span className="fga-pact-amp">&amp;</span> the fine print.
            </h2>
          </div>

          <div className="fga-pact-connector" aria-hidden="true">
            <span className="fga-pact-trunk" />
            <span className="fga-pact-bar" />
            <span className="fga-pact-drop fga-pact-drop-1" />
            <span className="fga-pact-drop fga-pact-drop-2" />
            <span className="fga-pact-drop fga-pact-drop-3" />
          </div>

          <ol className="fga-pact-list">
            {promises.map((p, i) => (
              <li key={p.k}>
                <span className="fga-pact-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.k}</h3>
                <p>{p.v}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Pact;
