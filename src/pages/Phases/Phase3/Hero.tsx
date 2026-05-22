import { Link } from 'react-router-dom';

const Hero = () => (
  <>
    <Link to="/about#methodology" className="ph3-crumb">
      ← Back to Methodology
    </Link>

    <header className="ph3-masthead">
      <span className="a">/ 03</span>
      <span className="b">Phase Three - Launch &amp; Accelerate</span>
      <span className="c">Day 01 - Day 30</span>
      <span className="d">Live Ops</span>
    </header>

    <h1 className="ph3-display">
      Thirty days <em>from</em> kickoff <em>to</em> compounding pipeline.
    </h1>
  </>
);

export default Hero;
