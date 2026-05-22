import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowIcon } from '@/components/icons';
import { COLORS, TONE_COLORS } from './data';

/* ─── Not found ─── */
const NotFoundBlock = () => (
  <main className="ph-page-head">
    <div className="container-shell py-24">
      <Breadcrumb items={[{ label: 'Blog', to: '/blog' }, { label: 'Article not found' }]} />
      <div className="mt-10 max-w-[60ch]">
        <span
          className="inline-flex items-center gap-2 rounded-full font-mono font-bold tracking-[0.18em] uppercase px-3 py-1.5 text-[11px]"
          style={{ background: TONE_COLORS.ink.soft, color: TONE_COLORS.ink.hex }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: TONE_COLORS.ink.hex }} />
          404 · Missing article
        </span>
        <h1
          className="mt-6 font-extrabold leading-[1.02] tracking-[-0.034em] text-[clamp(34px,5vw,68px)]"
          style={{ color: COLORS.navy }}
        >
          We could not find that article.
        </h1>
        <p className="mt-7 text-[18px] leading-[1.65]" style={{ color: COLORS.body }}>
          The post you tried to open may have moved or been retired. Browse the full library below.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-[12px] uppercase tracking-[0.18em] font-bold text-white"
          style={{ background: COLORS.navy }}
        >
          Back to all articles <ArrowIcon size={14} />
        </Link>
      </div>
    </div>
  </main>
);

export default NotFoundBlock;
