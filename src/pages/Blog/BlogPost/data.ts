import { useEffect } from 'react';
import imgCompliance from '../../../assets/patient-identities.png';
import imgPaid from '../../../assets/paid-media.png';
import imgReputation from '../../../assets/recall-plus.png';
import imgSeo from '../../../assets/local-search.png';
import imgAutomation from '../../../assets/medical-automation.png';
import imgMedspa from '../../../assets/medspa.png';
import imgUrgent from '../../../assets/urgent-care.png';
import imgAnalytics from '../../../assets/analytics-and-report.png';
import imgFsed from '../../../assets/freestanding-emergency.png';
import type { BlogPostData } from '@/content/blog/posts';

export const COLORS = {
  navy: '#1A2438',
  body: '#4A5568',
  muted: '#718096',
  mint: '#EBF4DD',
};

export const FEATURE_IMAGES: Record<string, string> = {
  compliance: imgCompliance,
  paid: imgPaid,
  reputation: imgReputation,
  seo: imgSeo,
  automation: imgAutomation,
  medspa: imgMedspa,
  urgent: imgUrgent,
  analytics: imgAnalytics,
  fsed: imgFsed,
};

/* Tone palette mirrors bpx-theme-* CSS variables, but inlined so the
   hero pill, brief card accent, and avatar can read them directly. */
export type ThemeTone = 'periwinkle' | 'sage' | 'tan' | 'rose' | 'ink';
export const TONE_COLORS: Record<ThemeTone, { hex: string; soft: string }> = {
  periwinkle: { hex: '#576DB5', soft: 'rgba(87, 109, 181, 0.12)' },
  sage: { hex: '#4F7A4F', soft: 'rgba(143, 188, 143, 0.18)' },
  tan: { hex: '#B38B6D', soft: 'rgba(179, 139, 109, 0.16)' },
  rose: { hex: '#C13E4A', soft: 'rgba(225, 80, 92, 0.14)' },
  ink: { hex: '#2D3748', soft: 'rgba(45, 55, 72, 0.10)' },
};
export const CATEGORY_TONE: Record<string, ThemeTone> = {
  compliance: 'periwinkle',
  paid: 'tan',
  reputation: 'tan',
  seo: 'sage',
  automation: 'periwinkle',
  medspa: 'sage',
  urgent: 'rose',
  analytics: 'sage',
  fsed: 'rose',
};
export const toneForPost = (post: BlogPostData) => TONE_COLORS[CATEGORY_TONE[post.cat] ?? 'ink'];

export const ORIGIN =
  typeof window !== 'undefined' ? window.location.origin : 'https://thenextgenhealth.com';

export const initialsOf = (name: string): string =>
  name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

export const buildBlogPostSchema = (post: BlogPostData) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.metaDescription,
  url: `${ORIGIN}/blog/${post.slug}`,
  datePublished: post.date,
  dateModified: post.date,
  articleSection: post.catLabel,
  author: {
    '@type': 'Person',
    name: post.author,
    jobTitle: post.authorRole,
  },
  publisher: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: ORIGIN,
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${ORIGIN}/blog/${post.slug}` },
  inLanguage: 'en-US',
});

export const buildBreadcrumbSchema = (post: BlogPostData) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${ORIGIN}/blog` },
    { '@type': 'ListItem', position: 3, name: post.title, item: `${ORIGIN}/blog/${post.slug}` },
  ],
});

export const useDocumentMeta = (post: BlogPostData | undefined) => {
  useEffect(() => {
    if (!post) return;
    const prevTitle = document.title;
    document.title = `${post.title} | TheNextGen Resources`;

    const ensure = (name: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      return el;
    };

    const desc = ensure('description');
    const prevDesc = desc.getAttribute('content');
    desc.setAttribute('content', post.metaDescription);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const prevCanon = canonical.getAttribute('href');
    canonical.setAttribute('href', `${window.location.origin}/blog/${post.slug}`);

    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) desc.setAttribute('content', prevDesc);
      if (prevCanon !== null) canonical!.setAttribute('href', prevCanon);
    };
  }, [post]);
};
