import type { Meta, StoryObj } from '@storybook/react';
import Testimonial_LogoQuoteName_1 from './Testimonial_LogoQuoteName_1';

const meta = {
    title: 'Testimonial/LogoQuoteName/1',
    component: Testimonial_LogoQuoteName_1,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h2',
                tag: 'h2',
                tagline: 'Success Stories',
                headline: 'Dont just take our word for it',
            },
            text: '<p>Moss hat unsere Erwartungen weit übertroffen. Es ist brillant, intuitiv und einfach zu bedienen. Die Flexibilität, die Belegerfassung und die Kartentypenoptionen sind unglaublich.</p>',
            buttons: [],
        },
        testimonials: [
            {
                testimonial:
                    '<p>Moss hat unsere Erwartungen weit übertroffen. Es ist brillant, intuitiv und einfach zu bedienen. Die Flexibilität, die Belegerfassung und die Kartentypenoptionen sind unglaublich.</p>',
                author: 'Jana Pier, Marketing',
                media: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 1920,
                    height: 1080,
                },
            },
            {
                testimonial:
                    '<p>Moss hat unsere Erwartungen weit übertroffen. Es ist brillant, intuitiv und einfach zu bedienen. Die Flexibilität, die Belegerfassung und die Kartentypenoptionen sind unglaublich.</p>',
                author: 'Jana Pier, Marketing',
                media: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 1920,
                    height: 1080,
                },
            },
            {
                testimonial:
                    '<p>Moss hat unsere Erwartungen weit übertroffen. Es ist brillant, intuitiv und einfach zu bedienen. Die Flexibilität, die Belegerfassung und die Kartentypenoptionen sind unglaublich.</p>',
                author: 'Jana Pier, Marketing',
                media: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 1920,
                    height: 1080,
                },
            },
            {
                testimonial:
                    '<p>Moss hat unsere Erwartungen weit übertroffen. Es ist brillant, intuitiv und einfach zu bedienen. Die Flexibilität, die Belegerfassung und die Kartentypenoptionen sind unglaublich.</p>',
                author: 'Jana Pier, Marketing',
                media: {
                    url: 'placeholder.jpg',
                    type: 'image',
                    alt: '',
                    width: 1920,
                    height: 1080,
                },
            },
        ],
        loop: true,
        autoplay: true,
        duration: 6000,
        settings: {
            variant: 'light',
            padding: {
                top: 'medium',
                bottom: 'medium',
            },
        },
    },
    argTypes: {},
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Testimonial_LogoQuoteName_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
