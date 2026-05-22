import type { ReactElement } from 'react';
import type { NarrativeBlock } from '../../../components/DetailNarrative';
import healthcareImg1 from '../../../assets/healthcare-1.png';
import healthcareImg2 from '../../../assets/healthcare-2.png';
import strategyImg from '../../../assets/strategy-planning.png';
import { valueDetailHref, type ValueEntry } from '../../../content/about/values.data';

export const VALUE_IMAGES: Record<string, { about: string; approach: string }> = {
  'patient-first-marketing': { about: healthcareImg1, approach: healthcareImg2 },
  'revenue-accountable-results': { about: strategyImg, approach: healthcareImg1 },
  'compliance-without-compromise': { about: healthcareImg2, approach: strategyImg },
};

export const buildValueNarrative = (entry: ValueEntry): { about: NarrativeBlock; approach: NarrativeBlock } => {
  const imgs = VALUE_IMAGES[entry.slug] || { about: healthcareImg1, approach: healthcareImg2 };
  return {
    about: {
      eyebrow: `About this principle`,
      title: `${entry.title} — a built-in constraint, not a marketing line.`,
      body:
        entry.longBody[0] ||
        entry.lead ||
        'A foundational principle that shapes every campaign we ship from this studio.',
      ctaText: 'Learn more',
      ctaTo: '/about',
      image: imgs.about,
      imageAlt: '',
    },
    approach: {
      eyebrow: 'Our approach',
      title: 'Our unique approach is what sets this principle apart.',
      body:
        entry.longBody[1] ||
        entry.body ||
        'We treat this principle as a build-time constraint, audited internally on every campaign before it ships.',
      ctaText: 'About page',
      ctaTo: '/about',
      image: imgs.approach,
      imageAlt: '',
    },
  };
};

export const BODY_CARD_META: { title: string; tone: 'rose' | 'periwinkle' | 'tan'; icon: ReactElement }[] = [
  {
    title: 'The challenge',
    tone: 'rose',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      </svg>
    ),
  },
  {
    title: 'Our approach',
    tone: 'periwinkle',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'The outcome',
    tone: 'tan',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 L 14.6 9 L 22 9.5 L 16.5 14 L 18 21.5 L 12 17.5 L 6 21.5 L 7.5 14 L 2 9.5 L 9.4 9 Z" />
      </svg>
    ),
  },
];

export const faqSchema = (entry: ValueEntry) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: entry.faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const articleSchema = (entry: ValueEntry) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: entry.title,
  description: entry.lead,
  about: 'Healthcare marketing principles',
  mainEntityOfPage: `https://thenextgenhealth.com${valueDetailHref(entry.slug)}`,
});
