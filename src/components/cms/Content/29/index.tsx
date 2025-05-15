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

export type Content29Props = {
    headline: AcfHeadline;
    content: {
        acf_fc_layout: string;
        text: string;
        media: AcfMedia;
        subline: string;
        headline: AcfHeadline;
    }[];
    settings: Settings;
};

export default async function Content_29(content: Content29Props) {
    return (
        <Section
            dataComponent="Content_29"
            settings={content?.settings}>
            <div className="container lg:max-w-3xl lg:mx-auto">
                <Headline
                    headline={content?.headline}
                    className="mb-6"
                />
                <div className="lg:col-span-2 flex flex-col gap-11">
                    {content?.content?.map((item, index) => (
                        <div key={index}>
                            {item?.acf_fc_layout === 'text' && (
                                <Wysiwyg
                                    key={index}
                                    text={item?.text}
                                />
                            )}
                            {item?.acf_fc_layout === 'media' && (
                                <div key={index}>
                                    <div className="w-full rounded-md overflow-hidden">
                                        <Media media={item?.media} />
                                    </div>
                                    <Wysiwyg
                                        text={item?.text}
                                        className="text-neutral-600 mt-2"
                                    />
                                </div>
                            )}
                            {item?.acf_fc_layout === 'quote' && (
                                <Wysiwyg
                                    key={index}
                                    text={item?.text}
                                    className="border-l-2 border-neutral-300 pl-4 font-medium"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
