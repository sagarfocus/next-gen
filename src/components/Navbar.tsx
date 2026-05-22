import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoSrc from '../assets/the-nextgen-logo.png';
import { SITE } from '../content/site';
import { NAV_PRIMARY, NAV_RESOURCES } from '../content/navigation';
import { ChevronDownIcon } from './icons';

const Navbar = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll while mobile menu is open + close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  return (
    <>
    <header className={`nav-wrap${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container-shell">
        <nav
          className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-8 h-16 sm:h-[78px]"
          aria-label="Primary"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            aria-label={`${SITE.name} - Home`}
          >
            <img
              src={logoSrc}
              alt={SITE.name}
              className="h-14 sm:h-[88px] w-auto block select-none"
              draggable={false}
            />
          </Link>

          {/* Center menu (hidden below 1024px) */}
          <div className="hidden lg:flex justify-center gap-1.5" role="menubar">
            {NAV_PRIMARY.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
                role="menuitem"
              >
                {link.label}
              </Link>
            ))}

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
                <ChevronDownIcon strokeWidth={3} />
              </button>

              {resourcesOpen && (
                <div className="nav-dropdown-panel" role="menu">
                  {NAV_RESOURCES.map((item) => (
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
              <ChevronDownIcon size={11} className="text-muted" />
            </button>

            <button type="button" className="nav-icon-btn hidden sm:grid" aria-label="Account">
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

            {/* Hamburger - shown below lg */}
            <button
              type="button"
              className="nav-icon-btn lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

    </header>

      {/* Mobile menu drawer - rendered as a SIBLING of <header> (not inside).
          The header has a backdrop-filter which would otherwise scope our
          `position: fixed` drawer to the header's bounding box, hiding the
          menu items entirely. */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 z-40 overflow-y-auto pt-[72px] sm:pt-[96px]"
          style={{
            background:
              'linear-gradient(180deg, #F1F2F4 0%, #FAFAF8 100%)',
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
        >
          {/* Hairline divider that sits exactly under the navbar so the bar reads as separate */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[72px] sm:top-[96px] h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(179,139,109,0.45), transparent)',
            }}
          />
          <div className="container-shell py-6 flex flex-col gap-7 relative">
            <ul className="flex flex-col list-none m-0 p-0">
              {NAV_PRIMARY.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center justify-between py-4 text-heading text-[18px] font-bold tracking-[-0.015em] border-b border-line-faint hover:text-cta transition-colors"
                  >
                    {link.label}
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-muted mb-2">
                Resources
              </div>
              <ul className="flex flex-col list-none m-0 p-0">
                {NAV_RESOURCES.map((r) => (
                  <li key={r.to}>
                    <Link
                      to={r.to}
                      className="flex flex-col gap-0.5 py-3 border-b border-line-faint hover:bg-bg-soft transition-colors"
                    >
                      <span className="text-heading text-[15px] font-semibold tracking-[-0.01em]">
                        {r.label}
                      </span>
                      <span className="text-muted text-[12.5px]">{r.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
