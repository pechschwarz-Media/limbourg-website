import type { Meta, StoryObj } from '@storybook/react';
import Footer_1 from './Footer_1';

const meta = {
    title: 'Footer/1',
    component: Footer_1,
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
} satisfies Meta<typeof Footer_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
