/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ["Neue Haas Grotesk Text", 'system-ui', "Helvetica Neue", 'Arial', 'sans-serif']
      },
      backgroundImage: {
        'intro': "url('https://images.prismic.io/commercial-helios/fd5b599b-a7ba-4286-ab5c-21d0dd8b64da_hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C866&amp;w=1200&amp;h=866')"
      },
      keyframes:{
          linear:{
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-500%))' },
          },
          'infinite' :{
            '100%': {transform: 'translateX(calc(-100px * 5))'}
          }
      },
      animation:{
        'slide-show': 'linear 20s linear infinite',
        'infinite': 'infinite 20s linear infinite'
      }
    },
  },
  plugins: [],
};
