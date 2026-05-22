export interface RecoveryLink {
  to: string;
  label: string;
  hint: string;
}

export const POPULAR_DESTINATIONS: RecoveryLink[] = [
  { to: '/', label: 'Home', hint: 'Start from the top of the site.' },
  { to: '/services', label: 'All services', hint: 'Every growth lever, one page.' },
  { to: '/case-studies', label: 'Case studies', hint: 'Real engagements, verified numbers.' },
  { to: '/free-growth-audit', label: 'Free growth audit', hint: '30 minutes, no slide deck.' },
];

export const POPULAR_SERVICES: RecoveryLink[] = [
  { to: '/services/seo', label: 'SEO Services', hint: 'Technical, on-page, local, AEO - one team.' },
  { to: '/services/google-ads', label: 'Google Ads', hint: 'Search · PMax · YouTube · LSA - one team.' },
  { to: '/services/website-design-dev', label: 'Website design', hint: 'Fast, on-brand, HIPAA-aware.' },
  { to: '/medical-automation', label: 'Medical automation', hint: 'Reclaim front-desk hours.' },
];

export const POPULAR_READS: RecoveryLink[] = [
  { to: '/blog', label: 'The blog', hint: 'Field-tested tactics, weekly.' },
  { to: '/healthcare-news', label: 'Healthcare news', hint: 'Curated weekly editorial brief.' },
  { to: '/faq', label: 'FAQ', hint: 'Answers to the questions we get most.' },
  { to: '/contact', label: 'Talk to us', hint: 'A real reply within a business day.' },
];
