import type { Meta, StoryObj } from '@storybook/react-vite';

import BuggyShowcase from './BuggyShowcase';

const meta = {
  component: BuggyShowcase,
} satisfies Meta<typeof BuggyShowcase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};