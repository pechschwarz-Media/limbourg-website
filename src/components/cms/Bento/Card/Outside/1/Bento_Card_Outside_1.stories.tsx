import type { Meta, StoryObj } from '@storybook/react';
import Bento_Card_Outside_1 from './Bento_Card_Outside_1';

const meta = {
    title: 'Bento/Card/Outside/1',
    component: Bento_Card_Outside_1,
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
        button: {
            variant: 'primary',
            link: {
                url: '#',
                title: 'Jetzt anfragen',
                target: '_self',
            },
        },
        textAlign: 'center',
        variant: 'light',
        size: '3',
    },
    argTypes: {
        textAlign: {
            description: 'Die Ausrichtung des Textes',
            options: ['left', 'center'],
            control: { type: 'select' },
        },
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
    },
    render: (args) => {
        return (
            <div className="grid grid-cols-6 gap-theme-3xl">
                <Bento_Card_Outside_1 {...args} />
            </div>
        );
    },
} satisfies Meta<typeof Bento_Card_Outside_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
