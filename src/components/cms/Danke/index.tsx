'use client';

import { Section } from '@/components/static/Section/Section';
import { Button } from '@/components/ui/Button/Button';

export default function Danke() {
    return (
        <Section
            dataComponent="Danke"
            settings={{ padding: { top: 'large', bottom: 'large' }, variant: 'light' }}
            className="!pt-30 !pb-30">
            <div className="container min-h-[60vh] flex flex-col items-start justify-center lg:max-w-[60%]">
                <div className="mb-12 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[auto_16rem]">
                    <h1 className="text-h0 leading-snug">Vielen Dank für Ihre Nachricht.</h1>
                </div>

                <Button
                    as="link"
                    variant="primary"
                    link={{ url: '/', target: '_blank', title: 'Zur Startseite' }}
                />
            </div>
        </Section>
    );
}
