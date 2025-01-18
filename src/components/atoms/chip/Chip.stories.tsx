import type { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faLocation } from '@fortawesome/free-solid-svg-icons';

const meta = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select' },
  },
  // args: { onClick: () => fn() },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    variant: 'filled',
    size: 'small',
  },
};
export const Medium: Story = {
  args: {
    variant: 'filled',
    size: 'medium',
  },
};
export const Large: Story = {
  args: {
    variant: 'filled',
    size: 'large',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};
export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};
export const Primary: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    variant: 'filled',
    color: 'secondary',
  },
};
export const Success: Story = {
  args: {
    variant: 'filled',
    color: 'success',
  },
};
export const Warning: Story = {
  args: {
    variant: 'filled',
    color: 'warning',
  },
};
export const Error: Story = {
  args: {
    variant: 'filled',
    color: 'error',
  },
};
export const Deleteable: Story = {
  args: {
    variant: 'outlined',
    deletable: true,
    color: 'error',
    onClick: () => console.log('this chip has been deleted'),
  },
};
export const WithAvatar: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    label: 'Avatar',
    startSlot: <FontAwesomeIcon className="startSlot" icon={faCircleUser} />,
  },
};
export const WithIcon: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'medium',
    label: 'With Icon',
    startSlot: <FontAwesomeIcon className="startSlot" icon={faLocation} />,
  },
};
