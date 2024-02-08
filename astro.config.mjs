import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://arumi.design',
  integrations: [mdx(), sitemap(), tailwind(), icon()],
});
