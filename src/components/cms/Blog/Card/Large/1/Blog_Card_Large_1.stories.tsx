import type { Meta, StoryObj } from '@storybook/react';
import Blog_Card_Large_1 from './Blog_Card_Large_1';

const meta = {
    title: 'Blog/Card/Large/1',
    component: Blog_Card_Large_1,
    tags: ['autodocs'],
    args: {
        post: {
            id: 0,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            excerpt:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            categories: [
                { id: 0, name: 'Blog', slug: 'blog' },
                { id: 0, name: 'Career', slug: 'career' },
            ],
            thumbnail: '/placeholder.jpg',
            permalink: '#',
            date: '01.01.2000',
            author: {
                name: 'Max Mustermann',
                profileimage: {
                    url: '/placeholder.jpg',
                    alt: 'Max Mustermann',
                    width: 100,
                    height: 100,
                    type: 'image',
                },
            },
        },
        variant: 'light',
        showAuthor: true,
        showButton: false,
    },
    argTypes: {
        variant: {
            description: 'Das Schema der Komponente',
            options: ['light', 'dark', 'lightPrimary', 'darkPrimary'],
            control: { type: 'select' },
        },
        showAuthor: {
            description: 'Den Autor des Posts anzeigen',
            control: { type: 'boolean' },
        },
        showButton: {
            description: 'Den "Mehr lesen"-Button anzeigen',
            control: { type: 'boolean' },
        },
    },
} satisfies Meta<typeof Blog_Card_Large_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
