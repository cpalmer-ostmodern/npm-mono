import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchToggle } from "./search-toggle";

const Story: ComponentMeta<typeof SearchToggle> = {
  component: SearchToggle,
  title: "Components/Molecules/SearchToggle",
  parameters: {
    docs: {
      description: {
        component: "Search Icon Open / Close animation",
      },
    },
  },
  argTypes: {
    color: {
      control: "color",
    },
    size: {
      control: {
        type: "range",
        min: 24,
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof SearchToggle> = (args) => (
  <SearchToggle {...args} />
);

export const Search = Template.bind({});
Search.args = {
  color: "",
  size: 24,
};
