import type { Meta, StoryObj } from '@storybook/react';
import Textfield from './Textfield';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../atoms';

const meta = {
  title: 'Molecules/Textfield',
  component: Textfield,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Textfield>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelText: 'Default',
    type: 'text',
    placeholder: 'First name',
    id: 'FirstName',
  },
};
export const Required: Story = {
  args: {
    labelText: 'Required',
    type: 'text',
    placeholder: 'First name',
    id: 'firstName',
    required: true,
  },
};
export const Disabled: Story = {
  args: {
    labelText: 'Disabled',
    type: 'text',
    placeholder: 'First name',
    id: 'firstName',
    disabled: true,
  },
};
export const ReadOnly: Story = {
  args: {
    labelText: 'Read only',
    type: 'text',
    placeholder: 'First name',
    id: 'firstName',
    readOnly: true,
    value: 'Elliot',
  },
};

export const Password: Story = {
  args: {
    labelText: 'Password',
    type: 'password',
    id: 'firstName',
    placeholder: 'Secret',
    endSlot: (
      <Button
        variant="outlined"
        rounded={true}
        isButtonIcon
        size="small"
        icon={<FontAwesomeIcon icon={faEye} />}
        onClick={() => console.log('show/hide password')}
      />
    ),
  },
};
export const Number: Story = {
  args: {
    labelText: 'Number',
    type: 'number',
    id: 'creditCard',
    placeholder: '123456',
  },
};
export const Email: Story = {
  args: {
    labelText: 'Email',
    type: 'email',
    id: 'email',
    placeholder: 'elliot@evil.corp',
  },
};
export const Tel: Story = {
  args: {
    labelText: 'Tel',
    type: 'tel',
    id: 'tel',
    placeholder: '+52 1234 5678 90',
  },
};
export const URL: Story = {
  args: {
    labelText: 'URL',
    type: 'url',
    id: 'url',
    placeholder: 'https://evilcorp.com',
  },
};
export const WithIcon: Story = {
  args: {
    labelText: 'With icon',
    type: 'text',
    id: 'amount',
    placeholder: 'Amount',
    startSlot: '$',
  },
};
export const WithLeftLabel: Story = {
  args: {
    labelText: 'With left label',
    type: 'text',
    id: 'lastname',
    labelPosition: 'label-left',
    placeholder: 'lastname',
  },
};
export const WithInformativeText: Story = {
  args: {
    labelText: 'With helper text',
    informativeText:
      'This is informative text that can be useful is some ocasions',
    type: 'password',
    id: 'pass',
    value: 'secretpassword123',
    helperText: 'Incorrect password',
    rounded: false,
  },
};
export const Rounded: Story = {
  args: {
    labelText: 'Rounded',
    type: 'text',
    id: 'rounded',
    placeholder: 'Label looks weird?',
    rounded: true,
  },
};
export const WithHelperText: Story = {
  args: {
    labelText: 'Rounded',
    type: 'password',
    id: 'pass',
    value: 'wrong password',
    helperText: 'Incorrect password',
  },
};
