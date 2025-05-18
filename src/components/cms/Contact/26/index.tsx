import { Section } from '@/components/static/Section/Section';
import { Button } from '@/components/ui/Button/Button';
import { Headline } from '@/components/ui/Headline/Headline';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfButton, AcfHeadline, ImageType, Settings } from '@/lib/types';
import Image from 'next/image';

type Content = {
    headline: AcfHeadline;
    locations: {
        teamimage: ImageType;
        name: string;
        title: string;
        text: string;
    }[];
    settings: Settings;
};

export default function Contact_26(content: Content) {
    return (
        <Section
            dataComponent="Contact_26"
            settings={content?.settings}>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {content?.locations?.map((box, index) => (
                        <div key={index}>
                            <div className="w-full rounded-md overflow-hidden">
                                <Image
                                    src={box?.teamimage?.url}
                                    alt={box?.teamimage?.alt}
                                    width={box?.teamimage?.width}
                                    height={box?.teamimage?.height}
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col ">
                                <h4 className="text-h4 font-medium  mt-6 mb-2">{box?.name}</h4>
                                <p className="text-regular text-text-secondary mb-6 underline">{box?.title}</p>
                                <Wysiwyg
                                    text={box.text}
                                    className="!text-sm"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
