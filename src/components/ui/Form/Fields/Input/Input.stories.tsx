import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'UI/Form/Fields/Input',
    component: Input,
    tags: ['autodocs'],
    args: {
        label: 'Vorname',
    },
    argTypes: {
        className: {
            description: 'Zustätliche CSS-Klassen',
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
