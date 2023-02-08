import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { ImageBanner } from "./image-banner.component";

export default {
  title: "Components/ImageBanner",
  component: ImageBanner,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Primary Button Component for CTAs, Media & Articles.",
      },
    },
  },
} as ComponentMeta<typeof ImageBanner>;

const Template: ComponentStory<typeof ImageBanner> = (args) => (
  <ImageBanner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "اخترنا لكم",
  body: "Luminous Fantasy روعة البدايات الجديدة مع Van Cleef & Arpels",
  tw: "md:-mt-[20px] md:h-[441px] w-auto bg-center flex w-screen mb-24 justify-center",
  twTxtBx:
    "w-auto 2xl:w-full 2xl:mx-0 xl:mx-50 lg:mx-32 md:mt-[64.5vh] md:mx-6 text-base block absolute bg-white text-center pt-[24px] pr-[16px] pb-[24px] pl-[16px] z-10 mt-[26rem] mb-20 border-b-[1px] border-black border-solid",
  twTitle: "text-lg mb-4",
  twBody: "text-5xl",
  desktopImg:
    "https://static.hiamag.com/styles/1680x729/public/2023-01/MAIN%20JAN.jpg?h=bde28bee&itok=0XO87sBJ",
  mobileImg:
    "https://static.hiamag.com/styles/375x471/public/2023-01/MAIN%20MOBILE.jpg?h=827069f2&itok=JVtZQfy8",
  media: "(min-width: 769px)",
  twImg: "md:h-auto w-full h-[50vh] object-cover object-top",
};

export const WithImage = Template.bind({});
WithImage.args = {
  ...Default.args,
  desktopImg:
    "https://static.hiamag.com/styles/375x471/public/2023-01/MAIN%20MOBILE.jpg?h=827069f2&itok=JVtZQfy8",
};
