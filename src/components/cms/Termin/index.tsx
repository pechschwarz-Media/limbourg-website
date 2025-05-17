import { AcfHeadline, AcfTextBlock, Settings } from '@/lib/types';

import { Headline, HeadlineProps } from '@/components/ui/Headline/Headline';
import { Section } from '@/components/static/Section/Section';
import { getAppointment } from '@/lib/queries/Terminvergabe/getAppointment';

export type Termin1Props = {
    headline: AcfHeadline;
    settings: Settings;
};

export default async function Termin_1(content: Termin1Props) {
    const appointment = await getAppointment();
    return (
        <Section
            dataComponent="Blog_Teaser_1"
            settings={content?.settings}>
            <div className="container">
                <Headline headline={content.headline} />
            </div>
        </Section>
    );
}
