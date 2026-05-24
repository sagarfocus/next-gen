import '../../styles/contentmarketing.css';
import Hero from './Hero';
import TrustBar from './TrustBar';
import ContentTypes from './ContentTypes';
import HowContentCompounds from './HowContentCompounds';
import DataShowcase from './DataShowcase';
import ArticleAnatomy from './ArticleAnatomy';
import Process from './Process';
import CommonMistakes from './CommonMistakes';
import Glossary from './Glossary';
import Comparison from './Comparison';
import LearningHub from './LearningHub';
import SubServices from './SubServices';
import FAQ, { CM_FAQ_ITEMS } from './FAQ';
import CTA from './CTA';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Content Marketing & Copywriting',
  serviceType: 'Content Marketing',
  category: ['Pillar pages', 'Supporting articles', 'Location pages', 'AEO answer pages', 'Patient stories', 'Newsletters'],
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practices, clinics, hospital networks',
  },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CM_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  })),
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Content & Copywriting' },
]);

const ContentMarketing = () => {
  return (
    <>
      <Seo
        title="Healthcare Content Marketing — Clinician-Reviewed, E-E-A-T Ready"
        description="Pillar pages, articles, location pages, AEO answers, patient stories, and newsletters — written by healthcare specialists, reviewed by licensed clinicians."
        path="/services/content-copywriting"
        schema={[SERVICE_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <Hero />
      <TrustBar />
      <ContentTypes />
      <HowContentCompounds />
      <DataShowcase />
      <ArticleAnatomy />
      <Process />
      <CommonMistakes />
      <Glossary />
      <Comparison />
      <LearningHub />
      <SubServices />
      <FAQ />
      <CTA />
    </>
  );
};

export default ContentMarketing;
