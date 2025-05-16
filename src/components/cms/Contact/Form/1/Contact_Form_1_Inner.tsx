'use client';

import { Section } from '@/components/static/Section/Section';
import { Form } from '@/components/ui/Form/GravityForms/Form';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { getForm } from '@/lib/queries/form/getForm';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ContactForm1Props } from './Contact_Form_1';
import Link from 'next/link';

const formWrappervariants = cva('p-theme-3xl md:p-theme-4xl rounded-md', {
    variants: {
        variant: {
            dark: 'bg-neutral-100',
            light: 'bg-neutral-100',
            darkPrimary: 'bg-brand-primary-100',
            lightPrimary: 'bg-brand-primary-100',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

export function Contact_Form_1_Inner({
    content,
    form,
}: {
    content: ContactForm1Props;
    form: Awaited<ReturnType<typeof getForm>>;
}) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });
    return (
        <Section
            dataComponent="Contact_Form_1"
            ref={container}
            settings={content?.settings}>
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-x-theme-3xl gap-y-theme-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-4">
                        <TextBlock
                            variant={content?.settings?.variant}
                            textblock={content?.textblock}
                        />
                        <p className="font-medium mb-4 mt-12">Kontaktinformationen</p>
                        <div className="flex gap-2 flex-col">
                            <Link
                                href={'mailto:' + content?.mail}
                                target="_blank">
                                {content?.mail}
                            </Link>
                            <Link
                                href={'tel:' + content?.phone}
                                target="_blank">
                                {content?.phone}
                            </Link>
                            <p>{content?.adress}</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-7 lg:col-start-6">
                        <div className={cn(formWrappervariants({ variant: content?.settings?.variant }))}>
                            <Form form={form} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
