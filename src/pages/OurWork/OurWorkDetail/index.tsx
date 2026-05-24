import { useParams, Navigate } from 'react-router-dom';
import DetailNarrative from '@/components/DetailNarrative';
import { findDetail, type DetailKind } from '../details.data';
import Hero from './Hero';
import Body from './Body';
import FAQ from './FAQ';
import Related from './Related';
import Closing from './Closing';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { KIND_GROUP, PAREN_TYPE_LABEL, buildNarrativeBlocks, buildSchema, faqSchema } from './data';

const truncate = (s: string, n: number): string =>
  s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`;

const OurWorkDetail = () => {
  const { kind, slug } = useParams<{ kind: string; slug: string }>();
  const validKind =
    kind === 'engagement' || kind === 'industry' || kind === 'capability'
      ? (kind as DetailKind)
      : null;

  const entry = validKind && slug ? findDetail(validKind, slug) : undefined;

  if (!validKind || !entry) {
    return <Navigate to="/our-work" replace />;
  }

  const group = KIND_GROUP[entry.kind];
  const indexInGroup = group.findIndex((d) => d.slug === entry.slug);
  const numLabel = `${String(indexInGroup + 1).padStart(2, '0')} / ${String(group.length).padStart(2, '0')}`;
  const narrative = buildNarrativeBlocks(entry);

  const breadcrumb = buildBreadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Our Work', path: '/our-work' },
    { name: `${PAREN_TYPE_LABEL[entry.kind]}: ${entry.title}` },
  ]);

  return (
    <main className="ow-detail-page">
      <Seo
        title={`${entry.title} — ${PAREN_TYPE_LABEL[entry.kind]} · Our Work`}
        description={truncate(entry.description, 160)}
        path={`/our-work/${entry.kind}/${entry.slug}`}
        type={entry.kind === 'engagement' ? 'article' : 'website'}
        schema={[buildSchema(entry), faqSchema(entry), breadcrumb]}
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

export default OurWorkDetail;
