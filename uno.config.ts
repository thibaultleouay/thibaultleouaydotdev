import { defineConfig } from "unocss";
import presetWind4 from "@unocss/preset-wind4";
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetWind4(),
    presetWebFonts({
      provider: 'bunny', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono'],

      },
    })],
});
