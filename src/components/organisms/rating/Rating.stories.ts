import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Rating from './Rating';

const meta = {
  title: 'Molecules/Rating',
  component: Rating,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;
