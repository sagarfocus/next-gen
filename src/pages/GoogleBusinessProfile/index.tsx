import '../../styles/googlebusinessprofile.css';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Optimization from './Optimization';
import HowMapRanksWork from './HowMapRanksWork';
import DataShowcase from './DataShowcase';
import ProfileAnatomy from './ProfileAnatomy';
import Process from './Process';
import CommonMistakes from './CommonMistakes';
import Glossary from './Glossary';
import Comparison from './Comparison';
import LearningHub from './LearningHub';
import SubServices from './SubServices';
import FAQ, { GB_FAQ_ITEMS } from './FAQ';
import CTA from './CTA';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Business Profile Management for Healthcare',
  serviceType: 'Local SEO · Google Business Profile',
  category: ['Profile optimization', 'Categories & services', 'Photos & visual', 'Reviews & reputation', 'Posts & Q&A', 'Insights & tracking'],
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgen.example.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'Audience', audienceType: 'Healthcare practices, clinics, hospital networks, multi-location MSOs' },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: GB_FAQ_ITEMS.map((it) => ({
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
    { '@type': 'ListItem', position: 3, name: 'Google Business Profile', item: '/services/google-business-profile' },
  ],
};

const GoogleBusinessProfile = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Optimization />
      <HowMapRanksWork />
      <DataShowcase />
      <ProfileAnatomy />
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

export default GoogleBusinessProfile;
