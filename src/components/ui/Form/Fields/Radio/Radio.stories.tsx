import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta = {
    title: 'UI/Form/Fields/Radio',
    component: Radio,
    tags: ['autodocs'],
    args: {
        label: 'Produkt 1',
    },
    argTypes: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
