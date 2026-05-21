import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MotionCard, useReducedMotion } from '../../lib/motion';

import seoImg from '../../assets/Seo&localsearch.png';
import socialImg from '../../assets/socialmediamarketing.png';
import adsImg from '../../assets/googleads.png';
import fieldImg from '../../assets/onsitefieldmarkting.png';
import autoImg from '../../assets/medicalautomation.png';
import emailImg from "../../assets/email&dripcamping'.png";

/*
 * Premium scroll-pinned horizontal slider.
 *
 * On desktop (>900px, non-touch, non-reduced-motion) we lazy-load GSAP
 * ScrollTrigger and pin the section while translating the card track on
 * vertical wheel input. Once the user has scrolled past the last card the
 * page resumes vertical flow normally.
 *
 * Mobile / touch / reduced motion fall back to the original native
 * `overflow-x: auto` snap-scroll behavior - no scroll hijacking.
 */

interface ServiceCardData {
  tag: string;
  title: string;
  sub: string;
  ariaLabel: string;
  image: string;
  to: string;
}

const SERVICES: ServiceCardData[] = [
  {
    tag: 'Search',
    title: 'SEO & Local Search',
    sub: 'Rank for the searches that bring patients to your door.',
    ariaLabel: 'SEO and Local Search',
    image: seoImg,
    to: '/services/seo-local-search',
  },
  {
    tag: 'Social',
    title: 'Social Media Marketing',
    sub: 'Show up where your patients spend their time - consistently.',
    ariaLabel: 'Social Media Marketing',
    image: socialImg,
    to: '/services/social-media-marketing',
  },
  {
    tag: 'Paid Media',
    title: 'Google Ads & Paid Search',
    sub: 'High-intent traffic, tightly tracked, ROI-optimized weekly.',
    ariaLabel: 'Google Ads and Paid Search',
    image: adsImg,
    to: '/services/google-ads',
  },
  {
    tag: 'Field',
    title: 'Onsite Field Marketing',
    sub: 'In-clinic activations and community presence that convert locally.',
    ariaLabel: 'Onsite Field Marketing',
    image: fieldImg,
    to: '/onsite-field-marketing',
  },
  {
    tag: 'Automation',
    title: 'Medical Automation',
    sub: 'n8n & custom workflows that handle intake, follow-up, and reporting.',
    ariaLabel: 'Medical Automation',
    image: autoImg,
    to: '/medical-automation',
  },
  {
    tag: 'Lifecycle',
    title: 'Email & Drip Campaigns',
    sub: 'Nurture leads, recover no-shows, and re-engage past patients.',
    ariaLabel: 'Email and Drip Campaigns',
    image: emailImg,
    to: '/services/email-drip-campaigns',
  },
];

const CardArrow = () => (
  <span className="card-arrow" aria-hidden="true">
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </span>
);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pinActive, setPinActive] = useState(false);
  const reduced = useReducedMotion();

  // GSAP pin + horizontal scroll - desktop, non-touch, non-reduced-motion only.
  // On mobile / reduced motion the native `overflow-x: auto` + scroll-snap on
  // .services-grid takes over (the user can swipe / drag).
  useEffect(() => {
    if (reduced) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(max-width: 900px)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      // Switch CSS to pinned mode before GSAP measures. Wait two frames
      // so React flushes + the browser applies the new layout (cards
      // overflow the wrap → scrollWidth > clientWidth = real distance).
      setPinActive(true);
      await new Promise((r) => requestAnimationFrame(r));
      await new Promise((r) => requestAnimationFrame(r));
      if (cancelled) return;

      const getDistance = () =>
        Math.max(0, track.scrollWidth - track.clientWidth);

      const ctx = gsap.context(() => {
        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
        });

        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          animation: tween,
          invalidateOnRefresh: true,
        });

        // Recompute now that the pinned-mode CSS is settled.
        ScrollTrigger.refresh();
      }, section);

      cleanup = () => {
        ctx.revert();
        setPinActive(false);
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className={`services-section${pinActive ? ' is-pinned' : ''}`}
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container-shell">
        <div className="services-head">
          <span className="services-eyebrow">Services</span>
          <h2 id="services-title" className="services-h2">
            Marketing built for healthcare practices.
          </h2>
          <div className="services-aside">
            <Link to="/services" className="all-link">
              View all services
              <span className="ico" aria-hidden="true">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </Link>
            <p className="services-sub">
              Six core capabilities - one integrated growth engine for
              clinics, medspas, and wellness brands.
            </p>
          </div>
        </div>

        <div className="services-track-wrap">
          <div className="services-grid" ref={trackRef}>
            {SERVICES.map(({ tag, title, sub, ariaLabel, image, to }) => (
              <MotionCard
                key={title}
                naked
                tilt={4}
                className="service-card-tilt"
              >
                <Link
                  to={to}
                  className="service-card"
                  aria-label={ariaLabel}
                >
                  <div className="card-img">
                    <CardArrow />
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="card-tag">{tag}</span>
                  <h3 className="card-title">{title}</h3>
                  <p className="card-sub">{sub}</p>
                </Link>
              </MotionCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
