import TeamHero from './TeamHero';
import Founder from './Founder';
import TeamGrid from './TeamGrid';
import Principles from './Principles';
import JoinUs from './JoinUs';

const Team = () => {
  return (
    <main className="tm-page">
      <TeamHero />
      <Founder />
      <TeamGrid />
      <Principles />
      <JoinUs />
    </main>
  );
};

export default Team;
