import type { Meta, StoryObj } from '@storybook/react';
import Cta_FullCentered_1 from './Cta_FullCentered_1';

const meta = {
    title: 'Cta/FullCentered/1',
    component: Cta_FullCentered_1,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h1',
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
        },
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
} satisfies Meta<typeof Cta_FullCentered_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
