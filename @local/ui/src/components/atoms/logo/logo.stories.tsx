import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from './logo.component';

const Story: ComponentMeta<typeof Logo> = {
  component: Logo,
  title: 'Components/Atoms/Logo',
  parameters: {
    docs: {
      description: {
        component: 'Primary Logo Component with interchangeable text.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'color',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const HIA = Template.bind({});
HIA.args = {
  color: '',
  size: [72, 144],
  hasText: false,
  tw: 'mt-[-2rem]',
};
