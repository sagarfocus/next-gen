import ServiceHero from '../../components/service/ServiceHero';

const TrendingUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

const MainCard = () => (
  <>
    <div className="sv-h3d-bar">
      <GlobeIcon />
      yourclinic.com
      <span className="sv-h3d-cursor" />
    </div>
    <div className="sv-h3d-pack-tag">Live preview</div>
    <div className="sv-h3d-traffic-dots">
      <div className="sv-h3d-traffic-dot r" />
      <div className="sv-h3d-traffic-dot y" />
      <div className="sv-h3d-traffic-dot g" />
    </div>
    <div className="sv-h3d-mock-landing">
      <div className="sv-h3d-mock-h2">
        Healthier patients<br />
        start here.
      </div>
      <div className="sv-h3d-mock-cta">Book now →</div>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">Page speed</span>
      <span className="sv-h3d-stat-val up">98 / 100</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">Conversion rate</span>
      <span className="sv-h3d-stat-val up">7.4%</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">Mobile UX</span>
      <span className="sv-h3d-stat-val">A+</span>
    </div>
  </>
);

const Hero = () => {
  return (
    <ServiceHero
      crumb="Website Design"
      title={
        <>
          Website Design that actually drives <em>real growth.</em>
        </>
      }
      lede="Built for healthcare. Designed for results."
      metric={{
        icon: <TrendingUp />,
        num: (
          <>
            7.4<em>%</em>
          </>
        ),
        label: 'Conversion rate',
      }}
      keyword={<>★ Mobile UX A+</>}
      rankBadge={{ num: '98', label: 'Page Speed' }}
      mainCard={<MainCard />}
    />
  );
};

export default Hero;
