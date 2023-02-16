import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleFeatureGrid } from './article-feature-grid.component';

const Story: ComponentMeta<typeof ArticleFeatureGrid> = {
  component: ArticleFeatureGrid,
  title: 'Components/Organisms/ArticleFeatureGrid',
};
export default Story;

const Template: ComponentStory<typeof ArticleFeatureGrid> = (args) => (
  <ArticleFeatureGrid
    {...args}
    articles={[
      {
        link: '#',
        category: 'مجوهرات وساعات',
        title: 'نصائح لمساعدتك على اختيار مجوهراتك يوم زفافك',
        thumbnail:
          'https://static.hiamag.com/styles/792x792/public/2023-02/WhatsApp%20Image%202023-02-05%20at%206.21.06%20PM.jpeg?h=9d5babbf&itok=VQ-icAlo',
        imageAlt: 'HIA image',
      },
      {
        link: '#',
        category: 'مجوهرات وساعات',
        title:
          'يثير اللون الأحمر المشاعر القوية... لذا تألقي بأجمل مجوهرات اللون الأحمر في شهر الحب',
        thumbnail:
          'https://static.hiamag.com/styles/792x792/public/2023-02/%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9%20%D9%85%D9%86%20%D9%85%D9%88%D9%82%D8%B9%20%D9%85%D8%AC%D9%88%D9%87%D8%B1%D8%A7%D8%AA%20%20Jacquie%20Aiche.jpg?h=436b82d4&itok=hAgR6UHg',
        imageAlt: 'HIA image',
      },
    ]}
  />
);

export const Articles = Template.bind({});
Articles.args = {
  buttonText: 'المزيد',
  buttonLink: '#',
  reverseOrder: true,
  twArticleFeatureGridGrid: 'md:flex md:gap-12',
  twArticleFeatureGridWrapper: 'grid grid-cols-1 md:grid-cols-2 gap-12',
  twArticle: '',
  twArticleImg: 'w-full overflow-hidden',
  twArticleButtonBx: 'flex justify-center items-center mt-14 lg:mt-0',
  twArticleButton:
    'p-2 bg-white border font-tertiary border-black flex justify-between w-40',
  twArticleTitle: 'text-xl font-primary font-medium text-right mt-4',
  twArticleCategory: 'mt-4 text-right text-sm font-tertiary',
  twArticleFeatureGridBackground: 'bg-white py-14',
  twArticleFeatureGridContainer: 'max-w-container px-6 xl:mx-auto',
};
