import TeamHero from './TeamHero';
import Founder from './Founder';
import TeamGrid from './TeamGrid';
import Principles from './Principles';
import Process from './Process';
import Stack from './Stack';
import JoinUs from './JoinUs';

const Team = () => {
  return (
    <main className="tm-page">
      <TeamHero />
      <Founder />
      <TeamGrid />
      <Principles />
      <Process />
      <Stack />
      <JoinUs />
    </main>
  );
};

export default Team;
