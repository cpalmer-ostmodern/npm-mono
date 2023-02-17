import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { VideoArticleBanner } from './video-article-banner.component';

const Story: ComponentMeta<typeof VideoArticleBanner> = {
  component: VideoArticleBanner,
  title: 'Components/Organisms/VideoArticleBanner',
};
export default Story;

const Template: ComponentStory<typeof VideoArticleBanner> = (args) => (
  <VideoArticleBanner
    {...args}
    articles={[
      {
        link: '#',
        category: 'موضة',
        title:
          'النعومة والأنوثة والشغف في اللون الزهري.. عليك باعتماده هذا الموسم',
        thumbnail:
          'https://static.hiamag.com/styles/792x446/public/2023-02/New%20York%20RESIZED.jpg?h=82f92a78&itok=1my9s6d3',
        imageAlt: 'HIA image',
      },
      {
        link: '#',
        category: '',
        title: 'اختاري هذه الصيحات قبل نهاية موسم خريف وشتاء 2023',
        thumbnail:
          'https://static.hiamag.com/styles/792x446/public/2023-02/New%20York%20RESIZED.jpg?h=82f92a78&itok=1my9s6d3',
        imageAlt: 'HIA image',
      },
    ]}
  />
);

export const VideoArticles = Template.bind({});
VideoArticles.args = {
  title: 'فيديو',
  buttonText: 'المزيد',
  twTitle:
    'font-primary text-right font-bold text-5xl md:text-9xl mb-10 md:mb-20',
  twArticleGrid:
    'flex flex-col md:flex-row justify-between gap-y-12 md:gap-x-20 xl:gap-x-52',
  twArticle: '',
  twArticleImg: 'aspect-video mb-4 relative',
  twArticleImgIcon: 'absolute bottom-0 origin-bottom-left',
  twPrimaryArticle: 'md:max-w-md',
  twSecondaryArticle: 'lg:text-2xl',
  twSecondaryArticleIconSize: 'scale-50',
  twArticleButtonBx: 'mt-14',
  twArticleButton:
    'absolute p-2 border border-white flex justify-between w-48 font-tertiary',
  twArticleTitle: 'font-primary text-right mb-2',
  twArticleCategory: 'font-tertiary text-right',
  twContainer: 'max-w-container px-6 xl:mx-auto mb-24',
  twBackground: 'bg-zinc-800 text-white py-11',
};
