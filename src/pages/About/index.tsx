import AboutHero from './AboutHero';
import ServicesSpectrum from './ServicesSpectrum';
import Genesis from './Genesis';
import Mission from './Mission';
import Methodology from './Methodology';
import Infrastructure from './Infrastructure';
import Team from './Team';
import AboutFAQ from './AboutFAQ';

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TheNextGen Healthcare Marketing',
  url: 'https://thenextgenhealth.com',
  logo: 'https://thenextgenhealth.com/logo.png',
  founder: {
    '@type': 'Person',
    name: 'Sarah Chen',
    jobTitle: 'Founder & CEO',
  },
  foundingDate: '2019',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3001 Skyway Circle N',
    addressLocality: 'Irving',
    addressRegion: 'TX',
    postalCode: '75038',
    addressCountry: 'US',
  },
  telephone: '+1-972-848-1153',
  email: 'hello@thenextgenhealth.com',
  sameAs: [
    'https://instagram.com/thenextgenhealth',
    'https://facebook.com/thenextgenhealth',
    'https://linkedin.com/company/thenextgenhealth',
  ],
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
