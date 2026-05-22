import Section from '@/components/editorial/Section';
import EditorialCTA from '@/components/editorial/EditorialCTA';

const Closing = () => (
  <Section
    no="05"
    title="Book a territory walk"
    kicker="One-hour working session. We map your service area, surface the highest-yield channels, and price a 90-day pilot."
  >
    <EditorialCTA
      eyebrow="Territory Walk · No Cost"
      title="Doors open faster when someone is there to open them."
      description="We will not staff a single booth without a territory plan and a defined ROAS target. Book the walk, walk away with the plan - pilot only if the math holds up."
      primaryHref="/contact"
      primaryLabel="Book the walk →"
      secondaryHref="/case-studies"
      secondaryLabel="See field case studies"
    />
  </Section>
);

export default Closing;
