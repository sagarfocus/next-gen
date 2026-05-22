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

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Content Marketing & Copywriting',
  serviceType: 'Content Marketing',
  category: ['Pillar pages', 'Supporting articles', 'Location pages', 'AEO answer pages', 'Patient stories', 'Newsletters'],
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgen.example.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'Audience', audienceType: 'Healthcare practices, clinics, hospital networks' },
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

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
    { '@type': 'ListItem', position: 3, name: 'Content & Copywriting', item: '/services/content-copywriting' },
  ],
};

const ContentMarketing = () => {
  return (
    <>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
    </>
  );
};

export default ContentMarketing;
