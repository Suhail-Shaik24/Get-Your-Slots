/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      gap: {
        'custom': '1rem',
      },
      backgroundImage: {
        'button-gradient': 'radial-gradient(389.55% 216.33% at 46.69% 50.01%, #8D4523 0%, #BD8E62 33.33%, #CDB17D 66.67%, #E6E4E2 100%)',
        'radial-gradient' : 'radial-gradient(389.55% 216.33% at 46.69% 50.01%, #8D4523 0%, #BD8E62 33.33%, #CDB17D 66.67%, #E6E4E2 100%)',
      },
    },
    screens: {
      'sm': '450px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'sml': '500px'
    },
  },
  plugins: [],
}