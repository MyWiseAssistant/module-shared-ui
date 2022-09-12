import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Page from "./index";
import { getImageUrl } from "../../api/cloudinary";
import Button, { Size, Theme } from "../button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Page",
  component: Page,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    maxWidth: { control: "string" },
  },
} as ComponentMeta<typeof Page>;

const props = {
  pageName: "Page Title",
  hero: {
    pageTitle: "Page Title",
    image: getImageUrl("Images/Extensions/001"),
    height: "400px",
    children: (
      <>
        <h2>Heading</h2>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
      </>
    ),
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Page> = (args) => (
  <Page {...args} {...props}>
    <div style={{ backgroundColor: "red", height: "100vh" }}>Hello</div>
  </Page>
);

export const PageHero = Template.bind({});
PageHero.args = {};
