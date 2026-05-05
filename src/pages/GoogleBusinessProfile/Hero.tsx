import ServiceHero from '../../components/service/ServiceHero';

const TrendingUp = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const TickIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const MainCard = () => (
  <>
    <div className="sv-h3d-bar">
      <SearchIcon />
      family doctor near me
      <span className="sv-h3d-cursor" />
    </div>
    <div className="sv-h3d-pack-tag">Map Pack · Top 3</div>
    <div className="sv-h3d-map">
      <div className="sv-h3d-pin you" />
      <div className="sv-h3d-pin b" />
      <div className="sv-h3d-pin c" />
    </div>
    <div className="sv-h3d-row">
      <div className="sv-h3d-rank you">1</div>
      <div className="sv-h3d-row-text">
        <div className="sv-h3d-row-name you">Your Clinic</div>
        <div className="sv-h3d-row-meta">
          <span className="sv-h3d-stars">★ 4.9</span> · 0.4 mi · Open now
        </div>
      </div>
      <div className="sv-h3d-row-tick">
        <TickIcon />
      </div>
    </div>
    <div className="sv-h3d-row">
      <div className="sv-h3d-rank">2</div>
      <div className="sv-h3d-row-text">
        <div className="sv-h3d-row-name">Hospital Network</div>
        <div className="sv-h3d-row-meta">
          <span className="sv-h3d-stars">★ 4.2</span> · 0.8 mi
        </div>
      </div>
    </div>
    <div className="sv-h3d-row">
      <div className="sv-h3d-rank">3</div>
      <div className="sv-h3d-row-text">
        <div className="sv-h3d-row-name">Big Chain Urgent</div>
        <div className="sv-h3d-row-meta">
          <span className="sv-h3d-stars">★ 4.5</span> · 1.2 mi
        </div>
      </div>
    </div>
  </>
);

const Hero = () => {
  return (
    <ServiceHero
      crumb="Google Business Profile"
      title={
        <>
          Google Business Profile that actually drives{' '}
          <em>real growth.</em>
        </>
      }
      lede="Built for healthcare. Designed for results."
      metric={{
        icon: <TrendingUp />,
        num: (
          <>
            3.2<em>×</em>
          </>
        ),
        label: 'Map Pack lift',
      }}
      keyword={<>★ 4.9 · 142 reviews</>}
      rankBadge={{ num: '#1', label: 'Map ranking' }}
      mainCard={<MainCard />}
    />
  );
};

export default Hero;
