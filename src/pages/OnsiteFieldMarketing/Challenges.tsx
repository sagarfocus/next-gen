import { CHALLENGES } from './data';

const Challenges = () => {
  return (
    <section className="sl-section ofm-chal-section" id="challenges">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">06 - What we fix</div>
            <h2 className="sl-sec-title">
              Twelve field-marketing problems <em>we hear every month.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            If any of these sound
            <br />
            familiar, we should talk
          </div>
        </div>

        <div className="ofm-chal-grid">
          {CHALLENGES.map((c, i) => (
            <div key={c} className="ofm-chal-item">
              <span className="ofm-chal-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="ofm-chal-text">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
