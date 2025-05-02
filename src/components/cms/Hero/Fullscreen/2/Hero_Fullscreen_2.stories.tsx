import type { Meta, StoryObj } from '@storybook/react';
import Hero_Fullscreen_2 from './Hero_Fullscreen_2';

const meta: Meta<typeof Hero_Fullscreen_2> = {
    title: 'Hero/Fullscreen/2',
    component: Hero_Fullscreen_2,
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
        text: '<p>Seamless corporate cards, effortless payments and simple accounting. Everything you need, all in one place.</p>',
        button: {
            variant: 'primary',
            link: {
                title: 'Simplify your Finances',
                target: '_self',
                url: '#',
            },
        },
        align: 'top',
        textAlign: 'center',
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
        align: {
            description: 'Die vertikale Ausrichtung',
            control: { type: 'select' },
            options: ['top', 'bottom'],
        },
        textAlign: {
            description: 'Die Ausrichtung des Textes',
            control: { type: 'select' },
            options: ['center', 'left'],
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
