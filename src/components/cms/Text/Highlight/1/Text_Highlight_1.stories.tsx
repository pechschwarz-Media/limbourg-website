import type { Meta, StoryObj } from '@storybook/react';
import Text_Highlight_1 from './Text_Highlight_1';

const meta = {
    title: 'Text/Hightlight/1',
    component: Text_Highlight_1,
    tags: ['autodocs'],
    args: {
        text: [
            {
                text: 'Wir verbinden',
                image: {
                    url: '',
                    alt: '',
                    height: 200,
                    width: 100,
                    type: 'image',
                },
            },
            {
                text: '',
                image: {
                    url: 'placeholder.jpg',
                    alt: 'alt',
                    height: 200,
                    width: 100,
                    type: 'image',
                },
            },
            {
                text: 'klassische Werbetechnik mit smarter digitaler',
                image: {
                    url: '',
                    alt: '',
                    height: 200,
                    width: 100,
                    type: 'image',
                },
            },
            {
                text: '',
                image: {
                    url: 'placeholder.jpg',
                    alt: 'alt',
                    height: 200,
                    width: 100,
                    type: 'image',
                },
            },
            {
                text: 'Power',
                image: {
                    url: '',
                    alt: '',
                    height: 200,
                    width: 100,
                    type: 'image',
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
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Text_Highlight_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
