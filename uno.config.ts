import { defineConfig } from "unocss";
import presetWind4 from "@unocss/preset-wind4";
import presetWebFonts from "@unocss/preset-web-fonts";
import { presetTypography } from "@unocss/preset-typography";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind4(),
    presetTypography(),
    presetWebFonts({
      themeKey: "font",
      provider: "google", // default provider
      fonts: {
        // these will extend the default theme
        sans: "Roboto",
        mono: ["JetBrains Mono"],
      },
    }),
  ],
});
