import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        HindSiliguri: ["'Hind Siliguri', sans-serif;"],
        Merriweather: ["'Merriweather', serif"],
        Mulish: ["'Mulish', sans-serif;"],

        sans: [
          "Mulish",
          "Merriweather",
          // "Hind Siliguri",
          ...fontFamily.sans,
        ],
        Montserrat: ["'Montserrat', sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
