import { TIERS } from './data';

const Tiers = () => (
  <section className="slax-tiers">
    <div className="gt-shell">
      <header className="gtx-sec-head">
        <span className="gtx-eyebrow">
          <span className="gtx-eyebrow-dot" aria-hidden="true" />
          Severity Tiers
        </span>
        <h2 className="gtx-sec-title">
          Four tiers. <em>Each one contractual.</em>
        </h2>
        <p className="gtx-sec-sub">
          Every inbound request is triaged to one of four tiers. Acknowledgement and resolution
          targets are written into the engagement, not assumed.
        </p>
      </header>

      <div className="slax-tier-grid">
        {TIERS.map((t) => (
          <article key={t.level} className={`slax-tier-card tone-${t.tone}`}>
            <div className="slax-tier-head">
              <span className="slax-tier-level">{t.level}</span>
              <span className="slax-tier-label">{t.label}</span>
            </div>
            <p className="slax-tier-desc">{t.desc}</p>
            <dl className="slax-tier-meta">
              <div className="slax-tier-row">
                <dt>Acknowledge</dt>
                <dd className="slax-tier-num">{t.ack}</dd>
              </div>
              <div className="slax-tier-row">
                <dt>Resolve</dt>
                <dd className="slax-tier-num">{t.resolve}</dd>
              </div>
              <div className="slax-tier-row">
                <dt>Channel</dt>
                <dd>{t.channel}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Tiers;
