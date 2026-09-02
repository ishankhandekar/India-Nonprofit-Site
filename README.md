# Nonprofit Website — Starter Template

A clean, warm, honest starter built with [Astro](https://astro.build). Static
by default (fast + accessible), with room to add JavaScript exactly where you
want it.

## Run it locally

```bash
npm install      # first time only
npm run dev       # start the dev server (usually http://localhost:4321)
```

Other commands:

```bash
npm run build     # build the production site into dist/
npm run preview   # preview the production build locally
```

## Where things live

```
src/
  config.ts              ← org name, email, socials, nav  (EDIT THIS FIRST)
  content.config.ts      ← the schema for "projects"
  content/projects/*.md  ← one Markdown file per project (add/remove freely)
  layouts/BaseLayout.astro   ← the <head>, header, footer shared by every page
  components/            ← Header, Footer, ProjectCard, PhotoPlaceholder
  pages/                 ← one file = one page/route
    index.astro          Home
    about.astro          About
    our-work.astro       Our Work
    impact.astro         Impact & Transparency
    get-involved.astro   Get Involved
  styles/global.css      ← design tokens (colors, type, spacing) + utilities
public/                  ← static files served as-is (favicon, future images)
```

## How to make common changes

- **Rename the org / change email or socials:** edit `src/config.ts`.
- **Change colors or fonts:** edit the tokens at the top of `src/styles/global.css`.
- **Add a project:** copy a file in `src/content/projects/`, edit its fields.
  Set `featured: true` to show it on the homepage.
- **Add a real photo:** replace a `<PhotoPlaceholder ... />` with a normal
  `<img src="/your-photo.jpg" alt="..." />` (put the image in `public/`).
- **Hook up volunteer/partner forms:** in `src/pages/get-involved.astro`,
  replace the `href="#"` links with a Google Form or Tally URL.

## Deploying (later)

This builds to plain static files, so it hosts free on Cloudflare Pages or
Netlify: connect the git repo, set build command `npm run build`, output `dist`.

## Honesty rules baked in

- No invented statistics — the Impact page uses honest empty-states.
- Photo placeholders are clearly labeled, never stock photos pretending to be real.
- The Donate button is intentionally disabled until donations are set up
  properly with adult oversight. See the donations checklist we discussed.
