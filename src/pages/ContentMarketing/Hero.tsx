import ServiceHero from '../../components/service/ServiceHero';

const TrendingUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const MainCard = () => (
  <>
    <div className="sv-h3d-bar">
      <FileIcon />
      Top article · Last 30d
    </div>
    <div className="sv-h3d-pack-tag">Authority guide</div>
    <div className="sv-h3d-article-title">
      5 questions to ask your dentist before any procedure
    </div>
    <div className="sv-h3d-article-meta">Authority guide · 6 min read</div>
    <div className="sv-h3d-article-stats">
      <div className="sv-h3d-stat">
        <span className="sv-h3d-stat-label">Organic traffic</span>
        <span className="sv-h3d-stat-val up">14.2K /mo</span>
      </div>
      <div className="sv-h3d-stat">
        <span className="sv-h3d-stat-label">Avg position</span>
        <span className="sv-h3d-stat-val">#3</span>
      </div>
      <div className="sv-h3d-stat">
        <span className="sv-h3d-stat-label">Bookings</span>
        <span className="sv-h3d-stat-val up">+38 /mo</span>
      </div>
    </div>
  </>
);

const Hero = () => {
  return (
    <ServiceHero
      crumb="Content Marketing"
      title={
        <>
          Content Marketing that actually drives <em>real growth.</em>
        </>
      }
      lede="Built for healthcare. Designed for results."
      metric={{
        icon: <TrendingUp />,
        num: <>14.2K</>,
        label: 'Organic / month',
      }}
      keyword={<>★ 38 bookings / mo</>}
      rankBadge={{ num: '#3', label: 'SERP avg pos.' }}
      mainCard={<MainCard />}
    />
  );
};

export default Hero;
