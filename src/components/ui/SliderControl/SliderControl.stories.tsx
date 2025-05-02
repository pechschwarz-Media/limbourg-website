import type { Meta, StoryObj } from '@storybook/react';
import { SliderControl } from './SliderControl';

const meta = {
    title: 'UI/SliderControl',
    component: SliderControl,
    tags: ['autodocs'],
    args: {
        className: '',
        variant: 'light',
        disabled: false,
        label: 'Zurück',
        direction: 'prev',
    },
    argTypes: {
        className: {
            description: 'Zustätliche CSS-Klassen',
        },
        disabled: {
            description: 'Deaktiviert den Button',
        },
        label: {
            description: 'ARIA-Label des Buttons',
        },
        direction: {
            description: 'Die Richtung des Buttons',
            options: ['prev', 'next'],
            control: { type: 'select' },
        },
        variant: {
            description: 'Das Schema des Ratings',
            options: ['light', 'dark', 'lightPrimary', 'darkPrimary'],
            control: { type: 'select' },
        },
    },
} satisfies Meta<typeof SliderControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
