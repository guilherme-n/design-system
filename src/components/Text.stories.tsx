import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem ipsum.",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    size: "md",
    asChild: true,
    children: <p>Paragraph</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
