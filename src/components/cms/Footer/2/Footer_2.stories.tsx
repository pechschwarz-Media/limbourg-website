import type { Meta, StoryObj } from '@storybook/react';
import Footer_2 from './Footer_2';

const meta = {
    title: 'Footer/2',
    component: Footer_2,
    tags: ['autodocs'],
    args: {
        variant: 'light',
    },
    argTypes: {
        variant: {
            description: 'Das Schema des Footers',
            options: ['light', 'dark'],
            control: { type: 'select' },
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Footer_2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
