export interface Tier {
  featured?: boolean;
  badge?: string;
  name: string;
  amount: string;
  period?: string;
  tagline: string;
  bestFor: string;
  ctaLabel: string;
  ctaHref: string;
  includesLabel: string;
  includes: string[];
  notLabel?: string;
  notIncluded?: string[];
  notesLabel?: string;
  notes?: string[];
}

export const TIERS: Tier[] = [
  {
    name: 'Starter Care',
    amount: '$5,000',
    period: '/ month',
    tagline: 'Perfect for elective procedures and high-research patient journeys.',
    bestFor: 'Single-location clinics ready to build their digital foundation.',
    ctaLabel: 'Get Started',
    ctaHref: '/contact',
    includesLabel: 'Package Includes',
    includes: [
      'Advanced SEO (Technical · On-Page · Local · AEO)',
      'Google My Business Management',
      'Google Ads (Search + PMax) & Meta Campaigns',
      'AI Chatbot & Call Tracking Setup',
      'Monthly Strategy & Performance Reports',
      'Content Creation & Social Media',
    ],
    notLabel: 'Not Included',
    notIncluded: [
      'Advanced AI call handling',
      'Multi-location campaigns',
      'Custom software development',
    ],
  },
  {
    featured: true,
    badge: 'Most Popular',
    name: 'Growth Pro',
    amount: '$10,000',
    period: '/ month',
    tagline: 'High-acuity, rapid-response systems for immediate-need facilities.',
    bestFor: 'Clinics ready to scale acquisition fast.',
    ctaLabel: 'Get Started',
    ctaHref: '/contact',
    includesLabel: 'Everything in Starter, plus',
    includes: [
      'Full-channel Google Ads (Search · PMax · YouTube · LSA)',
      'Advanced AI Call Handling & Triage',
      'Real-Time Insurance Verification Bots',
      'Priority Support & Rapid SLA Response',
      'Multi-Location Campaign Orchestration',
      '24/7 Performance Monitoring',
      'Dedicated Account Manager',
    ],
    notLabel: 'Not Included',
    notIncluded: ['Custom software development', 'Multi-state network management'],
  },
  {
    name: 'Scale Elite',
    amount: 'Custom',
    tagline: 'Comprehensive growth engine for large healthcare networks.',
    bestFor: 'Multi-location teams needing advanced automation.',
    ctaLabel: 'Get Started',
    ctaHref: '/contact',
    includesLabel: 'Everything in Pro, plus',
    includes: [
      'Custom Software Development',
      'HIPAA-Compliant API Integrations',
      'Multi-State Network Management',
      'Advanced Analytics & BI Dashboards',
      'Custom Automation Workflows',
      'White-Glove Onboarding',
      'Dedicated Development Team',
      'Enterprise SLA & Support',
    ],
    notesLabel: 'Pricing Notes',
    notes: ['Custom-scoped per network size', 'Dedicated implementation lead'],
  },
];
