import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import DetailNarrative from '@/components/DetailNarrative';
import { findDetail, type DetailKind } from '../details.data';
import Hero from './Hero';
import Body from './Body';
import FAQ from './FAQ';
import Related from './Related';
import Closing from './Closing';
import { KIND_GROUP, PAREN_TYPE_LABEL, buildNarrativeBlocks, buildSchema, faqSchema } from './data';

const OurWorkDetail = () => {
  const { kind, slug } = useParams<{ kind: string; slug: string }>();
  const validKind =
    kind === 'engagement' || kind === 'industry' || kind === 'capability'
      ? (kind as DetailKind)
      : null;

  const entry = validKind && slug ? findDetail(validKind, slug) : undefined;

  useEffect(() => {
    if (entry) {
      const prevTitle = document.title;
      document.title = `${entry.title} · ${PAREN_TYPE_LABEL[entry.kind]} · Our Work`;
      return () => {
        document.title = prevTitle;
      };
    }
  }, [entry]);

  if (!validKind || !entry) {
    return <Navigate to="/our-work" replace />;
  }

  const group = KIND_GROUP[entry.kind];
  const indexInGroup = group.findIndex((d) => d.slug === entry.slug);
  const numLabel = `${String(indexInGroup + 1).padStart(2, '0')} / ${String(group.length).padStart(2, '0')}`;
  const narrative = buildNarrativeBlocks(entry);

  return (
    <main className="ow-detail-page">
      <Hero entry={entry} numLabel={numLabel} />
      <Body entry={entry} />
      <DetailNarrative about={narrative.about} approach={narrative.approach} />
      <FAQ entry={entry} />
      <Related entry={entry} />
      <Closing entry={entry} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(entry)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(entry)) }}
      />
    </main>
  );
};

export default OurWorkDetail;
