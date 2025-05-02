import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
    title: 'UI/Tag',
    component: Tag,
    tags: ['autodocs'],
    args: {
        variant: 'info',
        className: '',
        children: 'We are hiring',
    },
    argTypes: {
        variant: {
            description: 'Das Schema des Tags',
            options: ['info', 'light', 'dark', 'lightPrimary', 'darkPrimary'],
            control: { type: 'select' },
        },
        className: {
            description: 'Zustätliche CSS-Klassen',
        },
        children: {
            description: 'Der Inhalt des Buttons',
        },
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
