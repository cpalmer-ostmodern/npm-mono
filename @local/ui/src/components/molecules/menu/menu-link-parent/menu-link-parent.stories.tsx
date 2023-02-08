import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuLinkParent } from './menu-link-parent.component';

const Story: ComponentMeta<typeof MenuLinkParent> = {
  component: MenuLinkParent,
  title: 'Components/Molecules/MenuLinkParent',
};
export default Story;

const Template: ComponentStory<typeof MenuLinkParent> = (args) => (
  <div className='p-5 bg-gold-500 min-h-screen flex justify-end'>
    <ul className="flex flex-col gap-8 relative w-480 text-right">
      <MenuLinkParent
        {...args}
        href=""
        links={
          [
            {
              href: 'https://www.hiamag.com/%D8%AA%D8%B1%D9%81%D9%8A%D9%87-%D9%88%D9%81%D9%86%D9%88%D9%86/%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9-%D9%88%D8%B3%D9%81%D8%B1',
              name: 'A better description here',
              openNewTab: false,
              children: 'سياحة وسفر'
            },
          ]
        }
      >
        موضة
      </MenuLinkParent>
      <MenuLinkParent
        {...args}
        href=""
        links={
          [
            {
              href: 'https://www.hiamag.com/%D8%AA%D8%B1%D9%81%D9%8A%D9%87-%D9%88%D9%81%D9%86%D9%88%D9%86/%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9-%D9%88%D8%B3%D9%81%D8%B1',
              name: 'A better description here',
              openNewTab: false,
              children: 'سياحة وسفر'
            },
            {
              href: 'https://www.hiamag.com/%D8%AA%D8%B1%D9%81%D9%8A%D9%87-%D9%88%D9%81%D9%86%D9%88%D9%86/%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9-%D9%88%D8%B3%D9%81%D8%B1',
              name: 'A better description here',
              openNewTab: false,
              children: 'سياحة وسفر'
            },
            {
              href: 'https://www.hiamag.com/%D8%AA%D8%B1%D9%81%D9%8A%D9%87-%D9%88%D9%81%D9%86%D9%88%D9%86/%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9-%D9%88%D8%B3%D9%81%D8%B1',
              name: 'A better description here',
              openNewTab: false,
              children: 'سياحة وسفر'
            },
            {
              href: 'https://www.hiamag.com/%D8%AA%D8%B1%D9%81%D9%8A%D9%87-%D9%88%D9%81%D9%86%D9%88%D9%86/%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9-%D9%88%D8%B3%D9%81%D8%B1',
              name: 'A better description here',
              openNewTab: false,
              children: 'سياحة وسفر'
            },
            {
              href: 'https://www.hiamag.com/%D8%AA%D8%B1%D9%81%D9%8A%D9%87-%D9%88%D9%81%D9%86%D9%88%D9%86/%D8%AA%D8%B1%D9%81%D9%8A%D9%87',
              name: 'A better description here',
              openNewTab: false,
              children: 'ترفيه'
            },
          ]
        }
      >
        جمال
      </MenuLinkParent>
      <MenuLinkParent
        {...args}
        href="https://www.hiamag.com/"
        openNewTab
        links={
          [
            {
              href: 'https://www.hiamag.com/%D8%AA%D8%B1%D9%81%D9%8A%D9%87-%D9%88%D9%81%D9%86%D9%88%D9%86/%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9-%D9%88%D8%B3%D9%81%D8%B1',
              name: 'A better description here',
              openNewTab: false,
              children: 'سياحة وسفر'
            },
            {
              href: 'https://www.hiamag.com/%D8%AA%D8%B1%D9%81%D9%8A%D9%87-%D9%88%D9%81%D9%86%D9%88%D9%86/%D8%AA%D8%B1%D9%81%D9%8A%D9%87',
              name: 'A better description here',
              openNewTab: false,
              children: 'ترفيه'
            },
          ]
        }
      >
        ترفيه وفنون
      </MenuLinkParent>
    </ul>
  </div>
);

export const MenuLinks = Template.bind({});
MenuLinks.args = {
  twMenuParentLinkWrapper: "font-bold font-primary relative block w-full cursor-pointer md:before:content-none before:content-[''] before:bg-left before:absolute before:w-6 before:h-6 before:left-0 before:transform-gpu before:origin-center translate-y-2 before:duration-200 before:ease-in-out",
  twMenuSubLink: 'text-zinc-900 inline-block hover:underline',
  twMenuSubLinkCounter: 'font-primary inline pr-2 text-xs text-white',
  twMenuSubLinkWrapper: "font-primary flex flex-col relative gap-2 mt-4 pr-20 md:pr-0 md:w-full md:absolute md:top-0 md:right-full md:before:content-[''] md:before:absolute md:before:w-12 md:before:h-9 md:before:-right-16",
};
