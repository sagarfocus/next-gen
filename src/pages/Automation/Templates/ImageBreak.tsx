import { CategoryArt } from './data';

const ImageBreak = () => (
  <section className="atx-break" aria-hidden="true">
    <div className="container-shell">
      <div className="atx-break-frame">
        <div className="atx-break-art">
          <CategoryArt cat="Intake" />
        </div>
        <div className="atx-break-meta">
          <span className="atx-mono">FIG. 09 — IN PRACTICE</span>
          <p className="atx-break-caption">
            Every workflow ships as an N8N spec with the compliance posture documented at every
            node.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ImageBreak;
