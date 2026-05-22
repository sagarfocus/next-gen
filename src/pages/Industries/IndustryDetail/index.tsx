import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import DetailNarrative from '@/components/DetailNarrative';
import { INDUSTRY_DETAIL_ENTRIES, findIndustryDetail } from '@/content/industries/details.data';
import Hero from './Hero';
import Body from './Body';
import FAQ from './FAQ';
import Related from './Related';
import Closing from './Closing';
import { buildIndustryNarrative, serviceSchema, faqSchema } from './data';

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? findIndustryDetail(slug) : undefined;

  useEffect(() => {
    if (entry) {
      const prev = document.title;
      document.title = `${entry.label} · Industries · Focus Marketing`;
      return () => {
        document.title = prev;
      };
    }
  }, [entry]);

  if (!entry) {
    return <Navigate to="/industries" replace />;
  }

  const indexInGroup = INDUSTRY_DETAIL_ENTRIES.findIndex((d) => d.slug === entry.slug);
  const numLabel = `${String(indexInGroup + 1).padStart(2, '0')} / ${String(INDUSTRY_DETAIL_ENTRIES.length).padStart(2, '0')}`;

  const narrative = buildIndustryNarrative(entry);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(entry)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(entry)) }}
      />
    </main>
  );
};

export default IndustryDetail;
