import type { Meta, StoryObj } from '@storybook/react';
import { SliderPagination } from './SliderPagination';

const meta = {
    title: 'UI/SliderPagination',
    component: SliderPagination,
    tags: ['autodocs'],
    args: {
        variant: 'light',
        label: 'Zeige',
        amount: 4,
        activeIndex: 0,
        autoplay: false,
        duration: 6000,
    },
    argTypes: {
        label: {
            description: 'ARIA-Label des Buttons',
        },
        amount: {
            description: 'Die Anzahl der Slides',
            type: 'number',
        },
        activeIndex: {
            description: 'Der aktive Index',
            type: 'number',
        },
        autoplay: {
            description: 'Autoplay-Status des Sliders',
            type: 'boolean',
        },
        duration: {
            description: 'Die Dauer des Autoplays in Millisekunden',
            type: 'number',
        },
        variant: {
            description: 'Das Schema des Ratings',
            options: ['light', 'dark', 'lightPrimary', 'darkPrimary'],
            control: { type: 'select' },
        },
    },
} satisfies Meta<typeof SliderPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
