import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section
      className="results-section"
      aria-labelledby="nf-title"
      style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}
    >
      <div
        className="container-shell"
        style={{ textAlign: 'center', maxWidth: 640 }}
      >
        <span className="results-eyebrow" style={{ justifyContent: 'center' }}>
          Error 404
        </span>
        <h1
          id="nf-title"
          className="results-h2"
          style={{ gridColumn: 'unset', margin: '8px auto 16px' }}
        >
          Page not found.
        </h1>
        <p
          className="results-sub"
          style={{
            gridColumn: 'unset',
            maxWidth: '52ch',
            margin: '0 auto 32px',
          }}
        >
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          Let&rsquo;s get you back on track.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home
          <svg
            width={14}
            height={14}
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
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
