import Breadcrumb from '@/components/Breadcrumb';
import { AnimatedBackground } from '@/lib/motion';

const PricingHero = () => {
  return (
    <section className="pr-hero" aria-label="Pricing intro">
      <AnimatedBackground variant="mesh" intensity="medium" />
      <div className="container-shell">
        <div className="pr-trail reveal d1">
          <Breadcrumb current="Pricing" />
          {/* Visually hidden H1 — gives the page a single semantic H1 for
              SEO/accessibility without altering the existing visual layout
              (which uses an eyebrow + the H2 inside PricingTiers as the
              visible heading hierarchy). Inline styles intentionally — the
              shared CSS isn't being touched in this wave. */}
          <h1
            style={{
              position: 'absolute',
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0 0 0 0)',
              whiteSpace: 'nowrap',
              border: 0,
            }}
          >
            Healthcare Marketing Pricing — Transparent Retainer Tiers from $5,000 per Month
          </h1>
          <span className="pr-eyebrow">Transparent Healthcare Pricing</span>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
