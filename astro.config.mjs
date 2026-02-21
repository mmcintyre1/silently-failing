import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify'

export default defineConfig({
  site: 'https://silentlyfailing.com',
  output: 'static',
  adapter: netlify(),
  integrations: [tailwind()],
})
