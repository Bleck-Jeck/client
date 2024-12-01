import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '4': 'repeat(4, minmax(150px, 311px))',
        '2': 'repeat(2, minmax(219px, 311px))',
        '2/4': 'repeat(2, minmax(50%, 311px))',
        '2xl': 'repeat(2,minmax(0,1fr));',


      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes:{
        marquee: {
          '0%':{ transform:'translateX(0%)'},
          '100%':{transform:'translateX(-100%)'}
        }
      },
      animation: {
        carousel: 'marquee 60s liner infinite'
      }
    },
  },
  plugins: [],
}
export default config
