import Danke from '@/components/cms/Danke';

export function generateMetadata() {
    return {
        title: 'Vielen Dank für Ihre Nachricht',
        description: 'Vielen Dank für Ihre Nachricht',
    };
}

export default async function NotThankYou() {
    return <Danke />;
}
