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
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Business Profile Management for Healthcare',
  serviceType: 'Local SEO · Google Business Profile',
  category: [
    'Profile optimization',
    'Categories & services',
    'Photos & visual',
    'Reviews & reputation',
    'Posts & Q&A',
    'Insights & tracking',
  ],
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practices, clinics, hospital networks, multi-location MSOs',
  },
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

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Google Business Profile' },
]);

const GoogleBusinessProfile = () => {
  return (
    <>
      <Seo
        title="Google Business Profile Management for Multi-Location Healthcare"
        description="Win the Local Pack across every clinic location — GBP optimization, citations, reviews, posts, and photos. Multi-location console with HIPAA-safe review responses."
        path="/services/google-business-profile"
        schema={[SERVICE_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]}
      />

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
    </>
  );
};

export default GoogleBusinessProfile;
