import type { Meta, StoryObj } from "@storybook/react";
import { Result } from "../app/components";

const meta: Meta<typeof Result> = {
  title: "Components/Result",
  component: Result,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ResultComponent: Story = {
  args: {
    tipAmountPerPerson: 0,
    totalAmountPerPerson: 0,
    onResetClicked: () => null,
  },
};
