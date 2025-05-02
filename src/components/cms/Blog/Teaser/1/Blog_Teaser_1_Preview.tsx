'use client';

import { AcfTextBlock, Settings } from '@/lib/types';
import Blog_Teaser_1_Inner from './Blog_Teaser_1_Inner';

export type BlogTeaser1Props = {
    textblock: AcfTextBlock;
    amount: number;
    posttype: string;
    category: number[] | false;
    showAuthor: true;
    showButton: false;
    textAlign: 'left' | 'center';
    settings: Settings;
};

export default function Blog_Teaser_1(content: BlogTeaser1Props) {
    return (
        <Blog_Teaser_1_Inner
            content={content}
            posts={[
                {
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
                {
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
                {
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
            ]}
        />
    );
}
