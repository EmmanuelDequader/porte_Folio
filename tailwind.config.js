/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        // Palette "Algotech" — bleu nuit profond + vert émeraude,
        // inspirée de la charte transmise (capture portail).
        navy: {
          950: '#070f24',
          900: '#0b1b3d',
          800: '#122a52',
          700: '#1a3a6b',
          600: '#254b85',
        },
        emerald: {
          600: '#0c8f66',
          500: '#10a877',
          400: '#2fc38f',
          100: '#d8f5e9',
          50: '#eefbf4',
        },
      },
      backgroundImage: {
        'navy-radial':
          'radial-gradient(120% 120% at 15% 0%, #132c57 0%, #0b1b3d 55%, #070f24 100%)',
      },
      boxShadow: {
        card: '0 20px 45px -20px rgba(11, 27, 61, 0.35)',
        pill: '0 10px 25px -8px rgba(16, 168, 119, 0.55)',
      },
    },
  },
  plugins: [],
}
