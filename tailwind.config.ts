// src/types/theme.ts
export type Theme = 'light' | 'dark' | 'system';

// src/constants/theme.ts
export const COLORS = {
  primary: {
    DEFAULT: "#511DCE",
    50: "#EEE8FB",
    100: "#DED1F7",
    200: "#BEA3EF",
    300: "#9D76E8",
    400: "#7D48E0",
    500: "#511DCE",
    600: "#4017A4",
    700: "#30117B",
    800: "#200B52",
    900: "#100629",
    950: "#080315",
  },
  secondary: {
    DEFAULT: "#181A12",
    50: "#E6E7E4",
    100: "#CDCFC9",
    200: "#9B9F8E",
    300: "#696F53",
    400: "#373F18",
    500: "#181A12",
    600: "#13150F",
    700: "#0E100B",
    800: "#0A0A08",
    900: "#050504",
    950: "#020202",
  },
  gray: {
    50: '#F3F4F6',
    75:'#EFF0F2',
    100: '#EBEDF1',
    200: '#E6E9ED',
    300: '#DBDDE1',
    400: '#D7DAE1',
    500: '#C6C9CD',
    600: '#BABAB8',
    700: '#9A9A98',
    800: '#7A7A78',
    900: '#5A5A58',
    950: '#3A3A38', 
  }
} as const;

// Modified tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        gray:COLORS.gray,
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
      fontWeight:{
        extrablack:'1000',
    },
    },
   
  },
  plugins: [],
  darkMode: 'class',
}