tailwind.config = {
  theme: {
    extend: {
      colors: {
        taupe: {
          DEFAULT: '#F5EFE6',
          deep: '#D8C9A7',
          light: '#FAF7F1'
        },
        ink: '#3E2B1F',
        bone: '#F5EFE6',
        wood: '#B7956B',
        'wood-light': '#D8C9A7',
        sand: '#D8C9A7',
        ivory: '#F5EFE6',
        brass: '#B7956B',
        earth: '#6B4F3A',
        charcoal: '#2E2A26',
        chocolate: '#3E2B1F'
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        baskerville: ['"Libre Baskerville"', 'Georgia', 'serif']
      }
    }
  }
};
document.documentElement.classList.add('js');
