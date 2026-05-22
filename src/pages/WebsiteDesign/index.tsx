import Hero from './Hero';
import Stack from './Stack';
import Compliance from './Compliance';
import Industries from './Industries';
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

const WebsiteDesign = () => {
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
