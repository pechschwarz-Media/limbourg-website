import type { Meta, StoryObj } from '@storybook/react';
import Text_3 from './Text_3';

const meta = {
    title: 'Text/3',
    component: Text_3,
    tags: ['autodocs'],
    args: {
        headline: {
            tagline: 'stunning features',
            style: 'h2',
            tag: 'h2',
            headline:
                'Working with thoughtful founders in the 4 key industries that we believe will be transformed by 2030.',
        },
        text_left:
            '<p>Pacific Partners is an early-stage venture capital fund focused on identifying and investing in technology companies across multiple verticals.</p>',
        text_right:
            '<p>Pacific Partners is an early-stage venture capital fund focused on identifying and investing in technology companies across multiple verticals.</p>',
        settings: {
            variant: 'light',
            padding: {
                top: 'medium',
                bottom: 'medium',
            },
        },
    },
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Text_3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
