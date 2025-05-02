import type { Meta, StoryObj } from '@storybook/react';
import Faq_2 from './Faq_2';

const meta = {
    title: 'Faq/2',
    component: Faq_2,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h2',
                tag: 'h2',
                tagline: 'FAQ',
                headline: 'Häufig gefragt',
            },
            text: '<p>Hier finden Sie blitzschnell Antworten auf häufig gestellte Fragen. Sie können sich jederzeit per E-Mail melden. </p>',
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
} satisfies Meta<typeof Faq_2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
