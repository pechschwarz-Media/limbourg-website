import type { Meta, StoryObj } from '@storybook/react';
import { Rating_2 } from './Rating_2';

const meta = {
    title: 'UI/Rating/2',
    component: Rating_2,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Rating_2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
