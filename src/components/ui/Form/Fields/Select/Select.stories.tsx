import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
    title: 'UI/Form/Fields/Select',
    component: Select,
    tags: ['autodocs'],
    args: {
        label: 'Vorname',
        options: [{ value: 'Lorem ipsum', label: 'Lorem ipsum' }],
    },
    argTypes: {
        className: {
            description: 'Zustätliche CSS-Klassen',
        },
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
