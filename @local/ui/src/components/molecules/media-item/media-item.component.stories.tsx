import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MediaItem } from './media-item.component';

const Story: ComponentMeta<typeof MediaItem> = {
  component: MediaItem,
  title: 'Components/Molecules/MediaItem',
  argTypes: {
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
    date: {
      control: {
        type: 'text'
      }
    },
    category: {
      control: {
        type: 'text'
      }
    },
  },
};
export default Story;

const Template: ComponentStory<typeof MediaItem> = (args) => (
  <div className='max-w-xs'>
    <MediaItem
      {...args}
      link="#"
      imageAlt='HIA image'
    />
  </div>
);

export const SingleMediaItem = Template.bind({});
SingleMediaItem.args = {
  thumbnail: 'https://static.hiamag.com/styles/312x462/public/2023-01/%D8%B5%D9%88%D8%B1%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%81%D8%AD%D8%A9%20%D8%B1%D9%8A%D9%87%D8%A7%D9%86%D8%A7%20%D8%B9%D9%84%D9%89%20%D9%81%D9%8A%D8%B3%D8%A8%D9%88%D9%83%20%283%29_0.jpg?h=b7c95cc5&itok=ertW0Pxc',
  title: 'مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟',
  category: 'جلسة فلسفة',
  date: '15 يوليو 2021',
  twMediaImage: "w-full overflow-hidden aspect-square",
  twMediaItemTitle: "text-2xl font-primary text-right mt-4",
  twMediaMetaWrapper: "flex justify-end text-base font-body mt-4",
  twMediaMetaDivider: "relative after:content-['◆'] after:bg-no-repeat after:absolute after:w-6 after:h-6 after:right-0 after:translate-x-8 after:text-[.75rem] font-tertiary",
};