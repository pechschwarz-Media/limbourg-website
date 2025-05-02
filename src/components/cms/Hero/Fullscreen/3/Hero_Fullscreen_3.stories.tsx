import type { Meta, StoryObj } from '@storybook/react';
import Hero_Fullscreen_3 from './Hero_Fullscreen_3';

const meta: Meta<typeof Hero_Fullscreen_3> = {
    title: 'Hero/Fullscreen/3',
    component: Hero_Fullscreen_3,
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
        button: {
            variant: 'primary',
            link: {
                title: 'Simplify your Finances',
                target: '_self',
                url: '#',
            },
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
