import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { AcfButton, AcfHeadline, AcfTextBlock, Settings } from '@/lib/types';
import parse from 'html-react-parser';
import { Button } from '@/components/ui/Button/Button';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';

type Header47Props = {
    headline: AcfHeadline;
    text: string;
    settings: Settings;
};

export default function Header_47(content: Header47Props) {
    return (
        <Section
            dataComponent="Header_47"
            settings={content?.settings}>
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
                <Headline headline={content?.headline} />
                <Wysiwyg text={content?.text} />
            </div>
        </Section>
    );
}
