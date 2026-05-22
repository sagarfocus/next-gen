const Modules = () => (
  <>
    <div className="ph2-section-bar">
      <span className="lbl">/ 02</span>
      <span className="title">Eight modules deployed in parallel.</span>
      <span className="meta">Track A · Strategy &nbsp;/&nbsp; Track B · Build</span>
    </div>

    <div className="ph2-modules">
      <article className="ph2-mod">
        <span className="ph2-mod-num">A · 01</span>
        <h3 className="ph2-mod-title">Service keyword map</h3>
        <p className="ph2-mod-text">
          Demand and difficulty scored per service line, mapped to the page that will own it.
        </p>
        <div className="ph2-mod-foot">Strategy</div>
      </article>
      <article className="ph2-mod accent">
        <span className="ph2-mod-num">B · 01</span>
        <h3 className="ph2-mod-title">AI chatbot &amp; intake</h3>
        <p className="ph2-mod-text">
          Conversational triage on the site, with handoff to the front desk and a structured record
          at the end.
        </p>
        <div className="ph2-mod-foot">Build</div>
      </article>
      <article className="ph2-mod">
        <span className="ph2-mod-num">A · 02</span>
        <h3 className="ph2-mod-title">Competitive positioning</h3>
        <p className="ph2-mod-text">
          The single sentence that separates your clinic from every other clinic on the SERP - and
          the proof to back it.
        </p>
        <div className="ph2-mod-foot">Strategy</div>
      </article>
      <article className="ph2-mod sage">
        <span className="ph2-mod-num">B · 02</span>
        <h3 className="ph2-mod-title">Call tracking</h3>
        <p className="ph2-mod-text">
          Dynamic numbers per channel. Every inbound call attributed to the campaign that produced
          it.
        </p>
        <div className="ph2-mod-foot">Build</div>
      </article>

      <article className="ph2-mod">
        <span className="ph2-mod-num">A · 03</span>
        <h3 className="ph2-mod-title">Patient journey</h3>
        <p className="ph2-mod-text">
          Touchpoints from first impression to retained patient - each one owned by a specific
          channel and metric.
        </p>
        <div className="ph2-mod-foot">Strategy</div>
      </article>
      <article className="ph2-mod">
        <span className="ph2-mod-num">B · 03</span>
        <h3 className="ph2-mod-title">Digital intake forms</h3>
        <p className="ph2-mod-text">
          HIPAA-aware forms wired to your EMR / CRM, replacing whatever your front-desk team is
          rekeying today.
        </p>
        <div className="ph2-mod-foot">Build</div>
      </article>
      <article className="ph2-mod sage">
        <span className="ph2-mod-num">A · 04</span>
        <h3 className="ph2-mod-title">Editorial calendar</h3>
        <p className="ph2-mod-text">
          90 days of healthcare content, sequenced to compound on the keyword map and the personas.
        </p>
        <div className="ph2-mod-foot">Strategy</div>
      </article>
      <article className="ph2-mod accent">
        <span className="ph2-mod-num">B · 04</span>
        <h3 className="ph2-mod-title">Analytics dashboard</h3>
        <p className="ph2-mod-text">
          A single board: pipeline, cost per booked patient, channel attribution. Updated in real
          time.
        </p>
        <div className="ph2-mod-foot">Build</div>
      </article>
    </div>
  </>
);

export default Modules;
