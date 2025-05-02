import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta = {
    title: 'UI/Loader',
    component: Loader,
    tags: ['autodocs'],
    args: {
        text: 'Post werden geladen...',
    },
    argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
