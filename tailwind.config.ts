import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071A2B',
        yellow: '#F5C400',
        mist: '#F4F6F8',
        ink: '#111827',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(7, 26, 43, 0.12)',
      },
      fontFamily: {
        heading: ['var(--font-manrope)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
