interface Step {
  num: string;
  title: string;
  text: string;
  delayCls: string;
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Download a Template',
    text: 'Choose from our free, HIPAA-ready N8N workflow templates. Each one solves a specific operational bottleneck.',
    delayCls: 'd1',
  },
  {
    num: '02',
    title: 'Import into N8N',
    text: 'Open your N8N instance (cloud or self-hosted), go to Workflows → Import, and paste the JSON. All nodes are pre-configured.',
    delayCls: 'd2',
  },
  {
    num: '03',
    title: 'Connect Your Tools',
    text: 'Plug in your EHR API keys, Twilio credentials, Google Sheets, and Slack workspace. Each node has clear setup instructions.',
    delayCls: 'd3',
  },
  {
    num: '04',
    title: 'Activate & Scale',
    text: 'Toggle the workflow on and watch it run 24/7. Monitor executions, tweak triggers, and scale across locations.',
    delayCls: 'd4',
  },
];

const HowItWorks = () => {
  return (
    <section className="how" aria-labelledby="how-title">
      <div className="container-shell">
        <div className="how-head reveal">
          <div className="how-eyebrow">How it works</div>
          <h2 id="how-title">Get started in 4 simple steps</h2>
          <p className="how-sub">
            From download to deployment in under 30 minutes. No coding required.
          </p>
        </div>

        <div className="how-grid">
          {STEPS.map((step) => (
            <div key={step.num} className={`how-step reveal ${step.delayCls}`}>
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <div className="how-cta reveal d4">
          <a href="#templates" className="au-btn how-btn primary">
            Browse all templates
          </a>
          <a href="#docs" className="au-btn how-btn ghost">
            Read setup guide
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
