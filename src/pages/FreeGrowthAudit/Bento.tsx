import { MotionCard } from '@/lib/motion';

const Bento = () => (
  <section className="fga-bento-section" aria-labelledby="fga-bento-title">
    <div className="container-shell">
      <header className="fga-section-head">
        <span className="fga-section-tag">Inside the audit</span>
        <h2 id="fga-bento-title" className="fga-section-h2">
          Four artifacts. Each one usable on day one.
        </h2>
      </header>

      <div className="fga-bento">
        <MotionCard naked tilt={5} className="fga-tile fga-tile-a">
          <div className="fga-tile-eyebrow">01 · Score</div>
          <h3 className="fga-tile-h">Visibility Score</h3>
          <p className="fga-tile-p">
            Local Pack, organic, AI Overviews, reviews - scored 0&ndash;100 against
            your top-3 local competitors.
          </p>
          <div className="fga-tile-viz">
            <div className="fga-rings">
              <span className="fga-ring r1" />
              <span className="fga-ring r2" />
              <span className="fga-ring r3" />
              <span className="fga-ring-core">64</span>
            </div>
          </div>
        </MotionCard>

        <MotionCard naked tilt={5} className="fga-tile fga-tile-b">
          <div className="fga-tile-eyebrow">02 · Map</div>
          <h3 className="fga-tile-h">Funnel Leak Map</h3>
          <p className="fga-tile-p">
            Click to booking, step by step. The exact friction point losing the
            most patients.
          </p>
          <div className="fga-funnel">
            {['Search', 'Click', 'Visit', 'Form', 'Book'].map((s, i) => (
              <div key={s} className={`fga-funnel-step f${i}`}>
                <span className="fga-funnel-bar" />
                <span className="fga-funnel-lbl">{s}</span>
              </div>
            ))}
          </div>
        </MotionCard>

        <MotionCard naked tilt={4} className="fga-tile fga-tile-c">
          <div className="fga-tile-eyebrow">03 · Spend</div>
          <h3 className="fga-tile-h">Paid Media Review</h3>
          <p className="fga-tile-p">
            Wasted spend flagged. Audiences to cut. Campaigns to scale - with the CAC math.
          </p>
        </MotionCard>

        <MotionCard naked tilt={4} className="fga-tile fga-tile-d">
          <div className="fga-tile-eyebrow">04 · Plan</div>
          <h3 className="fga-tile-h">90-Day Plan</h3>
          <p className="fga-tile-p">
            A ranked action list. Highest-ROI move first. Yours, agency or not.
          </p>
          <ul className="fga-checks">
            <li><span /> Tracking gaps</li>
            <li><span /> Content priorities</li>
            <li><span /> Paid restructure</li>
            <li><span /> Review cadence</li>
          </ul>
        </MotionCard>
      </div>
    </div>
  </section>
);

export default Bento;
