import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavBar from './nav-bar.component';

export default {
  title: 'Components/Organisms/NavBar',
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

const hamburger_links = [
  {
    title: 'موضة',
    sublinks: [
      {
        href: '#',
        name: 'A better description here',
        openNewTab: false,
        children: 'صيحات وإطلالات',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'مجوهرات وساعات',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'عروض الأزياء',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'مشاهير وموضة',
      },
    ],
  },
  {
    title: 'جمال',
    sublinks: [
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'صيحات جمالية',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'جديد المستحضرات',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'نصائح جمالية',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'مشاهير وجمال',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'الشعر',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'العناية بالبشرة',
      },
    ],
  },
  {
    title: 'ترفيه وفنون',
    sublinks: [
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'سياحة وسفر',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'ترفيه',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'مطبخ',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'فنون',
      },
    ],
  },
  {
    title: 'لايف ستايل',
    sublinks: [
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'سياحة وسفر',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'أعراس',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'تطوير الذات',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'مِهَن وأعمال',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'صحة ورشاقة',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'أبراج',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'علاقات',
      },
    ],
  },
  {
    title: 'أخبار',
  },
  {
    title: 'فيديو',
    sublinks: [
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'موضة',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'جمال',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'ترفيه وفنون',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'لايف ستايل',
      },
      {
        href: '#',
        name: '',
        openNewTab: false,
        children: 'أخبار',
      },
    ],
  },
  {
    title: 'بودكاست',
  },
];

const Template: ComponentStory<typeof NavBar> = (args) => (
  <NavBar {...args} links={hamburger_links} />
);

export const Default = Template.bind({});
Default.args = {
  logoSize: [72, 144],
  logoTxt: true,
  logoTw: 'mt-[-2rem] mb-[-2rem]',
  tw: 'relative pl-7 pr-5 pt-3 pb-4 md:pt-4 md:px-10 md:pb-5 bg-white lg:px-20 flex justify-between w-100 sticky',
  magazineCoverImage:
    'https://static.hiamag.com/styles/640xauto/public/2023-01/JAN%20338%20SP-Final_page-0001.jpg?itok=qP0PInVl',
  magazineIssueNumber: '338',
  magazineIssueDetails: 'عدد سبتمبر 2022',
  twMagazineCoverImage:
    'max-w-[158px] md:max-w-sm md:p-5 lg:p-16 md:border border-gold-600',
  twMagazineIssueText: 'font-quaternary md:self-end',
  twMagazineIssueNumber: 'font-quaternary text-5xl',
  twMagazineWrapper:
    'max-md:flex max-md:flex-row-reverse max-md:px-6 max-md:pb-8 max-md:border-b max-md:border-black max-md:flex max-md:justify-between max-md:gap-4',
  twSearchOverlay:
    '-z-10 p-5 bg-neutral-400 min-h-screen flex justify-center items-center absolute left-0 top-0 w-full',
  twMenuOverlay:
    'block h-screen md:flex justify-between w-full -z-10 md:p-5 pt-32 md:pt-40 bg-gold-500 min-h-screen absolute left-0 top-0 w-full overflow-y-scroll',
  twMenuLinksWrapper:
    'flex flex-col gap-8 relative w-full md:max-w-lg xl:max-w-none xl:w-480 text-right px-8 md:px-0 max-md:border-b border-black pb-12 md:pb-0',
  twMenuContentWrapper:
    'max-w-container md:px-6 xl:mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-20 w-full justify-between md:border-t border-black pt-9',
  twMenuParentLinkWrapper:
    "font-bold font-primary relative block w-full cursor-pointer xl:before:content-none before:content-[''] before:bg-left before:absolute before:w-6 before:h-6 before:left-0 before:transform-gpu before:origin-center translate-y-2 before:duration-200 before:ease-in-out",
  twMenuSubLink: 'text-zinc-900 inline-block hover:underline',
  twMenuSubLinkCounter: 'font-primary inline pr-2 text-xs text-white',
  twMenuSubLinkWrapper:
    "font-primary relative mt-4 pr-20 flex flex-col gap-2 xl:pr-0 xl:w-full xl:absolute xl:top-0 xl:right-full xl:before:content-[''] xl:before:absolute xl:before:w-12 xl:before:h-9 xl:before:-right-16",
};
