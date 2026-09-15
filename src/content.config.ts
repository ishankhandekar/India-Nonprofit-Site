// -----------------------------------------------------------------------------
// Content Collections (Astro 5).
// This defines the SHAPE of a "project". Each project is a Markdown file in
// src/content/projects/. The schema below validates every file at build time,
// so a typo (e.g. a missing title, or an invalid status) fails loudly instead
// of shipping broken content. Add a project = add a .md file. No code changes.
// -----------------------------------------------------------------------------

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // Load every Markdown file in the projects folder.
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // A one- or two-sentence plain summary shown on cards.
    summary: z.string(),
    // Honest status so nothing looks more finished than it is.
    status: z.enum(['planning', 'in-progress', 'ongoing', 'completed']),
    // Optional real-world context. Omit if not applicable.
    partner: z.string().optional(),
    location: z.string().optional(),
    // Short category label shown on the card (e.g. "Education"). Optional.
    category: z.string().optional(),
    // Path to a photo in /public (e.g. "/images/education.jpg"). Optional —
    // cards fall back to a themed placeholder panel when there's no photo yet.
    image: z.string().optional(),
    // Controls display order on the Our Work page (lower = first).
    order: z.number().default(0),
    // Set true to feature this project on the homepage.
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
