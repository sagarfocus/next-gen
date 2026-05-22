import { Link } from 'react-router-dom';

const Strip = () => (
  <section className="ph2-strip">
    <div className="ph2-strip-wrap">
      <span className="ph2-strip-lbl">End of Phase 02</span>
      <p className="ph2-strip-q">
        &ldquo;When the strategy and the infrastructure ship in the same two weeks, the launch
        isn&rsquo;t a launch - it&rsquo;s a switch.&rdquo;
      </p>
      <Link to="/methodology/phase-3" className="ph2-strip-next">
        <span className="l">Next - Phase 03</span>
        <span className="t">Launch &amp; Accelerate →</span>
      </Link>
    </div>
  </section>
);

export default Strip;
