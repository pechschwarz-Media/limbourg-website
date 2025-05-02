import type { Meta, StoryObj } from '@storybook/react';
import { Tagline } from './Tagline';

const meta = {
    title: 'UI/Tagline',
    component: Tagline,
    tags: ['autodocs'],
    args: {
        className: '',
        children: 'Lorem ipsum dolor sit amet',
    },
    argTypes: {
        className: {
            description: 'Zustätliche CSS-Klassen',
        },
        children: {
            description: 'Der Inhalt der Tagline',
        },
    },
} satisfies Meta<typeof Tagline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
