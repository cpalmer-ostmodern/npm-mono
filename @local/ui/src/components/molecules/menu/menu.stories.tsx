import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from './menu';

const Story: ComponentMeta<typeof Menu> = {
  component: Menu,
  title: 'Components/Molecules/Menu',
  parameters: {
    docs: {
      description: {
        component: 'Hamburger Menu Icon Open / Close animation',
      },
    },
  },
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: {
        type: 'range',
        min: 24,
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const NavMenu = Template.bind({});
NavMenu.args = {
  color: '#000000',
  size: '24',
};
