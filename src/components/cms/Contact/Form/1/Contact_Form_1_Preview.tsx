import { Section } from '@/components/static/Section/Section';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

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

type ContactForm1Props = {
    textblock: AcfTextBlock;
    form: number;
    settings: Settings;
};

export default function Contact_Form_1(content: ContactForm1Props) {
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
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-7 lg:col-start-6">
                        <div className={cn(formWrappervariants({ variant: content?.settings?.variant }))}>
                            Hier folgt das Formular
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
