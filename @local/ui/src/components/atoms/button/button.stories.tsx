import { Story, Meta } from "@storybook/react";
import React from "react";
import { useState } from "react";
import { TopicButton, TopicButtonProps } from "./button.component";

export default {
  component: TopicButton,
  title: "Components/Atoms/TopicButton",
  parameters: {
    docs: {
      description: {
        component: "Primary Button Component for CTAs, Media & Articles.",
      },
    },
  },
  icon: "icon icon-arrow-left",
  size: 28,
  tw: "p-3 bg-white border border-black flex justify-between w-1/5 text-xl",
  argTypes: {
    onClick: { action: "onClick executed!" },
  },
} as Meta;

const Template: Story<TopicButtonProps> = (args) => {
  const [clickedTopic, setClickedTopic] = useState<string | null>(null);

  return (
    <div>
      <TopicButton
        {...args}
        onClick={(topicName: React.SetStateAction<string | null>) =>
          setClickedTopic(topicName)
        }
      />
      {clickedTopic && <div>Button has been clicked: {clickedTopic}</div>}
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  topicName: "addition",
  icon: "icon icon-arrow-left",
  size: "28px",
  tw: "p-3 bg-white border border-black flex justify-between w-1/5 text-xl",
};
export const Secondary = Template.bind({});
Secondary.args = {
  topicName: "المزيد",
  icon: "icon icon-arrow-left",
  size: "28px",
  tw: "p-3 bg-white border border-black flex justify-between w-1/5 text-xl",
};

export const Rounded = Template.bind({});
Rounded.args = {
  topicName: "see all brands",
  icon: "icon icon-arrow-left",
  size: "28px",
  tw: "p-3 bg-white border border-black flex justify-between w-1/5 text-xl p-3 bg-white border border-black flex justify-between w-1/5 text-xl rounded-lg",
};
