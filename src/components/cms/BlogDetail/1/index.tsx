import { Section } from '@/components/static/Section/Section';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfTextBlock, ComponentData } from '@/lib/types';

type Content = {
    textblock: AcfTextBlock;
};

export default function Blogdetail_1(content: ComponentData<Content>) {
    return (
        <Section
            dataComponent="Blogdetail_1"
            settings={{ padding: { top: 'off', bottom: 'small' }, variant: 'light' }}
            id={content.i.toString()}
            className="scroll-mt-24">
            <div className="container ">
                <TextBlock
                    textblock={content?.textblock}
                    variant="light"
                />
            </div>
        </Section>
    );
}
