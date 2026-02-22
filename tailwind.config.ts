import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        moiraBg: '#0d0f1a',
        moiraRose: '#e4577e',
        moiraCyan: '#2dd4bf'
      }
    }
  },
  plugins: []
} satisfies Config
