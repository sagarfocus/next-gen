import { FIELD_CHANNELS } from './data';

const Channels = () => {
  return (
    <section className="sl-section ofm-ch-section" id="channels">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">01 - Where we run</div>
            <h2 className="sl-sec-title">
              Four field channels. <em>One unified plan.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            We pick the mix
            <br />
            based on your service area
          </div>
        </div>

        <div className="ofm-ch-grid">
          {FIELD_CHANNELS.map((c, i) => (
            <article key={c.n} className="ofm-ch-card" data-pos={i}>
              <div className="ofm-ch-num">{c.n}</div>
              <div>
                <h3 className="ofm-ch-name">{c.name}</h3>
                <span className="ofm-ch-summary">{c.summary}</span>
                <p className="ofm-ch-desc">{c.desc}</p>
                <ul className="ofm-ch-list">
                  {c.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Channels;
