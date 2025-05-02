import type { Meta, StoryObj } from '@storybook/react';
import Hero_Fullscreen_4 from './Hero_Fullscreen_4';

const meta = {
    title: 'Hero/Fullscreen/4',
    component: Hero_Fullscreen_4,
    tags: ['autodocs'],
    args: {
        opacity: 20,
        media: {
            media: {
                url: 'placeholder.jpg',
                type: 'image',
                alt: '',
                width: 1920,
                height: 1080,
            },
            media_mobile: false,
        },
        headline: {
            style: 'h0',
            tag: 'h1',
            tagline: 'Adaptive Power 2.0',
            headline: 'Your costs, fully automated',
        },
        subline: 'DJI Air 3S: Dual-Camera Drone for Travel Photography',
        settings: {
            variant: 'light',
            padding: {
                top: 'medium',
                bottom: 'medium',
            },
        },
    },
    argTypes: {
        opacity: {
            description: 'Die Deckkraft des Overlays (in Prozent)',
            type: 'number',
            control: {
                type: 'range',
                max: 100,
                min: 0,
            },
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Hero_Fullscreen_4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
