import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewsletterBanner } from './newsletter-banner.component';

const Story: ComponentMeta<typeof NewsletterBanner> = {
  component: NewsletterBanner,
  title: 'Components/Organisms/NewsletterBanner',
};
export default Story;

const Template: ComponentStory<typeof NewsletterBanner> = (args) => (
  <NewsletterBanner {...args} />
);

export const Newsletter = Template.bind({});
Newsletter.args = {
  title: 'Newsletter',
  text: 'اشترك في النشرة الإخبارية المتطورة لتقديم أفضل الأخبار لدينا بطريقة منظمة. حدد اهتماماتك للحصول على أفضل تجربة',
  buttonText: 'إضافة',
  twTitle: 'text-6xl md:text-7xl xl:text-9xl font-quaternary text-neutral-800',
  twText: 'font-secondary text-right text-xl font-light mb-4',
  twTitleWrapper: 'col-span-3 flex justify-end items-center',
  twFormErrorMessage: 'text-red-600 font-primary',
  twFormCheckbox: 'ml-3',
  twFormCheckboxWrapper: 'flex gap-4 justify-end mb-16',
  twFormButton:
    'p-2 border font-tertiary border-black flex justify-between w-40',
  twFormInput: 'w-full bg-transparent border-zinc-800 border-b text-right py-4',
  twFormWrapper: 'col-span-2 text-right font-tertiary font-light',
  twContainer:
    'xl:container px-6 xl:px-10 xl:mx-auto flex flex-col-reverse gap-y-8 lg:grid md:grid-cols-5',
  twBackground: 'bg-orange-50 py-24',
};
