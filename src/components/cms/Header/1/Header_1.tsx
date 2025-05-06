import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { AcfButton, AcfHeadline, Settings } from '@/lib/types';
import parse from 'html-react-parser';
import { Button } from '@/components/ui/Button/Button';

type Header1Props = {
    headline: AcfHeadline;
    text: string;
    button: AcfButton;
    settings: Settings;
};

export default function Header_1(content: Header1Props) {
    return (
        <Section
            dataComponent="Header_1"
            settings={content?.settings}>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20">
                    <Headline headline={content?.headline} />
                    <div>
                        {parse(content.text)}
                        {content?.button && (
                            <Button
                                as="link"
                                link={content?.button?.link}
                                variant={content?.button?.variant}
                                className="mt-10">
                                {content?.button?.link?.title}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
}
