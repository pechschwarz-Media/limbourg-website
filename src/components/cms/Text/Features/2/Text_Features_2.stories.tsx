import type { Meta, StoryObj } from '@storybook/react';
import Text_Features_2 from './Text_Features_2';

const meta = {
    title: 'Text/Features/2',
    component: Text_Features_2,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                tagline: 'Shine With Skill',
                style: 'h0',
                tag: 'h2',
                headline: 'Präzision, Kraft, Verlass – Hydraulik in bester Form. #HydraulicsRedefined',
            },
            text: '',
            buttons: [],
        },
        bullets: [
            {
                icon: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 27,
                    height: 27,
                },
                text: '24/7 Service',
            },
            {
                icon: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 27,
                    height: 27,
                },
                text: 'Flexible Fertigung',
            },
            {
                icon: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 27,
                    height: 27,
                },
                text: 'Präzise Auslegung',
            },
            {
                icon: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 27,
                    height: 27,
                },
                text: 'Weltweit',
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
} satisfies Meta<typeof Text_Features_2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
