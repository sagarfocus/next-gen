import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  current?: string;
  items?: BreadcrumbItem[];
  section?: string;
}

const ChevronRight = () => (
  <svg
    width={10}
    height={10}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// Path-aware breadcrumb. New callers pass `items` (each can be a link or label).
// Legacy callers passing only `current` (and optionally `section`) keep working
// as Home > Resources > current.
const Breadcrumb = ({ current, items, section = 'Resources' }: BreadcrumbProps) => {
  const trail: BreadcrumbItem[] = items
    ? items
    : [{ label: section }, { label: current ?? '' }];

  const lastIdx = trail.length - 1;

  return (
    <nav className="crumb" aria-label="Breadcrumb">
      <ol className="crumb-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        {trail.map((item, idx) => {
          const isLast = idx === lastIdx;
          return (
            <Fragment key={`${item.label}-${idx}`}>
              <li aria-hidden="true">
                <ChevronRight />
              </li>
              <li>
                {isLast ? (
                  <span className="crumb-here" aria-current="page">
                    {item.label}
                  </span>
                ) : item.to ? (
                  <Link to={item.to} className="crumb-link">
                    {item.label}
                  </Link>
                ) : (
                  <span className="crumb-section">{item.label}</span>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
