import { Link } from 'react-router-dom';

const End = () => (
  <footer className="ph3-end">
    <div className="a">Phase 03 ends with a working system, not a slide deck.</div>
    <Link to="/contact" className="b">
      <span className="l">Ready to begin?</span>
      <span className="t">Book a discovery call →</span>
    </Link>
  </footer>
);

export default End;
