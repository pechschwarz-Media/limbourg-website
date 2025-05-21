import { Section } from '@/components/static/Section/Section';
import { getPost } from '@/lib/queries/posts/getPost';
import { getPostId } from '@/lib/queries/posts/getPostId';
import { getPostMeta } from '@/lib/queries/posts/getPostMeta';
import { getPostSlugs } from '@/lib/queries/posts/getPostSlugs';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import dateFormat from 'dateformat';
import Image from 'next/image';
import Link from 'next/link';
import ComponentRenderer from '@/lib/ComponentRenderer';
import getOptions from '@/lib/queries/options/getOptions';
import Blog_Teaser_1 from '@/components/cms/Blog/Teaser/1/Blog_Teaser_1';
import { Tag } from '@/components/ui/Tag/Tag';
import { IconArrowLeft } from '@/components/icons/IconArrowLeft';
import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { Headline } from '@/components/ui/Headline/Headline';
import getAuthor from '@/lib/queries/author/getAuthor';
import { Form } from '@/components/ui/Form/GravityForms/Form';
import { getForm } from '@/lib/queries/form/getForm';
import ShareButtons from '@/components/ui/ShareButtons/shareButton';
import BlogContent from '@/components/cms/Content/blogContent';

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
    const postMedia = post?._embedded['wp:featuredmedia']?.at(0);
    const content = post?.acf?.content;
    const options = await getOptions();
    const authorIds = post?.acf?.authors?.toString();
    const authors = await getAuthor(authorIds);
    const form = await getForm({ id: 2 });
    let counter = 1;

    return (
        <>
            <Section
                dataComponent="Blog Detail"
                settings={{ padding: { top: 'medium', bottom: 'medium' }, variant: 'light' }}>
                <div className="container pt-20 lg:pt-28">
                    <div className="flex flex-col gap-20 mb-20">
                        <div className="lg:max-w-2/3">
                            <Link
                                href="/blog"
                                className="flex items-center mb-12">
                                <IconChevronLeft />
                                Alle Beiträge
                            </Link>
                            <div className="flex gap-4 items-center mb-4">
                                <Tag variant="light">{parse(post?._embedded?.['wp:term']?.[0]?.[0]?.name)}</Tag>
                                {post?.date && (
                                    <p className="text-text-secondary">{dateFormat(post?.date, 'dd.mm.yyyy')}</p>
                                )}
                            </div>

                            <Headline
                                headline={{ style: 'h2', tagline: '', headline: post?.title?.rendered, tag: 'h1' }}
                            />
                        </div>

                        <div className="h-[600px] w-full rounded-md overflow-hidden">
                            <Image
                                src={postMedia?.source_url ?? ''}
                                alt={postMedia?.alt_text ?? ''}
                                width={postMedia?.media_details?.width}
                                height={postMedia?.media_details?.height}
                                className="size-full object-cover"
                                quality={100}
                            />
                        </div>
                    </div>
                    <BlogContent
                        content={content}
                        authors={authors}
                        form={form}
                        options={options}
                        post={post}
                    />
                </div>
            </Section>
            {Array.isArray(content) && content.length > 0 && (
                <ComponentRenderer
                    content={options?.content?.content}
                    options={options}
                />
            )}
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
