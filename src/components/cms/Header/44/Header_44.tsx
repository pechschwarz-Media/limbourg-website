import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { AcfButton, AcfHeadline, Settings } from '@/lib/types';
import parse from 'html-react-parser';
import { Button } from '@/components/ui/Button/Button';

type Header44Props = {
    headline: AcfHeadline;
    settings: Settings;
};

export default function Header_44(content: Header44Props) {
    return (
        <Section
            dataComponent="Header_44"
            settings={content?.settings}
            className="!pt-52">
            <div className="container">
                <div className="max-w-3xl">
                    <Headline headline={content?.headline} />
                </div>
            </div>
        </Section>
    );
}
