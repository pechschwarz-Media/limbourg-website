import type { Meta, StoryObj } from '@storybook/react';
import Blog_Teaser_1 from './Blog_Teaser_1_Preview';

const meta = {
    title: 'Blog/Teaser/1',
    component: Blog_Teaser_1,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h2',
                tag: 'h2',
                tagline: 'Newest Insights',
                headline: 'News & Blog',
            },
            text: '',
            buttons: [],
        },
        posttype: 'post',
        category: false,
        amount: 3,
        showAuthor: true,
        showButton: false,
        textAlign: 'center',
        settings: {
            variant: 'light',
            padding: {
                top: 'medium',
                bottom: 'medium',
            },
        },
    },
    argTypes: {
        posttype: {
            description: 'Der Post-Type',
            control: { type: 'text' },
        },
        amount: {
            description: 'Die Anzahl der Posts',
            control: { type: 'number' },
        },
        showAuthor: {
            description: 'Den Autor des Posts anzeigen',
            control: { type: 'boolean' },
        },
        showButton: {
            description: 'Den "Mehr lesen"-Button anzeigen',
            control: { type: 'boolean' },
        },
        textAlign: {
            description: 'Die Ausrichtung des Textes',
            options: ['left', 'center'],
            control: { type: 'select' },
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Blog_Teaser_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
