import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import Button from './Button';

const meta = {
  title: 'Example/ButtonShared',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Tect",
  args: {
    children: "asa",
    width: 50
  },
};