import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // ─── Hosting Configuration ───────────────────────────────────────────
  // GitHub Pages at https://runxi-shen.github.io/carpenter-shen-lab-website/
  // `base` MUST be the exact GitHub repo name (carpenter-shen-lab-website)
  // or every asset in production will 404 while local dev still works.
  site: 'https://runxi-shen.github.io',
  base: '/carpenter-shen-lab-website',
  // ─────────────────────────────────────────────────────────────────────

  output: 'static',
  integrations: [
    tailwind(),
    mdx(),
  ],
});
