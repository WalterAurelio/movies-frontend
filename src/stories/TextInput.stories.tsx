import { Meta, StoryObj } from '@storybook/react-vite';
import TextInput from '../components/TextInput/TextInput';
import React, { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof TextInput>;

const meta: Meta<StoryProps> = {
  component: TextInput,
  args: {
    type: 'text',
    placeholder: 'Correo electrónico'
  },
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: {
        type: 'select'
      }
    }
  }
};

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: (args) => <TextInput {...args} />
};

export const Error: Story = {
  args: {
    errorMessage: 'Ha ocurrido un error.'
  },
  render: (args) => <TextInput {...args} />
};

export default meta;