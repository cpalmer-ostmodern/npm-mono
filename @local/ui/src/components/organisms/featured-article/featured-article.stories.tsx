import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FeaturedArticle } from './featured-article.component';

const Story: ComponentMeta<typeof FeaturedArticle> = {
  component: FeaturedArticle,
  title: 'Components/Organisms/FeaturedArticle',
};
export default Story;

const Template: ComponentStory<typeof FeaturedArticle> = (args) => (
  <FeaturedArticle {...args} />
);

export const SingleFeaturedArticle = Template.bind({});
SingleFeaturedArticle.args = {
  title: 'مجوهرات',
  articleLink: '#',
  articleCategory: 'مجوهرات وساعات',
  articleCategoryLink: '#',
  articleTitle: 'تعرفي على الأحجار الكريمة الصلبة التي تناسب إطلالاتك اليومية',
  articleExcerpt:
    'عند شراء الأحجار الكريمة، ينصح الخبراء باختيار الأحجار الصلدة. في ما يلي قائمة بأحجار كريمة قوية تناسب ترصيع المجوهرات اليومية.',
  articleAuthor: 'عبير شرارة',
  articleImage:
    'https://static.hiamag.com/styles/673x940/public/2023-02/WhatsApp%20Image%202023-02-02%20at%2010.56.18%20AM.jpeg?h=ccc2f15d&itok=8MIsiFE0',
  articleImageAlt: '',
  reverseOrder: true,
  twBackground: 'py-10 bg-gray-300 lg:px-24 lg:py-24',
  twWrapper:
    'max-md:flex-col-reverse mt-8 xl:-mt-32 items-end flex justify-between gap-12 text-right text-neutral-800 xl:container px-6 xl:px-10 xl:mx-auto',
  twTitle:
    'font-primary font-bold text-5xl lg:text-8xl 2xl:text-9xl text-neutral-800',
  twArticleTextWrapper: 'flex gap-y-6 flex-col max-w-2xl 2xl:pb-28',
  twArticleCategory: 'font-tertiary',
  twArticleTitle: 'text-4xl font-primary font-bold text-neutral-800',
  twArticleExcerpt: 'font-quaternary',
  twArticleAuthor: 'font-tertiary text-xs',
  twArticleImage: '',
};
