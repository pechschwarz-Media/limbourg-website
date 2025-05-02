import type { Meta, StoryObj } from '@storybook/react';
import Bento_Grid_1 from './Bento_Grid_1';

const meta = {
    title: 'Bento/Grid/1',
    component: Bento_Grid_1,
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
                variant: 'light',
                size: '4',
                textAlign: 'center',
                height: 'auto',
                padding: 'medium',
                imagePadding: {
                    top: 'default',
                    right: 'default',
                    bottom: 'default',
                    left: 'default',
                },
                imageAlign: 'center',
                switchOrder: false,
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
                variant: 'light',
                size: '2',
                textAlign: 'center',
                height: 'auto',
                padding: 'medium',
                imagePadding: {
                    top: 'default',
                    right: 'default',
                    bottom: 'default',
                    left: 'default',
                },
                imageAlign: 'right',
                switchOrder: false,
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
                variant: 'light',
                size: '6',
                textAlign: 'center',
                height: 'auto',
                padding: 'medium',
                imagePadding: {
                    top: 'default',
                    right: 'default',
                    bottom: 'default',
                    left: 'default',
                },
                imageAlign: 'center',
                switchOrder: false,
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
} satisfies Meta<typeof Bento_Grid_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
