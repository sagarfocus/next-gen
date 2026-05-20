import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ArrowRight = () => (
  <svg
    width={13}
    height={13}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

interface RecoveryLink {
  to: string;
  label: string;
  hint: string;
}

const POPULAR_DESTINATIONS: RecoveryLink[] = [
  { to: '/', label: 'Home', hint: 'Start from the top of the site.' },
  { to: '/services', label: 'All services', hint: 'Every growth lever, one page.' },
  { to: '/case-studies', label: 'Case studies', hint: 'Real engagements, verified numbers.' },
  { to: '/free-growth-audit', label: 'Free growth audit', hint: '30 minutes, no slide deck.' },
];

const POPULAR_SERVICES: RecoveryLink[] = [
  { to: '/services/seo-local-search', label: 'Local SEO', hint: 'Win the map pack in your metro.' },
  { to: '/services/google-ads', label: 'Google Ads', hint: 'High-intent paid acquisition.' },
  { to: '/services/website-design-dev', label: 'Website design', hint: 'Fast, on-brand, HIPAA-aware.' },
  { to: '/medical-automation', label: 'Medical automation', hint: 'Reclaim front-desk hours.' },
];

const POPULAR_READS: RecoveryLink[] = [
  { to: '/blog', label: 'The blog', hint: 'Field-tested tactics, weekly.' },
  { to: '/healthcare-news', label: 'Healthcare news', hint: 'Curated weekly editorial brief.' },
  { to: '/faq', label: 'FAQ', hint: 'Answers to the questions we get most.' },
  { to: '/contact', label: 'Talk to us', hint: 'A real reply within a business day.' },
];

const Column = ({ title, links }: { title: string; links: RecoveryLink[] }) => (
  <div
    style={{
      background: '#fff',
      border: '1px solid rgba(45,55,72,0.10)',
      borderRadius: 18,
      padding: 'clamp(20px, 2.4vw, 28px)',
    }}
  >
    <h2
      style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#718096',
        margin: '0 0 18px',
      }}
    >
      {title}
    </h2>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
      {links.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 12,
              alignItems: 'center',
              padding: '12px 14px',
              borderRadius: 12,
              border: '1px solid rgba(45,55,72,0.06)',
              transition: 'border-color .18s ease, transform .18s ease, background .18s ease',
              color: '#1A2438',
            }}
            className="nf-link"
          >
            <span>
              <span
                style={{
                  display: 'block',
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 2,
                }}
              >
                {link.label}
              </span>
              <span style={{ fontSize: 13, color: '#4A5568' }}>{link.hint}</span>
            </span>
            <span style={{ color: '#B38B6D', display: 'inline-flex' }}>
              <ArrowRight />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Page not found · TheNextGen Healthcare Marketing';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <main
      className="nf-page"
      style={{ paddingBottom: 'clamp(72px, 9vw, 120px)' }}
    >
      <section
        aria-labelledby="nf-title"
        style={{ padding: 'clamp(64px, 8vw, 112px) 0 clamp(40px, 5vw, 64px)' }}
      >
        <div className="container-shell">
          <div style={{ maxWidth: 760 }}>
            <span className="results-eyebrow">Error 404</span>
            <h1
              id="nf-title"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: 1.04,
                letterSpacing: '-0.025em',
                color: '#2D3748',
                fontWeight: 700,
                margin: '8px 0 16px',
              }}
            >
              We couldn&rsquo;t find that page.
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: '#4A5568',
                margin: 0,
                maxWidth: '60ch',
              }}
            >
              The address <code style={{ background: 'rgba(45,55,72,0.06)', padding: '2px 8px', borderRadius: 6 }}>{location.pathname}</code>{' '}
              doesn&rsquo;t match a live route on TheNextGen. Pick a destination
              below - or jump straight to a free growth audit.
            </p>
            <div
              style={{
                display: 'flex',
                gap: 12,
                marginTop: 28,
                flexWrap: 'wrap',
              }}
            >
              <Link to="/" className="btn-primary">
                Back to home <ArrowRight />
              </Link>
              <Link
                to="/free-growth-audit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 20px',
                  borderRadius: 10,
                  border: '1.5px solid rgba(45,55,72,0.18)',
                  color: '#2D3748',
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Start a free audit <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
};

export default NotFound;
