import Image from 'next/image';
import parse from 'html-react-parser';
import { AcfMedia, ComponentData } from '@/lib/types';
import { Section } from '@/components/static/Section/Section';
import { Media } from '@/components/ui/Media/Media';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';

type Content = {
    media: AcfMedia;
    text: string;
};

export default function Blogdetail_2(content: ComponentData<Content>) {
    return (
        <Section
            dataComponent="Blogdetail_2"
            settings={{ padding: { top: 'off', bottom: 'small' }, variant: 'light' }}>
            <div className="container">
                <div className="pb-5 md:pb-6">
                    <div className="h-[550px]">
                        <Media
                            media={content?.media}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <Wysiwyg
                        className="mt-2"
                        text={content.text}
                    />
                </div>
            </div>
        </Section>
    );
}
