// uno.config.ts
import { 
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
} from 'unocss'

export default defineConfig({
  presets: [
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        serif: [{ name: 'Lora', weights: ['400', '500', '600', '700'] }],
        sans: [{ name: 'Atkinson Hyperlegible', weights: ['400', '700'] }],
        mono: [{ name: 'JetBrains Mono', weights: ['400'] }],
      },
    }),
    presetWind4({
      preflights: {}
    }),
  ],
})