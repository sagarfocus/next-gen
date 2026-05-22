import Hero from './Hero';
import Shifts from './Shifts';
import Coverage from './Coverage';
import ReadinessCriteria from './ReadinessCriteria';
import Closing from './Closing';

/* ============================================================
   AEO SCHEMA — Answer-engine optimisation page.
   Lavender/cta-blue tone, code-structure metaphor.
   Quote-style shift cards, schema-group code panels, ship-readiness
   criteria, gradient closing.
   ============================================================ */

const AeoSchema = () => (
  <>
    <Hero />
    <Shifts />
    <Coverage />
    <ReadinessCriteria />
    <Closing />
  </>
);

export default AeoSchema;
