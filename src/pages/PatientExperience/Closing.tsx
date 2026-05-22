import Section from '../../components/editorial/Section';
import EditorialCTA from '../../components/editorial/EditorialCTA';

const Closing = () => (
  <Section
    no="06"
    title="Map your patient journey"
    kicker="Two-week working session that delivers a journey map and a ranked pilot list."
  >
    <EditorialCTA
      eyebrow="Working Session"
      title="Treat your patient like the audience you would never lose."
      description="Map the journey, audit the surfaces, pilot the single highest-friction step. Two weeks of work, one map, one ranked list. We do not pitch beyond that without a signed pilot."
      primaryHref="/contact"
      primaryLabel="Book the session →"
      secondaryHref="/case-studies"
      secondaryLabel="See journey case studies"
    />
  </Section>
);

export default Closing;
