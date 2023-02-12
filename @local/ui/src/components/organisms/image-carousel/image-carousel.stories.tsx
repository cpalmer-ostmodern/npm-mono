import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ImageCarousel } from './image-carousel.component';

const articles_7 = [
  {
    link: '#',
    category: 'ترفيه',
    title:
      'مع تزايد التكهنات حول البطل الجديد.. تذكروا معنا أشهر أغاني سلسلة "جيمس بوند" على مدار 60 عاما',
    thumbnail:
      'https://static.hiamag.com/styles/792x792/public/2023-01/327035610_706178714378262_3765130515893375240_n.jpg?h=ba176ca5&itok=5Wxgl3qK',
    imageAlt: 'HIA image',
  },
  {
    link: '#',
    category: 'ترفيه',
    title:
      'مع تزايد التكهنات حول البطل الجديد.. تذكروا معنا أشهر أغاني سلسلة "جيمس بوند" على مدار 60 عاما',
    thumbnail:
      'https://static.hiamag.com/styles/792x792/public/2023-01/327035610_706178714378262_3765130515893375240_n.jpg?h=ba176ca5&itok=5Wxgl3qK',
    imageAlt: 'HIA image',
  },
  {
    link: '#',
    category: 'سياحة وسفر',
    title:
      'تتميز بالفخامة والمتعة والتجارب الاستثنائية.. سر اختيار النجوم لـ"دبي" لقضاء شهر العسل',
    thumbnail:
      'https://static.hiamag.com/styles/312x462/public/2023-01/unknown_271837517_243250924620695_2654864876574792902_n_0.jpg?h=e1d6ac5f&itok=l_a9xpi3',
    imageAlt: 'HIA image',
  },
  {
    link: '#',
    category: 'ترفيه',
    title:
      'مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟',
    thumbnail:
      'https://static.hiamag.com/styles/312x462/public/2023-01/%D8%B5%D9%88%D8%B1%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%81%D8%AD%D8%A9%20%D8%B1%D9%8A%D9%87%D8%A7%D9%86%D8%A7%20%D8%B9%D9%84%D9%89%20%D9%81%D9%8A%D8%B3%D8%A8%D9%88%D9%83%20%283%29_0.jpg?h=b7c95cc5&itok=ertW0Pxc',
    imageAlt: 'HIA image',
  },
  {
    link: '#',
    category: 'ترفيه',
    title:
      'بينها "روز وليلى".. أعمال درامية اعتمدت على البطولة النسائية ودارت أحداثها بين المغامرة والكوميديا',
    thumbnail:
      'https://static.hiamag.com/styles/312x462/public/2023-01/316298466_1504657313380341_4536514823713933198_n.jpg?h=a0e88ecc&itok=nnEOgWVp',
    imageAlt: 'HIA image',
  },
  {
    link: '#',
    category: 'سياحة وسفر',
    title:
      'تتميز بالفخامة والمتعة والتجارب الاستثنائية.. سر اختيار النجوم لـ"دبي" لقضاء شهر العسل',
    thumbnail:
      'https://static.hiamag.com/styles/312x462/public/2023-01/unknown_271837517_243250924620695_2654864876574792902_n_0.jpg?h=e1d6ac5f&itok=l_a9xpi3',
    imageAlt: 'HIA image',
  },
  {
    link: '#',
    category: 'ترفيه',
    title:
      'مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟',
    thumbnail:
      'https://static.hiamag.com/styles/312x462/public/2023-01/%D8%B5%D9%88%D8%B1%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%81%D8%AD%D8%A9%20%D8%B1%D9%8A%D9%87%D8%A7%D9%86%D8%A7%20%D8%B9%D9%84%D9%89%20%D9%81%D9%8A%D8%B3%D8%A8%D9%88%D9%83%20%283%29_0.jpg?h=b7c95cc5&itok=ertW0Pxc',
    imageAlt: 'HIA image',
  },
  {
    link: '#',
    category: 'ترفيه',
    title:
      'بينها "روز وليلى".. أعمال درامية اعتمدت على البطولة النسائية ودارت أحداثها بين المغامرة والكوميديا',
    thumbnail:
      'https://static.hiamag.com/styles/312x462/public/2023-01/316298466_1504657313380341_4536514823713933198_n.jpg?h=a0e88ecc&itok=nnEOgWVp',
    imageAlt: 'HIA image',
  },
];

export default {
  title: 'Components/ImageCarousel',
  component: ImageCarousel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Primary Button Component for CTAs, Media & Articles.',
      },
    },
  },
} as ComponentMeta<typeof ImageCarousel>;

const Template: ComponentStory<typeof ImageCarousel> = (args) => (
  <ImageCarousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  width: '100%',
  height: 'auto',
  gap: '3rem',
  direction: 'rtl',
  columns: 12,
  articles: articles_7,
  twCarouselContainer: 'col-span-9 flex',
};
