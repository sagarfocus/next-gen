import { FILTERS, type Category } from './data';

const FilterBar = ({ filter, setFilter }: { filter: 'All' | Category; setFilter: (f: 'All' | Category) => void }) => (
  <section className="atx-filters" aria-label="Filter by category">
    <div className="container-shell">
      <div className="atx-filter-head">
        <span className="atx-eyebrow"><span className="atx-eyebrow-dot" />/ 02 · Filter the library</span>
        <p className="atx-filter-hint">{filter === 'All' ? 'All six workflows shown.' : `Showing the ${filter.toLowerCase()} workflow only.`}</p>
      </div>
      <div className="atx-filter-row" role="tablist">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            className={`atx-chip${filter === f ? ' is-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default FilterBar;
