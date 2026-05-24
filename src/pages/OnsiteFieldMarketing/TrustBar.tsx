interface Badge {
  name: string;
}

const BADGES: Badge[] = [
  { name: 'HIPAA-aware intake' },
  { name: 'BAA on every CRM' },
  { name: 'COI-insured field crews' },
  { name: 'Background-checked ambassadors' },
  { name: 'OSHA-trained event ops' },
  { name: 'Photo + media release pipeline' },
  { name: '0 safety incidents · 6+ years' },
  { name: '320+ activations / year' },
];

const TrustBar = () => {
  return (
    <section className="ofm-trust" aria-label="Certifications and trust signals">
      <div className="container-shell">
        <div className="ofm-trust-head">
          <span className="ofm-trust-lbl">Field-trained · Healthcare-only · Insured</span>
          <span className="ofm-trust-sep" aria-hidden="true" />
          <span>Audited quarterly</span>
        </div>
        <div className="ofm-trust-track">
          {BADGES.map((b) => (
            <span key={b.name} className="ofm-trust-pill">
              <span className="ofm-trust-dot" aria-hidden="true" />
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
