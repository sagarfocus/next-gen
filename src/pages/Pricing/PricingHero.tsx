import Breadcrumb from '../../components/Breadcrumb';

const PricingHero = () => {
  return (
    <section className="pr-hero" aria-label="Pricing intro">
      <div className="container-shell">
        <div className="pr-trail reveal d1">
          <Breadcrumb current="Pricing" />
          <span className="pr-eyebrow">Transparent Healthcare Pricing</span>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
