import { useMemo, useState } from 'react';
import Hero from './Hero';
import DataBand from './DataBand';
import TLDR from './TLDR';
import AtAGlance from './AtAGlance';
import FilterBar from './FilterBar';
import Library from './Library';
import ImageBreak from './ImageBreak';
import HowItWorks from './HowItWorks';
import Compliance from './Compliance';
import WhoFor from './WhoFor';
import PullQuote from './PullQuote';
import Promise from './Promise';
import CTABanner from './CTABanner';
import Related from './Related';
import { TEMPLATES, TEMPLATES_SCHEMA, type Category } from './data';

/* ============================================================
   AUTOMATION · TEMPLATES — Swiss editorial library page.
   Alternating section bgs: #FAFAF8 ↔ #F8F9FA.
   Brand palette only: ink, gold, sage, periwinkle.
   ============================================================ */

const Templates = () => {
  const [filter, setFilter] = useState<'All' | Category>('All');
  const visible = useMemo(
    () => (filter === 'All' ? TEMPLATES : TEMPLATES.filter((t) => t.cat === filter)),
    [filter]
  );

  return (
    <main className="atx" id="atx-top">
      <Hero filter={filter} visibleCount={visible.length} />
      <DataBand />
      <TLDR />
      <AtAGlance />
      <FilterBar filter={filter} setFilter={setFilter} />
      <Library visible={visible} />
      <ImageBreak />
      <HowItWorks />
      <Compliance />
      <WhoFor />
      <PullQuote />
      <Promise />
      <CTABanner />
      <Related />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TEMPLATES_SCHEMA) }}
      />
    </main>
  );
};

export default Templates;
