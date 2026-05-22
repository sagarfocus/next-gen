import type { NarrativeBlock } from '@/components/DetailNarrative';
import type { IndustryDetailEntry } from '@/content/industries/details.data';

export const buildIndustryNarrative = (
  entry: IndustryDetailEntry
): { about: NarrativeBlock; approach: NarrativeBlock } => ({
  about: {
    eyebrow: `About ${entry.label}`,
    title: `${entry.label} marketing, built around the patients your practice was made for.`,
    body:
      entry.longBody[0] ||
      entry.description ||
      `A focused growth playbook for ${entry.label.toLowerCase()} practices, tuned to the patient psychology and regulatory edges of the vertical.`,
    ctaText: 'Learn more',
    ctaTo: '/industries',
    image: entry.image,
    imageAlt: '',
  },
  approach: {
    eyebrow: 'Our approach',
    title: `Our unique approach is what sets ${entry.label.toLowerCase()} growth apart.`,
    body:
      entry.longBody[1] ||
      entry.longBody[0] ||
      `A documented, repeatable system that ties every campaign back to revenue per chair-hour — not impressions, not reach.`,
    ctaText: 'About page',
    ctaTo: '/about',
    image: entry.image,
    imageAlt: '',
  },
});

export const serviceSchema = (entry: IndustryDetailEntry) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: `Healthcare marketing for ${entry.label}`,
  serviceType: `${entry.label} - ${entry.meta}`,
  description: entry.description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgenhealth.com',
  },
  areaServed: 'United States',
});

export const faqSchema = (entry: IndustryDetailEntry) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: entry.faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
