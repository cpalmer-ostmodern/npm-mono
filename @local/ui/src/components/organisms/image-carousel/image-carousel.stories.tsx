import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ImageCarousel } from './image-carousel.component';

export const articles_7 = [
  {
    link: '#',
    category: 'سياحة وسفر',
    title:
      'تتميز بالفخامة والمتعة والتجارب الاستثنائية.. سر اختيار النجوم لـ"دبي" لقضاء شهر العسل',
    thumbnail:
      'https://static.hiamag.com/styles/673x940/public/2023-02/1%20%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9%20%D8%B1%D8%B3%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D9%83%D9%8A%D8%A7%D8%AC%20%D8%A7%D9%84%D8%A8%D8%B1%D9%88%D9%86%D8%B2%D9%8A%20%D8%A7%D9%84%D9%81%D8%A7%D8%AA%D8%AD%20%D8%B9%D9%84%D9%89%20%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AF%D8%A7%D8%B1%20Tiffany%20Brown.jpg?h=371c1c89&itok=OwtFLPSu',
    imageAlt: 'HIA image',
  },
  {
    link: '#',
    category: 'ترفيه',
    title:
      'مع تزايد التكهنات حول البطل الجديد.. تذكروا معنا أشهر أغاني سلسلة "جيمس بوند" على مدار 60 عاما',
    thumbnail:
      'https://static.hiamag.com/styles/792x792/public/2023-02/Kim%20Kardashian%20in%20Messika%20-%20SKIMS%20Vday%20event%20in%20Los%20Angeles%20%283%29.jpg?h=1e9c0a2a&itok=q9Lgrbef',
    imageAlt: 'HIA image',
  },
  {
    link: '#',
    category: 'ترفيه',
    title:
      'مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟',
    thumbnail:
      'https://static.hiamag.com/styles/673x940/public/2023-02/%D8%AC%D9%85%D8%A7%D9%86%D8%A7%20%D8%A7%D9%84%D8%B1%D8%A7%D8%B4%D8%AF.jpg?h=0afd75d7&itok=NN3dphAI',
    imageAlt: 'HIA image',
  },
  {
    link: '#',
    category: 'ترفيه',
    title:
      'مع تزايد التكهنات حول البطل الجديد.. تذكروا معنا أشهر أغاني سلسلة "جيمس بوند" على مدار 60 عاما',
    thumbnail:
      'https://static.hiamag.com/styles/792x792/public/2023-02/Hobeika%20HC%20bks%20S23%20049.jpg?h=ca99f3ff&itok=mRNhA-_M',
    imageAlt: 'HIA image',
  },
  {
    link: '#',
    category: 'ترفيه',
    title:
      'بينها "روز وليلى".. أعمال درامية اعتمدت على البطولة النسائية ودارت أحداثها بين المغامرة والكوميديا',
    thumbnail:
      'https://static.hiamag.com/styles/673x940/public/2023-02/%D9%84%D9%8A%D9%86%D8%A7%20%D9%86%D8%AD%D8%A7%D9%84%20%D9%86%D8%AC%D8%A7%20%D8%B4%D8%B1%D9%8A%D9%83%20%D9%88%D9%85%D8%AF%D9%8A%D8%B1%20%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%20%D9%81%D9%8A%20%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9%20%D9%86%D8%AD%D8%A7%D9%84.jpg?h=436b82d4&itok=4FHH20Zv',
    imageAlt: 'HIA image',
  },
  {
    link: '#',
    category: 'سياحة وسفر',
    title:
      'تتميز بالفخامة والمتعة والتجارب الاستثنائية.. سر اختيار النجوم لـ"دبي" لقضاء شهر العسل',
    thumbnail:
      'https://static.hiamag.com/styles/792x792/public/2023-02/_ODS9275.jpg?h=6715c897&itok=8348-tJU',
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
