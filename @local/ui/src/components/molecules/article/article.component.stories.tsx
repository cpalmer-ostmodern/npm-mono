import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article } from './article.component';

const Story: ComponentMeta<typeof Article> = {
  component: Article,
  title: 'Components/Molecules/Article',
  argTypes: {
    imageOrientation: {
      description: 'Image orientation options',
      control: {
        type: 'inline-radio',
        options: ['square', 'portrait']
      },
    },
    thumbnail: {
      control: {
        type: 'text'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    category: {
      control: {
        type: 'text'
      }
    },
    tw: {
      control: {
        type: 'text'
      }
    },
    twImg: {
      control: {
        type: 'text'
      }
    },
    twTitle: {
      control: {
        type: 'text'
      }
    },
    twCategory: {
      control: {
        type: 'text'
      }
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Article> = (args) => (
  <div className='max-w-xs'>
    <Article
      {...args}
      link="#"
      imageAlt='HIA image'
    />
  </div>
);

export const SingleArticle = Template.bind({});
SingleArticle.args = {
  imageOrientation: 'square',
  thumbnail: 'https://static.hiamag.com/styles/312x462/public/2023-01/%D8%B5%D9%88%D8%B1%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%81%D8%AD%D8%A9%20%D8%B1%D9%8A%D9%87%D8%A7%D9%86%D8%A7%20%D8%B9%D9%84%D9%89%20%D9%81%D9%8A%D8%B3%D8%A8%D9%88%D9%83%20%283%29_0.jpg?h=b7c95cc5&itok=ertW0Pxc',
  title: 'مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟',
  category: 'ترفيه',
  tw: '',
  twImg: 'w-full overflow-hidden',
  twTitle: 'text-xl font-primary font-medium text-right mt-4',
  twCategory: 'mt-4 text-right text-sm font-tertiary',
};