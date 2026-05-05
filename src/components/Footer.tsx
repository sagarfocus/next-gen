import { Link } from 'react-router-dom';
import type { FormEvent } from 'react';
import { LOGO_DATA_URL } from '../assets/logo';

const Footer = () => {
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter handler hooked up later.
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
              aria-label="TheNextGen Healthcare Marketing — Home"
            >
              <img
                src={LOGO_DATA_URL}
                alt="TheNextGen Healthcare Marketing"
                className="h-[38px] w-auto block"
              />
            </Link>
            <p className="text-[14px] leading-[1.65] text-body m-0 max-w-[38ch]">
              Full-service healthcare marketing agency. SEO, Google Ads, social
              media, website design, and HIPAA-compliant automation for clinics.
            </p>
            <div className="flex gap-2.5 mt-1" aria-label="Social media">
              <a
                href="https://instagram.com/thenextgenhealth"
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
                href="https://facebook.com/thenextgenhealth"
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
                href="https://linkedin.com/company/thenextgenhealth"
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
              <li><Link to="/services/seo-local-search" className="ft-list-link">SEO &amp; Local Search</Link></li>
              <li><Link to="/services/google-ads" className="ft-list-link">Google Ads</Link></li>
              <li><Link to="/services/social-media-marketing" className="ft-list-link">Social Media</Link></li>
              <li><Link to="/services/website-design-dev" className="ft-list-link">Website Design</Link></li>
              <li><Link to="/services/email-drip-campaigns" className="ft-list-link">Email Campaigns</Link></li>
              <li><Link to="/services/content-copywriting" className="ft-list-link">Content Marketing</Link></li>
              <li><Link to="/services/google-business-profile" className="ft-list-link">Google Business Profile</Link></li>
              <li><Link to="/services/analytics-reporting" className="ft-list-link">Analytics</Link></li>
              <li><Link to="/services/brand-identity-design" className="ft-list-link">Branding</Link></li>
            </ul>
          </div>

          {/* Company column */}
          <div className="flex flex-col gap-[18px]">
            <h4 className="ft-h">Company</h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-[11px]">
              <li><Link to="/about" className="ft-list-link">About</Link></li>
              <li><Link to="/faq" className="ft-list-link">FAQ</Link></li>
              <li><Link to="/#seo-guide" className="ft-list-link">SEO Guide</Link></li>
              <li><Link to="/pricing" className="ft-list-link">Pricing</Link></li>
              <li><Link to="/blog" className="ft-list-link">Blog</Link></li>
              <li><Link to="/industries" className="ft-list-link">Industries</Link></li>
              <li><Link to="/team" className="ft-list-link">Team</Link></li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="flex flex-col gap-[18px]">
            <h4 className="ft-h">Contact</h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-[11px]">
              <li>
                <a
                  href="https://www.google.com/maps/place/3001+Skyway+Cir+N,+Irving,+TX+75038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-list-link"
                >
                  3001 Skyway Circle&nbsp;N
                  <br />
                  Irving, TX&nbsp;75038
                </a>
              </li>
              <li>
                <a href="mailto:hello@thenextgenhealth.com" className="ft-list-link">
                  hello@thenextgenhealth.com
                </a>
              </li>
              <li>
                <a href="tel:+19728481153" className="ft-list-link">
                  +1 (972) 848&ndash;1153
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
                  <svg
                    width={11}
                    height={11}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="ft-bottom-row">
          <span>&copy; 2026 TheNextGen Healthcare Marketing. All rights reserved.</span>
          <div className="flex gap-[22px] flex-wrap">
            <Link to="/#privacy" className="text-muted transition-colors hover:text-heading">
              Privacy
            </Link>
            <Link to="/#terms" className="text-muted transition-colors hover:text-heading">
              Terms
            </Link>
            <Link to="/#sitemap" className="text-muted transition-colors hover:text-heading">
              Sitemap
            </Link>
            <Link to="/#accessibility" className="text-muted transition-colors hover:text-heading">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
