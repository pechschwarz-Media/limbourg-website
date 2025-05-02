import type { Meta, StoryObj } from '@storybook/react';
import Hero_HalfHorizontal_1 from './Hero_HalfHorizontal_1';

const meta = {
    title: 'Hero/HalfHorizontal/1',
    component: Hero_HalfHorizontal_1,
    tags: ['autodocs'],
    args: {
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
        text: '<p>Wir helfen dir administrative Tätigkeiten um das Thema Unternehmensausgaben zureduzieren, einfach, zeitgemäß.</p>',
        buttons: [
            {
                button: {
                    variant: 'primary',
                    link: {
                        title: 'Simplify your Finances',
                        target: '_self',
                        url: '#',
                    },
                },
            },
            {
                button: {
                    variant: 'light',
                    link: {
                        title: 'Simplify your Finances',
                        target: '_self',
                        url: '#',
                    },
                },
            },
        ],
        facts: [
            { value: '946k', description: 'Tips have been collected in our app world wide.' },
            { value: '300k+', description: 'Tips have been collected in our app world wide.' },
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
} satisfies Meta<typeof Hero_HalfHorizontal_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
