import { Meta, StoryObj } from '@storybook/react-vite';
import Button from '../components/new/Button';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Button>; // Obtenemos en StoryProps las props del componente Button

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    style: {
      options: ['fill', 'outline', 'minimal'],
      control: {
        type: 'select'
      }
    },
    state: {
      options: ['default', 'disabled'],
      control: {
        type: 'select'
      }
    }
  }
};

type Story = StoryObj<StoryProps>; // Cada Historia tendrá el tipo Story

export const FillDefault: Story = {
  args: { // Props que puede recibir nuestro componente Button
    style: 'fill',
    state: 'default',
    children: 'Description'
  },
  render: (args) => <Button {...args} />
}; // Primary será nuestra Historia; podemos darle el nombre que queramos

export const FillDisabled: Story = {
  args: {
    style: 'fill',
    state: 'disabled',
    children: 'Description'
  },
  render: (args) => <Button {...args} />
};

export const OutlineDefault: Story = {
  args: {
    style: 'outline',
    state: 'default',
    children: 'Description'
  },
  render: (args) => <Button {...args} />
};

export const OutlineDisabled: Story = {
  args: {
    style: 'outline',
    state: 'disabled',
    children: 'Description'
  },
  render: (args) => <Button {...args} />
};

export const MinimalDefault: Story = {
  args: {
    style: 'minimal',
    state: 'default',
    children: 'Description'
  },
  render: (args) => <Button {...args} />
};

export const MinimalDisabled: Story = {
  args: {
    style: 'minimal',
    state: 'disabled',
    children: 'Description'
  },
  render: (args) => <Button {...args} />
};

export default meta;