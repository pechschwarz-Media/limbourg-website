'use client';

import {
    AcfHeadline,
    AcfMedia,
    AcfTextBlock,
    FlexibleContent,
    FlexibleLayout,
    FormProps,
    ImageType,
    Options,
    PostProps,
    Settings,
} from '@/lib/types';
import { Section } from '@/components/static/Section/Section';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { Media } from '@/components/ui/Media/Media';
import Image from 'next/image';
import { Headline } from '@/components/ui/Headline/Headline';
import Dot from '@/components/icons/dot';
import Link from 'next/link';
import React from 'react';
import { InView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { TeamProps } from '@/lib/queries/author/getAuthor';
import { Form } from '@/components/ui/Form/GravityForms/Form';
import ShareButtons from '@/components/ui/ShareButtons/shareButton';
import ComponentRenderer from '@/lib/ComponentRenderer';
import { inView } from 'framer-motion';

export default function BlogContent({
    authors,
    form,
    options,
    post,
}: {
    authors: TeamProps[] | null;
    form: FormProps;
    options: Options;
    post: PostProps;
}) {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    return (
        <Section
            dataComponent="Blog Content"
            settings={{ padding: { top: 'off', bottom: 'medium' }, variant: 'light' }}>
            <div className="container grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
                <div className="lg:sticky lg:top-24 lg:left-0 lg:bottom-0 lg:right-0 lg:block justify-end">
                    <div className="bg-neutral-100 p-8 rounded-md mb-12">
                        <h5 className="text-h5 mb-4 font-medium hyphens-auto lg:hyphens-none">Inhaltsverzeichnis</h5>
                        <div>
                            <ul className="mb-6xl flex flex-col">
                                {Array.isArray(post.acf.content) &&
                                    post.acf.content.length > 0 &&
                                    post.acf.content.map((post: any, index) => {
                                        if (post) {
                                            return (
                                                <li
                                                    className={cn(
                                                        'flex  items-start transition-all duration-200 border-neutral-400 mb-1 last:mb-0',
                                                        activeIndex === index
                                                            ? 'text-text-primary font-medium border-l-2 pl-3'
                                                            : 'text-neutral-600 hover:text-text-primary hover:border-l-2 hover:pl-3 hover:font-medium',
                                                    )}
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
                                        <p className="text-regular text-text-secondary">{author?.acf?.jobtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* <hr className="bg-border-secondary mb-12"></hr>
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
                    </div> */}
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
                {post?.acf?.content && (
                    <div>
                        {post.acf.content.map((blogitem: any, index) => (
                            <InView
                                as="div"
                                key={index}
                                threshold={0.6}
                                rootMargin="15% 0%"
                                delay={100}
                                onChange={(inView) => {
                                    if (inView) {
                                        setActiveIndex(index);
                                    }
                                }}
                                id={(index + 1).toString()}
                                className="scroll-mt-24 flex flex-col gap-6 py-6 first:pt-0 last:pb-0">
                                {blogitem?.acf_fc_layout === 'blogdetail_1' && (
                                    <TextBlock
                                        textblock={blogitem.textblock}
                                        variant="light"
                                    />
                                )}
                                {blogitem?.acf_fc_layout === 'blogdetail_2' && (
                                    <div className="pb-5 md:pb-6">
                                        <div className="h-[550px] rounded-md overflow-hidden">
                                            <Media
                                                media={blogitem?.media}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <Wysiwyg
                                            className="mt-2"
                                            text={blogitem.text}
                                        />
                                    </div>
                                )}
                                {blogitem?.acf_fc_layout === 'blogdetail_3' && (
                                    <Wysiwyg
                                        text={blogitem?.text}
                                        className="border-l-2 pl-4 border-neutral-300"
                                    />
                                )}
                            </InView>
                        ))}
                    </div>
                )}
            </div>
        </Section>
    );
}
