import { useState } from 'react';
import Hero from './Hero';
import CertStrip from './CertStrip';
import Results from './Results';
import AboutUs from './AboutUs';
import Advantages from './Advantages';
import Services from './Services';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import Industries from './Industries';
import ContactSection from './ContactSection';
import BookingModal from '@/components/BookingModal';
import Seo from '@/components/Seo';

// FAQ schema mirrors the questions rendered in the Home FAQ section. If
// you add/remove a question there, mirror it here so the JSON-LD payload
// matches the visible content (Google ignores schema that does not match).
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly will I see results from your healthcare marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients see tangible movement within 30 days - improved Google Business Profile visibility, faster page loads, and the first paid-media leads. Sustained organic growth from SEO typically compounds across months 3–6 as content, backlinks, and on-page work mature.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your campaigns and tools HIPAA-aware?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We follow HIPAA-aware practices across tracking, ad targeting, intake forms, and reporting - including server-side conversion tracking, compliant pixel use, and BAA-ready vendor selection where applicable. We are not a covered entity, so we work alongside your compliance officer to ensure end-to-end alignment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size practices do you typically work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From single-location clinics and medspas to multi-location healthcare networks. Our methodology scales: smaller practices benefit from the full Clinic Growth OS, while larger networks plug us into existing teams to amplify performance and reporting.',
      },
    },
    {
      '@type': 'Question',
      name: "What's included in your monthly engagement?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strategy, execution, and reporting across SEO, paid media (Google & Meta), social, content, automation, and weekly optimization - plus a dedicated growth lead and a real-time analytics dashboard. Every plan is tailored to your goals; nothing is bolted on.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a long-term contract to work with you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No long lock-ins. We recommend a minimum 90-day engagement so the system has time to compound, but month-to-month options are available after the initial setup phase. Cancel, downgrade, or scale anytime - no hidden fees.',
      },
    },
  ],
};

const Home = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
      <Seo
        title="Healthcare Marketing for Clinics, MedSpas & Urgent Care in Texas"
        description="Healthcare marketing built for clinics, medspas, urgent care & ERs. HIPAA-aware SEO, paid ads, websites, automation. 200+ Texas practices. Free 5-day growth audit."
        path="/"
        schema={FAQ_SCHEMA}
      />

      <Hero>
        <CertStrip />
      </Hero>
      <AboutUs />
      <Advantages />
      <Services />
      <Industries />
      <Results />
      <Testimonials />
      <FAQ onBook={openBooking} />
      <ContactSection />

      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </>
  );
};

export default Home;
