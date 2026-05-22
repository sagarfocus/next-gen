import { useEffect } from 'react';

import Hero from './Hero';
import Stack from './Stack';
import Compliance from './Compliance';
import Industries from './Industries';
import CarePlans from './CarePlans';
import Packages from './Packages';
import WhatWeDo from '../../components/service/WhatWeDo';
import HowItWorks from '../../components/service/HowItWorks';
import Results from '../../components/service/Results';
import ServiceCTA from '../../components/service/ServiceCTA';
import ServiceFAQ from '../../components/service/ServiceFAQ';
import ServiceScenario from '../../components/service/ServiceScenario';
import RelatedServices from '../../components/service/RelatedServices';
import CaseStudies from '../../components/service/CaseStudies';

import { DO_CARDS } from '../../content/website-design/do-cards';
import { STEPS } from '../../content/website-design/steps';
import { STATS } from '../../content/website-design/stats';
import { COMPARISON } from '../../content/website-design/comparison';
import { FAQS } from '../../content/website-design/faqs';
import { RELATED } from '../../content/website-design/related';
import { CASES } from '../../content/website-design/cases';
import { SERVICE_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA } from '../../content/website-design/schema';

const PAGE_TITLE = 'Healthcare Website Design & Development | TheNextGen';
const PAGE_DESC =
  'Custom healthcare websites that convert. HIPAA-aware, WCAG 2.2 AA, sub-2s LCP. Built for clinics, MedSpas, and specialty groups. Free design audit.';
const CANONICAL_PATH = '/services/website-design-dev';

const WebsiteDesign = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;

    const ensureMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
        document.head.appendChild(el);
      }
      return el;
    };

    const desc = ensureMeta('meta[name="description"]', { name: 'description' });
    const prevDesc = desc.getAttribute('content');
    desc.setAttribute('content', PAGE_DESC);

    const ogTitle = ensureMeta('meta[property="og:title"]', { property: 'og:title' });
    const prevOgTitle = ogTitle.getAttribute('content');
    ogTitle.setAttribute('content', PAGE_TITLE);

    const ogDesc = ensureMeta('meta[property="og:description"]', { property: 'og:description' });
    const prevOgDesc = ogDesc.getAttribute('content');
    ogDesc.setAttribute('content', PAGE_DESC);

    const ogType = ensureMeta('meta[property="og:type"]', { property: 'og:type' });
    const prevOgType = ogType.getAttribute('content');
    ogType.setAttribute('content', 'website');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    let createdCanonical = false;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
      createdCanonical = true;
    }
    const prevCanon = canonical.getAttribute('href');
    canonical.setAttribute('href', `${window.location.origin}${CANONICAL_PATH}`);

    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) desc.setAttribute('content', prevDesc);
      if (prevOgTitle !== null) ogTitle.setAttribute('content', prevOgTitle);
      if (prevOgDesc !== null) ogDesc.setAttribute('content', prevOgDesc);
      if (prevOgType !== null) ogType.setAttribute('content', prevOgType);
      if (createdCanonical) canonical!.remove();
      else if (prevCanon !== null) canonical!.setAttribute('href', prevCanon);
    };
  }, []);

  return (
    <>
      <Hero />
      <WhatWeDo cards={DO_CARDS} />
      <HowItWorks steps={STEPS} />
      <Results stats={STATS} />
      <ServiceScenario
        variant="comparison"
        eyebrow="What we leave you with"
        title="The five things that change between the old site and the new one."
        intro="Most healthcare sites fail on the same five vectors. Here is the gap we measure before launch and the band we ship in afterwards."
        comparison={COMPARISON}
      />
      <CaseStudies cases={CASES} />
      <Stack />
      <Compliance />
      <Industries />
      <CarePlans />
      <Packages />
      <ServiceFAQ
        items={FAQS}
        serviceName="Healthcare Website Design & Development"
        title="Build, performance, and ownership questions."
      />
      <RelatedServices items={RELATED} />
      <ServiceCTA
        variant="editorial"
        eyebrow="Build readiness audit"
        title="See exactly what your next site has to clear."
        description="A short call where we open your current site live, score it against the five vectors above, and hand you the gap list - even if you build it with someone else."
        primaryTo="/free-growth-audit"
        primaryLabel="Get the gap list"
        secondaryTo="/case-studies"
        secondaryLabel="See past builds"
        bullets={[
          'Core Web Vitals scorecard you can hand a developer tomorrow.',
          'WCAG 2.2 AA pre-flight checklist tailored to your service pages.',
          'A clear go / fix / rebuild verdict before we propose anything.',
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
    </>
  );
};

export default WebsiteDesign;
