import { Fragment } from 'react';
import type { ReactElement } from 'react';

const GoogleIcon = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M21.35 11.1H12v2.85h5.36c-.24 1.42-1.71 4.16-5.36 4.16-3.22 0-5.86-2.66-5.86-5.95s2.64-5.95 5.86-5.95c1.84 0 3.07.78 3.78 1.45l2.58-2.49C16.65 3.6 14.5 2.7 12 2.7 6.95 2.7 2.85 6.8 2.85 11.85s4.1 9.15 9.15 9.15c5.28 0 8.78-3.71 8.78-8.93 0-.6-.07-1.06-.16-1.5l-9.62.53z" />
  </svg>
);

const MetaIcon = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  </svg>
);

const HipaaIcon = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2 4 5v7c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const SeparatorIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <line x1="12" y1="3" x2="12" y2="21" />
  </svg>
);

interface CertDefinition {
  name: string;
  /** Tone class — `g` = Google blue, `m` = Meta tan, `h` = HIPAA sage. */
  tone: 'g' | 'm' | 'h';
  Icon: () => ReactElement;
}

const CERTS: CertDefinition[] = [
  { name: 'Google Certified', tone: 'g', Icon: GoogleIcon },
  { name: 'Meta Certified', tone: 'm', Icon: MetaIcon },
  { name: 'HIPAA Aware', tone: 'h', Icon: HipaaIcon },
];

const TrackBlock = ({ keyPrefix }: { keyPrefix: string }) => (
  <>
    {CERTS.map(({ name, tone, Icon }, i) => (
      <Fragment key={`${keyPrefix}-${i}`}>
        <span className="cert-item">
          <span className={`cert-ico ${tone}`}>
            <Icon />
          </span>
          {name}
        </span>
        <span className="cert-sep" aria-hidden="true">
          <SeparatorIcon />
        </span>
      </Fragment>
    ))}
  </>
);

const CertStrip = () => {
  return (
    <div className="certs reveal d5" aria-label="Certifications and compliance">
      <div className="certs-label">
        <span className="dot" aria-hidden="true" />
        Certified &amp; Compliant
      </div>
      <div className="certs-pill">
        <div className="certs-track animate-marquee" aria-hidden="true">
          {/* Rendered twice for the seamless −50% translateX loop. */}
          <TrackBlock keyPrefix="a" />
          <TrackBlock keyPrefix="b" />
        </div>
      </div>
    </div>
  );
};

export default CertStrip;
