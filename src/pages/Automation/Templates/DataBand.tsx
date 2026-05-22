const DataBand = () => {
  const totalSetup = '~5 hrs';
  const totalSaves = '30+ hrs/wk';
  return (
    <section className="atx-databand" aria-label="Library metadata">
      <div className="container-shell">
        <ul className="atx-databand-list">
          <li className="atx-databand-item">
            <span className="atx-databand-label">Workflows</span>
            <span className="atx-databand-value">06</span>
          </li>
          <li className="atx-databand-item">
            <span className="atx-databand-label">Total setup</span>
            <span className="atx-databand-value">{totalSetup}</span>
          </li>
          <li className="atx-databand-item">
            <span className="atx-databand-label">Combined savings</span>
            <span className="atx-databand-value">{totalSaves}</span>
          </li>
          <li className="atx-databand-item">
            <span className="atx-databand-label">Platform</span>
            <span className="atx-databand-value">N8N · self-hosted</span>
          </li>
          <li className="atx-databand-item">
            <span className="atx-databand-label">Compliance modes</span>
            <span className="atx-databand-value">3</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DataBand;
