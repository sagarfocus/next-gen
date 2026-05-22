import dallasImg from '../../assets/healthcare-1.png';
import houstonImg from '../../assets/healthcare-2.png';
import austinImg from '../../assets/healthcare-3.png';
import sanAntonioImg from '../../assets/healthcare-4.png';
import fortWorthImg from '../../assets/healthcare-5.png';
import elPasoImg from '../../assets/healthcare-6.png';

export interface Marker {
  value: string;
  label: string;
}
export const MARKERS: Marker[] = [
  { value: '6',       label: 'Texas metros covered'   },
  { value: '380+',    label: 'Active geo pages'        },
  { value: '14 pos.', label: 'Median ranking lift'     },
  { value: '60 days', label: 'Audit-to-launch window'  },
];

export interface Why {
  num: string;
  title: string;
  body: string;
  hint: string;
}
export const WHY: Why[] = [
  {
    num: '01',
    title: 'Patients search local.',
    body: 'High-intent healthcare queries are local by nature. A practice ranking for "urgent care" in a metro means nothing if it does not also rank for the neighbourhood three blocks from the building.',
    hint: 'Catchment-bound queries',
  },
  {
    num: '02',
    title: 'Hospitals own the wide net.',
    body: 'A boutique practice will not outrank a hospital network for broad service terms. The win is in the long-tail municipality terms hospitals do not bother to write content for.',
    hint: 'Long-tail municipality wins',
  },
  {
    num: '03',
    title: 'AI engines reward specificity.',
    body: 'Conversational search now favours specific, neighbourhood-grounded answers. Generic city-level pages are quietly being filtered out of AI Overviews.',
    hint: 'AEO-grade local relevance',
  },
];

export interface Metro {
  code: string;
  name: string;
  pages: number;
  coord: string;
  signal: string;
  img: string;
}
export const METROS: Metro[] = [
  { code: 'TX-001', name: 'Dallas',      pages: 42, coord: '32.78°N · 96.80°W', signal: 'Highest concentration of FSED demand. Densest review volume.',   img: dallasImg     },
  { code: 'TX-002', name: 'Houston',     pages: 51, coord: '29.76°N · 95.37°W', signal: 'Multi-site urgent care competition. Long-tail wins outweigh aggregate.', img: houstonImg   },
  { code: 'TX-003', name: 'Austin',      pages: 38, coord: '30.27°N · 97.74°W', signal: 'Aesthetic and concierge categories. Higher LTV per visit.',     img: austinImg    },
  { code: 'TX-004', name: 'San Antonio', pages: 34, coord: '29.42°N · 98.49°W', signal: 'Primary care and Medicare advantage cohorts.',                 img: sanAntonioImg},
  { code: 'TX-005', name: 'Fort Worth',  pages: 29, coord: '32.75°N · 97.33°W', signal: 'Suburban family medicine. Recall and continuity drive value.', img: fortWorthImg },
  { code: 'TX-006', name: 'El Paso',     pages: 22, coord: '31.76°N · 106.49°W',signal: 'Bilingual content opportunity. Lower competition on Spanish terms.', img: elPasoImg },
];

export interface Block {
  num: string;
  k: string;
  d: string;
  marker: string;
}
export const ANATOMY: Block[] = [
  { num: '01', k: 'Hero',     d: 'Neighbourhood name written the way a resident speaks it. Driving distance from a landmark people actually use.', marker: 'Spoken local'   },
  { num: '02', k: 'Services', d: 'A service mix specific to that catchment. The downtown clinic is not the suburbs clinic - its page should not be either.', marker: 'Catchment-specific' },
  { num: '03', k: 'Proof',    d: 'Reviews from patients in that ZIP, photos of the building locals recognise, the names of partner pharmacies nearby.', marker: 'ZIP-bound proof' },
];

export const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hyper-Local Content & Geo-Targeted Landing Pages',
  serviceType: 'Local SEO · Programmatic Catchment Pages',
  areaServed: 'Texas',
};
