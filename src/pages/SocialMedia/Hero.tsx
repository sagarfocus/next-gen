import ServiceHero from '../../components/service/ServiceHero';

const TrendingUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const MainCard = () => (
  <>
    <div className="sv-h3d-bar">
      <ChatIcon />
      Latest post · Just now
    </div>
    <div className="sv-h3d-pack-tag">Top performing</div>
    <div className="sv-h3d-social-row">
      <div className="sv-h3d-avatar" />
      <div>
        <div className="sv-h3d-handle">@yourclinic</div>
        <div className="sv-h3d-handle-meta">Sponsored · Healthcare</div>
      </div>
    </div>
    <div className="sv-h3d-social-card">Patient Story · Before / After</div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">♥ 2,341 likes</span>
      <span className="sv-h3d-stat-val">↗ 14% CTR</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">💬 84 comments</span>
      <span className="sv-h3d-stat-val up">12 leads</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">↗ 47 shares</span>
      <span className="sv-h3d-stat-val">$3.20 CPL</span>
    </div>
  </>
);

const Hero = () => {
  return (
    <ServiceHero
      crumb="Social Media"
      title={
        <>
          Social Media that actually drives <em>real growth.</em>
        </>
      }
      lede="Built for healthcare. Designed for results."
      metric={{
        icon: <TrendingUp />,
        num: (
          <>
            +312<em>%</em>
          </>
        ),
        label: 'Reach · 30d',
      }}
      keyword={<>★ 14% engagement</>}
      rankBadge={{ num: '8.2K', label: 'New followers' }}
      mainCard={<MainCard />}
    />
  );
};

export default Hero;
