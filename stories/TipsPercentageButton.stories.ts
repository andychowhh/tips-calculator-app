import type { Meta, StoryObj } from "@storybook/react";
import { TipsPercentageButton } from "../app/components/Button";

const meta: Meta<typeof TipsPercentageButton> = {
  title: "Components/TipsPercentageButton",
  component: TipsPercentageButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TipsPercentageButtonComponent: Story = {
  args: {
    value: 5,
    isCustomized: false,
    onClick: () => null,
  },
};

export const TipsPercentageButtonCustomized: Story = {
  args: {
    isCustomized: true,
    onClick: () => null,
  },
};
