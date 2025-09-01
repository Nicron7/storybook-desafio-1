import type { Meta, StoryObj } from "@storybook/react-vite";

import BuggyShowcase from "./BuggyShowcase";

const meta = {
  title: "Buggy Showcase",
  component: BuggyShowcase,
  tags: ["autodocs"],
} satisfies Meta<typeof BuggyShowcase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: { variant: "contained" },
};

export const Outlined: Story = {
  args: { variant: "outlined" },
};

export const Loading: Story = {
  args: { variant: "contained", isLoading: true },
};

export const Mobile: Story = {
  args: { variant: "contained", isMobile: true },
};

export const LoadingMobile: Story = {
  args: { variant: "contained", isLoading: true, isMobile: true },
};

export const OutlinedMobile: Story = {
  args: { variant: "outlined", isMobile: true },
};

export const MoreInputs: Story = {
  args: { variant: "contained", moreInputs: true },
};

export const MoreInputsMobile: Story = {
  args: { variant: "contained", moreInputs: true, isMobile: true },
};
