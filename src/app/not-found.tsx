import { Section } from '@/components/static/Section/Section';
import { Button } from '@/components/ui/Button/Button';
import { Headline } from '@/components/ui/Headline/Headline';

export async function generateMetadata() {
    return {
        title: '404: Seite nicht gefunden',
        description: 'Die Seite wurde nicht gefunden',
    };
}

export default async function NotFound() {
    return (
        <Section
            settings={{ padding: { top: 'large', bottom: 'large' }, variant: 'light' }}
            dataComponent="not_found">
            <div className="container flex flex-col items-center gap-4">
                <Headline
                    headline={{ headline: '404', style: 'h0', tag: 'h1' }}
                    className="!text-[200px] lg:!text-[400px]"
                />
                <p className="text-large text-text-secondary">Diese Seite konnte nicht gefunden werden</p>
                <Button
                    as="link"
                    link={{ title: 'Zur Startseite', target: '_blank', url: '/' }}
                    variant="dark">
                    Zur Startseite
                </Button>
            </div>
        </Section>
    );
}
