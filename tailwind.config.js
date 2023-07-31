/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },
      colors: {
        gray: {
          50: '#f4f4f4',
          100: '#bebebf',
          300: '#727275',
          500: '#2F2F2F',
          600: '#272727',
          650: '#232323',
          700: '#1A1A1A',
          900: '#121212',
        },
        green: {
          200: '#00FD87',
          500: '#087D47',
          700: '#04361F',
          800: '#022213',
          900: '#041B10',
        },
      },
    },
  },
  plugins: [],
}
