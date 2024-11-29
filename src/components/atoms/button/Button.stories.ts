import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    style: { control: 'object' },
    color: { control: 'select' },
    size: { control: 'select' },
    variant: { control: 'select' },
    onClick: { action: 'clicked' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Secondary',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    label: 'Success',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    label: 'Warning',
  },
};

export const Error: Story = {
  args: {
    color: 'error',
    label: 'Error',
  },
};

export const Large: Story = {
  args: {
    color: 'primary',
    size: 'large',
    label: 'Large',
    rounded: false,
  },
};

export const Medium: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    label: 'Medium',
    rounded: false,
  },
};

export const Small: Story = {
  args: {
    color: 'primary',
    size: 'small',
    label: 'Small',
    rounded: false,
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    color: 'primary',
    size: 'small',
    label: 'Small',
  },
};

export const Outlined: Story = {
  args: {
    rounded: true,
    color: 'primary',
    size: 'medium',
    label: 'Outlined',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    rounded: false,
    color: 'primary',
    size: 'medium',
    label: 'Text',
    variant: 'text',
  },
};
