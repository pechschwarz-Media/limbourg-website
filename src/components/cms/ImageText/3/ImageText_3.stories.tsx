import type { Meta, StoryObj } from '@storybook/react';
import ImageText_3 from './ImageText_3';

const meta = {
    title: 'ImageText/3',
    component: ImageText_3,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h2',
                tag: 'h2',
                tagline: 'FAQ',
                headline: 'Häufig gefragt',
            },
            text: '<p>Hier finden Sie blitzschnell Antworten auf häufig gestellte Fragen. Sie können sich jederzeit per E-Mail melden.</p>',
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
            ],
        },
        texts: [
            {
                textblock: {
                    headline: {
                        style: 'h2',
                        tag: 'h2',
                        tagline: 'FAQ',
                        headline: 'Häufig gefragt',
                    },
                    text: '<p>Hier finden Sie blitzschnell Antworten auf häufig gestellte Fragen. Sie können sich jederzeit per E-Mail melden.</p>',
                    buttons: [],
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
            },
            {
                textblock: {
                    headline: {
                        style: 'h2',
                        tag: 'h2',
                        tagline: 'FAQ',
                        headline: 'Häufig gefragt',
                    },
                    text: '<p>Hier finden Sie blitzschnell Antworten auf häufig gestellte Fragen. Sie können sich jederzeit per E-Mail melden.</p>',
                    buttons: [],
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
            },
            {
                textblock: {
                    headline: {
                        style: 'h2',
                        tag: 'h2',
                        tagline: 'FAQ',
                        headline: 'Häufig gefragt',
                    },
                    text: '<p>Hier finden Sie blitzschnell Antworten auf häufig gestellte Fragen. Sie können sich jederzeit per E-Mail melden.</p>',
                    buttons: [],
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
            },
            {
                textblock: {
                    headline: {
                        style: 'h2',
                        tag: 'h2',
                        tagline: 'FAQ',
                        headline: 'Häufig gefragt',
                    },
                    text: '<p>Hier finden Sie blitzschnell Antworten auf häufig gestellte Fragen. Sie können sich jederzeit per E-Mail melden.</p>',
                    buttons: [],
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
            },
        ],
        offset: true,
        settings: {
            variant: 'light',
            padding: {
                top: 'medium',
                bottom: 'medium',
            },
        },
    },
    argTypes: {
        offset: {
            description: 'Text/Image-Sektionen versetzen',
            type: 'boolean',
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ImageText_3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
