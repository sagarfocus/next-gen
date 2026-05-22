import { useState } from 'react';
import IndustriesHero from './IndustriesHero';
import IndustriesOverview from './IndustriesOverview';
import IndustryDeepDive from './IndustryDeepDive';
import AllIndustries from './AllIndustries';
import IndustriesFAQ from './IndustriesFAQ';
import BookingModal from '@/components/BookingModal';
import { SITE } from '@/content/site';

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.legalName,
  image: `${SITE.url}/og-image.jpg`,
  telephone: SITE.phone.intl,
  email: SITE.email,
  url: SITE.url,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
};

const Industries = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
      <IndustriesHero onBook={openBooking} />
      <IndustriesOverview />
      <AllIndustries />
      <IndustryDeepDive />
      <IndustriesFAQ onBook={openBooking} />

      <BookingModal open={bookingOpen} onClose={closeBooking} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
        }}
      />
    </>
  );
};

export default Industries;
