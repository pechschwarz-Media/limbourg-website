import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';

const meta = {
    title: 'UI/Form/Fields/Section',
    component: Section,
    tags: ['autodocs'],
    args: {
        label: 'What are you interested in?',
    },
    argTypes: {},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
