import { Link } from 'react-router-dom';
import logoSrc from '../assets/the-nextgen-logo.png';
import { SITE } from '../content/site';
import {
  FOOTER_COMPANY,
  FOOTER_LEGAL,
  FOOTER_SERVICES,
} from '../content/navigation';
import { ArrowIcon } from './icons';

const Footer = () => {
  const handleNewsletterSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get('email') ?? '').trim();
    if (!email) return;
    const subject = 'Subscribe - TheNextGen weekly brief';
    const body = `Please add this address to the weekly brief: ${email}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    e.currentTarget.reset();
  };

  return (
    <footer className="footer-section" id="footer" role="contentinfo">
      <div className="container-shell">
        <div className="ft-grid">
          {/* Brand block */}
          <div className="ft-brand-block flex flex-col gap-[22px] max-w-[360px]">
            <Link
              to="/"
              className="inline-block"
              aria-label={`${SITE.name} - Home`}
            >
              <img
                src={logoSrc}
                alt={SITE.name}
                className="h-[80px] w-auto block select-none"
                draggable={false}
              />
            </Link>
            <p className="text-[14px] leading-[1.65] text-body m-0 max-w-[38ch]">
              {SITE.description}
            </p>
            <div className="flex gap-2.5 mt-1" aria-label="Social media">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="ft-social-link"
              >
                <svg
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
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="ft-social-link"
              >
                <svg
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="ft-social-link"
              >
                <svg
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-[18px]">
            <h4 className="ft-h">Services</h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-[11px]">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="ft-list-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="flex flex-col gap-[18px]">
            <h4 className="ft-h">Company</h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-[11px]">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="ft-list-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="flex flex-col gap-[18px]">
            <h4 className="ft-h">Contact</h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-[11px]">
              <li>
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-list-link"
                >
                  {SITE.address.street}
                  <br />
                  {`${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="ft-list-link">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.tel}`} className="ft-list-link">
                  {SITE.phone.display}
                </a>
              </li>
            </ul>

            <div className="mt-2 pt-[22px] border-t border-line-faint">
              <p className="text-[14px] font-bold text-heading m-0 mb-1.5 tracking-[-0.01em]">
                Get weekly marketing tips
              </p>
              <p className="text-[12.5px] text-muted m-0 mb-3.5 leading-[1.5]">
                Healthcare growth insights, delivered to your inbox.
              </p>
              <form
                className="ft-form"
                onSubmit={handleNewsletterSubmit}
                aria-label="Newsletter signup"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  required
                />
                <button type="submit">
                  Subscribe
                  <ArrowIcon size={11} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="ft-bottom-row">
          <span>
            &copy; {SITE.copyrightYear} {SITE.legalName}. All rights reserved.
          </span>
          <div className="flex gap-[22px] flex-wrap">
            {FOOTER_LEGAL.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted transition-colors hover:text-heading"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
