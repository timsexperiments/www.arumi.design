import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig, sharpImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://arumi.design',
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  output: 'hybrid',
  image: {
    service: sharpImageService(),
  },
  adapter: cloudflare({
    mode: 'directory',
  }),
});
