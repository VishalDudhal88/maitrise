/**
 * Single source of truth for brand identity, contacts, navigation and socials.
 * Extracted from the live site (maitrise.in). Templates read from here — do NOT
 * hardcode brand values elsewhere.
 */
export const site = {
  name: 'Maitrise',
  legalName: 'Mait-Rise Associates',
  fullName: 'MAIT-RISE ASSOCIATES',
  url: 'https://maitrise.in',
  tagline: 'Interior Designing and Consulting Firm',
  description:
    'Maitrise Associates — an interior designing and consulting firm creating unique, cohesive spaces that balance luxury, functionality and timeless style. Established 2017, Sangli, Maharashtra.',
  established: 2017,
  founders: 'Sonali & Bhushan Bafna',
  developer: { name: 'Webster Solutions', url: 'https://webster.co.in' },

  contact: {
    email: 'maitriseassociates@gmail.com',
    phone: '7709053814',
    phoneHref: '+917709053814',
    location: 'Sangli, Maharashtra',
    locality: 'Sangli',
    region: 'Maharashtra',
  },

  /** Primary navigation — mirrors the live menu (paths unchanged). */
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/projects/' },
  ] as const,

  cta: { label: 'Contact Us', href: '/contact/' },

  /** Live footer "Services" list. */
  services: ['Commercial Office Spaces', 'Commercial Restaurant', 'Residential Flats'],

  socials: [] as { label: string; href: string; icon: string }[],
};

export type Site = typeof site;
