import '../../../styles/phase1.css';
import Hero from './Hero';
import Scorecard from './Scorecard';
import Dimensions from './Dimensions';
import Funnel from './Funnel';
import Timeline from './Timeline';
import Deliverables from './Deliverables';
import Foot from './Foot';

/**
 * Phase 1 - Swiss layout: Numerical anchor + visual audit modules.
 * Body focuses on SEO-perspective audit dimensions with inline SVG
 * illustrations so each section is self-explanatory.
 */
const Phase1 = () => (
  <main className="ph1-root">
    <div className="ph1-wrap">
      <Hero />
      <Scorecard />
      <Dimensions />
      <Funnel />
      <Timeline />
      <Deliverables />
      <Foot />
    </div>
  </main>
);

export default Phase1;
