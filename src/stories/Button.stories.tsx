import { Meta, StoryObj } from '@storybook/react-vite';
import Button from '../components/new/Button';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Button>; // Obtenemos en StoryProps las props del componente Button

const meta: Meta<StoryProps> = {
  component: Button,
};

export default meta;

type Story = StoryObj<StoryProps>; // Cada Historia tendrá el tipo Story

export const Primary: Story = {
  args: { // Props que puede recibir nuestro componente Button
    style: 'fill',
    children: "Confirmar"
  },
  render: (args) => <Button {...args} />
} // Primary será nuestra Historia; podemos darle el nombre que queramos