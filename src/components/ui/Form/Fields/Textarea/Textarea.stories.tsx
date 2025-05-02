import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta = {
    title: 'UI/Form/Fields/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    args: {
        label: 'Vorname',
        rows: 5,
    },
    argTypes: {
        className: {
            description: 'Zustätliche CSS-Klassen',
        },
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
