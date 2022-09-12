import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hero from "./index";
import { getImageUrl } from "../../api/cloudinary";
import Button, { Theme, Size } from "../button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Hero",
  component: Hero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    pageTitle: { control: "string" },
  },
} as ComponentMeta<typeof Hero>;

const props = {
  pageTitle: "Page Title",
  image: getImageUrl("Images/Extensions/001"),
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hero> = (args) => (
  <Hero {...args} {...props} />
);
const HomeTemplate: ComponentStory<typeof Hero> = (args) => (
  <Hero {...args} {...props}>
    <h2>Heading</h2>
    <h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </h4>
    <Button
      theme={Theme.PRIMARY}
      size={Size.MEDIUM}
      href={"/href"}
      backgroundColor="#e2702a"
      hoverBackgroundColor="#ffffff"
      borderRadius={1}
    >
      Click here
    </Button>
  </Hero>
);

export const HomeHero = HomeTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HomeHero.args = {};

export const PageHero = Template.bind({});
PageHero.args = {};
