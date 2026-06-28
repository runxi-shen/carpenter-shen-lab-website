# Carpenter-Shen Lab Website

Academic lab website for the **Carpenter-Shen Lab** at **Purdue University**.

## Tech Stack

- **Astro** (v5) — static site generator, content-first architecture
- **Tailwind CSS** (v3) — utility-first styling
- **MDX** — Markdown with components for content pages
- Content is managed via **Astro Content Collections** with Zod schemas in `src/content.config.ts`

## Project Structure

```
src/
├── assets/images/       ← All images (imported via Astro's asset pipeline)
│   ├── team/            ← Headshot photos
│   └── icons/           ← Research area icons (CellProfiler, Cell Painting)
├── assets/styles/
│   └── global.css       ← Design system: single Purdue-branded palette, typography, utilities
├── components/
│   ├── layout/          ← Header, Footer (ThemeSwitcher deprecated)
│   └── home/            ← Hero, ResearchHighlights, LatestNews, SoftwareShowcase, TeamPreview (legacy)
├── content/             ← Markdown content (team, papers, blog, research, software, positions)
├── layouts/             ← BaseLayout, PageLayout
└── pages/               ← Route pages
```

## Key Conventions

### Images
- All images live in `src/assets/images/` and are imported in component frontmatter (`import img from '...'`), NOT referenced as string paths from `public/`.
- `public/` is only for files the browser fetches directly by URL (favicon, robots.txt, CNAME).
- This ensures correct path resolution regardless of `base` URL config.

### Color Scheme
- Single light theme: warm cream hero/nav + white content cards, with a single dark footer.
- No theme switcher (dropped per Anne's feedback, issue #2).
- All colors use CSS custom properties in `src/assets/styles/global.css`.
- **Light surfaces** (hero, nav, content): warm cream page (#FAF7EF), white cards (#FFFFFF), dark text (#1A1A1A). Accents are Boilermaker Gold (#CFB991), Aged Gold (#8E6F3E, AA-safe for text/links), and Rush Gold (#DAAA00).
- **Footer**: the only dark surface, near-black (#1A1A1A) with Boilermaker Gold accents.
- **Legacy `--accent-teal`** now aliases Rush Gold (#DAAA00); teal is not in the Purdue palette (see [`.agents/skills/purdue-brand/reference/color.md`](.agents/skills/purdue-brand/reference/color.md)). Avoid using it for text on white (low contrast).
- Purdue brand reference: https://marcom.purdue.edu/our-brand/visual-identity/
- **Authoritative brand rules for this repo** live in [`.agents/skills/purdue-brand/`](.agents/skills/purdue-brand/) (palette, typography, logo, voice, checklist).

### Typography (Purdue-aligned free alternatives)
- Headings (`h1`-`h6`): Source Serif 4 (serif), via `--font-display` — editorial serif for the redesign
- UI/nav: Barlow (sans-serif), via `--font-heading` — replaces Acumin Pro
- Labels/badges: Barlow Condensed (sans-serif), via `--font-label` — replaces United Sans
- Body text: Source Serif 4 (serif), via `--font-body`, globally `text-align: justify`
- The hero headline and body are also justified (both-side aligned), per Runxi's preference
- Section subtitles under headers should be `text-center` (override the global justify)

### Hosting
- Currently configured for GitHub Pages at `runxi-shen.github.io/carpenter-shen-lab-website` (`base: '/carpenter-shen-lab-website'` in `astro.config.mjs` — must match the exact GitHub repo name `runxi-shen/carpenter-shen-lab-website`, otherwise every asset 404s in production)
- To switch to a Purdue domain: set `site: 'https://carpenter-shen-lab.purdue.edu'`, `base: '/'`, and add a `CNAME` file in `public/`
- GitHub Actions deploy workflow in `.github/workflows/deploy.yml`

## Content

### People
- **Anne E. Carpenter** — Principal Investigator, Professor
- **Runxi Shen** — Co-Principal Investigator, Research Assistant Professor
- **Shantanu Singh** — Senior Consultant (not shown on homepage yet, maybe shown as a team member later), still need to consult Shantanu/Anne for their preferences

### Writing Style
- No em dashes in body text. Use commas or restructure sentences instead.
- Body paragraphs are justified (both-side aligned).
- Section headers use the `.section-label` class (monospace, gold, flanked by decorative lines).

## Design workflow

Two skills cover frontend design on this repo. Use them together:

- **[purdue-brand](.agents/skills/purdue-brand/SKILL.md)** — encodes Purdue Marcom rules (palette, type, logo, voice, 77° diagonals). Loads first so brand constraints are in scope.
- **[impeccable](.agents/skills/impeccable/SKILL.md)** — design quality, composition, motion, audit. Reads `PRODUCT.md` + `DESIGN.md` at the repo root, which are already seeded with the Purdue rules.

Typical sequence for a visual change:

```
/purdue-brand audit            # baseline compliance check
/impeccable shape <surface>     # plan the design within brand constraints
/impeccable craft <surface>     # implement
/purdue-brand audit            # confirm no regressions
```

When brand and impeccable conflict (e.g. impeccable's "use OKLCH, never `#000`" vs Purdue's required exact hex values), **brand wins** for identity (colors, fonts, logo), impeccable wins for everything else (hierarchy, motion, spacing, contrast strategy).

## Development

```bash
npm run dev      # Local dev server at localhost:4321/carpenter-shen-lab
npm run build    # Static build to dist/
npm run preview  # Preview production build
```

## Reference
- The `_archive/` folder (gitignored) contains content snapshots from the original Carpenter-Singh Lab website at the Broad Institute for migration reference.
- Reference site: https://carpenter-singh-lab.broadinstitute.org/
