import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Hero } from './hero.component';

const Story: ComponentMeta<typeof Hero> = {
  component: Hero,
  title: 'Components/Organisms/Hero',
};
export default Story;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const FullWidth = Template.bind({});
FullWidth.args = {
  title: 'عروض أزياء مجموعات ربيع وصيف 2023',
  tagline: 'Spring / Summer 2023 Fashion Shows',
  link: '#',
  buttonText: 'المزيد',
  bgImage:
    'https://static.hiamag.com/styles/1680x729/public/2022-12/xxl1%20%281%29.jpeg?h=0d167294&itok=f1qpSL6A',
  twTitle:
    'text-3xl md:text-6xl xl:text-8xl font-primary md:font-bold !leading-tight',
  twTagline: 'text-2xl lg:text-3xl font-quaternary',
  twHeroContainer:
    'relative justify-center flex items-center xl:container px-6 xl:px-10 mx-auto h-[80vh] md:h-[40vw]',
  twHeroWrapper: 'bg-cover bg-black text-white text-center md:text-right',
  twHeroButtonBx:
    'w-full left-0 md:left-10 2xl:left-auto absolute bottom-14 mt-14',
  twHeroButton:
    'mx-auto md:mx-0 p-2 border font-tertiary border-white flex justify-between w-60',
};
