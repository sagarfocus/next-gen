import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_DATA_URL } from '../assets/logo';

interface ResourceLink {
  to: string;
  label: string;
  desc: string;
}

const RESOURCES: ResourceLink[] = [
  { to: '/blog', label: 'Blog', desc: "Practitioner's brief, weekly tactics" },
  { to: '/case-studies', label: 'Case Studies', desc: 'Real client growth stories' },
  { to: '/healthcare-news', label: 'Healthcare News', desc: 'HIPAA & industry updates' },
  { to: '/automation', label: 'Automation', desc: 'AI workflows & integrations' },
  { to: '/pricing', label: 'Pricing', desc: 'Transparent engagement plans' },
];

const Navbar = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!resourcesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(e.target as Node)
      ) {
        setResourcesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setResourcesOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [resourcesOpen]);

  return (
    <header className="nav-wrap">
      <div className="container-shell">
        <nav
          className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-8 h-16 sm:h-[78px]"
          aria-label="Primary"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center h-10"
            aria-label="TheNextGen Healthcare Marketing — Home"
          >
            <img
              src={LOGO_DATA_URL}
              alt="TheNextGen Healthcare Marketing"
              className="h-[30px] sm:h-[38px] w-auto block"
            />
          </Link>

          {/* Center menu (hidden below 1024px) */}
          <div className="hidden lg:flex justify-center gap-1.5" role="menubar">
            <Link to="/services" className="nav-link" role="menuitem">
              Services
            </Link>
            <Link to="/industries" className="nav-link" role="menuitem">
              Industries
            </Link>
            <Link to="/about" className="nav-link" role="menuitem">
              About
            </Link>
            <Link to="/contact" className="nav-link" role="menuitem">
              Contact Us
            </Link>

            {/* Resources dropdown */}
            <div ref={resourcesRef} className="nav-dropdown">
              <button
                type="button"
                className={`nav-link${resourcesOpen ? ' is-open' : ''}`}
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
                onClick={() => setResourcesOpen((o) => !o)}
              >
                Resources
                <svg
                  className={`w-3 h-3 text-muted nav-chev${resourcesOpen ? ' is-open' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {resourcesOpen && (
                <div className="nav-dropdown-panel" role="menu">
                  {RESOURCES.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="nav-dropdown-item"
                      role="menuitem"
                      onClick={() => setResourcesOpen(false)}
                    >
                      <span className="nav-dropdown-label">{item.label}</span>
                      <span className="nav-dropdown-desc">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right cluster: language + account */}
          <div className="flex items-center gap-2 justify-self-end">
            <button
              type="button"
              className="nav-pill hidden sm:inline-flex"
              aria-label="Change language"
            >
              <svg
                className="text-line"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              EN
              <svg
                className="text-muted"
                width={11}
                height={11}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <button type="button" className="nav-icon-btn" aria-label="Account">
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
