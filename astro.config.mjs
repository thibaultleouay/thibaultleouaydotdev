import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro'
import cloudflare from "@astrojs/cloudflare";
import { unified } from '@astrojs/markdown-remark';
import { remarkModifiedTime } from './src/plugin/remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://thibaultleouay.dev',
  markdown:{
    processor: unified({ remarkPlugins: [remarkModifiedTime] })
  },
  integrations: [mdx(), sitemap(),     UnoCSS({injectReset:true})],
  output: "server",
  adapter: cloudflare({imageService: 'cloudflare'}),
  vite:{
      optimizeDeps: {
        include: ['dayjs'],
      },
    },
});
