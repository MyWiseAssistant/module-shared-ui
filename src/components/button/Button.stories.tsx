import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { Size, Theme } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    borderRadius: {
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      control: { type: "select" },
    },
    theme: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: Theme.PRIMARY,
  label: "Contact us",
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: Theme.SECONDARY,
  label: "Contact us",
};

export const Small = Template.bind({});
Small.args = {
  size: Size.SMALL,
  label: "Contact us",
};

export const Medium = Template.bind({});
Medium.args = {
  size: Size.MEDIUM,
  label: "Contact us",
};

export const Large = Template.bind({});
Large.args = {
  size: Size.LARGE,
  label: "Contact us",
};
