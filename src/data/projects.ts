/**
 * The 6 published project pages, reproduced verbatim from the live site.
 * Residential projects live at /residential-flat/<slug>/ and commercial ones at
 * /commercial-space/<slug>/ — identical paths to the live WordPress site.
 *
 * Gallery images live in src/assets/projects/<slug>/NN.jpg (order preserved) and
 * are optimised at build via astro:assets. Live alt text was empty, so we derive
 * descriptive alt from the project name.
 */
import type { ImageMetadata } from 'astro';

const galleries = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/projects/*/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

export interface ProjectMeta { label: string; value: string; }
export interface Project {
  slug: string;
  category: 'residential' | 'commercial';
  categoryPath: string;
  categoryLabel: string;
  name: string;
  heading: string;
  brief: string;
  role: string[];
  meta: ProjectMeta[];
  gallery: ImageMetadata[];
  cover: ImageMetadata;
  alt: string;
}

const ROLE = [
  'Design all the spaces of residence',
  'Create working drawing.',
  'Make 3d models and rendered view.',
  'Site execution and material selection.',
];

const raw: Omit<Project, 'gallery' | 'cover' | 'alt' | 'categoryPath' | 'categoryLabel'>[] = [
  {
    slug: 'dreamscape', category: 'residential', name: 'Dreamscape',
    heading: 'Dreamscape – A Pastel Kids’ Room Design',
    brief: 'The brief required was, a residence for young Couple with their parents and 2 children who desired to fulfil he space requirements with playful colors and aesthetics, as well spaces filed with some aristy which will seamlessly blend together with design.',
    role: ROLE,
    meta: [
      { label: 'Project Type', value: '3BHK Residential Flat' },
      { label: 'Carpet Area', value: '913 sq.ft' },
      { label: 'Location', value: 'Sangli' },
    ],
  },
  {
    slug: 'modern-warmth', category: 'residential', name: 'Modern Warmth',
    heading: 'Modern Warmth – A Contemporary Flat Design',
    brief: 'The brief required was, a residence for a couple with their parents and child who desired to fulfil the space requirements with monochrome and subtle palette, with minimalism and clean design.',
    role: ROLE,
    meta: [
      { label: 'Project Type', value: '3BHK Residential Flat' },
      { label: 'Carpet Area', value: '1498 sq.ft' },
      { label: 'Location', value: 'Pune' },
    ],
  },
  {
    slug: 'urban-comfort', category: 'residential', name: 'Urban Comfort',
    heading: '2BHK Residential Flat',
    brief: 'The brief required was, a residence for a couple with their parents who desired to fulfil the space requirements with pop of colours with subtle paneling.',
    role: ROLE,
    meta: [
      { label: 'Project Type', value: '2 BHK Residential Flat' },
      { label: 'Carpet Area', value: '841 sq.ft' },
      { label: 'Location', value: 'Pune' },
    ],
  },
  {
    slug: 'shendge', category: 'residential', name: 'Shendge',
    heading: 'Mr. Shendge',
    brief: 'The brief required was, a residence for a couple with their two daughters who wished to have elegant paneling with customized palate for each room, they wanted every room to have a different concept.',
    role: ROLE,
    meta: [
      { label: 'Project Type', value: '4 BHK Residential Flat' },
      { label: 'Carpet Area', value: '2052 sq.ft' },
      { label: 'Location', value: 'Sangli' },
    ],
  },
  {
    slug: 'elegant-workspace', category: 'commercial', name: 'Elegant Workspace',
    heading: 'Elegant Workspace',
    brief: 'The brief required for this commercial space was, to mainly focus on layout, material and functionality of office.',
    role: ROLE,
    meta: [
      { label: 'Project Type', value: 'Commercial Office' },
      { label: 'Office 1 Carpet Area', value: '360 sq.ft' },
      { label: 'Office 2 Carpet Area', value: '476 sq.ft' },
      { label: 'Location', value: 'Pune' },
    ],
  },
  {
    slug: 'contemporary-workspace', category: 'commercial', name: 'Contemporary Workspace',
    heading: 'Contemporary Workspace',
    brief: 'The brief required for this commercial space was, to enhance the workflow through design, productivity, and employee well-being, the design approach for this project also focused on circulation space, functionality of each cabin.',
    role: ROLE,
    meta: [
      { label: 'Project Type', value: 'Commercial Office' },
      { label: 'Carpet Area', value: '893 sq.ft' },
      { label: 'Location', value: 'Sangli' },
    ],
  },
];

export const projects: Project[] = raw.map((p) => {
  const gallery = Object.keys(galleries)
    .filter((k) => k.startsWith(`../assets/projects/${p.slug}/`))
    .sort()
    .map((k) => galleries[k].default);
  if (!gallery.length) throw new Error(`No gallery images for ${p.slug}`);
  const categoryPath = p.category === 'residential' ? '/residential-flat/' : '/commercial-space/';
  const categoryLabel = p.category === 'residential' ? 'Residential Flat' : 'Commercial Space';
  return {
    ...p,
    categoryPath,
    categoryLabel,
    gallery,
    cover: gallery[0],
    alt: `${p.name} — ${categoryLabel} interior by Maitrise Associates`,
  };
});

export const projectBySlug = new Map(projects.map((p) => [p.slug, p]));
export const residential = projects.filter((p) => p.category === 'residential');
export const commercial = projects.filter((p) => p.category === 'commercial');
