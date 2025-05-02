import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        variant: 'glass',
        as: 'link',
        link: {
            title: 'Button',
            target: '_self',
            url: '#',
        },
        children: 'Button',
    },
    argTypes: {
        as: {
            description: 'Der Typ des Buttons.',
            options: ['button', 'link'],
            control: { type: 'select' },
        },
        variant: {
            description: 'Das Schema der Navbar.',
            options: ['glass', 'light', 'dark', 'primary'],
            control: { type: 'select' },
        },
        link: {
            description: 'Das ACF-Link-Feld.',
        },
        children: {
            description: 'Der Inhalt des Buttons.',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
