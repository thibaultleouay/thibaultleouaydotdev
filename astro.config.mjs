import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro'
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://thibaultleouay.dev',
  integrations: [mdx(), sitemap(),     UnoCSS({injectReset:true})],
  output: "server",
  adapter: cloudflare()
});
