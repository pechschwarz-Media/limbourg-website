'use client';

import { AcfTextBlock, Settings } from '@/lib/types';
import Blog_Overview_1_Inner from './Blog_Overview_1_Inner';

export type BlogOverview1Props = {
    textblock: AcfTextBlock;
    amount: number;
    posttype: string;
    category: number[] | false;
    featured: number | false;
    showAuthor: true;
    showButton: false;
    textAlign: 'left' | 'center';
    settings: Settings;
};

export default function Blog_Overview_1(content: BlogOverview1Props) {
    return (
        <Blog_Overview_1_Inner
            content={content}
            featured={{
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
            }}
            categories={[
                { id: 0, name: 'Blog', slug: 'blog' },
                { id: 1, name: 'Case Studies', slug: 'case-studies' },
            ]}
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
