import { getPreview } from '@/lib/queries/preview/getPreview';
import { AcfHeadline, AcfMedia, AcfTextBlock, ImageType, Settings } from '@/lib/types';
import { Section } from '@/components/static/Section/Section';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { Media } from '@/components/ui/Media/Media';
import Image from 'next/image';
import { Headline } from '@/components/ui/Headline/Headline';
import Dot from '@/components/icons/dot';
import Link from 'next/link';

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

export default async function Content_32(content: Content32Props) {
    return (
        <Section
            dataComponent="Content_32"
            settings={content?.settings}>
            <div className="container grid grid-cols-1 items-start lg:grid-cols-3 gap-5 lg:gap-20">
                <div className="lg:col-span-1 bg-neutral-100 p-8 rounded-md">
                    <h6 className="text-h6 font-medium mb-6">{content?.tabletitle}</h6>
                    <div className="flex flex-col gap-3">
                        {content?.content?.map((item, index) => (
                            <Link
                                href={`#${index}`}
                                key={index}
                                className="flex gap-2 items-start text-neutral-600 border-neutral-400 hover:text-text-primary transition-all duration-200 hover:border-l-2 hover:pl-3 hover:font-medium">
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
                        <div
                            key={index}
                            id={index.toString()}
                            className="scroll-mt-24">
                            {item.sections?.map((item, index) => (
                                <div key={index}>
                                    {item?.acf_fc_layout === 'text' && (
                                        <TextBlock
                                            variant="light"
                                            textblock={item?.textblock}
                                            key={index}></TextBlock>
                                    )}
                                    {item?.acf_fc_layout === 'media' && (
                                        <div
                                            key={index}
                                            className="w-full rounded-md overflow-hidden mt-12">
                                            <Media
                                                media={item?.media}
                                                className="size-full"
                                            />
                                        </div>
                                    )}
                                    {item?.acf_fc_layout === 'boxes' && (
                                        <div key={index}>
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
                                                        <h6 className="mb-2 text-h6 font-medium">{item?.title}</h6>
                                                        <Wysiwyg
                                                            text={item?.text}
                                                            className="text-neutral-600"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {item?.acf_fc_layout === 'boxeswithtext' && (
                                        <div key={index}>
                                            <Headline
                                                headline={item?.headline}
                                                className="mb-10"
                                            />
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                                                {item?.box?.map((item, index) => (
                                                    <div key={index}>
                                                        <h6 className="font-medium mb-2">{item?.title}</h6>
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
                                        <div key={index}>
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
                                        <div key={index}>
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
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
