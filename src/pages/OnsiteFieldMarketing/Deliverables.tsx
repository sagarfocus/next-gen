import { DELIVERABLES } from './data';

const Deliverables = () => {
  return (
    <section className="sl-section ofm-dlv-section" id="deliverables">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">02 - What&rsquo;s included</div>
            <h2 className="sl-sec-title">
              Every engagement, <em>end to end.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            One named lead
            <br />
            no vendor tossing
          </div>
        </div>

        <p className="ofm-dlv-intro">
          Field marketing usually fails at the seams — the booth gets built but no one
          handles the leads, the print drop runs but no one tracks the QR codes. We own all
          four surfaces in-house so <strong>nothing falls between vendors</strong>. One field
          lead. One reporting cadence. One number to call when something needs to ship today.
        </p>

        <div className="ofm-dlv-grid">
          {DELIVERABLES.map((d, i) => (
            <article key={d.tag} className="ofm-dlv-card" data-pos={i}>
              <span className="ofm-dlv-tag">{d.tag}</span>
              <ul className="ofm-dlv-list">
                {d.list.map((item) => (
                  <li key={item}>
                    <span className="ofm-dlv-tick" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
