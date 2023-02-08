import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleGrid } from './article-grid.component';

const Story: ComponentMeta<typeof ArticleGrid> = {
  component: ArticleGrid,
  title: 'Components/Organisms/ArticleGrid',
  argTypes: {
    columns: {
      control: {
        type: 'range',
        min: 1,
        max: 6,
      },
    },
    buttonText: {
      control: {
        type: 'text'
      }
    },
    buttonLink: {
      control: {
        type: 'text'
      }
    },
  },
};
export default Story;

const Template: ComponentStory<typeof ArticleGrid> = (args) => (
  <ArticleGrid
    {...args}
    articles={
      [
      {
        link: "#",
        imageOrientation: "square",
        category: "ترفيه",
        title: "مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟",
        thumbnail: 'https://static.hiamag.com/styles/312x462/public/2023-01/%D8%B5%D9%88%D8%B1%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%81%D8%AD%D8%A9%20%D8%B1%D9%8A%D9%87%D8%A7%D9%86%D8%A7%20%D8%B9%D9%84%D9%89%20%D9%81%D9%8A%D8%B3%D8%A8%D9%88%D9%83%20%283%29_0.jpg?h=b7c95cc5&itok=ertW0Pxc',
        imageAlt: 'HIA image',
      },
      {
        link: "#",
        imageOrientation: "square",
        category: "ترفيه",
        title: "مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟",
        thumbnail: 'https://static.hiamag.com/styles/312x462/public/2023-01/%D8%B5%D9%88%D8%B1%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%81%D8%AD%D8%A9%20%D8%B1%D9%8A%D9%87%D8%A7%D9%86%D8%A7%20%D8%B9%D9%84%D9%89%20%D9%81%D9%8A%D8%B3%D8%A8%D9%88%D9%83%20%283%29_0.jpg?h=b7c95cc5&itok=ertW0Pxc',
        imageAlt: 'HIA image',
      },
      {
        link: "#",
        imageOrientation: "square",
        category: "ترفيه",
        title: "مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟",
        thumbnail: 'https://static.hiamag.com/styles/312x462/public/2023-01/%D8%B5%D9%88%D8%B1%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%81%D8%AD%D8%A9%20%D8%B1%D9%8A%D9%87%D8%A7%D9%86%D8%A7%20%D8%B9%D9%84%D9%89%20%D9%81%D9%8A%D8%B3%D8%A8%D9%88%D9%83%20%283%29_0.jpg?h=b7c95cc5&itok=ertW0Pxc',
        imageAlt: 'HIA image',
      },
      {
        link: "#",
        imageOrientation: "square",
        category: "ترفيه",
        title: "مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟",
        thumbnail: 'https://static.hiamag.com/styles/312x462/public/2023-01/%D8%B5%D9%88%D8%B1%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%81%D8%AD%D8%A9%20%D8%B1%D9%8A%D9%87%D8%A7%D9%86%D8%A7%20%D8%B9%D9%84%D9%89%20%D9%81%D9%8A%D8%B3%D8%A8%D9%88%D9%83%20%283%29_0.jpg?h=b7c95cc5&itok=ertW0Pxc',
        imageAlt: 'HIA image',
      },
    ]
    }
  />
);

export const Articles = Template.bind({});
Articles.args = {
  columns: 4,
  buttonText: 'المزيد',
  buttonLink: '#',
  twArticleGrid: 'grid grid-cols-1 md:grid-cols-4 gap-12',
  twArticle: '',
  twArticleImg: 'w-full overflow-hidden',
  twArticleButtonBx: 'flex justify-center mt-14',
  twArticleButton: 'p-2 bg-white border border-black flex justify-between w-60 md:w-1/5',
  twArticleTitle: 'text-xl font-primary font-medium text-right mt-4',
  twArticleCategory: 'mt-4 text-right text-sm font-tertiary',
};