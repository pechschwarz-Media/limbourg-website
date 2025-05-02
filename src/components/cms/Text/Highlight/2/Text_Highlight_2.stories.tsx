import type { Meta, StoryObj } from '@storybook/react';
import Text_Highlight_2 from './Text_Highlight_2';

const meta = {
    title: 'Text/Hightlight/2',
    component: Text_Highlight_2,
    tags: ['autodocs'],
    args: {
        tagline: 'stunning features',
        text: [
            {
                text: 'Scale',
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
                text: 'Smarter with Creative',
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
                text: 'Performance',
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
} satisfies Meta<typeof Text_Highlight_2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
