import type { Meta, StoryObj } from '@storybook/react';
import Feature_IconsSliderVertical_1 from './Feature_IconsSliderVertical_1';

const meta = {
    title: 'Feature/IconsSliderVertical/1',
    component: Feature_IconsSliderVertical_1,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h2',
                tag: 'h2',
                tagline: 'Expense Management',
                headline: 'Your costs, fully automated',
            },
            text: '<p>Wir helfen dir administrative Tätigkeiten um das Thema Unternehmensausgaben zureduzieren, einfach, zeitgemäß.</p>',
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
                {
                    button: {
                        variant: 'light',
                        link: {
                            url: '#',
                            title: 'Jetzt anfragen',
                            target: '_self',
                        },
                    },
                },
            ],
        },
        cards: [
            {
                icon: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 1920,
                    height: 1080,
                },
                title: 'Unabhaengig von Zeit und Ort',
                text: '<p>Dein digitaler Ausweis öffnet dir Türen – sicher und bequem. Ein Pass für alles, ohne Stress.</p>',
            },
            {
                icon: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 1920,
                    height: 1080,
                },
                title: 'Unabhaengig von Zeit und Ort',
                text: '<p>Dein digitaler Ausweis öffnet dir Türen – sicher und bequem. Ein Pass für alles, ohne Stress.</p>',
            },
            {
                icon: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 1920,
                    height: 1080,
                },
                title: 'Unabhaengig von Zeit und Ort',
                text: '<p>Dein digitaler Ausweis öffnet dir Türen – sicher und bequem. Ein Pass für alles, ohne Stress.</p>',
            },
            {
                icon: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 1920,
                    height: 1080,
                },
                title: 'Unabhaengig von Zeit und Ort',
                text: '<p>Dein digitaler Ausweis öffnet dir Türen – sicher und bequem. Ein Pass für alles, ohne Stress.</p>',
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
} satisfies Meta<typeof Feature_IconsSliderVertical_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
