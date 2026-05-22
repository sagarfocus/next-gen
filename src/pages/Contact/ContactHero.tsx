import { AnimatedBackground } from '@/lib/motion';

const ContactHero = () => {
  return (
    <section className="ct-hero" aria-labelledby="ct-title">
      <AnimatedBackground variant="aurora" intensity="subtle" />
      <div className="container-shell">
        <span className="ct-hero-eyebrow reveal d1">Get Your Custom Quote</span>
        <h1 id="ct-title" className="ct-hero-h1 reveal d2">
          Tell us about your practice.{' '}
          <span className="accent">We&rsquo;ll respond in 4 hours.</span>
        </h1>
        <p className="ct-hero-lede reveal d3">
          Answer 4 quick questions about your facility, scale, budget, and goals - we&rsquo;ll send
          a custom marketing roadmap within one business half-day.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
