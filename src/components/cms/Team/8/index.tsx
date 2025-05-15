import { Section } from '@/components/static/Section/Section';
import { Button } from '@/components/ui/Button/Button';
import { Headline } from '@/components/ui/Headline/Headline';
import { AcfButton, AcfHeadline, ImageType, Settings } from '@/lib/types';
import Image from 'next/image';

type Content = {
    headline: AcfHeadline;
    teamboxes: {
        teamimage: ImageType;
        name: string;
        title: string;
        button: AcfButton;
    }[];
    settings: Settings;
};

export default function Team_8(content: Content) {
    return (
        <Section
            dataComponent="Team_8"
            settings={content?.settings}>
            <div className="container">
                <div className="lg:max-w-3xl mx-auto mb-14">
                    <Headline
                        headline={content?.headline}
                        className="text-center"
                        classNameTagline="text-center"
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {content?.teamboxes?.map((box, index) => (
                        <div key={index}>
                            <div className="w-full lg:aspect-[4/6] rounded-md overflow-hidden">
                                <Image
                                    src={box?.teamimage?.url}
                                    alt={box?.teamimage?.alt}
                                    width={box?.teamimage?.width}
                                    height={box?.teamimage?.height}
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h6 className="text-h6 font-medium text-center mt-6 mb-2">{box?.name}</h6>
                                <p className="text-sm text-text-secondary text-center">{box?.title}</p>
                                <Button
                                    as="link"
                                    link={box?.button?.link}
                                    variant={box?.button?.variant}
                                    className="mt-6">
                                    {box?.button?.link?.title}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
