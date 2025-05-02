import type { Meta, StoryObj } from '@storybook/react';
import ImageText_Fullscreen_1 from './ImageText_Fullscreen_1';

const meta = {
    title: 'ImageText/Fullscreen/1',
    component: ImageText_Fullscreen_1,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h2',
                tag: 'h2',
                tagline: 'FAQ',
                headline: 'Häufig gefragt',
            },
            text: '<p>Our unique end-to-end hardware plus software offering is what makes Cowboy different to any other bike on the market.</p>',
            buttons: [
                {
                    button: {
                        variant: 'primary',
                        link: {
                            url: '#',
                            title: 'Jetzt anfragen',
                            target: '_self',
                        },
                    },
                },
                {
                    button: {
                        variant: 'glass',
                        link: {
                            url: '#',
                            title: 'Jetzt anfragen',
                            target: '_self',
                        },
                    },
                },
            ],
        },
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
        opacity: 20,
        textAlign: 'left',
        align: 'center',
        fullheight: true,
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
            options: ['top', 'bottom', 'center'],
        },
        textAlign: {
            description: 'Die Ausrichtung des Textes',
            control: { type: 'select' },
            options: ['center', 'left'],
        },
        fullheight: {
            description: 'Die Größe der Komponente',
            control: { type: 'boolean' },
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ImageText_Fullscreen_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
