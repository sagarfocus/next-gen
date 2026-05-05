import ServiceHero from '../../components/service/ServiceHero';

const TrendingUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const PaletteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="13.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="10.5" r="2.5" />
    <circle cx="8.5" cy="7.5" r="2.5" />
    <circle cx="6.5" cy="12.5" r="2.5" />
    <path d="M12 22a10 10 0 0 1 0-20" />
  </svg>
);

const MainCard = () => (
  <>
    <div className="sv-h3d-bar">
      <PaletteIcon />
      Brand system · v1
    </div>
    <div className="sv-h3d-pack-tag">Identity guide</div>
    <div className="sv-h3d-swatch-row">
      <div className="sv-h3d-swatch cta" />
      <div className="sv-h3d-swatch sage" />
      <div className="sv-h3d-swatch line" />
      <div className="sv-h3d-swatch heading" />
    </div>
    <div className="sv-h3d-typo-display">Plus Jakarta</div>
    <div className="sv-h3d-typo-meta">Display · Body · Caption</div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">Recall lift</span>
      <span className="sv-h3d-stat-val up">+62%</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">Trust score</span>
      <span className="sv-h3d-stat-val up">A+</span>
    </div>
  </>
);

const Hero = () => {
  return (
    <ServiceHero
      crumb="Branding"
      title={
        <>
          Branding that actually drives <em>real growth.</em>
        </>
      }
      lede="Built for healthcare. Designed for results."
      metric={{
        icon: <TrendingUp />,
        num: (
          <>
            +62<em>%</em>
          </>
        ),
        label: 'Recall lift',
      }}
      keyword={<>★ Premium positioning</>}
      rankBadge={{
        num: (
          <>
            A<em>+</em>
          </>
        ),
        label: 'Trust score',
      }}
      mainCard={<MainCard />}
    />
  );
};

export default Hero;
