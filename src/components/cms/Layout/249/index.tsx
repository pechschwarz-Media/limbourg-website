import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { AcfButton, AcfHeadline, AcfLink, AcfMedia, Settings } from '@/lib/types';
import parse from 'html-react-parser';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Media } from '@/components/ui/Media/Media';

type Header1Props = {
    headline: AcfHeadline;
    boxes: {
        media: AcfMedia;
        link: AcfLink;
    }[];
    settings: Settings;
};

export default function Layout_249(content: Header1Props) {
    return (
        <Section
            dataComponent="Layout_249"
            settings={content?.settings}>
            <div className="container">
                <Headline
                    headline={content?.headline}
                    className="mb-theme-6xl"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {content?.boxes?.map((box, index) => (
                        <Link
                            key={index}
                            href={box?.link?.url}
                            target={box?.link?.target}>
                            <Media
                                media={box?.media}
                                className="size-full object-cover"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
}
