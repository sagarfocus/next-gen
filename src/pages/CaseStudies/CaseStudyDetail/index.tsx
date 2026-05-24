import { useParams } from 'react-router-dom';
import { CASE_STUDIES, findCaseStudy } from '../caseStudies.data';
import type { CaseStudy } from '../caseStudies.data';
import Hero from './Hero';
import Playbook from './Playbook';
import Impact from './Impact';
import NotFoundCase from './NotFoundCase';
import Seo from '@/components/Seo';
import { buildSchema, buildBreadcrumbSchema } from './data';

const truncate = (s: string, n: number): string =>
  s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`;

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
      <Seo
        title={`${study.name} — Healthcare Marketing Case Study`}
        description={truncate(study.brief, 160)}
        path={`/case-studies/${study.id}`}
        type="article"
        schema={[buildSchema(study), buildBreadcrumbSchema(study)]}
      />

      <Hero study={study} ordinal={ordinal} total={total} />
      <Playbook study={study} />
      <Impact study={study} prev={prev} next={next} />
    </main>
  );
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = findCaseStudy(slug);

  if (!study) return <NotFoundCase />;

  return <Detail study={study} />;
};

export default CaseStudyDetail;
