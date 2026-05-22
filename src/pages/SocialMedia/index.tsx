import '../../styles/socialmedia.css';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Platforms from './Platforms';
import HowSocialWorks from './HowSocialWorks';
import DataShowcase from './DataShowcase';
import ContentPillars from './ContentPillars';
import Process from './Process';
import CommonMistakes from './CommonMistakes';
import Glossary from './Glossary';
import Comparison from './Comparison';
import LearningHub from './LearningHub';
import SubServices from './SubServices';
import FAQ, { SM_FAQ_ITEMS } from './FAQ';
import CTA from './CTA';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Social Media Marketing',
  serviceType: 'Social Media Marketing',
  category: ['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'YouTube Shorts', 'Pinterest'],
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
  mainEntity: SM_FAQ_ITEMS.map((it) => ({
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
    { '@type': 'ListItem', position: 3, name: 'Social Media Marketing', item: '/services/social-media-marketing' },
  ],
};

const SocialMedia = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Platforms />
      <HowSocialWorks />
      <DataShowcase />
      <ContentPillars />
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

export default SocialMedia;
