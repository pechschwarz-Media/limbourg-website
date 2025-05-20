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
import { AcfTextBlock, FlexibleContent } from '@/lib/types';
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
                dataComponent="Content_27"
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
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
                        <div className="lg:sticky lg:top-24 lg:left-0 lg:bottom-0 lg:right-0 lg:block justify-end">
                            <div className="bg-neutral-100 p-8 rounded-md mb-12">
                                <h5 className="text-h5 mb-4 font-semibold hyphens-auto lg:hyphens-none">
                                    Inhaltsverzeichnis
                                </h5>
                                <div>
                                    <ul className="mb-6xl flex flex-col gap-3">
                                        {Array.isArray(content) &&
                                            content.length > 0 &&
                                            content
                                                .filter((post) => post?.acf_fc_layout === 'blogdetail_1')
                                                .map((post: any, index) => {
                                                    if (post) {
                                                        return (
                                                            <li
                                                                className="transition-all border-brand-primary text-text-secondary hover:text-black hover:border-l-2 hover:pl-2"
                                                                key={index}>
                                                                <Link
                                                                    className="text-base transition"
                                                                    href={`#${index + 1}`}>
                                                                    {post?.textblock?.headline?.headline}
                                                                </Link>
                                                            </li>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                    </ul>
                                </div>
                            </div>
                            {authors && (
                                <div className="flex flex-col gap-6 mb-12">
                                    <Headline headline={{ style: 'h5', tagline: '', headline: 'Autoren', tag: 'h5' }} />
                                    {authors.map((author, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-row gap-4 items-center">
                                            <div className="size-14 rounded-full overflow-hidden">
                                                <Image
                                                    src={author?.acf?.portrait?.url}
                                                    alt={author?.acf?.portrait?.alt}
                                                    width={author?.acf?.portrait?.width}
                                                    height={author?.acf?.portrait?.height}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-regular font-medium">{author?.title?.rendered}</p>
                                                <p className="text-regular text-text-secondary">
                                                    {author?.acf?.jobtitle}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <hr className="bg-border-secondary mb-12"></hr>
                            <div className="flex flex-col gap-4 mb-12">
                                <Headline
                                    headline={{
                                        style: 'h5',
                                        tagline: '',
                                        headline: 'Newsletter abonnieren',
                                        tag: 'h5',
                                    }}
                                />
                                <Form form={form} />
                            </div>
                            <hr className="bg-border-secondary mb-12"></hr>
                            <div className="flex flex-col gap-4 mb-12">
                                <Headline
                                    headline={{
                                        style: 'h5',
                                        tagline: '',
                                        headline: 'Beitrag teilen',
                                        tag: 'h5',
                                    }}
                                />
                                <ShareButtons post={post} />
                            </div>
                        </div>

                        {Array.isArray(content) && content.length > 0 && (
                            <div>
                                <ComponentRenderer
                                    content={content}
                                    options={options}
                                />
                            </div>
                        )}
                    </div>
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
