import type { Meta, StoryObj } from '@storybook/react';
import Text_Features_1 from './Text_Features_1';

const meta = {
    title: 'Text/Features/1',
    component: Text_Features_1,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h2',
                tag: 'h2',
                tagline: 'stunning features',
                headline:
                    'The DJI Flip is your pocket-sized powerhouse, delivering stunning 4K video and smart features for effortless, on-the-go creativity.',
            },
            text: '',
            buttons: [],
        },
        features: [
            {
                tagline: 'weight',
                text: 'Under 249g',
            },
            { tagline: 'Sensor range', text: '1/1.3-inch' },
            { tagline: 'imagery', text: '4K/60fps' },
            { tagline: 'duration', text: '30+ Min' },
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
} satisfies Meta<typeof Text_Features_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
