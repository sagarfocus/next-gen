import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import DetailNarrative from '../../../components/DetailNarrative';
import { VALUE_ENTRIES, findValue } from '../../../content/about/values.data';
import Hero from './Hero';
import Body from './Body';
import FAQ from './FAQ';
import Related from './Related';
import Closing from './Closing';
import { buildValueNarrative, articleSchema, faqSchema } from './data';

const ValueDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? findValue(slug) : undefined;
  const index = entry ? VALUE_ENTRIES.findIndex((v) => v.slug === entry.slug) : -1;

  useEffect(() => {
    if (entry) {
      const prev = document.title;
      document.title = `${entry.title} · Core Values · About`;
      return () => {
        document.title = prev;
      };
    }
  }, [entry]);

  if (!entry || index < 0) {
    return <Navigate to="/about" replace />;
  }

  const narrative = buildValueNarrative(entry);

  return (
    <main className="ow-detail-page ab-value-detail-page">
      <Hero entry={entry} index={index} />
      <Body entry={entry} />
      <DetailNarrative about={narrative.about} approach={narrative.approach} />
      <FAQ entry={entry} />
      <Related entry={entry} />
      <Closing entry={entry} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(entry)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(entry)) }}
      />
    </main>
  );
};

export default ValueDetail;
