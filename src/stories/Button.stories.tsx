import { Meta, StoryObj } from '@storybook/react-vite';
import Button from '../components/Button/Button';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Button>; // Obtenemos en StoryProps las props del componente Button

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
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
    variant: 'fill',
    state: 'default',
    children: 'Description'
  },
  render: (args) => <Button {...args} />
}; // Primary será nuestra Historia; podemos darle el nombre que queramos

export const FillDisabled: Story = {
  args: {
    variant: 'fill',
    state: 'disabled',
    children: 'Description'
  },
  render: (args) => <Button {...args} />
};

export const OutlineDefault: Story = {
  args: {
    variant: 'outline',
    state: 'default',
    children: 'Description'
  },
  render: (args) => <Button {...args} />
};

export const OutlineDisabled: Story = {
  args: {
    variant: 'outline',
    state: 'disabled',
    children: 'Description'
  },
  render: (args) => <Button {...args} />
};

export const MinimalDefault: Story = {
  args: {
    variant: 'minimal',
    state: 'default',
    children: 'Description'
  },
  render: (args) => <Button {...args} />
};

export const MinimalDisabled: Story = {
  args: {
    variant: 'minimal',
    state: 'disabled',
    children: 'Description'
  },
  render: (args) => <Button {...args} />
};

export default meta;