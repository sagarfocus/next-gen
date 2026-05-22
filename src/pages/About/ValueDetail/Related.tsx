import { Link } from 'react-router-dom';
import { MotionCard } from '@/lib/motion';
import DetailSectionHead from '@/components/DetailSectionHead';
import { ArrowIcon } from '@/components/icons';
import { VALUE_ENTRIES, valueDetailHref, type ValueEntry } from '@/content/about/values.data';

const Related = ({ entry }: { entry: ValueEntry }) => {
  const others = VALUE_ENTRIES.filter((v) => v.slug !== entry.slug);
  if (others.length === 0) return null;
  return (
    <section className="ow-detail-related" aria-labelledby="ab-value-related-title">
      <div className="container-shell">
        <DetailSectionHead
          id="ab-value-related-title"
          eyebrow="More principles"
          title="The other principles that guide every campaign."
          intro="The two sibling principles that ship with this one — applied to every campaign, in every vertical, every time."
        />

        <div className="ab-value-related-grid">
          {others.map((r) => (
            <MotionCard key={r.slug} naked tilt={6} className="ow-feat-card-wrap">
              <Link
                to={valueDetailHref(r.slug)}
                className="ab-value-related-card"
                aria-label={`Read more about ${r.title}`}
              >
                <span className="ab-value-related-num">{r.num}</span>
                <span className="ab-value-related-icon" aria-hidden="true">{r.icon}</span>
                <h3 className="ab-value-related-title">{r.title}</h3>
                <p className="ab-value-related-blurb">{r.blurb}</p>
                <span className="ab-value-related-cta">
                  Read more
                  <ArrowIcon size={14} />
                </span>
              </Link>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Related;
