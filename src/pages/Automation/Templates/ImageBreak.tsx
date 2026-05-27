import n8nWorkflowImg from '@/assets/nextgen-image/N8Nworkflowimg.png';

const ImageBreak = () => (
  <section className="atx-break" aria-hidden="true">
    <div className="container-shell">
      <div className="atx-break-frame">
        <div className="atx-break-art">
          <img
            src={n8nWorkflowImg}
            alt=""
            loading="lazy"
            decoding="async"
            className="atx-break-img"
          />
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
