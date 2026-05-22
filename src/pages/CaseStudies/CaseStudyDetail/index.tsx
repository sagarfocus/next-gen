import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CASE_STUDIES, findCaseStudy } from '../caseStudies.data';
import type { CaseStudy } from '../caseStudies.data';
import Hero from './Hero';
import Playbook from './Playbook';
import Impact from './Impact';
import NotFoundCase from './NotFoundCase';
import { ORIGIN, buildSchema, buildBreadcrumbSchema } from './data';

interface DetailProps {
  study: CaseStudy;
}

const Detail = ({ study }: DetailProps) => {
  const idx = CASE_STUDIES.findIndex((c) => c.id === study.id);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];
  const prev = CASE_STUDIES[(idx - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];

  const total = CASE_STUDIES.length;
  const ordinal = String(idx + 1).padStart(2, '0');

  return (
    <main className="csd" id="csd-top">
      <Hero study={study} ordinal={ordinal} total={total} />
      <Playbook study={study} />
      <Impact study={study} prev={prev} next={next} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(study)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(study)),
        }}
      />
    </main>
  );
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = findCaseStudy(slug);

  useEffect(() => {
    if (!study) return;
    const prevTitle = document.title;
    document.title = `${study.name} · Case study · TheNextGen Healthcare Marketing`;

    const ensureMeta = (name: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      return el;
    };
    const desc = ensureMeta('description');
    const prevDesc = desc.getAttribute('content');
    desc.setAttribute(
      'content',
      `${study.brief.slice(0, 155)}${study.brief.length > 155 ? '…' : ''}`,
    );

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const prevCanon = canonical.getAttribute('href');
    canonical.setAttribute('href', `${ORIGIN}/case-studies/${study.id}`);

    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) desc.setAttribute('content', prevDesc);
      if (prevCanon !== null) canonical!.setAttribute('href', prevCanon);
    };
  }, [study]);

  if (!study) return <NotFoundCase />;

  return <Detail study={study} />;
};

export default CaseStudyDetail;
