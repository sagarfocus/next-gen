import type { NarrativeBlock } from '../../../components/DetailNarrative';
import {
  ENGAGEMENT_DETAILS,
  INDUSTRY_DETAILS,
  CAPABILITY_DETAILS,
  detailHref,
  type DetailEntry,
  type DetailKind,
} from '../details.data';

export const KIND_BODY_INTRO: Record<DetailKind, (entry: DetailEntry) => string> = {
  engagement: () => 'Three paragraphs that map the challenge, the rebuild, and the outcome — written by the strategist who shipped the work.',
  industry: () => 'The patient psychology, the regulatory edges, and the funnel mechanics that make this vertical its own discipline.',
  capability: () => 'How this discipline runs inside the Focus growth operating system — and why it compounds when the other five run alongside it.',
};

export const KIND_FAQ_INTRO: Record<DetailKind, string> = {
  engagement: 'The same questions every leadership team raises about an engagement like this — answered up front so the discovery call moves faster.',
  industry: 'Recurring questions from practice owners and growth leads in this vertical — answered before the first conversation.',
  capability: 'Common questions about how this discipline runs, how it is reported, and how it integrates with the rest of the stack.',
};

export const KIND_RELATED_INTRO: Record<DetailKind, string> = {
  engagement: 'Three sibling engagements from the same quarter — different verticals, same operating cadence.',
  industry: 'Other healthcare verticals running the same growth operating system, tuned to their patient psychology.',
  capability: 'The other disciplines this capability shares a calendar and growth lead with.',
};

export const PAREN_TYPE_LABEL: Record<DetailKind, string> = {
  engagement: 'Engagement',
  industry: 'Industry',
  capability: 'Capability',
};

export const KIND_GROUP: Record<DetailKind, DetailEntry[]> = {
  engagement: ENGAGEMENT_DETAILS,
  industry: INDUSTRY_DETAILS,
  capability: CAPABILITY_DETAILS,
};

export const KIND_LABEL_PLURAL: Record<DetailKind, string> = {
  engagement: 'Engagements',
  industry: 'Industries',
  capability: 'Capabilities',
};

const ABOUT_HEADLINE: Record<DetailKind, (entry: DetailEntry) => string> = {
  engagement: (e) => `${e.title}, a focused engagement built around healthcare growth.`,
  industry: (e) => `${e.title} marketing, built around the verticals patients actually search for.`,
  capability: (e) => `${e.title.replace(/\.$/, '')} — a discipline inside the Focus growth operating system.`,
};

const APPROACH_HEADLINE: Record<DetailKind, (entry: DetailEntry) => string> = {
  engagement: () => 'Our unique approach is what sets the outcome apart.',
  industry: (e) => `How we ship growth for ${e.title.toLowerCase()} — and what sets it apart.`,
  capability: () => 'Our unique approach is what sets this discipline apart.',
};

export const buildNarrativeBlocks = (entry: DetailEntry): { about: NarrativeBlock; approach: NarrativeBlock } => {
  const aboutBody =
    entry.longBody[0] ||
    entry.description ||
    'A healthcare growth engagement engineered around revenue-accountable outcomes, not vanity metrics.';
  const approachBody =
    entry.longBody[1] ||
    entry.longBody[0] ||
    entry.description ||
    'A documented, repeatable playbook that puts patients first and ties every dollar of spend back to chair-time and revenue.';
  return {
    about: {
      eyebrow: `About this ${entry.kind}`,
      title: ABOUT_HEADLINE[entry.kind](entry),
      body: aboutBody,
      ctaText: 'Learn more',
      ctaTo: '/our-work',
      image: entry.img,
      imageAlt: '',
    },
    approach: {
      eyebrow: 'Our approach',
      title: APPROACH_HEADLINE[entry.kind](entry),
      body: approachBody,
      ctaText: 'About page',
      ctaTo: '/about',
      image: entry.img,
      imageAlt: '',
    },
  };
};

export const buildSchema = (entry: DetailEntry) => {
  if (entry.kind === 'engagement') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: entry.title,
      description: entry.description,
      about: entry.eyebrow,
      mainEntityOfPage: `https://thenextgenhealth.com${detailHref(entry.kind, entry.slug)}`,
    };
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: entry.title,
    serviceType: entry.kind === 'industry' ? 'Healthcare marketing services for ' + entry.title : entry.title,
    description: entry.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'TheNextGen Healthcare Marketing',
      url: 'https://thenextgenhealth.com',
    },
    areaServed: 'United States',
  };
};

export const faqSchema = (entry: DetailEntry) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: entry.faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
