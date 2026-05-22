import Column from './Column';
import { POPULAR_DESTINATIONS, POPULAR_SERVICES, POPULAR_READS } from './links';

const RecoveryGrid = () => (
  <section aria-label="Recovery links">
    <div className="container-shell">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(16px, 1.8vw, 24px)',
        }}
      >
        <Column title="Popular destinations" links={POPULAR_DESTINATIONS} />
        <Column title="Most-visited services" links={POPULAR_SERVICES} />
        <Column title="Read · Watch · Ask" links={POPULAR_READS} />
      </div>
    </div>
  </section>
);

export default RecoveryGrid;
