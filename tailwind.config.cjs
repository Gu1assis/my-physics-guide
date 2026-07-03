/** @type {import('tailwindcss').Config} */

// Cores Catppuccin
const catppuccin = {
  // Latte (Light Mode)
  latte: {
    base: '#eff1f5',
    mantle: '#e6e9f0',
    crust: '#dce0e8',
    text: '#4c4f69',
    subtext1: '#5c5f77',
    subtext0: '#6c6f85',
    overlay2: '#7c7f93',
    overlay1: '#8c8fa1',
    overlay0: '#9ca0b0',
    surface2: '#acb0be',
    surface1: '#bcc0cc',
    surface0: '#ccd0da',
    sapphire: '#209fb5',
    blue: '#1e66f5',
    lavender: '#7287fd',
    mauve: '#8839ef',
    pink: '#ea76cb',
    maroon: '#e64553',
    peach: '#fe640b',
    yellow: '#d79921',
    green: '#40a02b',
    teal: '#0dbc79',
    sky: '#04a5e5',
  },
  // Mocha (Dark Mode)
  mocha: {
    base: '#1e1e2e',
    mantle: '#181825',
    crust: '#11111b',
    text: '#cdd6f4',
    subtext1: '#bac2de',
    subtext0: '#a6adc8',
    overlay2: '#9399b2',
    overlay1: '#7f849c',
    overlay0: '#6c7086',
    surface2: '#585b70',
    surface1: '#45475a',
    surface0: '#313244',
    sapphire: '#89dceb',
    blue: '#89b4fa',
    lavender: '#b4befe',
    mauve: '#cba6f7',
    pink: '#f5c2e7',
    maroon: '#eba0ac',
    peach: '#fab387',
    yellow: '#f9e2af',
    green: '#a6e3a1',
    teal: '#94e2d5',
    sky: '#89dceb',
  },
};

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Light mode (Latte)
        light: {
          base: catppuccin.latte.base,
          mantle: catppuccin.latte.mantle,
          crust: catppuccin.latte.crust,
          text: catppuccin.latte.text,
          subtext1: catppuccin.latte.subtext1,
          subtext0: catppuccin.latte.subtext0,
          overlay0: catppuccin.latte.overlay0,
          surface0: catppuccin.latte.surface0,
          surface1: catppuccin.latte.surface1,
          surface2: catppuccin.latte.surface2,
          mauve: catppuccin.latte.mauve,
          sapphire: catppuccin.latte.sapphire,
          blue: catppuccin.latte.blue,
          peach: catppuccin.latte.peach,
        },
        // Dark mode (Mocha)
        dark: {
          base: catppuccin.mocha.base,
          mantle: catppuccin.mocha.mantle,
          crust: catppuccin.mocha.crust,
          text: catppuccin.mocha.text,
          subtext1: catppuccin.mocha.subtext1,
          subtext0: catppuccin.mocha.subtext0,
          overlay0: catppuccin.mocha.overlay0,
          surface0: catppuccin.mocha.surface0,
          surface1: catppuccin.mocha.surface1,
          surface2: catppuccin.mocha.surface2,
          mauve: catppuccin.mocha.mauve,
          sapphire: catppuccin.mocha.sapphire,
          blue: catppuccin.mocha.blue,
          lavender: catppuccin.mocha.lavender,
          pink: catppuccin.mocha.pink,
          maroon: catppuccin.mocha.maroon,
          peach: catppuccin.mocha.peach,
          yellow: catppuccin.mocha.yellow,
          green: catppuccin.mocha.green,
          teal: catppuccin.mocha.teal,
          sky: catppuccin.mocha.sky,
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['JetBrains Mono', 'monospace'],
      },
      backgroundColor: {
        light: {
          DEFAULT: catppuccin.latte.base,
          'secondary': catppuccin.latte.mantle,
        },
        dark: {
          DEFAULT: catppuccin.mocha.base,
          'secondary': catppuccin.mocha.mantle,
        },
      },
      textColor: {
        light: {
          DEFAULT: catppuccin.latte.text,
          'secondary': catppuccin.latte.subtext0,
        },
        dark: {
          DEFAULT: catppuccin.mocha.text,
          'secondary': catppuccin.mocha.subtext0,
        },
      },
      transitionDuration: {
        300: '300ms',
      },
    },
  },
  plugins: [],
};
