'use client';

import { AcfHeadline, AcfMedia, AcfTextBlock, ImageType, Settings } from '@/lib/types';
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

export type Content32Props = {
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

export default function Content_32(content: Content32Props) {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    return (
        <Section
            dataComponent="Content_32"
            settings={content?.settings}>
            <div className="container grid grid-cols-1 items-start lg:grid-cols-3 gap-5 lg:gap-20">
                <div className="lg:col-span-1 bg-neutral-100 p-8 rounded-md lg:sticky lg:top-24 lg:left-0 lg:bottom-0 lg:right-0 lg:block justify-end">
                    <h6 className="text-h6 font-medium mb-6 hyphens-auto">{content?.tabletitle}</h6>
                    <div className="flex flex-col gap-3">
                        {content?.content?.map((item, index) => (
                            <Link
                                href={`#${index}`}
                                key={index}
                                className={cn(
                                    'flex gap-2 items-start transition-all duration-200 border-neutral-400',
                                    activeIndex === index
                                        ? 'text-text-primary font-medium border-l-2 pl-3'
                                        : 'text-neutral-600 hover:text-text-primary hover:border-l-2 hover:pl-3 hover:font-medium',
                                )}>
                                <div className="leading-body">{index + 1 + '.'}</div>
                                <Wysiwyg
                                    text={item?.title}
                                    className="leading-body"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-2 flex flex-col gap-11">
                    {content?.content?.map((item, index) => (
                        <InView
                            as="div"
                            key={index}
                            threshold={0.6}
                            rootMargin="0% 0% 30% 0%"
                            onChange={(inView) => {
                                if (inView) {
                                    setActiveIndex(index);
                                }
                            }}
                            id={index.toString()}
                            className="scroll-mt-24 flex flex-col gap-6">
                            {item.sections?.map((item, index) => (
                                <div key={index}>
                                    {item?.acf_fc_layout === 'text' && (
                                        <div>
                                            <div
                                                id={index.toString()}
                                                className="scroll-mt-24 flex flex-col gap-6">
                                                <TextBlock
                                                    variant="light"
                                                    textblock={item?.textblock}
                                                    key={index}
                                                />
                                            </div>
                                        </div>
                                    )}
                                    {item?.acf_fc_layout === 'media' && (
                                        <div className="w-full rounded-md overflow-hidden my-8">
                                            <Media
                                                media={item?.media}
                                                className="size-full"
                                            />
                                        </div>
                                    )}
                                    {item?.acf_fc_layout === 'boxes' && (
                                        <div>
                                            <Headline
                                                headline={item?.headline}
                                                className="mb-10"
                                            />
                                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 justify-between">
                                                {item?.box?.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-neutral-100 w-full p-6 rounded-md">
                                                        <Image
                                                            src={item?.icon?.url}
                                                            alt={item?.icon?.alt}
                                                            width={item?.icon?.width}
                                                            height={item?.icon?.height}
                                                            className="mb-6"
                                                        />
                                                        <h6 className="mb-2 text-h6 font-medium hyphens-auto">
                                                            {item?.title}
                                                        </h6>
                                                        <Wysiwyg
                                                            text={item?.text}
                                                            className="text-neutral-600 text-small"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {item?.acf_fc_layout === 'boxeswithtext' && (
                                        <div>
                                            <Headline
                                                headline={item?.headline}
                                                className="mb-10"
                                            />
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                                                {item?.box?.map((item, index) => (
                                                    <div key={index}>
                                                        <h6 className="font-medium mb-2 hyphens-auto">{item?.title}</h6>
                                                        <Wysiwyg
                                                            text={item?.text}
                                                            className="text-regular text-neutral-600"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {item?.acf_fc_layout === 'medialeftright' && (
                                        <div
                                            key={index}
                                            className="my-8">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
                                                {item?.mediarepeat?.map((item, index) => (
                                                    <div key={index}>
                                                        <div
                                                            key={index}
                                                            className="w-full h-full rounded-md overflow-hidden">
                                                            <Media
                                                                media={item?.media}
                                                                className="size-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {item?.acf_fc_layout === 'list' && (
                                        <div>
                                            <Headline
                                                headline={item?.headline}
                                                className="mb-10"
                                            />
                                            <div className="flex flex-col gap-4">
                                                {item?.listitem.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex gap-4
                                                     items-center">
                                                        <Dot className="text-neutral-300" />
                                                        <Wysiwyg text={item?.text} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </InView>
                    ))}
                </div>
            </div>
        </Section>
    );
}
