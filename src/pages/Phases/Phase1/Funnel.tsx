const Funnel = () => (
  <section className="ph1-funnel-wrap">
    <div className="ph1-funnel-head">
      <span className="lbl">/ 03 - The Leak Map</span>
      <h2>The single visualization that gets every audit signed off in one meeting.</h2>
      <p>
        We trace 100 search clicks through every step until they become
        booked patients. The widest drop-off is where your next dollar
        goes - and your scorecard tells you how much it&rsquo;s worth.
      </p>
    </div>
    <div className="ph1-funnel" aria-label="Funnel leakage from 100 clicks to 8 bookings">
      <div className="ph1-step">
        <span className="idx">01</span>
        <span className="stage">Clicks</span>
        <div className="bar">
          <div className="fill" style={{ width: '100%' }} />
        </div>
        <div className="num"><span className="count">100</span><span className="of">/ 100</span></div>
      </div>

      <div className="ph1-drop">
        <span className="line" aria-hidden="true" />
        <span className="d-val">−16</span>
        <span className="d-reason">bounce</span>
      </div>

      <div className="ph1-step">
        <span className="idx">02</span>
        <span className="stage">Landed</span>
        <div className="bar">
          <div className="fill" style={{ width: '84%' }} />
        </div>
        <div className="num"><span className="count">84</span><span className="of">/ 100</span></div>
      </div>

      <div className="ph1-drop is-leak">
        <span className="line" aria-hidden="true" />
        <span className="d-val">−32</span>
        <span className="d-reason">scroll exit</span>
        <span className="d-badge">Biggest leak</span>
      </div>

      <div className="ph1-step leak">
        <span className="idx">03</span>
        <span className="stage">Engaged</span>
        <div className="bar">
          <div className="fill" style={{ width: '52%' }} />
        </div>
        <div className="num"><span className="count">52</span><span className="of">/ 100</span></div>
      </div>

      <div className="ph1-drop">
        <span className="line" aria-hidden="true" />
        <span className="d-val">−33</span>
        <span className="d-reason">form / call</span>
      </div>

      <div className="ph1-step">
        <span className="idx">04</span>
        <span className="stage">Inquired</span>
        <div className="bar">
          <div className="fill" style={{ width: '19%' }} />
        </div>
        <div className="num"><span className="count">19</span><span className="of">/ 100</span></div>
      </div>

      <div className="ph1-drop">
        <span className="line" aria-hidden="true" />
        <span className="d-val">−11</span>
        <span className="d-reason">desk drop</span>
      </div>

      <div className="ph1-step leak">
        <span className="idx">05</span>
        <span className="stage">Booked</span>
        <div className="bar">
          <div className="fill" style={{ width: '8%' }} />
        </div>
        <div className="num"><span className="count">08</span><span className="of">/ 100</span></div>
      </div>
    </div>
  </section>
);

export default Funnel;
