'use client';

import {
    AcfHeadline,
    AcfMedia,
    AcfTextBlock,
    FlexibleContent,
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

export type BlogContentProps = {
    tabletitle: string;
    content: {
        title: string;
        sections: {
            acf_fc_layout: string;
            textblock: AcfTextBlock;
            media: AcfMedia;
            mediarepeat: { media: AcfMedia }[];
            headline: AcfHeadline;
            box: { icon: ImageType; title: string; text: string }[];
            listitem: { text: string }[];
        }[];
    }[];
    settings: Settings;
};

export default function BlogContent({
    content,
    authors,
    form,
    options,
    post,
}: {
    content: FlexibleContent;
    authors: TeamProps[] | null;
    form: FormProps;
    options: Options;
    post: PostProps;
}) {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-24 lg:left-0 lg:bottom-0 lg:right-0 lg:block justify-end">
                <div className="bg-neutral-100 p-8 rounded-md mb-12">
                    <h5 className="text-h5 mb-4 font-medium hyphens-auto lg:hyphens-none">Inhaltsverzeichnis</h5>
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
                                    <p className="text-regular text-text-secondary">{author?.acf?.jobtitle}</p>
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
    );
}
