import { Section } from '@/components/static/Section/Section';
import { Settings } from '@/lib/types';
import Script from 'next/script';

type CrisalixContent = {
    settings: Settings;
};

export default function Crisalix(content: CrisalixContent) {
    return (
        <Section
            dataComponent="Crisalix"
            settings={content?.settings}>
            <div className="container">
                <div className="crisalix_widget_wrap_6efd29aa" />
                <Script
                    src="https://pro.crisalix.com/reviews_widget.js?token=208177cba0bbb2e6adc0dff6f8bc9812&type=website&selector=crisalix_widget_wrap_6efd29aa"
                    strategy="lazyOnload"
                />
            </div>
        </Section>
    );
}
