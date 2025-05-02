import type { Meta, StoryObj } from '@storybook/react';
import Faq_1 from './Faq_1';

const meta = {
    title: 'Faq/1',
    component: Faq_1,
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
            buttons: [
                {
                    button: {
                        variant: 'primary',
                        link: {
                            url: '#',
                            title: 'Lorem Ipsum',
                            target: '_self',
                        },
                    },
                },
            ],
        },
        faq: [
            {
                question: 'Wie schnell werden Karten bereitgestellt und wann kann man sie verwenden?',
                text: '<p>Nach erfolgter Freigabe werden die Karten sofort ausgestellt und können über digitale Wallets, wie Apple und Google Pay, oder als physische Karten verwendet werden.</p>',
            },
            {
                question: 'Wie schnell werden Karten bereitgestellt und wann kann man sie verwenden?',
                text: '<p>Nach erfolgter Freigabe werden die Karten sofort ausgestellt und können über digitale Wallets, wie Apple und Google Pay, oder als physische Karten verwendet werden.</p>',
            },
            {
                question: 'Wie schnell werden Karten bereitgestellt und wann kann man sie verwenden?',
                text: '<p>Nach erfolgter Freigabe werden die Karten sofort ausgestellt und können über digitale Wallets, wie Apple und Google Pay, oder als physische Karten verwendet werden.</p>',
            },
            {
                question: 'Wie schnell werden Karten bereitgestellt und wann kann man sie verwenden?',
                text: '<p>Nach erfolgter Freigabe werden die Karten sofort ausgestellt und können über digitale Wallets, wie Apple und Google Pay, oder als physische Karten verwendet werden.</p>',
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
} satisfies Meta<typeof Faq_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
