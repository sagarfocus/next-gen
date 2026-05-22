import Styles from './Styles';
import Hero from './Hero';
import Modules from './Modules';
import Stack from './Stack';
import Gantt from './Gantt';
import Strip from './Strip';

/**
 * Phase 2 - Swiss layout #2: modular block grid with light accent cards,
 * hover lifts, integration stack, and parallel-sprint Gantt timeline.
 */
const Phase2 = () => (
  <main className="ph2-root">
    <Styles />

    <div className="ph2-wrap">
      <Hero />
      <Modules />
      <Stack />
      <Gantt />
    </div>

    <Strip />
  </main>
);

export default Phase2;
