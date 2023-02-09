import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavBar from './nav-bar.component';

export default {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Primary Nav Bar for the Navigation Bar Component Header',
      },
    },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoSize: [72, 144],
  logoTxt: true,
  logoTw: 'mt-[-2rem] mb-[-2rem]',
  tw: 'relative pl-7 pr-5 pt-3 pb-4 md:pt-4 md:px-10 md:pb-5 bg-white lg:px-20 flex justify-between w-100 sticky',
  twSearchOverlay:
    '-z-10 p-5 bg-neutral-400 min-h-screen flex justify-center items-center absolute left-0 top-0 w-full',
  twMenuOverlay:
    '-z-10 p-5 bg-gold-500 min-h-screen flex justify-center items-center absolute left-0 top-0 w-full',
};
