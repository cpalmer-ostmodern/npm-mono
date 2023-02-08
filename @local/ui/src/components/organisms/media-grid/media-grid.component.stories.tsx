import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { MediaGrid } from "./media-grid.component";

const Story: ComponentMeta<typeof MediaGrid> = {
  component: MediaGrid,
  title: "Components/Organisms/MediaGrid",
  argTypes: {
    columns: {
      control: {
        type: "range",
        min: 1,
        max: 6,
      },
    },
    titleLink: {
      control: {
        type: "text",
      },
    },
    buttonText: {
      control: {
        type: "text",
      },
    },
    buttonLink: {
      control: {
        type: "text",
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof MediaGrid> = (args) => (
  <MediaGrid
    {...args}
    articles={[
      {
        link: "#",
        title:
          "مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟",
        thumbnail:
          "https://static.hiamag.com/styles/500x500/public/2023-01/episode%205.jpg?h=57024e64&itok=2Jj0FY1z",
        imageAlt: "HIA image",
        category: "جلسة فلسفة",
        date: "15 يوليو 2021",
      },
      {
        link: "#",
        title:
          "مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟",
        thumbnail:
          "https://static.hiamag.com/styles/500x500/public/2023-01/Episode-2.png?h=60a9e832&itok=IscgO1lW",
        imageAlt: "HIA image",
        category: "جلسة فلسفة",
        date: "15 يوليو 2021",
      },
      {
        link: "#",
        title:
          "مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟",
        thumbnail:
          "https://static.hiamag.com/styles/500x500/public/2023-01/Jalsat-Falsafa.jpg?h=1e66e246&itok=8dIJYj6l",
        imageAlt: "HIA image",
        category: "جلسة فلسفة",
        date: "15 يوليو 2021",
      },
    ]}
  />
);

export const MediaItems = Template.bind({});
MediaItems.args = {
  title: "بودكاست",
  titleLink: "#",
  columns: 3,
  buttonText: "المزيد",
  buttonLink: "#",
  twMediaBackground: "bg-stone-200 py-10 lg:py-24",
  twMediaGridWrapper: "xl:container px-6 xl:px-10 xl:mx-auto",
  twMediaTitle:
    "w-full text-right text-5xl lg:text-9xl font-bold font-primary mt-4 md:mt-0 mb-14 text-neutral-800",
  twMediaItemGrid: "grid grid-cols-1 grid-cols-3 gap-12",
  twMediaButton:
    "p-2 border border-black flex justify-between w-60 md:w-1/5 font-tertiary",
  twMediaButtonWrapper: "flex justify-center mt-14",
  twMediaImage: "w-full overflow-hidden aspect-square",
  twMediaItemTitle: "text-2xl font-primary text-right mt-4",
  twMediaMetaWrapper: "flex justify-end text-base font-body mt-4",
  twMediaMetaDivider:
    "relative after:content-['◆'] after:bg-no-repeat after:absolute after:w-6 after:h-6 after:right-0 after:translate-x-8 after:text-[.75rem] font-tertiary",
};
