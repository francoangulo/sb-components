import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    //     size: { control: "inline-radio" },
    color: { control: "inline-radio" },
    fontColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Hello World",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All caps label",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary label",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom color label",
    fontColor: "#0d0aa8",
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    size: "h1",
    label: "Custom background label",
    fontColor: "#ffffff",
    backgroundColor: "black",
  },
};
