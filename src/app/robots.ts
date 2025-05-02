import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: process.env.NODE_ENV === 'production' ? '/' : '',
            disallow: process.env.NODE_ENV === 'production' ? '' : '/',
        },
        sitemap: 'https://acme.com/sitemap.xml',
    };
}
