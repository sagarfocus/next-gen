import { useParams, Navigate } from 'react-router-dom';
import DetailNarrative from '@/components/DetailNarrative';
import { INDUSTRY_DETAIL_ENTRIES, findIndustryDetail } from '@/content/industries/details.data';
import Hero from './Hero';
import Body from './Body';
import FAQ from './FAQ';
import Related from './Related';
import Closing from './Closing';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { buildIndustryNarrative, serviceSchema, faqSchema } from './data';

const truncate = (s: string, n: number): string =>
  s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`;

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? findIndustryDetail(slug) : undefined;

  if (!entry) {
    return <Navigate to="/industries" replace />;
  }

  const indexInGroup = INDUSTRY_DETAIL_ENTRIES.findIndex((d) => d.slug === entry.slug);
  const numLabel = `${String(indexInGroup + 1).padStart(2, '0')} / ${String(INDUSTRY_DETAIL_ENTRIES.length).padStart(2, '0')}`;

  const narrative = buildIndustryNarrative(entry);

  const breadcrumb = buildBreadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: entry.label },
  ]);

  return (
    <main className="ow-detail-page">
      <Seo
        title={`${entry.label} Marketing — Healthcare Patient Acquisition`}
        description={truncate(entry.description, 160)}
        path={`/industries/detail/${entry.slug}`}
        schema={[serviceSchema(entry), faqSchema(entry), breadcrumb]}
      />

      <Hero entry={entry} numLabel={numLabel} />
      <Body entry={entry} />
      <DetailNarrative about={narrative.about} approach={narrative.approach} />
      <FAQ entry={entry} />
      <Related entry={entry} />
      <Closing entry={entry} />
    </main>
  );
};

export default IndustryDetail;
