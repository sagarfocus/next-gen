interface GanttBarProps {
  kind: 'strategy' | 'build';
  start: number;
  end: number;
  label: string;
}
const GanttBar = ({ kind, start, end, label }: GanttBarProps) => {
  const pctLeft = ((start - 1) / 14) * 100;
  const pctWidth = ((end - start + 1) / 14) * 100;
  return (
    <div
      className={`ph2-gantt-bar ${kind}`}
      style={{
        marginLeft: `${pctLeft}%`,
        width: `${pctWidth}%`,
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: label }} />
      <span className="d-meta">D{String(start).padStart(2, '0')}–{String(end).padStart(2, '0')}</span>
    </div>
  );
};

const Gantt = () => (
  <section className="ph2-gantt" aria-labelledby="ph2-gantt-title">
    <div className="ph2-gantt-head">
      <span className="lbl">/ 04</span>
      <h2 id="ph2-gantt-title">Two tracks. Fourteen days. One shipping day.</h2>
      <div className="leg">
        <span><i className="strategy" />Strategy</span>
        <span><i className="build" />Build</span>
      </div>
    </div>

    <div className="ph2-gantt-board">
      <div className="ph2-gantt-days">
        <span className="d-lbl">Day →</span>
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className={`d${i === 7 ? ' week-break' : ''}`}>
            {String(i + 1).padStart(2, '0')}
          </span>
        ))}
      </div>

      <div className="ph2-gantt-track">
        <div className="track-name">
          / A
          <em>Strategy</em>
        </div>
        <div className="ph2-gantt-bars">
          <GanttBar kind="strategy" start={1} end={4} label="Keyword &amp; persona map" />
          <GanttBar kind="strategy" start={3} end={8} label="Competitive positioning" />
          <GanttBar kind="strategy" start={6} end={12} label="Patient journey blueprint" />
          <GanttBar kind="strategy" start={9} end={14} label="Editorial calendar (90d)" />
        </div>
      </div>

      <div className="ph2-gantt-track">
        <div className="track-name">
          / B
          <em>Build</em>
        </div>
        <div className="ph2-gantt-bars">
          <GanttBar kind="build" start={2} end={6} label="Tracking &amp; tag setup" />
          <GanttBar kind="build" start={4} end={9} label="Forms &amp; intake (EMR/CRM)" />
          <GanttBar kind="build" start={6} end={11} label="AI chatbot &amp; triage" />
          <GanttBar kind="build" start={10} end={14} label="Live dashboard" />
        </div>
      </div>
    </div>
  </section>
);

export default Gantt;
