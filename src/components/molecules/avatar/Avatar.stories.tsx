import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: 'select' },
    size: { control: 'select' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { panel: fn() },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'circle',
    size: 'small',
    children: 'victor zamudio',
  },
};
export const Medium: Story = {
  args: {
    variant: 'circle',
    size: 'medium',
    children: 'Victor Zamudio',
  },
};
export const Large: Story = {
  args: {
    variant: 'circle',
    size: 'large',
    children: 'Victor Zamudio',
  },
};
