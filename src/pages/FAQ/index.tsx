import FAQHead from './FAQHead';
import FAQList from './FAQList';
import WhyUs from './WhyUs';
import Seo from '@/components/Seo';
import { buildBreadcrumbList, reactNodeToText } from '@/lib/schema';
import { CATEGORIES } from '@/content/faq/categories';

// FAQPage schema derived from the same CATEGORIES data the page renders.
// Previously this was hardcoded to 3 sample questions while the page
// displayed all ~17 — Google ignores schema that doesn't match visible
// content, so the derived shape ensures every question is snippet-eligible.
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: reactNodeToText(item.a).trim(),
      },
    }))
  ),
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'FAQ' },
]);

const FAQ = () => {
  return (
    <>
      <Seo
        title="Healthcare Marketing FAQ — HIPAA, Pricing, Onboarding & Results"
        description="Real questions from clinic owners — HIPAA compliance, pricing, onboarding timelines, EHR integration, reporting cadence — answered by the TheNextGen team."
        path="/faq"
        schema={[FAQ_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <FAQHead />
      <FAQList />
      <WhyUs />
    </>
  );
};

export default FAQ;
