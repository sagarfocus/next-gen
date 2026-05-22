import { IconDoc, IconFunnel, IconList, IconChart } from './helpers';

const Deliverables = () => (
  <section className="ph1-deliv">
    <div className="ph1-deliv-head">
      <span className="lbl">/ 05 - What You Get</span>
      <h2>Four artifacts. Your team owns all of them on day fourteen.</h2>
    </div>
    <div className="ph1-deliv-grid">
      <div className="ph1-deliv-item">
        <IconDoc className="ic" />
        <h4>Scorecard (1 page)</h4>
        <p>Every audit dimension, one number, one verdict, one dollar value to fix.</p>
      </div>
      <div className="ph1-deliv-item">
        <IconFunnel className="ic" />
        <h4>Funnel leakage map</h4>
        <p>100 clicks → 8 bookings, every drop-off measured and named.</p>
      </div>
      <div className="ph1-deliv-item">
        <IconList className="ic" />
        <h4>Prioritized fix list</h4>
        <p>Ranked by impact-per-effort. Top 5 ship in Phase 2; the rest queue.</p>
      </div>
      <div className="ph1-deliv-item">
        <IconChart className="ic" />
        <h4>Competitor delta</h4>
        <p>The exact gap - keyword, rank, and review - to the leader in your radius.</p>
      </div>
    </div>
  </section>
);

export default Deliverables;
