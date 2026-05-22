import { ROUTES } from '../lib/routes';

/**
 * Navigation link data for Navbar and Footer.
 *
 * All `to` paths come from `ROUTES` — links cannot drift from the actual
 * router definition in `App.tsx`. Renaming a route in `routes.ts`
 * automatically propagates here.
 */

export interface NavLink {
  to: string;
  label: string;
}

export interface ResourceLink extends NavLink {
  desc: string;
}

/** Top-level navigation shown in the desktop Navbar center menu and the mobile drawer. */
export const NAV_PRIMARY: readonly NavLink[] = [
  { to: ROUTES.services.index, label: 'Services' },
  { to: ROUTES.industries.index, label: 'Industries' },
  { to: ROUTES.about.index, label: 'About' },
  { to: ROUTES.contact, label: 'Contact Us' },
];

/** "Resources" dropdown — long-form items with descriptions. */
export const NAV_RESOURCES: readonly ResourceLink[] = [
  {
    to: ROUTES.blog.index,
    label: 'Blog',
    desc: "Practitioner's brief, weekly tactics",
  },
  {
    to: ROUTES.caseStudies.index,
    label: 'Case Studies',
    desc: 'Real client growth stories',
  },
  {
    to: ROUTES.healthcareNews.index,
    label: 'Healthcare News',
    desc: 'HIPAA & industry updates',
  },
  {
    to: ROUTES.automation.index,
    label: 'Automation',
    desc: 'AI workflows & integrations',
  },
  {
    to: ROUTES.pricing,
    label: 'Pricing',
    desc: 'Transparent engagement plans',
  },
];

/** Footer "Services" column. */
export const FOOTER_SERVICES: readonly NavLink[] = [
  { to: ROUTES.services.seo, label: 'SEO Services' },
  { to: ROUTES.services.googleAds, label: 'Google Ads' },
  { to: ROUTES.services.socialMediaMarketing, label: 'Social Media' },
  { to: ROUTES.services.websiteDesignDev, label: 'Website Design' },
  { to: ROUTES.services.emailDripCampaigns, label: 'Email Campaigns' },
  { to: ROUTES.services.contentCopywriting, label: 'Content Marketing' },
  { to: ROUTES.services.googleBusinessProfile, label: 'Google Business Profile' },
  { to: ROUTES.services.analyticsReporting, label: 'Analytics' },
  { to: ROUTES.services.brandIdentityDesign, label: 'Branding' },
];

/** Footer "Company" column. */
export const FOOTER_COMPANY: readonly NavLink[] = [
  { to: ROUTES.about.index, label: 'About' },
  { to: ROUTES.faq, label: 'FAQ' },
  { to: ROUTES.freeGrowthAudit, label: 'Free Growth Audit' },
  { to: ROUTES.pricing, label: 'Pricing' },
  { to: ROUTES.blog.index, label: 'Blog' },
  { to: ROUTES.industries.index, label: 'Industries' },
  { to: ROUTES.team, label: 'Team' },
];

/** Footer bottom row — legal / accessibility / sitemap links. */
export const FOOTER_LEGAL: readonly NavLink[] = [
  { to: ROUTES.privacy, label: 'Privacy' },
  { to: ROUTES.terms, label: 'Terms' },
  { to: ROUTES.sitemap, label: 'Sitemap' },
  { to: ROUTES.accessibility, label: 'Accessibility' },
];
