import type { Meta, StoryObj } from '@storybook/react';
import ImageText_1 from './ImageText_1';

const meta = {
    title: 'ImageText/1',
    component: ImageText_1,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h2',
                tag: 'h2',
                tagline: 'FAQ',
                headline: 'Häufig gefragt',
            },
            text: '<p>Hier finden Sie blitzschnell Antworten auf häufig gestellte Fragen. Sie können sich jederzeit per E-Mail melden. </p><ul><li>Ramp prompts, collects, and matches receipts via SMS, mobile app, and integrations with Gmail, Lyft, and more</li><li>Ramp prompts, collects, and matches receipts via SMS, mobile app, and integrations with Gmail, Lyft, and more</li><li>Ramp prompts, collects, and matches receipts via SMS, mobile app, and integrations with Gmail, Lyft, and more</li></ul>',
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
        verticalAlign: 'top',
        switchOrder: false,
        imageSize: 'large',
        settings: {
            variant: 'light',
            padding: {
                top: 'medium',
                bottom: 'medium',
            },
        },
    },
    argTypes: {
        verticalAlign: {
            description: 'Die vertikale Ausrichtung des Inhalts',
            options: ['top', 'center', 'bottom'],
            control: { type: 'select' },
        },
        switchOrder: {
            description: 'Die Reihenfolge tauschen',
            controls: { type: 'boolean' },
        },
        imageSize: {
            description: 'Die Größe des Bildes',
            options: ['large', 'medium'],
            control: { type: 'select' },
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ImageText_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
