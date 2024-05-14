// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1170px',
      },
      colors: {
        'themePink': '#ED017F',
        'lightPink': '#FFEAF5',
        'sectionBg': '#FEF9FC',
        'titleColor': '#343434',
        'descColor': '#999999'
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '63': '63px',
      },
    },
  },
  plugins: [],
};
