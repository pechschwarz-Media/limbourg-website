import type { Meta, StoryObj } from '@storybook/react';
import Hero_Fullscreen_1 from './Hero_Fullscreen_1';

const meta: Meta<typeof Hero_Fullscreen_1> = {
    title: 'Hero/Fullscreen/1',
    component: Hero_Fullscreen_1,
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
            tagline: '',
            headline: 'Your costs, fully automated',
        },
        video_overlay: {
            url: 'placeholder.mp4',
            type: 'video',
            alt: '',
            width: 1920,
            height: 1080,
        },
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
