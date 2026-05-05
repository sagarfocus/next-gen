import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  current: string;
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

const Breadcrumb = ({ current }: BreadcrumbProps) => {
  return (
    <nav className="crumb" aria-label="Breadcrumb">
      <ol className="crumb-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight />
        </li>
        <li>
          <span className="crumb-section">Resources</span>
        </li>
        <li aria-hidden="true">
          <ChevronRight />
        </li>
        <li>
          <span className="crumb-here" aria-current="page">
            {current}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
