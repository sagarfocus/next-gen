import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getLenis } from '../lib/motion';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Don't override anchor-link navigation (Lenis handles those separately).
    if (hash) return;

    const lenis = getLenis();
    if (lenis) {
      // Use Lenis's authoritative scrollTo so we don't fight its internal
      // scroll state. `immediate: true` avoids the easing animation on
      // route change - feels like a clean page load.
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      // No Lenis (mobile / touch / reduced-motion) - native fallback.
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
