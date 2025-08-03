import { Meta, StoryObj } from '@storybook/react-vite';
import SearchBar from '../components/SearchBar/SearchBar';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof SearchBar>;

const meta: Meta<StoryProps> = {
  component: SearchBar
};

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => <SearchBar />
}

export default meta;