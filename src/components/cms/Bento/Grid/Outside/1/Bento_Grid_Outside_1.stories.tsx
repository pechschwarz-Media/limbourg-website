import type { Meta, StoryObj } from '@storybook/react';
import Bento_Grid_Outside_1 from './Bento_Grid_Outside_1';

const meta = {
    title: 'Bento/Grid/Outside/1',
    component: Bento_Grid_Outside_1,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h2',
                tag: 'h2',
                tagline: '',
                headline: 'Your costs, fully automated',
            },
            text: '<p>Wir helfen dir administrative Tätigkeiten um das Thema Unternehmensausgaben zureduzieren, einfach, zeitgemäß.</p>',
            buttons: [],
        },
        bentos: [
            {
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
                textblock: {
                    headline: {
                        style: 'h4',
                        tag: 'h4',
                        tagline: '',
                        headline: 'Handhelds made for hospitality',
                    },
                    text: '<p>Connected to your POS, we offer the only card reader specifically designed for restaurants.</p>',
                    buttons: [],
                },
                button: {
                    variant: 'primary',
                    link: {
                        url: '#',
                        title: 'Jetzt anfragen',
                        target: '_self',
                    },
                },
                variant: 'light',
                size: '4',
                textAlign: 'center',
            },
            {
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
                textblock: {
                    headline: {
                        style: 'h4',
                        tag: 'h4',
                        tagline: '',
                        headline: 'Handhelds made for hospitality',
                    },
                    text: '<p>Connected to your POS, we offer the only card reader specifically designed for restaurants.</p>',
                    buttons: [],
                },
                button: {
                    variant: 'primary',
                    link: {
                        url: '#',
                        title: 'Jetzt anfragen',
                        target: '_self',
                    },
                },
                variant: 'light',
                size: '2',
                textAlign: 'center',
            },
        ],
        settings: {
            variant: 'light',
            padding: {
                top: 'medium',
                bottom: 'medium',
            },
        },
    },
    argTypes: {},
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Bento_Grid_Outside_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
