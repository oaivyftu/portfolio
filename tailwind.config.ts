module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  content: ['./components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a1b1f',
        secondary: '#32343a',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { opacity: 'translateY(0px)' },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.2s 0.1s backwards',
        'fade-out': 'fade-out 0.2s 0.1s backwards',
        'slide-in': 'slide-in 0.55s cubic-bezier(.17,.67,.51,1)',
        'slide-out': 'slide-out 0.55s cubic-bezier(.17,.67,.51,1)',
      }
    }
  }
}