/** @type {import('tailwindcss').Config} */
// tailwind.config.js

// const merge = require('merge-deep');

// const theme = require('tailwindcss/defaultConfig');
// let colors = null;

// const loop = (colors) => {
//   let c = {};

//   for (const [
//     key,
//     value,
//   ] of Object.entries(colors.colors)) {
//     c = {
//       ...c,
//       [key]:
//         key === 'black' ||
//         key === 'white'
//           ? value.value
//           : value,
//     };

//     console.log(c);
//   }
// };

// Try and merge any colors styles with the selected theme
colors = require('./.tmp/colors.json');
try {
  // loop(colors);
  // let d = JSON.parse(colors);
} catch (e) {
  //   colors = [];
  console.log(e);
}
console.log(colors);

module.exports = {
  // ...merge(theme, colors),
  content: [
    'app/[lng]/**/*.{js,ts,jsx,tsx}',
    'app/[lng]/*.{js,ts,jsx,tsx}',
    'app/i18n/*.{js,ts,jsx,tsx}',
    'app/i18n/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        portrait: '3 / 4',
      },
      minWidth: {
        80: '20rem',
      },
      maxWidth: {
        container: '90rem',
      },
      width: {
        480: '30rem',
      },
      colors: colors.colors,
      fontFamily: {
        primary: [
          'Laureen Pro',
          'serif',
        ],
        secondary: [
          'Greta Arabic',
          'sans-serif',
        ],
        tertiary: [
          'Graphik Arabic',
          'sans-serif',
        ],
        quaternary: [
          'Saol Text',
          'sans-serif',
        ],
      },
    },
    plugins: [],
    safelist: [
      'grid',
      'grid-cols-12',
      'col-span-9',
      'h-30',
      'h-28',
      'hidden',
      'relative',
      'pl-7',
      'pr-5',
      'pt-3',
      'pb-4',
      'md:pt-4',
      'md:px-10',
      'md:pb-5',
      'bg-white',
      'lg:px-20',
      'flex',
      'justify-between',
      'w-100',
      'sticky',
      'z-30',
      'visible',
      'md:hidden',
      'fixed',
      'w-full',
      'bg-white',
      'ease-in',
      'rounded',
      'flex',
      'border',
      'bg-red-500',
      'p-5',
      'overflow-hidden',
      'aspect-square',
      'aspect-portrait',
      'grid-cols-4',
      'md:order-1',
      'md:order-2',
      'md:block',
      'hidden',
      'order-1',
      'order-2',
      'order-3',
      'max-md:min-w-80',
      'md:grid-cols-3',
      'gap-6',
      'relative',
      'hidden',
      'md:block',
      'mb-[3vh]',
      '!mt-60',
      'grid',
      'grid-cols-12',
      'col-span-12',
      'col-span-11',
      'col-span-10',
      'col-span-9',
      'col-span-8',
      'col-span-7',
      'col-span-6',
      'col-span-5',
      'col-span-4',
      'col-span-3',
      'col-span-2',
      'col-span-1',
      'absolute',
      'block',
      'w-0',
      '-r-25',
      'mt-[45%]',
      '-mr-25',
      'text-right',
      'font-bold',
      'font-primary',
      'text-9xl',
      'text-grey-100',
      'ml-10',
      'aspect-square',
      'aspect-portrait',
    ],
  },
};
