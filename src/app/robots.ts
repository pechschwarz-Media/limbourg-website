import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    if (process.env.NODE_ENV === 'development') {
        return {
            rules: {
                userAgent: '*',
                disallow: '/',
            },
            sitemap: 'https://dr-limbourg.de/sitemap.xml',
        };
    }

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://dr-limbourg.de/sitemap.xml',
    };
}
