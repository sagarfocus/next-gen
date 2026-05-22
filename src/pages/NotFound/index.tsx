import { useEffect } from 'react';
import Hero from './Hero';
import RecoveryGrid from './RecoveryGrid';

const NotFound = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Page not found · TheNextGen Healthcare Marketing';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <main className="nf-page" style={{ paddingBottom: 'clamp(72px, 9vw, 120px)' }}>
      <Hero />
      <RecoveryGrid />
    </main>
  );
};

export default NotFound;
