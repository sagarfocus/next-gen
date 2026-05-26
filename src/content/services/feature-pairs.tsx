import type { ReactElement } from 'react';
import gbpImg from '../../assets/nextgen-image/Googleebuisness.png';
import citationImg from '../../assets/nextgen-image/Citationbuilding.png';
import hyperLocalImg from '../../assets/nextgen-image/Hyperlocalcontent.png';
import aeoImg from '../../assets/nextgen-image/Aeo&schemaimg.png';

export interface PairCard {
  ariaId: string;
  bg: ReactElement;
  tag: string;
  title: string;
  desc: string;
  to: string;
}

const GbpBg = <img src={gbpImg} alt="" loading="lazy" decoding="async" />;

const CitationBg = <img src={citationImg} alt="" loading="lazy" decoding="async" />;

const HyperLocalBg = <img src={hyperLocalImg} alt="" loading="lazy" decoding="async" />;

const AeoBg = <img src={aeoImg} alt="" loading="lazy" decoding="async" />;

export const ROW_1: PairCard[] = [
  {
    ariaId: 'card-gbp',
    bg: GbpBg,
    tag: 'Local Pack',
    title: 'Google Business Profile',
    desc: 'Complete optimization and weekly management of your GBP to secure Local Pack rankings.',
    to: '/services/google-business-profile',
  },
  {
    ariaId: 'card-citation',
    bg: CitationBg,
    tag: 'Authority',
    title: 'Citation Building',
    desc: 'Establishing authoritative backlinks and consistent NAP data across healthcare directories.',
    to: '/citation-building',
  },
];

export const ROW_2: PairCard[] = [
  {
    ariaId: 'card-hl',
    bg: HyperLocalBg,
    tag: 'Geo-Targeted',
    title: 'Hyper-Local Content',
    desc: 'Creating programmatic landing pages for surrounding Texas municipalities and suburbs.',
    to: '/hyper-local-content',
  },
  {
    ariaId: 'card-aeo',
    bg: AeoBg,
    tag: 'AI Search',
    title: 'AEO & Schema',
    desc: 'Structuring data for AI Overviews and voice search dominance in the medical sector.',
    to: '/aeo-schema',
  },
];
