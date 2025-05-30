import { getPost } from '@/lib/queries/posts/getPost';
import { getPostId } from '@/lib/queries/posts/getPostId';
import { getPostMeta } from '@/lib/queries/posts/getPostMeta';
import { getPostSlugs } from '@/lib/queries/posts/getPostSlugs';
import { notFound } from 'next/navigation';
import ComponentRenderer from '@/lib/ComponentRenderer';
import getOptions from '@/lib/queries/options/getOptions';
import Blog_Teaser_1 from '@/components/cms/Blog/Teaser/1/Blog_Teaser_1';
import getAuthor from '@/lib/queries/author/getAuthor';
import { getForm } from '@/lib/queries/form/getForm';
import BlogContent from '@/components/cms/Blog/BlogContent';
import BlogHeader from '@/components/cms/Blog/BlogHeader';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
    const posts = await getPostSlugs();

    const params = posts.map((post) => {
        return {
            slug: post.slug,
        };
    });

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const id = await getPostId({ slug: (await params).slug });

    if (id) {
        const metadata = await getPostMeta({ id });
        return {
            title: metadata?.title,
            description: metadata?.description || '',
            robots: {
                index: metadata?.robots?.index,
                follow: metadata?.robots?.follow,
            },
        };
    }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const id = await getPostId({ slug: (await params).slug });

    if (!id) {
        notFound();
    }

    const post = await getPost({ id });
    const options = await getOptions();
    const authorIds = post?.acf?.authors?.toString();
    const authors = await getAuthor(authorIds);
    const form = await getForm({ id: 2 });
    let counter = 1;

    return (
        <>
            <BlogHeader post={post} />
            <BlogContent
                authors={authors}
                form={form}
                options={options}
                post={post}
            />

            <ComponentRenderer
                content={options?.content?.content}
                options={options}
            />
            <Blog_Teaser_1
                textblock={{
                    headline: {
                        headline: 'Verwandte Beiträge',
                        tagline: '',
                        tag: 'h4',
                        style: 'h4',
                    },
                }}
                amount={3}
                allposts={false}
                posttype="post"
                category={[post?.acf?.category]}
                showAuthor={false}
                showButton={false}
                textAlign="left"
                settings={{ variant: 'light', padding: { top: 'medium', bottom: 'medium' } }}
            />
        </>
    );
}
