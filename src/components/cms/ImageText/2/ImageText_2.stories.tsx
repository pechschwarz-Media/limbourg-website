import type { Meta, StoryObj } from '@storybook/react';
import ImageText_2 from './ImageText_2';

const meta = {
    title: 'ImageText/2',
    component: ImageText_2,
    tags: ['autodocs'],
    args: {
        button: {
            variant: 'primary',
            link: {
                url: '#',
                title: 'Jetzt anfragen',
                target: '_self',
            },
        },
        texts: [
            {
                title: 'Lorem Ipsum',
                icon: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 1920,
                    height: 1080,
                },
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
                title: 'Lorem Ipsum',
                icon: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 1920,
                    height: 1080,
                },
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
                title: 'Lorem Ipsum',
                icon: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 1920,
                    height: 1080,
                },
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
                title: 'Lorem Ipsum',
                icon: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 1920,
                    height: 1080,
                },
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
    render: (args) => {
        return (
            <div>
                <div className="h-screen text-center flex items-center justify-center">
                    <strong>Nach unten scrollen!</strong>
                </div>
                <ImageText_2 {...args} />
                <div className="h-screen"></div>
            </div>
        );
    },
} satisfies Meta<typeof ImageText_2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
