import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../app/components";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputWithDollarSign: Story = {
  args: {
    withDollarSign: true,
    value: "50",
    onChange: () => null,
  },
};

export const InputWithoutDollarSign: Story = {
  args: {
    withDollarSign: false,
    value: "50",
    onChange: () => null,
  },
};
