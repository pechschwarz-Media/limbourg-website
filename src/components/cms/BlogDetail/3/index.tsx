import { Section } from '@/components/static/Section/Section';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { ComponentData } from '@/lib/types';

type Content = {
    text: string;
};

export default function Blogdetail_3(content: ComponentData<Content>) {
    return (
        <Section
            dataComponent="Blogdetail_3"
            settings={{ padding: { top: 'off', bottom: 'small' }, variant: 'light' }}>
            <div className="container">
                <Wysiwyg text={content?.text} />
            </div>
        </Section>
    );
}
