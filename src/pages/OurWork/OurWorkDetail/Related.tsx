import { Link } from 'react-router-dom';
import { MotionCard } from '@/lib/motion';
import DetailSectionHead from '@/components/DetailSectionHead';
import { detailHref, type DetailEntry } from '../details.data';
import { KIND_GROUP, KIND_LABEL_PLURAL, KIND_RELATED_INTRO, PAREN_TYPE_LABEL } from './data';

const Related = ({ entry }: { entry: DetailEntry }) => {
  const group = KIND_GROUP[entry.kind].filter((d) => d.slug !== entry.slug).slice(0, 3);
  if (group.length === 0) return null;
  return (
    <section className="ow-detail-related" aria-labelledby="ow-detail-related-title">
      <div className="container-shell">
        <DetailSectionHead
          id="ow-detail-related-title"
          eyebrow={`More ${KIND_LABEL_PLURAL[entry.kind]}`}
          title={
            entry.kind === 'engagement'
              ? 'More engagements from this quarter.'
              : entry.kind === 'industry'
                ? 'Other clinics this work has shipped for.'
                : 'Other capabilities in the operating system.'
          }
          intro={KIND_RELATED_INTRO[entry.kind]}
        />

        <div className="ow-feat-grid ow-detail-related-grid">
          {group.map((r) => (
            <MotionCard key={r.slug} naked tilt={6} className="ow-feat-card-wrap">
              <Link
                to={detailHref(r.kind, r.slug)}
                className="ow-feat-card"
                aria-label={`Read more about ${r.title}`}
              >
                <div className="ow-feat-art ow-feat-art--photo" aria-hidden="true">
                  <img src={r.img} alt="" loading="lazy" />
                  <div className="ow-feat-art-shade" />
                  <span className="ow-feat-delta">{r.metric.v}</span>
                </div>
                <div className="ow-feat-body">
                  <span className="ow-feat-sector">{PAREN_TYPE_LABEL[r.kind]}</span>
                  <h3 className="ow-feat-name">{r.title}</h3>
                  <p className="ow-feat-headline">{r.blurb}</p>
                  <div className="ow-feat-foot">
                    <div>
                      <strong>{r.metric.v}</strong>
                      <span>{r.metric.l}</span>
                    </div>
                    <span className="ow-feat-arrow" aria-hidden="true">↗</span>
                  </div>
                </div>
              </Link>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Related;
