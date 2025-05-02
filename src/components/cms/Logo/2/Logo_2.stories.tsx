import type { Meta, StoryObj } from '@storybook/react';
import Logo_2 from './Logo_2';

const meta = {
    title: 'Logo/2',
    component: Logo_2,
    tags: ['autodocs'],
    args: {
        headline: {
            style: 'h6',
            tag: 'h2',
            headline: 'Used by the worlds most average companies',
        },
        logos: [
            {
                logo: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '', 
                    width: 1920,
                    height: 1080,
                },
            },
            {
                logo: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '', 
                    width: 1920,
                    height: 1080,
                },
            },
            {
                logo: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '', 
                    width: 1920,
                    height: 1080,
                },
            },
            {
                logo: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '', 
                    width: 1920,
                    height: 1080,
                },
            },
            {
                logo: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '', 
                    width: 1920,
                    height: 1080,
                },
            },
            {
                logo: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '', 
                    width: 1920,
                    height: 1080,
                },
            },
            {
                logo: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '', 
                    width: 1920,
                    height: 1080,
                },
            },
            {
                logo: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '', 
                    width: 1920,
                    height: 1080,
                },
            },
            {
                logo: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '', 
                    width: 1920,
                    height: 1080,
                },
            }
        ],
        settings: {
            variant: 'light',
            padding: {
                top: 'medium',
                bottom: 'medium',
            },
        },
    },
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Logo_2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
