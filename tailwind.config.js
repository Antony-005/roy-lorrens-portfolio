/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark:    '#0D1117',
        surface: '#161B22',
        surface2:'#1C2331',
        gold:    '#C9A84C',
        'gold-light': '#E8C96A',
        'gold-dim':   '#8A6E2F',
        'text-primary':  '#F0EDE6',
        'text-muted':    '#8892A0',
        'text-dim':      '#5A6478',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll-line': 'scrollLine 1.8s ease-in-out infinite',
        'fade-up':     'fadeUp 0.7s ease forwards',
        'typewriter':  'blink 0.8s step-end infinite',
      },
      keyframes: {
        scrollLine: {
          '0%,100%': { opacity: '0.3', transform: 'scaleY(1)' },
          '50%':     { opacity: '1',   transform: 'scaleY(1.2)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        'gold-line':   'linear-gradient(to right, transparent, #8A6E2F, transparent)',
      },
    },
  },
  plugins: [],
}
