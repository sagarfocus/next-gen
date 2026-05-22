import Section from '../../components/editorial/Section';
import EditorialCTA from '../../components/editorial/EditorialCTA';

const Closing = () => (
  <Section
    no="06"
    title="Audit your stack"
    kicker="Two-hour working session. We map every system, surface the five highest-leverage workflows, and price the pilot."
  >
    <EditorialCTA
      eyebrow="Stack Audit · No Cost"
      title="Software does not run a clinic. Workflows do."
      description="We do not ship a pilot without a documented run-book and a named owner on your team. Book the audit, walk away with the plan - pilot only if it pays for itself in week one."
      primaryHref="/contact"
      primaryLabel="Book the audit →"
      secondaryHref="/automation"
      secondaryLabel="See the workflow library"
    />
  </Section>
);

export default Closing;
