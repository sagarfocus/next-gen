import { Link } from 'react-router-dom';

const Foot = () => (
  <div className="ph1-foot">
    <span className="ph1-foot-side">End of Phase 01</span>
    <Link to="/methodology/phase-2" className="ph1-next">
      <span className="ph1-next-label">Next - Phase 02</span>
      <span className="ph1-next-title">Strategy &amp; Infrastructure Build →</span>
    </Link>
  </div>
);

export default Foot;
