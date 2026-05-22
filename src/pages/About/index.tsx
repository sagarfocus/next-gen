import AboutHero from './AboutHero';
import ServicesSpectrum from './ServicesSpectrum';
import Genesis from './Genesis';
import Mission from './Mission';
import Methodology from './Methodology';
import Infrastructure from './Infrastructure';
import Team from './Team';
import AboutFAQ from './AboutFAQ';
import { SITE } from '@/content/site';

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  founder: {
    '@type': 'Person',
    name: 'Sarah Chen',
    jobTitle: 'Founder & CEO',
  },
  foundingDate: '2019',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  telephone: SITE.phone.intl,
  email: SITE.email,
  sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
};

const About = () => {
  return (
    <>
      <AboutHero />
      <Genesis />
      <Mission />
      <ServicesSpectrum />
      <Methodology />
      <Infrastructure />
      <Team />
      <AboutFAQ />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANIZATION_SCHEMA),
        }}
      />
    </>
  );
};

export default About;
