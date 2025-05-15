import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { Media } from '@/components/ui/Media/Media';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfHeadline, AcfMedia, Settings } from '@/lib/types';

type Content = {
    headline: AcfHeadline;
    text: string;
    media: AcfMedia;
    settings: Settings;
};

export default function Layout_115(content: Content) {
    return (
        <Section
            dataComponent="Layout_115"
            settings={content?.settings}>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-5 gap-6 lg:gap-20 lg:mb-20">
                    <Headline headline={content?.headline} />
                    <Wysiwyg text={content?.text} />
                </div>
                <div className="w-full aspect-video rounded-md overflow-hidden">
                    <Media media={content?.media} />
                </div>
            </div>
        </Section>
    );
}
