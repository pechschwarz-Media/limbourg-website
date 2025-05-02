import { Section } from '@/components/static/Section/Section';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';

type Header1Props = {
    textblock: AcfTextBlock;
    position: 'left' | 'center';
    settings: Settings;
};

export default function Header_1(content: Header1Props) {
    return (
        <Section
            dataComponent="Header_1"
            settings={content?.settings}>
            <div className="container">
                <div className={cn('max-w-2xl', content?.position === 'center' && 'mx-auto text-center')}>
                    <div className="mb-theme-3xl">
                        <TextBlock
                            variant={content?.settings?.variant}
                            textblock={content?.textblock}
                            center={content?.position === 'center'}
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
