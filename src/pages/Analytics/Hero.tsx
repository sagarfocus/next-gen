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

const ChartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <line x1="4" y1="20" x2="4" y2="11" />
    <line x1="10" y1="20" x2="10" y2="4" />
    <line x1="16" y1="20" x2="16" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

const MainCard = () => (
  <>
    <div className="sv-h3d-bar">
      <ChartIcon />
      Marketing dashboard · live
    </div>
    <div className="sv-h3d-pack-tag">All channels</div>
    <div className="sv-h3d-bars">
      <div className="sv-h3d-bar-col" style={{ height: '35%' }} />
      <div className="sv-h3d-bar-col tan" style={{ height: '55%' }} />
      <div className="sv-h3d-bar-col" style={{ height: '45%' }} />
      <div className="sv-h3d-bar-col sage" style={{ height: '75%' }} />
      <div className="sv-h3d-bar-col" style={{ height: '60%' }} />
      <div className="sv-h3d-bar-col" style={{ height: '90%' }} />
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">Conversions</span>
      <span className="sv-h3d-stat-val up">+247</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">CPA</span>
      <span className="sv-h3d-stat-val">$28.40</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">ROAS</span>
      <span className="sv-h3d-stat-val up">4.2×</span>
    </div>
  </>
);

const Hero = () => {
  return (
    <ServiceHero
      crumb="Analytics"
      title={
        <>
          Analytics that actually drives <em>real growth.</em>
        </>
      }
      lede="Built for healthcare. Designed for results."
      metric={{
        icon: <TrendingUp />,
        num: <>$12M</>,
        label: 'Tracked revenue',
      }}
      keyword={<>★ 100% attribution</>}
      rankBadge={{
        num: '47+',
        label: 'Live dashboards',
      }}
      mainCard={<MainCard />}
    />
  );
};

export default Hero;
