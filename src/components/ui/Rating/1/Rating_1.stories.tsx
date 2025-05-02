import type { Meta, StoryObj } from '@storybook/react';
import { Rating_1 } from './Rating_1';

const meta = {
    title: 'UI/Rating/1',
    component: Rating_1,
    tags: ['autodocs'],
    args: {
        className: '',
        variant: 'light',
    },
    argTypes: {
        className: {
            description: 'Zustätliche CSS-Klassen',
        },
        variant: {
            description: 'Das Schema des Ratings',
            options: ['light', 'dark'],
            control: { type: 'select' },
        },
    },
} satisfies Meta<typeof Rating_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
