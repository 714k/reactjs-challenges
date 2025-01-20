import type { Meta, StoryObj } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGhost } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { ButtonProps } from './button.interface';
import { ATOMIC_DESIGN } from '../../../constants';
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
    isButtonIcon: { control: 'boolean' },
    startSlot: { control: 'object' },
    endSlot: { control: 'object' },
    onClick: { action: 'clicked' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Primary',
    ariaLabel: 'Primary',
    onClick: () => console.log('Hi'),
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Secondary',
    ariaLabel: 'Secondary',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    label: 'Success',
    ariaLabel: 'Success',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    label: 'Warning',
    ariaLabel: 'Warning',
  },
};

export const Error: Story = {
  args: {
    color: 'error',
    label: 'Error',
    ariaLabel: 'Error',
  },
};

export const Large: Story = {
  args: {
    color: 'primary',
    size: 'large',
    label: 'Large',
    ariaLabel: 'Large',
    rounded: false,
  },
};

export const Medium: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    label: 'Medium',
    ariaLabel: 'Medium',
    rounded: false,
  },
};

export const Small: Story = {
  args: {
    color: 'primary',
    size: 'small',
    label: 'Small',
    ariaLabel: 'Small',
    rounded: false,
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    color: 'primary',
    size: 'small',
    label: 'Rounded',
    ariaLabel: 'Rounded',
  },
};

export const Outlined: Story = {
  args: {
    rounded: true,
    color: 'primary',
    size: 'medium',
    label: 'Outlined',
    ariaLabel: 'Outlined',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    rounded: false,
    color: 'primary',
    size: 'medium',
    label: 'Text',
    ariaLabel: 'Text',
    variant: 'text',
  },
};

export const WithIcon = {
  args: {
    variant: 'outlined',
    color: 'secondary',
    label: 'Pacman',
    ariaLabel: 'Pacman',
    isButtonIcon: false,
    endSlot: (
      <FontAwesomeIcon className="endSlot" icon={faGhost} color="inherit" />
    ),
  },
  render: (args: ButtonProps) => <Button {...args} />,
};

export const ButtonIcon = {
  args: {
    ariaLabel: 'Notification',
    variant: 'contained',
    color: 'secondary',
    rounded: true,
    isButtonIcon: true,
    icon: <FontAwesomeIcon className="endSlot" icon={faBell} />,
  },
  render: (args: ButtonProps) => <Button {...args} />,
};
