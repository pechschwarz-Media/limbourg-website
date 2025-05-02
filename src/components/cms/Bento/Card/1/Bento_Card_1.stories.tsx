import type { Meta, StoryObj } from '@storybook/react';
import Bento_Card_1 from './Bento_Card_1';

const meta = {
    title: 'Bento/Card/1',
    component: Bento_Card_1,
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
    argTypes: {
        variant: {
            description: 'Das Schema der Komponente',
            options: ['light', 'dark', 'lightPrimary', 'darkPrimary'],
            control: { type: 'select' },
        },
        size: {
            description: 'Die Größe der Card',
            options: ['1', '2', '3', '4', '5', '6'],
            control: { type: 'select' },
        },
        textAlign: {
            description: 'Die Ausrichtung des Textes',
            options: ['center', 'top', 'bottom'],
            control: { type: 'select' },
        },
        height: {
            description: 'Die Höhe der Card',
            options: ['auto', 'large', 'medium', 'small'],
            control: { type: 'select' },
        },
        padding: {
            description: 'Der Abstand der Card',
            options: ['large', 'medium', 'small', 'none'],
            control: { type: 'select' },
        },
        imagePadding: {
            description: 'Der Abstand des Bildes',
            control: { type: 'object' },
        },
        imageAlign: {
            description: 'Die Ausrichtung des Bildes',
            options: ['center', 'left', 'right'],
            control: { type: 'select' },
        },
        switchOrder: {
            description: 'Die Reihenfolge tauschen',
            control: { type: 'boolean' },
        },
    },
    render: (args) => {
        return (
            <div className="grid grid-cols-6 gap-theme-3xl">
                <Bento_Card_1 {...args} />
            </div>
        );
    },
} satisfies Meta<typeof Bento_Card_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
