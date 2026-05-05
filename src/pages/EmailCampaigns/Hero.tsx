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

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MainCard = () => (
  <>
    <div className="sv-h3d-bar">
      <MailIcon />
      Active drip · Recall
    </div>
    <div className="sv-h3d-pack-tag">Live performance</div>

    <div className="sv-h3d-email">
      <div className="sv-h3d-email-subj">Your follow-up appointment</div>
      <div className="sv-h3d-email-prev">
        Hi {'{first_name}'}, we noticed it&rsquo;s been 6 months since your last visit...
      </div>
    </div>

    <div className="sv-h3d-meter">
      <div className="sv-h3d-meter-lbl">Open rate</div>
      <div className="sv-h3d-meter-bar">
        <div className="sv-h3d-meter-fill" style={{ width: '68%' }} />
      </div>
      <div className="sv-h3d-meter-val">68%</div>
    </div>

    <div className="sv-h3d-meter">
      <div className="sv-h3d-meter-lbl">Click rate</div>
      <div className="sv-h3d-meter-bar">
        <div className="sv-h3d-meter-fill" style={{ width: '24%' }} />
      </div>
      <div className="sv-h3d-meter-val">24%</div>
    </div>

    <div className="sv-h3d-stat" style={{ marginTop: '6px' }}>
      <span className="sv-h3d-stat-label">Bookings</span>
      <span className="sv-h3d-stat-val up">+47 this month</span>
    </div>
  </>
);

const Hero = () => {
  return (
    <ServiceHero
      crumb="Email Campaigns"
      title={
        <>
          Email Campaigns that actually drives <em>real growth.</em>
        </>
      }
      lede="Built for healthcare. Designed for results."
      metric={{
        icon: <TrendingUp />,
        num: (
          <>
            68<em>%</em>
          </>
        ),
        label: 'Open rate',
      }}
      keyword={<>★ 24% click rate</>}
      rankBadge={{ num: '+47', label: 'Bookings / mo' }}
      mainCard={<MainCard />}
    />
  );
};

export default Hero;
