import getPagesSitemap from '@/lib/queries/pages/getPagesSitemaps';
import getBlogSitemap from '@/lib/queries/posts/getBlogSitemap';
import dateFormat from 'dateformat';

export default async function sitemap() {
    // page
    const pages = await getPagesSitemap();
    const pagesSitemap = await Promise.all(
        pages.map(async (single: any) => {
            return {
                url: single.link,
                changeFrequency: 'weekly',
                priority: 1,
                lastModified: dateFormat(single.date, 'yyyy-mm-dd'),
            };
        }),
    );

    // Blog
    const blog = await getBlogSitemap();

    const blogSitemap = await Promise.all(
        blog.map(async (single: any) => {
            return {
                url: single.link,
                changeFrequency: 'weekly',
                priority: 1,
                lastModified: dateFormat(single.date, 'yyyy-mm-dd'),
            };
        }),
    );

    return [...pagesSitemap, ...blogSitemap];
}
