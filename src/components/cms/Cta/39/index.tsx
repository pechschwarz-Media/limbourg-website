import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { Media } from '@/components/ui/Media/Media';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfHeadline, AcfMedia, Settings } from '@/lib/types';

type Content = {
    headline: AcfHeadline;
    media: AcfMedia;
    settings: Settings;
};

export default function Cta_39(content: Content) {
    return (
        <Section
            dataComponent="Cta_39"
            settings={content?.settings}>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-5 mb-5 gap-6 justify-between lg:gap-20 lg:mb-20 bg-neutral-100 rounded-md items-center">
                    <div className="p-12 col-span-3">
                        <Headline headline={content?.headline} />
                    </div>
                    <div className="col-span-2 lg:h-[400px]">
                        <Media
                            media={content?.media}
                            className="size-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
