import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

interface SitemapLink {
  to: string;
  label: string;
}

interface SitemapGroup {
  title: string;
  links: SitemapLink[];
}

const GROUPS: SitemapGroup[] = [
  {
    title: 'Primary navigation',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/team', label: 'Team' },
      { to: '/our-work', label: 'Our work' },
      { to: '/pricing', label: 'Pricing' },
      { to: '/contact', label: 'Contact' },
      { to: '/free-growth-audit', label: 'Free growth audit' },
      { to: '/faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Services',
    links: [
      { to: '/services', label: 'All services' },
      { to: '/services/seo', label: 'SEO Services' },
      { to: '/services/google-ads', label: 'Google Ads' },
      { to: '/services/google-business-profile', label: 'Google Business Profile' },
      { to: '/services/social-media-marketing', label: 'Social media marketing' },
      { to: '/services/website-design-dev', label: 'Website design & development' },
      { to: '/services/email-drip-campaigns', label: 'Email drip campaigns' },
      { to: '/services/content-copywriting', label: 'Content & copywriting' },
      { to: '/services/brand-identity-design', label: 'Brand identity & design' },
      { to: '/services/analytics-reporting', label: 'Analytics & reporting' },
    ],
  },
  {
    title: 'Specialty services',
    links: [
      { to: '/healthcare-content', label: 'Healthcare content' },
      { to: '/meta-ads', label: 'Meta Ads' },
      { to: '/hipaa-compliance', label: 'HIPAA compliance' },
      { to: '/reviews-reputation', label: 'Reviews & reputation' },
      { to: '/patient-experience', label: 'Patient experience' },
      { to: '/citation-building', label: 'Citation building' },
      { to: '/hyper-local-content', label: 'Hyper-local content' },
      { to: '/aeo-schema', label: 'AEO & schema' },
      { to: '/onsite-field-marketing', label: 'Onsite & field marketing' },
      { to: '/medical-automation', label: 'Medical automation' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { to: '/industries', label: 'All industries' },
      { to: '/industries/clinics', label: 'Clinics & multi-specialty' },
      { to: '/industries/medspas', label: 'MedSpas & aesthetics' },
      { to: '/industries/specialty-emergency', label: 'Specialty & emergency' },
    ],
  },
  {
    title: 'Methodology',
    links: [
      { to: '/growth-plan', label: 'Growth plan' },
      { to: '/methodology/phase-1', label: 'Phase 1 - Diagnose' },
      { to: '/methodology/phase-2', label: 'Phase 2 - Build' },
      { to: '/methodology/phase-3', label: 'Phase 3 - Scale' },
    ],
  },
  {
    title: 'Automation',
    links: [
      { to: '/automation', label: 'Automation overview' },
      { to: '/automation/more-info', label: 'Automation deep dive' },
      { to: '/automation/templates', label: 'Automation templates' },
    ],
  },
  {
    title: 'Infrastructure',
    links: [
      { to: '/infrastructure/growth-team', label: 'Growth team structure' },
      { to: '/infrastructure/compliance-protocol', label: 'Compliance protocol' },
      { to: '/infrastructure/service-level-agreements', label: 'Service level agreements' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { to: '/blog', label: 'Blog' },
      { to: '/case-studies', label: 'Case studies' },
      { to: '/healthcare-news', label: 'Healthcare news' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/privacy', label: 'Privacy policy' },
      { to: '/terms', label: 'Terms of use' },
      { to: '/accessibility', label: 'Accessibility statement' },
      { to: '/sitemap', label: 'Sitemap' },
    ],
  },
];

const SITEMAP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: `Sitemap · ${SITE.name}`,
  url: `${SITE.url}/sitemap`,
  description:
    'Full site index for TheNextGen Healthcare Marketing — services, industries, methodology, automation, infrastructure, and resources.',
  isPartOf: { '@id': `${SITE.url}#website` },
  about: { '@id': `${SITE.url}#organization` },
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Sitemap' },
]);

const Sitemap = () => {
  return (
    <main style={{ paddingBottom: 'clamp(72px, 9vw, 120px)' }}>
      <Seo
        title="Sitemap — Every Page on TheNextGen, in One Place"
        description="Full site index for TheNextGen Healthcare Marketing — services, industries, methodology, automation, infrastructure, and resources."
        path="/sitemap"
        schema={[SITEMAP_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <section
        aria-labelledby="sm-title"
        style={{ padding: 'clamp(56px, 7vw, 96px) 0 clamp(32px, 4vw, 48px)' }}
      >
        <div className="container-shell">
          <Breadcrumb items={[{ label: 'Sitemap' }]} section="Sitemap" />
          <div style={{ maxWidth: 720 }}>
            <span className="results-eyebrow">Sitemap</span>
            <h1
              id="sm-title"
              style={{
                fontSize: 'clamp(34px, 4.6vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                color: '#2D3748',
                fontWeight: 700,
                margin: '6px 0 14px',
              }}
            >
              Every page on TheNextGen, in one place.
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: '#4A5568',
                margin: 0,
                maxWidth: '64ch',
              }}
            >
              The full site index - services, industries, methodology, automation, infrastructure,
              and resources. Useful for navigation, share-able for stakeholders, and indexed for
              search engines.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Sitemap groups">
        <div className="container-shell">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'clamp(16px, 1.8vw, 24px)',
            }}
          >
            {GROUPS.map((group) => (
              <section
                key={group.title}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(45,55,72,0.08)',
                  borderRadius: 18,
                  padding: 'clamp(20px, 2.2vw, 28px)',
                }}
              >
                <h2
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#B38B6D',
                    margin: '0 0 16px',
                  }}
                >
                  {group.title}
                </h2>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 4 }}>
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        style={{
                          display: 'block',
                          padding: '8px 10px',
                          borderRadius: 8,
                          fontSize: 14,
                          fontWeight: 500,
                          color: '#2D3748',
                          transition: 'background .15s ease, color .15s ease',
                        }}
                        className="sitemap-link"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sitemap;
