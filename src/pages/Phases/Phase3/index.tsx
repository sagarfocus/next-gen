import Styles from './Styles';
import Hero from './Hero';
import Body from './Body';
import Arc from './Arc';
import Stats from './Stats';
import Timeline from './Timeline';
import Channels from './Channels';
import Handoff from './Handoff';
import End from './End';

/**
 * Phase 3 - Swiss layout #3: Editorial spread with display headline
 * Oversized type, ruled timeline, drop-cap intro, big stats.
 */
const Phase3 = () => (
  <main className="ph3-root">
    <Styles />

    <div className="ph3-wrap">
      <Hero />
      <Body />
      <Arc />
      <Stats />
      <Timeline />
      <Channels />
      <Handoff />
      <End />
    </div>
  </main>
);

export default Phase3;
