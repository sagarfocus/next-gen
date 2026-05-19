import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../lib/motion';

/*
 * GSAP is lazy-loaded inside useEffect below, ONLY when:
 *   - the Process section actually mounts (route hit)
 *   - viewport > 900px (desktop)
 *   - prefers-reduced-motion is NOT set
 *
 * Result: GSAP + ScrollTrigger (~120 KB minified) are split into a
 * separate chunk and never fetched on mobile or under reduced motion.
 */

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  active?: boolean;
}

const STEPS: ProcessStep[] = [
  {
    num: '/01',
    title: 'Discovery & Audit',
    desc: 'We dive into your current marketing, identify gaps, and learn about your patients.',
  },
  {
    num: '/02',
    title: 'Custom Strategy',
    desc: 'You get a tailored marketing plan based on real data, not guesswork.',
  },
  {
    num: '/03',
    title: 'Build & Setup',
    desc: 'We deploy your tech stack — landing pages, tracking, automation, and dashboards.',
  },
  {
    num: '/04',
    title: 'Launch',
    desc: 'We execute campaigns across every channel — search, social, and email.',
    active: true,
  },
  {
    num: '/05',
    title: 'Optimize',
    desc: 'We run A/B tests, analyze results, and refine your campaigns weekly.',
  },
  {
    num: '/06',
    title: 'Scale',
    desc: 'When we find what works, we double down to boost your patient volume.',
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (typeof window === 'undefined') return;
    // Skip GSAP entirely on small / touch viewports — keep page light
    if (window.matchMedia('(max-width: 900px)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const section = sectionRef.current;
    const path = pathRef.current;
    if (!section || !path) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      // Dynamic imports — Vite splits these into a separate chunk that
      // never reaches mobile / reduced-motion users.
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      const steps = section.querySelectorAll<HTMLElement>('.step-circle');
      steps.forEach((s) => {
        gsap.set(s, { opacity: 0.55, scale: 0.96 });
      });

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        });

        tl.to(path, {
          strokeDashoffset: 0,
          duration: 4.5,
          ease: 'power1.inOut',
        }, 0);

        steps.forEach((s, i) => {
          tl.to(
            s,
            { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' },
            0.3 + i * 0.6,
          );
        });
      }, section);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="process-section"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="container-shell">
        <div className="process-head">
          <span className="process-eyebrow">Our Process</span>
          <h2 id="process-title" className="process-h2">
            A clear path from audit to scale.
          </h2>
          <p className="process-intro">
            A repeatable, data-driven system designed for clinics, medspas, and
            wellness brands ready to grow predictably.
          </p>
        </div>

        <ol className="process-steps process-steps--curved">
          {/* Decorative wave connector — GSAP scrubs strokeDashoffset to draw it on scroll */}
          <svg
            className="process-curve"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={pathRef}
              d="M 100 60 C 200 60, 200 140, 300 140 S 400 60, 500 60 S 600 140, 700 140 S 800 60, 900 60 S 1000 140, 1100 140"
              fill="none"
              stroke="#B38B6D"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.75"
            />
          </svg>

          {STEPS.map(({ num, title, desc, active }) => (
            <li key={num} className={`step${active ? ' is-active' : ''}`}>
              <div className="step-circle" aria-hidden="true">
                <span>
                  <span className="step-num">{num}</span>
                  <span className="step-title-visible">{title}</span>
                </span>
              </div>
              {/* Screen-reader-only heading; the visible title above is hidden via aria-hidden */}
              <h3 className="sr-only">{title}</h3>
              <p className="step-desc">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
