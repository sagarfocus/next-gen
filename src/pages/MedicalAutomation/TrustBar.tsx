interface Badge {
  name: string;
}

const BADGES: Badge[] = [
  { name: 'HIPAA-aware build pipeline' },
  { name: 'BAA on every downstream tool' },
  { name: 'HL7 + FHIR integrations' },
  { name: 'Athena · Epic · eClinicalWorks · Kareo' },
  { name: 'Twilio BAA · SendGrid BAA' },
  { name: 'PHI-redacted AI prompts' },
  { name: 'Human-in-loop governance' },
  { name: 'Audit logs · 99.8% pass rate' },
];

const TrustBar = () => {
  return (
    <section className="mau-trust" aria-label="Compliance and integration trust signals">
      <div className="container-shell">
        <div className="mau-trust-head">
          <span className="mau-trust-lbl">Healthcare-only · HIPAA-aware · Audit-ready</span>
          <span className="mau-trust-sep" aria-hidden="true" />
          <span>Reviewed quarterly</span>
        </div>
        <div className="mau-trust-track">
          {BADGES.map((b) => (
            <span key={b.name} className="mau-trust-pill">
              <span className="mau-trust-dot" aria-hidden="true" />
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
