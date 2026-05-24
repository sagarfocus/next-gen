import { useParams, Navigate } from 'react-router-dom';
import DetailNarrative from '@/components/DetailNarrative';
import { VALUE_ENTRIES, findValue } from '@/content/about/values.data';
import Hero from './Hero';
import Body from './Body';
import FAQ from './FAQ';
import Related from './Related';
import Closing from './Closing';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { buildValueNarrative, articleSchema, faqSchema } from './data';

const truncate = (s: string, n: number): string =>
  s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`;

const ValueDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? findValue(slug) : undefined;
  const index = entry ? VALUE_ENTRIES.findIndex((v) => v.slug === entry.slug) : -1;

  if (!entry || index < 0) {
    return <Navigate to="/about" replace />;
  }

  const narrative = buildValueNarrative(entry);

  const breadcrumb = buildBreadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: `Core value: ${entry.title}` },
  ]);

  return (
    <main className="ow-detail-page ab-value-detail-page">
      <Seo
        title={`${entry.title} — Core Value · About TheNextGen`}
        description={truncate(entry.lead, 160)}
        path={`/about/value/${entry.slug}`}
        type="article"
        schema={[articleSchema(entry), faqSchema(entry), breadcrumb]}
      />

      <Hero entry={entry} index={index} />
      <Body entry={entry} />
      <DetailNarrative about={narrative.about} approach={narrative.approach} />
      <FAQ entry={entry} />
      <Related entry={entry} />
      <Closing entry={entry} />
    </main>
  );
};

export default ValueDetail;
