import { Meta, StoryObj } from '@storybook/react-vite';
import SearchBar from '../components/new/SearchBar';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof SearchBar>;

const meta: Meta<StoryProps> = {
  component: SearchBar
};

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {

  },
  render: () => <SearchBar />
}

export default meta;